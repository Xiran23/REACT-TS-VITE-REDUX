

import {Header} from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes";


import './App.css'

function App() {
  return (
    <>
   <Router>
      <div>
        <Header />
        <AllRoutes />
      </div>
    </Router>
    </>
  )
}

export default App
