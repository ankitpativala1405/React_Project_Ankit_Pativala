import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {TablePage} from '../pages/TablePage'
import FormPage from '../pages/FormPage'

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  )
}

export default AllRouter
