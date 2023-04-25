import {
  Button,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
  keyframes,
  Link as CKLink,
} from "@chakra-ui/react"
import {
  RiContactsFill,
  RiChatForwardFill,
  RiPhoneFill,
  RiFileTextFill,
} from "react-icons/ri"
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

const ContactUs = () => {
  return (
    <Flex
      flex={{ base: 1, md: 5 }}
      bgColor="rgba(189, 5, 30, 0.9)"
      direction="column"
      align="center"
      justify="center"
      p={{ base: 6, md: 0 }}
    >
      <Stack
        color="white"
        spacing={{ base: 2, md: 10 }}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Icon as={RiPhoneFill} boxSize="60px" />
        <VStack align="flex-start">
          <Text fontSize="24px">ติดต่อสอบถาม</Text>
          <Text fontSize="19px" fontWeight="bold">
            02 512 8499
          </Text>
        </VStack>
      </Stack>
    </Flex>
  )
}
const ApplyNow = () => {
  return (
    // <Flex
    //   flex={{ base: 1, md: 7 }}
    //   bgColor="rgba(85, 87, 89, 0.97)"
    //   justify="center"
    //   align="center"
    //   direction={{ base: "column", md: "row" }}
    //   p={{ base: 6, md: 0 }}
    // >
    //   <Icon as={RiFileTextFill} boxSize="60px" color="white" />
    //   <Flex
    //     px={{ base: 2, md: "60px" }}
    //     direction="column"
    //     my={{ base: 4, md: 0 }}
    //   >
    //     <Text fontSize="19px" color="white" align="center">
    //      สนใจเข้าร่วมหลักสูตร 
    //     </Text>
    //     <Text fontSize="15px" color="white" mt={2} align="center" >
    //     " ยื่นใบสมัครได้ตั้งแต่วันนี้ ถึงวันที่ 15 ม.ค. 66  
    //     </Text>
    //     <Text fontSize="14px" color="white" mt={1} align="center">
    //     ไม่มีค่าใช้จ่ายในการร่วมหลักสูตร รับผู้เข้าร่วมอบรมจำนวนจำกัด
    //     </Text>
    //     <Text fontSize="15px" color="white" mt={1} align="center">
    //       ประกาศผลการคัดเลือกภายในวันที่ 20 ม.ค. 66 "
    //     </Text>  

    //   </Flex>

    //   <Button
    //     rightIcon={<RiChatForwardFill />}
    //     colorScheme="menu"
    //     p={5}
    //     borderRadius="xl"
    //     color="white"
    //     height="50px"
    //     w="fit-content"
    //     mt={0}
    //     as={Link}
    //     to={"/application"}
    //   >
    //     <Text fontSize="24px">Apply Now</Text>
    //   </Button>
    // </Flex>


    <Flex
    flex={{ base: 1, md: 7 }}
    bgColor="rgba(85, 87, 89, 0.97)"
    justify="center"
    align="center"
    direction={{ base: "column", md: "row" }}
    p={{ base: 6, md: 0 }}
  >
    <Icon as={RiFileTextFill} boxSize="60px" color="white" />
    <Flex
      px={{ base: 2, md: "60px" }}
      direction="column"
      my={{ base: 4, md: 0 }}
    >
   
      <Text fontSize="24px" color="white" align="center" >
      การนำเสนอผลงานโครงการ
      </Text>
      
      <Text fontSize="19px" color="white" mt={2} >
      Justice by Design
      </Text>
      {/* <Text fontSize="14px" color="white" mt={1} align="center">
      ไม่มีค่าใช้จ่ายในการร่วมหลักสูตร รับผู้เข้าร่วมอบรมจำนวนจำกัด
      </Text>
      <Text fontSize="15px" color="white" mt={1} align="center">
        ประกาศผลการคัดเลือกภายในวันที่ 20 ม.ค. 66 "
      </Text>   */}

    </Flex>
    <CKLink href="https://www.youtube.com/watch?v=lj6rC-Eo_sQ" isExternal>
    <Button
      rightIcon={<RiChatForwardFill />}
      colorScheme="menu"
      p={5}
      borderRadius="xl"
      color="white"
      height="70px"
      w="fit-content"
      mt={0}
      // as={Link}
      // to={"https://www.youtube.com/watch?v=lj6rC-Eo_sQ"}
    >
      <Text as={motion.div} animation={animationBlink} fontSize="24px" textColor="black">WATCH NOW!</Text>
    
    </Button>
    </CKLink>
  </Flex>
  )
}

const ApplySection = () => {
  return (
    <Flex
      w="full"
      bgImage={`url("/images/img01.jpg")`}
      backgroundSize="cover"
      minH="25vh"
      direction={{ base: "column", md: "row" }}
    >
      <ContactUs />
      <ApplyNow />
    </Flex>
  )
}

export default ApplySection
