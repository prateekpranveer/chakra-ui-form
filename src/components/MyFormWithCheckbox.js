import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  HStack,
} from "@chakra-ui/react";

const MyFormWithCheckbox = () => {
  // State to hold the selected character
  const [selectedCharacter, setSelectedCharacter] = useState("Itachi");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Character:", selectedCharacter);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Favourite Tech</FormLabel>
          <RadioGroup
            onChange={(value) => setSelectedCharacter(value)}
          >
            <HStack spacing="24px">
              <Radio value="Reactjs">Reactjs</Radio>
              <Radio value="Nextjs">Nextjs</Radio>
              <Radio value="Expressjs">Expressjs</Radio>
            </HStack>
          </RadioGroup>
          <button className="btn" type="submit">Submit</button>
        </FormControl>
      </form>
    </div>
  );
};

export default MyFormWithCheckbox;
