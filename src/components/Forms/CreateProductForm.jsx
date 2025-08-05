



// import { zodResolver } from "@hookform/resolvers/zod";
import {  Label } from "flowbite-react";
import {  useForm } from "react-hook-form";
// import {z} from 'zod'
import { useCreateProductsMutation } from "../../redux/features/car/car";
import { getDecryptedAccessToken } from "../../utils/tokenUtils";



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
//    image: z.string().min(2, "Input make at least 2 letter up")
// })

export function CreateProductForm() {

//    using create prouduct mutation 
const [createCar, {data, error, isLoading}] = useCreateProductsMutation();
    console.log(isLoading);
    console.log(error)
    console.log(data)

    // define using with useForm 
    const {register, handleSubmit} = useForm({
        //  resolver: zodResolver(schemaValidation),
         defaultValues: {
         make: "",
         model: "",
         year: 0,
         price: 0, 
         mileage:0,
         description: "",
         color: "",
         fuel_type: "",
         transmission: "",
         file: null
       }
    })

    // accessToken 
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb21vQGdtYWlsLmNvbSIsImV4cCI6MTc1MzY3MDI5MCwidHlwZSI6ImFjY2VzcyJ9.o6ECFmgF59_fpsSbz6oNb0brWDGYfSnk_iRqYXzKn4o"

    async function onSubmit(values){
        console.log(values);
        
        // Get the file from the form
        const fileList = values.file;
        const file = fileList && fileList[0]; 
        
        if (!file) {
            console.error("No file selected");
            return;
        }
        
        console.log("the file: ", file);
        const accessToken = getDecryptedAccessToken();
        
        if (!accessToken) {
            console.error("No access token available");
            return;
        }
        
        const formData = new FormData();
        formData.append('file', file);
        console.log("form data: ", formData);

        try {
            // Upload file first and wait for response
            const uploadResponse = await fetch("https://car-nextjs-api.cheatdev.online/upload", {
                method: "POST",
                headers: {
                    // Don't set Content-Type for multipart/form-data - browser sets it automatically
                    'Authorization': `Bearer ${accessToken}`
                },
                body: formData
            });
            
            if (!uploadResponse.ok) {
                throw new Error(`Upload failed: ${uploadResponse.status}`);
            }
            
            const uploadResult = await uploadResponse.json();
            console.log("Upload successful:", uploadResult);
            
            // Get the actual image URL from upload response
            const imageUrl = uploadResult.url || uploadResult.file_url || "https://car-nextjs-api.cheatdev.online/upload";
            
            // Now create the car with the actual image URL
            createCar({
                newCar:{
                    make: values.make,
                    model: values.model,
                    year: parseInt(values.year),
                    price: parseFloat(values.price), 
                    mileage: parseInt(values.mileage),
                    description: values.description,
                    color: values.color,
                    fuel_type: values.fuel_type,  
                    transmission: values.transmission, 
                    image: imageUrl
                }
            });
            
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }
  return (
    <div>
            <form  onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
        {/* make */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="make">Make</Label>
        </div>
        <input id="make" type="text" placeholder="Toyota, Honda, etc." required {...register("make")} className="border p-2 rounded-lg" />
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
        <input id="description" type="text" required  {...register("description")} className="border p-2 rounded-lg"/>
      </div>
      {/* color */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="color">Color</Label>
        </div>
        <input id="color" type="text" required  {...register("color")} className="border p-2 rounded-lg"/>
      </div>
      {/* fuelType*/}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="fuel_type">Fuel Type</Label>
        </div>
        <input id="fuel_type" type="text" required  {...register("fuel_type")} className="border p-2 rounded-lg"/>
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
        <input id="image" type="file" accept="image/*" required {...register("file")} className="border p-2 rounded-lg" />
      </div>
    
       <button type="submit" disabled={isLoading} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50">
         {isLoading ? 'Creating...' : 'Create Product'}
       </button>
    </form>
    <div>
       
    </div>
    </div>

  );
}
