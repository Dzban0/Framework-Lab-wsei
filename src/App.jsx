import {Routes,Route} from 'react-router-dom';
// import './App.css'

import RootLayout from './layouts/RootLayout.jsx'
import Lab1 from  './pages/Lab1.jsx'
import Lab2 from  './pages/Lab2.jsx'
import Lab3 from  './pages/Lab3.jsx'
import Home from  './pages/home.jsx'
import NotFound from  './pages/NotFound.jsx'


function App() {
  const menuItems = [
    {id: 1, label: "Home",url:"/",urlPattern:"/",element:<Home/>},
    {id: 2, label: "Lab1",url:"/Lab1",urlPattern:"/Lab1",element:<Lab1/>}, 
    {id: 3, label: "Lab2",url:"/Lab2/:id",urlPattern: "/lab2/:id",element:<Lab2/>},
    {id: 4, label: "Lab3",url:"/Lab3",urlPattern:"/Lab3",element:<Lab3/>}, 
    {id: 5, label: "Lab4",url:"/Lab4",urlPattern:"/Lab4",element:<Lab4/>}, 
  ];
  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
              {menuItems.map(item=>(
                <Route path={item.url} element={item.element} key={item.id}></Route>
              ))}
              <Route path='/*' element={<NotFound/>}/>
          </Routes>
      </RootLayout>
    </>
  )
}

export default App
