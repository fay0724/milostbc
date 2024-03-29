import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Analytics } from "@vercel/analytics/react"
import "./index.css"
import { Provider } from "react-redux"
import Store from "./app/Store.js"
import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom" // Import BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        {" "}
        {/* Tambahkan BrowserRouter di sini */}
        <App />
      </BrowserRouter>
      <Analytics />
    </Provider>
  </React.StrictMode>
)
