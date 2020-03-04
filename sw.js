/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2018/12/16/LeetCode/leetcode1/index.html","b86fadba4f206038607fc94438f6b617"],["/blog/2018/12/16/LeetCode/leetcode2/index.html","c6493b87af3d5971056ef35728fd66bd"],["/blog/2018/12/16/LeetCode/leetcode3/index.html","4a28112a65c6a843de4777645a08ef31"],["/blog/2018/12/16/LeetCode/leetcode4/index.html","ec21400867b11c5729f415d4c91f3a04"],["/blog/2018/12/16/LeetCode/leetcode5/index.html","19bedbe9270ee83fcea9b9fe35e0908c"],["/blog/2018/12/16/LeetCode/leetcode6/index.html","8aa8f31b7fb01e9d10df5ada73c7f8f4"],["/blog/2018/12/16/hello-world/index.html","efb83a1ac447c4c250ad1a0413cacea8"],["/blog/2019/01/16/DataStructure/dataStructure1/index.html","b15c6de5a9ea646aa7e9d21cf5fa0ffb"],["/blog/2019/01/17/DataStructure/dataStructure2/index.html","b4b6fc6a9b9bf16329ce4a405479d905"],["/blog/2019/01/18/DataStructure/dataStructure3/index.html","61783f20edcd97530ad2dd24c5aacf97"],["/blog/2019/01/19/DataStructure/dataStructure4/index.html","ed099715c0a27659b0e9b9ae955173f2"],["/blog/2019/01/20/DataStructure/dataStructure5/index.html","b6f20346a1e14fe50c6b3c2683a35b73"],["/blog/2019/01/22/DataStructure/dataStructure6/index.html","1f856ffe7fd4ff1235e471acfcd2d6ac"],["/blog/2019/01/24/DataStructure/dataStructure7/index.html","764a0c8dfe6ad6c89acbed060ea0098d"],["/blog/2019/01/24/lanqiao/basic/index.html","e28032d6976a3bb0cbc74bab737d0a10"],["/blog/2019/01/26/lanqiao/basic2/index.html","00a1cabaa9823be8e48b8e9b8bcb2196"],["/blog/2019/01/26/lanqiao/basic3/index.html","d64d9df95be45214fab4c91a76e3bc78"],["/blog/2019/01/27/lanqiao/basic4/index.html","bad4fbd3181c79ad1456414998e570d4"],["/blog/2019/02/13/lanqiao/basic5/index.html","2b4a535568e2fbbbce9e71b4d7901668"],["/blog/2019/02/14/lanqiao/basic6/index.html","d7a66056609376e857a0e3a081c34162"],["/blog/2019/02/14/lanqiao/basic7/index.html","1a53ade9a8aee3fabd80684149f5a31d"],["/blog/2019/02/15/lanqiao/basic8/index.html","dec0a4e7414b000c3cdbd521f34400b7"],["/blog/2019/02/15/lanqiao/回形取数/index.html","a759924bf997939a38f986293a64ef08"],["/blog/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","5c70ccfc1836bd4532197eab49244f74"],["/blog/2019/02/16/lanqiao/芯片测试/index.html","30f31e648c4a60f7685ca9dc141a1237"],["/blog/2019/02/16/lanqiao/龟兔赛跑预测/index.html","8bca874de6f49db92ce61f00c6498d15"],["/blog/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","04aa6ca6f2a85e8c7139c53dd3c6a629"],["/blog/2019/02/18/lanqiao/Sine之舞/index.html","c5a19cb310d7a47338b6dfed829bf0a5"],["/blog/2019/02/20/lanqiao/数的读法/index.html","d92de215fb25388ae3c9636cfe1022c7"],["/blog/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","9b3b455bbe71aaab6b65dcfd2132ec79"],["/blog/2019/02/27/DataStructure/快速排序/index.html","8f2298b5f57a2711c2abf9d352086963"],["/blog/2019/02/27/lanqiao/完美的代价/index.html","231470d81928f0efb0a8b3aee7b95c3c"],["/blog/2019/03/13/lanqiao/数字排列/index.html","c3c7a7e9612399097f1ed25a784dc2cd"],["/blog/2019/03/14/lanqiao/数独排列/index.html","9bb034ee0f859aeffcc156fed8f28acf"],["/blog/2019/03/15/lanqiao/凑算式/index.html","5b8870999a76859109b218af42732b07"],["/blog/2019/03/16/lanqiao/方格填数/index.html","aac04a659750ea48d3eaf1ebf38abcb4"],["/blog/2019/03/18/lanqiao/剪邮票/index.html","3ab0694c147b4ffa6ed3f4788fca96c8"],["/blog/2019/03/29/lanqiao/审美课 /index.html","796dd2e4df7584d4541c29a12c8d182a"],["/blog/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","2de98a3fa529bbc538b4b79b9fe783b9"],["/blog/2019/04/02/lanqiao/迷宫——最小步数/index.html","9d156a244580f74180ba15e321181971"],["/blog/2019/04/08/lanqiao/深入理解线性素数筛/index.html","d3aa7b0942a23c40bd5bed768f9facf9"],["/blog/2019/04/08/lanqiao/素因子去重/index.html","0261e7104c2bc18c68c9918e996fbebf"],["/blog/2019/04/09/lanqiao/P0505阶乘取数/index.html","2f4db69f937711de89d6c7208ba2e4e2"],["/blog/about/index.html","8ea27c6f1906f21f2495c3a82d738016"],["/blog/archives/2018/12/index.html","8e0ab4fca83f5e5f56dca47aa39b6b4b"],["/blog/archives/2018/index.html","c06e901e8993fc6eb4b10ea7f07d5bae"],["/blog/archives/2019/01/index.html","3475bab55cb8cd3c6e5c2b4aae37aa4c"],["/blog/archives/2019/01/page/2/index.html","451da50e67dbb9f83f8869345fcac785"],["/blog/archives/2019/02/index.html","7ed9916a0d96082709a4a5dbdf4a5b3e"],["/blog/archives/2019/02/page/2/index.html","4dfb8b3a5d8c7cdb1630f43940d24d64"],["/blog/archives/2019/03/index.html","db285f97433aab4efff953f29deaa685"],["/blog/archives/2019/04/index.html","9a504ac891786028b2de542399731b04"],["/blog/archives/2019/index.html","c47c3a24beab9b92090c0047d042d929"],["/blog/archives/2019/page/2/index.html","8d1cb4555ae2973fe31be6c7272f687e"],["/blog/archives/2019/page/3/index.html","473a7f42b38d84417ae069c90b91ab67"],["/blog/archives/2019/page/4/index.html","5bbcab85f62587fdf59d558d0dedb8f9"],["/blog/archives/index.html","8fd73191299ed843a4954ee2076cb137"],["/blog/archives/page/2/index.html","36eebe9efebadb05cd948caf52d0ab69"],["/blog/archives/page/3/index.html","5dca44d7e2ec3bdeab02d49128db6c24"],["/blog/archives/page/4/index.html","95f51ad398243e4009c5e0e0a2f77652"],["/blog/archives/page/5/index.html","033bd7d5eb0a5e0eceebe9f859bcff2f"],["/blog/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/blog/blog/bundle.js","43946dbe98f5e914ec3af79408b87759"],["/blog/categories/Hexo/index.html","5e5abd1f31a8f6c2962e9c51a55d0606"],["/blog/categories/index.html","26b031d9baa5334dea0cf894b7e8da6c"],["/blog/categories/数据结构/index.html","f308b96ac2c21d3183d1095078475014"],["/blog/categories/算法/index.html","d2c78e008a8702f05d818bb5a04737af"],["/blog/categories/算法/page/2/index.html","0a22e50eaa4a143687cfa3b53204aafb"],["/blog/categories/蓝桥杯/index.html","b3bb2817088213b4d206aeb262bc66bc"],["/blog/categories/蓝桥杯试题/index.html","2c4515498165166a6152eed1c829dce6"],["/blog/categories/蓝桥杯试题/page/2/index.html","b2fad223958c51176621936eaf5032a3"],["/blog/css/main.css","b68f25ba7b5116354831bdc2299c0a09"],["/blog/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/blog/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/blog/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/blog/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/blog/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","3a08fc4f997237efabf4384348f90478"],["/blog/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/blog/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/blog/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/blog/js/src/clicklove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/blog/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/blog/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/blog/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/blog/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/blog/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/blog/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/blog/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/blog/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/blog/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/blog/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/blog/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/blog/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/blog/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/blog/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/blog/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/blog/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/blog/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/blog/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/blog/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/blog/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/blog/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/blog/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/blog/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/blog/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/blog/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/blog/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/blog/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/blog/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/blog/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/blog/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/blog/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/blog/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/blog/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/blog/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/blog/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/blog/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/blog/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/blog/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/blog/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/blog/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/blog/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/blog/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/blog/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/blog/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/blog/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/blog/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/blog/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/blog/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/blog/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/blog/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/blog/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/blog/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/blog/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/blog/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/blog/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/blog/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/page/2/index.html","34eaac6599821f0e5bdc15cd9a9259fb"],["/blog/page/3/index.html","341a50f307e863145e5776a192e9dd86"],["/blog/page/4/index.html","50d334c9dfef6ff7f153286f8f7c56df"],["/blog/page/5/index.html","1879838b9fdc968800a89025479c21db"],["/blog/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/blog/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/blog/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/blog/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/blog/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/blog/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/blog/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/blog/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/blog/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/blog/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/blog/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/blog/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/blog/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/blog/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/blog/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/blog/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/blog/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/blog/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/blog/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/blog/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/blog/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/blog/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/blog/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/blog/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/blog/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/blog/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/blog/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/blog/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/blog/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/blog/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/blog/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/blog/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/blog/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/blog/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/blog/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/blog/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/blog/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/blog/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/blog/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/blog/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/blog/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/blog/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/blog/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/blog/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/blog/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/blog/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/blog/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/blog/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/blog/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/blog/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/blog/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/blog/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/blog/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/blog/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/blog/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/blog/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/blog/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/blog/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/blog/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/blog/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/blog/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/blog/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/blog/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/blog/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/blog/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/blog/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/blog/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/blog/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/blog/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/blog/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/blog/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/blog/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/blog/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/blog/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/blog/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/blog/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/blog/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/blog/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/blog/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/blog/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/blog/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/blog/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/blog/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/blog/sw-register.js","52a0cd69cea7152d1f816428f913acf5"],["/blog/tags/2N皇后/index.html","a52c870e3978e6b35ebe642781f9d975"],["/blog/tags/Hexo/index.html","07916fb33dcaf3ac1d4907da2c223c2e"],["/blog/tags/N皇后/index.html","f3afaafd5c9a40e236cccff3ba31fd8f"],["/blog/tags/bat脚本/index.html","0a7a4d9dacd5add0089693ea27a3f609"],["/blog/tags/index.html","7b5d9ec718a31cd4572cc375740fb7a2"],["/blog/tags/leetcode/index.html","b7fe0b655a153308ab40805e2407a73c"],["/blog/tags/二进制表示/index.html","935ac65f6958e5662e06e3d77a019b5a"],["/blog/tags/全排列/index.html","fc9384882d6b1e6435b7c41f3b01f70c"],["/blog/tags/冒泡排序/index.html","650f6bdd4276446d29ea188a40ede34f"],["/blog/tags/图/index.html","8c78238e5021c1cea40060887a5ccfe1"],["/blog/tags/字符串处理/index.html","982c6575e1154f8fa382223beb02af24"],["/blog/tags/快速排序/index.html","09ad97e345784ccbe762abcab82d8e5b"],["/blog/tags/搜索/index.html","e1195dc761b12a7078223e0b960d10ee"],["/blog/tags/数据结构/index.html","be947f27db36b3c083ae2e70df55bc89"],["/blog/tags/最小步数/index.html","f0a37931b0e95011c39fb792671baea0"],["/blog/tags/深度优先搜索/index.html","035a7aa09e84adf94802c82b5fcf5a98"],["/blog/tags/算法/index.html","c9d500f4d452108797549bf2a7c22feb"],["/blog/tags/算法/page/2/index.html","081b94502e34dce4e30f496efc3e88b5"],["/blog/tags/算法/page/3/index.html","4fdd7cd7cc221384b977ed9f1363d99b"],["/blog/tags/算法/page/4/index.html","829290183590bba8b8021ccddc38bca2"],["/blog/tags/算法/page/5/index.html","bf70af6dafe6b53349c5406966d4d089"],["/blog/tags/素因子/index.html","f9f478e299c5bc2da8eb7261a8c1bf15"],["/blog/tags/素数筛/index.html","93cac0fb579b6f15be3eef061596adda"],["/blog/tags/蓝桥杯试题/index.html","b76ce25ce5a751bae799224cb552eb4c"],["/blog/tags/蓝桥杯试题/page/2/index.html","7ca7b8fdf48b1e70c1c263fd9383f62d"],["/blog/tags/连通图/index.html","1bac4e73a2973e1a4fc04d3558ae74e8"],["/blog/tags/阶乘取数/index.html","9aea4ed4745e0b93f828014b95b4fa8f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
