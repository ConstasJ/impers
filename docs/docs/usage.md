---
title: Usage
sidebar_label: Usage
---

# Usage

```typescript
import * as impers from "impers";

// Notice the impersonate parameter
const r = await impers.get("https://tls.peet.ws/api/all", { impersonate: "chrome" });

console.log(r.json());
// output: {..., "ja3_hash": "aa56c057ad164ec4fdcb7a5a283be9fc", ...}
// the JA3 fingerprint should be the same as the target browser

// To keep using the latest browser version as impers updates,
// simply set impersonate="chrome" without specifying a version.
// Other similar values are: "safari" and "firefox"
const r2 = await impers.get("https://tls.peet.ws/api/all", { impersonate: "chrome" });

// To pin a specific version, use version numbers together.
const r3 = await impers.get("https://tls.peet.ws/api/all", { impersonate: "chrome124" });

// To impersonate other than browsers, bring your own JA3/Akamai strings.
// See the examples directory for details.
const r4 = await impers.get("https://tls.peet.ws/api/all", {
  ja3: "771,4865-4866-4867-49195-49199,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,29-23-24,0",
  akamai: "1:65536;3:1000;4:6291456;6:262144|15663105|0|m,a,s,p",
});

// HTTP/SOCKS proxies are supported
const r5 = await impers.get("https://tls.peet.ws/api/all", {
  impersonate: "chrome",
  proxy: "http://localhost:3128",
});

const r6 = await impers.get("https://tls.peet.ws/api/all", {
  impersonate: "chrome",
  proxy: "socks5://localhost:1080",
});
```
