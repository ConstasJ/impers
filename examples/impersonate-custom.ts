/**
 * Custom JA3/Akamai fingerprint example mirrored from
 * curl_cffi/examples/impersonate.py.
 *
 * This mirror only covers the fields currently exposed by impers'
 * ExtraFingerprint type.
 */
import * as impers from "impers";
import type { ExtraFingerprint } from "impers";

async function main() {
  const url = "https://tls.browserleaks.com/json";

  // OkHttp impersonation example
  const okhttp4Android10Ja3 = [
    "771",
    "4865-4866-4867-49195-49196-52393-49199-49200-52392-49171-49172-156-157-47-53",
    "0-23-65281-10-11-35-16-5-13-51-45-43-21",
    "29-23-24",
    "0",
  ].join(",");

  const okhttp4Android10Akamai = "4:16777216|16711681|0|m,p,a,s";

  const extraFp: ExtraFingerprint = {
    tlsSigAlgs: [
      "ecdsa_secp256r1_sha256",
      "rsa_pss_rsae_sha256",
      "rsa_pkcs1_sha256",
      "ecdsa_secp384r1_sha384",
      "rsa_pss_rsae_sha384",
      "rsa_pkcs1_sha384",
      "rsa_pss_rsae_sha512",
      "rsa_pkcs1_sha512",
      "rsa_pkcs1_sha1",
    ],
  };

  const response = await impers.get(url, {
    ja3: okhttp4Android10Ja3,
    akamai: okhttp4Android10Akamai,
    extraFp,
  });

  console.log(response.json());
}

main().catch(console.error);
