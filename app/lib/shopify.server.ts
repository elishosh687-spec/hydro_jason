/**
 * Shopify Storefront API client
 * Fetches data from Shopify Storefront API using GraphQL
 */

const STORE_DOMAIN = process.env.PUBLIC_STORE_DOMAIN || '';
const STOREFRONT_API_TOKEN = process.env.PUBLIC_STOREFRONT_API_TOKEN || '';

// Construct the Storefront API URL from the domain
const SHOPIFY_STOREFRONT_API_URL = STORE_DOMAIN 
  ? `https://${STORE_DOMAIN}/api/2024-01/graphql.json`
  : '';

export async function storefrontQuery<T = any>(
  query: string,
  variables: Record<string, any> = {}
): Promise<{ data: T; errors?: any[] }> {
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

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
  }

  return result;
}

