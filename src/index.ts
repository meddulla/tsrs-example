import { greet, isLanguage } from "./greeting.js";

export default {
  async fetch(request): Promise<Response> {
    const url = new URL(request.url);
    const name = url.searchParams.get("name") ?? "world";
    const lang = url.searchParams.get("lang") ?? "en";
    if (!isLanguage(lang)) {
      return Response.json({ error: `unsupported language: ${lang}` }, { status: 400 });
    }
    return Response.json({ message: greet(name, lang) });
  },
} satisfies ExportedHandler;
