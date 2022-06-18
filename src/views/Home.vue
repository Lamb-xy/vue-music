<template>
  <div class="home">
    <TopNav />
    <Swiper/>
    <IconList/>
    <FindMusic/>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import Swiper from '@/components/home/Swiper.vue'
import IconList from '@/components/home/IconList.vue'
import FindMusic from '@/components/home/FindMusic.vue'
export default {
  name: 'Home',
  components: {
    TopNav,
    Swiper,
    IconList,
    FindMusic
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
</style>