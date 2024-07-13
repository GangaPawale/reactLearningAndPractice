import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const ReactElement={
  type:'a',
  props:{
      href:'http://www.google.com',
      target:'_blank'

  },
  children:"click me to go to google"
}
// const ReactEle=['a','http://www.google.com','_blank','click me to visit using custom element']
//this array also cant work fine 


//this custom element works fine then why not above 
//because render is builtin method and must takes input of particular format ,and our ReactElement does not match that format 
// so try using creating element using react.createElement method
const anotherElement=(<a href='https://www.google.com' target="_blank">click me</a>)


const CustomReactEle=React.createElement('a',{href:'https://www.google.com',target:'_blank'},'click me to visit google using reactElement')

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // ReactElement
    // anotherElement
    // ReactEle
    CustomReactEle
 
)

