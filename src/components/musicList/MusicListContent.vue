<template>
  <div class="songsList">
    <div class="itemListTop">
      <div class="listLeft">
        <svg
          t="1655545430195"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3873"
        >
          <path
            d="M386.9952 729.90336c4.14976 0 8.29824-1.07392 12.01664-3.22048l321.2288-185.46304c7.4368-4.29312 12.01664-12.22656 12.01664-20.8128s-4.57984-16.52096-12.01664-20.81408l-321.2288-185.46176c-7.4368-4.29312-16.59648-4.29312-24.032 0-7.43552 4.29312-12.01664 12.22656-12.01664 20.8128l0 370.9248c0 8.58624 4.58112 16.51968 12.01664 20.8128C378.69696 728.82944 382.84672 729.90336 386.9952 729.90336zM411.02976 376.57344 660.16 520.40832 411.02848 664.24576 411.02976 376.57344zM782.01216 241.98656c-72.28928-72.28928-168.40192-112.10112-270.63552-112.10112-102.2336 0-198.34624 39.81184-270.6368 112.10112S128.64 410.38976 128.64 512.62336c0 48.6336 9.0048 96.02816 26.7648 140.8704 4.88704 12.34048 18.85056 18.38336 31.1936 13.49504 12.34048-4.88832 18.38208-18.85312 13.49376-31.1936-15.51872-39.18336-23.38688-80.62464-23.38688-123.17184 0-184.53888 150.13248-334.67136 334.67136-334.67136 184.53888 0 334.67264 150.13376 334.67264 334.67136 0 184.5376-150.13376 334.67136-334.67264 334.67136-71.48416 0-139.67616-22.21312-197.2032-64.24192-10.71744-7.82848-25.75488-5.48864-33.58336 5.2288-7.82976 10.71744-5.48864 25.7536 5.22752 33.58208 65.81376 48.08192 143.81184 73.49632 225.55776 73.49632 102.23232 0 198.34624-39.81184 270.63552-112.10112 72.29184-72.29056 112.1024-168.4032 112.1024-270.63552C894.11456 410.38976 854.304 314.27584 782.01216 241.98656z"
            p-id="3874"
          ></path>
        </svg>
        <span v-if="songs"
          >播放全部<span>(共{{ songs.length }}首)</span></span
        >
      </div>
      <div class="listRight">
        <svg
          t="1655545582169"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4682"
          width="200"
          height="200"
        >
          <path
            d="M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z"
            fill="#ffffff"
            p-id="4683"
          ></path>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in songs" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg
            v-if="item.mv != 0"
            t="1655545655269"
            class="icon bofang"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4016"
          >
            <path
              d="M1024 1024H486.4v-1.28C215.6032 1009.28 0 786.1248 0 512 0 229.2224 229.2224 0 512 0s512 229.2224 512 512c0 203.0848-118.5536 378.0352-289.9456 460.8H1024v51.2z m-51.2-512c0-242.3808-218.4192-460.8-460.8-460.8S51.2 269.6192 51.2 512s218.4192 460.8 460.8 460.8 460.8-218.4192 460.8-460.8zM384 768a128 128 0 1 1 256.0256 0.0256A128 128 0 0 1 384 768z m204.8 0a76.8 76.8 0 1 0-153.6 0 76.8 76.8 0 0 0 153.6 0z m179.2-384a128 128 0 1 1-0.0256 256.0256A128 128 0 0 1 768 384z m0 204.8a76.8 76.8 0 1 0 0-153.6 76.8 76.8 0 0 0 0 153.6z m-256-204.8a128 128 0 1 1 0.0256-256.0256A128 128 0 0 1 512 384z m0-204.8a76.8 76.8 0 1 0 0 153.6 76.8 76.8 0 0 0 0-153.6zM256 640a128 128 0 1 1 0.0256-256.0256A128 128 0 0 1 256 640z m0-204.8a76.8 76.8 0 1 0 0 153.6 76.8 76.8 0 0 0 0-153.6z"
              p-id="4017"
            ></path>
          </svg>
          <svg
            t="1655545923805"
            class="icon gengduo"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2282"
          >
            <path
              d="M256 448a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m256 0a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m256 0a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"
              p-id="2283"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
// import { mapMutations } from 'vuex';
export default {
  setup(props) {
  },
  methods: {
    playMusic(i) {
      this.updatePlayList(this.songs)
      this.updatePlayListIndex(i)
    },
    ...mapMutations(['updatePlayList','updatePlayListIndex']),
  },
  props: ['songs', 'subscribedCount'],
}
</script>
<style lang="less" scoped>
.icon {
  width: 0.4rem;
  height: 0.4rem;
  fill: #acd2b1;
}
.songsList {
  width: 100%;
  height: 10rem;
  background-color: #fff;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .itemListTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listLeft {
      width: 3rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        fill: #ccc;
        stroke: #333333;
        stroke-width: 20;
      }
      span {
        font-weight: 700;
        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
    .listRight {
      display: flex;
      align-items: center;
      background-image: linear-gradient(
        to right,
        #e4afcb 0%,
        #b8cbb8 0%,
        #b8cbb8 0%,
        #e2c58b 30%,
        #c2ce9c 64%,
        #7edbdc 100%
      );
      padding: 0.2rem;
      border-radius: 0.4rem;
      color: #fff;
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.1rem;
        stroke: #fff;
        stroke-width: 50;
      }
    }
  }
  .itemList {
    width: 100%;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span {
            font-weight: 400;
            font-size: 0.24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight {
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;
        .bofang {
          position: absolute;
          left: 0;
        }
        .gengduo {
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>