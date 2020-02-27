
# Benchmarks

> :warning: The total times are measured without downloading & unzipping what normally occures on the AWS platform. Therefore these benchmarks only list _load/parse times_ and not _coldboot times_

- Times are in `ms`
- Times/memory usage are the averages of 3 runs

Check the benchmark folder for details how these benchmarks are created

## Route `/`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|124.5|82.8|207.3|113 MB|jamPhISHsbmGThJHGys0vw==|
|_connect_|34.5|43.5|78.1|69.3 MB|ZsSu8hwr2WO0vlrDekvhBQ==|
|_minimal_|27.9|42.5|70.4|68.9 MB|Vv9a0Em8JRqCFhoUmKtZZg==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDJkOWIwOWQwLTU5ODEtMTFlYS1iYTk0LTk1ZDk4OTU1M2Y2Yzwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDM0ZjljOWEwLTU5ODEtMTFlYS1hY2U5LTRkYWRjMmFlNGNiYjwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 1385
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: 38d04d10-5981-11ea-ac51-915f7fc1d524</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|124.3|96.1|220.4|110 MB|i/yEKdZWv6afjnPTO22VtQ==|
|_connect_|41.8|45.3|87.1|72.9 MB|9zTstWdYdM5zhieECdaNWg==|
|_minimal_|30.2|43.7|73.9|69.6 MB|7PFqml3ZDRDeBJTnsPZRUg==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUy46bMBTdz1d43G0c7AQCIQSpu6666EMaqaoigy+JOwQjY2aSRvn32oZoXprODAu/z32ce7jZtVClObaAdmZf51eZm5DghpOG7IAL0nU6v0IocxvkVnZdy+YWaajXuLWj4gKjnYZqjYNN0x9MEEYLABZziBhbxrGgIYjpnw4j3q1xV2rZGpy/aQWSeSKiRQEiigRdREUxpx+3sogFi8MSZpwlMS+BzmaLj1sRMStZFRcQJvOoioWI4+Kllc4caxjYu+vBUUekWGM2C2GWJGVKcT515kir1VZD151a1UkjVZNW8gBiZVSb0lUNlbGTltudm3fgF7P2sLqXwuzskWp5Kc0xZSujeTOa8JdoyrrJeI2mYbcqeHm71apvBClVrXT6iVK6+ktkI+CQLv13fhrV0x1p1IOT0yN/jWrgGZJUXNYgTi+cahDnLPD8eDUFTk5+VShxvOhKyLuBvQ70HWiiwQZpoWtsdA8YOTI3viCW7Gtiv9xjhvOaH1XvbuzROOxY/kWiSqs9GkxeW88sR1klt72GPJP7Lep0aevs85ClaqZts8XIh7rGI/coou0BD7iSty79POMXifDC+/3spizgeRY8fhaMvlDWWoXseV3nfS9FikJWguBzSqJlwghjwElS0YRwtoxCKmhMk7nlzCOywIIDl5ONQSkD+mLru8tLoOKIOPI51HxfCP4AvDz36CfjoNv83kpB3U83m68/b35sNuvTQGSKBVS8rw2euJqkv04N30OKByLx+fcEtLalbfq6ngyH38Z6pa5c55WNYfAwehqZfqNHWK8+3P9gX/0b34F9tau8A/tqL3mG9Qp3wrYNNRga6z9KzMWIaQUAAA=="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUy46bMBTdz1d43G0ccAIhAYLUXVdd9CGNVFWRwZfEHQcjY2aSRvn32oZoXprOjBd+cu7j3MPNr7mqzLEFtDN7WVzlbkGcGUYasgPGSdfp4gqh3B2Q29m9FM0t0iDXuLWzYhyjnYZ6jYNN0x9MEMULAJowiCldJQkPI+DTPx1GrFvjrtKiNbh40wos50seL0rgcczDRVyW8/DjVhYJp0lUwYzRZcIqCGezxcet8IRWtE5KiJbzuE44T5LypZXOHCUM7N314Kgjgq8xnUUwWy6rNMTF1JkjrVZbDV13alUnjFBNWosD8MyoNg0zCbWxixbbnVt34Dez9pDdC2529kq1rBLmmNLMaNaMJvwjmtJuMj6jadRlJatut1r1DSeVkkqnn8IwzP4S0XA4pCs/zk+jenoijXpwcnrkr1ENPEOSmgkJ/PTCqQZ+zgPPj1dT4OTkd6Xix4uuuLgb2OtA34EmGmyQFrrGRveAkSNz4wtiyb4mdhQeM9xLdlS9e7FX47SjxReBaq32aDB5bT3TAuW12PYailzst6jTla2zz0NUqpm2zRYjH+oaj9yjOGwPeMBVrHXpFzm7SISV3u9nt+QBK/Lg8WfB6AvlrVXInklZ9L3gKYpW9ueIq5DEqyUllAIjbFGuCJuzebICGvL53HLmEXlgwYHLycaglAF9sfXd5cVReUQM+Rwk25ecPQAvn3v0k3nQbXFvpaDup5vN1583Pzab9WkgMsUcatZLgyeuJumvU8P2kOKBSHz+PQGtbWmbXsrJcPltrFfqynXObAyDh9HTyPQbPcJ69eH+B/vq3/gO7Ktd5R3YV3vJM6xXuBO2bajB0Fj/ATzkBKlpBQAA"
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUy46bMBTdz1d43G0cMIGQAEHqrqsu+pBGqqrI4Etwh2BkzEzSKP9e2xDNS9OZYeH3uY9zDze75rLUxw5QrfdNfpXZCXGmGWlJDYyTvlf5FUKZ3SC7MutGtLdIQbPBnRkl4xjVCqoN9rbtcNBeGC0BaMwgonQdx9wPgc//9BixfoP7UolO4/xNK7BarHi0LIBHEfeXUVEs/I9bWcacxmEJAaOrmJXgB8Hy41Z4TEtaxQWEq0VUxZzHcfHSSq+PDYzs3Q1gqSOCbzANQghWqzLxcT635kin5E5B35862QstZJtU4gA81bJL/LSBSptJiV1t5xrcIugO6b3gujZHsmOl0MeEplqxdjLhLtGc9rPpGs3DPi1YebtTcmg5KWUjVfLJ9/30LxEth0Oydt/5aVRPd6SVD05Oj/y1soVnSFIx0QA/vXCqgJ8zz/Hj1ORZOblVIfnxoisu7kb2elB3oIgCE6SBbrBWA2Bkydy6ghiyr4n5cocZzxt2lIO9MUfTUNP8i0CVkns0mrw2nmmOskrsBgV5JvY71KvS1NnlIUrZzrt2h5ELdYMn7lHkdwc84krW2fTzjF0kwgrn97OdMo/lmff4mTf5QllnFLJnTZMPg+AJMqJcQBH6JFqvKKEUGGFFFJFlHHCgax6UERjOHCLzDNizOZkYpNSgLra+27w4Ko6IIZdDw/YFZw/Ay3OHfjKOus3vjRTk/Xy7/frz5sd2uzmNRCaYQ8WGRuOZrUny69SyPSR4JBKff89AKVPadmia2Xj4bapXYst1Tk0Mo4fJ08T0Gz3CeHXh/gf76t/4DuyrXeUd2Fd7yTOsU7gVtmmo3thY/wHGyla/aQUAAA=="
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|122.4|83.1|205.5|106 MB|Toqsh1+YkkzCOXdSyM0Dlg==|
|_connect_|33.3|43.7|77|70 MB|BndH/0F1zmvFNRMSaiB3Kg==|
|_minimal_|29.7|41.5|71.2|68 MB|8Qp9XdeFKxmgo++gQtjyeg==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-P0BbQLm5Wplmhd1dyA3lOKpa7Uk\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDU1ODNkZGEwLTU5ODEtMTFlYS1iYWNjLTg1NTcwYWZkYjI0ODwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-IQjIlEirG0AntouF07nHCGX6DgY\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDVjYjNjNTQwLTU5ODEtMTFlYS1hNGRiLWY5NGNiZTk2MDBkNzwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-ByX5FJmEasai68yzAk2OdB0hVcs\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 1385
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: 60b0e380-5981-11ea-8b68-bdad45a81041</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-static_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|122.1|84.1|206.2|112 MB|e/N6jWt0sa24Y0pk5hKRww==|
|_connect_|38.8|45.9|84.7|71.7 MB|t2sIc32tCAaNtPIzHutdhg==|
|_minimal_|29|41.2|70.2|69.2 MB|vUsDeFIkpln0svAEjeDoUQ==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDY5YzM5NGUwLTU5ODEtMTFlYS1hZDQwLTczY2IwMGZkMzk1MDwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDcxMGVhNWEwLTU5ODEtMTFlYS05ZTY3LWY1MjE3NDgwZjNjMTwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 1385
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: 74cbada0-5981-11ea-b4bb-e51e4e5c259e</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

