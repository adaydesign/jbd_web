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
  Show,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Stack,
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
  RiLayoutGridFill,
} from "react-icons/ri"
import { APP_COJ_URL } from "~/constants"

type LogoProps = {
  size?: string
}
const Logo = ({ size = "200px" }: LogoProps) => {
  return (
    <Link to="/">
      <Image src="/images/logo_jbd_top.png" width={size} />
    </Link>
  )
}

type ContactItemProps = {
  icon: any
  text: string
  text2: string
  detail: string
}
const ContactItem = ({ icon, text, text2, detail }: ContactItemProps) => {
  return (
    <Flex>
      <Icon as={icon} boxSize={9} color="palette.cojblue" mr={4} />
      <Flex direction="column">
        <Text color="gray.600" fontSize="12">
          {text}
        </Text>
        <Text color="gray.600" fontSize="12">
          {text2}
        </Text>
        <Text fontWeight="bold" fontSize="14">
          {detail}
        </Text>
      </Flex>
    </Flex>
  )
}

const Contact = () => {
  return (
    <Stack spacing={6} direction={{ base: "column", md: "row" }}>
      <ContactItem
        icon={RiGovernmentFill}
        text="สำนักส่งเสริมงานตุลาการ "
        text2=""
        detail="02 512 8499"
      />
      <ContactItem
        icon={RiMailSendFill}
        text="Email Us"
        text2=""
        detail="oja@coj.go.th"
      />
    </Stack>
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
    <HStack spacing={4} mr={{ base: 0, md: 8 }}>
      <SocialIcon icon={RiShareLine} url="" color="palette.main" />
      <SocialIcon icon={RiFacebookFill} url="" />
      <SocialIcon icon={RiTwitterFill} url="" />
      <SocialIcon icon={RiYoutubeLine} url="" />
    </HStack>
  )
}

type MainMenuGroupProps = {
  onClose?: any
}
const MainMenuGroup = ({ onClose }: MainMenuGroupProps) => {
  return (
    <Flex
      // justify="space-between"
      bgColor="palette.main"
      w="full"
      align="center"
      px={6}
      py={{ base: 4, md: 0 }}
      direction={{ base: "column", md: "row" }}
    >
      {/* <MainMenuPanel /> */}
      <Box p={{ base: 4, md: 2 }}>
        <Text
          as={Link}
          to={"/"}
          textColor="white"
          fontWeight="bold"
          onClick={onClose}
        >
          HOME
        </Text>
      </Box>
      <Divider orientation="vertical" display={{ base: "none", md: "block" }} />
      <Box p={{ base: 4, md: 2 }}>
        <Text
          as={Link}
          to={"/application"}
          textColor="white"
          fontWeight="bold"
          onClick={onClose}
        >
          APPLY NOW
        </Text>
      </Box>
      <Divider orientation="vertical" display={{ base: "none", md: "block" }} />
      <Box p={{ base: 4, md: 2 }}>
        <Text
          as={Link}
          to={"/details"}
          textColor="white"
          fontWeight="bold"
          onClick={onClose}
        >
          DETAILS
        </Text>
      </Box>
      <Divider orientation="vertical" display={{ base: "none", md: "block" }} />
      <Box p={{ base: 4, md: 2 }}>
        <Text
          as={Link}
          to={"/program_journey"}
          textColor="white"
          fontWeight="bold"
          onClick={onClose}
        >
          PROGRAM JOURNEY
        </Text>
      </Box>
      <Divider orientation="vertical" display={{ base: "none", md: "block" }} />
      <Box p={{ base: 4, md: 2 }}>
        <Text
          as={Link}
          to={"/contact"}
          textColor="white"
          fontWeight="bold"
          onClick={onClose}
        >
          CONTACT US
        </Text>
      </Box>
      <Divider orientation="vertical" display={{ base: "none", md: "block" }} />

      <Spacer />
      <Button borderRadius="50px" variant="" boxSize="50px">
        <Icon as={RiSearch2Line} color="white" />
      </Button>
    </Flex>
  )
}
const HeaderBottom = () => {
  return (
    <Flex mt={4}>
      <SocialIconPanel />
      <MainMenuGroup />
    </Flex>
  )
}

const COJLogo = () => {
  return (
    <CKLink href={APP_COJ_URL} isExternal>
      <Image
        src="/images/cojlogo2.png"
        height="50px"
        mr={{ base: 0, md: 12 }}
      />
    </CKLink>
  )
}

const HeaderDesktop = () => {
  return (
    <Flex
      w="full"
      direction="column"
      borderBottomColor="palette.main"
      borderBottomWidth="7px"
    >
      <Flex p={8} pb={0} align="center">
        <Logo />
        <Spacer />
        <COJLogo />
        <Contact />
      </Flex>
      <HeaderBottom />
    </Flex>
  )
}

const HeaderMobile = () => {
  const sidebar = useDisclosure()

  return (
    <>
      <Flex
        w="full"
        borderBottomColor="palette.main"
        borderBottomWidth="3px"
        p={4}
        align="center"
        position="fixed"
        top={0}
        backgroundColor="white"
        shadow="lg"
        zIndex={2}
      >
        <Logo size="72px" />
        <Spacer />
        <Button color="palette.main" variant="" onClick={sidebar.onOpen}>
          <Icon as={RiLayoutGridFill} />
        </Button>
      </Flex>
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex w="full" direction="column" align="center" p={6}>
            <Logo size="120px" />
            <Divider my={2} />
            <SocialIconPanel />
            <Divider my={2} />
            <MainMenuGroup onClose={sidebar.onClose} />
            <Box boxSize="20px" />
            <COJLogo />
            <Box boxSize="20px" />
            <Contact />
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const Header = () => {
  return (
    <>
      <Show below="md">
        <HeaderMobile />
      </Show>
      <Show above="md">
        <HeaderDesktop />
      </Show>
    </>
  )
}

export default Header
