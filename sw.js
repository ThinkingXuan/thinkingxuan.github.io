/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2018/12/16/LeetCode/leetcode1/index.html","29428f7e1edb4863e270a6f3f9aefcaf"],["/blog/2018/12/16/LeetCode/leetcode2/index.html","c8aed804616464edbe05302189f75f9f"],["/blog/2018/12/16/LeetCode/leetcode3/index.html","ff6c035266876f4dcdbb5aa2ed688051"],["/blog/2018/12/16/LeetCode/leetcode4/index.html","41be90004c80453707983245f5cc4bea"],["/blog/2018/12/16/LeetCode/leetcode5/index.html","8d6f91edf2dc2c0d7200e16e02de94c5"],["/blog/2018/12/16/LeetCode/leetcode6/index.html","45677207494ac025399fba9c7f78e701"],["/blog/2018/12/16/hello-world/index.html","973e4fda919605e5841942db725b02c6"],["/blog/2019/01/16/DataStructure/dataStructure1/index.html","deebb4b0b63a384cf326e91db9ddabcf"],["/blog/2019/01/17/DataStructure/dataStructure2/index.html","de735f7b3dac65ffbf44a2c2e3017667"],["/blog/2019/01/18/DataStructure/dataStructure3/index.html","18beffb0d1a8204f80bbe29a2ad82cce"],["/blog/2019/01/19/DataStructure/dataStructure4/index.html","5edd3438ddbd94beb57cebd1d793c4ad"],["/blog/2019/01/20/DataStructure/dataStructure5/index.html","0af2202da4a86e09df4990adb25b2633"],["/blog/2019/01/22/DataStructure/dataStructure6/index.html","c8e9e829917924ddf282ea05d17e2028"],["/blog/2019/01/24/DataStructure/dataStructure7/index.html","b8a99d821726d2a15d3e290511abdb48"],["/blog/2019/01/24/lanqiao/basic/index.html","76cb66a6e9551a956ffb194b25f8f683"],["/blog/2019/01/26/lanqiao/basic2/index.html","c330b7f8a6f6230795211330619762b2"],["/blog/2019/01/26/lanqiao/basic3/index.html","7d8af5ca5f34a0e7734fc9f4eb496719"],["/blog/2019/01/27/lanqiao/basic4/index.html","903c89ba0e0779ad20e0a2f5c01ecd8b"],["/blog/2019/02/13/lanqiao/basic5/index.html","46260d943e4fa6cbf3775567794cd6b8"],["/blog/2019/02/14/lanqiao/basic6/index.html","f14cca2d493d118a5fad4de919107f7e"],["/blog/2019/02/14/lanqiao/basic7/index.html","59b53cb27bbfbcb11947f0524e4e399e"],["/blog/2019/02/15/lanqiao/basic8/index.html","6944d323f0a318f62c2abcf88007533c"],["/blog/2019/02/15/lanqiao/回形取数/index.html","8184f112bea9597e05ec6e8e7deaa817"],["/blog/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","1ce78a96c6180cd9d96e6ff74b76fd2b"],["/blog/2019/02/16/lanqiao/芯片测试/index.html","13b2f451ec812344da55305b4f62cc52"],["/blog/2019/02/16/lanqiao/龟兔赛跑预测/index.html","95f7b530530454197da95d396be0c292"],["/blog/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","b8ff3272f5e1118a3a7da0494235e308"],["/blog/2019/02/18/lanqiao/Sine之舞/index.html","e667be8492c11df94bfb03b930fc5c7e"],["/blog/2019/02/20/lanqiao/数的读法/index.html","871001938168a49397347e7d200b158a"],["/blog/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","e68f1c13154e933c67aaa2ccb508ef7d"],["/blog/2019/02/27/DataStructure/快速排序/index.html","ddd2303596e557bf9517613134b12034"],["/blog/2019/02/27/lanqiao/完美的代价/index.html","8d627d521e73626ea1b8c52d4868e3ee"],["/blog/2019/03/13/lanqiao/数字排列/index.html","3235b04e503dcd1fa89996a1c28e472d"],["/blog/2019/03/14/lanqiao/数独排列/index.html","912aeee222e92c54c37bdb69986f8a67"],["/blog/2019/03/15/lanqiao/凑算式/index.html","dc6fc8b0ca740ee88e3eebd49a54b617"],["/blog/2019/03/16/lanqiao/方格填数/index.html","f31928e45d1b379bb95a38dbf314c6a7"],["/blog/2019/03/18/lanqiao/剪邮票/index.html","d8aa5cb43ecce9b7c90a30c0a28f6d81"],["/blog/2019/03/29/lanqiao/审美课 /index.html","577df1bbc3fa3c85e4831bb32cfa8b2b"],["/blog/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","54edb25d843ab18c8cac81b70a7e3cf3"],["/blog/2019/04/02/lanqiao/迷宫——最小步数/index.html","0042a984ba673018d1ed057feb720914"],["/blog/2019/04/08/lanqiao/深入理解线性素数筛/index.html","40d5f3f53bb68218cb0bfe9c3caa087b"],["/blog/2019/04/08/lanqiao/素因子去重/index.html","318e22ff184e7e009b0a399ad5df0aa1"],["/blog/2019/04/09/lanqiao/P0505阶乘取数/index.html","58f0b3c4f0852c00eb2053593a193df8"],["/blog/about/index.html","269a201b5713292ff5789dfaca429d44"],["/blog/archives/2018/12/index.html","4937bcd4f352badf85913d2759c6976b"],["/blog/archives/2018/index.html","30aa2ef1d6a799f666f9548646516dd9"],["/blog/archives/2019/01/index.html","9217cb4408f49373b0c0cc3b29498d9e"],["/blog/archives/2019/01/page/2/index.html","7102f9c896b6364ed07aee776eb8599c"],["/blog/archives/2019/02/index.html","2543b5205681a8c09a5b3c8cebf6f87e"],["/blog/archives/2019/02/page/2/index.html","c13e26bbb70e48933bbb950e3f341882"],["/blog/archives/2019/03/index.html","e8566c5040f21eddbdaa71d043295897"],["/blog/archives/2019/04/index.html","e10a2648b4ecd430a33c7c2f7b02a330"],["/blog/archives/2019/index.html","38d886544f6b3a4e59a034981e451059"],["/blog/archives/2019/page/2/index.html","116325d3ecae20aa6f35f9cba4cd8c62"],["/blog/archives/2019/page/3/index.html","ee826918fa2245f4d6107608073b3b5b"],["/blog/archives/2019/page/4/index.html","599a14ef9ebcb7de2717761c39a84292"],["/blog/archives/index.html","2178ebcc12fdc080317f0d4675a7023f"],["/blog/archives/page/2/index.html","dec2cb8c8f9132a0b986b0a3db97264a"],["/blog/archives/page/3/index.html","ed7bfb816b4af7c1957614ded002914f"],["/blog/archives/page/4/index.html","1f7308a26f7ce58e5439aca805d6825e"],["/blog/archives/page/5/index.html","522e37952b030a8f7bb3ecd3f5f33faf"],["/blog/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/blog/categories/Hexo/index.html","047076dd3f9ee285a7c7792e9f7a28c8"],["/blog/categories/index.html","fdc02af9ecfaeb9c408375fa2d970553"],["/blog/categories/数据结构/index.html","8a5552141b893d10c3cc300bf2182d04"],["/blog/categories/算法/index.html","fb611dd2077726334058003ebae22bdf"],["/blog/categories/算法/page/2/index.html","6a26f4af4386b60b0c7a00042452194f"],["/blog/categories/蓝桥杯/index.html","02887e6f98e167d768b14d310d636ddf"],["/blog/categories/蓝桥杯试题/index.html","f86940bb99d811255f5de264d53d5361"],["/blog/categories/蓝桥杯试题/page/2/index.html","612a0436aec67075f77164e095b2a749"],["/blog/css/index.css","e9dd933551ca0a6d936e328a1ced6ef4"],["/blog/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/blog/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/blog/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/blog/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/blog/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/blog/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog/index.html","bf6b81d89b640aa5ba81c64d43d51bcb"],["/blog/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/blog/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/blog/link/index.html","0beca7b15fa5ad7e9588b591b590dd6e"],["/blog/messageboard/index.html","e6b030615fb778a8fcb8caa592228e8b"],["/blog/music/index.html","3531688e4fea195f93ac24e5af528f5c"],["/blog/page/2/index.html","a59d4c1704b6f7d98830461b59e8d660"],["/blog/page/3/index.html","14b61c781e5754a68389301c137ae962"],["/blog/page/4/index.html","ca6722578916cc6b8f681a03bd3df1d1"],["/blog/page/5/index.html","2f4ad527ad8d608542a3755574b88748"],["/blog/sw-register.js","277b04e10f26151c77e6543c11a9cdc3"],["/blog/tags/2N皇后/index.html","41973d59df9be4e29b96d5d2e691c310"],["/blog/tags/Hexo/index.html","7f861b95d5e1f36691e81852572d2bd8"],["/blog/tags/N皇后/index.html","ec5d6ef42c542c0251da1c27e998e81e"],["/blog/tags/bat脚本/index.html","a7a7230bb10ae53e47be65a4aa7edc0e"],["/blog/tags/index.html","3e257e0f178d42c8dae013b6d72b36a6"],["/blog/tags/leetcode/index.html","05adb246852ce85fe5788d88dbcc6c21"],["/blog/tags/二进制表示/index.html","fa7b469cd15067879de9b2ece8067ecb"],["/blog/tags/全排列/index.html","3450450a23e3122ea7d647d089acd2f0"],["/blog/tags/冒泡排序/index.html","31d25ea6fb6bab7281b8558d40787fb5"],["/blog/tags/图/index.html","66c06c392a3924c89d81b30a031d6c01"],["/blog/tags/字符串处理/index.html","7b5c2d07220d2378bfd1a3b1ea2fba89"],["/blog/tags/快速排序/index.html","1a6390e298546caa0697eeb7c7c5aee6"],["/blog/tags/搜索/index.html","8fa05a3647f70b815d69fb73ac9753f8"],["/blog/tags/数据结构/index.html","bcd3c9a44afefd7ea35462f69a83600c"],["/blog/tags/最小步数/index.html","81e326179cc8e354aebcd734d3154a9b"],["/blog/tags/深度优先搜索/index.html","aa21eb2c7b4bedc9cbc4c5cd52976c15"],["/blog/tags/算法/index.html","c21790e5d63bda893275ee02613f1afd"],["/blog/tags/算法/page/2/index.html","6e1ff806ac21b0b2d1f11fb9ad502ee5"],["/blog/tags/算法/page/3/index.html","e0e2e448f1f383bd43054df575df9d6e"],["/blog/tags/算法/page/4/index.html","93858527ed0b621555bde48d6b549afa"],["/blog/tags/算法/page/5/index.html","678f2402bf04700d99c7f67ca051dcf2"],["/blog/tags/素因子/index.html","6cd71c7708639759212426d4378304e8"],["/blog/tags/素数筛/index.html","8d8ba5a75f3a9162c7ab274c4146da72"],["/blog/tags/蓝桥杯试题/index.html","17542e59a085cc481043313d6b86aba1"],["/blog/tags/蓝桥杯试题/page/2/index.html","8899315997cf96c4638dc7ebb9a3db72"],["/blog/tags/连通图/index.html","3929793ddad97e21ef4f6dba38b674f8"],["/blog/tags/阶乘取数/index.html","bc280fdecbc1822fd600a1d7cd948d1d"]];
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
