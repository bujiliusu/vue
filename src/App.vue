
<template>
  <div id="app">
    <input type="checkbox" id="checkbox" value="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>
    <p>sssss</p>
    <input type="checkbox" id="runnob" value="runnob" v-model="checkedNames">
    <label for="runnob">Runnob</label>
    <input type="checkbox" id="google" value="google" v-model="checkedNames">
    <label for="google">Runnob</label>
    <input type="checkbox" id="taobao" value="taobao" v-model="checkedNames">
    <label for="taobao">Runnob</label>
  </div>
</template>

<script>
import HeaderLy from './components/header'
import FooterLy from './components/footer'
import Aside from './components/aside'

export default {
  name: 'App',
  components:{
    HeaderLy,
    FooterLy,
    Aside
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
