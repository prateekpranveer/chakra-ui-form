import React, { useState } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const MyFormWithSelect = () => {
  // State to hold the selected country
  const [selectedCountry, setSelectedCountry] = useState("");

  // Function to handle select changes
  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Country:", selectedCountry);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Select
          placeholder="Select States"
          value={selectedCountry}
          onChange={handleSelectChange}
        >
          <option>Rajsthan</option>
          <option>Uttrakhand</option>
        </Select>
      </FormControl>
      <button className="btn" type="submit">Submit</button>
    </form>
  );
};

export default MyFormWithSelect;
