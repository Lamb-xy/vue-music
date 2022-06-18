<template>
  <div id="swiper">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {reactive,onMounted} from "vue"
import {getBanner} from '../../api/home'
export default {
  name: 'Swiper',
  setup() {
    const state=reactive({
        images:[]
    })
    onMounted(async ()=>{
       let res= await getBanner()
       state.images=res.data.banners
    })
    return {state}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="less" scoped>
#swiper{
  //需要在上面自己添加一个id
  .van-swipe {
    width: 100%;
    // height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: .2rem;
      }
    }
    .van-swipe__indicator--active {
      background-color: rgb(219, 130, 130);
    }
  }
}
</style>