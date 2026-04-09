/**
 * Requests-like usage example mirrored from curl_cffi/examples/requests_like.py
 */
import * as impers from "impers";

async function main() {
  const url = "https://tls.browserleaks.com/json";

  const plain = await impers.get(url);
  console.log("No impersonation:");
  console.log(plain.json());

  const impersonated = await impers.get(url, {
    impersonate: "chrome142",
  });
  console.log("\nWith request-level impersonation:");
  console.log(impersonated.json());

  const session = new impers.Session({
    impersonate: "chrome142",
  });

  try {
    const sessionResponse = await session.get(url);
    console.log("\nWith session-level impersonation:");
    console.log(sessionResponse.json());
  } finally {
    await session.close();
  }
}

main().catch(console.error);
