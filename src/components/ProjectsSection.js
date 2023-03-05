import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading,HStack,SimpleGrid, VStack } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
    
      spacing={8}
      
    >
      <VStack paddingX={[1,2,5,20]}>
        <Heading as="h1" id="projects-section" marginBottom={10}>
          Featured Projects
        </Heading>
        <SimpleGrid
          columns={[1,1,2]}
          gridGap={8}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              url="https://github.com/rgommezz/react-native-offline"
            />
          ))}
        </SimpleGrid>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
