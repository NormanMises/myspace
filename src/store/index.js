import {createStore} from 'vuex'
import ModuleUser from "@/store/moduleUser";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user: ModuleUser,
    }
})
