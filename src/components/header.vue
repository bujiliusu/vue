<template>
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-submenu index="2" class="fr">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1" class="fr">选项1</el-menu-item>
    <el-menu-item index="2-2" class="fr">选项2</el-menu-item>
    <el-menu-item index="2-3" class="fr">选项3</el-menu-item>
  </el-submenu>
</el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
