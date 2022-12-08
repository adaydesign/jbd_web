import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  Link as CKLink,
  Box,
  Center,
  Divider,
} from "@chakra-ui/react"
import { Link } from "@remix-run/react"
import {
  RiWechatFill,
  RiChatHistoryFill,
  RiMailSendFill,
  RiShareLine,
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeLine,
  RiSearch2Line,
  RiGovernmentFill,
} from "react-icons/ri"

const Logo = () => {
  return (
    <Link to="/">
      <Image src="/images/logo_jbd_top.png" width="200" height="62" />
    </Link>
  )
}

type ContactItemProps = {
  icon: any
  text: string
  text2: string
  detail: string
  
}
const ContactItem = ({ icon, text,text2, detail }: ContactItemProps) => {
  return (
    <Flex>
      <Icon as={icon} boxSize={9} color="palette.cojblue" mr={4} />
      <Flex direction="column">
        <Text color="gray.600" fontSize="12">{text}</Text>
        <Text color="gray.600" fontSize="12">{text2}</Text>
        <Text fontWeight="bold"fontSize="14">{detail}</Text>
      </Flex>
    </Flex>
  )
}

const Contact = () => {
  return (
    <HStack spacing={6}>
      <ContactItem
        icon={RiGovernmentFill}
        text="สำนักส่งเสริมงานตุลาการ "
        text2=""
        detail="02 512 8499"
      />
      {/* <ContactItem
        icon={RiChatHistoryFill}
        text="Office Hours"
        text2=""
        detail="9:00-17:00 [Sun:Closed]"
      /> */}
      <ContactItem 
      icon={RiMailSendFill} 
      text="Email Us" 
      text2="" 
      detail="oja@coj.go.th" />
    </HStack>
  )
}

type SocialIconProps = {
  icon: any
  url: string
  color?: any
}
const SocialIcon = ({ icon, url, color }: SocialIconProps) => {
  return (
    <Button
      borderRadius="50px"
      variant="ghost"
      shadow="2xl"
      boxSize="50px"
      bgColor="white"
    >
      <Icon as={icon} color={color || ""} />
    </Button>
  )
}

export const SocialIconPanel = () => {
  return (
    <HStack spacing={4} mr={8}>
      <SocialIcon icon={RiShareLine} url="" color="palette.main" />
      <SocialIcon icon={RiFacebookFill} url="" />
      <SocialIcon icon={RiTwitterFill} url="" />
      <SocialIcon icon={RiYoutubeLine} url="" />
    </HStack>
  )
}
// type MainMenuProps = {
//   url: string
//   text: string
//   // color?: any
// }

// const MainMenu = ({ url, text }: MainMenuProps) => {
//   return (
//     <Box >
      
//       <Text as={Link} to={url} textColor="white">{text}</Text>

//     </Box>

//   )
// }

// const MainMenuPanel= () => {
//   return (
   
//       <MainMenu url="/" text="Home" />
   

  
      
 
//   )
// }


const HeaderBottom = () => {
  return (
    <Flex mt={4}>
      <SocialIconPanel />
      <Flex
        // justify="space-between"
        bgColor="palette.main"
        w="full"
        align="center"
        px={6}
      >        
     {/* <MainMenuPanel /> */}
     <Box mr={4}>
     <Text as={Link} to={"/"} textColor="white" fontWeight="bold">HOME</Text>
     </Box>
     <Divider orientation='vertical'/>
     <Box p={2}>
     <Text as={Link} to={"/application"} textColor="white" fontWeight="bold">APPLY NOW</Text>
     </Box>
     <Divider orientation='vertical'/>
     <Box p={2}>
     <Text as={Link} to={"/details"} textColor="white" fontWeight="bold">DETAILS</Text>
     </Box>
     <Divider orientation='vertical'/>
     <Box p={2}>
     <Text as={Link} to={"/program_journey"} textColor="white" fontWeight="bold">PROGRAM JOURNEY</Text>
     </Box>
     <Divider orientation='vertical'/>
     <Box p={2}>
     <Text as={Link} to={"/contact"} textColor="white" fontWeight="bold">CONTACT US</Text>
     </Box>
     <Divider orientation='vertical'/>

        {/* <Button variant="ghost" colorScheme="yellow" as={Link}  to="/">
          Home
        </Button>
        <Button variant="ghost" colorScheme="yellow" as={Link}  to="/application">
          Apply Now!
        </Button>
        <Button variant="ghost" colorScheme="yellow" as={Link} to="/details">
          Details
        </Button>
        <Button variant="ghost" colorScheme="yellow" as={Link} to="/program_journey">
          Program Journey
        </Button>
        <Button variant="ghost" colorScheme="yellow" as={Link} to="/contact">
          Contact Us
        </Button> */}

    
        <Spacer />
        <Button borderRadius="50px" variant="" boxSize="50px">
          <Icon as={RiSearch2Line} color="white" />
        </Button>
      </Flex>
    </Flex>
  )
}

const CojLogo = () => {
  return (
    <CKLink href="https://www.coj.go.th/" isExternal>
      <Image src="/images/cojlogo2.png"  height="50px" mr={12}/>
    </CKLink>
  )
}


const Header = () => {
  return (
    <Flex w="full" direction="column" borderBottomColor="palette.main" borderBottomWidth="7px">
      <Flex p={8} pb={0} align="center">
        <Logo />
        <Spacer />
        <CojLogo />
        <Contact />
      </Flex>
      <HeaderBottom />
    </Flex>
  )
}

export default Header
