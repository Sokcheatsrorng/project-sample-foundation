



// import { zodResolver } from "@hookform/resolvers/zod";
import {  Label } from "flowbite-react";
import {  useForm } from "react-hook-form";
import { useUpdateProductsMutation } from "../../redux/features/car/car";
// import {z} from 'zod'


// define schema validation for create Car already
// const schemaValidation = z.object({
//    make: z.string().min(2, "Input make at least 2 letter up"),
//    model: z.string().min(2, "Input make at least 2 letter up"),
//    year: z.number(),
//    price: z.number(),
//    mileage: z.number(),
//    description: z.string().min(2, "Input make at least 2 letter up"),
//    color: z.string().min(2, "Input make at least 2 letter up"),
//    fuel_type: z.string().min(2, "Input make at least 2 letter up"),
//    transmission: z.string().min(2, "Input make at least 2 letter up"),
//    image: z.string().min(2, "Input make at least 2 letter up"),
//    is_sold: z.boolean()
// })

export function UpdateProductForm() {

//    using create prouduct mutation 
const [updateCar, {data, error, isLoading}] = useUpdateProductsMutation();
    console.log(isLoading);
    console.log(error)
    console.log(data)

    // define using with useForm 
    const {register, handleSubmit} = useForm({
        //  resolver: zodResolver(schemaValidation),
         defaultValue: {
         make: "",
         model: "",
         year: 0,
         price: 0, 
         mileage:0,
         description: "",
         color: "",
         fuel_type: "",
         transmission: "", 
         image: "",
         is_sold: false
       }
    })

    // accessToken 
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb21vQGdtYWlsLmNvbSIsImV4cCI6MTc1MzY3MTc3OSwidHlwZSI6ImFjY2VzcyJ9.W2UeuFzkBFw_XKWnvbt0CSy3CklQ_rip_hJpHUrwOAE"

    function onSubmit(values){
        console.log(values);
        updateCar({
            id:"ca6863bc-feaf-4e20-83bd-02f475a59eb2",
            updateCar:{
                make: values.make,
                model: values.model,
                year: values.year,
                price: values.price, 
                mileage:values.mileage,
                description: values.description,
                color:values.color,
                fuel_type: values.fuel_type,  
                transmission: values.transmission, 
                image: values.image,
                is_sold: false
            },
            accessToken: accessToken
        })
    }


  return (
    <div>
            <form  onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
        {/* make */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="make">Make</Label>
        </div>
        <input id="email1" type="text" placeholder="name@flowbite.com" required {...register("make")} className="border p-2 rounded-lg" />
      </div>
      {/* model */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="model">Model</Label>
        </div>
        <input id="model" type="text" required  {...register("model")} className="border p-2 rounded-lg"/>
      </div>
      {/* year */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="year">Year</Label>
        </div>
        <input id="year" type="number" required  {...register("year")} className="border p-2 rounded-lg"/>
      
      </div>
      {/* price */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="price">Price</Label>
        </div>
        <input id="price" type="number" required  {...register("price")} className="border p-2 rounded-lg"/>
      </div>
      {/* mileage*/}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="mileage">Mileage</Label>
        </div>
        <input id="mileage" type="number" required  {...register("mileage")} className="border p-2 rounded-lg"/>
      </div>
      {/* description */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="description">Description</Label>
        </div>
        <input id="price" type="text" required  {...register("description")} className="border p-2 rounded-lg"/>
      </div>
      {/* color */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="color">Color</Label>
        </div>
        <input id="price" type="text" required  {...register("color")} className="border p-2 rounded-lg"/>
      </div>
      {/* fuelType*/}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="fuel_type">Fuel Type</Label>
        </div>
        <input id="price" type="text" required  {...register("fuel_type")} className="border p-2 rounded-lg"/>
      </div>
      {/* transmission */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="transmission">Transimission</Label>
        </div>
        <input id="transmission" type="text" required  {...register("transmission")} className="border p-2 rounded-lg"/>
      </div>
      {/* image */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="image">Image</Label>
        </div>
        <input id="image" type="text" required  {...register("image")} className="border p-2 rounded-lg"/>
      </div>
    
       <input type="submit" value={"Update"} />
    </form>
    <div>
       
    </div>
    </div>

  );
}
