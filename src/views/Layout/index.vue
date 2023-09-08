<template>
  <div class="faster__index__page">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="home-o">学习</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
