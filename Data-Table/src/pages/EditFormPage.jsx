import React, { useState, useEffect } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/Students/${id}`);
        const data = await res.json();
        setFormData({
          name: data.name ,
          email: data.email,
          phone: data.phone,
          password: data.password,
          agree: data.agree || false,
        });
      } catch (err) {
        console.error("Failed to fetch student:", err);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);

    await fetch(`http://localhost:3000/Students/${id}`, {
      method: "PATCH", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    navigate("/");
  };

  return (
    <>
      <h1 className="text-center text-4xl py-4 font-bold">Edit Student</h1>
      <div className="flex justify-center items-center w-full h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex w-lg flex-col gap-4 border border-gray-300 p-5 rounded-sm mt-[-100px]"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name">Your Name</Label>
            </div>
            <TextInput
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Your Email</Label>
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone">Your Mobile Number</Label>
            </div>
            <TextInput
              id="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              required
              shadow
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Your Password</Label>
            </div>
            <TextInput
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              shadow
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
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

          <Button type="submit">Update Student</Button>
        </form>
      </div>
    </>
  );
};

export default EditFormPage;
