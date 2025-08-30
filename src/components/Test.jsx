import React, { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setFormData({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="bg-fuchsia-100 min-w-[450px] p-5 rounded-md flex flex-col gap-5">
      <h1 className="text-2xl">FORM</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 "
        action=""
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="">email id</label>
          <input
            onChange={handleChange}
            className="border-2 border-gray-500 px-2 py-2 outline-none rounded-lg"
            type="email"
            name="email"
            id=""
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">username</label>
          <input
            onChange={handleChange}
            className="border-2 border-gray-500 px-2 py-2 outline-none rounded-lg"
            type="text"
            name="username"
            id=""
            value={formData.username}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">password</label>
          <input
            onChange={handleChange}
            className="border-2 border-gray-500 px-2 py-2 outline-none rounded-lg"
            type="text"
            name="password"
            id=""
            value={formData.password}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">confirm password</label>
          <input
            onChange={handleChange}
            className="border-2 border-gray-500 px-2 py-2 outline-none rounded-lg"
            type="text"
            name="confirmPassword"
            id=""
            value={formData.confirmPassword}
          />
        </div>
        <button
          className="bg-white py-2 shadow-md active:shadow-none rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
