/* eslint-disable react-refresh/only-export-components */
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import type { LanguageRegistration, ThemeRegistration } from "shiki";
import "./code.css";
import { Copy } from "lucide-react";
import { Button } from "./button";
// themes
import githubDarkTheme from "@shikijs/themes/github-dark";
import githubLightTheme from "@shikijs/themes/github-light";
// languages
import javascriptArr from "@shikijs/langs/javascript";
import typescriptArr from "@shikijs/langs/typescript";
import jsxArr from "@shikijs/langs/jsx";
import tsxArr from "@shikijs/langs/tsx";
import bashArr from "@shikijs/langs/bash";
import pythonArr from "@shikijs/langs/python";
import dockerArr from "@shikijs/langs/docker";
import dockerfileArr from "@shikijs/langs/dockerfile";
import yamlArr from "@shikijs/langs/yaml";
import cmdArr from "@shikijs/langs/cmd";
import xmlArr from "@shikijs/langs/xml";
import htmlArr from "@shikijs/langs/html";
import jsonArr from "@shikijs/langs/json";
import cssArr from "@shikijs/langs/css";
import scssArr from "@shikijs/langs/scss";
import javaArr from "@shikijs/langs/java";
import goArr from "@shikijs/langs/go";
import logArr from "@shikijs/langs/log";
import terraformArr from "@shikijs/langs/terraform";
import { getHighlighterSingleton } from "@/lib/shikiHighlighter";

const javascript = javascriptArr[0];
const typescript = typescriptArr[0];
const jsx = jsxArr[0];
const tsx = tsxArr[0];
const bash = bashArr[0];
const python = pythonArr[0];
const docker = dockerArr[0];
const dockerfile = dockerfileArr[0];
const yaml = yamlArr[0];
const cmd = cmdArr[0];
const xml = xmlArr[0];
const html = htmlArr[0];
const json = jsonArr[0];
const css = cssArr[0];
const scss = scssArr[0];
const java = javaArr[0];
const go = goArr[0];
const log = logArr[0];
const terraform = terraformArr[0];

const githubDark = githubDarkTheme;
const githubLight = githubLightTheme;

interface CodeProps {
  code: string;
  lang?: LanguageRegistration;
  theme?: ThemeRegistration;
  lineNumbers?: boolean;
  wrap?: boolean;
  className?: string;
  showCopyButton?: boolean;
  label?: ReactNode;
  containerClassName?: string;
  topbarClassName?: string;
  buttonClassName?: string;
  onCopied?: (value: string) => void;
}

const Code = ({
  code,
  wrap = true,
  lang,
  theme = githubDark,
  lineNumbers = false,
  label,
  showCopyButton = true,
  onCopied,
  containerClassName,
  topbarClassName,
  buttonClassName,
  className,
}: CodeProps) => {
  const [highlighted, setHighlighted] = useState<string>("");

  useEffect(() => {
    async function highlight() {
      const highlighter = await getHighlighterSingleton();
  
      // Dynamically load language if not already loaded
      if (lang && !highlighter.getLoadedLanguages().includes(lang.name)) {
        await highlighter.loadLanguage(lang);
      }
  
      // Dynamically load theme if not already loaded
      if (theme.name && !highlighter.getLoadedThemes().includes(theme.name)) {
        await highlighter.loadTheme(theme);
      }
  
      const html = highlighter.codeToHtml(code, {
        lang: lang?.name || '',
        theme: theme,
      });
  
      setHighlighted(html);
    }
  
    highlight();
  }, [code, lang, theme]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    onCopied?.(code);
  };

  const showTopbar = label || showCopyButton;

  return (
    <div className={cn("relative border border-border rounded-sm", containerClassName)}>
      {showTopbar && (
        <div
          className={cn(
            "absolute top-0 left-0",
            "flex justify-between items-center",
            "w-full p-2 py-2 z-10",
            "rounded-t-sm bg-neutral-700 text-neutral-200",
            'font-semibold text-sm',
            topbarClassName
          )}
        >
          {label}
          {showCopyButton && (
            <Button
              aria-label="Copy code"
              size="xs"
              variant="neutral"
              className={cn(
                "p-1 rounded-md bg-neutral-700 hover:bg-neutral-800",
                buttonClassName
              )}
              onClick={copyToClipboard}
              title="Copy code"
            >
              <Copy className="size-3" />
            </Button>
          )}
        </div>
      )}
      <div
        data-theme={theme}
        className={cn(
          "shiki",
          "rounded-b-sm",
          "[&>pre]:rounded-b-sm",
          "[&>pre]:overflow-x-auto",
          "[&>pre]:p-2",
          "overflow-auto",
          wrap && '[&>pre]:whitespace-pre-wrap [&>pre]:break-all',
          showTopbar && "pt-9",
          lineNumbers && "showLines",
          className
        )}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
};

Code.displayName = "Code";

export {
  Code,
  javascript,
  typescript,
  jsx,
  tsx,
  bash,
  python,
  docker,
  dockerfile,
  yaml,
  cmd,
  xml,
  html,
  json,
  css,
  scss,
  java,
  go,
  log,
  terraform,
  githubDark,
  githubLight,
};