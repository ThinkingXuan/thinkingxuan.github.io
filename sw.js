/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","17c69077053f3ea38fbdd8e037373af1"],["/2018/12/16/LeetCode/leetcode2/index.html","6d9c1ee7bc9d1f5f97ece66b57e3bd00"],["/2018/12/16/LeetCode/leetcode3/index.html","78e8a3835cf8b214f492beb099a1bcd6"],["/2018/12/16/LeetCode/leetcode4/index.html","1a5d41164d40c7a5fc9f71140d2866b2"],["/2018/12/16/LeetCode/leetcode5/index.html","30a294bd6403cacb70d8f3d25104491f"],["/2018/12/16/LeetCode/leetcode6/index.html","2106306b0b2d57357218358e0b5f3cfc"],["/2018/12/16/hello-world/index.html","03abbf029b460f41b9f05dda8909d484"],["/2019/01/16/DataStructure/dataStructure1/index.html","889e9e91ae1577a3be7550f79bb9f538"],["/2019/01/17/DataStructure/dataStructure2/index.html","1b7b96a5265b9ba7666ea0b7df6d5c07"],["/2019/01/18/DataStructure/dataStructure3/index.html","aeb217cae9f841d92b94a58978070da6"],["/2019/01/19/DataStructure/dataStructure4/index.html","1a5075ed3610626705edcf51081e093e"],["/2019/01/20/DataStructure/dataStructure5/index.html","e125cb87278f9f2909ba1b16d6ec0134"],["/2019/01/22/DataStructure/dataStructure6/index.html","4ab41bba23946acc297d39c496a9862c"],["/2019/01/24/DataStructure/dataStructure7/index.html","1ff3146d1db58bdbb681fa120493f6ea"],["/2019/01/24/lanqiao/basic/index.html","e58a449fb711917363b2dabdbe3c076a"],["/2019/01/26/lanqiao/basic2/index.html","ecf015a4ac6f5507b1fcb0c91d7b14be"],["/2019/01/26/lanqiao/basic3/index.html","d20047614477002e7f770349380cb0e8"],["/2019/01/27/lanqiao/basic4/index.html","6228050dfebe6c19328871379719b15a"],["/2019/02/13/lanqiao/basic5/index.html","94604328b81ea47b5f526ff48f82c2b8"],["/2019/02/14/lanqiao/basic6/index.html","ee6207d2a48bd2a5a16c647d9b88125e"],["/2019/02/14/lanqiao/basic7/index.html","0ead658d04925985c85dba3e19dd3b4a"],["/2019/02/15/lanqiao/basic8/index.html","d4d988f45fe47752eb98d2b51058b8da"],["/2019/02/15/lanqiao/回形取数/index.html","9bc8ceccdd3037de544eed73b2fcd736"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","31a4d1c50f2af23b98f7fe0810c06f58"],["/2019/02/16/lanqiao/芯片测试/index.html","1c5f60fb41912895fe07094e60402291"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","b397513f6f9efc8f316f23bcebaa76e1"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","f9f95676970e4f2bd2c142d9a50be0d6"],["/2019/02/18/lanqiao/Sine之舞/index.html","8923d3ab077f438dff61ce5e6af524b4"],["/2019/02/20/lanqiao/数的读法/index.html","d2b1208faf4241354eda622425b4e841"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","3fb3e0ece52bbc84def8f303ec8f4525"],["/2019/02/27/DataStructure/快速排序/index.html","68e5af616afbcd932479efccd3d2aaa1"],["/2019/02/27/lanqiao/完美的代价/index.html","4bcd7671c057af0f6b175b1b5fb246a3"],["/2019/03/13/lanqiao/数字排列/index.html","cb6cafa7ec6edb5b6aa49164186a6ec9"],["/2019/03/14/lanqiao/数独排列/index.html","826481e92607fd5aa78e94c559e47bbd"],["/2019/03/15/lanqiao/凑算式/index.html","9357b23c836d801a4b0b80f9bdab073c"],["/2019/03/16/lanqiao/方格填数/index.html","0c11f49833a3c1804ed40eddb3e913ad"],["/2019/03/18/lanqiao/剪邮票/index.html","b5c6a78c71974607fdcc6cd635562513"],["/2019/03/29/lanqiao/审美课 /index.html","656fbbdb67c7e4166456c7c355638f07"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","f9cde7fcf528e04dd0014b67fd4232d4"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","27d277f739352551af271a24e3584a4d"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","14cf1c059e135db7f03894dfa1c153f2"],["/2019/04/08/lanqiao/素因子去重/index.html","d27245fa4a7692f774244b8510be6353"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","e9aa833b7d7638f56ffd0049d922b387"],["/about/index.html","e3ae38d0f3c7bf4bf3c111ae727fd471"],["/archives/2018/12/index.html","c3dc256ff24c4c7c5f3abaa1a6214ac4"],["/archives/2018/index.html","1b915fb337f95e25e57d7d481e35d485"],["/archives/2019/01/index.html","15d0862759909cef5b709d9c00f2dbc0"],["/archives/2019/01/page/2/index.html","304038df74ea1e8b35d9791819314bf4"],["/archives/2019/02/index.html","b31cd1f1977117cc678c446bbcc996a4"],["/archives/2019/02/page/2/index.html","7109b8c3c5b8280480a6845243dd9105"],["/archives/2019/03/index.html","4cd70e77814ed0e5f5c9f376e990a504"],["/archives/2019/04/index.html","65a81f1bb4bc2f280f232e6dbe3cdde0"],["/archives/2019/index.html","2839d9a07b53808069d7f4599b80ad56"],["/archives/2019/page/2/index.html","18616c685a87fbfcc5a198f3f7ccefee"],["/archives/2019/page/3/index.html","be9bb5e3918e0c92b3f87de056ad2630"],["/archives/2019/page/4/index.html","cdfb0f74eabbe6569dd20fdc6003ea02"],["/archives/index.html","4cc9713d11ce38a12e161e91dbfc7c20"],["/archives/page/2/index.html","b073d708f5db550c05be7d252e63dc13"],["/archives/page/3/index.html","d76938e252b524f183edc038ec520846"],["/archives/page/4/index.html","5e832db71f736afb71ad67da17302183"],["/archives/page/5/index.html","ef27db0f58d9707bb7738f9f3bd2a96f"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","15c4b86e72d8357715305a76d1692c32"],["/categories/index.html","c97ae0e0001433d04cbc59678aba7ab8"],["/categories/数据结构/index.html","51c744e08a44262990180cf1e2c82439"],["/categories/算法/index.html","f719cbf230ba78dd0add3ba8373926f3"],["/categories/算法/page/2/index.html","d82e3c9d7619894b35b063a7ad6d98e3"],["/categories/蓝桥杯/index.html","7a0af34f536f03bea3de18ff5c687066"],["/categories/蓝桥杯试题/index.html","f5b98c08a25dee495903a82bf28293b4"],["/categories/蓝桥杯试题/page/2/index.html","9f4257168e0548bf6a3e27aca1687289"],["/css/index.css","8a7251342de86c2a07718c61ac63cfcf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","6dc418e24c1ce4ee8cbd12d8544ac5ca"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","c485f2f80b2ac7d3529bd211047c6b59"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","fec2196a92967d742ccd44878ca33677"],["/messageboard/index.html","0965e907294d92bd570513ec184dd0ee"],["/music/index.html","c82a663c95bc690aea8b8b102fbc334d"],["/page/2/index.html","dfbe490ec9ea7da3225888269c2c2d84"],["/page/3/index.html","cafa332a9d407a6c244f6ed95bb6f47e"],["/page/4/index.html","bc4ec5f00af64052206e05a65696fed4"],["/page/5/index.html","a81ddb43b1e1e8b670977cc7549c01f7"],["/sw-register.js","20a844d90d8e07a4ffd2d0d7206fd499"],["/tags/2N皇后/index.html","b05dbc39355045d56015268a77be2e71"],["/tags/Hexo/index.html","09fba672ff92c0d1f592762fed5f2f15"],["/tags/N皇后/index.html","ae2cbb229f7b69860cb71b5ad133b0f8"],["/tags/bat脚本/index.html","3adb4b5f4a699ee99c73cf358d783802"],["/tags/index.html","dd03d6c01fd7de261055b7a5f4ae5e7d"],["/tags/leetcode/index.html","aa71b9df01348585684cc351da81bc87"],["/tags/二进制表示/index.html","22dd14c2630256527c8cd195a8995aa3"],["/tags/全排列/index.html","c714c67dab69cb3f7c4fa0ef9186f69d"],["/tags/冒泡排序/index.html","21534a5ee74c2cf02d702fd95668f189"],["/tags/图/index.html","971434af74408211c88d289378eef237"],["/tags/字符串处理/index.html","b9a85b8f8d660cf7829fefed5c55fdc9"],["/tags/快速排序/index.html","684f572801d09d5137d95bd031350155"],["/tags/搜索/index.html","7729f471c9810fb0b3fafb15b342b60b"],["/tags/数据结构/index.html","2aeea9b7d3c53d76921fd891ee35d959"],["/tags/最小步数/index.html","ef2fa675855671a7f78e69653063d7f7"],["/tags/深度优先搜索/index.html","240cc3755789865a7b95d2399abfbd2b"],["/tags/算法/index.html","ccc1d91ac1cb0ee338b8c6efa7aaa0be"],["/tags/算法/page/2/index.html","c720d0973831fb2b51b7946c9dfe363b"],["/tags/算法/page/3/index.html","f402320b21bfd40f829d51c6c89498fb"],["/tags/算法/page/4/index.html","e5b2cfa0093ca6467bc03e134e727caf"],["/tags/算法/page/5/index.html","0fd757255601a0767ec32dbef38eb990"],["/tags/素因子/index.html","fa543a21b9990e2afa9de92343a4204c"],["/tags/素数筛/index.html","08891cc99ec23c674ec94ab897125549"],["/tags/蓝桥杯试题/index.html","f5e537f7e8b11e12a5e065fb2d55edaf"],["/tags/蓝桥杯试题/page/2/index.html","d58c32063dd417305a68e9de68498ce9"],["/tags/连通图/index.html","e1776e2255b2a113c5bc57815bae4a25"],["/tags/阶乘取数/index.html","a96c071daa13070e08ffe2db946ed013"]];
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
