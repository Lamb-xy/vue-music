import service from "@/utils/request";
export function getMusicList (id) {
        return service({
            method: 'GET',
            url: `/playlist/detail?id=${id}`,
        })
}
export function getSongs (id) {
        return service({
            method: 'GET',
            url: `/playlist/track/all?id=${id}&offset=10`,
        })
}