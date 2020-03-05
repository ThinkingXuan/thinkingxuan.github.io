/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2018/12/16/LeetCode/leetcode1/index.html","4c291d8f881b8df42711f236ee6b3ab4"],["/blog/2018/12/16/LeetCode/leetcode2/index.html","2cc58968e20c0db63f43f234d6a8ec35"],["/blog/2018/12/16/LeetCode/leetcode3/index.html","5b798f915d8d6bb3b0fa80102eb1f47b"],["/blog/2018/12/16/LeetCode/leetcode4/index.html","f81c3c01d713c2cef7b6945adf321260"],["/blog/2018/12/16/LeetCode/leetcode5/index.html","ed158d082161b353b0256eb086f27df0"],["/blog/2018/12/16/LeetCode/leetcode6/index.html","7db332a2fead422b249a807583d80f45"],["/blog/2018/12/16/hello-world/index.html","4ed246cb9a1ff12254c2edacadee5d12"],["/blog/2019/01/16/DataStructure/dataStructure1/index.html","54e52aee0908c016119ab97cfe645b57"],["/blog/2019/01/17/DataStructure/dataStructure2/index.html","12f0cb46f4573cdf476d08edd9fbdfb9"],["/blog/2019/01/18/DataStructure/dataStructure3/index.html","791cd0d343cce64a65c8ba0437a2aa4a"],["/blog/2019/01/19/DataStructure/dataStructure4/index.html","d2fd2af72cf97b67bcae760d370881cf"],["/blog/2019/01/20/DataStructure/dataStructure5/index.html","c5b38277fbe6158307d19934972c3547"],["/blog/2019/01/22/DataStructure/dataStructure6/index.html","ccecc2aad62561132d73661adfd1bfc0"],["/blog/2019/01/24/DataStructure/dataStructure7/index.html","42c34206a013516eecc08df1a02ea5c8"],["/blog/2019/01/24/lanqiao/basic/index.html","5607800c28a2dae78f7b686a3e82a476"],["/blog/2019/01/26/lanqiao/basic2/index.html","b3f20cea20ee3c4832fd1250e6216884"],["/blog/2019/01/26/lanqiao/basic3/index.html","4fa3600f876165fa9c36c4826b4dab39"],["/blog/2019/01/27/lanqiao/basic4/index.html","9dbee2380cb60708ebfc8f02e543b3dd"],["/blog/2019/02/13/lanqiao/basic5/index.html","1721f42892f35172111e5b97dd88b745"],["/blog/2019/02/14/lanqiao/basic6/index.html","ecb479e9fcf6a828883ff9ca538b41a2"],["/blog/2019/02/14/lanqiao/basic7/index.html","9a0a3a031d7f4560dd38ee5c3ef148d3"],["/blog/2019/02/15/lanqiao/basic8/index.html","0f37d85d4e8937af8d28d271d3dfec74"],["/blog/2019/02/15/lanqiao/回形取数/index.html","cf5d1563ba9e331fda8e9e5e2b2259e2"],["/blog/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","0d86a203b8afb3381d1000390f2045da"],["/blog/2019/02/16/lanqiao/芯片测试/index.html","63ba5f8e57b0dc9527ddbfdd54ccd1d0"],["/blog/2019/02/16/lanqiao/龟兔赛跑预测/index.html","da2824be36f7440e228e27416f9a698a"],["/blog/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","84210e548d6a12374591c68cff9c28bd"],["/blog/2019/02/18/lanqiao/Sine之舞/index.html","eb4be80bfbfab6738e6d0e481ed1f23e"],["/blog/2019/02/20/lanqiao/数的读法/index.html","2f13cc0f14856fb4e1643d542e2e2c27"],["/blog/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","26d110b970efa78cfa32d95eb56c6669"],["/blog/2019/02/27/DataStructure/快速排序/index.html","2430f09eb142f47f413f420a3ddc46f7"],["/blog/2019/02/27/lanqiao/完美的代价/index.html","acf251c485cc0fed0fef34f82971be16"],["/blog/2019/03/13/lanqiao/数字排列/index.html","2c46fa9534830e2c78e0e6f5d7ed006e"],["/blog/2019/03/14/lanqiao/数独排列/index.html","2cb93868b80983da994e381f89bd0437"],["/blog/2019/03/15/lanqiao/凑算式/index.html","22e3e894612a952cdd4be1dd7a7ab35f"],["/blog/2019/03/16/lanqiao/方格填数/index.html","eb78e51f7922da6adf33ce1664efb33c"],["/blog/2019/03/18/lanqiao/剪邮票/index.html","513b6ee67386facc57de666e0ddd3eec"],["/blog/2019/03/29/lanqiao/审美课 /index.html","f9fc003539851f17165cce8607288a8e"],["/blog/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","e0f02d50313ea3815e4d2c052aed61bb"],["/blog/2019/04/02/lanqiao/迷宫——最小步数/index.html","0699b2688f3945aa2544df101d374216"],["/blog/2019/04/08/lanqiao/深入理解线性素数筛/index.html","ca5bda17c6585bfb30f1babe0f5c2748"],["/blog/2019/04/08/lanqiao/素因子去重/index.html","23754e3a77c598aca7251d9445126d55"],["/blog/2019/04/09/lanqiao/P0505阶乘取数/index.html","4b813f2b1846a6a3f3510228f85dde0a"],["/blog/about/index.html","1b2fad770d438d1e20f7b1212dc8f4a8"],["/blog/archives/2018/12/index.html","2787a13f9e21554bbce01a3b63cb40c5"],["/blog/archives/2018/index.html","bd9cf93ed44984039c7c791a6c20ecdd"],["/blog/archives/2019/01/index.html","ebb5d112408aa19d76dbd7650ee037fd"],["/blog/archives/2019/01/page/2/index.html","23f15dd83de6e9843a7e342a9deb4691"],["/blog/archives/2019/02/index.html","ec989872ab37a0b47d9a341dde5e8fcb"],["/blog/archives/2019/02/page/2/index.html","e89997a0acc57e47c5971664b716dfd3"],["/blog/archives/2019/03/index.html","41a987bad8aa00b213b002f1dd7c2717"],["/blog/archives/2019/04/index.html","d3a5a40eb78725a7c11c302a6a60507d"],["/blog/archives/2019/index.html","504d54e215b2f893a2a3adbd47afad2b"],["/blog/archives/2019/page/2/index.html","4947b06512cb5ab317f645b062672d93"],["/blog/archives/2019/page/3/index.html","94c534786cee56ebc3ff56531426058f"],["/blog/archives/2019/page/4/index.html","ceae11c89ce69adfab33820aa0be2fdf"],["/blog/archives/index.html","a5898bde7c8547917baf40a3133e92ef"],["/blog/archives/page/2/index.html","d01dd335a1569eeef3709851df9d94c9"],["/blog/archives/page/3/index.html","db40840980d8cc12cc606b64a6ecc392"],["/blog/archives/page/4/index.html","11681133e279545045c3afd10a459ae6"],["/blog/archives/page/5/index.html","46c30e5a9c9cc86433637f9ec5f892e6"],["/blog/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/blog/categories/Hexo/index.html","44d5e57f14a79e2d48410c8142100faf"],["/blog/categories/index.html","cc5cba8d70a6547b631c9cb87b07f6c9"],["/blog/categories/数据结构/index.html","9cf92ded9cb431407702d8ec34f379a1"],["/blog/categories/算法/index.html","abfb2eb76720697d40c7d799b7afc9e4"],["/blog/categories/算法/page/2/index.html","899e0e5d920e8cbe0358fdb19b69dcaf"],["/blog/categories/蓝桥杯/index.html","997fc290c13aabe9ccd238239f016542"],["/blog/categories/蓝桥杯试题/index.html","7e366d0af280cec0972f7c7d9c1602f4"],["/blog/categories/蓝桥杯试题/page/2/index.html","1c8888bbd567c95f434a8fa53bead47c"],["/blog/css/index.css","a5767eec504f4287154039d71f03223f"],["/blog/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/blog/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/blog/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/blog/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/blog/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/blog/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog/index.html","3fe401dca83d6a92f6d09dd403f06be3"],["/blog/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/blog/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/blog/link/index.html","2699d454c76749ead03131a3de2f7075"],["/blog/messageboard/index.html","f951614d4d9e22daa411ff1024a7023b"],["/blog/music/index.html","03552abfee0da47ef1ffa36bed41e93f"],["/blog/page/2/index.html","84e663453cd96a64bb859d8f11a7047b"],["/blog/page/3/index.html","daf482ca6fb0979c16aa72c8d507c4d6"],["/blog/page/4/index.html","5d2bb75afefa1b3e551fb1f8d2bc7d28"],["/blog/page/5/index.html","e383aa54ce3cdba4db9b09becd634e64"],["/blog/sw-register.js","6ff536815906bf53b1d608eed9cf936d"],["/blog/tags/2N皇后/index.html","b702f5ca32786d076c560368d5a97906"],["/blog/tags/Hexo/index.html","9054770520f1d680c2655aceba773e8f"],["/blog/tags/N皇后/index.html","c6bc263b8801098f571d733986dd864b"],["/blog/tags/bat脚本/index.html","dcbdefa2efb391ca2297288d49827e16"],["/blog/tags/index.html","3897a7f90f431535f371293f4040d7a0"],["/blog/tags/leetcode/index.html","83ea2bebd8d3baf9f92843c2330219cc"],["/blog/tags/二进制表示/index.html","142f3953a2f6bdb873c489ef5d7e5d8e"],["/blog/tags/全排列/index.html","b39ae6c225f960f459fd647ca210c53d"],["/blog/tags/冒泡排序/index.html","70e1270dc8dd70ab7cb52d89abbe78cd"],["/blog/tags/图/index.html","4eae6822994def93c9d914e52d680c5d"],["/blog/tags/字符串处理/index.html","2eb2dab7aa27da2ffc4cfc7409017cbe"],["/blog/tags/快速排序/index.html","474231d4d54a3cbf1225fcb3dfea87a6"],["/blog/tags/搜索/index.html","20fe33faf2c291cad3c55d82b650c64c"],["/blog/tags/数据结构/index.html","b338ddb4aea25f01d334387066cedabd"],["/blog/tags/最小步数/index.html","eb9bf76a6da92be94545a8d915376d38"],["/blog/tags/深度优先搜索/index.html","2ffaf79e4c7d7f8a88290a39d5cbd6b7"],["/blog/tags/算法/index.html","665ff4168a4246fc216433e125d2ed04"],["/blog/tags/算法/page/2/index.html","94e387ac12673044692776bf30b3f36b"],["/blog/tags/算法/page/3/index.html","6a217549581f2add75230289978d0e9f"],["/blog/tags/算法/page/4/index.html","09cd4dc21b2c46ab32896ca5e0e7844b"],["/blog/tags/算法/page/5/index.html","ca0dd31f052b7115c692b57344e0c1c6"],["/blog/tags/素因子/index.html","95679e502074a0a8821785eafc0ca1d9"],["/blog/tags/素数筛/index.html","347afa28cd80bdab92d8ff50ace382b7"],["/blog/tags/蓝桥杯试题/index.html","abf128abdb5ed15eca85b332142e1dbe"],["/blog/tags/蓝桥杯试题/page/2/index.html","06ba142c75a8e866556c7ccfee343f9e"],["/blog/tags/连通图/index.html","ec5d6adf79cab5f5be3e73e78b81ceb2"],["/blog/tags/阶乘取数/index.html","9f5b8bd8e5afcfe0137032f775b58058"]];
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
