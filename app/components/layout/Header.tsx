import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
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
} from "react-icons/ri"

const Logo = () => {
  return (
    <Link to="/">
      <Image src="/images/logo_jbd_top.png" width="200" height="73" />
    </Link>
  )
}

type ContactItemProps = {
  icon: any
  text: String
  detail: String
}
const ContactItem = ({ icon, text, detail }: ContactItemProps) => {
  return (
    <Flex>
      <Icon as={icon} boxSize={12} color="green" mr={4} />
      <Flex direction="column">
        <Text color="gray.600">{text}</Text>
        <Text fontWeight="bold">{detail}</Text>
      </Flex>
    </Flex>
  )
}

const Contact = () => {
  return (
    <HStack spacing={6}>
      <ContactItem
        icon={RiWechatFill}
        text="Hotline Number"
        detail="01 2345 6789"
      />
      <ContactItem
        icon={RiChatHistoryFill}
        text="Office Hours"
        detail="9:00-17:00 [Sun:Closed]"
      />
      <ContactItem icon={RiMailSendFill} text="Email Us" detail="example.com" />
    </HStack>
  )
}

type SocialIconProps = {
  icon: any
  url: String
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
      <SocialIcon icon={RiShareLine} url="" color="green" />
      <SocialIcon icon={RiFacebookFill} url="" />
      <SocialIcon icon={RiTwitterFill} url="" />
      <SocialIcon icon={RiYoutubeLine} url="" />
    </HStack>
  )
}

const HeaderBottom = () => {
  return (
    <Flex mt={4}>
      <SocialIconPanel />
      <Flex
        justify="space-between"
        bgColor="palette.main"
        w="full"
        align="center"
        px={6}
      >
        <Button variant="ghost" colorScheme="green" as={Link} to="/application">
          Apply Now!
        </Button>
        <Button borderRadius="50px" variant="" boxSize="50px">
          <Icon as={RiSearch2Line} />
        </Button>
      </Flex>
    </Flex>
  )
}

const Header = () => {
  return (
    <Flex w="full" p={8} direction="column">
      <Flex>
        <Logo />
        <Spacer />
        <Contact />
      </Flex>
      <HeaderBottom />
    </Flex>
  )
}

export default Header
