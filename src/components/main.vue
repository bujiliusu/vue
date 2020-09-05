<template>
  <div>
    <h1>主页面</h1>
    <span v-if="user">{{user}}
      <el-button type="primary" @click="logout">注销</el-button>
    </span>
      <el-button v-else type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:''
    }
  },
  methods: {
    login() {
      this.$router.replace('/login')
      sessionStorage.removeItem('user')
    },
    logout() {
      this.$store.dispatch('logout').then( () => {
        
        sessionStorage.removeItem('user')
        this.$router.replace('/login')
      })
      
    },
  },
  mounted(){
    // let user=sessionStorage.getItem('user')
    let user = this.$store.state.user
    if (user){
      this.user=user
    }
  }
}
</script>
