import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListEmployeesComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'

function App() {

  return (
    <>
    <BrowserRouter>
    <h1 className='text-center text-success'>Employee Crud</h1>
      <HeaderComponent></HeaderComponent>
      <Routes>
      <Route path='/' element={<ListEmployeesComponent></ListEmployeesComponent>}></Route>
      <Route path='/employees' element={<ListEmployeesComponent></ListEmployeesComponent>}></Route>
      <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
      {/* http://http://localhost:5173/edit-employee/1 */}
      <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
      
      </Routes>
      <FooterComponent/>
    </BrowserRouter> 
      
    </>
  )
}

export default App
