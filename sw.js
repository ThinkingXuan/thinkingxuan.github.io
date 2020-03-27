/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","38d9976682bc5b6a3f13c215ebc34a9d"],["/2018/12/16/LeetCode/leetcode2/index.html","6861b2079a165b10e27da4c33226ffa5"],["/2018/12/16/LeetCode/leetcode3/index.html","c0adfb0176d3c52b073ba7adc4ad6d17"],["/2018/12/16/LeetCode/leetcode4/index.html","871a5534b760c04434796d79b7e38a41"],["/2018/12/16/LeetCode/leetcode5/index.html","0c20bacbf638a12179bd28c654fbb46e"],["/2018/12/16/LeetCode/leetcode6/index.html","cd698ab2d1984f0a5b52c600c870c7d9"],["/2018/12/16/hello-world/index.html","829aef808d23da4c71b75bf194b20ec5"],["/2019/01/16/DataStructure/dataStructure1/index.html","114d9c98e9bea8baee268557b32ac1ae"],["/2019/01/17/DataStructure/dataStructure2/index.html","43b028262f98949fa68a144d33359ec8"],["/2019/01/18/DataStructure/dataStructure3/index.html","62aafb27ef6eea612ec7895cc8b107d8"],["/2019/01/19/DataStructure/dataStructure4/index.html","971dceb5f361d472dfaea5d638928d56"],["/2019/01/20/DataStructure/dataStructure5/index.html","b80d6916d8b10ae69b4c50802d47662a"],["/2019/01/22/DataStructure/dataStructure6/index.html","f3478e109454182974ab1dfb60d9370f"],["/2019/01/24/DataStructure/dataStructure7/index.html","aa25db39eac90fb37eb6b2d944b8c349"],["/2019/01/24/lanqiao/basic/index.html","e87d825c76f84ba4515b8c116cd6adc7"],["/2019/01/26/lanqiao/basic2/index.html","7d1c5cb4a00acf68a77832edac37515b"],["/2019/01/26/lanqiao/basic3/index.html","cd0f367555ea65d931fd74488d3fb607"],["/2019/01/27/lanqiao/basic4/index.html","5e8e1415701dd7c09848ca56ffc30a00"],["/2019/02/13/lanqiao/basic5/index.html","5379c4e1e2a19d6cd1048297702edcf8"],["/2019/02/14/lanqiao/basic6/index.html","15e0ba7029c61eb01d960e7b2b357005"],["/2019/02/14/lanqiao/basic7/index.html","c6858a633992e86cd9249e8e94082045"],["/2019/02/15/lanqiao/basic8/index.html","a6735389fb03d2b3e24beb15c0a372ac"],["/2019/02/15/lanqiao/回形取数/index.html","56d7801571e7ad8e070529cc7ed1f02f"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","dcd5eb12b9c63b2db6f86f2727450e7a"],["/2019/02/16/lanqiao/芯片测试/index.html","c2d9908ffb144bd34c824ebb141ba765"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","74c198289bbdca4f0614ac604423a6b4"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","896a459a84a9ff7e95559700fe56290a"],["/2019/02/18/lanqiao/Sine之舞/index.html","10a1ccbeca843406ad81ca3f4effdaa6"],["/2019/02/20/lanqiao/数的读法/index.html","d9a83ce6ba56c9359f03888b61363300"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","509c017fe3d60b2985e355de0f5e66df"],["/2019/02/27/DataStructure/快速排序/index.html","42894a150db375a08203542e70875b1d"],["/2019/02/27/lanqiao/完美的代价/index.html","cb411e26c46fdfb93cba1bf2944d18b2"],["/2019/03/13/lanqiao/数字排列/index.html","97ae1015556fabc8022d2b032be0f1e9"],["/2019/03/14/lanqiao/数独排列/index.html","c8dc9639a725aaef459965c4e760fc3e"],["/2019/03/15/lanqiao/凑算式/index.html","ca8a0d214432e3bfd274022ee198dfea"],["/2019/03/16/lanqiao/方格填数/index.html","7d8bdca96e181998d1bb57c974573374"],["/2019/03/18/lanqiao/剪邮票/index.html","c0d25eb5e3d169af6041ec6ba89588b7"],["/2019/03/29/lanqiao/审美课 /index.html","33ae46c7d219c6bb8360dfd4669b6339"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","28dd1f42dbbfbcedacde3cbfb5ed0320"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","271fdf0e9ed63ff973b64391e7e5ebdd"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","58ff5696c53c2c0a0d0fc476d52bba1c"],["/2019/04/08/lanqiao/素因子去重/index.html","9d6c849bdd55efe15029e78c84191e22"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","c936f8fd9bee8a07dd1f9506d0429435"],["/2020/03/09/git/从Github指定仓库中删除文件或文件夹/index.html","85023299bbf80c8495dd5482ebcbc94e"],["/2020/03/25/OS/操作系统1/index.html","367fbf5e9e180de190dced69e2fed700"],["/2020/03/25/操作系统/操作系统真题答案/index.html","04f1d8655538489ddac8512bf2db471d"],["/2020/03/26/OS/操作系统2/index.html","3065df20892d84aff5cdf4dcf71bd5ab"],["/2020/03/27/OS/操作系统3/index.html","2b9580566ee206b1123d5f266323e7be"],["/about/index.html","77bc2c877bdafb842ca094a2df0da64e"],["/archives/2018/12/index.html","cb0a91b5ee708e93ef96da31fb42598d"],["/archives/2018/index.html","f75c62c33dd361cff3c1f9880619da1e"],["/archives/2019/01/index.html","7d6d2352dc44cc1fd1b2a79ec755fd60"],["/archives/2019/01/page/2/index.html","a2654c7bf34a205b1ac39cded6194df3"],["/archives/2019/02/index.html","40012f9c2b133e251bf5d2daa32c504d"],["/archives/2019/02/page/2/index.html","40e46f6a84ad203c198cdb3952ee5eeb"],["/archives/2019/03/index.html","c64c2e1e67492fb472a8d935db9701b4"],["/archives/2019/04/index.html","367e6f2000362c597be61db0f4c15418"],["/archives/2019/index.html","6b64061a2d5a4554dd397c015572d22d"],["/archives/2019/page/2/index.html","7d4ca6695b84f8df6fa7e87baec96eb1"],["/archives/2019/page/3/index.html","280bfd78b7d3eb4bc9a1be6ad04e6add"],["/archives/2019/page/4/index.html","b81c3fe5e8f7ebd676c63004109186e1"],["/archives/2020/03/index.html","2ecc78bdba87169ff9ef965d937ee230"],["/archives/2020/index.html","e62d0afa333f22a107ad589324542e08"],["/archives/index.html","bd85779b71b274d15845154fd018135f"],["/archives/page/2/index.html","b382e2faf843d967cd58c8fce18f9ffa"],["/archives/page/3/index.html","d56e1b4277f066432e20af2f255007e3"],["/archives/page/4/index.html","b3ac008c5dc71cd9df6aa86c0bda2d36"],["/archives/page/5/index.html","1cff46b06e81e252cd8b199d55a3c75f"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","02975534c1335c2eaf7e54f0dbb28e52"],["/categories/git/index.html","bf3d9326a65bf3e9b6da682e4ab76a58"],["/categories/index.html","49e3cef90db787ab053ca9fde23e2937"],["/categories/操作系统/index.html","2b028fa050b809d65d9e1f588e36aa7c"],["/categories/数据结构/index.html","4f94511f4a68aa0a6e6a204145824729"],["/categories/算法/index.html","0306ff6c8afe5b206596b967c724ccd5"],["/categories/算法/page/2/index.html","30cc7f82f3fb05e22c9fadc032a19519"],["/categories/蓝桥杯/index.html","4655b92aba7491fdf9e9192facf1cd60"],["/categories/蓝桥杯试题/index.html","64697ef2fe0b3c6ac8d9ac829d856234"],["/categories/蓝桥杯试题/page/2/index.html","e958d6e54bd8d1e694680487816ba430"],["/css/index.css","b306cef7937fef623fea48b44c3c5284"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","e96c4de58e407e5e2f543508a7e02dae"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","656860ecee094138764312b05eb9ec2c"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","d6199bd66578fbb686922191a4e1793a"],["/messageboard/index.html","6d0e09266841245a8ed3f85171e38feb"],["/music/index.html","73d89a48e742cb99d7293b74549cb570"],["/page/2/index.html","f66cf11a87cedfc579225c600472c2b5"],["/page/3/index.html","77a62be68e9a57de91917850a5838667"],["/page/4/index.html","5832d1dbe2a4f98069e65dbbaaf2b911"],["/page/5/index.html","08cb5c008196b71fc822cd0a9a3c6884"],["/sw-register.js","290d67d11d9b1c9820eeb63fc58cfeef"],["/tags/2N皇后/index.html","95818b8dd36fa9ea7fb3d8f09e96b05c"],["/tags/Github/index.html","8937409aa35a05cc00b27465b1fee3b3"],["/tags/Hexo/index.html","8ad3f47d39cbf8dae484a411011ce6d1"],["/tags/N皇后/index.html","40678518b82a25962869a7aa556ab891"],["/tags/bat脚本/index.html","5c5392a11fff31e9971b932a282106ac"],["/tags/git/index.html","5da7537fedae56f50596f7d184bab6bc"],["/tags/index.html","43fac90d6f11418fd81148588a669ef6"],["/tags/leetcode/index.html","a6ec84753c4d4717cf6b6c7ebcc94bfe"],["/tags/二进制表示/index.html","2951e6f375b84a54b3fd213bfad5d598"],["/tags/全排列/index.html","4f2a9d5fe76764ef5e0608a103a21da1"],["/tags/冒泡排序/index.html","156ae4750f3fdc2246f2af82cb77dc65"],["/tags/图/index.html","75c0b1e683fc0f242a625ee407213b27"],["/tags/字符串处理/index.html","9b412f29e3c761f8f4f476d32b07b880"],["/tags/快速排序/index.html","3a229523ed4deca93c1829ef4af1fe45"],["/tags/搜索/index.html","c46fd0f5fd2ad36998a2642c229a79e8"],["/tags/操作系统/index.html","2f3e1452e592d703e2e8bfa6504db2c0"],["/tags/数据结构/index.html","d9f2b92a7305446cdc0d9989bf83fc5b"],["/tags/最小步数/index.html","95f586b649124d7baf2d90ff0fe2d120"],["/tags/深度优先搜索/index.html","b58c24b363d0a5d02772f79d85c9f15a"],["/tags/算法/index.html","5264a851ffd60bc8ace54c1a593a64d9"],["/tags/算法/page/2/index.html","cecf7343ed5907a4720c811a05fa29f8"],["/tags/算法/page/3/index.html","c3e218709fe6108334c9086565747e5b"],["/tags/算法/page/4/index.html","588cb11730c1e6c8d4c4349845887335"],["/tags/算法/page/5/index.html","4876c109dfb6b62d1096291ebd125a05"],["/tags/素因子/index.html","9d4b6188679bf4d038dbebb24747c3d7"],["/tags/素数筛/index.html","72601501d9fdf72443efed2e98103a28"],["/tags/蓝桥杯试题/index.html","3c72c314a322a5b59670097b3ae18e51"],["/tags/蓝桥杯试题/page/2/index.html","55be6141272748ad7cdf957cc008bd3d"],["/tags/连通图/index.html","94da95fe1dca60f3291d8d65ce83ac1c"],["/tags/阶乘取数/index.html","127b471c074ee3f2d93b15ac9ad57200"]];
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
