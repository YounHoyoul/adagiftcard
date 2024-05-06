import { FreshContext } from "$fresh/server.ts";

export const handler = [
  async function middlewareContentType(_req: Request, ctx: FreshContext) {
    const response = await ctx.next();

    response.headers.set(
      "Content-Type",
      "application/json",
    );

    return response;
  },
  async function middlewareCORS(_req: Request, ctx: FreshContext) {
    const response = await ctx.next();

    response.headers.set(
      "Access-Control-Allow-Origin",
      "https://www.naver.com",
    );
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET",
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type",
    );

    return response;
  },
];
