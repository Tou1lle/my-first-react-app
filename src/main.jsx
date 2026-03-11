import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import TestComponent from './TestComponent.jsx'
import { RenderList, RenderList2, ListApp } from './rendering-techniques/RenderList.jsx'
import { ConditionalApp, ConditionalAppBigger } from './rendering-techniques/ConditionalRender.jsx'
import ButtonApp from './passing-data/PassingData.jsx'
import ButtonApp2 from './passing-data/PassingData2.jsx'
import { TodoList, MonthList } from './keys.jsx/Todos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <TestComponent />
    <RenderList />
    <RenderList2 />
    <ListApp />
    <ConditionalApp />
    <ConditionalAppBigger />
    <ButtonApp2 />
    <TodoList />
    <MonthList></MonthList>
  </StrictMode>,
)
