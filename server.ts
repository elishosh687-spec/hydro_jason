import {createRequestHandler} from '@shopify/remix-oxygen';
// @ts-ignore - This will be generated at build time
import * as remixBuild from 'virtual:remix/server-build';

export default {
  async fetch(
    request: Request,
    env: Record<string, string>,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    try {
      const handleRequest = createRequestHandler({
        build: remixBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => ({
          env,
          waitUntil: executionContext.waitUntil.bind(executionContext),
        }),
      });

      return await handleRequest(request);
    } catch (error) {
      console.error('Server error:', error);
      return new Response('An unexpected error occurred', {status: 500});
    }
  },
};

