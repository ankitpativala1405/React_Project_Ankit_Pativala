import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TablePage } from '../pages/TablePage'
import FormPage from '../pages/FormPage'
import EditFormPage from '../pages/EditFormPage'

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/edit/:id" element={<EditFormPage />} />
      </Routes>
    </div>
  )
}

export default AllRouter
