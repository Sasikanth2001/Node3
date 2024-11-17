import Topbar from "./components/Topbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Approutes from "./utils/AppRoutes"
function App() {
  
const router=createBrowserRouter(Approutes);

  return (
   <>     
      <RouterProvider router={router}/>
   </>
  )
}

export default App
