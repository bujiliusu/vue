
<template>
  <el-container>
  <el-header class="header" height="100px">
    <h3>我的网站</h3>
    <p>登录功能</p>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import HeaderLy from './components/header'
import FooterLy from './components/footer'
import Aside from './components/aside'
import Table from './components/table'

export default {
  name: 'App',
  components:{
    HeaderLy,
    FooterLy,
    Aside,
    Table
  },
  data () {
    return {
      message: '页面加载于 ' + new Date().toLocaleString(),
      message2: [{name:'zhangsan', age:'lisi', sex:'wagnwu'},{name:'zhangsan', age:'lisi', sex:'wagnwu'},{name:'zhangsan', age:'lisi', sex:'wagnwu'}],
      link2: 'http://www.baidu.com',
      a:{'color':'red'},
      b:{'background-color':'blue'},
      status:"danger",
      parentMsg: 'from parent msg',
      checked: false,
      checkedNames: []
    }  
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  background-color:#409EFF;
  color: white;
}
.el-container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-header{
  padding: 0;
  z-index: 1000
}

.el-header .fr{
  float: right;
}

.el-header, .el-menu{
  border-botton: none;
}

.el-aside, .el-main{
  padding-top: 60px;
}

.el-aside{
  background: #545c64;
  height:100vh;
}

.el-aside .el-menu{
  border-botton: none;
}
</style>
