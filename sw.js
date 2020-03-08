/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","224ce73e520761562eb0a819322ef672"],["/2018/12/16/LeetCode/leetcode2/index.html","bedf51a89fcf94ff7fe373e422d1fb8e"],["/2018/12/16/LeetCode/leetcode3/index.html","12bc6cac3ac5af407e9bbc09b1143ea4"],["/2018/12/16/LeetCode/leetcode4/index.html","4fc48abefc7217f457d42e7a10e82003"],["/2018/12/16/LeetCode/leetcode5/index.html","02971f1bae9d71692f0d31c825b9cc60"],["/2018/12/16/LeetCode/leetcode6/index.html","7b2bb3013f3f680f3ae8878d2b23da8f"],["/2018/12/16/hello-world/index.html","4a90c5a71abe4686e337ca3bc9a5b3eb"],["/2019/01/16/DataStructure/dataStructure1/index.html","4157c24cfd22b78ab024bea6c1c01907"],["/2019/01/17/DataStructure/dataStructure2/index.html","d6846e7bc1fad38f64b963488bb20a60"],["/2019/01/18/DataStructure/dataStructure3/index.html","11a2bb7189defe74b1f3d5275e969afc"],["/2019/01/19/DataStructure/dataStructure4/index.html","fb8366638e63da6b49fd1f4be741c685"],["/2019/01/20/DataStructure/dataStructure5/index.html","336adfe0cd339bb42feb247893c912f7"],["/2019/01/22/DataStructure/dataStructure6/index.html","01a4bc3eee4cf77a1fa6f350c51efaca"],["/2019/01/24/DataStructure/dataStructure7/index.html","43a177a08fdff9d19ee4f48ccd9fc8c5"],["/2019/01/24/lanqiao/basic/index.html","9cec3890a873c9899a05cdfb3a3a4a66"],["/2019/01/26/lanqiao/basic2/index.html","dd097578fdd47c1ebe503e8fa7e4a328"],["/2019/01/26/lanqiao/basic3/index.html","6d61378b114cd24c3cecccc55d9b17d0"],["/2019/01/27/lanqiao/basic4/index.html","4374e5e78420f423ae083b3c40da495f"],["/2019/02/13/lanqiao/basic5/index.html","c21efa1e1c11a24cc5f1b042127cad18"],["/2019/02/14/lanqiao/basic6/index.html","8d9f7de454dc37a75649b2b1ebb40cd7"],["/2019/02/14/lanqiao/basic7/index.html","2151fdc25f42a56c673b63ecafadcfd6"],["/2019/02/15/lanqiao/basic8/index.html","14b5ce3f50e26184343e0cd5da421396"],["/2019/02/15/lanqiao/回形取数/index.html","3f4c0c3182391138e889fd7b7f4db30a"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","64b04886d16612ff2fdd575a0acb07ea"],["/2019/02/16/lanqiao/芯片测试/index.html","6346963f7290bff49b7c75dcbb490b07"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","cc1ccdef6f80240b39fae103209a1a31"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","0039584d64999dbc3f96172e42611c20"],["/2019/02/18/lanqiao/Sine之舞/index.html","9b2c94eed36de71b95f9ff473be7c089"],["/2019/02/20/lanqiao/数的读法/index.html","2ed23f72129c8d987d75ab51f02c372c"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","7b498031902822d06b04c0486fd28b76"],["/2019/02/27/DataStructure/快速排序/index.html","4d005386127bd7a2f6249b2873e90a45"],["/2019/02/27/lanqiao/完美的代价/index.html","15e8cbf18386c1a93cfb6ee04622edd8"],["/2019/03/13/lanqiao/数字排列/index.html","664a7e235ce7c6a2969ffc26ac1ec661"],["/2019/03/14/lanqiao/数独排列/index.html","7f75fd9960ea4108740639e89e96f349"],["/2019/03/15/lanqiao/凑算式/index.html","bfb1216a5cca492cf4286d2050304566"],["/2019/03/16/lanqiao/方格填数/index.html","1c3c2ee326a53ced06eedade833045ae"],["/2019/03/18/lanqiao/剪邮票/index.html","8f590a8d56ed66b1f7afaed9e3fa809b"],["/2019/03/29/lanqiao/审美课 /index.html","82ed92744bef67ffa0a6f0aa5f7f4027"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","53d68657ae129bb8e0bbd5224cfce113"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","51c27b0fa3718199b1190facf895a836"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","8f3c934a081a432010a5f6d9267fabe8"],["/2019/04/08/lanqiao/素因子去重/index.html","11c3dfdc8379d74fe4fb9945342499a3"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","98acdf5b62347de4c2f2cf5baf0bbb8f"],["/2020/03/09/git/从Github指定仓库中删除文件或文件夹/index.html","76c1851e3309d971da39e6c48b681947"],["/about/index.html","32a98f0713bde40920170b3ca5c12ecd"],["/archives/2018/12/index.html","e51ce08f43d3bb1d5145fab7985b5db8"],["/archives/2018/index.html","47a00f0f60263c1b9f31a8e073643d20"],["/archives/2019/01/index.html","3fb88465c3a8df270f6cb74fea79cebb"],["/archives/2019/01/page/2/index.html","633b15488f9afb5bf14d6987c5c42e14"],["/archives/2019/02/index.html","338bb465d6b846195ae09c94fe28d140"],["/archives/2019/02/page/2/index.html","87f6b9b569a150b54693160a49e27376"],["/archives/2019/03/index.html","f5ef65ec353e1bf2c1f24bf2e1a9c0a3"],["/archives/2019/04/index.html","1d00194a26d721ba3de96a94fa074aa7"],["/archives/2019/index.html","750339ce767069c6ebaf1e98b21ede91"],["/archives/2019/page/2/index.html","4409d8023accba3931a110c76145749c"],["/archives/2019/page/3/index.html","fe64b2cb9306be3f3d5fc8efb10f52a6"],["/archives/2019/page/4/index.html","2d01efa25d877885fc679678cd294fe2"],["/archives/2020/03/index.html","f2f705bee00807336ecec3706bc7ba2e"],["/archives/2020/index.html","53a173faa1204cbf2e81f41a0a434d05"],["/archives/index.html","dffbc2a0c1018687737dcea64446d3e3"],["/archives/page/2/index.html","720f4277de12da58cfc60d73dbc067fd"],["/archives/page/3/index.html","d597692044869c23010689a2378e266d"],["/archives/page/4/index.html","3cd03cf25956db22de322400b8823c15"],["/archives/page/5/index.html","33499228eaf1b518f6f9bab5d5307211"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","265300f235d7ad47332040c176c3eef2"],["/categories/index.html","957a516edd5f207e3606013ac53f1d9e"],["/categories/数据结构/index.html","48800a4d26faf59b263ce15bdfd22cfd"],["/categories/算法/index.html","2b4e6ca6c9c6a7466e57ec942f257e8f"],["/categories/算法/page/2/index.html","ae1fa28fb6440d94092225c7fcaefe0a"],["/categories/蓝桥杯/index.html","5375aa5c44ea2e45d398455cfbb3d197"],["/categories/蓝桥杯试题/index.html","3bdda0cca921de19e6083c7b1948e6ce"],["/categories/蓝桥杯试题/page/2/index.html","b4de71d4906e40927d79a77c37f8258d"],["/css/index.css","8a7251342de86c2a07718c61ac63cfcf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","770e444e01513a7a87df1b1ba904785e"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","a077d7ee57e7305c0040f3f878f52b9d"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","a3392697766c759bae99d6abbf4d34a7"],["/messageboard/index.html","65e9c70cdcf74a300decb18c81bd8ccf"],["/music/index.html","7e381a2d62f0ef1ff14c55afc78c8f08"],["/page/2/index.html","d9cf44e59b382dc4dfb9a57976d482da"],["/page/3/index.html","1a47bd012ea823f59d171bd79e8c1f52"],["/page/4/index.html","d82bd8044760a781ad6af3133175663b"],["/page/5/index.html","74eca3434d93a67d40a4d51b50e29c33"],["/sw-register.js","e19b715e6d541f60de0f1a3442ce7958"],["/tags/2N皇后/index.html","f311b726d1370e09d53c93158ba24bf0"],["/tags/Hexo/index.html","374f1a435a4b2507d27f866613f9fe36"],["/tags/N皇后/index.html","2f108531090ba1d60c8b855af7072aca"],["/tags/bat脚本/index.html","bb723449807aedd577efa64ea916faf9"],["/tags/index.html","2d404c19854a325e596d6c27ddd62b93"],["/tags/leetcode/index.html","ab74e8acbaba1d9ba58f5dabfbffbc7d"],["/tags/二进制表示/index.html","ad1ab45b793fff04d5b1144fa2dca0f7"],["/tags/全排列/index.html","241c6ab8e6df1caf8c4dc51b6b89cff2"],["/tags/冒泡排序/index.html","232bd9b9500475458f9d47bf195a5509"],["/tags/图/index.html","425592a7a2adcde2506e52e9e07afecc"],["/tags/字符串处理/index.html","e5082b91a3317e91647c6068d3306394"],["/tags/快速排序/index.html","09d23fcf4479762638e9442f02609a09"],["/tags/搜索/index.html","e3dd98add71f5e1ec7d6eab724eea06b"],["/tags/数据结构/index.html","0d6e597e0273d53445336acf027582b2"],["/tags/最小步数/index.html","6ce5358889b1197150b5277e80f3a066"],["/tags/深度优先搜索/index.html","919706846215f9bfee7f04f4351cf13d"],["/tags/算法/index.html","dc793ea0eb0b25a4945afbf628431a96"],["/tags/算法/page/2/index.html","454ed5de7cac63e03c02795d3415f3f2"],["/tags/算法/page/3/index.html","798aeea0e56762cd4acf6807312455be"],["/tags/算法/page/4/index.html","7aca951c08995f11c161967513a25491"],["/tags/算法/page/5/index.html","2aebf6d048530a5840dc94ce719a6828"],["/tags/素因子/index.html","8497d09f7e4c144866f534f828c64f95"],["/tags/素数筛/index.html","2552204a3f59c1ab9fc4073d82697588"],["/tags/蓝桥杯试题/index.html","99390bafe4f68b9d1b3eac89cae1002c"],["/tags/蓝桥杯试题/page/2/index.html","3ce10a0508ce57b632c1da7f27793711"],["/tags/连通图/index.html","13f0fce4ca437ecb03383d7f681338fe"],["/tags/阶乘取数/index.html","a2edfa56a9ef195bdf35aa5cbae9ec68"]];
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
