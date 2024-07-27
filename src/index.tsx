import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './logo.svg'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <h1>this is cicd test</h1>
    <img src="./logo192.png" alt="" />
    <img src={logo} alt="" />
  </>,
)
