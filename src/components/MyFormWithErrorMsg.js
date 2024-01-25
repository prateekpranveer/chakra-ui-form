import React, { useState } from "react";
import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";

function MyFormWithErrorMsg() {
    // State to hold the input value
    const [input, setInput] = useState('');
    // Function to handle input changes
    const handleInputChange = (e) => setInput(e.target.value);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", { email: input });
    };

    // Check if input is empty for error validation
    const isError = input === '';

    return (
        <form onSubmit={handleSubmit}>
            <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={input} onChange={handleInputChange} />
                {!isError ? (
                    <></>
                ) : (
                        // Display error message when input is empty
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
            </FormControl>
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

export default MyFormWithErrorMsg;
