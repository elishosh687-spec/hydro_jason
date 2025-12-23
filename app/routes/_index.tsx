import { json, type LoaderFunctionArgs } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { storefrontQuery } from '~/lib/shopify.server';
import { Layout } from '~/components/Layout';
import { HeroVideoCarousel } from '~/components/HeroVideoCarousel';
import { Hero } from '~/components/Hero';
import { BenefitsList } from '~/components/BenefitsList';
import { WhyChooseUsSection } from '~/components/WhyChooseUsSection';
import { PricingSelectionSection } from '~/components/PricingSelectionSection';
import { PaymentAndTestimonialSection } from '~/components/PaymentAndTestimonialSection';
import { ProblemSolutionSection } from '~/components/ProblemSolutionSection';
import { AntiColicBenefitsSection } from '~/components/AntiColicBenefitsSection';
import { BenefitsGridSection } from '~/components/BenefitsGridSection';
import { SuitabilityCheckSection } from '~/components/SuitabilityCheckSection';
import { SocialProof } from '~/components/SocialProof';
import { HowItWorksSection } from '~/components/HowItWorksSection';
import { FounderStorySection } from '~/components/FounderStorySection';
import { BonusProductsSection } from '~/components/BonusProductsSection';
import { IndependenceVideoSection } from '~/components/IndependenceVideoSection';
import { GuaranteeSection } from '~/components/GuaranteeSection';
import { FaqSection } from '~/components/FaqSection';
import { FinalCtaSection } from '~/components/FinalCtaSection';
import { Footer } from '~/components/Footer';
import { StickyBuyBar } from '~/components/StickyBuyBar';
import { SelectedVariantProvider } from '~/lib/SelectedVariantContext';

const PRODUCT_QUERY = `#graphql
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      images(first: 10) {
        nodes {
          id
          url
          altText
          width
          height
        }
      }
      variants(first: 10) {
        nodes {
          id
          title
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          availableForSale
        }
      }
    }
  }
`;

export async function loader({ request, context }: LoaderFunctionArgs) {
  try {
    console.log('🔍 LOADER: Starting product fetch');
    console.log('🔍 LOADER: PUBLIC_STORE_DOMAIN:', context.env.PUBLIC_STORE_DOMAIN);
    console.log('🔍 LOADER: Has PUBLIC_STOREFRONT_API_TOKEN:', !!context.env.PUBLIC_STOREFRONT_API_TOKEN);

    // Try using the custom storefrontQuery first
    const { data, errors } = await storefrontQuery(
      PRODUCT_QUERY,
      { handle: 'האכלה-קלה-ערכת' },
      {
        storeDomain: context.env.PUBLIC_STORE_DOMAIN,
        storefrontApiToken: context.env.PUBLIC_STOREFRONT_API_TOKEN,
      }
    );

    if (errors) {
      console.error('❌ LOADER: GraphQL errors:', errors);
      console.warn('⚠️ LOADER: Using mock data due to GraphQL errors');
      return json({
        product: createMockProduct(),
      });
    }

    if (!data?.product) {
      console.error('❌ LOADER: Product not found');
      console.warn('⚠️ LOADER: Using mock data as fallback');
      return json({
        product: createMockProduct(),
      });
    }

    console.log('✅ LOADER: Product fetched successfully');
    console.log('✅ LOADER: Product ID:', data.product.id);
    console.log('✅ LOADER: Variants count:', data.product?.variants?.nodes?.length);

    return json({
      product: data.product,
    });
  } catch (error) {
    console.error('❌ LOADER ERROR:', error instanceof Error ? error.message : String(error));
    console.warn('⚠️ LOADER: Using mock data due to error');
    
    // Return mock product as fallback
    return json({
      product: createMockProduct(),
    });
  }
}

// Mock product data for testing when Shopify API is not available
function createMockProduct() {
  return {
    id: 'gid://shopify/Product/mock-feedease',
    title: 'FeedEase - ערכת האכלה קלה',
    description: 'ערכת האכלה קלה ומהירה לתינוקות',
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/mock-variant-1',
          title: 'קנה 1',
          price: {
            amount: '199.00',
            currencyCode: 'ILS',
          },
          compareAtPrice: null,
          availableForSale: true,
        },
        {
          id: 'gid://shopify/ProductVariant/mock-variant-2',
          title: 'קנה 2 וחסוך 15%',
          price: {
            amount: '349.00',
            currencyCode: 'ILS',
          },
          compareAtPrice: {
            amount: '399.00',
            currencyCode: 'ILS',
          },
          availableForSale: true,
        },
        {
          id: 'gid://shopify/ProductVariant/mock-variant-3',
          title: 'קנה 3 וחסוך 25%',
          price: {
            amount: '449.00',
            currencyCode: 'ILS',
          },
          compareAtPrice: {
            amount: '599.00',
            currencyCode: 'ILS',
          },
          availableForSale: true,
        },
      ],
    },
  };
}

export default function Index() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <SelectedVariantProvider>
      <Layout>
        <div className="pb-24 md:pb-28">
          <HeroVideoCarousel />
          <Hero />
          <div className="container mx-auto px-4 py-8 md:py-12">
            <BenefitsList />
          </div>
          <div id="pricing">
            <PricingSelectionSection product={product} />
          </div>
          <WhyChooseUsSection />
          <PaymentAndTestimonialSection />
          <ProblemSolutionSection />
          <AntiColicBenefitsSection />
          <SuitabilityCheckSection />
          <BenefitsGridSection />
          <SocialProof />
          <HowItWorksSection />
          <FounderStorySection />
          <BonusProductsSection />
          <IndependenceVideoSection />
          <GuaranteeSection />
          <FaqSection />
          <FinalCtaSection />
          <Footer />
        </div>
        <StickyBuyBar />
      </Layout>
    </SelectedVariantProvider>
  );
}

