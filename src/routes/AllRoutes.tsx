
import { Routes , Route } from "react-router-dom";
import {Home ,TaskList , TaskDetails} from "../pages"

export const AllRoutes = () => {
  return (
   <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/taskList' element={<TaskList/>}></Route>
        <Route path='/taskdetails/:id' element={<TaskDetails/>}></Route>



   </Routes>
  )
}
