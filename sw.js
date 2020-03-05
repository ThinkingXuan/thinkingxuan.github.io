/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2018/12/16/LeetCode/leetcode1/index.html","ce97bba2d3ed97cdaa832aabdd734144"],["/blog/2018/12/16/LeetCode/leetcode2/index.html","8428d756a0f013b1a15324bbfeb31668"],["/blog/2018/12/16/LeetCode/leetcode3/index.html","c339334bd75db176be828111f25f03be"],["/blog/2018/12/16/LeetCode/leetcode4/index.html","268ce2e8b65009bbae84d24c34151250"],["/blog/2018/12/16/LeetCode/leetcode5/index.html","8e7780fe192c08e73aebff970298493b"],["/blog/2018/12/16/LeetCode/leetcode6/index.html","754990e904a1a4ae46f76e435a0d0b41"],["/blog/2018/12/16/hello-world/index.html","53a0174c89d08cdb5dfc7a6c18926d86"],["/blog/2019/01/16/DataStructure/dataStructure1/index.html","b4701bc08a5f4ae76cc11647489a7170"],["/blog/2019/01/17/DataStructure/dataStructure2/index.html","e5e68aaa3a292696b32b066300dacea0"],["/blog/2019/01/18/DataStructure/dataStructure3/index.html","b0c912fb58339c63fb4dc29ce2dfc3a2"],["/blog/2019/01/19/DataStructure/dataStructure4/index.html","fbac87541c2e71e2d1ffada0992f6c6d"],["/blog/2019/01/20/DataStructure/dataStructure5/index.html","e1b7500e21ac4541fc671c6b8bac33c8"],["/blog/2019/01/22/DataStructure/dataStructure6/index.html","3f88db77896f1484d81162a67f6b9928"],["/blog/2019/01/24/DataStructure/dataStructure7/index.html","50b329c19e15fce6312daa4b9c1a9e6b"],["/blog/2019/01/24/lanqiao/basic/index.html","dc2b70c0cd767a927085098b1062cfc4"],["/blog/2019/01/26/lanqiao/basic2/index.html","d1dd4679f71002fbeee674c9ec12380b"],["/blog/2019/01/26/lanqiao/basic3/index.html","a4cd6dbdd885f1a4267b1232168b416b"],["/blog/2019/01/27/lanqiao/basic4/index.html","440cc0d92e105509b1500a4971c0ad75"],["/blog/2019/02/13/lanqiao/basic5/index.html","219def09f6c8103a0602a126aeab5847"],["/blog/2019/02/14/lanqiao/basic6/index.html","021e663754b3f4b40b3c36e336d65a2f"],["/blog/2019/02/14/lanqiao/basic7/index.html","55f45bd01518ef880d2fc05f01264350"],["/blog/2019/02/15/lanqiao/basic8/index.html","4dded73d62c497bd05153306ecc1933c"],["/blog/2019/02/15/lanqiao/回形取数/index.html","a96c7668c91616caeaad164fa5f14687"],["/blog/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","90de2c1eee5fa8dc3f60c366908790db"],["/blog/2019/02/16/lanqiao/芯片测试/index.html","5cdc86b6eab8921fbfbe34eae318fcce"],["/blog/2019/02/16/lanqiao/龟兔赛跑预测/index.html","9efbfc2dba07edf420ed06488c00545c"],["/blog/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","b3bd73ce66aab7606496ccd450962f93"],["/blog/2019/02/18/lanqiao/Sine之舞/index.html","d9cca9b29813c3d9a921ea874b923eec"],["/blog/2019/02/20/lanqiao/数的读法/index.html","8bf5265778bbc2e3af18f10aae5e7140"],["/blog/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","c8b464b67fce7fe5df66c25ee141f468"],["/blog/2019/02/27/DataStructure/快速排序/index.html","2488adfe2c8bc4435caf57faf51d1d00"],["/blog/2019/02/27/lanqiao/完美的代价/index.html","4a2006b3319395ddee54cf05c9e07226"],["/blog/2019/03/13/lanqiao/数字排列/index.html","a88b3cac6ea3eb59dc0f48d9896babcc"],["/blog/2019/03/14/lanqiao/数独排列/index.html","2c8aeccd3e7f46cbe0bb9587324276a8"],["/blog/2019/03/15/lanqiao/凑算式/index.html","f4863dc5596b7433f78c9b247b42560a"],["/blog/2019/03/16/lanqiao/方格填数/index.html","8dade63f56349b1d3ee71ee014238f0b"],["/blog/2019/03/18/lanqiao/剪邮票/index.html","fcc6c6b75a64f0b0c3dcfb6e140293c1"],["/blog/2019/03/29/lanqiao/审美课 /index.html","2c19f2c5d98c36fd94523db7c803d61c"],["/blog/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","ec59311d2460564291f6ff3ab6ff5eec"],["/blog/2019/04/02/lanqiao/迷宫——最小步数/index.html","f94b3d16da5ad6b7f619206f818a5815"],["/blog/2019/04/08/lanqiao/深入理解线性素数筛/index.html","275efab680592f11809331c1eb993cdc"],["/blog/2019/04/08/lanqiao/素因子去重/index.html","a1dd08716907140111307e6ad4284ca9"],["/blog/2019/04/09/lanqiao/P0505阶乘取数/index.html","d12ca8c6e50d9a0359ff007b961942b9"],["/blog/about/index.html","43fdbbbb621f40c257c75613a2ba7b32"],["/blog/archives/2018/12/index.html","25cabd10856f84f1aa8fd53c848c8234"],["/blog/archives/2018/index.html","e67885d18ec6be2f4a0bed8d2482da02"],["/blog/archives/2019/01/index.html","832ec2256ab148a8c8d3f730e21aad43"],["/blog/archives/2019/01/page/2/index.html","a663d92f561092fbaf2ae615500059f1"],["/blog/archives/2019/02/index.html","21e3d22f4cef311be0195460689133ba"],["/blog/archives/2019/02/page/2/index.html","3cc21039d4afd9125a279bbda21b7ba7"],["/blog/archives/2019/03/index.html","315f708b3434c817e8bc9b60091afb49"],["/blog/archives/2019/04/index.html","f9644b50f533e685ce3e48ddf4638153"],["/blog/archives/2019/index.html","c9baf235e5cf97808bc18631f9896236"],["/blog/archives/2019/page/2/index.html","db9f9eaca7d79562d651e895bcc7c0ba"],["/blog/archives/2019/page/3/index.html","5e2e7472a3efeb4170121a6fe9742726"],["/blog/archives/2019/page/4/index.html","7a5ac79411671a107c7b4864a8d03648"],["/blog/archives/index.html","304c90cd1f660bd507f3f31ab412dfaf"],["/blog/archives/page/2/index.html","97a04dbd27fbc32a5b23ca42023adcb2"],["/blog/archives/page/3/index.html","20638a832b11e2264d7f6bc3f49621d6"],["/blog/archives/page/4/index.html","45cd2480b0703a27a8dd14cf24c67aab"],["/blog/archives/page/5/index.html","611f5377a0ab69175351df4c1784dd2f"],["/blog/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/blog/categories/Hexo/index.html","5467a9a2799f6cdf2a6ea33239113bae"],["/blog/categories/index.html","6e9a9fe4d73664115c2dd5654d12851d"],["/blog/categories/数据结构/index.html","82594bf160eb4e03f9b3972d7ede2f2c"],["/blog/categories/算法/index.html","54c1c24c2d46d3f4b4c9fc3b1d05f49c"],["/blog/categories/算法/page/2/index.html","bb821ea36445996fb6977ff38e685152"],["/blog/categories/蓝桥杯/index.html","369ab2d3c465ba61c427eff04f74f412"],["/blog/categories/蓝桥杯试题/index.html","843af335596920852dce6e2893535f31"],["/blog/categories/蓝桥杯试题/page/2/index.html","55f4296c7e3d9d60dd2353a7f95e900d"],["/blog/css/index.css","e9dd933551ca0a6d936e328a1ced6ef4"],["/blog/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/blog/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/blog/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/blog/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/blog/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/blog/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog/index.html","38587c0c6e8b5a1682518ff0f619fb06"],["/blog/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/blog/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/blog/link/index.html","795b2eeb1eb3c4474cbde6f841c52795"],["/blog/messageboard/index.html","d7751edfd207a4807607b32d18f74fcd"],["/blog/music/index.html","4fd5a3e274a329e9c5f3cb9e9abbbed8"],["/blog/page/2/index.html","382d1dd3912124b217bbe2df0c6140d1"],["/blog/page/3/index.html","9ec3f131f400cc178859060e1f052b1a"],["/blog/page/4/index.html","6639ff5c53d518f4dcd2390ae5545622"],["/blog/page/5/index.html","f232e4f346ee5c6cbf05f1f5b61566cc"],["/blog/sw-register.js","25550cb9ee63e0aecc842f43cb492510"],["/blog/tags/2N皇后/index.html","5666aeb8c032c9a80eb3e2aa8c02affd"],["/blog/tags/Hexo/index.html","961962faf25e325bb026361b295e7622"],["/blog/tags/N皇后/index.html","a15cf0fa2d3da36f0a0fd4437345e5bf"],["/blog/tags/bat脚本/index.html","8d904991f2b948c61d5c0b5ba9c4c9e5"],["/blog/tags/index.html","fb0b9e349f106b0c64471bc8d60f9a18"],["/blog/tags/leetcode/index.html","a722f90f13abfbbecd2011e64b13b2ce"],["/blog/tags/二进制表示/index.html","935b4eef04b7ee55ed88a019c8161e6b"],["/blog/tags/全排列/index.html","26251d7b18cebfff3dea530a0db3c4db"],["/blog/tags/冒泡排序/index.html","9a639aaff7ebc5a082cd2bd8021cc837"],["/blog/tags/图/index.html","59bbfe06b9f2b516ddbcbb335f741864"],["/blog/tags/字符串处理/index.html","e7a0df670ae2e87f31cd11337a533897"],["/blog/tags/快速排序/index.html","272e095eb29e8b388b7706e09d003fc1"],["/blog/tags/搜索/index.html","40292b7050dbef8b1443b5f4ad712457"],["/blog/tags/数据结构/index.html","24d138381e573c6f2b6b2858d1ed3038"],["/blog/tags/最小步数/index.html","3233ef1ea52eebf4714fb4af51fd024c"],["/blog/tags/深度优先搜索/index.html","17cc9fdd81a5a659826cee69853db000"],["/blog/tags/算法/index.html","8f404ca999f2b2dd4a913d850d301c49"],["/blog/tags/算法/page/2/index.html","4ff0ed55c1784d83353821b54fe27189"],["/blog/tags/算法/page/3/index.html","6ba431f238e319e50c2cc4dc2b0ab6d6"],["/blog/tags/算法/page/4/index.html","3e2449c9bfb7bae52de2fa01a9dd8de3"],["/blog/tags/算法/page/5/index.html","0bf9e210f7f403d512e2e3e07fb0bc19"],["/blog/tags/素因子/index.html","b20986b920b7135d1d0f4b7cde161c39"],["/blog/tags/素数筛/index.html","a576cdd8360ccf16df93ddf31f5c71c7"],["/blog/tags/蓝桥杯试题/index.html","06171f18cb19720d851f957029b5ef72"],["/blog/tags/蓝桥杯试题/page/2/index.html","4a28b6ac872eb9a382d0c3886362cd5f"],["/blog/tags/连通图/index.html","e04b1c3509ffd70c87c9f0e50cc7d8af"],["/blog/tags/阶乘取数/index.html","9987ed9df5a67d26abd9a307533da4e7"]];
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
