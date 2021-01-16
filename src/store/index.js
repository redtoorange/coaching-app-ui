import Vue from 'vue'
import Vuex from 'vuex'
import requests from "@/store/modules/requests";
import coaches from "@/store/modules/coaches";
import Axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userId: '0',
        authed: false,
        requestHeader: {'Authorization': null}
    },
    mutations: {
        setAuth(state, token) {
            state.authed = true;
            state.requestHeader.Authorization = 'Bearer ' + token;
        }
    },
    actions: {
        authenticate(context) {
            if (!context.state.authed) {
                const login = {
                    username: 'admin',
                    password: 'admin',
                    rememberMe: false
                };

                Axios.post('http://localhost:5000/api/authenticate', JSON.stringify(login), {headers: {'Content-Type': 'application/json'}})
                    .then(response => {
                        console.log(response.data);
                        context.commit('setAuth', response.data.id_token)
                    });
            }
        }
    },
    getters: {
        userId: state => state.userId,
        isAuthed: state => state.authed,
    },
    modules: {
        requests,
        coaches
    }
})
