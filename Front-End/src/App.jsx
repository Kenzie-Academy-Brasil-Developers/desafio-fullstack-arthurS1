import { ExampleProvider } from "./providers/UserContext"
import { ContactProvider } from "./providers/contacts";
import Rotas from "./routes/Rotas"
import './style/index.scss'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div className="App">

      <ExampleProvider>
        <ContactProvider>
          <Rotas />
        </ContactProvider>
      </ExampleProvider>

      <ToastContainer />
    </div>
  )
}
export default App
