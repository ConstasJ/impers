---
title: Install
sidebar_label: Install
---

# Install

```bash
npm install impers
```

## Requirements

**libcurl-impersonate**: For full fingerprinting support, you need [curl-impersonate](https://github.com/lexiforest/curl-impersonate) installed. Standard libcurl works but without impersonation features.

Luckily, if you have an internet connection, `impers` will download curl-impersonate at the first launch.

If you wish to use your own version, set the `LIBCURL_PATH` environment variable:

```bash
export LIBCURL_PATH=/path/to/libcurl-impersonate.so
```
