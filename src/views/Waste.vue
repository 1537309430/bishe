<template>
  <el-container>
    <el-header>垃圾分类软件</el-header>
    <el-main>
      <keep-alive include="picture"><router-view /></keep-alive></el-main>
    <el-footer>
      <van-tabbar route>
        <van-tabbar-item replace to="/picture" icon="photo-o">图片识别</van-tabbar-item>
        <van-tabbar-item replace to="/search" icon="search">文字搜索</van-tabbar-item>
      </van-tabbar>
    </el-footer>
  </el-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Tabbar, TabbarItem } from 'vant'


</script>

<style lang='less' scoped>
.el-container {
  height: 100vh;

  .el-header {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #333744;
  }

  .el-footer {
    .van-tabbar {
      height: var(--el-footer-height);
      border-radius: 5px 5px 0 0;
      overflow: hidden;
    }

    .van-tabbar .van-tabbar-item {
      background: #333744;
    }
  }

  .el-main {
    &::-webkit-scrollbar {
      width: 4px;
      /*height: 4px;*/
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.2);
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
