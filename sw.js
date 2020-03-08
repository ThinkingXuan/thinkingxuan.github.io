/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","38c598b45811448b8ad9e285c3997e0e"],["/2018/12/16/LeetCode/leetcode2/index.html","da3ea8ce66541bf422f949d3745c40fd"],["/2018/12/16/LeetCode/leetcode3/index.html","e2d2f16047ae3d948135610108d80150"],["/2018/12/16/LeetCode/leetcode4/index.html","f34862ca8ffac1a055822184362698d9"],["/2018/12/16/LeetCode/leetcode5/index.html","448ef52f71d87d58d0e6cd6abf30af28"],["/2018/12/16/LeetCode/leetcode6/index.html","0d07e260876c702651c06290c9db8d66"],["/2018/12/16/hello-world/index.html","02604232793c599068a6e223d37a9900"],["/2019/01/16/DataStructure/dataStructure1/index.html","b4076de0843062920e4d0a76d899603f"],["/2019/01/17/DataStructure/dataStructure2/index.html","d6a0e121a2717a3f298e0ce07dc6b3a7"],["/2019/01/18/DataStructure/dataStructure3/index.html","e029c71bc052670c9e4efc0cd5fc81e3"],["/2019/01/19/DataStructure/dataStructure4/index.html","b54190bc8d3e15d462cc53ea326c6af5"],["/2019/01/20/DataStructure/dataStructure5/index.html","71976f304ec7d5c41cd9f5ad7a1421ab"],["/2019/01/22/DataStructure/dataStructure6/index.html","c2d4b1d8d0a6605d924504532863e184"],["/2019/01/24/DataStructure/dataStructure7/index.html","8f3ce6796f368ccbd831eb083e0ac75f"],["/2019/01/24/lanqiao/basic/index.html","61c1ea1a884a1e5cf02cbe2714a2b29b"],["/2019/01/26/lanqiao/basic2/index.html","ca78e91bbf9ec35f4af2e6c0fee047bc"],["/2019/01/26/lanqiao/basic3/index.html","53f4a0b775aae8f9f6060ad51fb56f23"],["/2019/01/27/lanqiao/basic4/index.html","59187e5761d98f8ceb579fdf09f30d37"],["/2019/02/13/lanqiao/basic5/index.html","cd47b0a408fbe61f437d2265a4be0221"],["/2019/02/14/lanqiao/basic6/index.html","49467f2cabc80aebaedcdf08a262f2ac"],["/2019/02/14/lanqiao/basic7/index.html","d0919e33bbc80418ea3459af67d88eea"],["/2019/02/15/lanqiao/basic8/index.html","bc7b0bf2e263fe163e3f830889b37b96"],["/2019/02/15/lanqiao/回形取数/index.html","7b265882ada61b10851777d9e139b2b8"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","bad2220dd172f2716de381e9af15cb20"],["/2019/02/16/lanqiao/芯片测试/index.html","1003fbd82e9fa57432a9dac8265c59ee"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","9850847abfac667362e06bcf01d4d465"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","77bd4bcf7399ac3b76de95d1e3b5aebe"],["/2019/02/18/lanqiao/Sine之舞/index.html","016141e57a33df1163114ab502e6f7f5"],["/2019/02/20/lanqiao/数的读法/index.html","e5cd257c453aec8dfea4e0e0d12b88ca"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","09c6fed3293bf9e3802a64cb94a25f46"],["/2019/02/27/DataStructure/快速排序/index.html","ab4eba82ef1b086de89a04169e4fa0ec"],["/2019/02/27/lanqiao/完美的代价/index.html","922dc0d52c6dabd87c9abbca4d15894c"],["/2019/03/13/lanqiao/数字排列/index.html","0e2bff670cd375f51eb9169c442cf0c7"],["/2019/03/14/lanqiao/数独排列/index.html","a514a44c5022f834b020ea2503202d99"],["/2019/03/15/lanqiao/凑算式/index.html","b94354336fd57eb27768b8a238a94eb4"],["/2019/03/16/lanqiao/方格填数/index.html","a95c3afbc2aaff9642550ecedf4840c5"],["/2019/03/18/lanqiao/剪邮票/index.html","55197752845cbaa2f760d956d1e84233"],["/2019/03/29/lanqiao/审美课 /index.html","ec3b4985da527da782c2eb2465d75655"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","6a2186a94e156ca1f7b8dce5e1bbd4f3"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","4ad890e13d354f6a5929a3b93b158402"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","014b8fc67b9957a9efdf1bc0fa5edb3d"],["/2019/04/08/lanqiao/素因子去重/index.html","316f2e59d3927e3380a823c4b70d3bc9"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","73c1b8e46acc64d1d32045fb141f357c"],["/about/index.html","73883e7d6aa7a9aa64435aa6cbe72108"],["/archives/2018/12/index.html","7ddac7424ca9fa15b14625da2f99f97a"],["/archives/2018/index.html","b8ca102d6c3e9fa0c416956ea806f41b"],["/archives/2019/01/index.html","43407b37a8c20146aad98fd434f2a988"],["/archives/2019/01/page/2/index.html","122ac69ac7b4656d31b4d4aab02f1888"],["/archives/2019/02/index.html","5f70a9c1669ffa1db4c01bd574cec796"],["/archives/2019/02/page/2/index.html","f7964fe8afde15a48681a4d73f397819"],["/archives/2019/03/index.html","041e915da57378717863211c03b7a844"],["/archives/2019/04/index.html","fa1f9c43df59f798341a05dd5e490da4"],["/archives/2019/index.html","02add7b8d89579f5beb1a4dc39eec682"],["/archives/2019/page/2/index.html","5db5ba1655f088332266bd2dac3f4cbf"],["/archives/2019/page/3/index.html","47ac167c7556d0b657334eb50e04f5a4"],["/archives/2019/page/4/index.html","783a78b77585e253f0fa7b8e81b2f336"],["/archives/index.html","2c31d310a126d01f82810554b5ba7fb0"],["/archives/page/2/index.html","f88dc8dae673b79b8068173587860664"],["/archives/page/3/index.html","69d3c5aea05fac80898387d0218ceb62"],["/archives/page/4/index.html","a679b444cad004e1daf78ed44103331d"],["/archives/page/5/index.html","90269479844bbb10570926576c84ef64"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","08ebc92cf57b5bc885045e0def653e99"],["/categories/index.html","aaf50e4e4d0db68679176c8fc67a18d6"],["/categories/数据结构/index.html","4196f2d5eece5a427f55c4649d4898d0"],["/categories/算法/index.html","b4b52d2b4ec1eb45ee3d7ed7b85a1aed"],["/categories/算法/page/2/index.html","dc3aced1a5715e5cfd361e9456dd443a"],["/categories/蓝桥杯/index.html","48d39c93d2a1bb4d73093287b3eb9cdf"],["/categories/蓝桥杯试题/index.html","94e2e5855b89584df5843b4595d84644"],["/categories/蓝桥杯试题/page/2/index.html","157ef74655761bb9ac865fef445f589b"],["/css/index.css","8a7251342de86c2a07718c61ac63cfcf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","30688dcef3f09a1db98cb84f47e2b00e"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","77173750343078aba1bfab3dcb2607fb"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","5c2912fed63bf7a8ee1b236512755394"],["/messageboard/index.html","999c58c044ec08c20e806cd6a80a320f"],["/music/index.html","171e32d109e8b12e320938e87dcacc66"],["/page/2/index.html","96d8977c8f2c9e6be22e5b4d3ef85a24"],["/page/3/index.html","0d6400d7f28cdda17c760c7e072ac8f7"],["/page/4/index.html","58f3b7ca65b1a3942996c16747bb2f35"],["/page/5/index.html","315f9b7069b5c1189487003de7fd9f88"],["/sw-register.js","1469b7dcae3f9dabdd59673933293414"],["/tags/2N皇后/index.html","f60da8c88805ba9277924511916ce0b8"],["/tags/Hexo/index.html","c868739856110aaed51d3bfad7e48d46"],["/tags/N皇后/index.html","eb6576af9837677559313e1a5e2e5b86"],["/tags/bat脚本/index.html","4941569cb95147e3f98a1934956f9062"],["/tags/index.html","a8470cf93ac0e8799e6785556d02139c"],["/tags/leetcode/index.html","f45dcf21c8bbe052deadc409072dd07e"],["/tags/二进制表示/index.html","c043e1c21b93a95cde5792a35e9ced42"],["/tags/全排列/index.html","acd7ef6d2cb0099ae492dfe46bd756ac"],["/tags/冒泡排序/index.html","b16e23b264015eb0493b630e8ee92cee"],["/tags/图/index.html","9929b15fba4d6113cd7ddebae68b305c"],["/tags/字符串处理/index.html","4a7a918999ed87bc179003f0e7eb03fb"],["/tags/快速排序/index.html","a75e431ec88740c0524f2cfc792fff69"],["/tags/搜索/index.html","e13e53918fcd82ac66af296401171552"],["/tags/数据结构/index.html","329efcd0a516b381626d9e9e350785cb"],["/tags/最小步数/index.html","130dd1735793b6c3c38102f66debcb1f"],["/tags/深度优先搜索/index.html","0787e5ab18a797aafa5b50416cde0347"],["/tags/算法/index.html","8c9973af78417a66e3018aebaf719b17"],["/tags/算法/page/2/index.html","1ee763371ed71a23cd9e1ab221fab0dc"],["/tags/算法/page/3/index.html","d752478f8d166f3d9cb520d78db9a604"],["/tags/算法/page/4/index.html","cb4960da14ac6e72f89d457f31ee75f9"],["/tags/算法/page/5/index.html","8c9e9263243e82b8d186150cd3decf36"],["/tags/素因子/index.html","791bdadda4f3ef8e139185a51625d04b"],["/tags/素数筛/index.html","57b4ea8a795095cd126b214007225395"],["/tags/蓝桥杯试题/index.html","b0f6c9f8e0fda3ec333f0a137a708577"],["/tags/蓝桥杯试题/page/2/index.html","669fcafdabf95a3aaebd5a06c4535db4"],["/tags/连通图/index.html","345f78fff1db39631f24cb7411f7ba28"],["/tags/阶乘取数/index.html","c662574aaa441334b6f678987d6c2c62"]];
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
