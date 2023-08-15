<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3 img-field">
                    <img class="img-fluid" :src="user.photo"
                         alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{ user.username }}</div>
                    <div class="fans">炮友数：{{ user.followerCount }}</div>
                    <button v-if="!user.is_followed&&!is_me" @click="follow" type="button" class="btn btn-secondary btn-sm">
                        +关注
                    </button>
                    <button v-if="user.is_followed&&!is_me" @click="unfollow" type="button" class="btn btn-secondary btn-sm">
                        取消关注
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import {computed} from "vue";
import $ from 'jquery';
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    name: "UserInfo",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props, context) {
        // let fullName = computed(() => props.user.lastName + ' ' + props.user.firstName);
        const store = useStore();
        const is_me = computed(() => props.user.id === store.state.user.id);

        const follow = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: props.user.id,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        context.emit('follow');
                    }
                }
            });
        };

        const unfollow = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: props.user.id,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        context.emit('unfollow');
                    }
                }
            });
        }

        return {
            // fullName,
            follow,
            unfollow,
            is_me,
        }
    },

}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.img-field {
    /* 居中 */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>