<template>
  <div class="topNav">
<svg t="1655546649075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2600" width="200" height="200"><path d="M898.8 278.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 547.408H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 816.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64z" fill="" p-id="2601"></path></svg>
    <div class="topContent">
      <van-tabs v-model:active="activeName" >
        <van-tab title="我的" name="a"></van-tab>
        <van-tab title="发现" name="b"></van-tab>
        <van-tab title="讨论" name="c"></van-tab>
        <van-tab title="视频" name="c"></van-tab>
      </van-tabs>
    </div>
<svg t="1655546678817" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2750" width="200" height="200"><path d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z" p-id="2751"></path></svg>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TopNav',
  setup() {
    const activeName = ref('a')
    return { activeName }
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="less">
.icon{
    width: .4rem;
    height: .4rem;
}
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topContent {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.4rem;
  }
}
</style>