
import { NavbarComponent } from "../components/HeaderFooter/NavbarComponent";
import { CardComponent } from "../components/ProductsComponents/CardComponents";
import { useGetProductsQuery } from "../redux/features/car/car";


export default function ProductPage() {
    console.log("The data")
    const { data=[], isLoading, error } = useGetProductsQuery({
        page: 1,
        limit: 4
    });
    console.log(isLoading);
    console.log(error);

    return (
        <div>
            <NavbarComponent />
            <h1>Our Products</h1>
            <div className="grid container lg:grid-cols-4 p-8 gap-4">
            {
                data?.map((pro,index)=>(
                    <a href={`detail/${pro.id}`}>
                        <CardComponent key={index} image={pro?.image} 
                    model={pro.model}
                    description={pro.description}/>
                    </a>
                    
                ))
            }

        </div>
            {/* {
                data.map((data) => (
                    <DatabTableComponent
                        image={data?.image}
                        color={data?.color}
                        year={data?.year}
                        make={data?.make}
                        price={data?.price}
                    />

                ))
            } */}
            {/* <DataTableProduct/> */}




        </div>
    )
}
