import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/AppRouter"
import CartContextProvider from "./context/CartContext"
import Swal from 'sweetalert2'

import "bulma/css/bulma.css";

function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>
      <AppRouter />

    </CartContextProvider>
    </BrowserRouter>
  )


}

export default App