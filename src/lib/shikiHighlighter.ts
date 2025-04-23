import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
import wasm from "shiki/wasm";

import githubDark from "@shikijs/themes/github-dark";
import githubLight from "@shikijs/themes/github-light";
import javascript from "@shikijs/langs/javascript";

let highlighterPromise: ReturnType<typeof createHighlighterCore> | null = null;

export async function getHighlighterSingleton() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      themes: [githubDark, githubLight],
      langs: [javascript[0]],
      engine: createOnigurumaEngine(wasm),
    });
  }
  return highlighterPromise;
}
