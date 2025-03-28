import React from 'react';
import { Badge, Button } from ".."
import { Code, githubDark, javascript } from '../components/ui/code';

function App() {

  const code = `import React from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import { unified } from 'unified'
import rehypeReact from 'rehype-react'

// Define your CodeBlock component
const CodeBlock = ({ code, language }) => {
  const [htmlContent, setHtmlContent] = React.useState('')

  React.useEffect(() => {
    // Convert code using rehype plugins
    unified()
      .use(rehypeReact, { createElement: React.createElement })
      .use(rehypePrettyCode, {
        theme: 'dracula', // You can change the theme
        onVisitLine(node) {
          // Add extra functionality for each line if needed
        },
        onVisitHighlightedLine(node) {
          // Add special styling or behavior for highlighted lines
        },
      })
      .process(code)
      .then((file) => {
        setHtmlContent(String(file.contents))
      })
  }, [code])

  return (
    <div className={\`code-block language-\${language}\`}>
      <pre>{htmlContent}</pre>
    </div>
  )
}

export { CodeBlock };
`

  return (
    <>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <Button>Hello</Button>
      <Badge>Hello</Badge>
      <p>This is a <span className='text-primary'>primary</span> text with <span className='text-primary-50'>lighter colors</span></p>
      <Code 
        code={code} 
        lineNumbers 
        lang={javascript} 
        theme={githubDark}
        className='text-sm [&>pre]:max-h-40'
      />
    </>
  )
}

export default App
