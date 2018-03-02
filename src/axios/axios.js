import axios from 'axios'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (!sessionStorage.getItem('key')) {
            config.headers.Authorization = sessionStorage.getItem('key');
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    sessionStorage.removeItem('key')
                    this.$router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;