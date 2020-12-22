self.addEventListener('install', function (e) {
  console.log('installed');
});

self.addEventListener('fetch', function (e) {
  console.log('fetched');
});
