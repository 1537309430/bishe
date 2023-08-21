<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" />
    <van-list v-if="isShow" v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.name" :title="item.name" :label="type[item.category]" />
    </van-list>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { showToast } from 'vant'
import config from '@/config.js'
const value = ref('')
const isShow = ref(false)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
let page = 1
const type = {
  1: '可回收垃圾',
  2: '有害垃圾',
  4: '厨余垃圾',
  8: '其他垃圾'
}
const onSearch = (val) => {
  isShow.value = false
  list.value = []
  page = 1
  fetch(config.apiURL + '/api/waste?name=' + val)
  .then(res => res.json())
  .then(res => {
    finished.value = false
    list.value = res.data
    isShow.value = true
  })
}
const onLoad = () => {
  page++
  fetch(config.apiURL + `/api/waste?name=${value.value}&page=${page}`)
  .then(res => res.json())
  .then(res => {
    if(res.data.length == 0) {
      finished.value = true
    } else {
      let resList = res.data
      list.value = list.value.concat(resList)
    }
    loading.value = false
  })
}
</script>

<style lang='less' scoped></style>
