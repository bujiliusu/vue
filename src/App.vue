
<template>
  <div id="app">
    <button @click="changeMsg()">change</button>
    <span id="container">
      {{message}}
    </span><br/>
    <input type="text" v-model="message"></input>
    <table>
      <thead>
      <tr>
        <th>nimei</th>
        <th>nimei</th>
        <th>nimei</th>
      </tr>
      </thead>
      <tbody>
        
          <tr v-for="value in message2">
            <td>{{value.name}}</td>
            <td>{{value.age}}</td>
            <td>{{value.sex}}</td>
          </tr>
      </tbody>
      
    </table>
    <a :style="[a,b]">连接</a>
    <el-button :type="status">成功按钮</el-button>
    <el-container>
      <el-header>
        <HeaderLy></HeaderLy>
      </el-header>
      <el-container>
        <router-view/>
        <transtition/>
      </el-container>
      <el-footer>
        <FooterLy></FooterLy>
      </el-footer>
    </el-container>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import HeaderLy from '@components/header'
import FooterLy from '@components/footer'

export default {
  name: 'App',
  components:{
    HeaderLy,
    FooterLy
  },
  data () {
    return {
      message: '页面加载于 ' + new Date().toLocaleString(),
      message2: [{name:'zhangsan', age:'lisi', sex:'wagnwu'},{name:'zhangsan', age:'lisi', sex:'wagnwu'},{name:'zhangsan', age:'lisi', sex:'wagnwu'}],
      link2: 'http://www.baidu.com',
      a:{'color':'red'},
      b:{'background-color':'blue'},
      status:"danger"
    }  
  },
  created () {
    console.group("%c%s", "color:red", 'created');
    console.log("%c%s", "color:red", this.$el);
    console.log("%c%s", "color:red", this.$data);
    console.log("%c%s", "color:red", this.message);
  },
  beforeMount() {
    console.group("%c%s", "color:red", 'beforeMount');
    console.log("%c%s", "color:red", this.$el);
    console.log("%c%s", "color:red", this.$data);
    console.log("%c%s", "color:red", this.message);
  },
  mounted() {
    console.group("%c%s", "color:red", 'mount');
    console.log("%c%s", "color:red", this.$el);
    console.log("%c%s", "color:red", this.$data);
    console.log("%c%s", "color:red", this.message);
  },
  beforeUpdate() {
    console.group("%c%s", "color:red", 'beforeUpdate');
    console.log("%c%s", "color:red", this.$el);
    console.log("%c%s", "color:red", this.$data);
    console.log("%c%s", "color:red", this.message);
    console.log("%c%s", "color:red", document.getElementById('container').innerHTML);
  },
  updated() {
    console.group("%c%s", "color:red", 'updated');
    console.log("%c%s", "color:red", this.$el);
    console.log("%c%s", "color:red", this.$data);
    console.log("%c%s", "color:red", this.message);
    console.log("%c%s", "color:red", document.getElementById('container').innerHTML);
  },
  destroyed() {
    console.group("%c%s", "color:red", 'destroyed');
    console.log("%c%s", "color:red", this.$el);
    console.log("%c%s", "color:red", this.$data);
    console.log("%c%s", "color:red", this.message);
  },
  methods: {
    changeMsg() {
      this.message='abc'
    }
  }
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
</style>
