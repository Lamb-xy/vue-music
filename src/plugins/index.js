import { Tab, Tabs, Swipe, SwipeItem } from 'vant'
//把引入进来的组件放入一个数组中
let plugins = [Tab, Tabs, Swipe, SwipeItem]
export default function getVant (app) {
    plugins.forEach((item) => {
        return app.use(item)
    })
}
