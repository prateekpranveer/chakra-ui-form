import React, { useState } from "react";
import { FormControl, FormLabel, NumberInput, NumberInputStepper, NumberIncrementStepper, NumberInputField, NumberDecrementStepper } from "@chakra-ui/react";

const MyFormWithNumberInput = () => {
  // State to hold the entered amount
  const [enteredAmount, setEnteredAmount] = useState(10);

  // Function to handle number input changes
  const handleAmountChange = (value) => {
    setEnteredAmount(value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered Amount:", enteredAmount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <NumberInput max={50} min={10} value={enteredAmount} onChange={handleAmountChange}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormWithNumberInput;
