import { createStore } from 'vuex'

export default createStore({
  state: {
    posts : [
      {
        url:'raymond.jpeg', name:"viki techie" ,user_url:"index.png"
      },
      {
        url:"code.jpeg", name:"javascript nerd" ,caption:"check out victor's github repo man you will be amazed", user_url: 'person_2.jpeg'
      },
      {
        url:"avatar.jpeg", caption:"this app should not take me more time than I have allocated to it"
      }

    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
