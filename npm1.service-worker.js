self.addEventListener("fetch", function (event) {
  if (event.request.url.startsWith("http://npm1.yinhaiyun.com/repository")) {
    const redirectURL = event.request.url.replace(
      "http://npm1.yinhaiyun.com/repository",
      "https://lc.yinhaiyun.com/yh-material-node"
    );
    event.respondWith(fetch(new Request(redirectURL)));
  }
});
