


import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/auth";
import { useEffect } from "react";
import { 
  storeAccessToken, 
  storeRefreshToken, 
  getDecryptedAccessToken 
} from "../../utils/tokenUtils";

export default function LoginComponent() {

  const {register, handleSubmit}  = useForm({
    defaultValues:{
      email: "",
      password: ''
    }
  })

  // calling rtk 
  const [loginSubmit, {data, isSuccess, isLoading}] = useLoginMutation();

  function onSubmitting(values) {
        loginSubmit({
          loginForm: {
             email: values.email,
             password: values.password
          }
        })
  }

  // Handle successful login response
  useEffect(() => {
    if (isSuccess && data) {
      console.log("Login successful, storing tokens...");
      
      // Store encrypted tokens using utility functions
      storeAccessToken(data?.access_token);
      storeRefreshToken(data?.refresh_token);
      
      console.log("Tokens stored successfully");
      
      // Example: Get the decrypted token to verify it works
      const decryptedToken = getDecryptedAccessToken();
      console.log("The value of token which already decrypt: ", decryptedToken);
      if (decryptedToken) {
        console.log("Token decryption successful");
        // Don't log the actual token for security reasons
      }
    }
  }, [isSuccess, data]);

  return (
    <form onSubmit={handleSubmit(onSubmitting)} >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <input id="email1" type="email" className="p-2 rounded border" placeholder="name@flowbite.com" required {...register("email")} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <input id="password" type="password" required {...register("password")} className="p-2 rounded border" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Submit'}
      </Button>
    </form>
  );
}
