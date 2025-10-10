import { Badge, Button, Card, CardContent, Checkbox, CheckboxIndicator, CheckboxTile, Clipboard, RadioGroup, RadioGroupItem, RadioIndicator, RadioTile, Separator } from ".."
import { ClipboardActions, ClipboardCopyButton, ClipboardDownloadButton, ClipboardSecretButton, ClipboardText } from "../components/ui/clipboard";
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

const lv = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae numquam est vero, ab, quibusdam voluptatibus animi cumque repellendus molestiae, commodi quam doloribus. Magnam debitis facilis reiciendis suscipit pariatur voluptates placeat quidem deserunt reprehenderit inventore error esse repudiandae molestiae fugit rerum eaque laudantium est, qui dolorem culpa! Sunt, doloremque voluptatem. Laudantium quaerat deleniti ut! Minus vel similique cumque deleniti, laboriosam repellendus eos laborum quidem rem dolor unde beatae dolorem illum autem omnis. Voluptate placeat molestias sed in! Commodi necessitatibus aspernatur corrupti saepe labore incidunt, cumque illum dolores at veritatis dolor sint fugiat alias animi, quibusdam excepturi perspiciatis cum assumenda et odit. Iusto repellendus voluptates corporis, molestias, quos explicabo, amet odit deserunt mollitia iure nihil exercitationem a veniam consequatur! Sint dolores accusamus eaque eligendi."

  return (
    <div className="max-w-6xl m-auto">
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


      <div className="">
        <Card>
          <CardContent>
            <div className="flex flex-col">
            <Clipboard value={lv} />
            <Clipboard value={lv} showDownloadButton />
            <Clipboard value={lv} showDownloadButton secret />
            <Clipboard value={lv} multiline/>
            <Clipboard value={lv} className="bg-white" multiline secret>
              <ClipboardText className="text-sm text-blue-500" />
              <ClipboardActions className="gap-3">
                <ClipboardSecretButton />
                <ClipboardCopyButton className="text-blue" />
                <ClipboardDownloadButton fileName="hello.txt"/>
              </ClipboardActions>
            </Clipboard>
            </div>
          </CardContent>
        </Card>
      </div>
      
    </div>
  )
}

export default App
