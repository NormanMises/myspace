<template>
    <ContentBase>
        <div class="card" v-for="user in users" :key="user.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-1">
                        <!--                        标签中用变量用 v-bind 简写为 : -->
                        <img class="img-fluid" :src="user.photo" alt="">
                    </div>
                    <div class="col-11">
                        <div class="username">{{ user.username }}</div>
                        <div class="folllower-count">{{ user.followerCount }}</div>
                    </div>
                </div>
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import {ref} from "vue";
import $ from 'jquery';

export default {
    name: 'UserListVIew',
    components: {
        ContentBase,
    },
    setup() {
        let users = ref([]);
        $.ajax(
            {
                url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
                type: "get",
                success(resp) {
                    users.value = resp;
                }
            }
        )
        return {
            users
        };
    }
}
</script>


<style scoped>
img {
    border-radius: 50%;
}

.card {
    margin-bottom: 20px;
    cursor: pointer;
    transition: 500ms;
}

.card:hover{
    box-shadow: 2px 2px 10px lightgray;
}

.username {
    font-weight: bold;
    height: 50%;
}

.folllower-count {
    font-size: 12px;
    color: gray;
    height: 50%;
}
</style>