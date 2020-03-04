/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","59d64c58d994ba768f017c33259004a5"],["/2018/12/16/LeetCode/leetcode2/index.html","054741eb060f5637073dce12d2cecde3"],["/2018/12/16/LeetCode/leetcode3/index.html","bc1e99aee6ec47d71c86c42b7df49adf"],["/2018/12/16/LeetCode/leetcode4/index.html","ea82d8417f76660818d85e23eec0240d"],["/2018/12/16/LeetCode/leetcode5/index.html","b98fd74a899684ed16fe581ef455deb9"],["/2018/12/16/LeetCode/leetcode6/index.html","f06eac67b78812d341dd9ebec23838dd"],["/2018/12/16/hello-world/index.html","8ae4b7d0ba0b6e503479294b255287d2"],["/2019/01/16/DataStructure/dataStructure1/index.html","534b67dc2e4e9465f769792bb69dc2e8"],["/2019/01/17/DataStructure/dataStructure2/index.html","004b3bf7bad149bc8b32932c31d37920"],["/2019/01/18/DataStructure/dataStructure3/index.html","dd9f607ce942e30cb687c6768be0a6d6"],["/2019/01/19/DataStructure/dataStructure4/index.html","5a82e177489bb72b632c6e3b9b248032"],["/2019/01/20/DataStructure/dataStructure5/index.html","9e5859b8a15c6d2cf3abdb51fba86cdc"],["/2019/01/22/DataStructure/dataStructure6/index.html","f0900457e534aee6581a3e1aa982e47f"],["/2019/01/24/DataStructure/dataStructure7/index.html","f54d97181efa7d01755356b34689a547"],["/2019/01/24/lanqiao/basic/index.html","2acea4dce34dced084cc4f1ed32e6723"],["/2019/01/26/lanqiao/basic2/index.html","34b4295502c0d887787136ec4c30e18b"],["/2019/01/26/lanqiao/basic3/index.html","7f701c895896ff52b098010d325516a0"],["/2019/01/27/lanqiao/basic4/index.html","63bf5c2eacd72b85de93381a34be1366"],["/2019/02/13/lanqiao/basic5/index.html","cd2cf856e54f7c0755f2bfb804e9f715"],["/2019/02/14/lanqiao/basic6/index.html","d7735eac8facd04062ad2ae47e1c3183"],["/2019/02/14/lanqiao/basic7/index.html","6fe391afd7a887f9359418eb4b7c89e1"],["/2019/02/15/lanqiao/basic8/index.html","6b937e849a6c7867d3e7f61524db8ac6"],["/2019/02/15/lanqiao/回形取数/index.html","02773837cd98d08f4d89180ea17c1132"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","f89056ab2368006fd3b4f828b13c3307"],["/2019/02/16/lanqiao/芯片测试/index.html","f3a08177995331648ff0ed1e45ee9f1e"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","a69f72271191e7c6e64fc3df96126051"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","b74cbd07811ca124324950fd6a4cb2c9"],["/2019/02/18/lanqiao/Sine之舞/index.html","cb7eb631418142a54c21f04a5f26e1fa"],["/2019/02/20/lanqiao/数的读法/index.html","eae4fd6143f01e38c6bda21d9fee754a"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","facd60abffcd0a6fcfca753ac6e23bbc"],["/2019/02/27/DataStructure/快速排序/index.html","4a7bce10751c202e39c1c87ca1843f59"],["/2019/02/27/lanqiao/完美的代价/index.html","13f96850df2b2a78d506f2a4fe67a5fb"],["/2019/03/13/lanqiao/数字排列/index.html","b93cd776541d85ca1ec300649e7f9cf5"],["/2019/03/14/lanqiao/数独排列/index.html","a6e3f2e31dedabe4822033eec898ad08"],["/2019/03/15/lanqiao/凑算式/index.html","d1f01fe960e51d594f2d8046942fe4dc"],["/2019/03/16/lanqiao/方格填数/index.html","e8ba867dcff9726b428600f4a578187b"],["/2019/03/18/lanqiao/剪邮票/index.html","0e89c7604cd7528a86096ed97b7fa0ed"],["/2019/03/29/lanqiao/审美课 /index.html","25e5cbbd527ac1df0ec3c7e5ba1834d9"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","28dc19fef832b3dbe803a0e78df7758d"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","f2d0443cf150f9762e66e74f25b88868"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","572af6c19a5fc8e639cf19ac5c5910dc"],["/2019/04/08/lanqiao/素因子去重/index.html","6e6db168691c24414ff5c99be2cbcdb9"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","732a6a1043a0965656c97c1e222e5ffc"],["/about/index.html","40df76754a5cf19001414c70c728e99c"],["/archives/2018/12/index.html","36402e28ec8c79ddc468457e91de8e68"],["/archives/2018/index.html","d463ea2145d5b7458ee81aff03d2233a"],["/archives/2019/01/index.html","95eab9216f78a2d0a27f4b5a2b96793f"],["/archives/2019/01/page/2/index.html","ed1ca8e8f90d0bb8acb39baa834b89c6"],["/archives/2019/02/index.html","de67629d1e8ed5e8d5c9591dd3112569"],["/archives/2019/02/page/2/index.html","3af6aade17abfe3fd66dd13937a72835"],["/archives/2019/03/index.html","2f79e254298aa27c445f63a34f6e6354"],["/archives/2019/04/index.html","cf14aa41cdd7ca3a4486eed341fc502b"],["/archives/2019/index.html","bdefea7c82c1bb0781395090754823d2"],["/archives/2019/page/2/index.html","b8991bd68c823f28da1e9be65ba18e93"],["/archives/2019/page/3/index.html","3065d75ef75867db9fed9defbb08a504"],["/archives/2019/page/4/index.html","ce7c19c9f1f772b416f488d411a4a331"],["/archives/index.html","b986ab828befb78ac6b4dd4e1c4f8912"],["/archives/page/2/index.html","cd9c599df26291ef5bcfb47ac54d1d2c"],["/archives/page/3/index.html","2c541572917c16d10ca23255c6688489"],["/archives/page/4/index.html","a0e126ee8904a54d77507eb1ed454e26"],["/archives/page/5/index.html","3073baed9defae6e3dee92266cfa777e"],["/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/blog/bundle.js","43946dbe98f5e914ec3af79408b87759"],["/bundle.js","43946dbe98f5e914ec3af79408b87759"],["/categories/Hexo/index.html","b2ea57cc0b0b1a9eec67c4264f8dd55f"],["/categories/index.html","ad8533d8e251077a96aec837a0730c18"],["/categories/数据结构/index.html","a82a7d138210ad2860940b7edb2e6861"],["/categories/算法/index.html","92946b7575b44463b0feb23c60e2ee2d"],["/categories/算法/page/2/index.html","2a3a3bfe8bc853cd9adae5a4f3c83855"],["/categories/蓝桥杯/index.html","33e5f6ac3a2f97a94e12d0667006d89d"],["/categories/蓝桥杯试题/index.html","18b4b9c8fe5ccfa8af36878de6ca9be5"],["/categories/蓝桥杯试题/page/2/index.html","c3093c22798a238a462ac6c6a1c4dd81"],["/css/main.css","1eb17cd5cb31d5bed7f5a03202343bf5"],["/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","d8b9d7747a3d15a90fb3ad6a0e22d357"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","000baf13a6b06990b87cfb419681a4f9"],["/page/3/index.html","ae6637ecd6b2598c9e26b018cec7916f"],["/page/4/index.html","f5163515e80706c01584f96574280827"],["/page/5/index.html","c26cfb19cf06e2ce666024fe97c9f40c"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","e5ee6a6aa69a9c3d7e9d475e973d6803"],["/tags/2N皇后/index.html","1f2d16dda5f6d2c99dfa4b89fb8b671b"],["/tags/Hexo/index.html","fc4f005c2e2ecb5765508a6c1c558b8d"],["/tags/N皇后/index.html","e56e718d45ad830dbf5724e35cde83d9"],["/tags/bat脚本/index.html","f4899679d97d651cb6c284852bbf516f"],["/tags/index.html","b3aea93e18c76e89e9d111d3bf12133a"],["/tags/leetcode/index.html","3497ad9ef8ec5a19d958b0a4c3554f56"],["/tags/二进制表示/index.html","a078d85557f12f868631e4e0948ca527"],["/tags/全排列/index.html","d2601fd7c8e1bb40e1566e94d074acab"],["/tags/冒泡排序/index.html","95b1a22c964cac41928b24d31cacf110"],["/tags/图/index.html","ff0aa2d4f3387685712e52cfffbd4209"],["/tags/字符串处理/index.html","04d7fc9cfb8f044a763a26391502342f"],["/tags/快速排序/index.html","2c09078a060766dc376e3bda69a56e16"],["/tags/搜索/index.html","5d50c381c87884bfc1ad7e10e3caf44f"],["/tags/数据结构/index.html","572c89d44eabba2413dfb7783f0d1e9e"],["/tags/最小步数/index.html","ac4bd9cdec44746357a3bf349e541237"],["/tags/深度优先搜索/index.html","6b971e6f5b5c3f761275fc98ee3f2635"],["/tags/算法/index.html","df28fe0258001bb98d8d5e40ee1f1f30"],["/tags/算法/page/2/index.html","75119661dbaf0029f9a8695fb94369f8"],["/tags/算法/page/3/index.html","58a36dc60f68424ef6c8bd9db60f3b23"],["/tags/算法/page/4/index.html","a6781d695485e4ff5b00bfe00e499490"],["/tags/算法/page/5/index.html","6413da038c66a461800c1c3a2abcfc3c"],["/tags/素因子/index.html","7e4c40d3ac599364afa2535cad78ccfe"],["/tags/素数筛/index.html","e26948a6a776a5626e11f9f1e453631e"],["/tags/蓝桥杯试题/index.html","280f9152798884cccf3b34f93d73b100"],["/tags/蓝桥杯试题/page/2/index.html","e5cc70d6eee070ea33b48ce2c5345c8a"],["/tags/连通图/index.html","e88f2fb9175cbfc665971b990e7133a7"],["/tags/阶乘取数/index.html","55237b4301b65f33d348e232d47af443"]];
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
