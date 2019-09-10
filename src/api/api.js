import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
// const test = 'http://192.168.8.121:4000'
const test = 'http://admin.dlzjzy.com'
const service = axios.create({ //json
    baseURL: process.env.NODE_ENV === 'development'?'/api':test+'/index.php',
    // baseURL:test,
    withCredentials: false,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})
const service1 = axios.create({ //form请求
    baseURL: process.env.NODE_ENV === 'development'?'/api':test+'/index.php',
    // baseURL: test + '/index.php',
	withCredentials: false,
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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
service1.interceptors.response.use(
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
        return service1.post('/PageMaterialController/getMaterialsInfoByRecent',{})
    },
    get_header(data){
		if(data) data = qs.stringify(data, { allowDots: true })
		return service1.post('/Api/Index/header', data)  
    },
    get_footer(data){
		if(data) data = qs.stringify(data, { allowDots: true })
		return service1.post('/Api/Index/footer', data)  
    },
    get_index(data){
		if(data) data = qs.stringify(data, { allowDots: true })
		return service1.post('/Api/Index/index', data)  
    },
	get_articles(data) {
		if(data) data = qs.stringify(data, { allowDots: true })
		return service1.post('/Api/Article/search', data)
    },
    get_article_detail(data){
        if(data) data = qs.stringify(data, { allowDots: true })
        return service1.post('/Api/Article/detail', data)
    },
	get_reports(data) {
		if(data) data = qs.stringify(data, { allowDots: true })
		return service.post('/PageReportController/findListByPage', data)
	},
}
export default api