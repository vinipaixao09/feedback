import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Home } from "./pages/home.jsx"
import { theme } from "./styles/theme"
import { GlobalStyle } from "./styles/global.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

export function App() {
  return (
    <div>
      <ThemeProvider theme={theme}> 
        <RouterProvider router={router} />
        <GlobalStyle/>
      </ThemeProvider>
    </div>
  )
}