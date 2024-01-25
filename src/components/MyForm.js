import React, { useState } from "react";
import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react";

const MyForm = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    email: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <button className= "btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
