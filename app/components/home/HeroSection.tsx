import { Button, Flex, Text, VStack, HStack, Stack,keyframes, Spacer } from "@chakra-ui/react"
import { RiChatForwardFill } from "react-icons/ri"


import { Link } from "@remix-run/react"

//animate Blink Marquee
import { motion } from "framer-motion";
const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const blinker = keyframes`
  50% { opacity: 0; }
`;

const pluse = keyframes`
  0% { background-color: #8ebf42; }
  50% { background-color: #1c87c9; }
  100% { background-color: #d5dce8; }
`;

const marqueeVariants = {
  animate: {
    x: [400, -100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear"
      }
    }
  }
};

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
const animationBlink = `${blinker} 1.5s linear infinite`;
const animationPluse = `${pluse} 4s infinite`;
//-----

const TextHighlight = () => {
  return (
    <Flex
    // as={Link} 
    // to={"/weekly_recap"}  
      p={2}
      bgColor="blackAlpha.400"
      w="fit-content"
      borderRightWidth="25px"
      borderRightColor="palette.secondary"
    >
      <Text 
      color="white" 
      fontSize="22px" 
      // as={motion.div}
      // variants={marqueeVariants}
      // animate="animate"
      

    >
        {/* Call for Applications for COJ Fellowship Program */}
      {/* <marquee> Update! การอบรมหลักสูตร Justice x Design: Week 1 ( 4<sup>th</sup> February 2023 ) </marquee>  */}
      <marquee> Update! การนำเสนอผลงานโครงการ "Justice by Design" กระบวนการยุติธรรมที่ทุกคนออกแบบได้ </marquee> 
      </Text>
    </Flex>
  )
}

const Text1 = () => {
  return (
    <Flex
      p={3}
      bgColor="palette.footer"
      w="fit-content"
      borderRightWidth="25px"
      borderRightColor="palette.main"
    >
      <Text color="white" fontSize="25px">
        {/* Call for Applications for COJ Fellowship Program */}
        Justice by Design: กระบวนการยุติธรรมที่ทุกคนออกแบบได้
      </Text>
    </Flex>
  )
}

const Text2 = () => {
  return (
    <Flex direction="column" color="white">
      <Stack justify="flex-end" direction={{ base: "column", md: "row" }}>
        <Text fontSize="40px" fontWeight="bold" textAlign="right">
          People-Centered
        </Text>
        <Text
          fontSize="40px"
          fontWeight="bold"
          textAlign="right"
          color="palette.main"
        >
          Justice Matters
        </Text>
      </Stack>


<Flex justify="end">
      <Text fontSize="19px" bgColor="blackAlpha.400" textAlign="justify" p={3} w="90%">
        ร่วมสร้างกระบวนการยุติธรรมที่ยึดความต้องการ ทัศนคติ
        และความคาดหวังของประชาชนเป็นศูนย์กลาง (People-Centered)
        ในการพัฒนาคุณภาพการให้บริการของศาลยุติธรรม
        เพื่อลดช่องว่างของกระบวนการยุติธรรมแบบดั้งเดิมที่ยึดองค์กรผู้ให้บริการเป็นศูนย์กลาง
        (Institution-Focused)
      </Text>
      </Flex>
    </Flex>
  )
}

const HeroSection = () => {
  return (
    <Flex
      w="full"
      minH="70vh"
      bgImage={`url("/images/img003.jpg")`}
      backgroundSize="cover"
      backgroundPosition="center"
      justify="flex-end"
    >
      

      <Flex
        w="full"
        bgColor={{ base: "blackAlpha.800", md: "blackAlpha.600" }}
        direction="column"
        justify="center"
        align="flex-end"
        p={16}
      >
        
        
        <Flex
          w={{ base: "full", md: "68%" }}
          direction="column"
          justify="center"
          align="flex-end"
        >
          <Text1 />
          <Text2 />
<br/> 
          <TextHighlight />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HeroSection
