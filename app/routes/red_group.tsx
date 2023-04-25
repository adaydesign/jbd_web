import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader} from "~/components/common"
import { RedGroupPage } from "~/components/pages"

const RedGroup = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="การนำเสนอผลงาน" text="Home - ทีมสีแดง" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeader text1="ผลงาน" text2="ทีมสีแดง" />
        {/* <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text> */}
        <RedGroupPage />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default RedGroup
