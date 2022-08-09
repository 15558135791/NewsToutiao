<template>
  <div>
    <!-- 路由占位符 -->
    <router-view></router-view>
    <!-- Tabbar组件 -->
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item to="/user" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped></style>
