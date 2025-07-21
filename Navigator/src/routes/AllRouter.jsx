import { Route, Routes } from 'react-router-dom'
import IndexPage from '../pages/IndexPage'
import Login from '../pages/LOgin'
import AboutUs from '../pages/AboutUs'
import Signup from '../pages/sIGNUP.JSX'
import ForgetPassword from '../pages/ForgetPassword'
import ErrorPage from '../pages/ErrorPage'

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/forgotpassword" element={<ForgetPassword />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AllRouter
