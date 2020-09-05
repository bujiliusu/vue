<template>
  <el-row type="flex" justify="center">
  <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="user.name"></el-input>
  </el-form-item>
  <el-form-item label="密码"  prop="pass">
    <el-input v-model="user.pass" type="password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
  </el-form-item>
  </el-form>
</el-row>
</template>

<script>

export default {
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
      if (valid){
        let data_post = {'user':this.user.name, 'pass':this.user.pass}
        this.$axios.post('/api/login',data_post).then((result_data)=>{
          sessionStorage.setItem('user',result_data.data.name)
          this.$store.dispatch('login')
          console.log(result_data.data)
          if(result_data.data){
            this.$notify({
              type:'sucess',
              message:'欢迎'+result_data.data.name,
              duration:3000
            })
            this.$router.replace('/')
          }
          else{
            this.$message({
              type:'error',
              message:'失败',
              showClose:true
            })
          }
        }).catch((err)=>{
          this.$message({
            type:'error',
            message:'网络',
            showClose:true
          })
        })
      }
      else{
        return false
      }
      }) 
    }
  },
  data() {
    return{
      user: {},
      rules:{
        name: [
          {required:true,message:'用户不空',trigger:'blur'}
        ],
        pass: [
          {required:true,message:'密码不空',trigger:'blur'}
        ]
      }
    }
  }
}
</script>
