
# Benchmarks

> :warning: The total times are measured without downloading & unzipping what normally occures on the AWS platform. Therefore these benchmarks only list _load/parse times_ and not _coldboot times_

- Times are in `ms`
- Times/memory usage are the averages of 3 runs

Check the benchmark folder for details how these benchmarks are created

## Route `/`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|130.1|89.5|219.6|107 MB|ezCY8o03AuZjHZ8ZVLhuhg==|
|_connect_|36.5|45.9|82.5|68.5 MB|P4akU8RHjYdwIvPnIvcoqA==|
|_minimal_|30.9|42.5|73.4|68.2 MB|JtWullgNDfgD/ws2B3LukA==|
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
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDY4NzU4MmQwLTUwZjYtMTFlYS1iNTBiLTRmNDgzMzI5NDMzZDwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
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
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDZlOGI2ZWYwLTUwZjYtMTFlYS05ZGJkLWEzYjlkMmU4ZTNiYzwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
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
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: 71a950c0-50f6-11ea-8e5b-e3ce16381d71</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|126.6|100.4|227|107 MB|FcxfM6l4q3Q2+uwk5hnEjQ==|
|_connect_|43.5|47.8|91.2|73 MB|BDr22V1fnHX9jJZLXK2APQ==|
|_minimal_|30.7|45.4|76.1|68.1 MB|Ih12/gaGGPbRsVcOHcoE4w==|
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
  "body": "H4sIAAAAAAAAA5VUy46bMBTd9ys87jYOmEBgCCB111UXfUiVqioy+BLcIRgZM5M0yr/XNkTz0nRmWPh97uPcw82uuKz0sQfU6H1bfMjshDjTjHSkAcbJMKjiA0KZ3SC7MutWdDdIQZvj3oyScYwaBXWOvW03HrQXRmsAGjOIKL2OY+6HwJd/BozYkOOhUqLXuHjVCiSrhEfrEngUcX8dleXKf7+VdcxpHFYQMJrErAI/CNbvt8JjWtE6LiFMVlEdcx7H5XMrgz62MLF3O4KljgieYxqEECRJlfq4WFpzpFdyp2AYTr0chBayS2txAL7Rsk/9TQu1NpMSu8bODbhF0B82d4LrxhzJnlVCH1O60Yp1swl3iZZ0WMzXaBkOm5JVNzslx46TSrZSpR9939/8JaLjcEiv3Xd+HNXjHenkvZPTA3+d7OAJktRMtMBPz5wq4OfMc/w4NXlWTm5VSn686IqL24m9AdQtKKLABGmgOdZqBIwsmVtXEEP2FTFf4TDTecuOcrQ35mgeGlp8FqhWco8mk1fGMy1QVovdqKDIxH6HBlWZOrs8RCW7Zd/tMHKh5njmHkV+f8ATrmK9Tb/I2EUirHR+P9kp81iReQ+febMvlPVGIXvWtsU4Cp6imAVR6K99Evn1mlAKjCR0tSI0CoKQ1UkYrFaGM4fIPAP2bE4mBik1qIutbzYvjsojYsjl0LJ9ydk98PLcoR+Nk26LOyMFebfcbr/8+Pl9u81PE5Ep5lCzsdV4YWuS/jp1bA8pnojE598LUMqUthvbdjEdfp3rldpynTcmhsnD7Glm+pUeYby6cP+DffFvfAP2xa7yBuyLveQJ1incCts0VG9qrP8A7BXWBGkFAAA="
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
  "body": "H4sIAAAAAAAAA5VUyW7bMBC95ysY9mpaom0tliUBvfXUQxcgQFEYlDiy2MiiQFGJXcP/XpKSkQ1pEh24v1nePE16zWWpjx2gWu+b/Cq1E+JMM9KSGhgnfa/yK4RSu0F2ZdaNaG+RgibDnRkl4xjVCqoMe9t2OGhvFYQANGIQULqOIu6vgM//9BixPsN9qUSncf6mFYiXMQ/CAngQcD8MimLpf9xKGHEarUpYMBpHrAR/sQg/boVHtKRVVMAqXgZVxHkUFS+t9PrYwMje3QCWOiJ4huliBYs4LhMf53NrjnRK7hT0/amTvdBCtkklDsA3WnaJv2mg0mZSYlfbuQa3WHSHzb3gujZHsmOl0MeEbrRi7WTCXaI57WfTNZqv+k3BytudkkPLSSkbqZJPvu9v/hLRcjgka/edn0b1dEda+eDk9MhfK1t4hiQVEw3w0wunCvg59Rw/Tk2elZNbFZIfL7ri4m5krwd1B4ooMEEaaIa1GgAjS+bWFcSQfU3MlzvMeN6woxzsjTmahprmXwSqlNyj0eS18UxzlFZiNyjIU7HfoV6Vps4uD1HKdt61O4xcqBmeuEeB3x3wiCtZZ9PPU3aRCCuc3892Sj2Wp97jZ97kC6WdUcieNU0+DIInKKZ0tS7XPgn8KiSUAiNxGCxJEcVVuabRki58w5lDpJ4BezYnE4OUGtTF1nebF0fFETHkcmjYvuDsAXh57tBPxlG3+b2Rgryfb7dff9782G6z00hkgjlUbGg0ntmaJL9OLdtDgkci8fn3DJQypW2HppmNh9+meiW2XOeNiWH0MHmamH6jRxivLtz/YF/9G9+BfbWrvAP7ai95hnUKt8I2DdUbG+s/9pBvFmkFAAA="
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
  "body": "H4sIAAAAAAAAA5VUy46bMBTd9ys87jYONgOBEILUXVdd9CFVqqrI4EviDsHImJmkUf69tiGal6Yzw8Lvcx/nHm5+JVRljh2gndk3xYfcTUhww0lLdsAF6XtdfEAodxvkVnbdyPYGaWjWuLOj4gKjnYZ6jYNNOxxMEMULAJZwiBlbJomgEYj5nx4j3q9xX2nZGVy8agXS61TEixJEHAu6iMvymr7fyiIRLIkqCDlLE14BDcPF+62IhFWsTkqI0uu4ToRIkvK5ld4cGxjZux3AUUekWGMWRhCmaZVRXMydOdJptdXQ96dO9dJI1Wa1PIBYGdVldNVAbeyk5Xbn5h34RdgdVndSmJ09Uh2vpDlmbGU0bycT/hLNWT+brtE86lclr262Wg2tIJVqlM4+UkpXf4lsBRyypf/Oj6N6vCOtundyeuCvVS08QZKaywbE6ZlTDeKcB54fr6bAycmvSiWOF10JeTuy14O+BU002CAtdI2NHgAjR+bGF8SSfUXsV3jMeN7woxrcjT2ahh0rPktUa7VHo8kr65kVKK/ldtBQ5HK/Rb2ubJ19HrJS7bxrtxj5UNd44h7FtDvgEVfxzqVf5PwiEV56v5/clAe8yIOHz4LJF8o7q5A9b5piGKTIUBrTEERFSUzrBWEMOClZAiSslxGPE0qrdGk584g8sODA5WRjUMqAvtj65vISqDwijnwODd+Xgt8DL889+tE46ra4s1JQd/PN5suPn983m/VpJDLDAmo+NAbPXE2yX6eW7yHDI5H4/HsGWtvStkPTzMbDr1O9Mleu88rGMHqYPE1Mv9IjrFcf7n+wL/6Nb8C+2FXegH2xlzzBeoU7YduGGoyN9R964M8oaQUAAA=="
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|127.8|88.3|216.1|106 MB|V83htqNx0xF5vC9q8OY3tQ==|
|_connect_|35.4|45.1|80.5|69.2 MB|pRMPziyvCS4tHIxTrf10Uw==|
|_minimal_|31.4|43.1|74.5|67.9 MB|+tCY9BrQPeb54g8jNB0ZZQ==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-CQ+1H2GWuHC0SNoH+6ihtJFbCFE\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDhkMzNjYWEwLTUwZjYtMTFlYS05ZjU5LWJkZGRlNDdjNjNlNDwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-IBjlhV7SEPrTf4lGF97+CUqPaEg\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDkyZDQ1ZmIwLTUwZjYtMTFlYS1iOTEyLTg1ZTA4MDQ4NjQzZTwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-GleRMwCcE0KmPp66tydpTNyd3XI\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 1385
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: 95da4cb0-50f6-11ea-bd19-e580f3a822a5</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

