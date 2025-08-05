import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z} from 'zod';


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const fileSchema = z
  .any() // Initially accept any value
  .refine((file) => file instanceof FileList ? file.length > 0 : true, "File is required.") // Check if a file is selected
  .refine((file) => file instanceof FileList && file[0] ? file[0].size <= MAX_FILE_SIZE : true, `Max file size is ${MAX_FILE_SIZE / (1024 * 1024)}MB.`) // Validate size
  .refine((file) => file instanceof FileList && file[0] ? ACCEPTED_IMAGE_TYPES.includes(file[0].type) : true, "Only .jpg, .png, and .webp formats are supported."); // Validate type


export default function FileUploadComponent() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(z.object({
      myFile: fileSchema, // Assign the file schema to your input field name
    })),
  });

  const onSubmit = (data) => {
    console.log(data.myFile[0]); // Access the File object
    // Perform file upload or other actions
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="myFile"
        control={control}
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <input
            type="file"
            name={name}
            onBlur={onBlur}
            onChange={(e) => onChange(e.target.files)}
            ref={ref}
          />
        )}
      />
      {errors.myFile && <p>{errors.myFile.message}</p>}
      <button type="submit">Upload</button>
    </form>
  );
};