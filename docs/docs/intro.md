---
slug: /
title: Introduction
sidebar_label: Introduction
---

# impers

Node.js binding for [curl-impersonate](https://github.com/lexiforest/curl-impersonate) via [Koffi](https://koffi.dev/). A TypeScript port of [curl_cffi](https://github.com/lexiforest/curl_cffi).

`impers` is an HTTP client library for Node.js that can impersonate browsers' TLS/JA3 and HTTP/2 fingerprints. If you are blocked by some website for no obvious reason, you can give `impers` a try.

Node.js 18+ is required.

:::warning

`impers` is in a technical preview state, not even alpha. The docs may be inaccurate, all APIs are provisional, and subject to change.

:::

## Features

- Supports JA3/TLS and HTTP/2 fingerprint impersonation, including recent browsers and custom fingerprints.
- Fast performance powered by libcurl.
- Supports HTTP/2 and HTTP/3. `impers` is probably the first Node package that supports HTTP/3.
- Supports WebSocket, with impersonation.
- TypeScript first with full type definitions.
- MIT licensed.

|                | node-fetch | axios | got | undici | impers |
| -------------- | ---------- | ----- | --- | ------ | ------ |
| HTTP/2         | ❌         | ❌    | ✅  | ✅     | ✅     |
| HTTP/3         | ❌         | ❌    | ❌  | ❌     | ✅     |
| WebSocket      | ❌         | ❌    | ❌  | ✅     | ✅     |
| Fingerprints   | ❌         | ❌    | ❌  | ❌     | ✅     |

## Impersonate Suite

`impers` is part of the impersonate suite.

- [curl-impersonate](https://github.com/lexiforest/curl-impersonate) — a curl distribution that impersonates browsers.
- [curl_cffi](https://github.com/lexiforest/curl_cffi) — Python binding to curl-impersonate.
- [impers](https://github.com/lexiforest/impers) — Node.js binding to curl-impersonate.
- [impersonate.pro](https://impersonate.pro) — commercial support, more fingerprints, and integrated solutions.

## Acknowledgement

- TypeScript port inspired by [curl_cffi](https://github.com/lexiforest/curl_cffi).
- FFI bindings powered by [Koffi](https://koffi.dev/).
- Browser impersonation powered by [curl-impersonate](https://github.com/lexiforest/curl-impersonate).

## License

MIT.
