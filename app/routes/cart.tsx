import { json, type ActionFunctionArgs } from '@shopify/remix-oxygen';
import { storefrontQuery } from '~/lib/shopify.server';

const CART_LINES_ADD_MUTATION = `#graphql
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        totalQuantity
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const cartAction = formData.get('cartAction');
  const linesData = formData.get('lines');

  if (cartAction === 'ADD_TO_CART' && linesData) {
    try {
      const lines = JSON.parse(linesData as string);
      
      // For now, return a simple response
      // In a full implementation, you'd need to:
      // 1. Get or create a cart ID (from cookies or session)
      // 2. Call the cartLinesAdd mutation using storefrontQuery
      // 3. Return the updated cart
      
      console.log('Adding to cart:', lines);
      
      return json({ 
        success: true,
        message: 'Item added to cart',
        lines 
      });
    } catch (error) {
      console.error('Error parsing lines data:', error);
      return json({ success: false, error: 'Invalid cart data' }, { status: 400 });
    }
  }

  return json({ success: false, error: 'Invalid action' }, { status: 400 });
}

