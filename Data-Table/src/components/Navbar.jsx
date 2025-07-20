
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useNavigate } from "react-router";

export function NavbarHeader() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container mx-auto p-10">
        <Navbar fluid rounded>
          <NavbarBrand href="https://flowbite-react.com">
            <img src="/images.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          </NavbarBrand>
          <div className="flex md:order-2">
            <Button onClick={()=>navigate("/form")}>Add Student</Button>
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/form" >Register</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>

    </>
  );
}
