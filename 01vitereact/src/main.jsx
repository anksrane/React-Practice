import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// Syntax
/*
const reactElement=React.createElement('tag name',{object key value pair that contains Attributes},
  'Text to Show'
)
*/
const anotherUser='From Button'
// Create HTML Element Using React
const reactElement=React.createElement('a',{href:'https://google.com',target:'_blank'},
  'Click me to Visit Google'  
)

const anotherElement=(
  <a href='https://google.com' target='_blank'> Go To Google</a>
)

createRoot(document.getElementById('root')).render(
  reactElement
)
