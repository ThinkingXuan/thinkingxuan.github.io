/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","bdcbc7d9fe079ff1bf6bab7f2c6633f3"],["/2018/12/16/LeetCode/leetcode2/index.html","ca0cbc08c098bb653a93cfebf2bf59dc"],["/2018/12/16/LeetCode/leetcode3/index.html","0193277e45ecbd499f08ac991e0a53a7"],["/2018/12/16/LeetCode/leetcode4/index.html","0438894a0cdf0f38c702ab7e5c34e9a8"],["/2018/12/16/LeetCode/leetcode5/index.html","8edf877659a418fa502c02281066b778"],["/2018/12/16/LeetCode/leetcode6/index.html","a2fc795b9e9a35a1bff77c817f46d317"],["/2018/12/16/hello-world/index.html","993fd8009493a8f8bc990e3e605c5e39"],["/2019/01/16/DataStructure/dataStructure1/index.html","f31af764f173a29bceaeea91182a4bfb"],["/2019/01/17/DataStructure/dataStructure2/index.html","a39674983880f5ad5a088d4644ed65d2"],["/2019/01/18/DataStructure/dataStructure3/index.html","9ecb971684eb614a0e86c8414787ef5d"],["/2019/01/19/DataStructure/dataStructure4/index.html","3a0032856179625678092ae1d188ba6d"],["/2019/01/20/DataStructure/dataStructure5/index.html","c1d82c1c13dbcf25ed16271a1167e2f6"],["/2019/01/22/DataStructure/dataStructure6/index.html","33d6f37678c6bba58e70a4ba1ef65b0e"],["/2019/01/24/DataStructure/dataStructure7/index.html","d9e09350bcec4bfd9299f1a5181a8520"],["/2019/01/24/lanqiao/basic/index.html","76e96a4a1118c60ab9cf6ae6daefdb1b"],["/2019/01/26/lanqiao/basic2/index.html","cf2810c9abf3a3c44b3bcae9d9703de9"],["/2019/01/26/lanqiao/basic3/index.html","37216b5e08030c46e996fdccf7513157"],["/2019/01/27/lanqiao/basic4/index.html","e205bba9cb4d8509cf941fdceb643f24"],["/2019/02/13/lanqiao/basic5/index.html","5ebe472e576dbc42a8bfb4b7d01ae123"],["/2019/02/14/lanqiao/basic6/index.html","4ce6be0b8b52f1a13f76017d6f7d4a23"],["/2019/02/14/lanqiao/basic7/index.html","3f0d834d499a6216ea874db06f4b2bc8"],["/2019/02/15/lanqiao/basic8/index.html","b2870aee28cebae7fceca4e065ed1866"],["/2019/02/15/lanqiao/回形取数/index.html","c116de98d3ab29f67e143952800a0761"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","f5c9cc109755b53fee22cb39b59d6f6e"],["/2019/02/16/lanqiao/芯片测试/index.html","7d085b0e931ec7f0ac49953c2caf529c"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","bd4cee9e5713a3da9ade93798292be23"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","2d153efda304a2e61df1d51c6679df25"],["/2019/02/18/lanqiao/Sine之舞/index.html","952a45655d1674c5e5de14dcfd8203f9"],["/2019/02/20/lanqiao/数的读法/index.html","93c1bd73c6c70018e9037aab8d07d611"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","97e6bddb39145ce57b4595a4b90b1538"],["/2019/02/27/DataStructure/快速排序/index.html","96ac488b9cc45725a2da61b8b993d7b6"],["/2019/02/27/lanqiao/完美的代价/index.html","85ba23877d15be7b657d2a77e945922c"],["/2019/03/13/lanqiao/数字排列/index.html","616972c3c174036282ebe4d8f936b2e1"],["/2019/03/14/lanqiao/数独排列/index.html","54ede09238d673d26a196df956ad11ec"],["/2019/03/15/lanqiao/凑算式/index.html","49c47b90d4db9b21974e8d57fd9f4e78"],["/2019/03/16/lanqiao/方格填数/index.html","a9edf704b8ec937d0de8d13a1dfb923e"],["/2019/03/18/lanqiao/剪邮票/index.html","ead7eff208b3df9d1273e2dab05af92d"],["/2019/03/29/lanqiao/审美课 /index.html","bacae9cef5298ea5797e9b70f8a8fc93"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","041d3aa111f346adbe02599b5be528d5"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","ac84f9350ae21dea41c2ce6e8b55b77e"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","bf923920e0c76856ce4b3849655beb4a"],["/2019/04/08/lanqiao/素因子去重/index.html","90fe4b786edbdb72bbe6ebbc6855d665"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","728dccdc4b770dc670c41b080375308e"],["/about/index.html","d08519ff686cc2e95ec7f5c26915a100"],["/archives/2018/12/index.html","d997c8f03d93c3fd584e691efa760abb"],["/archives/2018/index.html","7009f60e5b620d4ae5658c050a60ee87"],["/archives/2019/01/index.html","86a531f00ff74e0adddeca19087f2719"],["/archives/2019/01/page/2/index.html","52b31ef6f52544fd715ae9d8ce1fc916"],["/archives/2019/02/index.html","16cea1168445c03c12807df58df8c948"],["/archives/2019/02/page/2/index.html","3f18ad6ac862415ea35adb9726d12a66"],["/archives/2019/03/index.html","08d4c3728f7500c3c324f0f8430cd271"],["/archives/2019/04/index.html","1fce8aabfd6b18efc0defa64d9cc1a2a"],["/archives/2019/index.html","849f846930f63ce71c0edd9ef9acf3c3"],["/archives/2019/page/2/index.html","0f0c75b20220059d199d107d853c619a"],["/archives/2019/page/3/index.html","92282fd6fbb53ccf76c856fa1c9dd961"],["/archives/2019/page/4/index.html","3f594c8813dd0ae3e975e06dde390bfe"],["/archives/index.html","26129d88ee44d74cc9591fec3a547cfa"],["/archives/page/2/index.html","d9fa1a094a2c6d02d597fe8af4990955"],["/archives/page/3/index.html","d52a07fe2f66a9bda5213031af1f52b0"],["/archives/page/4/index.html","6ddf592cdd6df0050aa030768c1427cb"],["/archives/page/5/index.html","1771f5c885ddff94b886b2314b19ddf2"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","618743fd120d76812ef0fcc6e4d156d2"],["/categories/index.html","c817c8761d680b7e30719ee1371fd65c"],["/categories/数据结构/index.html","27f869bd531b1fda65d25533c262c624"],["/categories/算法/index.html","8a236f2389e76e85a8dfa01371e914bd"],["/categories/算法/page/2/index.html","c68117bfa5ef9b3603c285ab21d14185"],["/categories/蓝桥杯/index.html","e81f68b247a83e89bd8dd05589cb8726"],["/categories/蓝桥杯试题/index.html","d0d6de6c638eb98885759faab8b6a40d"],["/categories/蓝桥杯试题/page/2/index.html","586ed2e899fc573d5b80fd4d1d1726c3"],["/css/index.css","8a7251342de86c2a07718c61ac63cfcf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","42d6b5e1c3c42dec6585eb898d635398"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","cc3367ae16d46a898f55ca362b346433"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","6758b33e28e99159e6c98aa9f04c5504"],["/messageboard/index.html","44aa2429871ceb1753bd8b23ce4e133f"],["/music/index.html","3fa6cf18f9552cf873d4f91ecd154e97"],["/page/2/index.html","3f995a0ee3888591ac8a5d05691f7ff4"],["/page/3/index.html","d220794ff500b32160a3fe60899ff1dc"],["/page/4/index.html","fe8121c68a00bc09eb9707704b72726c"],["/page/5/index.html","c119994a5b6defe9ab81849125e0767e"],["/sw-register.js","5c537f04eccec4147d077caddb78cfee"],["/tags/2N皇后/index.html","ead6945e11b80258c3d6552bc3bfc765"],["/tags/Hexo/index.html","d638600d52a8f0d332b0806777be373b"],["/tags/N皇后/index.html","2f7eafd9f9467bd102c3fdbf7894c2f1"],["/tags/bat脚本/index.html","f87bc3906a1f8c63933268944eb8a686"],["/tags/index.html","e35f1f0c8051b6e2f65459e4db5e142a"],["/tags/leetcode/index.html","b8d167d1d9ec2733fbf921e960656bbd"],["/tags/二进制表示/index.html","aeaed295efe4620a35e40edffa90ea0c"],["/tags/全排列/index.html","87752da240c7a7dc1541152c1c2b10b4"],["/tags/冒泡排序/index.html","853e397f1c0e9cc272b0975c65f78717"],["/tags/图/index.html","7fe1a8ed0c41408329daab67afa49bb3"],["/tags/字符串处理/index.html","42196c9cc1a58875e19126863e2c3306"],["/tags/快速排序/index.html","5dafd47f22be990c901037586f3b1b50"],["/tags/搜索/index.html","fba24dc78308e2b9598bb3dd54fb5026"],["/tags/数据结构/index.html","712342ab9b93577a8607a08c8dc08b80"],["/tags/最小步数/index.html","0506f8c0787f25c2ad96f057bf87fc04"],["/tags/深度优先搜索/index.html","174cf500a0a3bc74cb81457f76b3859a"],["/tags/算法/index.html","5a891b977d8947f18a8024e288ef5d4a"],["/tags/算法/page/2/index.html","a1183df6f81f36804dba65301f32e5fc"],["/tags/算法/page/3/index.html","49a1e2c384b8570c0adc0d3380ccc8ec"],["/tags/算法/page/4/index.html","014c9cb66e8f01c2e896e1279f800bfd"],["/tags/算法/page/5/index.html","59367dc87742b34cb4aef96845ab213b"],["/tags/素因子/index.html","134b415ea4b32bf299ffd7068d7c9fab"],["/tags/素数筛/index.html","6c581fece6255eee532bf8d02e60c16f"],["/tags/蓝桥杯试题/index.html","c9b90179f284051b5d8caa83324b8f45"],["/tags/蓝桥杯试题/page/2/index.html","eb61310d4b002db08bcf89d6009c586c"],["/tags/连通图/index.html","0f967df1b78e2a6879c3846e427b4afc"],["/tags/阶乘取数/index.html","1bfb946863749cd1059bf80d2085c354"]];
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
