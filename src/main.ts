// Copyright (c) 2023 Zack Zheng<zack_zhengxiyun@163.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ElementPlus from 'element-plus'
import App from '@/App'
import router from '@/router/index'
import 'element-plus/dist/index.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(router).use(ElementPlus)
app.mount('#app')
