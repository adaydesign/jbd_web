import { Center, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { BlockTitle, Line } from "./ExpertiseSection"

type ClientItemProps = {
  image: any
  text1: String
  text2?: String
}
const ClientItem = ({ image, text1, text2 }: ClientItemProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      _hover={{ transform: "scale(1.1)" }}
    >
      <Image src={image} />
      <Text fontSize="25px" color="white">
        {text1} <strong>{text2}</strong>
      </Text>
    </Flex>
  )
}

const ClientPanel = () => {
  return (
    <SimpleGrid columns={5} spacing="40px" mt="60px">
      <ClientItem
        image={"/images/client01.png"}
        text1="Digital"
        text2="Marketing"
      />
      <ClientItem
        image={"/images/client02.png"}
        text1="Business"
        text2="Group"
      />
      <ClientItem
        image={"/images/client03.png"}
        text1="Creative"
        text2="Business"
      />
      <ClientItem
        image={"/images/client04.png"}
        text1="Creative"
        text2="Logo"
      />
      <ClientItem
        image={"/images/client05.png"}
        text1="Website"
        text2="Hosting"
      />
    </SimpleGrid>
  )
}

const WorkingSection = () => {
  return (
    <Center
      w="full"
      display="flex"
      flexDirection="column"
      py="100px"
      bgColor="blue.800"
    >
      <BlockTitle text1="We are" text2="Working With" text1Color="white" />
      <Line lineColor="white" />
      <Text fontSize="25px" mt={6} color="white" w="50%" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <ClientPanel />
    </Center>
  )
}

export default WorkingSection
