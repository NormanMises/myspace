<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserInfo :user="user" @follow="follow" @unfollow="unfollow"/>
                <UserWrite @submit="submit"/>
            </div>
            <div class="col-9">
                <UserPosts :posts="posts" />
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import UserInfo from "@/components/UserInfo.vue";
import UserPosts from "@/components/UserPosts.vue";
import UserWrite from "@/components/UserWrite.vue";
import {reactive} from "vue";

export default {
    name: "UserProfileView",
    components: {
        ContentBase,
        UserInfo,
        UserPosts,
        UserWrite
    },
    setup() {
        const user = reactive({
            id: 1,
            username: "yhf",
            lastName: "y",
            firstName: "hf",
            followerCount: 0,
            is_followed: false,
        });

        const posts = reactive({
                count: 3,
                posts: [
                    {
                        id: 1,
                        userid: 1,
                        content: "111111"
                    },
                    {
                        id: 2,
                        userid: 2,
                        content: "22222"
                    }, {
                        id: 3,
                        userid: 3,
                        content: "333333"
                    },
                ]
            }
        )

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
        }

        return {
            user,
            posts,
            follow,
            unfollow,
            submit,
        }
    }
}
</script>

<style scoped>

</style>