---
title: WebSockets
sidebar_label: WebSockets
---

# WebSockets

```typescript
import * as impers from "impers";

const ws = await impers.wsConnect("wss://echo.websocket.org", {
  impersonate: "chrome124",
});

await ws.send("Hello, World!");

for await (const message of ws) {
  console.log("Received:", message);
  if (message.type === "text" && message.data === "Hello, World!") {
    break;
  }
}

await ws.close();
```
