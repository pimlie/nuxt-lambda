
# Benchmarks

> :warning: The total times are measured without downloading & unzipping what normally occures on the AWS platform. Therefore these benchmarks only list _load/parse times_ and not _coldboot times_

Check the benchmark folder for details how these benchmarks are created

## Route `/`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|125.2|85.6|210.9|114 MB|3QEod/cMVnIrChHhll3SbA==|
|_connect_|40.9|49.5|90.4|69.7 MB|sS5ShvzVsjPCfTZM+IFyXQ==|
|_minimal_|30.8|45.1|76|66.5 MB|dsGeC7SXXxbm3wU/Jv+dNg==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1400"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8YmFzZSBocmVmPSIvIj48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IGNiYWJkZTQwLTUwZTYtMTFlYS05YmViLTdmNGFkOTZlMmZhODwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDczZjRlMDMwNDQyY2NkYTM3ODYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
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
    "content-length": "1503"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVmZXRjaCIgaHJlZj0iL19udXh0LzE5NDgxMGIwODQwYWFiNWQ5NzNmLmpzIj48bGluayByZWw9InByZWZldGNoIiBocmVmPSIvX251eHQvZGIwMzAyYTY0NGRiY2U5MmVhZTguanMiPjxzdHlsZSBkYXRhLXZ1ZS1zc3ItaWQ9IjEyNGUyODhjOjAiPi5udXh0LXByb2dyZXNze3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDoycHg7d2lkdGg6MDtvcGFjaXR5OjE7dHJhbnNpdGlvbjp3aWR0aCAuMXMsb3BhY2l0eSAuNHM7YmFja2dyb3VuZC1jb2xvcjojMDAwO3otaW5kZXg6OTk5OTk5fS5udXh0LXByb2dyZXNzLm51eHQtcHJvZ3Jlc3Mtbm90cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZX0ubnV4dC1wcm9ncmVzcy1mYWlsZWR7YmFja2dyb3VuZC1jb2xvcjpyZWR9PC9zdHlsZT4KICA8L2hlYWQ+CiAgPGJvZHkgPgogICAgPGRpdiBkYXRhLXNlcnZlci1yZW5kZXJlZD0idHJ1ZSIgaWQ9Il9fbnV4dCI+PCEtLS0tPjxkaXYgaWQ9Il9fbGF5b3V0Ij48ZGl2PjxkaXY+PGgxPkhpIGZyb20gc2VydmVyITwvaDE+IDxmaWd1cmU+PGltZyBzcmM9Ii9udXh0LWljb24ucG5nIiBzdHlsZT0iaGVpZ2h0OiA1MHB4Ij4gPGZpZ2NhcHRpb24+PGEgaHJlZj0iL2Fib3V0Ij5BYm91dDwvYT48L2ZpZ2NhcHRpb24+PC9maWd1cmU+IDxwPjxzbWFsbD51dWlkOiBjZTA0OWI1MC01MGU2LTExZWEtOThhMS01NTZkMDQ4ZGQyMzM8L3NtYWxsPjwvcD48L2Rpdj4gPGZvb3Rlcj48c21hbGw+U2VydmVkIGJ5IGEgbnV4dC1sYW1iZGE8L3NtYWxsPjwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PjxzY3JpcHQ+d2luZG93Ll9fTlVYVF9fPXtsYXlvdXQ6ImRlZmF1bHQiLGRhdGE6W3tuYW1lOiJzZXJ2ZXIifV0sZXJyb3I6bnVsbCxzZXJ2ZXJSZW5kZXJlZDp0cnVlfTs8L3NjcmlwdD48c2NyaXB0IHNyYz0iL19udXh0LzQ1NmVlMTdhZTUxMTk3N2QwNGVkLmpzIiBkZWZlcj48L3NjcmlwdD48c2NyaXB0IHNyYz0iL19udXh0L2Q3MWMxZjdiZTQ4MzVmN2RkNzdiLmpzIiBkZWZlcj48L3NjcmlwdD48c2NyaXB0IHNyYz0iL19udXh0L2U4MzhkNTZiZWQ1NWQwNjViYjMwLmpzIiBkZWZlcj48L3NjcmlwdD48c2NyaXB0IHNyYz0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBkZWZlcj48L3NjcmlwdD4KICA8L2JvZHk+CjwvaHRtbD4K"
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
    "content-length": 1503
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/473f4e030442ccda3786.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><link rel=\"prefetch\" href=\"/_nuxt/194810b0840aab5d973f.js\"><link rel=\"prefetch\" href=\"/_nuxt/db0302a644dbce92eae8.js\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: cf68e640-50e6-11ea-b9a6-2b8233b7c025</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/473f4e030442ccda3786.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|127.4|96.9|224.2|106 MB|RVB1vWNhwvbY1be7ql0gIg==|
|_connect_|44.1|48|92.2|71.3 MB|BOt4+a+G6RZ663smNNYlBA==|
|_minimal_|31.3|46.2|77.5|68.7 MB|fRqFlY4pq3bUBWkCFRdbfg==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"578-qu5G/6hJnuPlx8Nqm9M5kYIencI\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUyW7bMBC95ysY9mpakq0t2oDeeuqhC1CgKAxKHNlsaFGgqMSu4X8vScnIhrSJDtzfLG+eprhmstHHHtBO70V1VdgJMaop6cgOKCPDoKorhAq7QXZl1jUdDEBBW2IPV4Xg3S1SIErcm1FShi+Xm248aC+MYoAgoRAFwU2SMD8Etvw9YESHEg+N4r1+gxVI1ymL4hpYFDE/jup67b/fSpis2xD8tR+Gq6ZhdJ2k8futsCRogjapIUzXUZswliT1SyuDPgqYyLwbwTJJOCtxsAphlaZN5uNqac2RXsmtgmE49XLgmssua/kBWK5ln/m5gFabSfHtzs47cItVf8jvOdM7cyR72nB9zIJcK9rNJtwlWgbDYr5Gy3DIa9rcbpUcO0YaKaTKPvi+n/8hvGNwyG7cd34a1dMd6eSDk9Mjf53s4BmStJQLYKcXThWwc+E5fpy4PKsut6olO15kxvjdxN4A6g4UUWCCNNASazUCRpbMjSuIIfuamK9ymOlc0KMc7Y05moddUH3iqFVyjyaT18ZzUKGi5dtRQVXw/RYNqjF1dnnwRnbLvtti5EIt8cw9ivz+gCdcQ3ubflXQi0Ro7fx+tFPh0arwHj/zZl+o6I1C9lSIahw5yxCLjSAj6pPIh5gEAVCS0tgMbQNJyNaQRpHhzCEKz4A9m5OJQUoN6mLrq82LofqIKHI5CLqvGX0AXp479JNx0m11b6Qg75ebzefvP75tNuVpIjLDDFo6Co0XtibZz1NH95DhiUh8/rUApUxpu1GIxXT4Za5XZst1zk0Mk4fZ08z0f3qE8erC/Qf21b/xDdhXu8obsK/2kmdYp3ArbNNfvanP/gUdM8rxeAUAAA=="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"5df-tJOueOl+6o5eAXpl9wBqipGpP+I\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUyW7bMBC95ysY9mpZpLValgX01lMPXYACRWFQ4shiI4sCRSV2jfx7SUpGliJNogP392bmzWjyay4rfeoBNfrQFle5nRBnmnmd1wDj3jCo4gqh3G6QXZl1K7obpKDd4t6MknGMGgX1Fvu7bjxqP4xiAJowiChdJwknIfDl7wEjNmzxUCnRa1y8ygJpkPIoLoFHESdxVJYBeT9LmAR1CCQgYbiqKs6CJI3fz8ITWtE6KSFMg6hOOE+S8hWWGnTVPKOh6zClpCRpSBgrI742zlmaN0B5aWJYsTgMeVnBegUM0gk66FMLU85uR7AJ8wTfYroKYZWmVUZwsbQUXq/kXsEwnHs5CC1kl9XiCHyjZZ+RTQu1NpMS+8bODbjFqj9u7gTXjTmSPauEPmV0oxXrZgp3iZZ0WMzXaBkOm5JVN3slx457lWylyj4QQjZ/PNFxOGZr990/9erpzuvkg5HzI3ud7OAZ0quZaIGf/zGqgN/nvtPH1bBvi9itSslPl2rm4nZSbwB1C8pTYJw00C3WagSMrJg7lwQj9rVnvsJhpvOWneRob8zRPDS0+CRQreQBTZTXxjItUF6L/aigyMVhjwZVmdy6OEQlu2Xf7TFyrm7xrD2KSH/EE65ivQ2/yNmlLFjp7H60U+6zIvcfP/NnWyjvTYUcWNsW4yh4hnga04By4kUEYo9SYN66rAKPlWlFIKVxSFKjmUPkvgH7Nibjg5Qa1IXrq42Lo/KEGHIxtOxQcvYAvDx36Cfj9LcUd6YU5N1yt/v8/ce33W57noTMMIeaja3GC5uT7Oe5YwfI8CQkvv+1AKVMaruxbRfT4Zc5X5lN1/3G+DBZmC3NSr/SmYxV5+5/sC/2gDdgX+xlb8C+2MGeYV2F28I2bdyf2vlf7/BkCd8FAAA="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"5df-PjIE3HgPpyXdE86cMRd4fpstli0\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUyW7bMBC99ysY9mpZ1C7LsoDeeuqhC1CgKAyKHFlsZFGgqMSu4X8vSdlokiJNogP392bmzWjKGy6ZPg6AWr3vqnelnRCnmnq91wLl3jiq6h1Cpd0guzLrTvS3SEG3wYMZJeUYtQqaDfa3/XTQfpykAEFGIQmCVZZxEgNf/hoxouMGj0yJQePqRRbIo5wnaQ08SThJk7qOyNtZ4ixqYiARieOQMU6jLE/fzsKzgAVNVkOcR0mTcZ5l9QssDWjWPqEJVnEekJrkMaG0TvjKOGdpXgHltYkhpGkc85rBKgQK+Qwd9bGDOWd3E9iEeYJvcBDGEOY5KwiulpbCG5TcKRjH0yBHoYXsi0YcgK+1HAqy7qDRZlJi19q5BbcIh8P6XnDdmiM5UCb0sQjWWtH+QuEu0TIYF5drtIzHdU3Z7U7Jqecek51UxXtCyPq3J3oOh2LlvvNjrx7vvF7+NXJ6YK+XPTxBeg0VHfDTP0YV8HPpO31cDfu2iN2qlvx4rWYu7mb1RlB3oDwFxkkD3WCtJsDIirl1STBi33jmqxxmPu/oUU72xhxdhjaoPgrUKLlHM+WNsRxUqGzEblJQlWK/Q6NiJrcuDsFkvxz6HUbO1Q2+aI8SMhzwjGN0sOFXJb2WBa2d3Q92Kn1alf7DZ/7FFioHUyF72nXVNAleIL5iEakZ8RICqRcEQD2apJGXZDSMWMpDFlOjmUOUvgH7Nibjg5Qa1JXri42Lo/qIKHIxdHRf8wfA63OHfjTOf0t1b0pB3i+320/fvn/dbjenWcgCc2jo1Gm8sDkpfpx6uocCz0Li888FKGVS209dt5gPP1/yVdh0ndfGh9nCxdJF6Rc6k7Hq3P0P9tke8Arss73sFdhnO9gTrKtwW9imjftzO/8D01pcdt8FAAA="
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|129.1|89.2|218.2|112 MB|JmdJVWiyZ0usapYMupQvkw==|
|_connect_|35.5|48.5|84|69.2 MB|0EJiTaqynnTfegVwwZ18vw==|
|_minimal_|29.9|44.5|74.4|68.1 MB|8zgTmtg8Drqiaq0JuwMtjg==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"578-Eo5l1UU8dI0/IL/31SZzbWW+WXI\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1400"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8YmFzZSBocmVmPSIvIj48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IGUwZWNmZmYwLTUwZTYtMTFlYS1hMzI2LWE5NGRhMDA0NzI2Yjwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDczZjRlMDMwNDQyY2NkYTM3ODYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"5df-K41IhULcLnxz+MXq5IOl4XvWQMA\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1503"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVmZXRjaCIgaHJlZj0iL19udXh0LzE5NDgxMGIwODQwYWFiNWQ5NzNmLmpzIj48bGluayByZWw9InByZWZldGNoIiBocmVmPSIvX251eHQvZGIwMzAyYTY0NGRiY2U5MmVhZTguanMiPjxzdHlsZSBkYXRhLXZ1ZS1zc3ItaWQ9IjEyNGUyODhjOjAiPi5udXh0LXByb2dyZXNze3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDoycHg7d2lkdGg6MDtvcGFjaXR5OjE7dHJhbnNpdGlvbjp3aWR0aCAuMXMsb3BhY2l0eSAuNHM7YmFja2dyb3VuZC1jb2xvcjojMDAwO3otaW5kZXg6OTk5OTk5fS5udXh0LXByb2dyZXNzLm51eHQtcHJvZ3Jlc3Mtbm90cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZX0ubnV4dC1wcm9ncmVzcy1mYWlsZWR7YmFja2dyb3VuZC1jb2xvcjpyZWR9PC9zdHlsZT4KICA8L2hlYWQ+CiAgPGJvZHkgPgogICAgPGRpdiBkYXRhLXNlcnZlci1yZW5kZXJlZD0idHJ1ZSIgaWQ9Il9fbnV4dCI+PCEtLS0tPjxkaXYgaWQ9Il9fbGF5b3V0Ij48ZGl2PjxkaXY+PGgxPkhpIGZyb20gc2VydmVyITwvaDE+IDxmaWd1cmU+PGltZyBzcmM9Ii9udXh0LWljb24ucG5nIiBzdHlsZT0iaGVpZ2h0OiA1MHB4Ij4gPGZpZ2NhcHRpb24+PGEgaHJlZj0iL2Fib3V0Ij5BYm91dDwvYT48L2ZpZ2NhcHRpb24+PC9maWd1cmU+IDxwPjxzbWFsbD51dWlkOiBlMzViMTljMC01MGU2LTExZWEtYTgzMy1jNzEyZDMxY2Q1NmE8L3NtYWxsPjwvcD48L2Rpdj4gPGZvb3Rlcj48c21hbGw+U2VydmVkIGJ5IGEgbnV4dC1sYW1iZGE8L3NtYWxsPjwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PjxzY3JpcHQ+d2luZG93Ll9fTlVYVF9fPXtsYXlvdXQ6ImRlZmF1bHQiLGRhdGE6W3tuYW1lOiJzZXJ2ZXIifV0sZXJyb3I6bnVsbCxzZXJ2ZXJSZW5kZXJlZDp0cnVlfTs8L3NjcmlwdD48c2NyaXB0IHNyYz0iL19udXh0LzQ1NmVlMTdhZTUxMTk3N2QwNGVkLmpzIiBkZWZlcj48L3NjcmlwdD48c2NyaXB0IHNyYz0iL19udXh0L2Q3MWMxZjdiZTQ4MzVmN2RkNzdiLmpzIiBkZWZlcj48L3NjcmlwdD48c2NyaXB0IHNyYz0iL19udXh0L2U4MzhkNTZiZWQ1NWQwNjViYjMwLmpzIiBkZWZlcj48L3NjcmlwdD48c2NyaXB0IHNyYz0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBkZWZlcj48L3NjcmlwdD4KICA8L2JvZHk+CjwvaHRtbD4K"
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"5df-JRra/U1Q3IuM7j04HXfu16VI3/M\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 1503
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/473f4e030442ccda3786.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><link rel=\"prefetch\" href=\"/_nuxt/194810b0840aab5d973f.js\"><link rel=\"prefetch\" href=\"/_nuxt/db0302a644dbce92eae8.js\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: e4b94a30-50e6-11ea-8d33-cb097af80d3e</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/473f4e030442ccda3786.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

