---
title: Custom Fingerprints
sidebar_label: Custom Fingerprints
---

# Custom Fingerprints

```typescript
import * as impers from "impers";

// JA3 TLS fingerprint format: tls_version,ciphers,extensions,curves,curve_formats
const ja3 = "771,4865-4866-4867-49195-49199,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,29-23-24,0";

// Akamai HTTP/2 fingerprint format: settings|window_update|streams|header_order
const akamai = "1:65536;3:1000;4:6291456;6:262144|15663105|0|m,a,s,p";

const r = await impers.get("https://tls.peet.ws/api/all", { ja3, akamai });

// For fine-grained control, use extraFp
const extraFp: impers.ExtraFingerprint = {
  tlsSigAlgs: ["ecdsa_secp256r1_sha256", "rsa_pss_rsae_sha256"],
  tlsSupportedGroups: ["X25519", "P-256", "P-384"],
  http2Settings: {
    1: 65536,   // HEADER_TABLE_SIZE
    3: 1000,    // MAX_CONCURRENT_STREAMS
    4: 6291456, // INITIAL_WINDOW_SIZE
    6: 262144,  // MAX_HEADER_LIST_SIZE
  },
  http2PseudoHeaderOrder: ["m", "a", "s", "p"],
};

const r2 = await impers.get("https://tls.peet.ws/api/all", { extraFp });
```
