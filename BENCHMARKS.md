
# Benchmarks

> :warning: The total times are measured without downloading & unzipping. Therefore these benchmarks only list _load/parse times_ and not _cold boot times_

Check the benchmark folder for details how these benchmarks are created

## Route `/`
### Config _base_
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|125.2|79.5|204.8|113 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_connect_|36.1|38|74.1|66.6 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_minimal_|30|37.9|67.9|67.4 MB|dzxoPuCUjFh0yYxPRYdPpg==|
<details><summary>Response for _full_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _connect_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _minimal_</summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": 29,
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": false,
  "body": "Nuxt.js Internal Server Error"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|124.7|79.5|204.3|111 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_connect_|43.8|10.8|54.6|69.8 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_minimal_|30.1|38.5|68.6|67.4 MB|xFr19PQNCOKI2EBELpT5Ug==|
<details><summary>Response for _full_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _connect_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _minimal_</summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA/MrrSjRyypW8MwrSS3KS8xRCE4tKkstUnAtKsovAgDz8UKYHQAAAA=="
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|128.6|90.5|219|105 MB|pkTMNbX7o/czKqGvZuJfyg==|
|_connect_|42.2|40.6|82.8|72.8 MB|pkTMNbX7o/czKqGvZuJfyg==|
|_minimal_|30.4|38.6|69|66.9 MB|xFr19PQNCOKI2EBELpT5Ug==|
<details><summary>Response for _full_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA/MrrSjRyypW8MwrSS3KS8xRCE4tKkstUnAtKsovAgDz8UKYHQAAAA=="
}
```
</details>

<details><summary>Response for _connect_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA/MrrSjRyypW8MwrSS3KS8xRCE4tKkstUnAtKsovAgDz8UKYHQAAAA=="
}
```
</details>

<details><summary>Response for _minimal_</summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA/MrrSjRyypW8MwrSS3KS8xRCE4tKkstUnAtKsovAgDz8UKYHQAAAA=="
}
```
</details>

## Route `/about`
### Config _base_
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|124.5|70.9|195.5|112 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_connect_|34.9|30.9|65.8|69.9 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_minimal_|28.8|29|57.7|66.3 MB|dzxoPuCUjFh0yYxPRYdPpg==|
<details><summary>Response for _full_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _connect_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _minimal_</summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": 29,
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": false,
  "body": "Nuxt.js Internal Server Error"
}
```
</details>

### Config _with-compression_
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|124.7|70.7|195.4|112 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_connect_|43.6|9.9|53.5|70.3 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_minimal_|31.6|31.6|63.2|68.1 MB|xFr19PQNCOKI2EBELpT5Ug==|
<details><summary>Response for _full_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _connect_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _minimal_</summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA/MrrSjRyypW8MwrSS3KS8xRCE4tKkstUnAtKsovAgDz8UKYHQAAAA=="
}
```
</details>

### Config _with-etag_
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|126.2|83.1|209.3|114 MB|pkTMNbX7o/czKqGvZuJfyg==|
|_connect_|44.4|33.6|78.1|70.3 MB|pkTMNbX7o/czKqGvZuJfyg==|
|_minimal_|31.6|31.9|63.5|67.6 MB|xFr19PQNCOKI2EBELpT5Ug==|
<details><summary>Response for _full_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA/MrrSjRyypW8MwrSS3KS8xRCE4tKkstUnAtKsovAgDz8UKYHQAAAA=="
}
```
</details>

<details><summary>Response for _connect_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA/MrrSjRyypW8MwrSS3KS8xRCE4tKkstUnAtKsovAgDz8UKYHQAAAA=="
}
```
</details>

<details><summary>Response for _minimal_</summary>

```js
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate",
    "vary": "Accept-Encoding",
    "content-encoding": "gzip"
  },
  "isBase64Encoded": true,
  "body": "H4sIAAAAAAAAA/MrrSjRyypW8MwrSS3KS8xRCE4tKkstUnAtKsovAgDz8UKYHQAAAA=="
}
```
</details>

## Route `/redirect`
### Config _base_
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|126|73.4|199.4|111 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|34.3|32.9|67.1|67.9 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_minimal_|30.4|28.8|59.2|68.3 MB|atSW0WUyEvi3qig5Uosd7A==|
<details><summary>Response for _full_</summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for _connect_</summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for _minimal_</summary>

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
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|123.8|73.3|197|113 MB|Oj9UlW05muQ2LHwz+7+a1w==|
|_connect_|44.7|10.1|54.9|69.6 MB|ocLgBgvPGrq2gRgSiE9adA==|
|_minimal_|29.8|26.3|56.1|68.9 MB|atSW0WUyEvi3qig5Uosd7A==|
<details><summary>Response for _full_</summary>

```js
{
  "statusCode": 302,
  "headers": {},
  "isBase64Encoded": false,
  "body": ""
}
```
</details>

<details><summary>Response for _connect_</summary>

```js
{
  "statusCode": 500,
  "headers": {
    "content-type": "text/html; charset=utf-8",
    "content-length": "29",
    "cache-control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  "isBase64Encoded": true,
  "body": "TnV4dC5qcyBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I="
}
```
</details>

<details><summary>Response for _minimal_</summary>

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
|handler|load time|exec time|total time|memory usage|res chksum|
|---|---|---|---|---|---|
|_full_|125.7|83|208.7|113 MB|atSW0WUyEvi3qig5Uosd7A==|
|_connect_|42.3|33|75.4|72.7 MB|atSW0WUyEvi3qig5Uosd7A==|
|_minimal_|31.1|25.7|56.8|67.4 MB|atSW0WUyEvi3qig5Uosd7A==|
<details><summary>Response for _full_</summary>

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

<details><summary>Response for _connect_</summary>

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

<details><summary>Response for _minimal_</summary>

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

