import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeaderGreen} from "~/components/common"
import { GreenGroupPage } from "~/components/pages"

const GreenGroup = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="การนำเสนอผลงาน" text="Home - กลุ่มสีเขียว" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeaderGreen text1="ผลงาน" text2="กลุ่มสีเขียว" />
        {/* <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text> */}
        <GreenGroupPage />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default GreenGroup
