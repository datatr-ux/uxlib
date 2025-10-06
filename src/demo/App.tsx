import { Badge, Button, Checkbox, CheckboxIndicator, CheckboxTile, RadioGroup, RadioGroupItem, RadioIndicator, RadioTile, Separator } from ".."
import { Code, githubDark, javascript } from '../components/ui/code';
import { Star } from 'lucide-react';
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

      <RadioGroup defaultValue="react" className="mt-4" aria-label="Framework">
        <RadioTile value="react" id="r1">
          <div className='flex items-center gap-2'>
            <RadioIndicator />
            <h5>React</h5>
          </div>
          <Separator orientation="horizontal" className="my-2" />
        </RadioTile>
        <RadioTile value="solid" id="r2">
          <div className='flex items-center gap-2'>
            <RadioIndicator />
            <h5>solid</h5>
          </div>
          <Separator orientation="horizontal" className="my-2" />
        </RadioTile>
        <RadioTile value="svelte" id="r3">
          <div className='flex items-center gap-2'>
            <RadioIndicator />
            <h5>svelte</h5>
          </div>
          <Separator orientation="horizontal" className="my-2" />
        </RadioTile>
        <RadioTile value="vue" id="r4">
          <div className='flex items-center gap-2'>
            <RadioIndicator className='border-purple-800 bg-pink-300'><Star className="h-2.5 w-2.5 fill-current text-current" /> </RadioIndicator>
            <h5>vue</h5>
          </div>
          <Separator orientation="horizontal" className="my-2" />
        </RadioTile>
        <RadioGroupItem value="angular" id="r5" />
      </RadioGroup>

      <div className="grid gap-2">
      <CheckboxTile defaultChecked>
        <div className='flex items-center gap-2'>
          <CheckboxIndicator><Star className="h-4 w-4" /></CheckboxIndicator>
          <h5>Check me</h5>
        </div>
        <Separator />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a amet maxime animi optio quia officia minus beatae qui non?</p>
      </CheckboxTile>
     <CheckboxTile defaultChecked>
        <div className="flex items-center gap-2">
          <CheckboxIndicator /> {/* ✅ inside the Root */}
          <h5>Check me</h5>
        </div>
        <Separator orientation="horizontal" className="my-2" />
      </CheckboxTile>
      <Checkbox defaultChecked /> Check me
      </div>
    </>
  )
}

export default App
