import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeaderOrange} from "~/components/common"
import { OrangeGroupPage } from "~/components/pages"

const OrangeGroup = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="การนำเสนอผลงาน" text="Home - ทีมสีส้ม" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeaderOrange text1="ผลงาน" text2="ทีมสีส้ม" />
        {/* <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text> */}
        <OrangeGroupPage />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default OrangeGroup
