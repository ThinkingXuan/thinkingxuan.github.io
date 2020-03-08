/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","b6b4ce7fc9f6dc30e0116ba2b1506fb5"],["/2018/12/16/LeetCode/leetcode2/index.html","d25dd482c0e29af26be158f5be3a601f"],["/2018/12/16/LeetCode/leetcode3/index.html","1a4379ec345c2b872ceae7ec21ac96b6"],["/2018/12/16/LeetCode/leetcode4/index.html","e7a6917fc5e179a1a0c1df6f4f7cd992"],["/2018/12/16/LeetCode/leetcode5/index.html","3460411ddc683da07ba9bab60974c05d"],["/2018/12/16/LeetCode/leetcode6/index.html","89b728cdda48364b6033149cd361fec3"],["/2018/12/16/hello-world/index.html","7cb1fd2f6749e772df19e5b36257823b"],["/2019/01/16/DataStructure/dataStructure1/index.html","b8ba98b2613a4773c111f441013b7559"],["/2019/01/17/DataStructure/dataStructure2/index.html","0a9bd63e09a17f8c72d40bdbbeb2a04e"],["/2019/01/18/DataStructure/dataStructure3/index.html","1d779190871e2063d159fbc554df6f25"],["/2019/01/19/DataStructure/dataStructure4/index.html","929af3dad201db2bc41b6a633887fcbb"],["/2019/01/20/DataStructure/dataStructure5/index.html","268349c72d609a3903f10d7ebe008c37"],["/2019/01/22/DataStructure/dataStructure6/index.html","0895297f34577fc464d9d7611d06c57f"],["/2019/01/24/DataStructure/dataStructure7/index.html","796a6609245fc5223e6b0b8e2f9ef610"],["/2019/01/24/lanqiao/basic/index.html","e5f8fe7de35f1efac060dc1ca83f319d"],["/2019/01/26/lanqiao/basic2/index.html","250ed7d73a0e7a627d0a1df19bb2c463"],["/2019/01/26/lanqiao/basic3/index.html","4d5be532fb59413824203ee90f3412eb"],["/2019/01/27/lanqiao/basic4/index.html","96629562a8aca83d8e83a76da955d821"],["/2019/02/13/lanqiao/basic5/index.html","c2df54e24840f136c155a3a7e70b8e85"],["/2019/02/14/lanqiao/basic6/index.html","3a3a1643637b3c8261b425185159d005"],["/2019/02/14/lanqiao/basic7/index.html","b64cae8cb8bd6f3cf01ca05a08b80803"],["/2019/02/15/lanqiao/basic8/index.html","6bc5feb2b3604b4bb2c341a3c7d13f2e"],["/2019/02/15/lanqiao/回形取数/index.html","0a02650b7d1b51d189cff9dbf454e91a"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","355a208c324fdef592b108dec9bd99d0"],["/2019/02/16/lanqiao/芯片测试/index.html","b6a87c54cdbbb79fe4d25499ae610819"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","e801e02a855e7f9a096d73f2de6e1111"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","b0db4bd3ad03ed63f97982e615c598c5"],["/2019/02/18/lanqiao/Sine之舞/index.html","88224971e2e82af500687d8dfbda9b13"],["/2019/02/20/lanqiao/数的读法/index.html","a69fe39e329db7febce86a6ef3f6e47a"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","588504d0407ae3c5f5f867e6997a1bcb"],["/2019/02/27/DataStructure/快速排序/index.html","ac9dd75472cf97cfb23ad2412ab490cd"],["/2019/02/27/lanqiao/完美的代价/index.html","2221214cb7a953368cfe38826ef752f1"],["/2019/03/13/lanqiao/数字排列/index.html","a60b14771e64ced2b07be1e65b482f04"],["/2019/03/14/lanqiao/数独排列/index.html","38467141411e926d7a46f2dc31a18780"],["/2019/03/15/lanqiao/凑算式/index.html","62d27b85d16b1c3a79e4b1d17d84f4e7"],["/2019/03/16/lanqiao/方格填数/index.html","2294248fc4d7fc2219375aabebad3937"],["/2019/03/18/lanqiao/剪邮票/index.html","42a88cf897bb622db12bf802ef7e5291"],["/2019/03/29/lanqiao/审美课 /index.html","2a9640afe5adc0fb23641db09676ca24"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","88d0ac4e24fdfd55e9efe6f1a1bdbdd6"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","8524a1fab12959fec9a3225debaaea3b"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","01e2a6392ded5040359ee79e108899ac"],["/2019/04/08/lanqiao/素因子去重/index.html","dbc699a0af30e31408576f944685c9b3"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","8a47dabec55b6395c64cc477b0e81878"],["/2020/03/09/git/从Github指定仓库中删除文件或文件夹/index.html","3f1010ecd05388b669d6b303df95173e"],["/about/index.html","047efaae67ae379ae7275a82204520f8"],["/archives/2018/12/index.html","de07a4bf5200cc4a9904b0f84c83c7bb"],["/archives/2018/index.html","f8f515dbf8eb6bc110db12a870d55201"],["/archives/2019/01/index.html","c7f5d5e5bf94f4ea8396b572847b6e23"],["/archives/2019/01/page/2/index.html","4c1a9021bf02ad44533c3e6429d058c1"],["/archives/2019/02/index.html","6ced6403ea11e3db30346bccc057fba7"],["/archives/2019/02/page/2/index.html","330a88ad163ffcccdc1d3649c00749e0"],["/archives/2019/03/index.html","7d689a60096cb34adef4d5464b250468"],["/archives/2019/04/index.html","f694beb8255fd5e329442fed15668f03"],["/archives/2019/index.html","679fac05c5f008f034ae223cf6c11773"],["/archives/2019/page/2/index.html","0b574b708f41a10136a2dbe5a5923369"],["/archives/2019/page/3/index.html","f3a97b74ab0956e25537a8796fd9638f"],["/archives/2019/page/4/index.html","62507622bacc81d66057157f17ca4d05"],["/archives/2020/03/index.html","1c32935c649ce2a9dcdfe257f81d9518"],["/archives/2020/index.html","86785ce32b18e663a4f1328e4ba0f31f"],["/archives/index.html","9f933591717140c86fa732fc011529e6"],["/archives/page/2/index.html","0b94852bbee445348a73a1a1644f0cc1"],["/archives/page/3/index.html","84324097aa52bf7b75d102b701bd7f5b"],["/archives/page/4/index.html","ce3704fc9a5a57eabd8fc9f9cc6e5672"],["/archives/page/5/index.html","e2e63a24cf7f31bbf2e947cbb4e82831"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","022db57e551ed4f1edcd1dd647f5a942"],["/categories/git/index.html","78691fe6db3bb2a7c91e5c796b661464"],["/categories/index.html","b0b106c6b0b482da5c143d7620321767"],["/categories/数据结构/index.html","d1dc7046535850b2c93b687bdc99c5df"],["/categories/算法/index.html","931aea62c345a3d7b7dec4e63ec91d8c"],["/categories/算法/page/2/index.html","aa59bfaa6c2205c7b58dc0ff5245235d"],["/categories/蓝桥杯/index.html","5c3ca1f0171fdf13cab346bf435dc771"],["/categories/蓝桥杯试题/index.html","e88e50f2d09020c7c0c79a9ef1a75d1e"],["/categories/蓝桥杯试题/page/2/index.html","08176d38db6c7e1014fd41b3f1c8350c"],["/css/index.css","8a7251342de86c2a07718c61ac63cfcf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","79f8eb25ab67840934bb4580b57409c7"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","be6ab3945edbdbf326695ee0e0b8f791"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","425f8f40570f9a9bdeb1be731e827ea0"],["/messageboard/index.html","c0db10ab5444c9fc1a58349df339d2cd"],["/music/index.html","46e5db0dc87b99fee809e41b28f4ab58"],["/page/2/index.html","11bf1aaa1fbe06d473d18c439d25fc98"],["/page/3/index.html","301a30282e5ec920163600c7ee04c31c"],["/page/4/index.html","30445df2a53f66eb24fb9723ccb7848d"],["/page/5/index.html","2ad76aa2638557b930f443171a6c9a6f"],["/sw-register.js","a830f03615b46f4c0b3f2e2e0b930560"],["/tags/2N皇后/index.html","4137eab10ba8ce3dd16be4424338a32c"],["/tags/Github/index.html","e2752d7eaeb473b1e5535642370b2ced"],["/tags/Hexo/index.html","b65a394cff10ea065045667b06df7d57"],["/tags/N皇后/index.html","232705b4056319dd4ace5b90e2cd97c1"],["/tags/bat脚本/index.html","64f72a6a27e7041e0117683a941f139e"],["/tags/git/index.html","f263163e8c4c48654c6b2def786d1987"],["/tags/index.html","adc9e1471ed800c809258d5d8c83f07d"],["/tags/leetcode/index.html","7738369b78ff8e57bcafd8206a8ffd83"],["/tags/二进制表示/index.html","98d045507b412e6c6913d30b6c1dddc5"],["/tags/全排列/index.html","6da0165a5aec12c3437fe505cb0426f1"],["/tags/冒泡排序/index.html","98390ce96419c4da556087a9e6d07d14"],["/tags/图/index.html","fc5d1fab6d94cb2be7a5966eab53e0cb"],["/tags/字符串处理/index.html","8e671c1c261f005751103b5ee3032e39"],["/tags/快速排序/index.html","5c0bc2f9d846868428b0efa926679cee"],["/tags/搜索/index.html","19927ab941210caab0199b10d434524b"],["/tags/数据结构/index.html","ca4442c8bd5f5a51b8a67363d75bc581"],["/tags/最小步数/index.html","5396c452373acbb34fbb0f99e6afd918"],["/tags/深度优先搜索/index.html","cf6e4eef302812671a64ec79b2faca48"],["/tags/算法/index.html","3572d68094b65bc94da8cee3cc43d96c"],["/tags/算法/page/2/index.html","b272f6d9e49bc9ca7b6aed1133a5399f"],["/tags/算法/page/3/index.html","a612352c21cdedf6854b3ef7cfc3e62a"],["/tags/算法/page/4/index.html","75ba766956b9d9e917b0e4307d9686f8"],["/tags/算法/page/5/index.html","ebbed4c40cf4bcb07823f411a2b14408"],["/tags/素因子/index.html","67be61317bf8a0f383905f7ceb33ce9f"],["/tags/素数筛/index.html","bed52eb608dfa7bbe25391feaa3b1f96"],["/tags/蓝桥杯试题/index.html","343a70bfd7b5c6db1abf55a1ea76214b"],["/tags/蓝桥杯试题/page/2/index.html","d5693c196d1ec61a6e0b77887159b165"],["/tags/连通图/index.html","91ebc5d505b3fccab6b70a202939d089"],["/tags/阶乘取数/index.html","c8e23704c0a073520da6085e6ef1ea16"]];
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
