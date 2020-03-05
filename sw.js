/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","faff490cbc55bc826b267c5d5bc17aa4"],["/2018/12/16/LeetCode/leetcode2/index.html","532c89200074fa9748481ee76743c88c"],["/2018/12/16/LeetCode/leetcode3/index.html","b542955d99d549fce525628fbfdfcf7a"],["/2018/12/16/LeetCode/leetcode4/index.html","5db72e3b0ba894fbac73759195a67093"],["/2018/12/16/LeetCode/leetcode5/index.html","4772d6a1b989be0161dbd0d9afccd36b"],["/2018/12/16/LeetCode/leetcode6/index.html","66585afd6bd36c3c5509b3f40bd94b81"],["/2018/12/16/hello-world/index.html","8928d85488f907ce69405fbd64d93223"],["/2019/01/16/DataStructure/dataStructure1/index.html","4fac900cd93017a7ad4f34347ec22497"],["/2019/01/17/DataStructure/dataStructure2/index.html","f90cd2ab169db7996f3337858ea77f05"],["/2019/01/18/DataStructure/dataStructure3/index.html","f8d9111a84326b396ad43ccfb0433dba"],["/2019/01/19/DataStructure/dataStructure4/index.html","95dd42ff56a05b0f834a49bb49baeed0"],["/2019/01/20/DataStructure/dataStructure5/index.html","961b5737e3e7e4d349ee99825b5aac03"],["/2019/01/22/DataStructure/dataStructure6/index.html","e4c7df5f5a59a656cf2b303927fe2c7a"],["/2019/01/24/DataStructure/dataStructure7/index.html","506ff61f40509cfea40c954560015e55"],["/2019/01/24/lanqiao/basic/index.html","bed3ef01c4cc6f355a9eb790990d437a"],["/2019/01/26/lanqiao/basic2/index.html","c1d35cb8ec61687d37c9839930a0e688"],["/2019/01/26/lanqiao/basic3/index.html","7d67c76215805ead9eae60a1f039332d"],["/2019/01/27/lanqiao/basic4/index.html","e3c72970d5868585114f5308445f3bae"],["/2019/02/13/lanqiao/basic5/index.html","316acf71ddcbc4ec2347d676fb8cb1f9"],["/2019/02/14/lanqiao/basic6/index.html","dd45c76ff66c7a6cb49b4aa85332e6d8"],["/2019/02/14/lanqiao/basic7/index.html","05bf68e50e0024e2f9418ef83814de67"],["/2019/02/15/lanqiao/basic8/index.html","ace7d986ab63e387709cce4350f1819b"],["/2019/02/15/lanqiao/回形取数/index.html","fc49423dddce2937f0d9bcca5df85927"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","ea011ac249f85cd96dcbc61f95012022"],["/2019/02/16/lanqiao/芯片测试/index.html","f9ea5fdb240ca56256791a68cec0e8ee"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","d5966c2b39caa356ee29ba67bba2e114"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","9a73fd1c54407b148976297e4f150ea3"],["/2019/02/18/lanqiao/Sine之舞/index.html","3862351c5f999f26314c99d1ca01f64d"],["/2019/02/20/lanqiao/数的读法/index.html","f2296dbd2df40fd1d24fcefd6a888d0d"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","6017d6c45656f2e49af7ae767978ead4"],["/2019/02/27/DataStructure/快速排序/index.html","99eea5694e7867e60d956e81c7c8f1fe"],["/2019/02/27/lanqiao/完美的代价/index.html","df2940202b5d5f3478c7a114d2a629ae"],["/2019/03/13/lanqiao/数字排列/index.html","4d50aa728fd4f2b527adf6d6b9167aad"],["/2019/03/14/lanqiao/数独排列/index.html","327bc33cc2699ba75dd5b7492da5c1b3"],["/2019/03/15/lanqiao/凑算式/index.html","db42e9ee500864bfce7859c422252c99"],["/2019/03/16/lanqiao/方格填数/index.html","326f65d056de509a8174c653f405bf89"],["/2019/03/18/lanqiao/剪邮票/index.html","b2a3ea6371bd03946d76e98bb723a637"],["/2019/03/29/lanqiao/审美课 /index.html","86c95a5f695f9bfd94ade91ce95b6b8f"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","fdb6683de4a72d3418639486029de6f5"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","76b5a142f3317366fa9ec48edbac21db"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","6de9b6639faf65aa00ccaa779d308c9a"],["/2019/04/08/lanqiao/素因子去重/index.html","232efd393ffa2ae43b1579daa6e9a416"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","b28f2842ed7b2d72ef781af21f05ef05"],["/about/index.html","039a3edb9077be961f69ee4b80d7c408"],["/archives/2018/12/index.html","27b5f741fe893b7db9e98809e74ffebb"],["/archives/2018/index.html","c91a657d6ce72d93d075e7b4e450fc08"],["/archives/2019/01/index.html","fc6d5641c04f5e00751a78a210aa1882"],["/archives/2019/01/page/2/index.html","3db6ac586358d7b3cac4cad514150f93"],["/archives/2019/02/index.html","d7579f21b1aa1bb37e535cff1d7eed4e"],["/archives/2019/02/page/2/index.html","ae52b08902520357c9326362e5a29dbf"],["/archives/2019/03/index.html","362ed1de5eb8f2b2ee30adb33d4a3ddb"],["/archives/2019/04/index.html","08a055dc66bae1a07fb440233e41ce97"],["/archives/2019/index.html","c384279bdda67962a56d70228f8e78fd"],["/archives/2019/page/2/index.html","bb2392f3c4c03a9c09e2e055bb2555f0"],["/archives/2019/page/3/index.html","518a4111781624ee815ee6590390ae6c"],["/archives/2019/page/4/index.html","4020b62df18e69d48479643a845975bf"],["/archives/index.html","b350aa635a43c6bf4aa7cf3fb63e3820"],["/archives/page/2/index.html","85a5ab84c25b9ddb9e03fb171cde16bc"],["/archives/page/3/index.html","37e9dde2eaed28ee612a9b29cfff0bc9"],["/archives/page/4/index.html","36218fad8fc39f7319424fa66432d5a7"],["/archives/page/5/index.html","15cbcf455584fdb4eb85354f678359c0"],["/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/categories/Hexo/index.html","61cc13ae3dd4405dd916912248f6f9c3"],["/categories/index.html","2ef1b1cdc26868713eeb1da56cbfe1a4"],["/categories/数据结构/index.html","76589c9891dd3eff6d5991290f69af96"],["/categories/算法/index.html","09fb9fed058bdce54d9a3e4f7b7ee06c"],["/categories/算法/page/2/index.html","c1b2564b219728eadcdc8ac05e31957f"],["/categories/蓝桥杯/index.html","317fada9efe5e35e6493240d17645075"],["/categories/蓝桥杯试题/index.html","890b112a9c10c3b1592e6c6d9134176f"],["/categories/蓝桥杯试题/page/2/index.html","adb2763357fb13088334314ecedb9b8b"],["/css/index.css","e9dd933551ca0a6d936e328a1ced6ef4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","6044d9d7be9f336dbecc775673d5446d"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","cee60bc614ff25b58b56450d8b1e4401"],["/messageboard/index.html","4d12a61a07f09550c5d5c08c5c9450ee"],["/music/index.html","a1b4ac730a0cc0235a80b8d8115f8ad3"],["/page/2/index.html","5f734e840f12711bd6fcc58e8b5bc2b7"],["/page/3/index.html","aa824d6973d81fff7e216484211c45d1"],["/page/4/index.html","42565379ceebf1d8e9679f685de52308"],["/page/5/index.html","b3dc31f15480399c725e80b9685d7936"],["/sw-register.js","382285df6225500f53d8ed4ba5a114bd"],["/tags/2N皇后/index.html","f87d7f5e8d5313b6e6baa9b37f4ed344"],["/tags/Hexo/index.html","1a2bc8ce4e08154b78b7aca635aa3abc"],["/tags/N皇后/index.html","fdbb68de870d1542f0495bf75ba2abf9"],["/tags/bat脚本/index.html","35713ef280411d965649add5c95a3e9e"],["/tags/index.html","ca939c25d636026a9a2c5d5c178e8611"],["/tags/leetcode/index.html","62e16d35366e7b8e397169f1c7b25b75"],["/tags/二进制表示/index.html","a2b320812cec584bfa83d3bc85cb5f66"],["/tags/全排列/index.html","530d06e54937742aea7922ee8a9a0415"],["/tags/冒泡排序/index.html","362939c95e331dfd6e855520bfbbe9bf"],["/tags/图/index.html","2169f2b0f2097b0523aff4358714fe8d"],["/tags/字符串处理/index.html","08986ab356c74a071578c5490d0c2d5f"],["/tags/快速排序/index.html","0d3230a9be2b1d2863e570291c8a37f0"],["/tags/搜索/index.html","ec41513ec0ccca856ae230c44475c1c2"],["/tags/数据结构/index.html","b63bc9d07a503532c8e22044a73b4921"],["/tags/最小步数/index.html","0f8a2bde7f46007ed698068596ad29dd"],["/tags/深度优先搜索/index.html","c89a8c184211532a2a5a236f2972a13b"],["/tags/算法/index.html","e1bd71586bc7cb70569f4e5e3b1157f9"],["/tags/算法/page/2/index.html","7931fa5dfc586b566b07278b6843983f"],["/tags/算法/page/3/index.html","d6e59f58c162b34c9b6f58e006359417"],["/tags/算法/page/4/index.html","555b01d37f8623cef10d0a6243a9bf49"],["/tags/算法/page/5/index.html","43a2ec27b0a0c188c0a33730287fc940"],["/tags/素因子/index.html","0d1451183bb197f4c975f896225c9c39"],["/tags/素数筛/index.html","b88560318fa865206e646af7274935d3"],["/tags/蓝桥杯试题/index.html","c97d2abc3ef2fc07fa54a0ee72bd9da3"],["/tags/蓝桥杯试题/page/2/index.html","e5839def338291c2fce780fa5bdb1315"],["/tags/连通图/index.html","8a847da6cf04fb43a6ad9c9a27375df0"],["/tags/阶乘取数/index.html","4a6af7b5ca3c10ab20cb9d74beda061d"]];
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
