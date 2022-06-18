import { createStore } from 'vuex'

export default createStore({
    state: {
        playList: [
            {
                al: {
                    id: 142165038,
                    name: 'The ReVe Festival 2022 - Feel My Rhythm',
                    pic: 109951167257095710,
                    picUrl: 'https://p2.music.126.net/qskH8-FwRevG8iHvojyMdg==/109951167257095709.jpg',
                    pic_str: '109951167257095709',
                },
                id: 1930239969,
            },
        ],
        playListIndex: 0,
        isPlay: false,
        
    },
    getters: {},
    mutations: {
        changeIsPlay (state,value) {
            state.isPlay=value
        },
            updateCurrentTime:function(state,value){
      // console.log(state.currentTime);
      state.currentTime=value
    },
    updateDuration:function(state,value){
      state.duration=value
    },
    },
    actions: {},
    modules: {},
})
