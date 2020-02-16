
# Benchmarks

> :warning: The total times are measured without downloading & unzipping what normally occures on the AWS platform. Therefore these benchmarks only list _load/parse times_ and not _coldboot times_

- Times are in `ms`
- Times/memory usage are the averages of 3 runs

Check the benchmark folder for details how these benchmarks are created

## Route `/`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|125.3|85.3|210.6|111 MB|hH/vn//bFcbk4ZQbyeqAKQ==|
|_connect_|34.7|45.2|79.9|70.3 MB|iKAoYkrLhAXVYREHGpHDIA==|
|_minimal_|31.7|44.2|75.9|67.8 MB|o523CRiVsqy3x2s/4BaOZw==|
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
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDYzMWY1OWIwLTUwZjUtMTFlYS1iODMwLWYxZWE2MGRlMWRkMDwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
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
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDY4ZjEzN2YwLTUwZjUtMTFlYS05NjFmLWI5MGNlMmYwNDg2MDwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
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
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: 6bee7260-50f5-11ea-b0a3-0907efdc57d5</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|126.1|100|226.1|111 MB|aL25ndKKrBizrWAk+zG0Fg==|
|_connect_|43.2|47.1|90.3|72.1 MB|naWKprfMx65Lcw3EoLrU9A==|
|_minimal_|31.9|47.7|79.6|68.2 MB|bCtKoAFlhWEc4AO6XITX3Q==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-ttvK8EwBOFtBkm6eIE2KNi++gNM\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUy46bMBTdz1d43G0ccMIjAYLUXVdd9CGNVFWRwZfgDsHImJmkUf69tiGal6Yzw8K+2Jz7OPdws2suS33sANV63+RXmd0QZ5qRltTAOOl7lV8hlNkXZC1jN6K9RQqaDe7MKhnHqFZQbbC3bYeD9oIwAqAxg5DSdRxzPwA+/9NjxPoN7kslOo3zN73AarniYVQAD0PuR2FRLP2Pe4liTuOghAWjq5iV4C8W0ce98JiWtIoLCFbLsIo5j+PipZdeHxsY2bsbwFJHBN9gughgsVqViY/zuXVHOiV3Cvr+1MleaCHbpBIH4KmWXeKnDVTabErsarvX4IxFd0jvBde1OZIdK4U+JjTVirWTC3eJ5rSfTddoHvRpwcrbnZJDy0kpG6mST77vp3+JaDkckrV7zk+zevpGWvkQ5PQoXitbeIYkFRMN8NOLoAr4OfMcP05NnpWTswrJjxddcXE3steDugNFFJgkDXSDtRoAI0vm1jXEkH1NzJM7zHjesKMc7I05mpaa5l8EqpTco9HltYlMc5RVYjcoyDOx36FelabPrg5RynbetTuMXKobPHGPQr874BFXss6Wn2fsIhFWuLif7ZZ5LM+8x595UyyUdUYhe9Y0+TAInqA4WAKES5+EfhUSSoGRNY9KUvBFGK19auzScOYQmWfAnq3J5CClBnXx9d3WxVFxRAy5Ghq2Lzh7AF4+d+gn66jb/N5IQd7Pt9uvP29+bLeb00hkgjlUbGg0ntmeJL9OLdtDgkci8fn3DJQyrW2HppmNh9+mfiW2XefU5DBGmCJNTL8xI0xUl+5/sK/+je/AvjpV3oF9dZY8wzqFW2GbgeqNg/UfuZporGkFAAA="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-ru8oVjnmNGUtyVccTz3EitF6kLo\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUy46bMBTd9ys87jYOOAOB8JK666qLPqRKVRUZfAnuEIyMmUka5d9rG6J5aTozLPw+93Hu4WZXXFb62ANq9L4tPmR2QpxpRjrSAONkGFTxAaHMbpBdmXUruhukoM1xb0bJOEaNgjrH3rYbD9oLwjUAjRiElG6iiPsB8OWfASM25HiolOg1Ll61AvF1zMN1CTwMub8Oy/Laf7+VdcRpFFSwYjSOWAX+arV+vxUe0YrWUQlBfB3WEedRVD63MuhjCxN7tyNY6ojgOaarAFZxXCU+LpbWHOmV3CkYhlMvB6GF7JJaHICnWvaJn7ZQazMpsWvs3IBbrPpDeie4bsyR7Fkl9DGhqVasm024S7Skw2K+RstgSEtW3eyUHDtOKtlKlXz0fT/9S0TH4ZBs3Hd+HNXjHenkvZPTA3+d7OAJktRMtMBPz5wq4OfMc/w4NXlWTm5VSn686IqL24m9AdQtKKLABGmgOdZqBIwsmVtXEEP2FTFf4TDTecuOcrQ35mgeGlp8FqhWco8mk1fGMy1QVovdqKDIxH6HBlWZOrs8RCW7Zd/tMHKh5njmHoV+f8ATrmK9Tb/I2EUirHR+P9kp81iReQ+febMvlPVGIXvWtsU4Cp6gaAOcldQnoV+HhFJgZLMKYxLQKgo269oPA244c4jMM2DP5mRikFKDutj6ZvPiqDwihlwOLduXnN0DL88d+tE46ba4M1KQd8vt9suPn9+32/w0EZlgDjUbW40XtibJr1PH9pDgiUh8/r0ApUxpu7FtF9Ph17leiS3XOTUxTB5mTzPTr/QI49WF+x/si3/jG7AvdpU3YF/sJU+wTuFW2KahelNj/QdWFBkzaQUAAA=="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-rISs5PyvDju4MyVjdrdbTEAqQ08\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA5VUy46bMBTd9ys87jYOmEDI8JK666qLPqRKVRUZfAnuEIyMmUka5d9rG6J5aTozXvjJuY9zDze74rLSxx5Qo/dt8SGzC+JMM9KRBhgnw6CKDwhl9oDszuxb0d0gBW2OezNLxjFqFNQ59rbdeNBeGK0BaMwgovQ6jrkfAl/+GTBiQ46HSole4+JVK7BZbXi0LoFHEffXUVmu/PdbWcecxmEFAaObmFXgB8H6/VZ4TCtaxyWEm1VUx5zHcfncyqCPLUzs3Y5gqSOC55gGIQSbTZX4uFhac6RXcqdgGE69HIQWsktqcQCeatknftpCrc2ixK6xawNuE/SH9E5w3Zgr2bNK6GNCU61YN5twj2hJh8X8jJbhkJasutkpOXacVLKVKvno+376l4iOwyG5duP8OKrHJ9LJeyenB/462cETJKmZaIGfnjlVwM+Z5/hxavKsnNyulPx40RUXtxN7A6hbUESBCdJAc6zVCBhZMreuIIbsK2JG4TDTfcuOcrQv5mqeGlp8FqhWco8mk1fGMy1QVovdqKDIxH6HBlWZOrs8RCW7Zd/tMHKh5njmHkV+f8ATrmK9Tb/I2EUirHR+P9kl81iReQ8/82ZfKOuNQvasbYtxFDxB5r+g0ar0SeTXEaEUGCnDlU9KU5GaViygFRjOHCLzDNizOZkYpNSgLra+2bw4Ko+IIZdDy/YlZ/fAy+cO/WiedFvcGSnIu+V2++XHz+/bbX6aiEwwh5qNrcYLW5Pk16lje0jwRCQ+/16AUqa03di2i+ny61yvxJbrnJoYJg+zp5npV3qE8erC/Q/2xb/xDdgXu8obsC/2kidYp3ArbNNQvamx/gMVKBm5aQUAAA=="
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|130.6|88.4|219|110 MB|aBdast0mrD3EqF4zXA5s3Q==|
|_connect_|34.1|46.2|80.3|70.2 MB|2niEM6V4HeLk5daDqum1qw==|
|_minimal_|30.7|44|74.7|67.5 MB|fxOhavTohUqAHygAuRwB7w==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-w4Ph9kcPZo/MnJnbQwK2eAMP+Hs\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDg1NDM0NzkwLTUwZjUtMTFlYS1iMWMyLTgzMTE3NzFiNzhmZDwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>connect</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-z5jvVFoKoSApArr4B7t2F7/mJGc\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": "1385"
  },
  "isBase64Encoded": true,
  "body": "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGRhdGEtbi1oZWFkLXNzcj4KICA8aGVhZCA+CiAgICA8bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC80NTZlZTE3YWU1MTE5NzdkMDRlZC5qcyIgYXM9InNjcmlwdCI+PGxpbmsgcmVsPSJwcmVsb2FkIiBocmVmPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGFzPSJzY3JpcHQiPjxsaW5rIHJlbD0icHJlbG9hZCIgaHJlZj0iL19udXh0LzY3ZDE3NGNlMmExODdhY2UwMjI2LmpzIiBhcz0ic2NyaXB0Ij48bGluayByZWw9InByZWxvYWQiIGhyZWY9Ii9fbnV4dC9kNzFjMWY3YmU0ODM1ZjdkZDc3Yi5qcyIgYXM9InNjcmlwdCI+PHN0eWxlIGRhdGEtdnVlLXNzci1pZD0iMTI0ZTI4OGM6MCI+Lm51eHQtcHJvZ3Jlc3N7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjJweDt3aWR0aDowO29wYWNpdHk6MTt0cmFuc2l0aW9uOndpZHRoIC4xcyxvcGFjaXR5IC40cztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7ei1pbmRleDo5OTk5OTl9Lm51eHQtcHJvZ3Jlc3MubnV4dC1wcm9ncmVzcy1ub3RyYW5zaXRpb257dHJhbnNpdGlvbjpub25lfS5udXh0LXByb2dyZXNzLWZhaWxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJlZH08L3N0eWxlPgogIDwvaGVhZD4KICA8Ym9keSA+CiAgICA8ZGl2IGRhdGEtc2VydmVyLXJlbmRlcmVkPSJ0cnVlIiBpZD0iX19udXh0Ij48IS0tLS0+PGRpdiBpZD0iX19sYXlvdXQiPjxkaXY+PGRpdj48aDE+SGkgZnJvbSBzZXJ2ZXIhPC9oMT4gPGZpZ3VyZT48aW1nIHNyYz0iL251eHQtaWNvbi5wbmciIHN0eWxlPSJoZWlnaHQ6IDUwcHgiPiA8ZmlnY2FwdGlvbj48YSBocmVmPSIvYWJvdXQiPkFib3V0PC9hPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4gPHA+PHNtYWxsPnV1aWQ6IDhiMDg3YmEwLTUwZjUtMTFlYS1iNDU1LTRmYzk2MjA4OTg2ODwvc21hbGw+PC9wPjwvZGl2PiA8Zm9vdGVyPjxzbWFsbD5TZXJ2ZWQgYnkgYSBudXh0LWxhbWJkYTwvc21hbGw+PC9mb290ZXI+PC9kaXY+PC9kaXY+PC9kaXY+PHNjcmlwdD53aW5kb3cuX19OVVhUX189e2xheW91dDoiZGVmYXVsdCIsZGF0YTpbe25hbWU6InNlcnZlciJ9XSxlcnJvcjpudWxsLHNlcnZlclJlbmRlcmVkOnRydWV9Ozwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNDU2ZWUxN2FlNTExOTc3ZDA0ZWQuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZDcxYzFmN2JlNDgzNWY3ZGQ3N2IuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvZTgzOGQ1NmJlZDU1ZDA2NWJiMzAuanMiIGRlZmVyPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSIvX251eHQvNjdkMTc0Y2UyYTE4N2FjZTAyMjYuanMiIGRlZmVyPjwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo="
}
```
</details>

<details><summary>Response for <i>minimal</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"569-Y1RE/UjjFQJAVr/D2TaqOxSuXZI\"",
    "content-type": "text/html; charset=utf-8",
    "accept-ranges": "none",
    "content-length": 1385
  },
  "isBase64Encoded": false,
  "body": "<!doctype html>\n<html data-n-head-ssr>\n  <head >\n    <link rel=\"preload\" href=\"/_nuxt/456ee17ae511977d04ed.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/e838d56bed55d065bb30.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/67d174ce2a187ace0226.js\" as=\"script\"><link rel=\"preload\" href=\"/_nuxt/d71c1f7be4835f7dd77b.js\" as=\"script\"><style data-vue-ssr-id=\"124e288c:0\">.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}</style>\n  </head>\n  <body >\n    <div data-server-rendered=\"true\" id=\"__nuxt\"><!----><div id=\"__layout\"><div><div><h1>Hi from server!</h1> <figure><img src=\"/nuxt-icon.png\" style=\"height: 50px\"> <figcaption><a href=\"/about\">About</a></figcaption></figure> <p><small>uuid: 8e121220-50f5-11ea-93a1-ffb5dfc9c97c</small></p></div> <footer><small>Served by a nuxt-lambda</small></footer></div></div></div><script>window.__NUXT__={layout:\"default\",data:[{name:\"server\"}],error:null,serverRendered:true};</script><script src=\"/_nuxt/456ee17ae511977d04ed.js\" defer></script><script src=\"/_nuxt/d71c1f7be4835f7dd77b.js\" defer></script><script src=\"/_nuxt/e838d56bed55d065bb30.js\" defer></script><script src=\"/_nuxt/67d174ce2a187ace0226.js\" defer></script>\n  </body>\n</html>\n"
}
```
</details>

