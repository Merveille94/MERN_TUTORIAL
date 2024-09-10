import{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Mainlayout from './layout/Mainlayout';
import Homepage from './pages/Homepage';
import CreatePage from './pages/createPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='/create' element={<CreatePage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/> 
}

export default App