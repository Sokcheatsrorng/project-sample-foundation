
import { baseApi } from "../../baseApi";

export const ecommerceApi = baseApi.injectEndpoints({
    endpoints: (build) => (
        {
            // get products
            getProducts: build.query({
                query: ({page, limit}) => `/cars?skip=${page}&limit=${limit}`,
                providesTags: ["cars"]
            }),
            //get product by id
            getProductById : build.query({
                query: (id) => `/cars/${id}`,
                providesTags: ["cars"]
            }),
            //create product 
            createProducts: build.mutation({
                query: ({newCar}) => ({
                     method: "POST",
                     url: `/cars`,
                     body: newCar
                }),
                invalidatesTags: ["cars"]
            }),
            // update product 
             updateProducts: build.mutation({
                query: ({updateCar, id}) => ({
                     method: "PUT",
                     url: `/cars/${id}`,
                     body: updateCar
                }),
                invalidatesTags: ["cars"]
            }),
            // delete product 
            deleteProduct: build.mutation({
               query: ({id}) => ({
                  method: "DELETE",
                  url: `cars/${id}`
               }),
               invalidatesTags: ["cars"]
                
            })
        }
    )
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductsMutation,
    useUpdateProductsMutation,
    useDeleteProductMutation
} = ecommerceApi;