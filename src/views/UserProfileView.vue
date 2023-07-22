<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserInfo :user="user"/>
            </div>
            <div class="col-9">
                <UserPosts/>
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import UserInfo from "@/components/UserInfo.vue";
import UserPosts from "@/components/UserPosts.vue";
import {reactive} from "vue";

export default {
    name: "UserProfileView",
    components: {
        ContentBase,
        UserInfo,
        UserPosts
    },
    setup() {
        const user = reactive({
            id: 1,
            username: "yhf",
            lastName: "y",
            firstName: "hf",
            followerCount: 0,
            is_followed: false,
        })

        return {
            user,
        }
    }
}
</script>

<style scoped>

</style>