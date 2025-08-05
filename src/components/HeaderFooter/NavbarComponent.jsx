
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

export function NavbarComponent() {
    const count = useSelector((state) => state.counter.value)


    return (
        <Navbar fluid rounded>
            {/* logo */}
            <NavbarBrand href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                {/* navlink for homepage */}
                <NavLink to="/" >
                    Home
                </NavLink>
                {/* navlink for products */}
                <NavLink to="/product" >
                    Product
                </NavLink>
                {/* navlink for about us */}
                <NavLink to="/about" >
                    About Us
                </NavLink>
                {/* auth */}
                    <NavLink to="/auth" >
                     Login
                </NavLink>
                  <NavLink to="/cart" >
                      <div className="relative">
                        🛒
                      </div>
                      <div className=" px-2 rounded-4xl  bg-red-500 absolute top-2 ">{count}</div>
                </NavLink>
            </NavbarCollapse>
        </Navbar>
    );
}
