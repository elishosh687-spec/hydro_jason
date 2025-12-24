/**
 * Shopify Storefront API client
 * Fetches data from Shopify Storefront API using GraphQL
 */

interface StorefrontQueryOptions {
  storeDomain?: string;
  storefrontApiToken?: string;
}

export async function storefrontQuery<T = any>(
  query: string,
  variables: Record<string, any> = {},
  options: StorefrontQueryOptions = {}
): Promise<{ data: T; errors?: any[] }> {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/26410a63-5106-4bd0-b49a-22b6d6600567',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'shopify.server.ts:11',message:'storefrontQuery entry',data:{hasStoreDomain:!!options.storeDomain,hasToken:!!options.storefrontApiToken},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion

  // Try to get from options first, then fall back to process.env (for local dev)
  const STORE_DOMAIN = options.storeDomain || process.env.PUBLIC_STORE_DOMAIN || '';
  const STOREFRONT_API_TOKEN = options.storefrontApiToken || process.env.PUBLIC_STOREFRONT_API_TOKEN || '';

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/26410a63-5106-4bd0-b49a-22b6d6600567',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'shopify.server.ts:18',message:'Environment check',data:{hasStoreDomain:!!STORE_DOMAIN,hasToken:!!STOREFRONT_API_TOKEN},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
  // #endregion

  const SHOPIFY_STOREFRONT_API_URL = STORE_DOMAIN 
    ? `https://${STORE_DOMAIN}/api/2024-01/graphql.json`
    : '';

  console.log('🔧 Storefront API Configuration:', {
    storeDomain: STORE_DOMAIN,
    hasToken: !!STOREFRONT_API_TOKEN,
    apiUrl: SHOPIFY_STOREFRONT_API_URL
  });

  if (!SHOPIFY_STOREFRONT_API_URL || !STOREFRONT_API_TOKEN) {
    throw new Error(
      'Missing Shopify Storefront API configuration. Please set PUBLIC_STORE_DOMAIN and PUBLIC_STOREFRONT_API_TOKEN environment variables.'
    );
  }

  const response = await fetch(SHOPIFY_STOREFRONT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_API_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  console.log('📡 Storefront API Response:', {
    status: response.status,
    statusText: response.statusText,
    ok: response.ok
  });

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/26410a63-5106-4bd0-b49a-22b6d6600567',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'shopify.server.ts:54',message:'Response status check',data:{status:response.status,statusText:response.statusText,ok:response.ok},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion

  // Read response body once - can only be read once!
  const responseText = await response.text();
  
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/26410a63-5106-4bd0-b49a-22b6d6600567',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'shopify.server.ts:66',message:'Response text received',data:{textPreview:responseText.substring(0,200),isJSON:responseText.trim().startsWith('{')||responseText.trim().startsWith('['),status:response.status},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion

  if (!response.ok) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/26410a63-5106-4bd0-b49a-22b6d6600567',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'shopify.server.ts:70',message:'Error response',data:{errorText:responseText.substring(0,200),status:response.status},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    console.error('❌ Storefront API Error Response:', responseText);
    throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
  }

  let result;
  try {
    result = JSON.parse(responseText);
  } catch (parseError) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/26410a63-5106-4bd0-b49a-22b6d6600567',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'shopify.server.ts:78',message:'JSON parse error',data:{error:parseError instanceof Error ? parseError.message : String(parseError),textPreview:responseText.substring(0,200)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    throw new Error(`Failed to parse Shopify API response as JSON: ${parseError instanceof Error ? parseError.message : String(parseError)}`);
  }

  if (result.errors) {
    console.error('❌ GraphQL Errors:', result.errors);
    // Return errors instead of throwing, so the loader can handle them
    return { data: result.data || null, errors: result.errors };
  }

  console.log('✅ Storefront API Success');
  return { data: result.data, errors: undefined };
}

