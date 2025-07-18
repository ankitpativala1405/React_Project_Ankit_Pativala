import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const FormPage = () => {
  return (
    <>
      <h1 className="text-center text-4xl py-4 font-bold">Regestration Form</h1>
      <div className="flex justify-center items-center w-full h-screen">
        <form className="flex w-lg flex-col gap-4 border-1 border-gray-300 p-5 rounded-sm mt-[-100px]">

          <div>
            <div className="mb-2 block">
              <Label htmlFor="name">Your Name</Label>
            </div>
            <TextInput id="name" type="text" required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2">Your email</Label>
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@example.com"
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="Phone">Your Mobile Number</Label>
            </div>
            <TextInput id="Phone" type="number" required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2">Your password</Label>
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link
                to="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
            </Label>
          </div>

          <Button type="submit">Register new account</Button>
        </form>
      </div>
    </>
  );
};

export default FormPage;
