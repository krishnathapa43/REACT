import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom App !</h1>
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com' target="_blank">visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://facebook.com', target:'_blank'},
  'Click me to visit facebook'
)

ReactDOM.createRoot(document.getElementById('root')).render(

     <App />
   //<MyApp/>
  //anotherElement
  //reactElement
)
