---
title: Concurrent Requests
sidebar_label: Concurrent Requests
---

# Concurrent Requests

```typescript
import { Session } from "impers";

const urls = [
  "https://httpbin.org/get",
  "https://httpbin.org/ip",
  "https://httpbin.org/user-agent",
];

const session = new Session({ impersonate: "chrome124" });

try {
  const results = await Promise.all(
    urls.map(url => session.get(url))
  );

  for (const r of results) {
    console.log(r.status, r.url);
  }
} finally {
  await session.close();
}
```
