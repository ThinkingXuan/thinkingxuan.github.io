/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2018/12/16/LeetCode/leetcode1/index.html","a4607c28bd72947c3fc82ed50adbe422"],["/blog/2018/12/16/LeetCode/leetcode2/index.html","2cc58968e20c0db63f43f234d6a8ec35"],["/blog/2018/12/16/LeetCode/leetcode3/index.html","2a2edb5996b41006bcd2f47485099688"],["/blog/2018/12/16/LeetCode/leetcode4/index.html","c2e59df42143265c0e9f41fdfe85277d"],["/blog/2018/12/16/LeetCode/leetcode5/index.html","2ac1f4b9c081523061813b1053213d94"],["/blog/2018/12/16/LeetCode/leetcode6/index.html","35cffdcffc25c8d0c74d4c529a23884f"],["/blog/2018/12/16/hello-world/index.html","4ed246cb9a1ff12254c2edacadee5d12"],["/blog/2019/01/16/DataStructure/dataStructure1/index.html","54e52aee0908c016119ab97cfe645b57"],["/blog/2019/01/17/DataStructure/dataStructure2/index.html","12f0cb46f4573cdf476d08edd9fbdfb9"],["/blog/2019/01/18/DataStructure/dataStructure3/index.html","791cd0d343cce64a65c8ba0437a2aa4a"],["/blog/2019/01/19/DataStructure/dataStructure4/index.html","d2fd2af72cf97b67bcae760d370881cf"],["/blog/2019/01/20/DataStructure/dataStructure5/index.html","c5b38277fbe6158307d19934972c3547"],["/blog/2019/01/22/DataStructure/dataStructure6/index.html","ccecc2aad62561132d73661adfd1bfc0"],["/blog/2019/01/24/DataStructure/dataStructure7/index.html","42c34206a013516eecc08df1a02ea5c8"],["/blog/2019/01/24/lanqiao/basic/index.html","3b0c30e930dd3d304a7ce2e5c8f8917f"],["/blog/2019/01/26/lanqiao/basic2/index.html","57b481d09f99fb1006c4b0b202a72e73"],["/blog/2019/01/26/lanqiao/basic3/index.html","27e47501c4d9dfc9f4e14ce1f31d3b6d"],["/blog/2019/01/27/lanqiao/basic4/index.html","9dbee2380cb60708ebfc8f02e543b3dd"],["/blog/2019/02/13/lanqiao/basic5/index.html","1721f42892f35172111e5b97dd88b745"],["/blog/2019/02/14/lanqiao/basic6/index.html","8063dbe3b8be4841ea1b16b1d7842166"],["/blog/2019/02/14/lanqiao/basic7/index.html","9c4ca92265efe17c298fba23f4bf4334"],["/blog/2019/02/15/lanqiao/basic8/index.html","d81ceeb06b999bd5b3da6cc3f58e8c3c"],["/blog/2019/02/15/lanqiao/回形取数/index.html","5eb1a1d872ad2c1578f2beadfc62fdd7"],["/blog/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","0d86a203b8afb3381d1000390f2045da"],["/blog/2019/02/16/lanqiao/芯片测试/index.html","da33da7ca87162af7b797ab09f9cf34b"],["/blog/2019/02/16/lanqiao/龟兔赛跑预测/index.html","6ae62528f9b8ce7ad4fa307888e2bc2f"],["/blog/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","bfaf3f2fb994f055a94faaf19e84cdcf"],["/blog/2019/02/18/lanqiao/Sine之舞/index.html","41164812f5d21d4654e5a52b6265dcbb"],["/blog/2019/02/20/lanqiao/数的读法/index.html","b7a439ea8d8bffd9d05fa0348dcbcd52"],["/blog/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","26d110b970efa78cfa32d95eb56c6669"],["/blog/2019/02/27/DataStructure/快速排序/index.html","2430f09eb142f47f413f420a3ddc46f7"],["/blog/2019/02/27/lanqiao/完美的代价/index.html","d30946746066abf3e5acb0d77afb1b01"],["/blog/2019/03/13/lanqiao/数字排列/index.html","e0c247b66832b0117a28a870cb0403ef"],["/blog/2019/03/14/lanqiao/数独排列/index.html","89794097ef040f06b35932ffcc36893c"],["/blog/2019/03/15/lanqiao/凑算式/index.html","81cd13bbe9d87fabd4eb1fb55038f3a6"],["/blog/2019/03/16/lanqiao/方格填数/index.html","43919039ac64f6e56d15bd1c89f943a1"],["/blog/2019/03/18/lanqiao/剪邮票/index.html","41ee7f3edf4e1b4ca06db01e60833eb9"],["/blog/2019/03/29/lanqiao/审美课 /index.html","2914b9d9cd29e1383f462f6a8f579933"],["/blog/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","b8af8fecd1872ea87e04ba18adcb3639"],["/blog/2019/04/02/lanqiao/迷宫——最小步数/index.html","07ec657838439188f9872a77599d8390"],["/blog/2019/04/08/lanqiao/深入理解线性素数筛/index.html","374428e47e8069b49a2a4931b96de0d6"],["/blog/2019/04/08/lanqiao/素因子去重/index.html","2c87b7ba1d24f95802a081416759d2be"],["/blog/2019/04/09/lanqiao/P0505阶乘取数/index.html","c3e731445d76eee5d2c8ca47c6ce6cd5"],["/blog/about/index.html","43fdbbbb621f40c257c75613a2ba7b32"],["/blog/archives/2018/12/index.html","25cabd10856f84f1aa8fd53c848c8234"],["/blog/archives/2018/index.html","e67885d18ec6be2f4a0bed8d2482da02"],["/blog/archives/2019/01/index.html","832ec2256ab148a8c8d3f730e21aad43"],["/blog/archives/2019/01/page/2/index.html","a663d92f561092fbaf2ae615500059f1"],["/blog/archives/2019/02/index.html","21e3d22f4cef311be0195460689133ba"],["/blog/archives/2019/02/page/2/index.html","3cc21039d4afd9125a279bbda21b7ba7"],["/blog/archives/2019/03/index.html","315f708b3434c817e8bc9b60091afb49"],["/blog/archives/2019/04/index.html","f9644b50f533e685ce3e48ddf4638153"],["/blog/archives/2019/index.html","c9baf235e5cf97808bc18631f9896236"],["/blog/archives/2019/page/2/index.html","db9f9eaca7d79562d651e895bcc7c0ba"],["/blog/archives/2019/page/3/index.html","5e2e7472a3efeb4170121a6fe9742726"],["/blog/archives/2019/page/4/index.html","7a5ac79411671a107c7b4864a8d03648"],["/blog/archives/index.html","304c90cd1f660bd507f3f31ab412dfaf"],["/blog/archives/page/2/index.html","97a04dbd27fbc32a5b23ca42023adcb2"],["/blog/archives/page/3/index.html","20638a832b11e2264d7f6bc3f49621d6"],["/blog/archives/page/4/index.html","45cd2480b0703a27a8dd14cf24c67aab"],["/blog/archives/page/5/index.html","611f5377a0ab69175351df4c1784dd2f"],["/blog/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/blog/categories/Hexo/index.html","5467a9a2799f6cdf2a6ea33239113bae"],["/blog/categories/index.html","6e9a9fe4d73664115c2dd5654d12851d"],["/blog/categories/数据结构/index.html","82594bf160eb4e03f9b3972d7ede2f2c"],["/blog/categories/算法/index.html","54c1c24c2d46d3f4b4c9fc3b1d05f49c"],["/blog/categories/算法/page/2/index.html","bb821ea36445996fb6977ff38e685152"],["/blog/categories/蓝桥杯/index.html","369ab2d3c465ba61c427eff04f74f412"],["/blog/categories/蓝桥杯试题/index.html","843af335596920852dce6e2893535f31"],["/blog/categories/蓝桥杯试题/page/2/index.html","55f4296c7e3d9d60dd2353a7f95e900d"],["/blog/css/index.css","a5767eec504f4287154039d71f03223f"],["/blog/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/blog/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/blog/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/blog/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/blog/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/blog/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog/index.html","9c72a8870786a7a420349057142f7cc2"],["/blog/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/blog/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/blog/link/index.html","cc877cf7894beef79cae5c4618cedcc1"],["/blog/messageboard/index.html","932b41fd5cd45be6ffe22e3c31cb7d96"],["/blog/music/index.html","da532720b5e13576846b3837e18e9c40"],["/blog/page/2/index.html","b94d7f197db12fb2cb90170b601f8840"],["/blog/page/3/index.html","5d0d547662911ba2758d4b6629957dbb"],["/blog/page/4/index.html","0928c758ff5796a376633488cbbf95c6"],["/blog/page/5/index.html","3820a94ac52aec90d1897d5bfda69978"],["/blog/sw-register.js","efc4b08b7ed56f890c7c68986c51805b"],["/blog/tags/2N皇后/index.html","5666aeb8c032c9a80eb3e2aa8c02affd"],["/blog/tags/Hexo/index.html","961962faf25e325bb026361b295e7622"],["/blog/tags/N皇后/index.html","a15cf0fa2d3da36f0a0fd4437345e5bf"],["/blog/tags/bat脚本/index.html","8d904991f2b948c61d5c0b5ba9c4c9e5"],["/blog/tags/index.html","4b542d978a969d10716e4b02ff12239b"],["/blog/tags/leetcode/index.html","a722f90f13abfbbecd2011e64b13b2ce"],["/blog/tags/二进制表示/index.html","935b4eef04b7ee55ed88a019c8161e6b"],["/blog/tags/全排列/index.html","26251d7b18cebfff3dea530a0db3c4db"],["/blog/tags/冒泡排序/index.html","9a639aaff7ebc5a082cd2bd8021cc837"],["/blog/tags/图/index.html","59bbfe06b9f2b516ddbcbb335f741864"],["/blog/tags/字符串处理/index.html","e7a0df670ae2e87f31cd11337a533897"],["/blog/tags/快速排序/index.html","272e095eb29e8b388b7706e09d003fc1"],["/blog/tags/搜索/index.html","40292b7050dbef8b1443b5f4ad712457"],["/blog/tags/数据结构/index.html","24d138381e573c6f2b6b2858d1ed3038"],["/blog/tags/最小步数/index.html","3233ef1ea52eebf4714fb4af51fd024c"],["/blog/tags/深度优先搜索/index.html","17cc9fdd81a5a659826cee69853db000"],["/blog/tags/算法/index.html","8f404ca999f2b2dd4a913d850d301c49"],["/blog/tags/算法/page/2/index.html","4ff0ed55c1784d83353821b54fe27189"],["/blog/tags/算法/page/3/index.html","6ba431f238e319e50c2cc4dc2b0ab6d6"],["/blog/tags/算法/page/4/index.html","3e2449c9bfb7bae52de2fa01a9dd8de3"],["/blog/tags/算法/page/5/index.html","0bf9e210f7f403d512e2e3e07fb0bc19"],["/blog/tags/素因子/index.html","b20986b920b7135d1d0f4b7cde161c39"],["/blog/tags/素数筛/index.html","a576cdd8360ccf16df93ddf31f5c71c7"],["/blog/tags/蓝桥杯试题/index.html","06171f18cb19720d851f957029b5ef72"],["/blog/tags/蓝桥杯试题/page/2/index.html","4a28b6ac872eb9a382d0c3886362cd5f"],["/blog/tags/连通图/index.html","e04b1c3509ffd70c87c9f0e50cc7d8af"],["/blog/tags/阶乘取数/index.html","9987ed9df5a67d26abd9a307533da4e7"]];
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
