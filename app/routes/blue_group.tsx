import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeaderBlue} from "~/components/common"
import { BlueGroupPage } from "~/components/pages"

const BlueGroup = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="การนำเสนอผลงาน" text="Home - ทีมสีฟ้า" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeaderBlue text1="ผลงาน" text2="ทีมสีฟ้า" />
        {/* <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text> */}
        <BlueGroupPage />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default BlueGroup
