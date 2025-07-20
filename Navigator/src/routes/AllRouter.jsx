import { Route, Routes, BrowserRouter } from 'react-router-dom'
import IndexPage from '../pages/IndexPage'

const AllRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRouter
