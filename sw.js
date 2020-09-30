/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/12/16/LeetCode/leetcode1/index.html","cbac295b784a5f20399fff65665d8cfa"],["/2018/12/16/LeetCode/leetcode2/index.html","5033f760e6b973d3661c4cf63b616778"],["/2018/12/16/LeetCode/leetcode3/index.html","a1e09d6684b331ae1f10831827b52635"],["/2018/12/16/LeetCode/leetcode4/index.html","18db127df44fd1acefc0f8e5dc1e2305"],["/2018/12/16/LeetCode/leetcode5/index.html","37ba5c35141770c20c7efe5eba77c68c"],["/2018/12/16/LeetCode/leetcode6/index.html","74a2390d2ecb239adaad19c949481c40"],["/2018/12/16/hello-world/index.html","711537e4c8ee7a8b8d60ae61b522f9a8"],["/2019/01/16/DataStructure/dataStructure1/index.html","173651c7ea342eea0ffaacfe42f5c271"],["/2019/01/17/DataStructure/dataStructure2/index.html","f4d0bd64d11adccdb3275d33890ac8a6"],["/2019/01/18/DataStructure/dataStructure3/index.html","659dca4e75e92329c81d48e17290d0bc"],["/2019/01/19/DataStructure/dataStructure4/index.html","19f578e4c5934a685a19102360c756eb"],["/2019/01/20/DataStructure/dataStructure5/index.html","aee4a542f1729455774f3455d03fc2ca"],["/2019/01/22/DataStructure/dataStructure6/index.html","813a54b748671e66c5874e092e70b56a"],["/2019/01/24/DataStructure/dataStructure7/index.html","205016f0f5705ed2103d0f0602175e13"],["/2019/01/24/lanqiao/basic/index.html","70d8b4adfbba34295688bd057725e9d4"],["/2019/01/26/lanqiao/basic2/index.html","db3b1b0b324d020bc183e59629555cdc"],["/2019/01/26/lanqiao/basic3/index.html","063aa523fc25d2f262450a5af383a7ab"],["/2019/01/27/lanqiao/basic4/index.html","0152eed502218c2795b1c71041742c37"],["/2019/02/13/lanqiao/basic5/index.html","d96ca0c27576a7981c667aae5d6683c9"],["/2019/02/14/lanqiao/basic6/index.html","daddf740784122f1cfa258551f27229b"],["/2019/02/14/lanqiao/basic7/index.html","6ad2e0b62f0a2601ab6dd09232f660f9"],["/2019/02/15/lanqiao/basic8/index.html","7fe1aabce706e87748c67a4f67c594be"],["/2019/02/15/lanqiao/回形取数/index.html","64d05e5042a522169e1da0724e561505"],["/2019/02/16/Hexo博客使用bat脚本自动部署和免密码部署/index.html","b5b794c5bcb44ea07dfd8f1429931ccc"],["/2019/02/16/lanqiao/芯片测试/index.html","3545a357f0f94806c19759c15e895644"],["/2019/02/16/lanqiao/龟兔赛跑预测/index.html","c09d0976dd4d74d8968820a9222795c3"],["/2019/02/17/lanqiao/蓝桥杯试题——FJ的字符串/index.html","381bd005b7ec6cdd548b8db44ae011e2"],["/2019/02/18/lanqiao/Sine之舞/index.html","f0e7fc0fa9b726f549f779d310c2139b"],["/2019/02/20/lanqiao/数的读法/index.html","951d128402af9c7a763e6cfa4247c08f"],["/2019/02/26/DataStructure/冒泡排序及其优化方法/index.html","4320bef152e3ab33e42d548992f672f6"],["/2019/02/27/DataStructure/快速排序/index.html","d4cc456cd309b4feeb8fef57ae285985"],["/2019/02/27/lanqiao/完美的代价/index.html","62cfd34a5ea7a5a5818fe716c36eade0"],["/2019/03/13/lanqiao/数字排列/index.html","b98fc1d1b71b7913595712e0a5f38942"],["/2019/03/14/lanqiao/数独排列/index.html","43d3f54ba6f03fd4d1149ff12316ad20"],["/2019/03/15/lanqiao/凑算式/index.html","8f4c3f528b67b5af3c8cc119dcdf23b3"],["/2019/03/16/lanqiao/方格填数/index.html","3c69415ccbc8c5e1316c0a4054ee0bf3"],["/2019/03/18/lanqiao/剪邮票/index.html","6ca34f72cddfc8595dd31aa75f5c8c33"],["/2019/03/29/lanqiao/审美课 /index.html","81109d9365c4ba8d54949454f09bb21e"],["/2019/04/02/lanqiao/图的基本算法（BFS和DFS）/index.html","f6e479e2472df8e9bd9c69863ec2d1b3"],["/2019/04/02/lanqiao/迷宫——最小步数/index.html","f7f77d67c565933c00e1f399c9496fa3"],["/2019/04/08/lanqiao/深入理解线性素数筛/index.html","d11ec387c0f7dc3b24d95bf02818e341"],["/2019/04/08/lanqiao/素因子去重/index.html","87aa61d90efd2cf56b49866b5ede37cb"],["/2019/04/09/lanqiao/P0505阶乘取数/index.html","b6ccd843d48217b140efe1cb16760f89"],["/2020/03/09/git/从Github指定仓库中删除文件或文件夹/index.html","5496806753fd08e2f245400189e991f9"],["/2020/03/25/OS/操作系统1/index.html","9ca63222c867a676e2ec9860f6bfcc2c"],["/2020/03/26/OS/操作系统2/index.html","1a1ff7b41c096d41d0f81e998dee430e"],["/2020/03/27/OS/操作系统3/index.html","1458da4f94f9c442226cdcfdb15c81e6"],["/2020/03/28/OS/操作系统4/index.html","db27a13fe61397a13d974bcc647ae0ff"],["/2020/06/01/ML/study_1/index.html","4aaf207e4252fd1d33218a5d8ca8adc3"],["/2020/06/03/ML/study_2/index.html","a285edc1bf396219faeb9aab4680fe1b"],["/about/index.html","b4fb174a3c2a500d8cc84a7a45224f3d"],["/archives/2018/12/index.html","f4d2916ea0c9fc1a2c1e558687239edf"],["/archives/2018/index.html","510f692d937a46e831e19903bb9d36e7"],["/archives/2019/01/index.html","7f9d1096497b97cd67fe1d1307380e14"],["/archives/2019/01/page/2/index.html","5b872c152d35af8b80a7100a778eb644"],["/archives/2019/02/index.html","2230768d0e82c578bd4eeb1b55984e10"],["/archives/2019/02/page/2/index.html","1ee8cd34912100dc303d20dde257e04e"],["/archives/2019/03/index.html","be5f3351be2dc69b1cd3cd545c6ef2c5"],["/archives/2019/04/index.html","d4050fde0623f6efc52eddf1f3c7d22e"],["/archives/2019/index.html","2ced31d0a9ca5845ca0fb0fbe245bbd6"],["/archives/2019/page/2/index.html","cc342e5be74ebf45bbdbc62c248d9c41"],["/archives/2019/page/3/index.html","258363e10392d2dada66b06ff1a4b541"],["/archives/2019/page/4/index.html","8b2c0eb4bdf0adb24ddd9cdf018216f7"],["/archives/2020/03/index.html","29b4dbfd1d256d92cc0b3db5d8877120"],["/archives/2020/06/index.html","77a94c9fe52fc62984c6c114231c57c8"],["/archives/2020/index.html","7a75087f8115ee9c071a26803b80f518"],["/archives/index.html","bac95fa3fb42db7616b05264f3e86ca3"],["/archives/page/2/index.html","2ae549714aa2cdfd24469f9d2a030df4"],["/archives/page/3/index.html","6e6ad64d5c409d4888b90242f4914cee"],["/archives/page/4/index.html","8afeec9f07b181ee2a698586a08a4a80"],["/archives/page/5/index.html","e5f019feb323d1c9167f29fbcaee8e2a"],["/baidu_verify_PQrl3uGvY5.html","12f34cbbe67c33c8ae2edea0d630db90"],["/categories/Hexo/index.html","5bf5b5a33b7d86e834ddab534b7e67fe"],["/categories/ML/index.html","a9958ffe94e09cde543c8b97cb77331c"],["/categories/git/index.html","11e8d1aa51b8c32656cf6d23f4e38b47"],["/categories/index.html","ea48611502a009b90c33882080580f9d"],["/categories/操作系统/index.html","9a27d0fbec0636f4841baddaee4eabce"],["/categories/数据结构/index.html","0fd80f21cd66b2334f56cbe5fd6d6b0a"],["/categories/算法/index.html","e31898882bd19b4bd728c9880254b980"],["/categories/算法/page/2/index.html","6261cd4d88963c45a9c437b2f4f0ca50"],["/categories/蓝桥杯/index.html","20c7976f44958a6d5216a027918c6eac"],["/categories/蓝桥杯试题/index.html","a4ae63dc51604401bb45b8b1acb5192a"],["/categories/蓝桥杯试题/page/2/index.html","6488c6282bb2ecb945828d127f53fe3f"],["/css/index.css","b306cef7937fef623fea48b44c3c5284"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/google3234eda0998ace1f.html","f3db0724ebdef42b12020207c40362bd"],["/image/alipay_pay.png","60765c2436b30abba34e2e3ddf2b8a8b"],["/image/avatar.jpg","a3c5e3248958f2d2c8faec61aca9ce61"],["/image/wechat_pay.png","ae4514146e7d72d47fa7f4bf16db1d5f"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","688fc0a74d3a6afb1d78beff92c2c06a"],["/js/bai.js","3419aaefdbec2fa8e853514dd6f03256"],["/js/busuanzi.pure.mini.js","e847af6da4d5adc5b23924d3421a5ccf"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["/link/index.html","a57c9e51a682ed3b624bb91fa088f081"],["/messageboard/index.html","c6b3856f0e2b863ec4a2c77ca7bcb9e4"],["/music/index.html","876416cefa9189ad24405aa75f91c70a"],["/page/2/index.html","7e281012df86cfc528208d9a0520a2f9"],["/page/3/index.html","5f42194a2bc2f633607008b15e04fe00"],["/page/4/index.html","8b74a5c7299656958e028c46fddfb258"],["/page/5/index.html","c661534063e35a9e7e54e67e2329c88c"],["/sw-register.js","5713e3bb4a8551a1a367e7d1af125e8d"],["/tags/2N皇后/index.html","ac4ab82cf15d8b206efc830007010723"],["/tags/Github/index.html","11712a129a4edcaffd62797ee2d3dc3e"],["/tags/Hexo/index.html","c852f8d3a2b30b2975018c311267dd04"],["/tags/ML/index.html","ce1dca60b563eff3003d3a4dcef47cb2"],["/tags/N皇后/index.html","edf49df179c885255579d5694137d528"],["/tags/bat脚本/index.html","776b2a2b8be2ec8e3d4867775334b3eb"],["/tags/git/index.html","53906e465a58b0c967978db711235801"],["/tags/index.html","b6b5add303dea4e66d6f62447dadd9cd"],["/tags/leetcode/index.html","20a4e2015979d11fceb763f40553ea62"],["/tags/二进制表示/index.html","1d4d4f968031ea17cfd8252d8496354f"],["/tags/全排列/index.html","aa9964e49d76c486a582a7d00d3da60b"],["/tags/冒泡排序/index.html","1427ab23a3a7b009aee092b32c95258e"],["/tags/图/index.html","1439b8aed7d49e78c9b74ff4e7547c93"],["/tags/字符串处理/index.html","9c89a08a7738560d69968f7e215e0067"],["/tags/快速排序/index.html","7c749f72ade1deab20da4a357c5efe15"],["/tags/搜索/index.html","f9724162eae1c0161f62c5ab4905187b"],["/tags/操作系统/index.html","b654c1fb4544bef119859d5a96c1a225"],["/tags/数据结构/index.html","ec5e2807d1d0100835c207442a3d1941"],["/tags/最小步数/index.html","d454e51961b3d76a0f956bc8efc5b33d"],["/tags/机器学习/index.html","771ab635a1fe64d46c77d787bd0a4d7c"],["/tags/深度优先搜索/index.html","da505709a7eaba2a32f8d3e09ec77275"],["/tags/算法/index.html","7f11afbc6979698c91b31338c8491f17"],["/tags/算法/page/2/index.html","3f612def6e93eef0669254d3b934a6cf"],["/tags/算法/page/3/index.html","557e7a420366750de0f93fe9fd5690b6"],["/tags/算法/page/4/index.html","0016735fe57cba1c1a2ea8dcc74c37d2"],["/tags/算法/page/5/index.html","ef63056e1869c5325ea2fb3ee0505ec5"],["/tags/素因子/index.html","0dcfa35e41a9d80a31b5052a86c486f6"],["/tags/素数筛/index.html","86b96953a03decd37c71db2b5b40e2c7"],["/tags/蓝桥杯试题/index.html","1509feec638e22ffb32ed53b95cb5306"],["/tags/蓝桥杯试题/page/2/index.html","8dc2b9071a6a151ed8d273d196f3f1e5"],["/tags/连通图/index.html","c2274ca08a3431aea55c17518fd8f68f"],["/tags/阶乘取数/index.html","23ff7ab0cf38e439b71216a5846a426a"]];
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
