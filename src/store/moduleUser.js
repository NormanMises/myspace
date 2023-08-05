import $ from 'jquery'
import jwtDecode from "jwt-decode";

const ModuleUser = {
    state: {
        id: "",
        username: "",
        photo: "",
        followerCount: 0,
    },
    getters: {},
    mutations: {},
    actions: {
        login(context, data) {
            $.ajax(
                {
                    url: "https://app165.acapp.acwing.com.cn/api/token/",
                    type: "POST",
                    data: {
                        username: data.username,
                        password: data.password,
                    },
                    success(resp) {
                        const {access, refresh} = resp;
                        const access_obj = jwtDecode(access);
                        console.log(access_obj, refresh);
                    },
                }
            );
        }
    },
    modules: {}
}
export default ModuleUser;