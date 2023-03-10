import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faFolder, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack,Menu,MenuButton,MenuList,MenuItem,IconButton, Flex, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: onuhjorshh@gmail.com",
    socialM: "Mail"
  },
  {
    icon: faGithub,
    url: "https://github.com/LahFlame",
    socialM: "Git"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/onuh-joshua-869372138/",
    socialM: "Linkedin"
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    socialM: "Medium"
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21319900/joshua-onuh",
    socialM: "StackOverflow"
  },
];

const Header = () => {

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY; 
 
   const handleScroll = () => { 
     const currentScrollPos = window.scrollY; 
     const headerElement = headerRef.current; 
     if (!headerElement) { 
       return; 
     } 
     if (prevScrollPos > currentScrollPos) { 
       headerElement.style.transform = "translateY(0)";
       headerElement.style.backgroundColor = "#000"; 
     } else { 
       headerElement.style.transform = "translateY(-200px)"; 
     } 
     prevScrollPos = currentScrollPos; 
   }
    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      width="100vw"
      height={20}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="transparent"
      zIndex={1}
      ref={headerRef}

    >
      <Box color="white"  display={["flex","flex","block"]} justifyContent="space-between" alignItems={"center"} p={3}>
        <VStack display={["Flex","flex","none"]}  >
          <Menu >
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
              color={"grey"}
            />
              <MenuList backgroundColor={"white"} color="black"   _hover={{color: "white",bgColor: "black"}} w={"100%"} position={"static"}>
                
                  { socials.map(social => 
                      <MenuItem key={social.url}>
                        <a href={social.url} target="_blank"><FontAwesomeIcon icon={social.icon}/> {social.socialM}</a>
                      </MenuItem>
                    )
                  }
                
              </MenuList>
            </Menu>
          </VStack>  
        <HStack
          px={[5,16]}
          py={[2,4]}
          justifyContent="space-between"
          alignItems="center"
          
        >
          <nav>
            <HStack spacing={8} display={["none","none","flex"]}>
            {/* Add social media links based on the `socials` data */
              socials.map(social => {
                return(
                  <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={social.icon} size="2x" /></a>
                )
              })
            }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={5}>
                <a href="#projects-section" onClick={handleClick("projects")} ><FontAwesomeIcon icon={faFolder}/>  Projects</a>
                <a href="#contactme-section" onClick={handleClick("contactme")}><FontAwesomeIcon icon={faPhone} /> Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
