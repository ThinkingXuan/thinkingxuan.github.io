/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","41af5e4222b058d8309eccd466c8b142"],["/2018/12/16/LeetCode/leetcode2/index.html","aa4e7541d3703e5b23ab99fdae22add7"],["/2018/12/16/LeetCode/leetcode3/index.html","240e5c448c4967cfb781962e59b4d3b5"],["/2018/12/16/LeetCode/leetcode4/index.html","b37d8524228bf94e19f8cd5693576f65"],["/2018/12/16/LeetCode/leetcode5/index.html","a8c568b569d8413266a2d0b188a59006"],["/2018/12/16/LeetCode/leetcode6/index.html","c48673b3ab673f164960d9ccb3efdd01"],["/2018/12/16/hello-world/index.html","46d5b4082dcc57b9c447aadf11fe8942"],["/2019/01/16/DataStructure/dataStructure1/index.html","038bb691ae48b3c1ad0f4ce482b779e7"],["/2019/01/17/DataStructure/dataStructure2/index.html","30701b0a95fa31686aec465083a4aba5"],["/2019/01/18/DataStructure/dataStructure3/index.html","7f45e942c577532c732407dd9aa0e956"],["/2019/01/19/DataStructure/dataStructure4/index.html","a5eda185ae56d749b67aa7f8b1e10e27"],["/2019/01/20/DataStructure/dataStructure5/index.html","2ec97bd943edf528d1a0f5533518d410"],["/2019/01/22/DataStructure/dataStructure6/index.html","e0f85613d9e9dbdb24738892a3de1850"],["/2019/01/24/DataStructure/dataStructure7/index.html","1f749587a4dad5dfda3ed5c89760de29"],["/2019/01/24/lanqiao/basic/index.html","905f974afc54d025859980b6299cf1f8"],["/2019/01/26/lanqiao/basic2/index.html","6e541e38f02b40dce551d87abc561cc3"],["/2019/01/26/lanqiao/basic3/index.html","49611fb2430f1611804132259263578b"],["/2019/01/27/lanqiao/basic4/index.html","e1a55de6270fa539f4eadb6dce180bf4"],["/2019/02/13/lanqiao/basic5/index.html","378448087028bc1c0e2ed1720a3b4c27"],["/2019/02/14/lanqiao/basic6/index.html","37b31adb4764bef72a6b3076f4056507"],["/2019/02/14/lanqiao/basic7/index.html","cce745abada3465d1a0bbaa6a0c16c0e"],["/2019/02/15/lanqiao/basic8/index.html","c02d3436d90014d08d5ffcbec17a613c"],["/2019/02/15/lanqiao/回形取数/index.html","97950e82ac0d8d5595419034f33e8559"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","54fb54bd3dd0f30ed378fce478858e54"],["/2019/02/16/lanqiao/芯片测试/index.html","61eb652ce61f474526731363f6f0e413"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","ac3cd4fee313787c62da32cd3ea29119"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","a78c7f9eb1f7d262910e049697c1581e"],["/2019/02/18/lanqiao/Sine之舞/index.html","5b6db1600f55f40cf70a65bf316e2dce"],["/2019/02/20/lanqiao/数的读法/index.html","2846a558c02566018d4ac9f4b9fe84f0"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","554d13cdc205faf33be076b0c4da7a8b"],["/2019/02/27/DataStructure/快速排序/index.html","f231ffb817af80fb47eed3f34eb40f17"],["/2019/02/27/lanqiao/完美的代价/index.html","fbc4809ed0da0a4adeaea31050f8d57f"],["/2019/03/13/lanqiao/数字排列/index.html","46aab770d91478c51af9e5236d709e22"],["/2019/03/14/lanqiao/数独排列/index.html","3f1361a076b3dd569cc446f04b7d0fb8"],["/2019/03/15/lanqiao/凑算式/index.html","c332b7f764c0230004ba9786aba2f30f"],["/2019/03/16/lanqiao/方格填数/index.html","d52f11632da7bcdbd12c16b52de19d14"],["/2019/03/18/lanqiao/剪邮票/index.html","eb0b3d746fbfe95288d888e3c520b046"],["/2019/03/29/lanqiao/审美课 /index.html","d2b9aa1935d214dd33c824a702f136c0"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","16cab17b17087f26ed678a6cfd9238b7"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","49e41f4258815a03ad6407f704da3f12"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","50f7e116d60c49df9a22fd79d56ec847"],["/2019/04/08/lanqiao/素因子去重/index.html","d3a6281f8f8f11c3182142e9e227d934"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","15d46821dac834799ab6a49f1cd97db3"],["/about/index.html","7c5d6d820f6a257e39d918aa22042731"],["/archives/2018/12/index.html","2ebe5f8016e2d66536747adcaf62c91a"],["/archives/2018/index.html","bdfe93a57d24a226c41bc1a71819683c"],["/archives/2019/01/index.html","edd3c01b97c203c2772fa40f40bd6b3a"],["/archives/2019/01/page/2/index.html","316a33b329157f605aeb50fee8d274fe"],["/archives/2019/02/index.html","0e24e165c75fc5734f78c138841ed762"],["/archives/2019/02/page/2/index.html","65aa29d58567baa94b1beff5e9be22dd"],["/archives/2019/03/index.html","d2b30cd366054bdadff0437933d45422"],["/archives/2019/04/index.html","485d56dd4af40e9c5f4a53fd95cee685"],["/archives/2019/index.html","669ecd2a054dc990cde5b4694c078ad8"],["/archives/2019/page/2/index.html","0541787cff793918c28bb56c38a84cc4"],["/archives/2019/page/3/index.html","09e69b04ea955d6408115ea13e75afd1"],["/archives/2019/page/4/index.html","2faa82986db3a09908fd68a6513bc177"],["/archives/index.html","d725996748d34d636b314a8baa02ae5f"],["/archives/page/2/index.html","d96e97627572b35317812159049d7d73"],["/archives/page/3/index.html","d812175b40a22ceb3dfcefb76a75e1b9"],["/archives/page/4/index.html","ef31ee199339feeb204978bd549ac4a3"],["/archives/page/5/index.html","76ad04fa9b566a7f893de5eeab387ff8"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","480034c5eb13350d2ac15b291aea8e02"],["/categories/index.html","53d78cd2d71e3c0fa95c83a0662b27de"],["/categories/数据结构/index.html","27fe9b1bc90239b47443614c8d9abf74"],["/categories/算法/index.html","77daaec02a551e815422077db5326dce"],["/categories/算法/page/2/index.html","d252b63626a6ecd78df6bcdff9c3c006"],["/categories/蓝桥杯/index.html","0fd951a3d7c2e507f472b7f2f0b0e23d"],["/categories/蓝桥杯试题/index.html","bf63ccb503af9b8baef0e8c6fc6c263e"],["/categories/蓝桥杯试题/page/2/index.html","1090ae7fbeeec7350351b46957a6a523"],["/css/index.css","8a7251342de86c2a07718c61ac63cfcf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","5cb15e350ed08862a8f587c34d102908"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","5aa6f85fec76d836fca1064dc48e8199"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","cbed958251192fc9562afbc66f568ec3"],["/messageboard/index.html","a5da015e192531830c36bdad1f7a8885"],["/music/index.html","4266a8a22e952185e89ea1a99053395a"],["/page/2/index.html","62990d1b8d5ff02c50dbe0b7ad7962a9"],["/page/3/index.html","7ff0ce2ca835a7cb709e25ef71d2b33b"],["/page/4/index.html","b523e6c295750df79b91b43513f7d250"],["/page/5/index.html","f96d1ec83351b0f9851b9cbc0570bcb8"],["/sw-register.js","c967ab7bb8d0fe98344557640c9aa013"],["/tags/2N皇后/index.html","38f83b5058e0a916b3ba263e817ba775"],["/tags/Hexo/index.html","0e69a4817b3da18eb6a1843b070e6601"],["/tags/N皇后/index.html","e4053ce4ff77643a783c2d4f021b315a"],["/tags/bat脚本/index.html","bbd4a3955eaa19ef9c3201059267718e"],["/tags/index.html","2047ba9bfc824ea3a1e39c7978b9c65c"],["/tags/leetcode/index.html","0104843039f35145862e70c2a3da35f3"],["/tags/二进制表示/index.html","34065cf4fba1f4bea9a51125ec39ad8f"],["/tags/全排列/index.html","31e05e8d8b1ac610f6036ff2a1824071"],["/tags/冒泡排序/index.html","e4ae34061b7702c40d2c96e85a60ee51"],["/tags/图/index.html","f6cf49322f77b8b411977f43915d7f7e"],["/tags/字符串处理/index.html","d0fd91796a1eeb3047a4c8584de26cbb"],["/tags/快速排序/index.html","f5850b93da7b5b3f95e8eddf4046eff7"],["/tags/搜索/index.html","81553ad8b3a196a410a348426ab8a1aa"],["/tags/数据结构/index.html","09bc592f3b5d7c2b50b9dba5b35c7e15"],["/tags/最小步数/index.html","fccdd438dc7dd20242602ae07833a21c"],["/tags/深度优先搜索/index.html","bd421ea5f92e2a1859f28eeeb371f45f"],["/tags/算法/index.html","e5177989b309d34534d96e4c25077d77"],["/tags/算法/page/2/index.html","6364a335ff2b551e1f2858fd24fc9df0"],["/tags/算法/page/3/index.html","e76b8602fe4c0f8f724bf14b69459834"],["/tags/算法/page/4/index.html","6c2123227b6506692ba6c32d21385f9b"],["/tags/算法/page/5/index.html","06a9b0c191263fc57bab84084cb387c0"],["/tags/素因子/index.html","fbb1b14dd89b39249a31642e30e0e679"],["/tags/素数筛/index.html","783875fec0e02c73f7c8a8527956ba0f"],["/tags/蓝桥杯试题/index.html","edbe7873b24553092e986cff6fc5cacb"],["/tags/蓝桥杯试题/page/2/index.html","767f0f49ea40d43e7564d6b17426cc44"],["/tags/连通图/index.html","761fc33826a6ee75d41a93403e956b73"],["/tags/阶乘取数/index.html","9aaf75ad6391897edc61c258b5678aec"]];
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