## Route `/about`
### Config _base_
|handler|load time|exec time|total time|memory usage|chksum|
|---|---|---|---|---|---|
|_full_|130.7|177.9|308.6|107 MB|DPgDl85zFYfiBnWM6glBNw==|
|_connect_|34.9|131.5|166.4|71.3 MB|DPgDl85zFYfiBnWM6glBNw==|
|_minimal_|31.4|128|159.4|70.9 MB|tJd3/XQ6XFswKbzA3XSqQw==|
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
|_full_|125.2|181|306.2|113 MB|pQHK5Sf4fORUIpGkSoLxVQ==|
|_connect_|43.8|129.6|173.5|74.6 MB|pQHK5Sf4fORUIpGkSoLxVQ==|
|_minimal_|31.3|141.7|173|71 MB|pQHK5Sf4fORUIpGkSoLxVQ==|
<details><summary>Response for <i>full</i></summary>

```js
{
  "statusCode": 200,
  "headers": {
    "etag": "\"b2c-+4BzmtOUQYVrYTP+Rq9V0+WHIdM\"",
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
    "etag": "\"b2c-+4BzmtOUQYVrYTP+Rq9V0+WHIdM\"",
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
    "etag": "\"b2c-+4BzmtOUQYVrYTP+Rq9V0+WHIdM\"",
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
|_full_|129.3|177.2|306.4|110 MB|YyOsCcyDXWnp4IUl+rF/8A==|
|_connect_|35.6|129.6|165.1|71.2 MB|YyOsCcyDXWnp4IUl+rF/8A==|
|_minimal_|29.6|139.6|169.2|71.3 MB|/0naPgKEVILCd4EgZ9umsQ==|
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
|_full_|125|77.8|202.8|106 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|34.3|38.9|73.2|68.9 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|28.2|31.5|59.7|69.3 MB|atSW0WUyEvi3qig5Uosd7A==|
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
|_full_|126.7|86.8|213.5|108 MB|atSW0WUyEvi3qig5Uosd7A==|
|_connect_|44.3|38.3|82.5|72.2 MB|atSW0WUyEvi3qig5Uosd7A==|
|_minimal_|33.6|32.7|66.3|67.5 MB|atSW0WUyEvi3qig5Uosd7A==|
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
|_full_|129.8|79.8|209.5|109 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|35.7|38.6|74.3|69.8 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|30.6|32.5|63.2|67.6 MB|atSW0WUyEvi3qig5Uosd7A==|
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

