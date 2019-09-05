import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
const test = 'http://192.168.8.121:4000'
const service = axios.create({ //hg
    // baseURL: process.env.NODE_ENV === 'development'?'/api':test+':4000',
    baseURL:test,
    withCredentials: false,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

service.interceptors.response.use(
    response => {
        return response
    },
    (error) => {
        alert('网络错误，请稍后重试')
        return Promise.reject(error)
    }
)
const api = {
    get_cate_level1() {
        return service.post('/PageMaterialController/getMaterialsInfoByRecent',{})
    },
	get_reports(data) {
		if(data) data = qs.stringify(data, { allowDots: true })
		return service.post('/PageReportController/findListByPage', data)
	},
}
export default api