import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading,HStack,SimpleGrid, VStack } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Calculator",
    description:
      "An effective calculator application built using React classes and styled with SASS. It provides basic arithmetic functionalities as well as a well-designed UI for a good user experience.",
    getImageSrc: () => require("../images/calculator-large.jpg"),
    url: "https://meek-griffin-b1f6d1.netlify.app/"
  },
  {
    title: "Todo-List",
    description:
      "A web version of the real world todo-list, takes infinite todos from the user as well as storing and displaying completed tasks for users to see. implemented using react hooks, styled with raw CSS",
    getImageSrc: () => require("../images/todo-list.jpg"),
    url: "https://rainbow-tarsier-ff2f79.netlify.app/"
  },
  {
    title: "Monsters Rolodex",
    description:
      "A monsters collection built with a search feature aimed at narrow down the monster you wish to see",
    getImageSrc: () => require("../images/monsters-rolodex.jpg"),
    url: "https://lahflame.github.io/monsters-rolodex/"
  },
  {
    title: "Flames Clothing Store",
    description:
      "Will be made available in a bit....",
    getImageSrc: () => require("../images/flames-shop.jpg"),
    url: ""
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
      <VStack paddingX={[1,13,5,20]}>
        <Heading as="h1" id="projects-section" marginBottom={10}>
          My Projects
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
              url={project.url}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
