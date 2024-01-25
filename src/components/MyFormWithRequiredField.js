import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const MyFormWithRequiredField = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    firstName: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </FormControl>
      <button className="btn" type="submit">Submit</button>
    </form>
  );
};

export default MyFormWithRequiredField;
