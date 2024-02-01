import { ExampleProvider } from "./providers/UserContext"
import { TechsProvider } from "./providers/techs";
import Rotas from "./routes/Rotas"
import './style/index.scss'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div className="App">

      <ExampleProvider>
        <TechsProvider>
          <Rotas />
        </TechsProvider>
      </ExampleProvider>

      <ToastContainer />
    </div>
  )
}
export default App
