import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*const reactElement = {
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to go to google'
}*/

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  "click me !!!!!!!!!!"
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <App/>
)
