"use strict";var precacheConfig=[["/iskra-webkit-greeter/demo/index.html","66048571f0a4cea355d0f74bc27f4717"],["/iskra-webkit-greeter/demo/static/css/main.c4f1ec2a.css","6a32f34a8dfcbd43e902df196c51ea88"],["/iskra-webkit-greeter/demo/static/js/main.90f6308e.js","cfd59f60b67cd41cd535168c692c7427"],["/iskra-webkit-greeter/demo/static/media/AndICallItBoke.42d87e25.jpg","42d87e2536b56c3dc201d0906b02731d"],["/iskra-webkit-greeter/demo/static/media/Dark_Ivy.bd619fd5.jpg","bd619fd568778ec8cf06fdffa2a37172"],["/iskra-webkit-greeter/demo/static/media/Fabric.eb3d6777.jpg","eb3d677714375ca95c2e7a8fe8f56c96"],["/iskra-webkit-greeter/demo/static/media/Flowerbed.66044eb5.jpg","66044eb54aaa5306950b2633b5da4d65"],["/iskra-webkit-greeter/demo/static/media/Icescape.c0ea40dc.jpg","c0ea40dc6c3f3ab2fa3ad41e73bdd1ac"],["/iskra-webkit-greeter/demo/static/media/Road.4885e5ee.jpg","4885e5ee1bc25b60f3a79620f90fb394"],["/iskra-webkit-greeter/demo/static/media/Sandstone.3f6122e6.jpg","3f6122e62e2b1e96d4ff446639e0d92d"],["/iskra-webkit-greeter/demo/static/media/adwaita-day.e6f32019.jpg","e6f32019c9c44482403f62785f8112df"],["/iskra-webkit-greeter/demo/static/media/adwaita-morning.4e230586.jpg","4e230586867b831f8c393f09311a64ab"],["/iskra-webkit-greeter/demo/static/media/adwaita-night.a7a25e83.jpg","a7a25e83d0f560ea10c714d3fd59a091"],["/iskra-webkit-greeter/demo/static/media/endless-shapes.6ca24d2a.jpg","6ca24d2a1e9518523bdd3bdcb154b4c9"],["/iskra-webkit-greeter/demo/static/media/symbolics-1.f85aa4e0.jpg","f85aa4e0001a0d015223c936ebc194d8"],["/iskra-webkit-greeter/demo/static/media/symbolics-2.7e362f78.jpg","7e362f78e80e406b6aff43639fa30b9f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/iskra-webkit-greeter/demo/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});