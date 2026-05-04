---
title: Low-level Curl API
sidebar_label: Low-level Curl
---

# Low-level Curl API

```typescript
import { Curl, CurlOpt } from "impers";

const curl = new Curl();
const chunks: Buffer[] = [];

try {
  curl.setOpt(CurlOpt.URL, "https://example.com");
  curl.setWriteFunction((chunk) => chunks.push(Buffer.from(chunk)));

  // Browser impersonation (requires curl-impersonate)
  curl.impersonate("chrome124");

  // Or use manual fingerprinting
  // curl.setJa3("771,4865-4866-...");
  // curl.setAkamai("1:65536;...");

  curl.perform();
  console.log(Buffer.concat(chunks).toString());
} finally {
  curl.cleanup();
}
```
