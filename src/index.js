import React from "react"
import ReactDOM from "react-dom"
import './styles/styles.scss'
import App from "./App"
import { AppProvider } from "./context"

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  , document.querySelector("#root"))

if (module.hot) {
  module.hot.accept()
}
