import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: sessionStorage.getItem('user') || ''
    },
    mutations:{
        login(state){
            state.user=sessionStorage.getItem('user')
        },
        logout(state){
            state.user=''
        }
    },
    actions:{
        login({commit}){
          commit("login");
        },
        logout({commit}){
          commit("logout");
        }
    }
})
export default store