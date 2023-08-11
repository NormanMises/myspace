<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserInfo :user="user" @follow="follow" @unfollow="unfollow"/>
                <UserWrite v-if="is_me" @submit="submit"/>
            </div>
            <div class="col-9">
                <UserPosts :posts="posts"/>
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import UserInfo from "@/components/UserInfo.vue";
import UserPosts from "@/components/UserPosts.vue";
import UserWrite from "@/components/UserWrite.vue";
import {computed, reactive} from "vue";
import {useRoute} from "vue-router";
import $ from 'jquery';
import {useStore} from "vuex";

export default {
    name: "UserProfileView",
    components: {
        ContentBase,
        UserInfo,
        UserPosts,
        UserWrite
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const userId = parseInt(route.params.userId);
        const user = reactive({});
        const posts = reactive({});

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                user.id = resp.id;
                user.username = resp.username;
                user.photo = resp.photo;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
            }
        })

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                posts.count = resp.length;
                posts.posts = resp;
            }
        })

        const follow = () => {
            if (user.is_followed) return;
            user.is_followed = true;
            user.followerCount++;
        };

        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount--;
        };

        const submit = (content) => {
            posts.count++;
            posts.posts.unshift({
                id: posts.count,
                userid: 1,
                content: content,
            })
        };

        const is_me = computed(() => userId === store.state.user.id);

        return {
            user,
            posts,
            follow,
            unfollow,
            submit,
            is_me,
        }
    }
}
</script>

<style scoped>

</style>