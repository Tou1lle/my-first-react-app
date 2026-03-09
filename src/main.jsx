import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import TestComponent from './TestComponent.jsx'
import { RenderList, RenderList2, ListApp } from './RenderList.jsx'
import { ConditionalApp, ConditionalAppBigger } from './ConditionalRender.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <TestComponent />
    <RenderList />
    <RenderList2 />
    <ListApp />
    <ConditionalApp />
    <ConditionalAppBigger />
  </StrictMode>,
)
