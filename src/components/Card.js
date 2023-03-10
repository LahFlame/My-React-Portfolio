import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc,url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      
        <VStack borderRadius="xl" bgColor="white" color="black" textAlign="start" >
          <Box maxHeight="250px" width="100%">
            <Image boxSize="100%" objectFit="cover" src={imageSrc} alt={title} borderRadius="xl"/>
          </Box>
          <VStack  alignItems="flex-start" padding="7">
            <Heading as="h3"  textAlign="start" fontSize={["lg","lg","2xl"]}>{title}</Heading>
            <Text color="grey" fontSize={["sm","sm","lg"]}>{description}</Text >
          
            <a href={url} target="_blank">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
          
          </VStack>
        </VStack>

  );
};

export default Card;
