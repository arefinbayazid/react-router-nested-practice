import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Dashboard from './components/Dashboard/Dashboard'
import Product from './components/Shop/Product'
import ViewProducts from './components/Dashboard/ViewProducts/ViewProducts'
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts'
import DashBoardMain from './components/Dashboard/DashBoardMain/DashBoardMain'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<Home />} />
        <Route path = 'home' element ={<Home />} />
        <Route path = 'shop' element ={<Shop />} />
        <Route path = 'shop/:id' element ={<Product />} />
        <Route path = '/dashboard' element ={<Dashboard />}>
          <Route path ="dashboard-main" element ={<DashBoardMain></DashBoardMain>} />
          <Route path ="view-product" element ={<ViewProducts></ViewProducts>} />
          <Route path ="manage-product" element ={<ManageProducts></ManageProducts>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
