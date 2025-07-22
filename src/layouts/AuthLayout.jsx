import LoginComponent from "../components/AuthComponents/LoginComponent";
import { NavbarComponent } from "../components/HeaderFooter/NavbarComponent";



export default function AuthLayout() {
  return (
    <div>
         <NavbarComponent/>
         <LoginComponent/>
    </div>
  )
}
