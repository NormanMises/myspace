<template>
    <ContentBase>
        炮友列表
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

</style>