## Route `/about`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|124.7|172.3|297|111 MB|bMTWAMTyIDhbslnt1CZiKA==|
|_connect_|36.4|128.1|164.5|71.4 MB|LE/OL/luD+vZHeAKrKsaqA==|
|_minimal_|33.5|136.3|169.8|71.8 MB|wpyJfE4+qJpPnsNcpYB97w==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "2875"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8YmFzZSBocmVmPSIvIj48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdiBjbGFzcz0iY29udGFpbmVyIj48aDE+QWJvdXQgZnJvbSBzZXJ2ZXI8L2gxPiA8dWw+PGxpPgogICAgICBzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdAogICAgPC9saT48bGk+CiAgICAgIHF1aSBlc3QgZXNzZQogICAgPC9saT48bGk+CiAgICAgIGVhIG1vbGVzdGlhcyBxdWFzaSBleGVyY2l0YXRpb25lbSByZXBlbGxhdCBxdWkgaXBzYSBzaXQgYXV0CiAgICA8L2xpPjxsaT4KICAgICAgZXVtIGV0IGVzdCBvY2NhZWNhdGkKICAgIDwvbGk+PGxpPgogICAgICBuZXNjaXVudCBxdWFzIG9kaW8KICAgIDwvbGk+PC91bD4gPHA+PGEgaHJlZj0iLyIgY2xhc3M9Im51eHQtbGluay1hY3RpdmUiPgogICAgICBCYWNrIHRvIGhvbWUgcGFnZQogICAgPC9hPjwvcD48L2Rpdj4gPGZvb3Rlcj48c21hbGw+U2VydmVkIGJ5IGEgbnV4dC1sYW1iZGE8L3NtYWxsPjwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PjxzY3JpcHQ+d2luZG93Ll9fTlVYVF9fPShmdW5jdGlvbihhKXtyZXR1cm4ge2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciIscG9zdHM6W3t1c2VySWQ6YSxpZDphLHRpdGxlOiJzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdCIsYm9keToicXVpYSBldCBzdXNjaXBpdFxuc3VzY2lwaXQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgZXhwZWRpdGEgZXQgY3VtXG5yZXByZWhlbmRlcml0IG1vbGVzdGlhZSB1dCB1dCBxdWFzIHRvdGFtXG5ub3N0cnVtIHJlcnVtIGVzdCBhdXRlbSBzdW50IHJlbSBldmVuaWV0IGFyY2hpdGVjdG8ifSx7dXNlcklkOmEsaWQ6Mix0aXRsZToicXVpIGVzdCBlc3NlIixib2R5OiJlc3QgcmVydW0gdGVtcG9yZSB2aXRhZVxuc2VxdWkgc2ludCBuaWhpbCByZXByZWhlbmRlcml0IGRvbG9yIGJlYXRhZSBlYSBkb2xvcmVzIG5lcXVlXG5mdWdpYXQgYmxhbmRpdGlpcyB2b2x1cHRhdGUgcG9ycm8gdmVsIG5paGlsIG1vbGVzdGlhZSB1dCByZWljaWVuZGlzXG5xdWkgYXBlcmlhbSBub24gZGViaXRpcyBwb3NzaW11cyBxdWkgbmVxdWUgbmlzaSBudWxsYSJ9LHt1c2VySWQ6YSxpZDozLHRpdGxlOiJlYSBtb2xlc3RpYXMgcXVhc2kgZXhlcmNpdGF0aW9uZW0gcmVwZWxsYXQgcXVpIGlwc2Egc2l0IGF1dCIsYm9keToiZXQgaXVzdG8gc2VkIHF1byBpdXJlXG52b2x1cHRhdGVtIG9jY2FlY2F0aSBvbW5pcyBlbGlnZW5kaSBhdXQgYWRcbnZvbHVwdGF0ZW0gZG9sb3JpYnVzIHZlbCBhY2N1c2FudGl1bSBxdWlzIHBhcmlhdHVyXG5tb2xlc3RpYWUgcG9ycm8gZWl1cyBvZGlvIGV0IGxhYm9yZSBldCB2ZWxpdCBhdXQifSx7dXNlcklkOmEsaWQ6NCx0aXRsZToiZXVtIGV0IGVzdCBvY2NhZWNhdGkiLGJvZHk6InVsbGFtIGV0IHNhZXBlIHJlaWNpZW5kaXMgdm9sdXB0YXRlbSBhZGlwaXNjaVxuc2l0IGFtZXQgYXV0ZW0gYXNzdW1lbmRhIHByb3ZpZGVudCByZXJ1bSBjdWxwYVxucXVpcyBoaWMgY29tbW9kaSBuZXNjaXVudCByZW0gdGVuZXR1ciBkb2xvcmVtcXVlIGlwc2FtIGl1cmVcbnF1aXMgc3VudCB2b2x1cHRhdGVtIHJlcnVtIGlsbG8gdmVsaXQifSx7dXNlcklkOmEsaWQ6NSx0aXRsZToibmVzY2l1bnQgcXVhcyBvZGlvIixib2R5OiJyZXB1ZGlhbmRhZSB2ZW5pYW0gcXVhZXJhdCBzdW50IHNlZFxuYWxpYXMgYXV0IGZ1Z2lhdCBzaXQgYXV0ZW0gc2VkIGVzdFxudm9sdXB0YXRlbSBvbW5pcyBwb3NzaW11cyBlc3NlIHZvbHVwdGF0aWJ1cyBxdWlzXG5lc3QgYXV0IHRlbmV0dXIgZG9sb3IgbmVxdWUifV19XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9fSgxKSk7PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC9lODM4ZDU2YmVkNTVkMDY1YmIzMC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC80NzNmNGUwMzA0NDJjY2RhMzc4Ni5qcyIgZGVmZXI+PC9zY3JpcHQ+CiAgPC9ib2R5Pgo8L2h0bWw+Cg=="
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
    "content-length": "2978"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVmZXRjaCIgaHJlZj0iL19udXh0L2Q3MWMxZjdiZTQ4MzVmN2RkNzdiLmpzIj48bGluayByZWw9InByZWZldGNoIiBocmVmPSIvX251eHQvZGIwMzAyYTY0NGRiY2U5MmVhZTguanMiPjxzdHlsZSBkYXRhLXZ1ZS1zc3ItaWQ9IjEyNGUyODhjOjAiPi5udXh0LXByb2dyZXNze3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDoycHg7d2lkdGg6MDtvcGFjaXR5OjE7dHJhbnNpdGlvbjp3aWR0aCAuMXMsb3BhY2l0eSAuNHM7YmFja2dyb3VuZC1jb2xvcjojMDAwO3otaW5kZXg6OTk5OTk5fS5udXh0LXByb2dyZXNzLm51eHQtcHJvZ3Jlc3Mtbm90cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZX0ubnV4dC1wcm9ncmVzcy1mYWlsZWR7YmFja2dyb3VuZC1jb2xvcjpyZWR9PC9zdHlsZT4KICA8L2hlYWQ+CiAgPGJvZHkgPgogICAgPGRpdiBkYXRhLXNlcnZlci1yZW5kZXJlZD0idHJ1ZSIgaWQ9Il9fbnV4dCI+PCEtLS0tPjxkaXYgaWQ9Il9fbGF5b3V0Ij48ZGl2PjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+PGgxPkFib3V0IGZyb20gc2VydmVyPC9oMT4gPHVsPjxsaT4KICAgICAgc3VudCBhdXQgZmFjZXJlIHJlcGVsbGF0IHByb3ZpZGVudCBvY2NhZWNhdGkgZXhjZXB0dXJpIG9wdGlvIHJlcHJlaGVuZGVyaXQKICAgIDwvbGk+PGxpPgogICAgICBxdWkgZXN0IGVzc2UKICAgIDwvbGk+PGxpPgogICAgICBlYSBtb2xlc3RpYXMgcXVhc2kgZXhlcmNpdGF0aW9uZW0gcmVwZWxsYXQgcXVpIGlwc2Egc2l0IGF1dAogICAgPC9saT48bGk+CiAgICAgIGV1bSBldCBlc3Qgb2NjYWVjYXRpCiAgICA8L2xpPjxsaT4KICAgICAgbmVzY2l1bnQgcXVhcyBvZGlvCiAgICA8L2xpPjwvdWw+IDxwPjxhIGhyZWY9Ii8iIGNsYXNzPSJudXh0LWxpbmstYWN0aXZlIj4KICAgICAgQmFjayB0byBob21lIHBhZ2UKICAgIDwvYT48L3A+PC9kaXY+IDxmb290ZXI+PHNtYWxsPlNlcnZlZCBieSBhIG51eHQtbGFtYmRhPC9zbWFsbD48L2Zvb3Rlcj48L2Rpdj48L2Rpdj48L2Rpdj48c2NyaXB0PndpbmRvdy5fX05VWFRfXz0oZnVuY3Rpb24oYSl7cmV0dXJuIHtsYXlvdXQ6ImRlZmF1bHQiLGRhdGE6W3tuYW1lOiJzZXJ2ZXIiLHBvc3RzOlt7dXNlcklkOmEsaWQ6YSx0aXRsZToic3VudCBhdXQgZmFjZXJlIHJlcGVsbGF0IHByb3ZpZGVudCBvY2NhZWNhdGkgZXhjZXB0dXJpIG9wdGlvIHJlcHJlaGVuZGVyaXQiLGJvZHk6InF1aWEgZXQgc3VzY2lwaXRcbnN1c2NpcGl0IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIGV4cGVkaXRhIGV0IGN1bVxucmVwcmVoZW5kZXJpdCBtb2xlc3RpYWUgdXQgdXQgcXVhcyB0b3RhbVxubm9zdHJ1bSByZXJ1bSBlc3QgYXV0ZW0gc3VudCByZW0gZXZlbmlldCBhcmNoaXRlY3RvIn0se3VzZXJJZDphLGlkOjIsdGl0bGU6InF1aSBlc3QgZXNzZSIsYm9keToiZXN0IHJlcnVtIHRlbXBvcmUgdml0YWVcbnNlcXVpIHNpbnQgbmloaWwgcmVwcmVoZW5kZXJpdCBkb2xvciBiZWF0YWUgZWEgZG9sb3JlcyBuZXF1ZVxuZnVnaWF0IGJsYW5kaXRpaXMgdm9sdXB0YXRlIHBvcnJvIHZlbCBuaWhpbCBtb2xlc3RpYWUgdXQgcmVpY2llbmRpc1xucXVpIGFwZXJpYW0gbm9uIGRlYml0aXMgcG9zc2ltdXMgcXVpIG5lcXVlIG5pc2kgbnVsbGEifSx7dXNlcklkOmEsaWQ6Myx0aXRsZToiZWEgbW9sZXN0aWFzIHF1YXNpIGV4ZXJjaXRhdGlvbmVtIHJlcGVsbGF0IHF1aSBpcHNhIHNpdCBhdXQiLGJvZHk6ImV0IGl1c3RvIHNlZCBxdW8gaXVyZVxudm9sdXB0YXRlbSBvY2NhZWNhdGkgb21uaXMgZWxpZ2VuZGkgYXV0IGFkXG52b2x1cHRhdGVtIGRvbG9yaWJ1cyB2ZWwgYWNjdXNhbnRpdW0gcXVpcyBwYXJpYXR1clxubW9sZXN0aWFlIHBvcnJvIGVpdXMgb2RpbyBldCBsYWJvcmUgZXQgdmVsaXQgYXV0In0se3VzZXJJZDphLGlkOjQsdGl0bGU6ImV1bSBldCBlc3Qgb2NjYWVjYXRpIixib2R5OiJ1bGxhbSBldCBzYWVwZSByZWljaWVuZGlzIHZvbHVwdGF0ZW0gYWRpcGlzY2lcbnNpdCBhbWV0IGF1dGVtIGFzc3VtZW5kYSBwcm92aWRlbnQgcmVydW0gY3VscGFcbnF1aXMgaGljIGNvbW1vZGkgbmVzY2l1bnQgcmVtIHRlbmV0dXIgZG9sb3JlbXF1ZSBpcHNhbSBpdXJlXG5xdWlzIHN1bnQgdm9sdXB0YXRlbSByZXJ1bSBpbGxvIHZlbGl0In0se3VzZXJJZDphLGlkOjUsdGl0bGU6Im5lc2NpdW50IHF1YXMgb2RpbyIsYm9keToicmVwdWRpYW5kYWUgdmVuaWFtIHF1YWVyYXQgc3VudCBzZWRcbmFsaWFzIGF1dCBmdWdpYXQgc2l0IGF1dGVtIHNlZCBlc3RcbnZvbHVwdGF0ZW0gb21uaXMgcG9zc2ltdXMgZXNzZSB2b2x1cHRhdGlidXMgcXVpc1xuZXN0IGF1dCB0ZW5ldHVyIGRvbG9yIG5lcXVlIn1dfV0sZXJyb3I6bnVsbCxzZXJ2ZXJSZW5kZXJlZDp0cnVlfX0oMSkpOzwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvMTk0ODEwYjA4NDBhYWI1ZDk3M2YuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDczZjRlMDMwNDQyY2NkYTM3ODYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
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
    "content-length": 2978
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/473f4e030442ccda3786.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/194810b0840aab5d973f.js\" as=\"script\"><link rel=\"prefetch\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\"><link rel=\"prefetch\" href=\"/_nuxt/db0302a644dbce92eae8.js\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div class=\"container\"><h1>About from server</h1> <ul><li>\n      sunt aut facere repellat provident occaecati excepturi optio reprehenderit\n    </li><li>\n      qui est esse\n    </li><li>\n      ea molestias quasi exercitationem repellat qui ipsa sit aut\n    </li><li>\n      eum et est occaecati\n    </li><li>\n      nesciunt quas odio\n    </li></ul> <p><a href=\"/\" class=\"nuxt-link-active\">\n      Back to home page\n    </a></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__=(function(a){return {layout:\"default\",data:[{name:\"server\",posts:[{userId:a,id:a,title:\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",body:\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{userId:a,id:2,title:\"qui est esse\",body:\"est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla\"},{userId:a,id:3,title:\"ea molestias quasi exercitationem repellat qui ipsa sit aut\",body:\"et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut\"},{userId:a,id:4,title:\"eum et est occaecati\",body:\"ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit\"},{userId:a,id:5,title:\"nesciunt quas odio\",body:\"repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque\"}]}],error:null,serverRendered:true}}(1));</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/194810b0840aab5d973f.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/473f4e030442ccda3786.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|127|183.1|310.1|101 MB|NO7KOeUecHwpjE9ks7fX+A==|
|_connect_|44.3|144.3|188.5|74.9 MB|cKVuHrT7eZ6b/D/AFMD6rw==|
|_minimal_|29.9|163.7|193.6|71.8 MB|cKVuHrT7eZ6b/D/AFMD6rw==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"b3b-BznWpKGeLeQrKSnh8Gakm+M9W9Q\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA61WS28bNxC+51cw20sCSNbKlmx5JQtob7300AdQoAqMWXJkseGSaz4Uu4b+e2e4WllynDZBK0ArLjnPb74ZcfFWORkfWxSb2JjlmwX/CAURhna4QVDDEPzyjRALfhG8onUNgRQ8rm+KUbFcGG0/Co/mpmjp6UAV/eGtTQ9xNJleIo6vAKfj8fXVlSonqM7+DIWAcFME6XUbv8IKzi5manpZo5pOVXk5reuL8tutTK4u1hMsL8rJ5FxKBRdXs8tvtzK+nszGZV3OJiVAPVXXZPVzKyE+GuzA3CZkJIda3RTj8wmez2ayKovlGZsbtt7deQzhqXVBR+1stdYPqObRtVU5N7iO9OP13YZ/N5gX5+3D/JNWcUNbrgWp42M1nkcPdm8iH4qzcRjsj8XZJMxrkB/vvEtWDaUzzlfflWU5/2uorcKH6jp/dqdRnb4NrXt28nTkzzqLLzSHa9AG1dNnTj2q3WKU8cnkGjG78qp26rGnmdLbDr2Afot+6JGCJNWbIvqEhWAwb3NBCOy3Q/oss063b+DRJT6hrW5fGghUH+lsBG3R09lmvPy+JjGx9q4RnR+KZrwUi2SYB10oQoRkowAWBEkxEDlaNAaioFy3WiGdOikBJUQt8EFiG5PXwrWEDQt73OTodexyG5HpI/P3ibRCpG/AVwUQROMMiWgIJA2BvaCnugKjj81zRGxLtwEEFYZDft1eagTG7PMQ96uCFoPUnDw7FU5pdyQ2IpDEol0u4DAOepQzEbiPhiCj3mLRG/yByCCiExvXoGjhrs8XyBxZGnG5xGLtXERPPdSAMctfuDBK1I8CRGcYmloBUSgfL0a9eNY+eXbduPxEBHefzm5vf/rt919vb2/erZOVjNw7eP/kkYplxVNHmapQuIZkYjFg9lV/PFlosCo6dhQDatIYaDfRxo+qgoHmR9TRsND/xpNiwL1QFVRO4FKFRIVodVzZfkXyMgWwClAQqQPeJ/KePNltUREzWE2mZmVPDB+IhILiTPvKRheBJC0l5xOziZ9MD0qG2JXz8rTALVpNdsHLjY4ooyt2gxMsznssjkndZ8PvnW2y2jpCaEuB4ipHr4my5MbqjTanYAjFc0PUSAVBbob8joHoeZ9Ie53uNIFcG0KDxpEOYutMaqk5iGPOeye2aPaGT9L3qKUmJzqsLAcALbmDRtA0EwprshXIQAi6SSF3VnZIlqgBbaLKvsz+os/+P3TsAawodArUK4HIf58cvXlK9pBac8Ql11BMAo2+42wyBUGdyGbIdE15MBYgM3eiplKQf8oSKHFiz8o+A9RBhxRE7nzmk4Gaq0YrsrIP9wUEkwMErwyZPjfGLp8GIBiO6iCOQgZFPCeyr2xGpsGejjRiUkPicNRXHa1kMi3kWgax0ZIao2ko9uc5xiSOaLnl9yxquKKMf7MHOCtnxh/F0pnXxrgu85dZT/usP5+Yfc5U8KR017DcRsDQA3qInTcq88qCYcLkEdKRek8KbkKiAYF5yoBc9wNFudcOUediczIru+/k08w7Mhe7D7sPA6RK+4opPegG3c/7f9uK/2x3u3fj9+/nNHC7cbofqyJ4+e/XPBqneTb/g+4XL1RfofvFi+FX6H7xOvhCN19SuIh0RR51V+W/AcRmpho7CwAA"
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"ba2-1Js4OZVJM5Uhy5R68fdgpe9VYUI\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA61W224bNxB9z1ew25cEkKyLV5YsyQLat770oRegQBUYs+TIYsMl17wodg39e2e4WllynCZBK0Ar7nLmcObMmdEuv1NOxscGxTbWZvVmyT9CQYS+7W8RVD8Ev3ojxJJvBK9obbT9IDyam6KhqwNViK3HzU0xuLXpIQ7KyRXiaAo4GY2up1M1LFFd/BUKAeGmCNLrJharL6Lg7HKmJlcVqslEDa8mVXU5/HaUcnq5KXF4OSzLsZQKLqezq29HGV2Xs9GwGs7KIUA1UdeE+gWUDUa5fQGjpiM52kwrLGeXk81Uqem0Ypivca0ohzFclaWqJF6PEXDWuob4aLCt2S4hF6yv1U0xGpc4ns3kfFisLhii33h35zGEp8YFHbWz841+QLWIrpkPFwY3kX68vtvy7xbzYtw8LD5qFbf0yDUgdXycjxbRgz1A5E1xMQq9w7a4KMOiAvnhzrtkVV864/z8++FwuPi7r63Ch/l1/uzPozq/61v3fMjTyXnWWXzh2d+ANqiePjnUo9ovB5mfrOEBizivKqceOzUrvWvZC+h36PseKUhyvSmiT1gIJvM2F4HI/q5Pn1X2aZ8beHSJd+hR+1waCKQK6WwEbdHT3na0+qEiM7HxrhbtORTNaCWWyXDx21CECMlGAWwIkmIgRTRoDERBue60Qtp1UgJKiFrgg8QmJq+Fa4gbNva4zdHr2OY2IOgT+PtEXiHSN+CrBgiidoZMNASyhsCnoKe6ArOP9XNEjKWbAIIKwyG/jpdqgTGfeYz7VUOLQWpOng8VTml3YjYgksSyWS2h64miYzkLgZunDzLqHRYd4I8kBhGd2LoaRQN3Xb5AcIQ04HKJ5ca5iJ56qAZjVr9yYZSoHgWIFhjqSgFJKG8vB5159j67tjNg9ZEE7j5e3N7+/Psfv93e3rzdJCuZubfw7skjFcuKp1Yy80LhBpKJRY/VN//zyUKN86JVR9GjJo2BniZ68JOaQ0/zJepo2Oh/00nR416YF1RO4FKFRIVodFzbbkX2MgWwClCQqAPeJzo9ecJtUJEy2E2mem3PgI9CQkFxpkNlo4tAlpaS84nVxFeWByVD6sp5eVrgDq0mXPByqyPK6Ip974yLccfFqai7bPi+xSbUxhFDOwoU1zl6TZKlY6zeanNOhlA8N0SFVBDkZsj3GEie94m8N+lOE8mVITZoHOkgds6khpqDNOa8d2KH5gB8lr5HLTUdosPacgDQ0HFQC5pmQmFFWIEAQtB1Crmz8oGERA1oE1X2ZfaXXfb/oWOPZEWhU6BeCST+++TozlOyx9TqEy25mmISaPQdZ5MlCOrMNlOmK8qDuQCZtRM1lYLOpyyBEif1rO0zQS11SEHkzmc9Gai4arQilEO4LygojxS8MmS63Ji7vBuAaDipgzgJGRTpnMS+tpmZGjs50ohJNZnDSV+1spLJNJBrGcRWS2qMuqbYn+cYizii5ZY/qKjmijL/9YHg7JwVfxJLC6+NcW3mL7OedFl/OjG7nKngSem2YbmNgKkH9BDb06jMawuGBZNHSCvqgyi4CUkGROa5AnLdjxLlXjtGnYvNyaztoZPPM2/FXOzf79/3kCrt5yzpXjvofjn82875z3a/fzt6925BA7cdp4exKoKXX365pHGaZ/O/+H72Ne4rfD/7OvoVvp99CX3hm19SuIj0Jj5o38j/AWuSyiaiCwAA"
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"ba2-1Js4OZVJM5Uhy5R68fdgpe9VYUI\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA61W224bNxB9z1ew25cEkKyLV5YsyQLat770oRegQBUYs+TIYsMl17wodg39e2e4WllynCZBK0Ar7nLmcObMmdEuv1NOxscGxTbWZvVmyT9CQYS+7W8RVD8Ev3ojxJJvBK9obbT9IDyam6KhqwNViK3HzU0xuLXpIQ7KyRXiaAo4GY2up1M1LFFd/BUKAeGmCNLrJharL6Lg7HKmJlcVqslEDa8mVXU5/HaUcnq5KXF4OSzLsZQKLqezq29HGV2Xs9GwGs7KIUA1UdeE+gWUDUa5fQGjpiM52kwrLGeXk81Uqem0Ypivca0ohzFclaWqJF6PEXDWuob4aLCt2S4hF6yv1U0xGpc4ns3kfFisLhii33h35zGEp8YFHbWz841+QLWIrpkPFwY3kX68vtvy7xbzYtw8LD5qFbf0yDUgdXycjxbRgz1A5E1xMQq9w7a4KMOiAvnhzrtkVV864/z8++FwuPi7r63Ch/l1/uzPozq/61v3fMjTyXnWWXzh2d+ANqiePjnUo9ovB5mfrOEBizivKqceOzUrvWvZC+h36PseKUhyvSmiT1gIJvM2F4HI/q5Pn1X2aZ8beHSJd+hR+1waCKQK6WwEbdHT3na0+qEiM7HxrhbtORTNaCWWyXDx21CECMlGAWwIkmIgRTRoDERBue60Qtp1UgJKiFrgg8QmJq+Fa4gbNva4zdHr2OY2IOgT+PtEXiHSN+CrBgiidoZMNASyhsCnoKe6ArOP9XNEjKWbAIIKwyG/jpdqgTGfeYz7VUOLQWpOng8VTml3YjYgksSyWS2h64miYzkLgZunDzLqHRYd4I8kBhGd2LoaRQN3Xb5AcIQ04HKJ5ca5iJ56qAZjVr9yYZSoHgWIFhjqSgFJKG8vB5159j67tjNg9ZEE7j5e3N7+/Psfv93e3rzdJCuZubfw7skjFcuKp1Yy80LhBpKJRY/VN//zyUKN86JVR9GjJo2BniZ68JOaQ0/zJepo2Oh/00nR416YF1RO4FKFRIVodFzbbkX2MgWwClCQqAPeJzo9ecJtUJEy2E2mem3PgI9CQkFxpkNlo4tAlpaS84nVxFeWByVD6sp5eVrgDq0mXPByqyPK6Ip974yLccfFqai7bPi+xSbUxhFDOwoU1zl6TZKlY6zeanNOhlA8N0SFVBDkZsj3GEie94m8N+lOE8mVITZoHOkgds6khpqDNOa8d2KH5gB8lr5HLTUdosPacgDQ0HFQC5pmQmFFWIEAQtB1Crmz8oGERA1oE1X2ZfaXXfb/oWOPZEWhU6BeCST+++TozlOyx9TqEy25mmISaPQdZ5MlCOrMNlOmK8qDuQCZtRM1lYLOpyyBEif1rO0zQS11SEHkzmc9Gai4arQilEO4LygojxS8MmS63Ji7vBuAaDipgzgJGRTpnMS+tpmZGjs50ohJNZnDSV+1spLJNJBrGcRWS2qMuqbYn+cYizii5ZY/qKjmijL/9YHg7JwVfxJLC6+NcW3mL7OedFl/OjG7nKngSem2YbmNgKkH9BDb06jMawuGBZNHSCvqgyi4CUkGROa5AnLdjxLlXjtGnYvNyaztoZPPM2/FXOzf79/3kCrt5yzpXjvofjn82875z3a/fzt6925BA7cdp4exKoKXX365pHGaZ/O/+H72Ne4rfD/7OvoVvp99CX3hm19SuIj0Jj5o38j/AWuSyiaiCwAA"
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|124.9|575.6|700.6|116 MB|TY8mMdE6lePYwHgjmdmntQ==|
|_connect_|36.2|128.3|164.5|71.2 MB|+Q7GczZ3nx2bqhhe79V+aA==|
|_minimal_|31.1|132.5|163.6|70 MB|QMKeb8I/0rdT5W6NTHFMfA==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"b3b-BznWpKGeLeQrKSnh8Gakm+M9W9Q\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "2875"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8YmFzZSBocmVmPSIvIj48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdiBjbGFzcz0iY29udGFpbmVyIj48aDE+QWJvdXQgZnJvbSBzZXJ2ZXI8L2gxPiA8dWw+PGxpPgogICAgICBzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdAogICAgPC9saT48bGk+CiAgICAgIHF1aSBlc3QgZXNzZQogICAgPC9saT48bGk+CiAgICAgIGVhIG1vbGVzdGlhcyBxdWFzaSBleGVyY2l0YXRpb25lbSByZXBlbGxhdCBxdWkgaXBzYSBzaXQgYXV0CiAgICA8L2xpPjxsaT4KICAgICAgZXVtIGV0IGVzdCBvY2NhZWNhdGkKICAgIDwvbGk+PGxpPgogICAgICBuZXNjaXVudCBxdWFzIG9kaW8KICAgIDwvbGk+PC91bD4gPHA+PGEgaHJlZj0iLyIgY2xhc3M9Im51eHQtbGluay1hY3RpdmUiPgogICAgICBCYWNrIHRvIGhvbWUgcGFnZQogICAgPC9hPjwvcD48L2Rpdj4gPGZvb3Rlcj48c21hbGw+U2VydmVkIGJ5IGEgbnV4dC1sYW1iZGE8L3NtYWxsPjwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PjxzY3JpcHQ+d2luZG93Ll9fTlVYVF9fPShmdW5jdGlvbihhKXtyZXR1cm4ge2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciIscG9zdHM6W3t1c2VySWQ6YSxpZDphLHRpdGxlOiJzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdCIsYm9keToicXVpYSBldCBzdXNjaXBpdFxuc3VzY2lwaXQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgZXhwZWRpdGEgZXQgY3VtXG5yZXByZWhlbmRlcml0IG1vbGVzdGlhZSB1dCB1dCBxdWFzIHRvdGFtXG5ub3N0cnVtIHJlcnVtIGVzdCBhdXRlbSBzdW50IHJlbSBldmVuaWV0IGFyY2hpdGVjdG8ifSx7dXNlcklkOmEsaWQ6Mix0aXRsZToicXVpIGVzdCBlc3NlIixib2R5OiJlc3QgcmVydW0gdGVtcG9yZSB2aXRhZVxuc2VxdWkgc2ludCBuaWhpbCByZXByZWhlbmRlcml0IGRvbG9yIGJlYXRhZSBlYSBkb2xvcmVzIG5lcXVlXG5mdWdpYXQgYmxhbmRpdGlpcyB2b2x1cHRhdGUgcG9ycm8gdmVsIG5paGlsIG1vbGVzdGlhZSB1dCByZWljaWVuZGlzXG5xdWkgYXBlcmlhbSBub24gZGViaXRpcyBwb3NzaW11cyBxdWkgbmVxdWUgbmlzaSBudWxsYSJ9LHt1c2VySWQ6YSxpZDozLHRpdGxlOiJlYSBtb2xlc3RpYXMgcXVhc2kgZXhlcmNpdGF0aW9uZW0gcmVwZWxsYXQgcXVpIGlwc2Egc2l0IGF1dCIsYm9keToiZXQgaXVzdG8gc2VkIHF1byBpdXJlXG52b2x1cHRhdGVtIG9jY2FlY2F0aSBvbW5pcyBlbGlnZW5kaSBhdXQgYWRcbnZvbHVwdGF0ZW0gZG9sb3JpYnVzIHZlbCBhY2N1c2FudGl1bSBxdWlzIHBhcmlhdHVyXG5tb2xlc3RpYWUgcG9ycm8gZWl1cyBvZGlvIGV0IGxhYm9yZSBldCB2ZWxpdCBhdXQifSx7dXNlcklkOmEsaWQ6NCx0aXRsZToiZXVtIGV0IGVzdCBvY2NhZWNhdGkiLGJvZHk6InVsbGFtIGV0IHNhZXBlIHJlaWNpZW5kaXMgdm9sdXB0YXRlbSBhZGlwaXNjaVxuc2l0IGFtZXQgYXV0ZW0gYXNzdW1lbmRhIHByb3ZpZGVudCByZXJ1bSBjdWxwYVxucXVpcyBoaWMgY29tbW9kaSBuZXNjaXVudCByZW0gdGVuZXR1ciBkb2xvcmVtcXVlIGlwc2FtIGl1cmVcbnF1aXMgc3VudCB2b2x1cHRhdGVtIHJlcnVtIGlsbG8gdmVsaXQifSx7dXNlcklkOmEsaWQ6NSx0aXRsZToibmVzY2l1bnQgcXVhcyBvZGlvIixib2R5OiJyZXB1ZGlhbmRhZSB2ZW5pYW0gcXVhZXJhdCBzdW50IHNlZFxuYWxpYXMgYXV0IGZ1Z2lhdCBzaXQgYXV0ZW0gc2VkIGVzdFxudm9sdXB0YXRlbSBvbW5pcyBwb3NzaW11cyBlc3NlIHZvbHVwdGF0aWJ1cyBxdWlzXG5lc3QgYXV0IHRlbmV0dXIgZG9sb3IgbmVxdWUifV19XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9fSgxKSk7PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC9lODM4ZDU2YmVkNTVkMDY1YmIzMC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC80NzNmNGUwMzA0NDJjY2RhMzc4Ni5qcyIgZGVmZXI+PC9zY3JpcHQ+CiAgPC9ib2R5Pgo8L2h0bWw+Cg=="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"ba2-1Js4OZVJM5Uhy5R68fdgpe9VYUI\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "2978"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzQ3M2Y0ZTAzMDQ0MmNjZGEzNzg2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVmZXRjaCIgaHJlZj0iL19udXh0L2Q3MWMxZjdiZTQ4MzVmN2RkNzdiLmpzIj48bGluayByZWw9InByZWZldGNoIiBocmVmPSIvX251eHQvZGIwMzAyYTY0NGRiY2U5MmVhZTguanMiPjxzdHlsZSBkYXRhLXZ1ZS1zc3ItaWQ9IjEyNGUyODhjOjAiPi5udXh0LXByb2dyZXNze3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDoycHg7d2lkdGg6MDtvcGFjaXR5OjE7dHJhbnNpdGlvbjp3aWR0aCAuMXMsb3BhY2l0eSAuNHM7YmFja2dyb3VuZC1jb2xvcjojMDAwO3otaW5kZXg6OTk5OTk5fS5udXh0LXByb2dyZXNzLm51eHQtcHJvZ3Jlc3Mtbm90cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZX0ubnV4dC1wcm9ncmVzcy1mYWlsZWR7YmFja2dyb3VuZC1jb2xvcjpyZWR9PC9zdHlsZT4KICA8L2hlYWQ+CiAgPGJvZHkgPgogICAgPGRpdiBkYXRhLXNlcnZlci1yZW5kZXJlZD0idHJ1ZSIgaWQ9Il9fbnV4dCI+PCEtLS0tPjxkaXYgaWQ9Il9fbGF5b3V0Ij48ZGl2PjxkaXYgY2xhc3M9ImNvbnRhaW5lciI+PGgxPkFib3V0IGZyb20gc2VydmVyPC9oMT4gPHVsPjxsaT4KICAgICAgc3VudCBhdXQgZmFjZXJlIHJlcGVsbGF0IHByb3ZpZGVudCBvY2NhZWNhdGkgZXhjZXB0dXJpIG9wdGlvIHJlcHJlaGVuZGVyaXQKICAgIDwvbGk+PGxpPgogICAgICBxdWkgZXN0IGVzc2UKICAgIDwvbGk+PGxpPgogICAgICBlYSBtb2xlc3RpYXMgcXVhc2kgZXhlcmNpdGF0aW9uZW0gcmVwZWxsYXQgcXVpIGlwc2Egc2l0IGF1dAogICAgPC9saT48bGk+CiAgICAgIGV1bSBldCBlc3Qgb2NjYWVjYXRpCiAgICA8L2xpPjxsaT4KICAgICAgbmVzY2l1bnQgcXVhcyBvZGlvCiAgICA8L2xpPjwvdWw+IDxwPjxhIGhyZWY9Ii8iIGNsYXNzPSJudXh0LWxpbmstYWN0aXZlIj4KICAgICAgQmFjayB0byBob21lIHBhZ2UKICAgIDwvYT48L3A+PC9kaXY+IDxmb290ZXI+PHNtYWxsPlNlcnZlZCBieSBhIG51eHQtbGFtYmRhPC9zbWFsbD48L2Zvb3Rlcj48L2Rpdj48L2Rpdj48L2Rpdj48c2NyaXB0PndpbmRvdy5fX05VWFRfXz0oZnVuY3Rpb24oYSl7cmV0dXJuIHtsYXlvdXQ6ImRlZmF1bHQiLGRhdGE6W3tuYW1lOiJzZXJ2ZXIiLHBvc3RzOlt7dXNlcklkOmEsaWQ6YSx0aXRsZToic3VudCBhdXQgZmFjZXJlIHJlcGVsbGF0IHByb3ZpZGVudCBvY2NhZWNhdGkgZXhjZXB0dXJpIG9wdGlvIHJlcHJlaGVuZGVyaXQiLGJvZHk6InF1aWEgZXQgc3VzY2lwaXRcbnN1c2NpcGl0IHJlY3VzYW5kYWUgY29uc2VxdXVudHVyIGV4cGVkaXRhIGV0IGN1bVxucmVwcmVoZW5kZXJpdCBtb2xlc3RpYWUgdXQgdXQgcXVhcyB0b3RhbVxubm9zdHJ1bSByZXJ1bSBlc3QgYXV0ZW0gc3VudCByZW0gZXZlbmlldCBhcmNoaXRlY3RvIn0se3VzZXJJZDphLGlkOjIsdGl0bGU6InF1aSBlc3QgZXNzZSIsYm9keToiZXN0IHJlcnVtIHRlbXBvcmUgdml0YWVcbnNlcXVpIHNpbnQgbmloaWwgcmVwcmVoZW5kZXJpdCBkb2xvciBiZWF0YWUgZWEgZG9sb3JlcyBuZXF1ZVxuZnVnaWF0IGJsYW5kaXRpaXMgdm9sdXB0YXRlIHBvcnJvIHZlbCBuaWhpbCBtb2xlc3RpYWUgdXQgcmVpY2llbmRpc1xucXVpIGFwZXJpYW0gbm9uIGRlYml0aXMgcG9zc2ltdXMgcXVpIG5lcXVlIG5pc2kgbnVsbGEifSx7dXNlcklkOmEsaWQ6Myx0aXRsZToiZWEgbW9sZXN0aWFzIHF1YXNpIGV4ZXJjaXRhdGlvbmVtIHJlcGVsbGF0IHF1aSBpcHNhIHNpdCBhdXQiLGJvZHk6ImV0IGl1c3RvIHNlZCBxdW8gaXVyZVxudm9sdXB0YXRlbSBvY2NhZWNhdGkgb21uaXMgZWxpZ2VuZGkgYXV0IGFkXG52b2x1cHRhdGVtIGRvbG9yaWJ1cyB2ZWwgYWNjdXNhbnRpdW0gcXVpcyBwYXJpYXR1clxubW9sZXN0aWFlIHBvcnJvIGVpdXMgb2RpbyBldCBsYWJvcmUgZXQgdmVsaXQgYXV0In0se3VzZXJJZDphLGlkOjQsdGl0bGU6ImV1bSBldCBlc3Qgb2NjYWVjYXRpIixib2R5OiJ1bGxhbSBldCBzYWVwZSByZWljaWVuZGlzIHZvbHVwdGF0ZW0gYWRpcGlzY2lcbnNpdCBhbWV0IGF1dGVtIGFzc3VtZW5kYSBwcm92aWRlbnQgcmVydW0gY3VscGFcbnF1aXMgaGljIGNvbW1vZGkgbmVzY2l1bnQgcmVtIHRlbmV0dXIgZG9sb3JlbXF1ZSBpcHNhbSBpdXJlXG5xdWlzIHN1bnQgdm9sdXB0YXRlbSByZXJ1bSBpbGxvIHZlbGl0In0se3VzZXJJZDphLGlkOjUsdGl0bGU6Im5lc2NpdW50IHF1YXMgb2RpbyIsYm9keToicmVwdWRpYW5kYWUgdmVuaWFtIHF1YWVyYXQgc3VudCBzZWRcbmFsaWFzIGF1dCBmdWdpYXQgc2l0IGF1dGVtIHNlZCBlc3RcbnZvbHVwdGF0ZW0gb21uaXMgcG9zc2ltdXMgZXNzZSB2b2x1cHRhdGlidXMgcXVpc1xuZXN0IGF1dCB0ZW5ldHVyIGRvbG9yIG5lcXVlIn1dfV0sZXJyb3I6bnVsbCxzZXJ2ZXJSZW5kZXJlZDp0cnVlfX0oMSkpOzwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvMTk0ODEwYjA4NDBhYWI1ZDk3M2YuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDczZjRlMDMwNDQyY2NkYTM3ODYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"ba2-1Js4OZVJM5Uhy5R68fdgpe9VYUI\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 2978
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/473f4e030442ccda3786.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/194810b0840aab5d973f.js\" as=\"script\"><link rel=\"prefetch\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\"><link rel=\"prefetch\" href=\"/_nuxt/db0302a644dbce92eae8.js\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div class=\"container\"><h1>About from server</h1> <ul><li>\n      sunt aut facere repellat provident occaecati excepturi optio reprehenderit\n    </li><li>\n      qui est esse\n    </li><li>\n      ea molestias quasi exercitationem repellat qui ipsa sit aut\n    </li><li>\n      eum et est occaecati\n    </li><li>\n      nesciunt quas odio\n    </li></ul> <p><a href=\"/\" class=\"nuxt-link-active\">\n      Back to home page\n    </a></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__=(function(a){return {layout:\"default\",data:[{name:\"server\",posts:[{userId:a,id:a,title:\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",body:\"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"},{userId:a,id:2,title:\"qui est esse\",body:\"est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla\"},{userId:a,id:3,title:\"ea molestias quasi exercitationem repellat qui ipsa sit aut\",body:\"et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut\"},{userId:a,id:4,title:\"eum et est occaecati\",body:\"ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit\"},{userId:a,id:5,title:\"nesciunt quas odio\",body:\"repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque\"}]}],error:null,serverRendered:true}}(1));</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/194810b0840aab5d973f.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/473f4e030442ccda3786.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

## Route `/redirect`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|127.9|76.1|204|104 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|35.1|40.9|76|68.9 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|32.9|40.3|73.2|70.8 MB|atSW0WUyEvi3qig5Uosd7A==|
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
|_full_|128.1|86.1|214.2|105 MB|atSW0WUyEvi3qig5Uosd7A==|
|_connect_|43.4|37.1|80.5|71.6 MB|atSW0WUyEvi3qig5Uosd7A==|
|_minimal_|32.6|32.5|65.1|67.2 MB|atSW0WUyEvi3qig5Uosd7A==|
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
|_full_|131.5|78.6|210.1|104 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|37|37|74|68.1 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|30.6|32.5|63.1|66.9 MB|atSW0WUyEvi3qig5Uosd7A==|
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

