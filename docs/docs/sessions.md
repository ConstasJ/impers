---
title: Sessions
sidebar_label: Sessions
---

# Sessions

```typescript
import { Session } from "impers";

const session = new Session();

// httpbin is an HTTP test website, this endpoint makes the server set cookies
await session.get("https://httpbin.org/cookies/set/foo/bar");
console.log(session.cookies);
// Cookies { foo: 'bar' }

// retrieve cookies again to verify
const r = await session.get("https://httpbin.org/cookies");
console.log(r.json());
// { cookies: { foo: 'bar' } }

// Don't forget to close the session when done
await session.close();
```