## Route `/about`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|132.2|180.9|313.1|117 MB|DPgDl85zFYfiBnWM6glBNw==|
|_connect_|35.4|128.5|163.9|71.3 MB|DPgDl85zFYfiBnWM6glBNw==|
|_minimal_|30.7|125.1|155.9|70.8 MB|tJd3/XQ6XFswKbzA3XSqQw==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "2860"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdiBjbGFzcz0iY29udGFpbmVyIj48aDE+QWJvdXQgZnJvbSBzZXJ2ZXI8L2gxPiA8dWw+PGxpPgogICAgICBzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdAogICAgPC9saT48bGk+CiAgICAgIHF1aSBlc3QgZXNzZQogICAgPC9saT48bGk+CiAgICAgIGVhIG1vbGVzdGlhcyBxdWFzaSBleGVyY2l0YXRpb25lbSByZXBlbGxhdCBxdWkgaXBzYSBzaXQgYXV0CiAgICA8L2xpPjxsaT4KICAgICAgZXVtIGV0IGVzdCBvY2NhZWNhdGkKICAgIDwvbGk+PGxpPgogICAgICBuZXNjaXVudCBxdWFzIG9kaW8KICAgIDwvbGk+PC91bD4gPHA+PGEgaHJlZj0iLyIgY2xhc3M9Im51eHQtbGluay1hY3RpdmUiPgogICAgICBCYWNrIHRvIGhvbWUgcGFnZQogICAgPC9hPjwvcD48L2Rpdj4gPGZvb3Rlcj48c21hbGw+U2VydmVkIGJ5IGEgbnV4dC1sYW1iZGE8L3NtYWxsPjwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PjxzY3JpcHQ+d2luZG93Ll9fTlVYVF9fPShmdW5jdGlvbihhKXtyZXR1cm4ge2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciIscG9zdHM6W3t1c2VySWQ6YSxpZDphLHRpdGxlOiJzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdCIsYm9keToicXVpYSBldCBzdXNjaXBpdFxuc3VzY2lwaXQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgZXhwZWRpdGEgZXQgY3VtXG5yZXByZWhlbmRlcml0IG1vbGVzdGlhZSB1dCB1dCBxdWFzIHRvdGFtXG5ub3N0cnVtIHJlcnVtIGVzdCBhdXRlbSBzdW50IHJlbSBldmVuaWV0IGFyY2hpdGVjdG8ifSx7dXNlcklkOmEsaWQ6Mix0aXRsZToicXVpIGVzdCBlc3NlIixib2R5OiJlc3QgcmVydW0gdGVtcG9yZSB2aXRhZVxuc2VxdWkgc2ludCBuaWhpbCByZXByZWhlbmRlcml0IGRvbG9yIGJlYXRhZSBlYSBkb2xvcmVzIG5lcXVlXG5mdWdpYXQgYmxhbmRpdGlpcyB2b2x1cHRhdGUgcG9ycm8gdmVsIG5paGlsIG1vbGVzdGlhZSB1dCByZWljaWVuZGlzXG5xdWkgYXBlcmlhbSBub24gZGViaXRpcyBwb3NzaW11cyBxdWkgbmVxdWUgbmlzaSBudWxsYSJ9LHt1c2VySWQ6YSxpZDozLHRpdGxlOiJlYSBtb2xlc3RpYXMgcXVhc2kgZXhlcmNpdGF0aW9uZW0gcmVwZWxsYXQgcXVpIGlwc2Egc2l0IGF1dCIsYm9keToiZXQgaXVzdG8gc2VkIHF1byBpdXJlXG52b2x1cHRhdGVtIG9jY2FlY2F0aSBvbW5pcyBlbGlnZW5kaSBhdXQgYWRcbnZvbHVwdGF0ZW0gZG9sb3JpYnVzIHZlbCBhY2N1c2FudGl1bSBxdWlzIHBhcmlhdHVyXG5tb2xlc3RpYWUgcG9ycm8gZWl1cyBvZGlvIGV0IGxhYm9yZSBldCB2ZWxpdCBhdXQifSx7dXNlcklkOmEsaWQ6NCx0aXRsZToiZXVtIGV0IGVzdCBvY2NhZWNhdGkiLGJvZHk6InVsbGFtIGV0IHNhZXBlIHJlaWNpZW5kaXMgdm9sdXB0YXRlbSBhZGlwaXNjaVxuc2l0IGFtZXQgYXV0ZW0gYXNzdW1lbmRhIHByb3ZpZGVudCByZXJ1bSBjdWxwYVxucXVpcyBoaWMgY29tbW9kaSBuZXNjaXVudCByZW0gdGVuZXR1ciBkb2xvcmVtcXVlIGlwc2FtIGl1cmVcbnF1aXMgc3VudCB2b2x1cHRhdGVtIHJlcnVtIGlsbG8gdmVsaXQifSx7dXNlcklkOmEsaWQ6NSx0aXRsZToibmVzY2l1bnQgcXVhcyBvZGlvIixib2R5OiJyZXB1ZGlhbmRhZSB2ZW5pYW0gcXVhZXJhdCBzdW50IHNlZFxuYWxpYXMgYXV0IGZ1Z2lhdCBzaXQgYXV0ZW0gc2VkIGVzdFxudm9sdXB0YXRlbSBvbW5pcyBwb3NzaW11cyBlc3NlIHZvbHVwdGF0aWJ1cyBxdWlzXG5lc3QgYXV0IHRlbmV0dXIgZG9sb3IgbmVxdWUifV19XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9fSgxKSk7PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC9lODM4ZDU2YmVkNTVkMDY1YmIzMC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC82N2QxNzRjZTJhMTg3YWNlMDIyNi5qcyIgZGVmZXI+PC9zY3JpcHQ+CiAgPC9ib2R5Pgo8L2h0bWw+Cg=="
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
    "content-length": "2860"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdiBjbGFzcz0iY29udGFpbmVyIj48aDE+QWJvdXQgZnJvbSBzZXJ2ZXI8L2gxPiA8dWw+PGxpPgogICAgICBzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdAogICAgPC9saT48bGk+CiAgICAgIHF1aSBlc3QgZXNzZQogICAgPC9saT48bGk+CiAgICAgIGVhIG1vbGVzdGlhcyBxdWFzaSBleGVyY2l0YXRpb25lbSByZXBlbGxhdCBxdWkgaXBzYSBzaXQgYXV0CiAgICA8L2xpPjxsaT4KICAgICAgZXVtIGV0IGVzdCBvY2NhZWNhdGkKICAgIDwvbGk+PGxpPgogICAgICBuZXNjaXVudCBxdWFzIG9kaW8KICAgIDwvbGk+PC91bD4gPHA+PGEgaHJlZj0iLyIgY2xhc3M9Im51eHQtbGluay1hY3RpdmUiPgogICAgICBCYWNrIHRvIGhvbWUgcGFnZQogICAgPC9hPjwvcD48L2Rpdj4gPGZvb3Rlcj48c21hbGw+U2VydmVkIGJ5IGEgbnV4dC1sYW1iZGE8L3NtYWxsPjwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PjxzY3JpcHQ+d2luZG93Ll9fTlVYVF9fPShmdW5jdGlvbihhKXtyZXR1cm4ge2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciIscG9zdHM6W3t1c2VySWQ6YSxpZDphLHRpdGxlOiJzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdCIsYm9keToicXVpYSBldCBzdXNjaXBpdFxuc3VzY2lwaXQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgZXhwZWRpdGEgZXQgY3VtXG5yZXByZWhlbmRlcml0IG1vbGVzdGlhZSB1dCB1dCBxdWFzIHRvdGFtXG5ub3N0cnVtIHJlcnVtIGVzdCBhdXRlbSBzdW50IHJlbSBldmVuaWV0IGFyY2hpdGVjdG8ifSx7dXNlcklkOmEsaWQ6Mix0aXRsZToicXVpIGVzdCBlc3NlIixib2R5OiJlc3QgcmVydW0gdGVtcG9yZSB2aXRhZVxuc2VxdWkgc2ludCBuaWhpbCByZXByZWhlbmRlcml0IGRvbG9yIGJlYXRhZSBlYSBkb2xvcmVzIG5lcXVlXG5mdWdpYXQgYmxhbmRpdGlpcyB2b2x1cHRhdGUgcG9ycm8gdmVsIG5paGlsIG1vbGVzdGlhZSB1dCByZWljaWVuZGlzXG5xdWkgYXBlcmlhbSBub24gZGViaXRpcyBwb3NzaW11cyBxdWkgbmVxdWUgbmlzaSBudWxsYSJ9LHt1c2VySWQ6YSxpZDozLHRpdGxlOiJlYSBtb2xlc3RpYXMgcXVhc2kgZXhlcmNpdGF0aW9uZW0gcmVwZWxsYXQgcXVpIGlwc2Egc2l0IGF1dCIsYm9keToiZXQgaXVzdG8gc2VkIHF1byBpdXJlXG52b2x1cHRhdGVtIG9jY2FlY2F0aSBvbW5pcyBlbGlnZW5kaSBhdXQgYWRcbnZvbHVwdGF0ZW0gZG9sb3JpYnVzIHZlbCBhY2N1c2FudGl1bSBxdWlzIHBhcmlhdHVyXG5tb2xlc3RpYWUgcG9ycm8gZWl1cyBvZGlvIGV0IGxhYm9yZSBldCB2ZWxpdCBhdXQifSx7dXNlcklkOmEsaWQ6NCx0aXRsZToiZXVtIGV0IGVzdCBvY2NhZWNhdGkiLGJvZHk6InVsbGFtIGV0IHNhZXBlIHJlaWNpZW5kaXMgdm9sdXB0YXRlbSBhZGlwaXNjaVxuc2l0IGFtZXQgYXV0ZW0gYXNzdW1lbmRhIHByb3ZpZGVudCByZXJ1bSBjdWxwYVxucXVpcyBoaWMgY29tbW9kaSBuZXNjaXVudCByZW0gdGVuZXR1ciBkb2xvcmVtcXVlIGlwc2FtIGl1cmVcbnF1aXMgc3VudCB2b2x1cHRhdGVtIHJlcnVtIGlsbG8gdmVsaXQifSx7dXNlcklkOmEsaWQ6NSx0aXRsZToibmVzY2l1bnQgcXVhcyBvZGlvIixib2R5OiJyZXB1ZGlhbmRhZSB2ZW5pYW0gcXVhZXJhdCBzdW50IHNlZFxuYWxpYXMgYXV0IGZ1Z2lhdCBzaXQgYXV0ZW0gc2VkIGVzdFxudm9sdXB0YXRlbSBvbW5pcyBwb3NzaW11cyBlc3NlIHZvbHVwdGF0aWJ1cyBxdWlzXG5lc3QgYXV0IHRlbmV0dXIgZG9sb3IgbmVxdWUifV19XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9fSgxKSk7PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC9lODM4ZDU2YmVkNTVkMDY1YmIzMC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC82N2QxNzRjZTJhMTg3YWNlMDIyNi5qcyIgZGVmZXI+PC9zY3JpcHQ+CiAgPC9ib2R5Pgo8L2h0bWw+Cg=="
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
|_full_|125.9|181.5|307.4|113 MB|58FxPFjLIbcBIK9eerUorg==|
|_connect_|43.4|142.4|185.8|74.6 MB|58FxPFjLIbcBIK9eerUorg==|
|_minimal_|30.9|145.9|176.8|70.2 MB|58FxPFjLIbcBIK9eerUorg==|
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
|_full_|129.8|174.8|304.7|107 MB|YyOsCcyDXWnp4IUl+rF/8A==|
|_connect_|34.4|139.7|174|72.7 MB|YyOsCcyDXWnp4IUl+rF/8A==|
|_minimal_|30.2|351|381.2|72.2 MB|/0naPgKEVILCd4EgZ9umsQ==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"b2c-+4BzmtOUQYVrYTP+Rq9V0+WHIdM\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "2860"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdiBjbGFzcz0iY29udGFpbmVyIj48aDE+QWJvdXQgZnJvbSBzZXJ2ZXI8L2gxPiA8dWw+PGxpPgogICAgICBzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdAogICAgPC9saT48bGk+CiAgICAgIHF1aSBlc3QgZXNzZQogICAgPC9saT48bGk+CiAgICAgIGVhIG1vbGVzdGlhcyBxdWFzaSBleGVyY2l0YXRpb25lbSByZXBlbGxhdCBxdWkgaXBzYSBzaXQgYXV0CiAgICA8L2xpPjxsaT4KICAgICAgZXVtIGV0IGVzdCBvY2NhZWNhdGkKICAgIDwvbGk+PGxpPgogICAgICBuZXNjaXVudCBxdWFzIG9kaW8KICAgIDwvbGk+PC91bD4gPHA+PGEgaHJlZj0iLyIgY2xhc3M9Im51eHQtbGluay1hY3RpdmUiPgogICAgICBCYWNrIHRvIGhvbWUgcGFnZQogICAgPC9hPjwvcD48L2Rpdj4gPGZvb3Rlcj48c21hbGw+U2VydmVkIGJ5IGEgbnV4dC1sYW1iZGE8L3NtYWxsPjwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PjxzY3JpcHQ+d2luZG93Ll9fTlVYVF9fPShmdW5jdGlvbihhKXtyZXR1cm4ge2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciIscG9zdHM6W3t1c2VySWQ6YSxpZDphLHRpdGxlOiJzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdCIsYm9keToicXVpYSBldCBzdXNjaXBpdFxuc3VzY2lwaXQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgZXhwZWRpdGEgZXQgY3VtXG5yZXByZWhlbmRlcml0IG1vbGVzdGlhZSB1dCB1dCBxdWFzIHRvdGFtXG5ub3N0cnVtIHJlcnVtIGVzdCBhdXRlbSBzdW50IHJlbSBldmVuaWV0IGFyY2hpdGVjdG8ifSx7dXNlcklkOmEsaWQ6Mix0aXRsZToicXVpIGVzdCBlc3NlIixib2R5OiJlc3QgcmVydW0gdGVtcG9yZSB2aXRhZVxuc2VxdWkgc2ludCBuaWhpbCByZXByZWhlbmRlcml0IGRvbG9yIGJlYXRhZSBlYSBkb2xvcmVzIG5lcXVlXG5mdWdpYXQgYmxhbmRpdGlpcyB2b2x1cHRhdGUgcG9ycm8gdmVsIG5paGlsIG1vbGVzdGlhZSB1dCByZWljaWVuZGlzXG5xdWkgYXBlcmlhbSBub24gZGViaXRpcyBwb3NzaW11cyBxdWkgbmVxdWUgbmlzaSBudWxsYSJ9LHt1c2VySWQ6YSxpZDozLHRpdGxlOiJlYSBtb2xlc3RpYXMgcXVhc2kgZXhlcmNpdGF0aW9uZW0gcmVwZWxsYXQgcXVpIGlwc2Egc2l0IGF1dCIsYm9keToiZXQgaXVzdG8gc2VkIHF1byBpdXJlXG52b2x1cHRhdGVtIG9jY2FlY2F0aSBvbW5pcyBlbGlnZW5kaSBhdXQgYWRcbnZvbHVwdGF0ZW0gZG9sb3JpYnVzIHZlbCBhY2N1c2FudGl1bSBxdWlzIHBhcmlhdHVyXG5tb2xlc3RpYWUgcG9ycm8gZWl1cyBvZGlvIGV0IGxhYm9yZSBldCB2ZWxpdCBhdXQifSx7dXNlcklkOmEsaWQ6NCx0aXRsZToiZXVtIGV0IGVzdCBvY2NhZWNhdGkiLGJvZHk6InVsbGFtIGV0IHNhZXBlIHJlaWNpZW5kaXMgdm9sdXB0YXRlbSBhZGlwaXNjaVxuc2l0IGFtZXQgYXV0ZW0gYXNzdW1lbmRhIHByb3ZpZGVudCByZXJ1bSBjdWxwYVxucXVpcyBoaWMgY29tbW9kaSBuZXNjaXVudCByZW0gdGVuZXR1ciBkb2xvcmVtcXVlIGlwc2FtIGl1cmVcbnF1aXMgc3VudCB2b2x1cHRhdGVtIHJlcnVtIGlsbG8gdmVsaXQifSx7dXNlcklkOmEsaWQ6NSx0aXRsZToibmVzY2l1bnQgcXVhcyBvZGlvIixib2R5OiJyZXB1ZGlhbmRhZSB2ZW5pYW0gcXVhZXJhdCBzdW50IHNlZFxuYWxpYXMgYXV0IGZ1Z2lhdCBzaXQgYXV0ZW0gc2VkIGVzdFxudm9sdXB0YXRlbSBvbW5pcyBwb3NzaW11cyBlc3NlIHZvbHVwdGF0aWJ1cyBxdWlzXG5lc3QgYXV0IHRlbmV0dXIgZG9sb3IgbmVxdWUifV19XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9fSgxKSk7PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC9lODM4ZDU2YmVkNTVkMDY1YmIzMC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC82N2QxNzRjZTJhMTg3YWNlMDIyNi5qcyIgZGVmZXI+PC9zY3JpcHQ+CiAgPC9ib2R5Pgo8L2h0bWw+Cg=="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"b2c-+4BzmtOUQYVrYTP+Rq9V0+WHIdM\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "2860"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdiBjbGFzcz0iY29udGFpbmVyIj48aDE+QWJvdXQgZnJvbSBzZXJ2ZXI8L2gxPiA8dWw+PGxpPgogICAgICBzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdAogICAgPC9saT48bGk+CiAgICAgIHF1aSBlc3QgZXNzZQogICAgPC9saT48bGk+CiAgICAgIGVhIG1vbGVzdGlhcyBxdWFzaSBleGVyY2l0YXRpb25lbSByZXBlbGxhdCBxdWkgaXBzYSBzaXQgYXV0CiAgICA8L2xpPjxsaT4KICAgICAgZXVtIGV0IGVzdCBvY2NhZWNhdGkKICAgIDwvbGk+PGxpPgogICAgICBuZXNjaXVudCBxdWFzIG9kaW8KICAgIDwvbGk+PC91bD4gPHA+PGEgaHJlZj0iLyIgY2xhc3M9Im51eHQtbGluay1hY3RpdmUiPgogICAgICBCYWNrIHRvIGhvbWUgcGFnZQogICAgPC9hPjwvcD48L2Rpdj4gPGZvb3Rlcj48c21hbGw+U2VydmVkIGJ5IGEgbnV4dC1sYW1iZGE8L3NtYWxsPjwvZm9vdGVyPjwvZGl2PjwvZGl2PjwvZGl2PjxzY3JpcHQ+d2luZG93Ll9fTlVYVF9fPShmdW5jdGlvbihhKXtyZXR1cm4ge2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciIscG9zdHM6W3t1c2VySWQ6YSxpZDphLHRpdGxlOiJzdW50IGF1dCBmYWNlcmUgcmVwZWxsYXQgcHJvdmlkZW50IG9jY2FlY2F0aSBleGNlcHR1cmkgb3B0aW8gcmVwcmVoZW5kZXJpdCIsYm9keToicXVpYSBldCBzdXNjaXBpdFxuc3VzY2lwaXQgcmVjdXNhbmRhZSBjb25zZXF1dW50dXIgZXhwZWRpdGEgZXQgY3VtXG5yZXByZWhlbmRlcml0IG1vbGVzdGlhZSB1dCB1dCBxdWFzIHRvdGFtXG5ub3N0cnVtIHJlcnVtIGVzdCBhdXRlbSBzdW50IHJlbSBldmVuaWV0IGFyY2hpdGVjdG8ifSx7dXNlcklkOmEsaWQ6Mix0aXRsZToicXVpIGVzdCBlc3NlIixib2R5OiJlc3QgcmVydW0gdGVtcG9yZSB2aXRhZVxuc2VxdWkgc2ludCBuaWhpbCByZXByZWhlbmRlcml0IGRvbG9yIGJlYXRhZSBlYSBkb2xvcmVzIG5lcXVlXG5mdWdpYXQgYmxhbmRpdGlpcyB2b2x1cHRhdGUgcG9ycm8gdmVsIG5paGlsIG1vbGVzdGlhZSB1dCByZWljaWVuZGlzXG5xdWkgYXBlcmlhbSBub24gZGViaXRpcyBwb3NzaW11cyBxdWkgbmVxdWUgbmlzaSBudWxsYSJ9LHt1c2VySWQ6YSxpZDozLHRpdGxlOiJlYSBtb2xlc3RpYXMgcXVhc2kgZXhlcmNpdGF0aW9uZW0gcmVwZWxsYXQgcXVpIGlwc2Egc2l0IGF1dCIsYm9keToiZXQgaXVzdG8gc2VkIHF1byBpdXJlXG52b2x1cHRhdGVtIG9jY2FlY2F0aSBvbW5pcyBlbGlnZW5kaSBhdXQgYWRcbnZvbHVwdGF0ZW0gZG9sb3JpYnVzIHZlbCBhY2N1c2FudGl1bSBxdWlzIHBhcmlhdHVyXG5tb2xlc3RpYWUgcG9ycm8gZWl1cyBvZGlvIGV0IGxhYm9yZSBldCB2ZWxpdCBhdXQifSx7dXNlcklkOmEsaWQ6NCx0aXRsZToiZXVtIGV0IGVzdCBvY2NhZWNhdGkiLGJvZHk6InVsbGFtIGV0IHNhZXBlIHJlaWNpZW5kaXMgdm9sdXB0YXRlbSBhZGlwaXNjaVxuc2l0IGFtZXQgYXV0ZW0gYXNzdW1lbmRhIHByb3ZpZGVudCByZXJ1bSBjdWxwYVxucXVpcyBoaWMgY29tbW9kaSBuZXNjaXVudCByZW0gdGVuZXR1ciBkb2xvcmVtcXVlIGlwc2FtIGl1cmVcbnF1aXMgc3VudCB2b2x1cHRhdGVtIHJlcnVtIGlsbG8gdmVsaXQifSx7dXNlcklkOmEsaWQ6NSx0aXRsZToibmVzY2l1bnQgcXVhcyBvZGlvIixib2R5OiJyZXB1ZGlhbmRhZSB2ZW5pYW0gcXVhZXJhdCBzdW50IHNlZFxuYWxpYXMgYXV0IGZ1Z2lhdCBzaXQgYXV0ZW0gc2VkIGVzdFxudm9sdXB0YXRlbSBvbW5pcyBwb3NzaW11cyBlc3NlIHZvbHVwdGF0aWJ1cyBxdWlzXG5lc3QgYXV0IHRlbmV0dXIgZG9sb3IgbmVxdWUifV19XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9fSgxKSk7PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC8xOTQ4MTBiMDg0MGFhYjVkOTczZi5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC9lODM4ZDU2YmVkNTVkMDY1YmIzMC5qcyIgZGVmZXI+PC9zY3JpcHQ+PHNjcmlwdCBzcmM9Ii9fbnV4dC82N2QxNzRjZTJhMTg3YWNlMDIyNi5qcyIgZGVmZXI+PC9zY3JpcHQ+CiAgPC9ib2R5Pgo8L2h0bWw+Cg=="
}
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

## Route `/redirect`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|125.1|77|202.1|105 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|34.2|37.4|71.6|68.4 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|29.6|31.8|61.3|69.1 MB|atSW0WUyEvi3qig5Uosd7A==|
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
|_full_|126.8|89.8|216.6|111 MB|atSW0WUyEvi3qig5Uosd7A==|
|_connect_|44|37.9|81.9|70.6 MB|atSW0WUyEvi3qig5Uosd7A==|
|_minimal_|30.9|30.9|61.8|66.9 MB|atSW0WUyEvi3qig5Uosd7A==|
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
|_full_|125.9|78|203.9|110 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|35.4|37.3|72.6|68.5 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|30.1|31.5|61.6|67.3 MB|atSW0WUyEvi3qig5Uosd7A==|
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

