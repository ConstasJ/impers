---
title: Supported Impersonate Browsers
sidebar_label: Impersonation
---

# Supported Impersonate Browsers

`impers` supports the same browser versions as [curl-impersonate](https://github.com/lexiforest/curl-impersonate):

| Browser        | Versions                                                                                                                                            |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Chrome         | chrome99, chrome100, chrome101, chrome104, chrome107, chrome110, chrome116, chrome119, chrome120, chrome123, chrome124, chrome131, chrome133a, chrome136, chrome142 |
| Chrome Android | chrome99_android, chrome131_android                                                                                                                 |
| Safari         | safari153, safari155, safari170, safari180, safari184, safari260, safari2601                                                                        |
| Safari iOS     | safari172_ios, safari180_ios, safari184_ios, safari260_ios                                                                                          |
| Firefox        | firefox133, firefox135, firefox144                                                                                                                  |
| Tor            | tor145                                                                                                                                              |
| Edge           | edge99, edge101                                                                                                                                     |

If you are trying to impersonate a target other than a browser, use `ja3` and `akamai` options to specify your own customized fingerprints — see [Custom Fingerprints](./custom-fingerprints).
