<template>
  <router-view></router-view>
<FooterMusic/>
</template>
<script>
import FooterMusic from './components/musicList/FooterMusic.vue'
export default {
  components: {
    FooterMusic
  },
}
</script>
<style lang="less">
@import '../src/assets/font/font.css';
#app {
  font-family: '站酷仓耳渔阳体-W03', '问藏书房', '千图雪花体', 'PF频凡胡涂体',
    '宋体', '黑体';
  // font-weight: 8rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.iconfont {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  text-decoration: none;
  color: black;
}
</style>
