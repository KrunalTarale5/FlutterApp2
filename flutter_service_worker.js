'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84e2e71991f2270b2ddc07710f300e22",
"assets/AssetManifest.bin.json": "d7c2f4b0812c76e0f0d9132697d50a28",
"assets/AssetManifest.json": "9cda8cbbcc55e99266279089cbe1ec68",
"assets/assets/icons/add_icon.svg": "8f7f20cd87e5491754427efb9e1e9513",
"assets/assets/icons/blank_star.svg": "baa84a18766a0f7fb83f5990056bba6e",
"assets/assets/icons/download_icon.svg": "4fc2e3153566165de315db0a209e5735",
"assets/assets/icons/down_arrow.svg": "f6da386a3fb24f79db944ec160e78c43",
"assets/assets/icons/edit.svg": "7938cbcdad7ed772aacf711cc359055a",
"assets/assets/icons/excel.png": "89a828560f232d865ea520b8583e5029",
"assets/assets/icons/excel_icon.svg": "26baab52aa1af97ef99a4c4a0b0d019d",
"assets/assets/icons/expansion_down.svg": "1851e18a0283a1d78cdc69b739174e12",
"assets/assets/icons/expansion_up.svg": "04ee65489581999240db83d942d1f649",
"assets/assets/icons/green_success.svg": "dfde4e6b3f5fa7dc63fd92b71f613b7d",
"assets/assets/icons/home.svg": "1b169efd5f2057884c0fb25cf6b5ba32",
"assets/assets/icons/home_icon.svg": "5cb1e457bc28d573b0e8b2ebd16aa133",
"assets/assets/icons/logout.svg": "f85823bce6acb31727eaa151be685745",
"assets/assets/icons/menu_bg_img.svg": "a6cfe0eb1f311b1e4af69b386a9a0067",
"assets/assets/icons/menu_icon.svg": "bb35cc665e956e9ff2b1c2ebb140b011",
"assets/assets/icons/mmb_logo_white.svg": "3e5ce0c315b4314050823cd9f6dbb079",
"assets/assets/icons/notf_icon.svg": "39097308957aa438d2addf01623c07ef",
"assets/assets/icons/partner_logo.svg": "7fec3d6442c06194c6a10c32996aceea",
"assets/assets/icons/partner_logo_white.svg": "12cb634b39a0603abe2558b2556f1dd9",
"assets/assets/icons/pencil_icon.svg": "ce9776cfc3540fdacd521bda4c7a7bc3",
"assets/assets/icons/plus_icon.svg": "ceae5f05b0ba0818b3bedbf422e4384e",
"assets/assets/icons/profile_default.svg": "35776ce7c95b5e501962d205b62870bc",
"assets/assets/icons/qr_code.svg": "8cb8c2652772b7f8d0b00482a996c223",
"assets/assets/icons/reports.svg": "4b1d10cddff6dc1902ff2e7bd5863e67",
"assets/assets/icons/restro_icon.svg": "463132ae2e71a31ac59d6ca0b747bce6",
"assets/assets/icons/right_arrow.svg": "7f2970570c601cfa1b46e9d7655ad039",
"assets/assets/icons/round_down_arrow.svg": "3617d249e03e5a77a71ceff86ef25583",
"assets/assets/icons/round_up_arrow.svg": "64187da0dfac85f66fe2d143633a0bd9",
"assets/assets/icons/ruppe_icon.svg": "98a382929c6aa18b356d306164424c04",
"assets/assets/icons/search_icon.svg": "c3ab0f20e66a7cd5ec5e06df6ec67553",
"assets/assets/icons/settings.svg": "22e183fea3f188310f97a13d48f63f55",
"assets/assets/icons/settlement_icon.svg": "775505ee6b9b6cfe68cf4f66a8cd4688",
"assets/assets/icons/success_tick.svg": "87365d47c507c9275255dda165eae204",
"assets/assets/icons/upload_icon.svg": "a7cc92e87ea111eeee2accdc937bcdce",
"assets/assets/icons/upload_icon2.svg": "60e4428bec0c299b228e18555fb8bb90",
"assets/assets/icons/user.svg": "3f7e5abe79f78798531c6bc1a362c395",
"assets/assets/icons/warning_red_icon.svg": "b8bb54cd97ad906e9fa7b9c203dbe477",
"assets/assets/images/account.png": "0b8a5ab0d330607fe0c277bb733862cd",
"assets/assets/images/appLogo.svg": "d996a27454aac731c27627c62895f1d6",
"assets/assets/images/appWaterMark.svg": "29651c2849f362a1e3831a8d07d122c4",
"assets/assets/images/default_profile.png": "cc24d2346aa8df776f98e276d060399d",
"assets/assets/images/default_restro_icon.png": "9f838448991d5dc2bdf9770561ffe09c",
"assets/assets/images/default_restr_profile.png": "6abd5392f458d3efa936ba78d45db296",
"assets/assets/images/favicon.png": "995b62b747b0f690aa4973721a70c1b6",
"assets/assets/images/green_success.png": "f4da675670d7e4f8dffa84908d678067",
"assets/assets/images/hide_password.png": "c00e9591102e03afde86b1469559f993",
"assets/assets/images/img_error.png": "b21624f62ac655f28af1ec5dfb8f490d",
"assets/assets/images/refresh_img.png": "0814416900d1739dfc22c360c03641b5",
"assets/assets/images/restro_default_banner.png": "3058660859c94086834002a96a47849d",
"assets/assets/images/upload_excel.png": "cf1478631c495f67b2298eae53c2e458",
"assets/assets/images/upload_icon.svg": "a7cc92e87ea111eeee2accdc937bcdce",
"assets/assets/images/view_password.png": "2855b0cccada729225b4fb5cd328586b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2e925e5555527b8989ce650f6f88b262",
"assets/NOTICES": "25ab5a909037a77b54dda878fb942753",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fav_icon.png": "995b62b747b0f690aa4973721a70c1b6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d51b2f2f8892afb71e28e32b214c4dee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a8bc859dca092054a6e97cd1750c133",
"/": "6a8bc859dca092054a6e97cd1750c133",
"main.dart.js": "395a39ab1003b7c88d16ac416e1ea529",
"manifest.json": "205f4eb15cfb81b5029e6e9224220f85",
"version.json": "a16a8d92536a0e6b71c0c49a203dd05e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
