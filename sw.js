/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2018/12/16/LeetCode/leetcode1/index.html","a4607c28bd72947c3fc82ed50adbe422"],["/blog/2018/12/16/LeetCode/leetcode2/index.html","2cc58968e20c0db63f43f234d6a8ec35"],["/blog/2018/12/16/LeetCode/leetcode3/index.html","2a2edb5996b41006bcd2f47485099688"],["/blog/2018/12/16/LeetCode/leetcode4/index.html","c2e59df42143265c0e9f41fdfe85277d"],["/blog/2018/12/16/LeetCode/leetcode5/index.html","2ac1f4b9c081523061813b1053213d94"],["/blog/2018/12/16/LeetCode/leetcode6/index.html","35cffdcffc25c8d0c74d4c529a23884f"],["/blog/2018/12/16/hello-world/index.html","4ed246cb9a1ff12254c2edacadee5d12"],["/blog/2019/01/16/DataStructure/dataStructure1/index.html","4b1a16d25c9e03c5823126c5495e2c33"],["/blog/2019/01/17/DataStructure/dataStructure2/index.html","aca0a26311be251396415f4df855da19"],["/blog/2019/01/18/DataStructure/dataStructure3/index.html","dc2ce697cd6297ef343f19e0b84388ac"],["/blog/2019/01/19/DataStructure/dataStructure4/index.html","2c810757833f3260faa538b8cb5f9d6f"],["/blog/2019/01/20/DataStructure/dataStructure5/index.html","83ba85a501c79f853fbafa5b7b701d61"],["/blog/2019/01/22/DataStructure/dataStructure6/index.html","ccecc2aad62561132d73661adfd1bfc0"],["/blog/2019/01/24/DataStructure/dataStructure7/index.html","42c34206a013516eecc08df1a02ea5c8"],["/blog/2019/01/24/lanqiao/basic/index.html","593e93a048fc1595c68fbb31ebdee024"],["/blog/2019/01/26/lanqiao/basic2/index.html","88af82550828e60d4fed8221fe2e630b"],["/blog/2019/01/26/lanqiao/basic3/index.html","377cc8d414505722e501aee5e63b386a"],["/blog/2019/01/27/lanqiao/basic4/index.html","ba1df2930847bdc23cfcde2e3c47c77c"],["/blog/2019/02/13/lanqiao/basic5/index.html","e58c3de3127efc935ea59e843938987b"],["/blog/2019/02/14/lanqiao/basic6/index.html","ecb479e9fcf6a828883ff9ca538b41a2"],["/blog/2019/02/14/lanqiao/basic7/index.html","ea98400806d509350cd1f31de556d090"],["/blog/2019/02/15/lanqiao/basic8/index.html","5024a248d74bd168e60bad42bcd76c05"],["/blog/2019/02/15/lanqiao/回形取数/index.html","cf5d1563ba9e331fda8e9e5e2b2259e2"],["/blog/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","0d86a203b8afb3381d1000390f2045da"],["/blog/2019/02/16/lanqiao/芯片测试/index.html","81ec10eb448e7c420c03101381814861"],["/blog/2019/02/16/lanqiao/龟兔赛跑预测/index.html","ac11d8c03e7ae5f0de20212a2a556a24"],["/blog/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","31b6f13cefa41e0726a60fa4b51ca6a0"],["/blog/2019/02/18/lanqiao/Sine之舞/index.html","7e930b2b40b1d5b78e746b60aa4a8cba"],["/blog/2019/02/20/lanqiao/数的读法/index.html","bb95d51a56c54aac05fffd74d17af456"],["/blog/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","e150ba7696bf75758ea44ff5fea67af7"],["/blog/2019/02/27/DataStructure/快速排序/index.html","9d272db32db6860aeb60edbc03c838fc"],["/blog/2019/02/27/lanqiao/完美的代价/index.html","b4948b2d36de24068a1846d1bdf1204c"],["/blog/2019/03/13/lanqiao/数字排列/index.html","b967d0454a19bcca4acd4460ec49a9c6"],["/blog/2019/03/14/lanqiao/数独排列/index.html","be375ef8d9f85c9fd94ce8d5a00f0b0a"],["/blog/2019/03/15/lanqiao/凑算式/index.html","950e84c94f6f91db8d612e0bcd3d53eb"],["/blog/2019/03/16/lanqiao/方格填数/index.html","05d9e23f6b39dab95a971c0e9025fd36"],["/blog/2019/03/18/lanqiao/剪邮票/index.html","513b6ee67386facc57de666e0ddd3eec"],["/blog/2019/03/29/lanqiao/审美课 /index.html","e9700c903f4324c66652aebf5f51e892"],["/blog/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","97b98c03ffc9c9f3594a816247b50fd4"],["/blog/2019/04/02/lanqiao/迷宫——最小步数/index.html","59e8c0aae101c944ae7a63f8d06ef89f"],["/blog/2019/04/08/lanqiao/深入理解线性素数筛/index.html","648e9d04d26dd18fb016eac7582a7295"],["/blog/2019/04/08/lanqiao/素因子去重/index.html","c64ed0585191bc6c46794db47e0ae897"],["/blog/2019/04/09/lanqiao/P0505阶乘取数/index.html","06a71a7c79376144d01a3490261feef0"],["/blog/about/index.html","4c336f5b6fd5726bfc94bbe2d80b9182"],["/blog/archives/2018/12/index.html","0ba8f5a1e8247a58f143e873c436ad8a"],["/blog/archives/2018/index.html","6c71df2eace094e8bd7e7f97b33ca4ca"],["/blog/archives/2019/01/index.html","4b4f6266c004b3508eb5fa76dd2821f9"],["/blog/archives/2019/01/page/2/index.html","b31378d3a6ae54edf999391c8e6b9552"],["/blog/archives/2019/02/index.html","afe86d22c9ffa113954158378164bfa9"],["/blog/archives/2019/02/page/2/index.html","e97e6680e9d9f5ddf6264a186a9097f7"],["/blog/archives/2019/03/index.html","fdcaddfa63cb5ab0b68b4217c4a62531"],["/blog/archives/2019/04/index.html","f67a0886634d38b98a8dd820762ee463"],["/blog/archives/2019/index.html","15833f962a718c751eb8715226dac509"],["/blog/archives/2019/page/2/index.html","5dc7ecea4f41cae99aa19343d880d26d"],["/blog/archives/2019/page/3/index.html","632e270ff531dac170995ea638f023cf"],["/blog/archives/2019/page/4/index.html","4e379e973306aa36964d1c93b0e2ad7c"],["/blog/archives/index.html","c6eb79df040b052afb05217be2c07350"],["/blog/archives/page/2/index.html","3ead5f113946e9b821f47ce589713cf8"],["/blog/archives/page/3/index.html","f21a7c11a0e161ceeec7b8e3addd7078"],["/blog/archives/page/4/index.html","a50c7626aa879148dbe68524c341e918"],["/blog/archives/page/5/index.html","d4a38da2384b0c14e93a716970cb5e05"],["/blog/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/blog/categories/Hexo/index.html","7a81dd2602ca232c41373619db82914e"],["/blog/categories/index.html","9d3b8d3d6c72272bc0c26ab0aa29933d"],["/blog/categories/数据结构/index.html","ead0b4f49e9fbeb209421d6fea2fc0cb"],["/blog/categories/算法/index.html","7d403a818aa5c0a22b8a115a8d8edcb1"],["/blog/categories/算法/page/2/index.html","b0d529763f7277d056e158a56a58cec5"],["/blog/categories/蓝桥杯/index.html","275bfb92f2a71add1084f81fbdd36841"],["/blog/categories/蓝桥杯试题/index.html","31c4e84b09906d8df30ff04920f4dcb1"],["/blog/categories/蓝桥杯试题/page/2/index.html","d26e039c2679f2b9a4a41c2f1d2512ef"],["/blog/css/index.css","a5767eec504f4287154039d71f03223f"],["/blog/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/blog/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/blog/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/blog/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/blog/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/blog/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog/index.html","30d012bb95e19326637358984a803474"],["/blog/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/blog/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/blog/link/index.html","7aa16d727bcb9a78747fdb3bcb3682fc"],["/blog/messageboard/index.html","1d4f44b00563f732f76e13f35e3ad147"],["/blog/music/index.html","48fb4a120e771f1d95b4c5ac3503b1f3"],["/blog/page/2/index.html","4f0790ced6c422d98bae520d74c6d23c"],["/blog/page/3/index.html","90b01bf967b2f2c691f21c5939ca5b7c"],["/blog/page/4/index.html","0e115da4f4f99b4733941d36ac2adfb1"],["/blog/page/5/index.html","8c225cc827bee0b75c30b050e4c5426d"],["/blog/sw-register.js","8a431fe8d5a02e46c4eb7780e04e5bab"],["/blog/tags/2N皇后/index.html","0403491125230210d4bf461872c18bd8"],["/blog/tags/Hexo/index.html","821e7c98d55fb3b99e1b69fd73f8d9cf"],["/blog/tags/N皇后/index.html","f9fe3e889280fb44c695abf9abe0e718"],["/blog/tags/bat脚本/index.html","83db8d8d3b629218aec35ecf9530aacc"],["/blog/tags/index.html","299d25a3499cb78a671c0519213493a5"],["/blog/tags/leetcode/index.html","1f8ab01475992cea71f22f50cfb1da02"],["/blog/tags/二进制表示/index.html","1604ee706b9006f1b9762845fe059d04"],["/blog/tags/全排列/index.html","a20a244b26b36ca42a688068360ceb48"],["/blog/tags/冒泡排序/index.html","4606bf7c8718d2ea48df8abacb837177"],["/blog/tags/图/index.html","befea9d22d8f88fc17d68dac3aa5b5e5"],["/blog/tags/字符串处理/index.html","05e458f8ff9d20c65ebe6128bb07bb88"],["/blog/tags/快速排序/index.html","9819e07030f39c00cba57d92ef7a541a"],["/blog/tags/搜索/index.html","f8d8ccc895df388e085bca3c90810a39"],["/blog/tags/数据结构/index.html","e6c626c1fa268569b6512c9ab7c935d5"],["/blog/tags/最小步数/index.html","45f19c31ffaa4cb95853caba7a9ac1c5"],["/blog/tags/深度优先搜索/index.html","1cf28fab66066abe0864d6d26ddb6f4b"],["/blog/tags/算法/index.html","f26b3f3ce47ac9a737e1afa0051a15c1"],["/blog/tags/算法/page/2/index.html","4cae27be34381099c413c61fd6ce5ffc"],["/blog/tags/算法/page/3/index.html","9e426bd7bb9a4589627e24d9a05e7368"],["/blog/tags/算法/page/4/index.html","f809b2d0bc8479e7cac17f35081d5bb9"],["/blog/tags/算法/page/5/index.html","e33366ea5e8c6d4c0644abbce3b7c08b"],["/blog/tags/素因子/index.html","1e1eee756b1ba3fd1dee089d6571e733"],["/blog/tags/素数筛/index.html","ed61cad0311eabf74117d8d84db5922f"],["/blog/tags/蓝桥杯试题/index.html","123a8a1e62ba57e11015bd7c86c7ef01"],["/blog/tags/蓝桥杯试题/page/2/index.html","063d435bd0fd8251f8f808a71b656056"],["/blog/tags/连通图/index.html","7c21134fdc359c12c9244bacda0b503e"],["/blog/tags/阶乘取数/index.html","5c0c5a9acef9adba35adb322a8e2b5a9"]];
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
