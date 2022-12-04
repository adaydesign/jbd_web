import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import {
  RiShieldCheckFill,
  RiMailSendFill,
  RiPieChart2Fill,
} from "react-icons/ri"

type BlockTitleProps = {
  text1: String
  text2: String
  text1Color?: any
}
export const BlockTitle = ({
  text1,
  text2,
  text1Color = "black",
}: BlockTitleProps) => {
  return (
    <HStack spacing={3}>
      <Text fontSize="65px" fontWeight="bold" color={text1Color}>
        {text1}
      </Text>
      <Text fontSize="65px" fontWeight="bold" color="green">
        {text2}
      </Text>
    </HStack>
  )
}

type LineProps = {
  lineColor?: any
}
export const Line = ({ lineColor = "blue.800" }) => {
  return (
    <HStack mt={6}>
      <Box h="3px" w="60px" bgColor={lineColor} />
      <Box h="16px" w="16px" borderWidth="4px" borderColor="green.400" />
      <Box h="3px" w="60px" bgColor={lineColor} />
    </HStack>
  )
}

type ExpertiseItemProps = {
  icon: any
  title: String
  desc: String
}
const ExpertiseItem = ({ icon, title, desc }: ExpertiseItemProps) => {
  return (
    <Flex p={6} shadow="2xl">
      <Flex
        direction="column"
        align="center"
        justify="center"
        p={4}
        borderWidth="2px"
        borderStyle="dashed"
        borderColor="blue.700"
      >
        <Icon as={icon} boxSize="120px" color="green" />
        <Text fontSize="30px" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="25px">{desc}</Text>
      </Flex>
    </Flex>
  )
}

const ExpertisePanel = () => {
  return (
    <SimpleGrid columns={3} spacing={14} mt={6} w="90%">
      <ExpertiseItem
        icon={RiShieldCheckFill}
        title="Secure Business"
        desc="Contrary to popular belief, Lorem ipsum is not simply random text. it has roots in a piece of classical Latin literature Contrary"
      />
      <ExpertiseItem
        icon={RiMailSendFill}
        title="Facebook Ads"
        desc="Contrary to popular belief, Lorem ipsum is not simply random text. it has roots in a piece of classical Latin literature Contrary"
      />
      <ExpertiseItem
        icon={RiPieChart2Fill}
        title="Marketing Analytics"
        desc="Contrary to popular belief, Lorem ipsum is not simply random text. it has roots in a piece of classical Latin literature Contrary"
      />
    </SimpleGrid>
  )
}

const ExpertiseSection = () => {
  return (
    <Center w="full" display="flex" flexDirection="column" py="100px">
      <BlockTitle text1="Our" text2="Expertise" />
      <Line />
      <Text fontSize="25px" mt={6} w="50%" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <ExpertisePanel />
    </Center>
  )
}

export default ExpertiseSection
