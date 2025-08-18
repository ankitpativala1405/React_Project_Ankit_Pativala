import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { signUpWithGoogle } from "../middleware/GoogleLoginAuth";

export function FormAuth() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div className="flex items-center justify-center bg-gray-100">
            <button
              className="flex items-center gap-2 px-6 py-3 bg-white border rounded-lg shadow-md hover:bg-gray-50"
              onClick={signUpWithGoogle}
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="text-gray-700 font-medium">
                Login with Google
              </span>
            </button>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}
