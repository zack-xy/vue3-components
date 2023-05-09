// Copyright (c) 2023 Zack Zheng<zack_zhengxiyun@163.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import App from '@/App'
import router from '@/router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
