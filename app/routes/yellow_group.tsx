import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeaderYellow} from "~/components/common"
import { YellowGroupPage } from "~/components/pages"

const YellowGroup = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="การนำเสนอผลงาน" text="Home - ทีมสีเหลือง" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeaderYellow text1="ผลงาน" text2="ทีมสีเหลือง" />
        {/* <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text> */}
        <YellowGroupPage />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default YellowGroup
