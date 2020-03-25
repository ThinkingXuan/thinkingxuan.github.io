/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","2930feb7fd98b33ab392cd6d9c80ea1e"],["/2018/12/16/LeetCode/leetcode2/index.html","53fdd4d5c147341237b654df06589914"],["/2018/12/16/LeetCode/leetcode3/index.html","6f0fec757b3d023cc1c890f3367a6e41"],["/2018/12/16/LeetCode/leetcode4/index.html","a5e346e94c83efa6a4146502a34f38fb"],["/2018/12/16/LeetCode/leetcode5/index.html","b329a8f808d85a0bc92a3568eb7828a5"],["/2018/12/16/LeetCode/leetcode6/index.html","1969e4e9be5398f9a98e0725902665e4"],["/2018/12/16/hello-world/index.html","912342c2cf04329caf063cc0e92e62d3"],["/2019/01/16/DataStructure/dataStructure1/index.html","b71e09e18157d0c4ed54becc16650ee1"],["/2019/01/17/DataStructure/dataStructure2/index.html","1535079c2255a2b9e393671fa889d0e3"],["/2019/01/18/DataStructure/dataStructure3/index.html","bbb442b73ca84f36b1bceae1b15e02b4"],["/2019/01/19/DataStructure/dataStructure4/index.html","d7be79f8790044feec229e152d4febfd"],["/2019/01/20/DataStructure/dataStructure5/index.html","959e1c75ce211e99d1b871544d5e183c"],["/2019/01/22/DataStructure/dataStructure6/index.html","f8abff8df3e581742a96e69c4a41b68b"],["/2019/01/24/DataStructure/dataStructure7/index.html","e54c5c4b843250a2e7f4ed3617362a9d"],["/2019/01/24/lanqiao/basic/index.html","6a1b49f00f62abfab8b47592d9275eb2"],["/2019/01/26/lanqiao/basic2/index.html","1547127dc29237e39fa95d2e18675084"],["/2019/01/26/lanqiao/basic3/index.html","9dfcb7342c8edfc564ab3b79ad331583"],["/2019/01/27/lanqiao/basic4/index.html","fdb8bce854b7586cbb2fda5c332e8889"],["/2019/02/13/lanqiao/basic5/index.html","28d00c138655d60861c2aa0254863292"],["/2019/02/14/lanqiao/basic6/index.html","674e1466e96a8c87dbadc2d6b39c9617"],["/2019/02/14/lanqiao/basic7/index.html","66b33460677c9cf38c975be99db1c375"],["/2019/02/15/lanqiao/basic8/index.html","a168591b4e1b027034a154dc1d7c98cb"],["/2019/02/15/lanqiao/回形取数/index.html","2feb49a61d5a0efe9582fb9d8a3baf27"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","7fe7c4b42b19381c797da479f5cde1cb"],["/2019/02/16/lanqiao/芯片测试/index.html","8fad17e7bc81afb6b3ff8c45c7d1f52e"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","c2b7ef334fa77f10f2135fc54bffe216"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","70748755eaf1776d4fea3685df6e177a"],["/2019/02/18/lanqiao/Sine之舞/index.html","e32958514b2244f718e19fd0ca4e170f"],["/2019/02/20/lanqiao/数的读法/index.html","8d2e4e0ea2317db20d91409e7471d1ae"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","c968daaa50f624788a2c691a3f4214af"],["/2019/02/27/DataStructure/快速排序/index.html","b62b036b1baa116b9749fffe3f1a62c0"],["/2019/02/27/lanqiao/完美的代价/index.html","2894dbe40decbbc21756148f2d4ff13e"],["/2019/03/13/lanqiao/数字排列/index.html","d241b83ca87df438c0a12d8ec5df59ac"],["/2019/03/14/lanqiao/数独排列/index.html","bec2298cb81261e5e28fc1de087c36c5"],["/2019/03/15/lanqiao/凑算式/index.html","99b3075d28adce17c2aa683e982b477a"],["/2019/03/16/lanqiao/方格填数/index.html","29932b41c193db1b7ab90614967ca388"],["/2019/03/18/lanqiao/剪邮票/index.html","9eeec37e1bb0aa827153884d47af3d80"],["/2019/03/29/lanqiao/审美课 /index.html","cc077830c9306ac6e6a21fb5c72268e7"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","e15b6c25325da847e2a5dc8d27e340c3"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","28c91aef34c02b68d5f714141196952a"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","78a9dc3af15ec33e8038fed2c17984ef"],["/2019/04/08/lanqiao/素因子去重/index.html","aa181b2f26a80b07e9f4aeb8a09edd6e"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","d7a541169645d047056db3f02ba9f8cd"],["/2020/03/09/git/从Github指定仓库中删除文件或文件夹/index.html","26ec226a1e03daec78dfec37df3b8464"],["/2020/03/25/操作系统/操作系统真题答案/index.html","ea38d79f13464764fa7bb40d7a5782ff"],["/about/index.html","2a78d44df8631ee6801660cd5f03d16e"],["/archives/2018/12/index.html","f01c7a83f9e1c055f7ebb3c1e29758e2"],["/archives/2018/index.html","c3250c63a489a6d81e790ac6094683cb"],["/archives/2019/01/index.html","7604dd13273a96416ed2186175f8c92d"],["/archives/2019/01/page/2/index.html","cebbb55f91508b10592d00e9dbe28382"],["/archives/2019/02/index.html","b9bd21867e775794b32dfa85610e0541"],["/archives/2019/02/page/2/index.html","2574e20c9f878fb0b8390adcf350676f"],["/archives/2019/03/index.html","5e9cd67783c1d8578a6903f65122a62e"],["/archives/2019/04/index.html","262dbef22354373f95b9174ab487682c"],["/archives/2019/index.html","0142a19d14a916d3aacb58b37e6b7205"],["/archives/2019/page/2/index.html","71cc5d7ce0728f2e7c25dbd484677d87"],["/archives/2019/page/3/index.html","7eb420cd4fbc9f0a6a93d24c135cc84f"],["/archives/2019/page/4/index.html","cef849649e2fa89967821af52296f770"],["/archives/2020/03/index.html","00861167f581bf52f632e038082d506b"],["/archives/2020/index.html","2bf9c4930744f05e5ccede93e8213507"],["/archives/index.html","b34637a27b68750b39ae63fce51c71c3"],["/archives/page/2/index.html","124dc7ad28141f546c57d634aafb7438"],["/archives/page/3/index.html","4b94ee9d71cb19fabc945eb34493aa12"],["/archives/page/4/index.html","853431789bbefa7d41b43dcd3447f307"],["/archives/page/5/index.html","b832b6b2e0c75c562e2c6b4b930c520e"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","7234fe5ef21facdefb6adb383ed24f09"],["/categories/git/index.html","6b719bab5d143339ad2e2876a154e416"],["/categories/index.html","d49c755f278a7c27bf8763d8988be151"],["/categories/数据结构/index.html","379ac22310af2836577917f41c3a2493"],["/categories/算法/index.html","1a46f3852154fe28068b82a84a3b4037"],["/categories/算法/page/2/index.html","e4d3a02bbe819cbac563b8c89e56c843"],["/categories/蓝桥杯/index.html","989a894cd1bf391aa84db8b3b4fc18b1"],["/categories/蓝桥杯试题/index.html","5492b7727cc975f6a11c6802d1507cab"],["/categories/蓝桥杯试题/page/2/index.html","e212639b172c4e13daff4d37d062b01a"],["/css/index.css","b306cef7937fef623fea48b44c3c5284"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","c70fc33043f9434e209ba7110141e812"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","a768cb3dbeddfb25d2db0d21ea8e40a5"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","a52dedb0633597aff940586895586a32"],["/messageboard/index.html","3402e0b86009ef8c446c44ec2f1c9cf4"],["/music/index.html","d3a5a7aa402c8d6174245bedfd84fe37"],["/page/2/index.html","15302ec6908981dce79adc15b7173d1f"],["/page/3/index.html","904b6f438d90c4c9edae907d12e01a9f"],["/page/4/index.html","3620ef23d7bd36c9a2465708d99c3d54"],["/page/5/index.html","4cd6270458ad5c7fee04dc9f8a87997e"],["/sw-register.js","a661d4d8a76f70db62bb16d4beae0c36"],["/tags/2N皇后/index.html","fc92058f84d4d34be67885cc6328be08"],["/tags/Github/index.html","31aefb5c550e3288d6f857145085ee5b"],["/tags/Hexo/index.html","dd916e2027cc838dc0b4dc066622f248"],["/tags/N皇后/index.html","b50430122174d05076e4a63ccb4a7450"],["/tags/bat脚本/index.html","0ff4775125d86c3114abb5d2c9036c0c"],["/tags/git/index.html","78b5efa2c5fa69c4d44de28058a4d6ba"],["/tags/index.html","afea0dcb99afc5c80ef5b99ccb5a0dcc"],["/tags/leetcode/index.html","f8de07d71ef0ba21c1028e0d1f94c3a2"],["/tags/二进制表示/index.html","8b43751a36e3fa29a3ea2c0613016239"],["/tags/全排列/index.html","47ad6f46d4b8c3b47fe36bfd26874d7c"],["/tags/冒泡排序/index.html","e8d06d6582169653b91cd599075bcf05"],["/tags/图/index.html","7afa52e06ac82eab9185cb51dff72f8d"],["/tags/字符串处理/index.html","90957a9ebe3d755a426a82cb9eadcf25"],["/tags/快速排序/index.html","9d28ed1385f320a63d9f3df7448b10aa"],["/tags/搜索/index.html","70aa5970204db801891e4a9501fd2ff0"],["/tags/操作系统/index.html","6592e953acfc8d873f84f033ce314f1a"],["/tags/数据结构/index.html","30ab7fb7ad79e6e06ec93840970495b5"],["/tags/最小步数/index.html","56aae3e9211c485acfbdfc67d8898ada"],["/tags/深度优先搜索/index.html","0f8ecdb5ad2adcace544f72a451a1941"],["/tags/算法/index.html","41555ed4ceb22ffd2904dbdc37bccaf9"],["/tags/算法/page/2/index.html","b311a16d021fc09c8d89be91fbba3dc7"],["/tags/算法/page/3/index.html","fa303356aec08fb28c322632cbca0eda"],["/tags/算法/page/4/index.html","a50f08ebd97f99abcaa1242a3d428f98"],["/tags/算法/page/5/index.html","245ac6c8726e987dfb29dbf844a16a0b"],["/tags/素因子/index.html","10c20cda0a5823fcac19a096814263b9"],["/tags/素数筛/index.html","dfb6ddb6de1231d6ce3cee26be457c2e"],["/tags/蓝桥杯试题/index.html","5936227f01ce96225bca3393fed44726"],["/tags/蓝桥杯试题/page/2/index.html","1681feaa389b320982b5e248596fe36e"],["/tags/连通图/index.html","52f0ba836a9d0839a59c2341b9abe40a"],["/tags/阶乘取数/index.html","6e90841363b4bcaddbece3db5e233a62"]];
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
