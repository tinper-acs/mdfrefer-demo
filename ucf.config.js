/**
 * UCF配置文件
 * 全新详细文档请访问 https://www.yuque.com/ucf-web/book/zfy8x1
 */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    return {
        context: '',
        // 启动所有模块，默认这个配置，速度慢的时候使用另外的配置
        bootList: true,
        // 启动这两个模块，启动调试、构建
        // bootList: [
        //     "singletable-query"
        // ],
        // 代理的配置
        proxy: [
            {
                enable: true,
                headers: {
                    "Referer": "https://wbalone-dev.yyuap.com",
                    // "Cookie":"locale=zh_CN; acw_tc=276aedee15644621392103530e674da5f58de6a4127991cd44d6c8145d00a4; NTKF_T2D_CLIENTID=guest389C0129-7C22-181E-C68C-4135DB01288B; _ga=GA1.2.159860880.1564625296; gr_user_id=32e4f9ec-5cc7-41cb-91b6-3b8218ce9314; grwng_uid=a427bb3f-b5cc-47b6-b0db-53e9d42e107e; YKJ_IS_DIWORK=1; YKJ_DIWORK_DATA=%7B%22data%22%3A%7B%22is_diwork%22%3A1%2C%22cur_qzid%22%3A%2218172%22%7D%2C%22key%22%3A%2261f2c2f407f102860822289f6969aee4%22%7D; PHPSESSID=84n0hju0j4joics0ree62keaq6; ck_safe_chaoke_csrf_token=e139ee1560ba8dcab240e99e35036fc4; _gid=GA1.2.1290608701.1565752562; Hm_lvt_diwork=1564462121,1564463108,1565663583,1565769421; at=0e3a1b4c-7339-42d1-b84a-491bad717667; yonyou_uid=72c45f5e-df49-4711-851e-b51830dad66f; yonyou_uname=19556888888; JSESSIONID=node01hl693pw680lyoxnsm8xr7bm0450.node0; yht_username=ST-3160-Adc7bwQs2dN3OKGKYPFv-cas01.example.org__72c45f5e-df49-4711-851e-b51830dad66f; yht_usertoken=T%2B3Ssif8tHdGXnzWWxusLsV3XrWHMGKQgnYO4YDFXMpckAbWoIyv0n%2BYQYyn02rLzIAmN3NkHIilL%2BycRrn%2F6g%3D%3D; yht_access_token=bttNjJHdlhkMUNVZUJ5MEtiOUI0T0lRemZlaVp6V3drbjhvSzY1VG5reTg5L3krdHlLeTk5SHpqWGV0QTZxUzB2NHlpMHFOT3FRbkh4alg1bUVTTnlHcm5FckJlQ1ViRFZSTFJyNGFLMWpxbTA9__1565769449991; wb_at=LMjpnsmj3cbtavJrocGpHD9DRI8ujbZrmnkdwZlokdknqf; jwt_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjU3Njk1MDIsInNlc3Npb24iOiJ7XCJjbGllbnRJcFwiOlwiMTAuMy4wLjc0XCIsXCJjcmVhdGVEYXRlXCI6MTU2NTc2OTQ0OSxcImV4dFwiOntcIm9yZ1N0YXR1c1wiOlwibXVsdGlcIixcImFkbWluXCI6ZmFsc2UsXCJ5aHRfYWNjZXNzX3Rva2VuXCI6XCJidHROakpIZGxoa01VTlZaVUo1TUV0aU9VSTBUMGxSZW1abGFWcDZWM2RyYmpodlN6WTFWRzVyZVRnNUwza3JkSGxMZVRrNVNIcHFXR1YwUVRaeFV6QjJOSGxwTUhGT1QzRlJia2g0YWxnMWJVVlRUbmxIY201RmNrSmxRMVZpUkZaU1RGSnlOR0ZMTVdweGJUQTlfXzE1NjU3Njk0NDk5OTFcIn0sXCJqd3RFeHBTZWNcIjo2MCxcImp3dFZhbGlkRGF0ZVwiOjAsXCJsYXN0RGF0ZVwiOjE1NjU3Njk0NDIsXCJsb2NhbGVcIjpcInpoX0NOXCIsXCJwcm9kdWN0TGluZVwiOlwidThjMy4wXCIsXCJzZXNzaW9uRXhwTWluXCI6MjE2MCxcInNlc3Npb25JZFwiOlwiTE1qcG5zbWozY2J0YXZKcm9jR3BIRDlEUkk4dWpiWnJtbmtkd1psb2tka25xZlwiLFwic291cmNlSWRcIjpcImRpd29ya1wiLFwidGVuYW50SWRcIjpcInc3MWpxbzJhXCIsXCJ1c2VySWRcIjpcIjcyYzQ1ZjVlLWRmNDktNDcxMS04NTFlLWI1MTgzMGRhZDY2ZlwifSIsInN1YiI6ImRpd29yayJ9.vbm55eVhwv-Dkf8jqmytaqTqOEXQGi04B2Z80NWmTag; Hm_lpvt_diwork=1565769450"
                    "Cookie":"Hm_lvt_4a8f478e4031426333c62d0e6320c319=1551440618; acw_tc=276aede215644572829585257e573d992831fc602f3be3471653261d1b8eac; locale=zh_CN; YKJ_IS_DIWORK=1; YKJ_DIWORK_DATA=%7B%22data%22%3A%7B%22is_diwork%22%3A1%2C%22cur_qzid%22%3A%2218254%22%7D%2C%22key%22%3A%22b7454f4004f2ebdc08a1494b013536a7%22%7D; Hm_lvt_diwork=1565702117,1565761122,1565773970,1565833575; at=3fe6e3dc-4933-4046-af68-e661d0d61960; yonyou_uid=cc5aaab0-31a1-4f15-ad00-fb696ce325f5; yonyou_uname=%E5%BC%A0%E5%B0%8F%E5%8C%97; JSESSIONID=node0139c4vbmdp4dusb326gu019x1789.node0; yht_username=ST-3645-NG2hK1AiL3wDfXfPQKuz-cas01.example.org__cc5aaab0-31a1-4f15-ad00-fb696ce325f5; yht_usertoken=bdNGfpiFVLlH4IsqWbpZv1EcHERsHSadIRuAAWza93rSbp1bzzaRY2AKMCCSSicrGhrWpetuxHNJwjYk8LdO7A%3D%3D; yht_access_token=bttb1dyaGpDU2hNT2hjenhXV1Y2MVQ0TldZVWpSaXY2L1pCM2Y0WHV4WlphaThRSEE5RmdISEQ4K2R3RTdsaUQvRVRhb29YY0JJeXZKNU9HNFhGM2c0MDNFckJlQ1ViRFZSTFJyNGFLMWpxbTA9__1565833628508; wb_at=LMjpsqrjG9ogDn3hEpv6eQeIJDtyjbZrmnkdwZlokdknqf; jwt_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjU4MzM2ODAsInNlc3Npb24iOiJ7XCJjbGllbnRJcFwiOlwiMTAuMy41LjUyXCIsXCJjcmVhdGVEYXRlXCI6MTU2NTgzMzYyOCxcImV4dFwiOntcIm9yZ1N0YXR1c1wiOlwibXVsdGlcIixcImFkbWluXCI6ZmFsc2UsXCJ5aHRfYWNjZXNzX3Rva2VuXCI6XCJidHRiMWR5YUdwRFUyaE5UMmhqZW5oWFYxWTJNVlEwVGxkWlZXcFNhWFkyTDFwQ00yWTBXSFY0V2xwaGFUaFJTRUU1Um1kSVNFUTRLMlIzUlRkc2FVUXZSVlJoYjI5WVkwSkplWFpLTlU5SE5GaEdNMmMwTURORmNrSmxRMVZpUkZaU1RGSnlOR0ZMTVdweGJUQTlfXzE1NjU4MzM2Mjg1MDhcIn0sXCJqd3RFeHBTZWNcIjo2MCxcImp3dFZhbGlkRGF0ZVwiOjAsXCJsYXN0RGF0ZVwiOjE1NjU4MzM2MjAsXCJsb2NhbGVcIjpcInpoX0NOXCIsXCJwcm9kdWN0TGluZVwiOlwidThjMy4wXCIsXCJzZXNzaW9uRXhwTWluXCI6MjE2MCxcInNlc3Npb25JZFwiOlwiTE1qcHNxcmpHOW9nRG4zaEVwdjZlUWVJSkR0eWpiWnJtbmtkd1psb2tka25xZlwiLFwic291cmNlSWRcIjpcImRpd29ya1wiLFwidGVuYW50SWRcIjpcInc3MWpxbzJhXCIsXCJ1c2VySWRcIjpcImNjNWFhYWIwLTMxYTEtNGYxNS1hZDAwLWZiNjk2Y2UzMjVmNVwifSIsInN1YiI6ImRpd29yayJ9.QIHooC_w7zo-nXiiBWTtkhswOzlNDK5n6Rke_zAV1Sc; Hm_lpvt_diwork=1565833628; PHPSESSID=tujta7aq14j0vrhpmkj1i5vo70; ck_safe_chaoke_csrf_token=d818a4b8b5281d97748c5635ef87c25d"
                },
                //要代理访问的对方路由
                router: [
                    '/contract',
                    '/uniform',
                ],
                url: 'https://wbalone-dev.yyuap.com'
            },
        ],
        // 静态托管服务
        static: 'ucf-common/src',
        // 展开打包后的资源文件，包含图片、字体图标相关
        res_extra: true,
        // 构建资源的时候产出sourceMap，调试服务不会生效
        open_source_map: false,
        // CSS loader 控制选项
        css: {
            modules: false
        },
        // 全局环境变量
        global_env: {
            __MODE__: JSON.stringify(env),
            GROBAL_HTTP_CTX: env !== 'development' ? JSON.stringify("/ucf-webapp") : JSON.stringify("/mock/936"),
            'process.env.NODE_ENV': JSON.stringify(env),
            'process.env.STATIC_HTTP_PATH': env == 'development' ? JSON.stringify(`./static`) : JSON.stringify("../static")
        },
        // 别名配置
        alias: {
            components: path.resolve(__dirname, 'ucf-common/src/components/'),
            utils: path.resolve(__dirname, 'ucf-common/src/utils/'),
            static: path.resolve(__dirname, 'ucf-common/src/static/'),
            styles: path.resolve(__dirname, 'ucf-common/src/styles/'),
            //'ucf-apps': path.resolve(__dirname, 'ucf-apps/')
        },
        // 构建排除指定包
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "tinper-bee": "TinperBee",
            "prop-types": "PropTypes"
        },
        // 加载器Loader
        loader: [],
        // 调试服务需要运行的插件
        devPlugins: [],
        // 构建服务需要运行的插件
        buildPlugins: [
            new CopyWebpackPlugin([
                {
                    from: 'ucf-common/src/static/',
                    to: `static`
                }
            ])
        ],
        res_extra: true
    }
}