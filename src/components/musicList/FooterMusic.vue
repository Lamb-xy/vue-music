<template>
  <div class="footerMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].al.name }}</p>
        <span>横滑来切换上下歌曲哦~</span>
      </div>
    </div>
    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%' ,width: '100%'}">
        <MusicDetail :musicData="playList[playListIndex]" :play="play"/>
    </van-popup>

    <div class="footerRight">
      <svg
        @click="play"
        v-if="!isPlay"
        t="1655553387171"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4179"
        width="200"
        height="200"
      >
        <path
          d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z"
          p-id="4180"
        ></path>
      </svg>

      <svg
        @click="play"
        v-else
        t="1655554638392"
        class="icon"
        viewBox="0 0 1048 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4992"
        width="200"
        height="200"
      >
        <path
          d="M524.272128 0.018022C241.513165 0.018022 12.288102 229.245952 12.288102 512.005018c0 112.734003 36.43904 216.957952 98.17897 301.537997l38.667981-40.258048C97.458176 699.230003 67.143168 609.158963 67.143168 512.005018 67.143168 259.540992 271.807078 54.872986 524.272128 54.872986c252.45696 0 457.120973 204.668006 457.120973 457.132032 0 252.460954-204.664013 457.118003-457.120973 457.118003-96.240026 0-185.530982-29.744026-259.189043-80.53504l-34.539008 42.797978c83.150029 58.344038 184.437965 92.596019 293.728973 92.596019 282.758963 0 511.984026-229.220966 511.984026-511.976038C1036.256154 229.245952 807.031091 0.018022 524.272128 0.018022zM615.693107 256.011981l0 511.987 54.855 0L670.548107 256.012 615.693128 256.012zM377.996083 256.011981l0 511.987 54.855 0L432.851083 256.012 377.996128 256.012z"
          p-id="4993"
        ></path>
      </svg>
      <svg
        t="1655552114360"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3928"
      >
        <path
          d="M426.666667 874.666667a21.333333 21.333333 0 0 1-21.333334 21.333333H64a21.333333 21.333333 0 0 1 0-42.666667h341.333333a21.333333 21.333333 0 0 1 21.333334 21.333334zM64 128h896a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m0 384h597.333333a21.333333 21.333333 0 0 0 0-42.666667H64a21.333333 21.333333 0 0 0 0 42.666667z m896 341.333333h-85.333333a21.333333 21.333333 0 0 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 0-42.666667z m-90.053333-369.22c16.733333 17.42 23.806667 41.146667 26.533333 53.733334a21.333333 21.333333 0 1 0 41.706667-9.026667c-4.5-20.773333-14.666667-50.513333-37.466667-74.266667-11.04-11.493333-23.64-20.093333-37.493333-25.606666-10.306667-7.126667-19.44-16.58-27.153334-28.133334-19.64-29.393333-24.373333-64.04-25.446666-82.08A21.333333 21.333333 0 0 0 768 320v479.586667c-1.413333-1.02-2.846667-2-4.326667-3.006667-27.64-18.433333-64-28.58-102.34-28.58s-74.666667 10.146667-102.34 28.58c-14.253333 9.5-25.56 20.746667-33.613333 33.44-8.88 14-13.38 29.013333-13.38 44.666667s4.5 30.666667 13.38 44.666666c8.053333 12.666667 19.333333 23.94 33.613333 33.44C586.666667 971.186667 622.98 981.333333 661.333333 981.333333s74.666667-10.146667 102.34-28.58c14.253333-9.5 25.56-20.746667 33.613334-33.44 8.88-14 13.38-29.013333 13.38-44.666666V438a140.893333 140.893333 0 0 0 30.966666 27.82A21.18 21.18 0 0 0 846 468c8.706667 3.226667 16.766667 8.666667 23.946667 16.113333z"
          p-id="3929"
        ></path>
      </svg>
    </div>
    <audio
    ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MusicDetail from './MusicDetail'

export default {
  components: { MusicDetail },
  name: 'FooterMusic',
  computed: {
    ...mapState(['playList', 'playListIndex', 'isPlay','detailShow']),
  },
  updated(){
    this.$store.dispatch('getLyric', this.playList[this.playListIndex].id);
  },
  mounted() {
    this.$store.dispatch('getLyric', this.playList[this.playListIndex].id);
    
  },
  watch:{
    playListIndex(){
        //监听播放列表下标的改变
        this.$refs.audio.autoplay=true
        if(this.$refs.audio.paused){
            this.updateIsPlay(true)
        }
    },
    playList(){
        if(this.isPlay==false){
            this.$refs.audio.autoplay=true
            this.updateIsPlay(true)

        }
    }
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.updateIsPlay(true)
        this.updateTime() //播放就调用函数进行传值
      } else {
        this.$refs.audio.pause()
        this.updateIsPlay(false)
        clearInterval(this.interVal) //暂停清除定时器
      }
    },
        addDuration:function(){
      this.updateDuration(this.$refs.audio.duration)
    },
    updateTime: function () {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime)
      }, 1000)
    },
    ...mapMutations(['updateIsPlay',"updateCurrentTime",
      "updateDuration","updateDetailShow"]),
  },
}
</script>

<style lang="less" scoped>
.icon {
  width: 0.5rem;
  height: 0.5rem;
  fill: #acd2b1;
}
.footerMusic {
  width: 100%;
  height: 1.5rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #acd2b1;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 3.5rem;
      padding-bottom: 0.2rem;
    }
    span {
      // color: #acd2b1;
      color: #999;
    }
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>