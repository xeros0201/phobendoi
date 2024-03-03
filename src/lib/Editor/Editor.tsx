// @ts-nocheck
import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
 
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
 
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
 
import "./styles.css";
 
function Placeholder() {
  return <div className="editor-placeholder"></div>;
}

export const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
 
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};

export default function Editor({onChange,value}:any) {
   
  return (
    <LexicalComposer  initialConfig={{ editable:false,...editorConfig,editorState:value}}>
      <div className=" text-22px font-300 font-BVP mb:text-16px   w-full">
        {/* <ToolbarPlugin   /> */}
        <div className="">
        <OnChangePlugin 
        
       />
          <RichTextPlugin

            contentEditable={<ContentEditable readOnly={true}  className="" />}
     
          />
     
          {/* <TreeViewPlugin /> */}
      
        </div>
      </div>
    </LexicalComposer>
  );
}
