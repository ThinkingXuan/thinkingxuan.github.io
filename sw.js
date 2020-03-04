/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["https://you3xuan.gitee.io/blog/2018/12/16/LeetCode/leetcode1/index.html","09991cb18337178f13787719c8a10ec4"],["https://you3xuan.gitee.io/blog/2018/12/16/LeetCode/leetcode2/index.html","47d2e532f0e8b46534a2b13d7b181502"],["https://you3xuan.gitee.io/blog/2018/12/16/LeetCode/leetcode3/index.html","c4702ecb007b656a00ab075e3adc46b1"],["https://you3xuan.gitee.io/blog/2018/12/16/LeetCode/leetcode4/index.html","e2b10c973e2e967c9f00af78550710db"],["https://you3xuan.gitee.io/blog/2018/12/16/LeetCode/leetcode5/index.html","dc8209d10d15e8323b88c10b12b105ad"],["https://you3xuan.gitee.io/blog/2018/12/16/LeetCode/leetcode6/index.html","b812dead4f505576dda20ca9d02ee2fc"],["https://you3xuan.gitee.io/blog/2018/12/16/hello-world/index.html","0c44cf3ec151ed7d962587137ec9dd76"],["https://you3xuan.gitee.io/blog/2019/01/16/DataStructure/dataStructure1/index.html","ab3e7ed232297f2f0c420f6580d34670"],["https://you3xuan.gitee.io/blog/2019/01/17/DataStructure/dataStructure2/index.html","af5d6381c6716a5e6a43ca547c8c3ede"],["https://you3xuan.gitee.io/blog/2019/01/18/DataStructure/dataStructure3/index.html","8e918ba6c5d008b373d799f770dc7420"],["https://you3xuan.gitee.io/blog/2019/01/19/DataStructure/dataStructure4/index.html","8201c5e43953a425885feab18fdb9ca1"],["https://you3xuan.gitee.io/blog/2019/01/20/DataStructure/dataStructure5/index.html","a4b0fdb64c839ca30da783a890e35d89"],["https://you3xuan.gitee.io/blog/2019/01/22/DataStructure/dataStructure6/index.html","a1373d7837a2f3b0e3ecc4b7a86f200e"],["https://you3xuan.gitee.io/blog/2019/01/24/DataStructure/dataStructure7/index.html","f1da958a94361b84bb297ae8557561ec"],["https://you3xuan.gitee.io/blog/2019/01/24/lanqiao/basic/index.html","45cd2d2d076d60ccd81e1cf00d5ad11f"],["https://you3xuan.gitee.io/blog/2019/01/26/lanqiao/basic2/index.html","23d61226dbabcc0763b810ca71c79ad5"],["https://you3xuan.gitee.io/blog/2019/01/26/lanqiao/basic3/index.html","c90809c2b7a818f7e1c77ba7e39a785a"],["https://you3xuan.gitee.io/blog/2019/01/27/lanqiao/basic4/index.html","f0c1443d42d15d3405a860209b49d804"],["https://you3xuan.gitee.io/blog/2019/02/13/lanqiao/basic5/index.html","919229d91fd66dc48d42bc04d2f923b7"],["https://you3xuan.gitee.io/blog/2019/02/14/lanqiao/basic6/index.html","eac60cf21c27e56fcf4b0cc986384e94"],["https://you3xuan.gitee.io/blog/2019/02/14/lanqiao/basic7/index.html","ff293688f7950917066642f22bdf169a"],["https://you3xuan.gitee.io/blog/2019/02/15/lanqiao/basic8/index.html","682959733ade48b9d2363679e1c15620"],["https://you3xuan.gitee.io/blog/2019/02/15/lanqiao/回形取数/index.html","283292580f7f76583eeec8b363ba36ee"],["https://you3xuan.gitee.io/blog/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","fcde16d6c2192242deeebc185f14e539"],["https://you3xuan.gitee.io/blog/2019/02/16/lanqiao/芯片测试/index.html","70de982a0bcc8dd8404687c956652af9"],["https://you3xuan.gitee.io/blog/2019/02/16/lanqiao/龟兔赛跑预测/index.html","2cd22037d076965e31e7644e22fb81af"],["https://you3xuan.gitee.io/blog/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","273f2c2d948de66bc7b48db3b52508a7"],["https://you3xuan.gitee.io/blog/2019/02/18/lanqiao/Sine之舞/index.html","0356f1f1c98f4093e37d11c3de6a2634"],["https://you3xuan.gitee.io/blog/2019/02/20/lanqiao/数的读法/index.html","f4f0d94b6fc65d0bcacebc521eed5ca3"],["https://you3xuan.gitee.io/blog/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","a38c0a3d3363f749f45585adfd85d8ee"],["https://you3xuan.gitee.io/blog/2019/02/27/DataStructure/快速排序/index.html","6ae0bd9d84248728c92613a70a9d6be8"],["https://you3xuan.gitee.io/blog/2019/02/27/lanqiao/完美的代价/index.html","b12e472ecb17b6bdd075f3d7437de9ca"],["https://you3xuan.gitee.io/blog/2019/03/13/lanqiao/数字排列/index.html","2d32c2b14ac675246ea54597ee01235c"],["https://you3xuan.gitee.io/blog/2019/03/14/lanqiao/数独排列/index.html","0e567c7afa5736cd159489ae5b493199"],["https://you3xuan.gitee.io/blog/2019/03/15/lanqiao/凑算式/index.html","5d0d7b957ec97fd5574d80579eb75d9e"],["https://you3xuan.gitee.io/blog/2019/03/16/lanqiao/方格填数/index.html","4760c04083484e0d865c9ea96a7990c2"],["https://you3xuan.gitee.io/blog/2019/03/18/lanqiao/剪邮票/index.html","f85e07ba7b05a8a4bcbf6468598479d0"],["https://you3xuan.gitee.io/blog/2019/03/29/lanqiao/审美课 /index.html","65b765b6777d9107415a155b747ce14f"],["https://you3xuan.gitee.io/blog/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","f64a0663cb542072522a9c2f464ddc66"],["https://you3xuan.gitee.io/blog/2019/04/02/lanqiao/迷宫——最小步数/index.html","5b4c257fc1a4a8f1b611646a25e14cd6"],["https://you3xuan.gitee.io/blog/2019/04/08/lanqiao/深入理解线性素数筛/index.html","6c1595666a3722748a017e7ce9931b69"],["https://you3xuan.gitee.io/blog/2019/04/08/lanqiao/素因子去重/index.html","a4205a9edadbedfde5574e295dd13bad"],["https://you3xuan.gitee.io/blog/2019/04/09/lanqiao/P0505阶乘取数/index.html","71842a406449f24b637ef7c4d42e5551"],["https://you3xuan.gitee.io/blog/about/index.html","657e1dc78f09eb72f1c2d2920bd948ae"],["https://you3xuan.gitee.io/blog/archives/2018/12/index.html","169d4611acff9a90b8ba87e905411f26"],["https://you3xuan.gitee.io/blog/archives/2018/index.html","a945095a03566e8be744001d75687b2f"],["https://you3xuan.gitee.io/blog/archives/2019/01/index.html","f5d0cf48468b234afe076c870c6dcbdf"],["https://you3xuan.gitee.io/blog/archives/2019/01/page/2/index.html","4b9a77f3ec181b7d8b40777063833f3a"],["https://you3xuan.gitee.io/blog/archives/2019/02/index.html","3c1253cca035c230b53bf7eceba5faff"],["https://you3xuan.gitee.io/blog/archives/2019/02/page/2/index.html","46dcc38bb89455ae02c901fa77711a6d"],["https://you3xuan.gitee.io/blog/archives/2019/03/index.html","14b58fafe826de0026e1f990ff4887c7"],["https://you3xuan.gitee.io/blog/archives/2019/04/index.html","48c7d5fac2212ce871a7ae0e7e45d450"],["https://you3xuan.gitee.io/blog/archives/2019/index.html","cbf0a5daf603d91c91ad32c2d6094bdc"],["https://you3xuan.gitee.io/blog/archives/2019/page/2/index.html","c47373676e94ae99cd24bcbe11ff6823"],["https://you3xuan.gitee.io/blog/archives/2019/page/3/index.html","c61bb903757eda7bd721426215c968b2"],["https://you3xuan.gitee.io/blog/archives/2019/page/4/index.html","847c1a5e9c71e5ca34bdd9b47b7d9bab"],["https://you3xuan.gitee.io/blog/archives/index.html","229b7a9b3828942417bdece7bb5c9c4c"],["https://you3xuan.gitee.io/blog/archives/page/2/index.html","55f35ecd1ee8793e314924dbd6cabd95"],["https://you3xuan.gitee.io/blog/archives/page/3/index.html","e9c5a093b36491461f321903d9f35ea4"],["https://you3xuan.gitee.io/blog/archives/page/4/index.html","8691cb35e48d42e747ad1dcc31b3ea66"],["https://you3xuan.gitee.io/blog/archives/page/5/index.html","0602065923a8ab8e4c9b25623b28efc0"],["https://you3xuan.gitee.io/blog/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["https://you3xuan.gitee.io/blog/bundle.js","43946dbe98f5e914ec3af79408b87759"],["https://you3xuan.gitee.io/blog/categories/Hexo/index.html","7333af2f234926d573dcc8434aa8397f"],["https://you3xuan.gitee.io/blog/categories/index.html","b44f0f909ac45fa97e7b4cd2b8d3ecca"],["https://you3xuan.gitee.io/blog/categories/数据结构/index.html","5858a3d6025e3d033ddf7d4f46784b95"],["https://you3xuan.gitee.io/blog/categories/算法/index.html","f5831f74d7dd0e645f06e07ecc28604f"],["https://you3xuan.gitee.io/blog/categories/算法/page/2/index.html","3ccd8536137aa39510eb164a2fec373d"],["https://you3xuan.gitee.io/blog/categories/蓝桥杯/index.html","0538d3764739d61e1940c68437a4c532"],["https://you3xuan.gitee.io/blog/categories/蓝桥杯试题/index.html","e9271f60a04301e7edcdd5dcaf1d386a"],["https://you3xuan.gitee.io/blog/categories/蓝桥杯试题/page/2/index.html","de57b8475ab9b0a9b1010e0a484eaec5"],["https://you3xuan.gitee.io/blog/css/main.css","081178b7812d8b6d1589ae6ce4697eda"],["https://you3xuan.gitee.io/blog/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["https://you3xuan.gitee.io/blog/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["https://you3xuan.gitee.io/blog/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["https://you3xuan.gitee.io/blog/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["https://you3xuan.gitee.io/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["https://you3xuan.gitee.io/blog/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["https://you3xuan.gitee.io/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["https://you3xuan.gitee.io/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["https://you3xuan.gitee.io/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["https://you3xuan.gitee.io/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["https://you3xuan.gitee.io/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["https://you3xuan.gitee.io/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["https://you3xuan.gitee.io/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["https://you3xuan.gitee.io/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["https://you3xuan.gitee.io/blog/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["https://you3xuan.gitee.io/blog/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["https://you3xuan.gitee.io/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["https://you3xuan.gitee.io/blog/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["https://you3xuan.gitee.io/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["https://you3xuan.gitee.io/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["https://you3xuan.gitee.io/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["https://you3xuan.gitee.io/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["https://you3xuan.gitee.io/blog/index.html","c209e32c163b52ada5bb5947f20828a0"],["https://you3xuan.gitee.io/blog/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["https://you3xuan.gitee.io/blog/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["https://you3xuan.gitee.io/blog/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["https://you3xuan.gitee.io/blog/js/src/clicklove.js","7bcfdb57debd43483174cf9e15ab37cc"],["https://you3xuan.gitee.io/blog/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["https://you3xuan.gitee.io/blog/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["https://you3xuan.gitee.io/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["https://you3xuan.gitee.io/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["https://you3xuan.gitee.io/blog/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["https://you3xuan.gitee.io/blog/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["https://you3xuan.gitee.io/blog/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["https://you3xuan.gitee.io/blog/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["https://you3xuan.gitee.io/blog/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["https://you3xuan.gitee.io/blog/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["https://you3xuan.gitee.io/blog/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["https://you3xuan.gitee.io/blog/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["https://you3xuan.gitee.io/blog/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["https://you3xuan.gitee.io/blog/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["https://you3xuan.gitee.io/blog/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["https://you3xuan.gitee.io/blog/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["https://you3xuan.gitee.io/blog/lib/Han/dist/han.min.js","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["https://you3xuan.gitee.io/blog/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["https://you3xuan.gitee.io/blog/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["https://you3xuan.gitee.io/blog/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["https://you3xuan.gitee.io/blog/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["https://you3xuan.gitee.io/blog/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["https://you3xuan.gitee.io/blog/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["https://you3xuan.gitee.io/blog/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["https://you3xuan.gitee.io/blog/lib/font-awesome/css/font-awesome.css","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["https://you3xuan.gitee.io/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["https://you3xuan.gitee.io/blog/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["https://you3xuan.gitee.io/blog/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["https://you3xuan.gitee.io/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["https://you3xuan.gitee.io/blog/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["https://you3xuan.gitee.io/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["https://you3xuan.gitee.io/blog/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["https://you3xuan.gitee.io/blog/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["https://you3xuan.gitee.io/blog/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["https://you3xuan.gitee.io/blog/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["https://you3xuan.gitee.io/blog/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["https://you3xuan.gitee.io/blog/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["https://you3xuan.gitee.io/blog/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["https://you3xuan.gitee.io/blog/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["https://you3xuan.gitee.io/blog/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["https://you3xuan.gitee.io/blog/lib/three/canvas_lines.min.js","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/lib/three/canvas_sphere.min.js","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/lib/three/three-waves.min.js","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["https://you3xuan.gitee.io/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["https://you3xuan.gitee.io/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["https://you3xuan.gitee.io/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["https://you3xuan.gitee.io/blog/lib/velocity/velocity.min.js","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/lib/velocity/velocity.ui.js","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["https://you3xuan.gitee.io/blog/page/2/index.html","1932c41950873c22e9ab1104ad377491"],["https://you3xuan.gitee.io/blog/page/3/index.html","384c21d99a7d53e2b5f7ebe3ef30bada"],["https://you3xuan.gitee.io/blog/page/4/index.html","92c7fee6aa7b6325dbbda9444bdd31e5"],["https://you3xuan.gitee.io/blog/page/5/index.html","1f6f84a596a7dc3605ce896e8ff61cc9"],["https://you3xuan.gitee.io/blog/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["https://you3xuan.gitee.io/blog/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["https://you3xuan.gitee.io/blog/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["https://you3xuan.gitee.io/blog/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["https://you3xuan.gitee.io/blog/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["https://you3xuan.gitee.io/blog/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["https://you3xuan.gitee.io/blog/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["https://you3xuan.gitee.io/blog/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["https://you3xuan.gitee.io/blog/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["https://you3xuan.gitee.io/blog/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["https://you3xuan.gitee.io/blog/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["https://you3xuan.gitee.io/blog/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["https://you3xuan.gitee.io/blog/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["https://you3xuan.gitee.io/blog/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["https://you3xuan.gitee.io/blog/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["https://you3xuan.gitee.io/blog/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["https://you3xuan.gitee.io/blog/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["https://you3xuan.gitee.io/blog/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["https://you3xuan.gitee.io/blog/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["https://you3xuan.gitee.io/blog/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["https://you3xuan.gitee.io/blog/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["https://you3xuan.gitee.io/blog/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["https://you3xuan.gitee.io/blog/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["https://you3xuan.gitee.io/blog/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["https://you3xuan.gitee.io/blog/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["https://you3xuan.gitee.io/blog/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["https://you3xuan.gitee.io/blog/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["https://you3xuan.gitee.io/blog/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["https://you3xuan.gitee.io/blog/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["https://you3xuan.gitee.io/blog/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["https://you3xuan.gitee.io/blog/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["https://you3xuan.gitee.io/blog/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["https://you3xuan.gitee.io/blog/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["https://you3xuan.gitee.io/blog/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["https://you3xuan.gitee.io/blog/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["https://you3xuan.gitee.io/blog/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["https://you3xuan.gitee.io/blog/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["https://you3xuan.gitee.io/blog/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["https://you3xuan.gitee.io/blog/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["https://you3xuan.gitee.io/blog/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["https://you3xuan.gitee.io/blog/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["https://you3xuan.gitee.io/blog/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["https://you3xuan.gitee.io/blog/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["https://you3xuan.gitee.io/blog/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["https://you3xuan.gitee.io/blog/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["https://you3xuan.gitee.io/blog/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["https://you3xuan.gitee.io/blog/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["https://you3xuan.gitee.io/blog/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["https://you3xuan.gitee.io/blog/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["https://you3xuan.gitee.io/blog/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["https://you3xuan.gitee.io/blog/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["https://you3xuan.gitee.io/blog/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["https://you3xuan.gitee.io/blog/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["https://you3xuan.gitee.io/blog/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["https://you3xuan.gitee.io/blog/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["https://you3xuan.gitee.io/blog/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["https://you3xuan.gitee.io/blog/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["https://you3xuan.gitee.io/blog/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["https://you3xuan.gitee.io/blog/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["https://you3xuan.gitee.io/blog/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["https://you3xuan.gitee.io/blog/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["https://you3xuan.gitee.io/blog/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["https://you3xuan.gitee.io/blog/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["https://you3xuan.gitee.io/blog/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["https://you3xuan.gitee.io/blog/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["https://you3xuan.gitee.io/blog/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["https://you3xuan.gitee.io/blog/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["https://you3xuan.gitee.io/blog/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["https://you3xuan.gitee.io/blog/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["https://you3xuan.gitee.io/blog/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["https://you3xuan.gitee.io/blog/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["https://you3xuan.gitee.io/blog/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["https://you3xuan.gitee.io/blog/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["https://you3xuan.gitee.io/blog/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["https://you3xuan.gitee.io/blog/sw-register.js","8516ac47224e45dca8baa5cbcd56ad92"],["https://you3xuan.gitee.io/blog/tags/2N皇后/index.html","80cfbfc1b9a3806a22238c0ad2d3b8e5"],["https://you3xuan.gitee.io/blog/tags/Hexo/index.html","4d30866afcdcecd73f8d5622e237561b"],["https://you3xuan.gitee.io/blog/tags/N皇后/index.html","d30a1eeb6abe39466f0b618e824a3ac3"],["https://you3xuan.gitee.io/blog/tags/bat脚本/index.html","281f1480ae480f91f8b2f0d78996fb34"],["https://you3xuan.gitee.io/blog/tags/index.html","663c7e676365e4f36568f38135d10675"],["https://you3xuan.gitee.io/blog/tags/leetcode/index.html","a83b4a8a12aef6fdb9fc79937382257e"],["https://you3xuan.gitee.io/blog/tags/二进制表示/index.html","32cf48ee4f2bb61ba6c147e6a45ff959"],["https://you3xuan.gitee.io/blog/tags/全排列/index.html","982f67bbaf449d5dfce72cd99ee9f1eb"],["https://you3xuan.gitee.io/blog/tags/冒泡排序/index.html","b184ef740623ec82a154da228cafd2cc"],["https://you3xuan.gitee.io/blog/tags/图/index.html","7ea20f20a1341f70f51071662d3c8526"],["https://you3xuan.gitee.io/blog/tags/字符串处理/index.html","c2ceb633dff73da99d91f6623e70a7b0"],["https://you3xuan.gitee.io/blog/tags/快速排序/index.html","b18c81d3bf6b7cba756434ff9981d908"],["https://you3xuan.gitee.io/blog/tags/搜索/index.html","e42df29df7e0dd7050df6d694299fe4b"],["https://you3xuan.gitee.io/blog/tags/数据结构/index.html","b291f3141c813b7ab5cc2442222fb913"],["https://you3xuan.gitee.io/blog/tags/最小步数/index.html","6012d57913f8cd65e0185e15a8b5c4b1"],["https://you3xuan.gitee.io/blog/tags/深度优先搜索/index.html","58ac42fd5902da3cf923bcb93fa016eb"],["https://you3xuan.gitee.io/blog/tags/算法/index.html","216017e7ef1791497fe16ee07bf6a248"],["https://you3xuan.gitee.io/blog/tags/算法/page/2/index.html","2c3d478d5eca227ff2901c38a0ddebb7"],["https://you3xuan.gitee.io/blog/tags/算法/page/3/index.html","7addda53959cd5bac02d7e4b6873084e"],["https://you3xuan.gitee.io/blog/tags/算法/page/4/index.html","54e7a9a917041b13eefa85d1f011d935"],["https://you3xuan.gitee.io/blog/tags/算法/page/5/index.html","bde820ba0417ff40620164a270b9e05d"],["https://you3xuan.gitee.io/blog/tags/素因子/index.html","bfe5a26a2676e8f8bf0aec798a3c628d"],["https://you3xuan.gitee.io/blog/tags/素数筛/index.html","b78ea640071cd705dad22448c88f281e"],["https://you3xuan.gitee.io/blog/tags/蓝桥杯试题/index.html","a5a16f65d8e3646773c3acfe1746bfbf"],["https://you3xuan.gitee.io/blog/tags/蓝桥杯试题/page/2/index.html","eb1cf4ae8c8c3b17c7635df820483970"],["https://you3xuan.gitee.io/blog/tags/连通图/index.html","da368caee89a2c0fdfe30ebeb6b3d5e3"],["https://you3xuan.gitee.io/blog/tags/阶乘取数/index.html","93fbf52eb81d769115b11c223b53583f"]];
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
