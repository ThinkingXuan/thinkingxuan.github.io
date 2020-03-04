/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/2018/12/16/LeetCode/leetcode1/index.html","d1ce416558bc70c11e033f89a893a04f"],["/blog/2018/12/16/LeetCode/leetcode2/index.html","b6bc1c90d9a1428be0f9443149b64814"],["/blog/2018/12/16/LeetCode/leetcode3/index.html","ca2f54bff1547fc5d8de45e737bfabff"],["/blog/2018/12/16/LeetCode/leetcode4/index.html","d8a20aeaedfc2b824d20ab7772e17136"],["/blog/2018/12/16/LeetCode/leetcode5/index.html","d35c7092b46b26a24f4247cdb67d3404"],["/blog/2018/12/16/LeetCode/leetcode6/index.html","0399060b5d1c7f1d455b65f41ee74018"],["/blog/2018/12/16/hello-world/index.html","49ff121378c6a6bf26d255d4a60c56e6"],["/blog/2019/01/16/DataStructure/dataStructure1/index.html","c65dd1708b3fea3115bbd0c0329b2be2"],["/blog/2019/01/17/DataStructure/dataStructure2/index.html","a28c9ceaf5064341035f0f29f1c81e62"],["/blog/2019/01/18/DataStructure/dataStructure3/index.html","dc2c827938aeb2afb98491aefb50fcd5"],["/blog/2019/01/19/DataStructure/dataStructure4/index.html","303bb6347f2558b6447ea8f8d5085e52"],["/blog/2019/01/20/DataStructure/dataStructure5/index.html","fe1dd28ee5501744f161ac957961ad78"],["/blog/2019/01/22/DataStructure/dataStructure6/index.html","d3d252648d240e0d135baa61de02627a"],["/blog/2019/01/24/DataStructure/dataStructure7/index.html","4a1d77465962bfe946debe9a279ed78a"],["/blog/2019/01/24/lanqiao/basic/index.html","1f060feff17ec3db6ca5dd04930d44f5"],["/blog/2019/01/26/lanqiao/basic2/index.html","d33bfe4f25e187ea3f91829dff039685"],["/blog/2019/01/26/lanqiao/basic3/index.html","27c3f303e1067ad6a54f49babf701b30"],["/blog/2019/01/27/lanqiao/basic4/index.html","5d3518950ab9a1cec23c98c0017e0093"],["/blog/2019/02/13/lanqiao/basic5/index.html","ae23abdbc0b39842a93f0749a6623d91"],["/blog/2019/02/14/lanqiao/basic6/index.html","68865f589882e3d2c01eedd8153105fd"],["/blog/2019/02/14/lanqiao/basic7/index.html","495ab8ae6b13d246f08008eb2d634b5e"],["/blog/2019/02/15/lanqiao/basic8/index.html","d9b0c6c9a9db1f438f7f5e8a9c86ebfc"],["/blog/2019/02/15/lanqiao/回形取数/index.html","241e9f78b38cac6546bc701d17bcdc3e"],["/blog/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","793df026323cee4e9b520329e0a59f62"],["/blog/2019/02/16/lanqiao/芯片测试/index.html","8550efb8ce37d393cf8e0c18974eeba0"],["/blog/2019/02/16/lanqiao/龟兔赛跑预测/index.html","1ef56e5844accaefa8c5a810cec79bc7"],["/blog/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","e32186d26573eb5c34e6eae857d8407b"],["/blog/2019/02/18/lanqiao/Sine之舞/index.html","1f68a2423287e877c816eb8b65d24f3b"],["/blog/2019/02/20/lanqiao/数的读法/index.html","3e6ba5fe8fe9720d58ff225a5bfc8394"],["/blog/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","c7d7806c9a7da2e4856ab76dc1243bea"],["/blog/2019/02/27/DataStructure/快速排序/index.html","b3e7209267b741fa25b08f7c6891eaf1"],["/blog/2019/02/27/lanqiao/完美的代价/index.html","5e2d467440947d96ef28d2780c4fba93"],["/blog/2019/03/13/lanqiao/数字排列/index.html","a2b4ce5f389350e3fa37bb74b5a10a8c"],["/blog/2019/03/14/lanqiao/数独排列/index.html","bc7cbe454c40ce33f8c4ff0c80a5e2d9"],["/blog/2019/03/15/lanqiao/凑算式/index.html","913c01c07528d1c75203341d1851d0e9"],["/blog/2019/03/16/lanqiao/方格填数/index.html","1d869e6a92f80c0d31ed1bb5ae36d495"],["/blog/2019/03/18/lanqiao/剪邮票/index.html","5a8041aec26ef65b3f81e998aa85a410"],["/blog/2019/03/29/lanqiao/审美课 /index.html","6ab4a6a8ce73b48bbc7a33a08b5e0138"],["/blog/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","6ccb5111e50177b40207c3de9c480adf"],["/blog/2019/04/02/lanqiao/迷宫——最小步数/index.html","e77abe76d68d4a947c0ea8a1c31f5fe7"],["/blog/2019/04/08/lanqiao/深入理解线性素数筛/index.html","f79629b0635dd015f595447dcf73d56e"],["/blog/2019/04/08/lanqiao/素因子去重/index.html","92d27d56ba1aebc243ef2de3b23f7135"],["/blog/2019/04/09/lanqiao/P0505阶乘取数/index.html","d6f2d6b7693b4bb18cba34c3891e33c3"],["/blog/about/index.html","9a911d04941de062a3d8fdba4d96926a"],["/blog/archives/2018/12/index.html","19400fcfc0a4d3681e583772c4106de1"],["/blog/archives/2018/index.html","18b70b502d1ec2c9b253846617542764"],["/blog/archives/2019/01/index.html","6c2a807fcb61a6af8d7fb7007cb51fb4"],["/blog/archives/2019/01/page/2/index.html","355f236b183834a2df20b372484e89f6"],["/blog/archives/2019/02/index.html","c00a34c4e4995ddbea062f77a50dede9"],["/blog/archives/2019/02/page/2/index.html","0abe0f6cabca7626472268f73695e605"],["/blog/archives/2019/03/index.html","472340572af5c794b3abe9acf933d537"],["/blog/archives/2019/04/index.html","ea9a1a636c109774309dc5ccb262b760"],["/blog/archives/2019/index.html","a05b65025ddb8c0e374ad568abf4bf20"],["/blog/archives/2019/page/2/index.html","38344a73dbb246a87c3c19ff5925b1f6"],["/blog/archives/2019/page/3/index.html","e78464d144d883821bd5a2d7e5e34a83"],["/blog/archives/2019/page/4/index.html","6041fa722ca0a1d088776276a13309c8"],["/blog/archives/index.html","7761de24f1da19c5734579f1e356bc55"],["/blog/archives/page/2/index.html","cbf6953457ad2e8d8141f653083354cf"],["/blog/archives/page/3/index.html","9f41fb0fa979d613ae10435e06b0c7aa"],["/blog/archives/page/4/index.html","2e13886bbc27f744c9795929d93ad1a3"],["/blog/archives/page/5/index.html","71d6076ae394e77db01a14f5c49b565a"],["/blog/baidu_verify_MNweq4Df2p.html","77bd4409535da4f1d19e036c7fc5a15e"],["/blog/blog/bundle.js","8e7f412875fd1ee5ea7e477474bd7e77"],["/blog/categories/Hexo/index.html","3bbe0d9fcf25feec61f193baaef3106d"],["/blog/categories/index.html","f4d2c186b03cc13b84282c42d49581cd"],["/blog/categories/数据结构/index.html","a3fb7118b827afd677c8e831d6525c01"],["/blog/categories/算法/index.html","74a02a34761561e7456ca59a3887b4d7"],["/blog/categories/算法/page/2/index.html","e1a11b33cd4bcd39ca5ab963aac7a0d6"],["/blog/categories/蓝桥杯/index.html","b9953a5443e1c14f375b4e31ae896dac"],["/blog/categories/蓝桥杯试题/index.html","5c30f5a6831aeb4baaa86a63f71d8784"],["/blog/categories/蓝桥杯试题/page/2/index.html","c49c03252dd9d87917b577851e4e0a23"],["/blog/css/index.css","aacea8a189f6cc313e8b185bc1eaffe3"],["/blog/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/blog/google3234eda0998ace1f.html","42a7c5efa8442ab8b46c31423390a95c"],["/blog/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/blog/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/blog/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/blog/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/blog/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/blog/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/blog/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/blog/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/blog/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/blog/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/blog/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/blog/index.html","24af5da08202b3f6ebd614f3f6f7f3c5"],["/blog/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/blog/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/blog/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/blog/page/2/index.html","b9be58cc304f6d852aa76528751ed339"],["/blog/page/3/index.html","b3d38a49de5c1a2e6224407aefe51e2d"],["/blog/page/4/index.html","334bd787395e2836c64891708606c8fd"],["/blog/page/5/index.html","14e98dd5bc5335b42b80c4a51cf3ddec"],["/blog/sw-register.js","9b0845bd5dc863f09876dfbfb51722c9"],["/blog/tags/2N皇后/index.html","092cd3679c38848b2dd4ccb3d6659caa"],["/blog/tags/Hexo/index.html","c8d6d0fa00e59973b46be1d6a6db363d"],["/blog/tags/N皇后/index.html","9a08c45b76d5c103c227b511f421c0ba"],["/blog/tags/bat脚本/index.html","1586b8e7857fc47b30dc380434d420ee"],["/blog/tags/index.html","4d97513c26e3ca349ac00e6cc0c1703f"],["/blog/tags/leetcode/index.html","28a5de015f2894a8f749036338bcab1c"],["/blog/tags/二进制表示/index.html","ea59d5fb0f8217f7b12ce66bf87705eb"],["/blog/tags/全排列/index.html","5cfc6747da176efbe2a6af96a01fe0c7"],["/blog/tags/冒泡排序/index.html","271c864c676432f088f853473b89a078"],["/blog/tags/图/index.html","96fe7f83ff2d8899f87107e824546952"],["/blog/tags/字符串处理/index.html","0953e01dfb0ccf1d14f5a64fac8784be"],["/blog/tags/快速排序/index.html","0188e85798eb7272eedfa97190614b48"],["/blog/tags/搜索/index.html","c27e03ad3d453b8776666065bb792bc4"],["/blog/tags/数据结构/index.html","66a54ae629895bf0c7010f7dec0d5bd5"],["/blog/tags/最小步数/index.html","c938967b0f3e43ae7a2ed23212c5ee19"],["/blog/tags/深度优先搜索/index.html","ffab96a4c2bbcebca705089616224250"],["/blog/tags/算法/index.html","1e66f202ef0ba78d02f669ac1af9be38"],["/blog/tags/算法/page/2/index.html","71bc796937fb4582aed3fa450828e3eb"],["/blog/tags/算法/page/3/index.html","31ac7ee432005450809d8df7f43b472c"],["/blog/tags/算法/page/4/index.html","f5245e11cbea4be2312e9bf21b7881d2"],["/blog/tags/算法/page/5/index.html","b0d0c92041461c766a27a81a16a538cd"],["/blog/tags/素因子/index.html","bc37052a2ee2467a00d10672709d1bd4"],["/blog/tags/素数筛/index.html","b61b916bce61e9fc8f1e2669b79a42bb"],["/blog/tags/蓝桥杯试题/index.html","17645d16607b7de52545c1f07b74beb6"],["/blog/tags/蓝桥杯试题/page/2/index.html","fe6a57878149e3642957145356cd850e"],["/blog/tags/连通图/index.html","65c65eda58189a6c15544bc589be16f7"],["/blog/tags/阶乘取数/index.html","a739b4e04f32d4ac7b1071013f0898d4"]];
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
