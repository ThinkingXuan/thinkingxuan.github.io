/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","f577be949a79f4f6c64ce8d97b291482"],["/2018/12/16/LeetCode/leetcode2/index.html","67703a69e82ddb0e8221388d68aa9701"],["/2018/12/16/LeetCode/leetcode3/index.html","cabd6f9d51ecb60415701a92887b8551"],["/2018/12/16/LeetCode/leetcode4/index.html","5476ab648cb14cf213cc77daa55a2c61"],["/2018/12/16/LeetCode/leetcode5/index.html","4b8c03b54421468e7c79eade8c32f2df"],["/2018/12/16/LeetCode/leetcode6/index.html","d3dd26872b280d6cb91e5d46ebdb3b93"],["/2018/12/16/hello-world/index.html","9549abbd9afa958528343c8f446b4be1"],["/2019/01/16/DataStructure/dataStructure1/index.html","6a2d31436ed85517abfc1dce82369061"],["/2019/01/17/DataStructure/dataStructure2/index.html","af6a0e0f35e9c7ad53bfd948b477943f"],["/2019/01/18/DataStructure/dataStructure3/index.html","ccaeec7aa52675b0ef428589dac257fe"],["/2019/01/19/DataStructure/dataStructure4/index.html","d548d8fd3744981d0c290e89fb710110"],["/2019/01/20/DataStructure/dataStructure5/index.html","64fc207674af3ad9505efae5ece2b883"],["/2019/01/22/DataStructure/dataStructure6/index.html","11f4727831a81bb2918c8ace7890e57f"],["/2019/01/24/DataStructure/dataStructure7/index.html","c77ea426fa9bf2b943a24a8cee0a0ecf"],["/2019/01/24/lanqiao/basic/index.html","10a07ce41ce96ed3b1cfd0bc79879b30"],["/2019/01/26/lanqiao/basic2/index.html","efe9e18ef8e8e66e99037c03cb3f0166"],["/2019/01/26/lanqiao/basic3/index.html","86b5aae89dd59acaaa6efbf2ff31a37f"],["/2019/01/27/lanqiao/basic4/index.html","968e468f3b8f89fac787d3484ec40d82"],["/2019/02/13/lanqiao/basic5/index.html","f0ea27bdca8b7aadceb7f7025af6115d"],["/2019/02/14/lanqiao/basic6/index.html","f501242848a1a81876d40638bf8e5249"],["/2019/02/14/lanqiao/basic7/index.html","e76c9b993a4415933d1890845a4276b7"],["/2019/02/15/lanqiao/basic8/index.html","ae6bbb0fe5dcb190af28209d4c0b52f8"],["/2019/02/15/lanqiao/回形取数/index.html","033882b8c64348bb4f649fb267212ab9"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","6af9d6939d3efcb7680858d40b0eeb4d"],["/2019/02/16/lanqiao/芯片测试/index.html","559f8d706767dc5eb1a16a0af3e356df"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","c9f691cd6d8a21416ac0cea84bfc45bb"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","c3bb66dfe916f09fe7958a6a91526822"],["/2019/02/18/lanqiao/Sine之舞/index.html","4efeca2f3c9cb8870f301709554554c6"],["/2019/02/20/lanqiao/数的读法/index.html","e7660c0ba5fe4827f49e5da669db8c04"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","d48de99acccf7caef2ecff47a1d2962c"],["/2019/02/27/DataStructure/快速排序/index.html","f18bd5facad0018ce47e370db7076aa6"],["/2019/02/27/lanqiao/完美的代价/index.html","550ba24e86eabfd24899212676e08d5b"],["/2019/03/13/lanqiao/数字排列/index.html","51e77c1e36012ad96d924dc0a1abb3af"],["/2019/03/14/lanqiao/数独排列/index.html","200d227167fe6901b6a603424fd0564e"],["/2019/03/15/lanqiao/凑算式/index.html","cc6edab48a2eb0b7d09e0122170be618"],["/2019/03/16/lanqiao/方格填数/index.html","ba8a0e1ab0a96392958ba9fa953ef6db"],["/2019/03/18/lanqiao/剪邮票/index.html","36b6598b6412335756ae29d1b256448c"],["/2019/03/29/lanqiao/审美课 /index.html","ad0eb6ccf34db76d541dc97885c52b27"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","b7d10eeeed24599c378217e8ef24c20b"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","45962ba45240884e383a7af1967be31f"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","2cc03dda37026f1dd1e0a7da603709f6"],["/2019/04/08/lanqiao/素因子去重/index.html","cd45b15bf8d509eed5cb88db5b720fd2"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","ed11677cac1c5a85ed0fef611ce67b49"],["/2020/03/09/git/从Github指定仓库中删除文件或文件夹/index.html","8e3f5c96f775418047fcc3c9585a8b27"],["/2020/03/25/OS/操作系统1/index.html","0529e21539abcf85012db65f800df164"],["/2020/03/25/操作系统/操作系统真题答案/index.html","04f1d8655538489ddac8512bf2db471d"],["/2020/03/26/OS/操作系统2/index.html","ea85f2b7f38e6ac7cbceaabd28e5edf9"],["/about/index.html","42182688b17f73d06f80b2aa8525e7d5"],["/archives/2018/12/index.html","189eb9b01bb1c7feff54d4c520d172af"],["/archives/2018/index.html","53e46526b27fb87affe04fb9e8cebf72"],["/archives/2019/01/index.html","88fb8d9bda0de46f44de090d62b79b16"],["/archives/2019/01/page/2/index.html","d0191cc4c444babf94b2a949d122299d"],["/archives/2019/02/index.html","270dba240498c35426695709435751f7"],["/archives/2019/02/page/2/index.html","f05ee5f646cb00397aefd3a580638738"],["/archives/2019/03/index.html","9b11682223fd837988916faa9ce8375a"],["/archives/2019/04/index.html","f27fc4b4bc75c2987decd09b5a2e9b91"],["/archives/2019/index.html","287962964fec755d58d66bf7531a7159"],["/archives/2019/page/2/index.html","ab4df598e410caa7d233f73479347ce7"],["/archives/2019/page/3/index.html","0d2f9da79e28c48c49ddce1e55c82afe"],["/archives/2019/page/4/index.html","10a754eb4465377538f8e3142aa44b88"],["/archives/2020/03/index.html","2f394dfc7ada4cea22f786ce2395cd99"],["/archives/2020/index.html","29a12978cb52e43551ff9cead1fcca32"],["/archives/index.html","c5fedab00977daa560ffdc4012d29ad2"],["/archives/page/2/index.html","bfb3fd8b354df2975000bb5f7e4ac1dc"],["/archives/page/3/index.html","d7d22f20bc88ff6e9d32a00e59c1f3b7"],["/archives/page/4/index.html","4127851bfedd8fdef61fba8caa176703"],["/archives/page/5/index.html","311000aef07673c32971de3d1c4883c2"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","b22862e9214977b84ba16e008c50b218"],["/categories/git/index.html","e25cc7888653c74ab1b78d7267531b66"],["/categories/index.html","9318ff7a1f28220ac87ceab7a4f23de3"],["/categories/操作系统/index.html","c320d44875a29b4892a175b3fd676a96"],["/categories/数据结构/index.html","a9b7b78f37151415aa54557b38f40cf0"],["/categories/算法/index.html","c0597c066d8a6a32e8bea654a66b5c50"],["/categories/算法/page/2/index.html","a7618879ced20ce1545a5e83ac1a2906"],["/categories/蓝桥杯/index.html","6a459ae48050a3af3b263e41823ca73f"],["/categories/蓝桥杯试题/index.html","5818c2abe8bb9216d6c0bb1b30dd5b4b"],["/categories/蓝桥杯试题/page/2/index.html","3cf8a1c30624ea06964140f6045ca972"],["/css/index.css","b306cef7937fef623fea48b44c3c5284"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","e2340fcdb754f2e07427b68a14541b17"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","f9b5317ccad7377eea6127b9ca3189e8"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","93a1865a1b3c6bebbea8ae463eec9240"],["/messageboard/index.html","d7e35732e98b422a9104900c0d32123a"],["/music/index.html","0371f1d179ebc239a9cb5a4f7d4183cc"],["/page/2/index.html","a29ac6599c7f6800ccbd786440fbe9b3"],["/page/3/index.html","12edb4224b221f0d49996fc71225bec6"],["/page/4/index.html","7397b593f6e2877881921f59a742aa2a"],["/page/5/index.html","0b830c4611e06b833f5c699ac76e2ed4"],["/sw-register.js","9d1a68f523fb429fdf1e080f4f432674"],["/tags/2N皇后/index.html","9f31fe98a3c52815dd2582e901697880"],["/tags/Github/index.html","4c8944954ed906068a829288546bf582"],["/tags/Hexo/index.html","af850a567d524191ee1cbfd88d811938"],["/tags/N皇后/index.html","65851c86c92d526a9137926759d139b1"],["/tags/bat脚本/index.html","6d25e778cc43cb6e710fbdd207f6b8d0"],["/tags/git/index.html","51bd035ad2fa60879571097e3687e584"],["/tags/index.html","b9d540442de62e2e0a1f014461c012c1"],["/tags/leetcode/index.html","759efb80ded0b17fb2220e32940b3629"],["/tags/二进制表示/index.html","c9ea3907b27dadabe2c4030b4dcec141"],["/tags/全排列/index.html","ac4f98313851cefaed2f2b5288d8df03"],["/tags/冒泡排序/index.html","e156ee9f168d91b43ee65466ec091938"],["/tags/图/index.html","40b74595d554a493c95611d84a6e264e"],["/tags/字符串处理/index.html","834234f2c1c812539550b586a24a1211"],["/tags/快速排序/index.html","507aed2a088f71156b920d6c9b9e3738"],["/tags/搜索/index.html","c764b5ed20e6f8fcdf7b418fda89b2b9"],["/tags/操作系统/index.html","6b61d89494f09fa4f0afd2d7d5969664"],["/tags/数据结构/index.html","ca1992e2c86fda17fc25caa2ef2dc32b"],["/tags/最小步数/index.html","d17fffffcef991a68d3e1122ff2cc8d5"],["/tags/深度优先搜索/index.html","e740468fd2f1f698dbe24295c7f885d1"],["/tags/算法/index.html","3c53539dedddd0785546d5c0d8d3dbbd"],["/tags/算法/page/2/index.html","fc0da336348bede5cdddfb1bd2e7459e"],["/tags/算法/page/3/index.html","329d5c826e227a76cc24415152c14068"],["/tags/算法/page/4/index.html","027b150b3626ea67fff8743f8b0b3a78"],["/tags/算法/page/5/index.html","6ed1c33f8577d19e069e598e30adeac6"],["/tags/素因子/index.html","a0a7f12d55b3892f3e9574a5670c2fc1"],["/tags/素数筛/index.html","4276eeddb4f25f77487b3450eaf76c44"],["/tags/蓝桥杯试题/index.html","fe60bb0ccf1b7dfe4658b0847c9f7ce1"],["/tags/蓝桥杯试题/page/2/index.html","d40b25f72e8e90fc0a6a457c9aafca22"],["/tags/连通图/index.html","02341aa73c8c17eecb53faa62eca896f"],["/tags/阶乘取数/index.html","049bb1e62c6a3fcc7c28e1bbeb14b983"]];
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
