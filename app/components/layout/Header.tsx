import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react"
import {
  RiWechatFill,
  RiShareLine,
  RiFacebookFill,
  RiTwitterFill,
  RiYoutubeLine,
  RiSearch2Line,
} from "react-icons/ri"

const Logo = () => {
  return <Image src="/images/logo2.png" width="209" height="50" />
}

type ContactItemProps = {
  icon: any
  text: String
  detail: String
}
const ContactItem = ({ icon, text, detail }: ContactItemProps) => {
  return (
    <Flex>
      <Icon as={icon} boxSize={12} />
      <Flex direction="column">
        <Text>{text}</Text>
        <Text>{detail}</Text>
      </Flex>
    </Flex>
  )
}

const Contact = () => {
  return (
    <HStack spacing={3}>
      <ContactItem
        icon={RiWechatFill}
        text="Hotline Number"
        detail="01 2345 6789"
      />
      <ContactItem
        icon={RiWechatFill}
        text="Office Hours"
        detail="9:00-17:00 [Sun:Closed]"
      />
      <ContactItem icon={RiWechatFill} text="Email Us" detail="example.com" />
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
    <Button borderRadius="50px" variant="ghost" shadow="2xl" boxSize="50px">
      <Icon as={icon} color={color || ""} />
    </Button>
  )
}

const HeaderBottom = () => {
  return (
    <Flex mt={4}>
      <HStack spacing={4}>
        <SocialIcon icon={RiShareLine} url="" color="green" />
        <SocialIcon icon={RiFacebookFill} url="" />
        <SocialIcon icon={RiTwitterFill} url="" />
        <SocialIcon icon={RiYoutubeLine} url="" />
      </HStack>
      <Flex justify="flex-end" bgColor="gray.300" w="full">
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
