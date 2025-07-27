import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock() {
  const codeString = `
  #include<iostream>
  class Solution{
    
  }
  int main(){
    cout<<"hello";
  }`;

  return (
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      {codeString}
    </SyntaxHighlighter>
  );
}
