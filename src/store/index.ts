import { createStore } from 'vuex'

export default createStore({
    state:{
        counte:0
    },
    mutations: {
        Add(state){
            state.counte++
        }
    }
})