## Route `/about`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|123.8|181.9|305.8|115 MB|DPgDl85zFYfiBnWM6glBNw==|
|_connect_|33.8|154.7|188.5|71.7 MB|DPgDl85zFYfiBnWM6glBNw==|
|_minimal_|29.3|142.4|171.7|69.8 MB|tJd3/XQ6XFswKbzA3XSqQw==|
<details><summary>Response for <i>full</i></summary>

```js
blob_with_size_4006
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
blob_with_size_4006
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 2860
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/194810b0840aab5d973f.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div class=\"container\"><h1>About from server</h1> <ul><li>\n      sunt aut facere repellat provident occaecati excepturi optio reprehenderit\n    </li><li>\n      qui est esse\n    </li><li>\n      ea molestias quasi exercitationem repellat qui ipsa sit aut\n    </li><li>\n      eum et est occaecati\n    </li><li>\n      nesciunt quas odio\n    </li></ul> <p><a href=\"/\" class=\"nuxt-link-active\">\n      Back to home page\n    </a></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__=(function(a){return {layout:\"default\",data:[{name:\"server\",posts:[{userId:a,id:a,title:\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",body:\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{userId:a,id:2,title:\"qui est esse\",body:\"est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla\"},{userId:a,id:3,title:\"ea molestias quasi exercitationem repellat qui ipsa sit aut\",body:\"et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut\"},{userId:a,id:4,title:\"eum et est occaecati\",body:\"ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit\"},{userId:a,id:5,title:\"nesciunt quas odio\",body:\"repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque\"}]}],error:null,serverRendered:true}}(1));</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/194810b0840aab5d973f.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|121.2|193.5|314.7|115 MB|58FxPFjLIbcBIK9eerUorg==|
|_connect_|41.8|139.3|181.1|74.9 MB|58FxPFjLIbcBIK9eerUorg==|
|_minimal_|29.4|137.5|166.9|71.6 MB|58FxPFjLIbcBIK9eerUorg==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA61WS28bNxC+51ew20sCSNbDkiWvZAHtrZce+gAKVIExS44sNlxyzYdi19B/7wxXK0uO0yRoBWjFJef5zTcjLr9TTsbHBsU21mb1Zsk/QkGEvu1vEVQ/BL96I8SSXwSvaG20/SA8mpuioacDVYitx81NMbi16SEOJtMrxNEMcDoaXc9majhBdfFXKASEmyJIr5tYrL5oBeeXczW9qlBNp2p4Na2qy+G3W7maqdFsInEMo/kMJA7H46tvtzK6nsxHw2o4nwwBqqm6nl1uPrUS4qPBFr1dQoaur9VNMRpPcDyfy3JYrC7YXL/x7s5jCE+NCzpqZ8uNfkC1iK4phwuDm0g/Xt9t+XeLeTFuHhYftYpb2nINSB0fy9EierAHE/lQXIxC73AsLiZhUYH8cOddsqovnXG+/H44HC7+7mur8KG8zp/9eVTnb33rnp08nfizzuILzf4GtEH19IlTj2q/HGR8MpsGTKe8qpx67Hil9K5FL6Dfoe97pCBJ9aaIPmEhGMzbXBAC+7s+fVZZp9038OgSn9BWuy8NBKqPdDaCtujpbDta/VCRmNh4V4vWD0UzWollMsyDNhQhQrJRAAsSaTwSORo0BqKgXHdaIZ06KQElRC3wQWITk9fCNYQNC3vc5uh1bHMbkOkT8/eJtEKkb8BXBRBE7QyJaAgkDYG9oKe6AqOP9XNEbEs3AQQVhkN+3V6qBcbs8xj3q4IWg9ScPDsVTml3IjYgkMSyWS2h64+iQzkTgfuoDzLqHRadwR+JDCI6sXU1igbuunyBzJGlAZdLLDfORfTUQzUYs/qVC6NE9ShAtIahrhQQhfLxctCJZ+2zZ9uNq49EcPfx4vb259//+O329ubtJlnJyL2Fd08eqVhWPLWUKQuFG0gmFj1mX/nnk4Uay6JlR9GjJo2BdhNt/KRK6Gl+RB0NC/1vPCl63AtlQeUELlVIVIhGx7XtViQvUwCrAAWROuB9Iu/Jk90GFTGD1WSq1/bM8JFIKCjOdKhsdBFI0lJyPjGb+Mn0oGSIXTkvTwvcodVkF7zc6ogyumLfO8Ni3GFxSuouG35vbZPVxhFCOwoU1zl6TZQlN1ZvtTkHQyieG6JCKghyM+R3DETP+0Tam3SnCeTKEBo0jnQQO2dSQ81BHHPeO7FDczB8lr5HLTU50WFtOQBoyB3UgqaZUFiRrUAGQtB1CrmzskOyRA1oE1X2ZfaXXfb/oWOPYEWhU6BeCUT+++TozVOyx9TqEy65mmISaPQdZ5MpCOpMNkOmK8qDsQCZuRM1lYL8U5ZAiRN71vYZoBY6pCBy5zOfDFRcNVqRlUO4LyCYHCF4Zch0uTF2+TQAwXBSB3ESMijiOZF9bTMyNXZ0pBGTahKHk75qaSWTaSDXMoitltQYdU2xP88xJnFEyy1/YFHNFWX86wPAWTkz/iSW1rw2xrWZv8x62mX96cTscqaCJ6XbhuU2AoYe0ENsvVGZ1xYMEyaPkJbUB1JwExINCMxzBuS6HynKvXaMOhebk1nbQyefZ96Sudi/37/vIVXal0zpXjvofjn825b8Z7vfvx29e7eggduO08NYFcHLL1/zaJzm2fwvup+9UH2F7mcvhl+h+9nr4AvdfEnhItKdeNDejf8BCV7FLCwLAAA="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA61WS28bNxC+51ew20sCSNbDkiWvZAHtrZce+gAKVIExS44sNlxyzYdi19B/7wxXK0uO0yRoBWjFJef5zTcjLr9TTsbHBsU21mb1Zsk/QkGEvu1vEVQ/BL96I8SSXwSvaG20/SA8mpuioacDVYitx81NMbi16SEOJtMrxNEMcDoaXc9majhBdfFXKASEmyJIr5tYrL5oBeeXczW9qlBNp2p4Na2qy+G3W7maqdFsInEMo/kMJA7H46tvtzK6nsxHw2o4nwwBqqm6nl1uPrUS4qPBFr1dQoaur9VNMRpPcDyfy3JYrC7YXL/x7s5jCE+NCzpqZ8uNfkC1iK4phwuDm0g/Xt9t+XeLeTFuHhYftYpb2nINSB0fy9EierAHE/lQXIxC73AsLiZhUYH8cOddsqovnXG+/H44HC7+7mur8KG8zp/9eVTnb33rnp08nfizzuILzf4GtEH19IlTj2q/HGR8MpsGTKe8qpx67Hil9K5FL6Dfoe97pCBJ9aaIPmEhGMzbXBAC+7s+fVZZp9038OgSn9BWuy8NBKqPdDaCtujpbDta/VCRmNh4V4vWD0UzWollMsyDNhQhQrJRAAsSaTwSORo0BqKgXHdaIZ06KQElRC3wQWITk9fCNYQNC3vc5uh1bHMbkOkT8/eJtEKkb8BXBRBE7QyJaAgkDYG9oKe6AqOP9XNEbEs3AQQVhkN+3V6qBcbs8xj3q4IWg9ScPDsVTml3IjYgkMSyWS2h64+iQzkTgfuoDzLqHRadwR+JDCI6sXU1igbuunyBzJGlAZdLLDfORfTUQzUYs/qVC6NE9ShAtIahrhQQhfLxctCJZ+2zZ9uNq49EcPfx4vb259//+O329ubtJlnJyL2Fd08eqVhWPLWUKQuFG0gmFj1mX/nnk4Uay6JlR9GjJo2BdhNt/KRK6Gl+RB0NC/1vPCl63AtlQeUELlVIVIhGx7XtViQvUwCrAAWROuB9Iu/Jk90GFTGD1WSq1/bM8JFIKCjOdKhsdBFI0lJyPjGb+Mn0oGSIXTkvTwvcodVkF7zc6ogyumLfO8Ni3GFxSuouG35vbZPVxhFCOwoU1zl6TZQlN1ZvtTkHQyieG6JCKghyM+R3DETP+0Tam3SnCeTKEBo0jnQQO2dSQ81BHHPeO7FDczB8lr5HLTU50WFtOQBoyB3UgqaZUFiRrUAGQtB1CrmzskOyRA1oE1X2ZfaXXfb/oWOPYEWhU6BeCUT+++TozVOyx9TqEy65mmISaPQdZ5MpCOpMNkOmK8qDsQCZuRM1lYL8U5ZAiRN71vYZoBY6pCBy5zOfDFRcNVqRlUO4LyCYHCF4Zch0uTF2+TQAwXBSB3ESMijiOZF9bTMyNXZ0pBGTahKHk75qaSWTaSDXMoitltQYdU2xP88xJnFEyy1/YFHNFWX86wPAWTkz/iSW1rw2xrWZv8x62mX96cTscqaCJ6XbhuU2AoYe0ENsvVGZ1xYMEyaPkJbUB1JwExINCMxzBuS6HynKvXaMOhebk1nbQyefZ96Sudi/37/vIVXal0zpXjvofjn825b8Z7vfvx29e7eggduO08NYFcHLL1/zaJzm2fwvup+9UH2F7mcvhl+h+9nr4AvdfEnhItKdeNDejf8BCV7FLCwLAAA="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA61WS28bNxC+51ew20sCSNbDkiWvZAHtrZce+gAKVIExS44sNlxyzYdi19B/7wxXK0uO0yRoBWjFJef5zTcjLr9TTsbHBsU21mb1Zsk/QkGEvu1vEVQ/BL96I8SSXwSvaG20/SA8mpuioacDVYitx81NMbi16SEOJtMrxNEMcDoaXc9majhBdfFXKASEmyJIr5tYrL5oBeeXczW9qlBNp2p4Na2qy+G3W7maqdFsInEMo/kMJA7H46tvtzK6nsxHw2o4nwwBqqm6nl1uPrUS4qPBFr1dQoaur9VNMRpPcDyfy3JYrC7YXL/x7s5jCE+NCzpqZ8uNfkC1iK4phwuDm0g/Xt9t+XeLeTFuHhYftYpb2nINSB0fy9EierAHE/lQXIxC73AsLiZhUYH8cOddsqovnXG+/H44HC7+7mur8KG8zp/9eVTnb33rnp08nfizzuILzf4GtEH19IlTj2q/HGR8MpsGTKe8qpx67Hil9K5FL6Dfoe97pCBJ9aaIPmEhGMzbXBAC+7s+fVZZp9038OgSn9BWuy8NBKqPdDaCtujpbDta/VCRmNh4V4vWD0UzWollMsyDNhQhQrJRAAsSaTwSORo0BqKgXHdaIZ06KQElRC3wQWITk9fCNYQNC3vc5uh1bHMbkOkT8/eJtEKkb8BXBRBE7QyJaAgkDYG9oKe6AqOP9XNEbEs3AQQVhkN+3V6qBcbs8xj3q4IWg9ScPDsVTml3IjYgkMSyWS2h64+iQzkTgfuoDzLqHRadwR+JDCI6sXU1igbuunyBzJGlAZdLLDfORfTUQzUYs/qVC6NE9ShAtIahrhQQhfLxctCJZ+2zZ9uNq49EcPfx4vb259//+O329ubtJlnJyL2Fd08eqVhWPLWUKQuFG0gmFj1mX/nnk4Uay6JlR9GjJo2BdhNt/KRK6Gl+RB0NC/1vPCl63AtlQeUELlVIVIhGx7XtViQvUwCrAAWROuB9Iu/Jk90GFTGD1WSq1/bM8JFIKCjOdKhsdBFI0lJyPjGb+Mn0oGSIXTkvTwvcodVkF7zc6ogyumLfO8Ni3GFxSuouG35vbZPVxhFCOwoU1zl6TZQlN1ZvtTkHQyieG6JCKghyM+R3DETP+0Tam3SnCeTKEBo0jnQQO2dSQ81BHHPeO7FDczB8lr5HLTU50WFtOQBoyB3UgqaZUFiRrUAGQtB1CrmzskOyRA1oE1X2ZfaXXfb/oWOPYEWhU6BeCUT+++TozVOyx9TqEy65mmISaPQdZ5MpCOpMNkOmK8qDsQCZuRM1lYL8U5ZAiRN71vYZoBY6pCBy5zOfDFRcNVqRlUO4LyCYHCF4Zch0uTF2+TQAwXBSB3ESMijiOZF9bTMyNXZ0pBGTahKHk75qaSWTaSDXMoitltQYdU2xP88xJnFEyy1/YFHNFWX86wPAWTkz/iSW1rw2xrWZv8x62mX96cTscqaCJ6XbhuU2AoYe0ENsvVGZ1xYMEyaPkJbUB1JwExINCMxzBuS6HynKvXaMOhebk1nbQyefZ96Sudi/37/vIVXal0zpXjvofjn825b8Z7vfvx29e7eggduO08NYFcHLL1/zaJzm2fwvup+9UH2F7mcvhl+h+9nr4AvdfEnhItKdeNDejf8BCV7FLCwLAAA="
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|119.7|191.1|310.7|116 MB|YyOsCcyDXWnp4IUl+rF/8A==|
|_connect_|33.6|133|166.7|72.7 MB|YyOsCcyDXWnp4IUl+rF/8A==|
|_minimal_|28.8|132.7|161.5|72.9 MB|/0naPgKEVILCd4EgZ9umsQ==|
<details><summary>Response for <i>full</i></summary>

```js
blob_with_size_4057
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
blob_with_size_4057
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"b2c-+4BzmtOUQYVrYTP+Rq9V0+WHIdM\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 2860
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/194810b0840aab5d973f.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div class=\"container\"><h1>About from server</h1> <ul><li>\n      sunt aut facere repellat provident occaecati excepturi optio reprehenderit\n    </li><li>\n      qui est esse\n    </li><li>\n      ea molestias quasi exercitationem repellat qui ipsa sit aut\n    </li><li>\n      eum et est occaecati\n    </li><li>\n      nesciunt quas odio\n    </li></ul> <p><a href=\"/\" class=\"nuxt-link-active\">\n      Back to home page\n    </a></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__=(function(a){return {layout:\"default\",data:[{name:\"server\",posts:[{userId:a,id:a,title:\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",body:\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{userId:a,id:2,title:\"qui est esse\",body:\"est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla\"},{userId:a,id:3,title:\"ea molestias quasi exercitationem repellat qui ipsa sit aut\",body:\"et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut\"},{userId:a,id:4,title:\"eum et est occaecati\",body:\"ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit\"},{userId:a,id:5,title:\"nesciunt quas odio\",body:\"repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque\"}]}],error:null,serverRendered:true}}(1));</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/194810b0840aab5d973f.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-static_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|123.4|180.1|303.5|110 MB|DPgDl85zFYfiBnWM6glBNw==|
|_connect_|40.1|134.6|174.8|74.5 MB|DPgDl85zFYfiBnWM6glBNw==|
|_minimal_|28.8|134.9|163.6|71.2 MB|tJd3/XQ6XFswKbzA3XSqQw==|
<details><summary>Response for <i>full</i></summary>

```js
blob_with_size_4006
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
blob_with_size_4006
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 2860
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/194810b0840aab5d973f.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div class=\"container\"><h1>About from server</h1> <ul><li>\n      sunt aut facere repellat provident occaecati excepturi optio reprehenderit\n    </li><li>\n      qui est esse\n    </li><li>\n      ea molestias quasi exercitationem repellat qui ipsa sit aut\n    </li><li>\n      eum et est occaecati\n    </li><li>\n      nesciunt quas odio\n    </li></ul> <p><a href=\"/\" class=\"nuxt-link-active\">\n      Back to home page\n    </a></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__=(function(a){return {layout:\"default\",data:[{name:\"server\",posts:[{userId:a,id:a,title:\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",body:\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{userId:a,id:2,title:\"qui est esse\",body:\"est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla\"},{userId:a,id:3,title:\"ea molestias quasi exercitationem repellat qui ipsa sit aut\",body:\"et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut\"},{userId:a,id:4,title:\"eum et est occaecati\",body:\"ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit\"},{userId:a,id:5,title:\"nesciunt quas odio\",body:\"repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque\"}]}],error:null,serverRendered:true}}(1));</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/194810b0840aab5d973f.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

## Route `/redirect`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|119.6|74.3|193.9|113 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|35.3|37.3|72.6|69.3 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|30.5|31.3|61.8|67.6 MB|atSW0WUyEvi3qig5Uosd7A==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 302,
  "headers": {
    "location": "/about"
  },
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|121.9|84.3|206.2|112 MB|atSW0WUyEvi3qig5Uosd7A==|
|_connect_|41.4|36.2|77.6|72.2 MB|atSW0WUyEvi3qig5Uosd7A==|
|_minimal_|29.4|30|59.4|68.9 MB|atSW0WUyEvi3qig5Uosd7A==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 302,
  "headers": {
    "location": "/about"
  },
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 302,
  "headers": {
    "location": "/about"
  },
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 302,
  "headers": {
    "location": "/about"
  },
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|123|75.5|198.5|108 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|34.1|35.7|69.9|68.1 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|29.2|30.4|59.5|68.3 MB|atSW0WUyEvi3qig5Uosd7A==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 302,
  "headers": {
    "location": "/about"
  },
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

### Config _with-static_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|123.1|74.9|198|107 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|40|38.5|78.5|71 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|28.3|30.4|58.7|68.5 MB|atSW0WUyEvi3qig5Uosd7A==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 302,
  "headers": {
    "location": "/about"
  },
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

## Route `/nuxt-icon.png`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|125.3|48|173.3|102 MB|oCShUmxG+SfF2/HJadRk6w==|
|_connect_|34|43.1|77.1|69.1 MB|NdQL9Cs2MAVKCcGgGcc22A==|
|_minimal_|28.8|40|68.7|69.2 MB|WOlebsjuEP8seruYOzY0Kw==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 404,
  "headers": {
    "content-type": "image/gif",
    "cache-control": "no-cache, no-store, must-revalidate",
    "pragma": "no-cache",
    "expires": "0"
  },
  "isBase64Encoded": false,
  "body": "GIF89a\u0001\u0000\u0001\u0000�\u0001\u0000���\u0000\u0000\u0000!�\u0004\u0001\n\u0000\u0001\u0000,\u0000\u0000\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0002\u0002L\u0001\u0000;"
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 404,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "2630"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8dGl0bGU+VGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZDwvdGl0bGU+PG1ldGEgZGF0YS1uLWhlYWQ9InNzciIgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEuMCxtaW5pbXVtLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTEuMCx1c2VyLXNjYWxhYmxlPW5vIj48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48c3R5bGUgZGF0YS12dWUtc3NyLWlkPSIxMjRlMjg4YzowIj4ubnV4dC1wcm9ncmVzc3twb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6MnB4O3dpZHRoOjA7b3BhY2l0eToxO3RyYW5zaXRpb246d2lkdGggLjFzLG9wYWNpdHkgLjRzO2JhY2tncm91bmQtY29sb3I6IzAwMDt6LWluZGV4Ojk5OTk5OX0ubnV4dC1wcm9ncmVzcy5udXh0LXByb2dyZXNzLW5vdHJhbnNpdGlvbnt0cmFuc2l0aW9uOm5vbmV9Lm51eHQtcHJvZ3Jlc3MtZmFpbGVke2JhY2tncm91bmQtY29sb3I6cmVkfTwvc3R5bGU+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iN2RiOWI3OGM6MCI+Ll9fbnV4dC1lcnJvci1wYWdle3BhZGRpbmc6MXJlbTtiYWNrZ3JvdW5kOiNmN2Y4ZmI7Y29sb3I6IzQ3NDk0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6MTAwIWltcG9ydGFudDstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjB9Ll9fbnV4dC1lcnJvci1wYWdlIC5lcnJvcnttYXgtd2lkdGg6NDUwcHh9Ll9fbnV4dC1lcnJvci1wYWdlIC50aXRsZXtmb250LXNpemU6MS41cmVtO21hcmdpbi10b3A6MTVweDtjb2xvcjojNDc0OTRlO21hcmdpbi1ib3R0b206OHB4fS5fX251eHQtZXJyb3ItcGFnZSAuZGVzY3JpcHRpb257Y29sb3I6IzdmODI4YjtsaW5lLWhlaWdodDoyMXB4O21hcmdpbi1ib3R0b206MTBweH0uX19udXh0LWVycm9yLXBhZ2UgYXtjb2xvcjojN2Y4MjhiIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb246bm9uZX0uX19udXh0LWVycm9yLXBhZ2UgLmxvZ297cG9zaXRpb246Zml4ZWQ7bGVmdDoxMnB4O2JvdHRvbToxMnB4fTwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5ID4KICAgIDxkaXYgZGF0YS1zZXJ2ZXItcmVuZGVyZWQ9InRydWUiIGlkPSJfX251eHQiPjwhLS0tLT48ZGl2IGlkPSJfX2xheW91dCI+PGRpdj48ZGl2IGNsYXNzPSJfX251eHQtZXJyb3ItcGFnZSI+PGRpdiBjbGFzcz0iZXJyb3IiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIGZpbGw9IiNEQkUxRUMiIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZD0iTTIyIDMwaDR2NGgtNHptMC0xNmg0djEyaC00em0xLjk5LTEwQzEyLjk0IDQgNCAxMi45NSA0IDI0czguOTQgMjAgMTkuOTkgMjBTNDQgMzUuMDUgNDQgMjQgMzUuMDQgNCAyMy45OSA0ek0yNCA0MGMtOC44NCAwLTE2LTcuMTYtMTYtMTZTMTUuMTYgOCAyNCA4czE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNnoiPjwvcGF0aD48L3N2Zz4gPGRpdiBjbGFzcz0idGl0bGUiPlRoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQ8L2Rpdj4gPHAgY2xhc3M9ImRlc2NyaXB0aW9uIj48YSBocmVmPSIvIiBjbGFzcz0iZXJyb3ItbGluayBudXh0LWxpbmstYWN0aXZlIj5CYWNrIHRvIHRoZSBob21lIHBhZ2U8L2E+PC9wPiA8ZGl2IGNsYXNzPSJsb2dvIj48YSBocmVmPSJodHRwczovL251eHRqcy5vcmciIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIj5OdXh0LmpzPC9hPjwvZGl2PjwvZGl2PjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbXSxlcnJvcjp7c3RhdHVzQ29kZTo0MDQscGF0aDoiXHUwMDJGbnV4dC1pY29uLnBuZyIsbWVzc2FnZToiVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCJ9LHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 2630
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <title>This page could not be found</title><meta data-n-head=\"ssr\" name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\"><link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style><style data-vue-ssr-id=\"7db9b78c:0\">.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div class=\"__nuxt-error-page\"><div class=\"error\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">This page could not be found</div> <p class=\"description\"><a href=\"/\" class=\"error-link nuxt-link-active\">Back to the home page</a></p> <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div></div></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[],error:{statusCode:404,path:\"\\u002Fnuxt-icon.png\",message:\"This page could not be found\"},serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|122.7|57.6|180.3|109 MB|oCShUmxG+SfF2/HJadRk6w==|
|_connect_|41.8|43.4|85.2|71.9 MB|bb96X595NQ+9Ky1Yfxn0oQ==|
|_minimal_|29.6|41.5|71|68.8 MB|kPG6GRYEwn0+8RGJUMHVaw==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 404,
  "headers": {
    "content-type": "image/gif",
    "cache-control": "no-cache, no-store, must-revalidate",
    "pragma": "no-cache",
    "expires": "0"
  },
  "isBase64Encoded": false,
  "body": "GIF89a\u0001\u0000\u0001\u0000�\u0001\u0000���\u0000\u0000\u0000!�\u0004\u0001\n\u0000\u0001\u0000,\u0000\u0000\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0002\u0002L\u0001\u0000;"
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 404,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VWS4/bOAy+91eoKvYW+TXOxLGTHNrt3tpD2wUW2F0MZItO1LEtQ5LzmGD++1JyUiQznbabGDZFihRFfqS0eC1UZQ89kI1tm9WrhfsQwS1nHdsAF8wYvXpFyMINiKOQttI2sPqykYb0fA2kUkMjSKcsKYHUaujEIhznLFqw/NLekqJBSjrewpJuJex6pS1FC52Fzi7pTgq7WQrYygqYH0xkJ63kDTMVb2AZB9GkRVY7tJccvn/CGQxoP+QlcjpFV4tGdvdEQ7OkPb4VF5RsNNRLGt51w96G6fQWIJ5xmMbxfDYTUQoi+Goo4QbdrrTs7S9YgewmE9PbEsR0KqLbaVneRP/fyu1MxLO0goTH2YxXECXJ7XMrxh4aGMO7HcDlikkMcZykkGRZlUd0FThzrNdqrcGYY68MRlN1eS33IAqr+jwqGqgtfrRcb9x3A55I+n3hM4As1fNK2kMeF1bz7mTCC0kQm8lJTILUFCWv7tfagYBVqlE6fxNFUfHAZCdgn8/97/Haq+sRQyB9W+R4sV6nOniiyWouGxDHZ4tqEI+L0MfnxTDNRDkvZ6cw3fm4M9BaaeZQfey5ELJb57GG9mJX+Zt6Vmd1WZx2l87SeQqFBdTmjVx3eYVIBl0IafqGH/K6gX3xdTBW1gd2Avp5jldg0kJrziw3nQmpofKbxlWGtitq1MPNtrI55AYjwhDesh7ZuzFfcRS9lq2rJ97ZgrWGeZ+MfADGhXPATfmtwPnlvbQ/kXrLplXKblwQ0CTWoOQGQfMNQ7w06J2F78OoVNaqNo8en8eWBJ4+YtmORZ6n06jff3embyTH0R10No+DqUtIy/VadsytHE8RqdfZOElPLmQvmBYwVpLD2UkfU5tkZYHlCexcBzGavzYYv+AsvzZzkQ4fbAGV0vwCy9/xqVFr9bRKfWBjV4/n9ZH+Bm/XnUPXWz1VKnE492khtyPqESxbbIcasAaxMpbU6gEocUUwuoC95DXD38rrjHzErhqcBFkjv2q4MWeVC6/pldjzXXParsm+bTpkbazt8zDc7XbB7iZQeh0m2BRCnEHJ2PHpPMIO6AM+0rVssDm++f3t+/j9O0rcUfFW7Zc0IhFJM3xwhZ5j/0FfPyQJuYk26TbdsPShjVh8i4M48aM4mM9ZHL2Lk2CeEvd31BS/SWoyx0siEs9xFhKf05TcTIMIxU7uaaeS3Dh5+vABeWlUsSzIUuLWYbMAX/75HE+RJpnTywxSTkT8w04k8+8HdD10vuMHQ7Ail9HzcKc/OVxdRsiiP+tc4BhN8/NJQq8ywvyR4zPnKMaxv2xxpbfY2YhVxG7wEqBa8KsuQu58vHbNQfPCvkuqwaw6k1+NyyolFssEMIN3ZcO7ezqecJ1SPXSAmPiIU/EUG617WF28yaLGbgMakdPypll9dqAVpDwQfnKbt6XgGDMvXoTn6c8sLcZwrHZ45qgdVtnHP//6cne3PI6QzjFgNR8aSyeuOvK//534COVHY7kdzDslIE+jdOJylNN/hihK/vAeSGzfQd+t6aTFwwfjlNMfJYo+TsbK+3QqvNzV3WOBWxgdPDlKjK5+fgtBp/1uf6D74t3jF3RfvHE80fXtxnUZvC2G463xP9Kayp5GCgAA"
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VWS4/bOAy+91eoKvYW+TXOxLGTHNrt3tpD2wUW2F0MZItO1LEtQ5LzmGD++1JyUiQznbabGDZFihRFfqS0eC1UZQ89kI1tm9WrhfsQwS1nHdsAF8wYvXpFyMINiKOQttI2sPqykYb0fA2kUkMjSKcsKYHUaujEIhznLFqw/NLekqJBSjrewpJuJex6pS1FC52Fzi7pTgq7WQrYygqYH0xkJ63kDTMVb2AZB9GkRVY7tJccvn/CGQxoP+QlcjpFV4tGdvdEQ7OkPb4VF5RsNNRLGt51w96G6fQWIJ5xmMbxfDYTUQoi+Goo4QbdrrTs7S9YgewmE9PbEsR0KqLbaVneRP/fyu1MxLO0goTH2YxXECXJ7XMrxh4aGMO7HcDlikkMcZykkGRZlUd0FThzrNdqrcGYY68MRlN1eS33IAqr+jwqGqgtfrRcb9x3A55I+n3hM4As1fNK2kMeF1bz7mTCC0kQm8lJTILUFCWv7tfagYBVqlE6fxNFUfHAZCdgn8/97/Haq+sRQyB9W+R4sV6nOniiyWouGxDHZ4tqEI+L0MfnxTDNRDkvZ6cw3fm4M9BaaeZQfey5ELJb57GG9mJX+Zt6Vmd1WZx2l87SeQqFBdTmjVx3eYVIBl0IafqGH/K6gX3xdTBW1gd2Avp5jldg0kJrziw3nQmpofKbxlWGtitq1MPNtrI55AYjwhDesh7ZuzFfcRS9lq2rJ97ZgrWGeZ+MfADGhXPATfmtwPnlvbQ/kXrLplXKblwQ0CTWoOQGQfMNQ7w06J2F78OoVNaqNo8en8eWBJ4+YtmORZ6n06jff3embyTH0R10No+DqUtIy/VadsytHE8RqdfZOElPLmQvmBYwVpLD2UkfU5tkZYHlCexcBzGavzYYv+AsvzZzkQ4fbAGV0vwCy9/xqVFr9bRKfWBjV4/n9ZH+Bm/XnUPXWz1VKnE492khtyPqESxbbIcasAaxMpbU6gEocUUwuoC95DXD38rrjHzErhqcBFkjv2q4MWeVC6/pldjzXXParsm+bTpkbazt8zDc7XbB7iZQeh0m2BRCnEHJ2PHpPMIO6AM+0rVssDm++f3t+/j9O0rcUfFW7Zc0IhFJM3xwhZ5j/0FfPyQJuYk26TbdsPShjVh8i4M48aM4mM9ZHL2Lk2CeEvd31BS/SWoyx0siEs9xFhKf05TcTIMIxU7uaaeS3Dh5+vABeWlUsSzIUuLWYbMAX/75HE+RJpnTywxSTkT8w04k8+8HdD10vuMHQ7Ail9HzcKc/OVxdRsiiP+tc4BhN8/NJQq8ywvyR4zPnKMaxv2xxpbfY2YhVxG7wEqBa8KsuQu58vHbNQfPCvkuqwaw6k1+NyyolFssEMIN3ZcO7ezqecJ1SPXSAmPiIU/EUG617WF28yaLGbgMakdPypll9dqAVpDwQfnKbt6XgGDMvXoTn6c8sLcZwrHZ45qgdVtnHP//6cne3PI6QzjFgNR8aSyeuOvK//534COVHY7kdzDslIE+jdOJylNN/hihK/vAeSGzfQd+t6aTFwwfjlNMfJYo+TsbK+3QqvNzV3WOBWxgdPDlKjK5+fgtBp/1uf6D74t3jF3RfvHE80fXtxnUZvC2G463xP9Kayp5GCgAA"
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|122.1|48.4|170.4|108 MB|oCShUmxG+SfF2/HJadRk6w==|
|_connect_|34.2|41.9|76.1|69.3 MB|NdQL9Cs2MAVKCcGgGcc22A==|
|_minimal_|29|39.5|68.5|68.7 MB|WOlebsjuEP8seruYOzY0Kw==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 404,
  "headers": {
    "content-type": "image/gif",
    "cache-control": "no-cache, no-store, must-revalidate",
    "pragma": "no-cache",
    "expires": "0"
  },
  "isBase64Encoded": false,
  "body": "GIF89a\u0001\u0000\u0001\u0000�\u0001\u0000���\u0000\u0000\u0000!�\u0004\u0001\n\u0000\u0001\u0000,\u0000\u0000\u0000\u0000\u0001\u0000\u0001\u0000\u0000\u0002\u0002L\u0001\u0000;"
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 404,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "2630"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8dGl0bGU+VGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZDwvdGl0bGU+PG1ldGEgZGF0YS1uLWhlYWQ9InNzciIgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEuMCxtaW5pbXVtLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTEuMCx1c2VyLXNjYWxhYmxlPW5vIj48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48c3R5bGUgZGF0YS12dWUtc3NyLWlkPSIxMjRlMjg4YzowIj4ubnV4dC1wcm9ncmVzc3twb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6MnB4O3dpZHRoOjA7b3BhY2l0eToxO3RyYW5zaXRpb246d2lkdGggLjFzLG9wYWNpdHkgLjRzO2JhY2tncm91bmQtY29sb3I6IzAwMDt6LWluZGV4Ojk5OTk5OX0ubnV4dC1wcm9ncmVzcy5udXh0LXByb2dyZXNzLW5vdHJhbnNpdGlvbnt0cmFuc2l0aW9uOm5vbmV9Lm51eHQtcHJvZ3Jlc3MtZmFpbGVke2JhY2tncm91bmQtY29sb3I6cmVkfTwvc3R5bGU+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iN2RiOWI3OGM6MCI+Ll9fbnV4dC1lcnJvci1wYWdle3BhZGRpbmc6MXJlbTtiYWNrZ3JvdW5kOiNmN2Y4ZmI7Y29sb3I6IzQ3NDk0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6MTAwIWltcG9ydGFudDstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjB9Ll9fbnV4dC1lcnJvci1wYWdlIC5lcnJvcnttYXgtd2lkdGg6NDUwcHh9Ll9fbnV4dC1lcnJvci1wYWdlIC50aXRsZXtmb250LXNpemU6MS41cmVtO21hcmdpbi10b3A6MTVweDtjb2xvcjojNDc0OTRlO21hcmdpbi1ib3R0b206OHB4fS5fX251eHQtZXJyb3ItcGFnZSAuZGVzY3JpcHRpb257Y29sb3I6IzdmODI4YjtsaW5lLWhlaWdodDoyMXB4O21hcmdpbi1ib3R0b206MTBweH0uX19udXh0LWVycm9yLXBhZ2UgYXtjb2xvcjojN2Y4MjhiIWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb246bm9uZX0uX19udXh0LWVycm9yLXBhZ2UgLmxvZ297cG9zaXRpb246Zml4ZWQ7bGVmdDoxMnB4O2JvdHRvbToxMnB4fTwvc3R5bGU+CiAgPC9oZWFkPgogIDxib2R5ID4KICAgIDxkaXYgZGF0YS1zZXJ2ZXItcmVuZGVyZWQ9InRydWUiIGlkPSJfX251eHQiPjwhLS0tLT48ZGl2IGlkPSJfX2xheW91dCI+PGRpdj48ZGl2IGNsYXNzPSJfX251eHQtZXJyb3ItcGFnZSI+PGRpdiBjbGFzcz0iZXJyb3IiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIGZpbGw9IiNEQkUxRUMiIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZD0iTTIyIDMwaDR2NGgtNHptMC0xNmg0djEyaC00em0xLjk5LTEwQzEyLjk0IDQgNCAxMi45NSA0IDI0czguOTQgMjAgMTkuOTkgMjBTNDQgMzUuMDUgNDQgMjQgMzUuMDQgNCAyMy45OSA0ek0yNCA0MGMtOC44NCAwLTE2LTcuMTYtMTYtMTZTMTUuMTYgOCAyNCA4czE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNnoiPjwvcGF0aD48L3N2Zz4gPGRpdiBjbGFzcz0idGl0bGUiPlRoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQ8L2Rpdj4gPHAgY2xhc3M9ImRlc2NyaXB0aW9uIj48YSBocmVmPSIvIiBjbGFzcz0iZXJyb3ItbGluayBudXh0LWxpbmstYWN0aXZlIj5CYWNrIHRvIHRoZSBob21lIHBhZ2U8L2E+PC9wPiA8ZGl2IGNsYXNzPSJsb2dvIj48YSBocmVmPSJodHRwczovL251eHRqcy5vcmciIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIj5OdXh0LmpzPC9hPjwvZGl2PjwvZGl2PjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbXSxlcnJvcjp7c3RhdHVzQ29kZTo0MDQscGF0aDoiXHUwMDJGbnV4dC1pY29uLnBuZyIsbWVzc2FnZToiVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCJ9LHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 2630
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <title>This page could not be found</title><meta data-n-head=\"ssr\" name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\"><link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style><style data-vue-ssr-id=\"7db9b78c:0\">.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div class=\"__nuxt-error-page\"><div class=\"error\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">This page could not be found</div> <p class=\"description\"><a href=\"/\" class=\"error-link nuxt-link-active\">Back to the home page</a></p> <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div></div></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[],error:{statusCode:404,path:\"\\u002Fnuxt-icon.png\",message:\"This page could not be found\"},serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-static_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|123.2|50.1|173.3|108 MB|Gvr3GK7TiagcVisLZJpVkw==|
|_connect_|39.1|11.6|50.7|69.3 MB|sgtrRMARd8gLXpvMh5W4Bg==|
|_minimal_|29.3|39.5|68.7|68.5 MB|WOlebsjuEP8seruYOzY0Kw==|
<details><summary>Response for <i>full</i></summary>

```js
blob_with_size_30359
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
blob_with_size_30359
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 2630
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <title>This page could not be found</title><meta data-n-head=\"ssr\" name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\"><link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style><style data-vue-ssr-id=\"7db9b78c:0\">.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div class=\"__nuxt-error-page\"><div class=\"error\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">This page could not be found</div> <p class=\"description\"><a href=\"/\" class=\"error-link nuxt-link-active\">Back to the home page</a></p> <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div></div></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[],error:{statusCode:404,path:\"\\u002Fnuxt-icon.png\",message:\"This page could not be found\"},serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

