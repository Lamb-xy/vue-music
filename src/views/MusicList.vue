<template>
  <div class="musicList">
    <MusicListTop :playlist="state.playlist" />
    <MusicListContent :songs="state.songs" :subscribedCount="state.playlist.subscribedCount" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { reactive, onMounted } from 'vue'
import { getMusicList ,getSongs} from '@/api/item.js'
import MusicListTop from '@/components/musicList/MusicListTop'
import MusicListContent from '@/components/musicList/MusicListContent'
export default {
  name: 'MusicList',
  components: {
    MusicListTop,
    MusicListContent
  },
  setup() {
    const state = reactive({
      playlist: {},
      songs:[]
    })
    onMounted(async () => {
      let id = useRoute().query.id
      let res1 = await getMusicList(id)
      let res2 = await getSongs(id)
      state.playlist = res1.data.playlist
      state.songs = res2.data.songs

      //防止页面刷新造成数据丢失，将数据保存到sessionStorage
      sessionStorage.setItem('musicList',JSON.stringify(state))
    })
    return {
      state,
    }
  },
}
</script>

<style lang="less" scoped>
</style>