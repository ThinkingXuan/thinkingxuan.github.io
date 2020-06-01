/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","34525396c5be60154970cdf51882537e"],["/2018/12/16/LeetCode/leetcode2/index.html","aa1ec8b70be0edb1303296c6a69e2084"],["/2018/12/16/LeetCode/leetcode3/index.html","9dcb13d03bda5be8778733e735696876"],["/2018/12/16/LeetCode/leetcode4/index.html","316a8b13559b9b7a2ed587513c6e0c2f"],["/2018/12/16/LeetCode/leetcode5/index.html","b48c12217ac8a731ea1666459735e281"],["/2018/12/16/LeetCode/leetcode6/index.html","2771f6fbf21f02defebef6dc748f1a97"],["/2018/12/16/hello-world/index.html","65276f0e4b72cf5530f01fb117daa50d"],["/2019/01/16/DataStructure/dataStructure1/index.html","43b1c33fe0a3829eb9c6889a3b3e9db7"],["/2019/01/17/DataStructure/dataStructure2/index.html","3b93d242b4f6e92298b77f7e38843339"],["/2019/01/18/DataStructure/dataStructure3/index.html","e90988ab43569cb6f30681813821bf9d"],["/2019/01/19/DataStructure/dataStructure4/index.html","1a264ef5c138fa7979d1bccea392a039"],["/2019/01/20/DataStructure/dataStructure5/index.html","b7d91b6d0763da80e1f3efc4a215c926"],["/2019/01/22/DataStructure/dataStructure6/index.html","50f3e641a68269e191c8a07f87659840"],["/2019/01/24/DataStructure/dataStructure7/index.html","7f054b4c91141a87b6abbade5e9c10b3"],["/2019/01/24/lanqiao/basic/index.html","5fcbeeb838dc10e76cd1542cdbc7a079"],["/2019/01/26/lanqiao/basic2/index.html","25f26dd1fc5c8ddbc3dd9ab98523d0ea"],["/2019/01/26/lanqiao/basic3/index.html","3e152d552c3d7789c8ec74b4573c7d3b"],["/2019/01/27/lanqiao/basic4/index.html","8cba7c683c91df84a2afbc494902514c"],["/2019/02/13/lanqiao/basic5/index.html","63e5403e943373ea5751b6da4fcf678d"],["/2019/02/14/lanqiao/basic6/index.html","b080e9c44b5806e0f911cd9898fce631"],["/2019/02/14/lanqiao/basic7/index.html","f368fa7de13ad3c1ae56e50606ee6fb3"],["/2019/02/15/lanqiao/basic8/index.html","f73730d7b99d75a2006eaa737c72ba1a"],["/2019/02/15/lanqiao/回形取数/index.html","d1f23ae92b3f2af19965998d088cd341"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","7fdab4eccd00caf4d5bbf6cc4aeaf8d7"],["/2019/02/16/lanqiao/芯片测试/index.html","c4b39ed0a7f82107b42c4dfb6c2842cf"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","d5a72116202502fd17d4596d7b5bb79f"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","ad538b6d7ca312d3e9702bfb7e454f30"],["/2019/02/18/lanqiao/Sine之舞/index.html","f4ba706a0c9cbf78585b2467b0aad10c"],["/2019/02/20/lanqiao/数的读法/index.html","bb4462d37db896959ff7067d5b50ec09"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","7ebe6c70974cb3366a11fe15465d0548"],["/2019/02/27/DataStructure/快速排序/index.html","a76b97f0555c2d043deaac2c7cff4dd7"],["/2019/02/27/lanqiao/完美的代价/index.html","79c9f2abee0784a13534d7a62b827066"],["/2019/03/13/lanqiao/数字排列/index.html","dc92a99fecfce6d5bd491c9b085d2d0d"],["/2019/03/14/lanqiao/数独排列/index.html","195e286f411409e0cc02aea7bf1a4705"],["/2019/03/15/lanqiao/凑算式/index.html","e47fcc91d5e1c7266e588080094f999d"],["/2019/03/16/lanqiao/方格填数/index.html","ca776a2b4e3e14cf83241aebd75e8008"],["/2019/03/18/lanqiao/剪邮票/index.html","cc64b6cd3cb9807fd5d777a7c91146f6"],["/2019/03/29/lanqiao/审美课 /index.html","4646f9d583e0ba67216e4ad06bd31ff3"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","5aef8fb239009e85265ccd90d448b707"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","9a4558076a6221983f0fc6e15064306f"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","b44f3e7ab8a10e2bfbcb04a18e435a1e"],["/2019/04/08/lanqiao/素因子去重/index.html","a6661e19599d95da1cc36c71cc6924a4"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","dbde496c49a0c383d1e4d87dc40e5713"],["/2020/03/09/git/从Github指定仓库中删除文件或文件夹/index.html","5ab68bd0db7eaa0bfed6ff0728934e20"],["/2020/03/25/OS/操作系统1/index.html","60b3b22c8355ab00378ad33e7279640c"],["/2020/03/26/OS/操作系统2/index.html","84e60cf55283b0c1b7d7c6f11769280e"],["/2020/03/27/OS/操作系统3/index.html","39c3bbdbb904dea162a42843b6842f43"],["/2020/03/28/OS/操作系统4/index.html","fbd10a98572d6b05508c77e490f0b2e6"],["/2020/06/01/ML/study_1/index.html","37c4ecdb91a313e425a0e2de0b4a8e61"],["/about/index.html","dbe028f493d31fbdc225f6081f6a527b"],["/archives/2018/12/index.html","81f6c3510dfde937e05b6884242f574a"],["/archives/2018/index.html","01582dc77e901170fca6c06ebeae8fa2"],["/archives/2019/01/index.html","4b4437ee45c2c2e84f1fef1e55381f5f"],["/archives/2019/01/page/2/index.html","c8b99b68e9cceec392eaa66906e5376f"],["/archives/2019/02/index.html","d6b26e9d7816e3e23d93b177261e5f7f"],["/archives/2019/02/page/2/index.html","66d787d0f29dfc3c79ff12e3b20c1ede"],["/archives/2019/03/index.html","4515f71763b381316589f05212886406"],["/archives/2019/04/index.html","2fd975cff9e307a402820530b7d855a2"],["/archives/2019/index.html","951b3ebdd0de2d9ccfeedbcdf1c976c2"],["/archives/2019/page/2/index.html","17921ea052bfc35eee6b27d24eda0a66"],["/archives/2019/page/3/index.html","c7d5dc16f72486f277ffd34254ba3c58"],["/archives/2019/page/4/index.html","2ac69c4ca304b8961cfb15f56f578c51"],["/archives/2020/03/index.html","6f8080283dd221dcb9fce1b6da9ca55e"],["/archives/2020/06/index.html","bb3cafe1310893a5aa218d0c71c0f39b"],["/archives/2020/index.html","089b55d1a33621536b033379a7cf2501"],["/archives/index.html","b51876945a5f4d5819429ab7dda2f3b7"],["/archives/page/2/index.html","93c40487a990ae19d6368e6994d41f6e"],["/archives/page/3/index.html","059d97cb93467f8969abe4ffc862e8cf"],["/archives/page/4/index.html","4107ab7abd5f1bf7a7a79a18ec337a7d"],["/archives/page/5/index.html","7f8723a09171a16eab76bb43e2c67a5b"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","39611683c02882217886657cb4297854"],["/categories/ML/index.html","9268edcc526bcbe2d25afb912101cac1"],["/categories/git/index.html","4f2709d1f31ea05ed52f480e4d2fe386"],["/categories/index.html","3469f0648ca129a6550fb65028ea4f5e"],["/categories/操作系统/index.html","2b336aac0425425e44b597ca1232d83e"],["/categories/数据结构/index.html","b87d6a754877822186f1ad930fedd4b0"],["/categories/算法/index.html","c11e036997bae100d67728cd332fea91"],["/categories/算法/page/2/index.html","cd14774914addde7e08a5f98fe1cb24d"],["/categories/蓝桥杯/index.html","ae412a6889be8599ef17c13589f57867"],["/categories/蓝桥杯试题/index.html","23695f275312492113a734e25f72cb85"],["/categories/蓝桥杯试题/page/2/index.html","1226ff9d27350698a4cd28666e7627e8"],["/css/index.css","b306cef7937fef623fea48b44c3c5284"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","ee2ab4db8a690eb4026c0fad5965ab9a"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","bec7002425fd7da186472778078c4223"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","6ecca8de0cabba9557f27cecdfc9d19d"],["/messageboard/index.html","4981110d766f9389151b4ebacf405e89"],["/music/index.html","6691a2b7ea2b8aa8615c62b53dd9f21a"],["/page/2/index.html","312d4fff29705c4c31af7280b1a712f3"],["/page/3/index.html","370b382c728bc8d908cb8079d081c0ef"],["/page/4/index.html","e8c61696b3808861d5e11d9819e07cad"],["/page/5/index.html","85cb0e3fa43355c4c67996b53865227c"],["/sw-register.js","de8cab6d0e799d9be27b810274ea3aa6"],["/tags/2N皇后/index.html","1cd656190aa6cdbaadac45ded2a8d4ad"],["/tags/Github/index.html","7679d27f4d9ca455aa5682201fcfc87b"],["/tags/Hexo/index.html","f23331a0d7ce7a80417533b01463cbea"],["/tags/ML/index.html","b30fc2cfd03b2669858911e1815f407a"],["/tags/N皇后/index.html","e6d73d9846af5bd1b7efbed4dfd2e67f"],["/tags/bat脚本/index.html","77e40f36144d104d9848f16b0aaaecae"],["/tags/git/index.html","1bc1945e0fa47dacc8041ebedcd78cd8"],["/tags/index.html","afb7b4ab2391b22dff1ea07d1e3d868c"],["/tags/leetcode/index.html","63cf9504bb3ba3c3e075798af60ae1d7"],["/tags/二进制表示/index.html","01b9cd04ee53e83b6004ae8b463d6005"],["/tags/全排列/index.html","dde68be0a37a76740646cde62ed419be"],["/tags/冒泡排序/index.html","a2a9879527d4a9aa7b34d50da3e6ca23"],["/tags/图/index.html","e1a782f91e24cb8743766437ad23348d"],["/tags/字符串处理/index.html","99aaa7c2d002ce85b05f4c2b06f2c8d8"],["/tags/快速排序/index.html","508ad0162272c86e6f2e74807a710f66"],["/tags/搜索/index.html","ac96bc5fa4f97faf0da58f6934fc659b"],["/tags/操作系统/index.html","c0ecc9b8dd0430266530c40c3eff4af5"],["/tags/数据结构/index.html","012ffd450f7f65cd878f464ecf92e8f4"],["/tags/最小步数/index.html","1a5540dabb2704178b4bc78d118d29d4"],["/tags/机器学习/index.html","843ed3af7f2216b0c4f74dbd2019206b"],["/tags/深度优先搜索/index.html","820d68235cf278ddbbb502bc15b7fd1a"],["/tags/算法/index.html","78021b62a65471f189131c3af98b0cf5"],["/tags/算法/page/2/index.html","d8d872910e7c12fd11d88c056070e56c"],["/tags/算法/page/3/index.html","9fb16c4429586e2208857de4e0a8afca"],["/tags/算法/page/4/index.html","19cc1e2ca1cb15e32ba6b5f9c2da4e3c"],["/tags/算法/page/5/index.html","140bdc331946336acb10bf35ba6ec0b1"],["/tags/素因子/index.html","e89f1c13e497b9ab5f0361288212fa42"],["/tags/素数筛/index.html","7d0778e03308b145478049b678ddc013"],["/tags/蓝桥杯试题/index.html","755536dfdf7161de56aeaa3e440a5816"],["/tags/蓝桥杯试题/page/2/index.html","64209a7cecb2ad49c805f856db82e7f5"],["/tags/连通图/index.html","bbe48fefca0982769f75a704e2238aa0"],["/tags/阶乘取数/index.html","900d7cbdcf611760082b1c6df29709af"]];
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
