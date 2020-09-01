<template>
  <!-- <h1>header {{pushmsg}}</h1> -->
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: "header",
  data() {
    return {

    }
  },
  props:['pushmsg']
}
</script>