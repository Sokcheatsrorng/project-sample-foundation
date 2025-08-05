import { CreateProductForm } from "../components/Forms/CreateProductForm";
import { UpdateProductForm } from "../components/Forms/UpdateProductForm";
import { NavbarComponent } from "../components/HeaderFooter/NavbarComponent";
import FileUploadComponent from "../components/ProductsComponents/FileUploadComponent";
import TestComponent from "../components/TestComponent";
import CounterComponent from "../components/TestComponent/CounterComponent";



export default function HomePage() {
  return (
    <div>
        <NavbarComponent/>
         <CounterComponent/>
          <CreateProductForm/>
          <div>
            <h1>Update Product</h1>
            <UpdateProductForm/>
          </div>
          <FileUploadComponent/>
      
    </div>
  )
}
