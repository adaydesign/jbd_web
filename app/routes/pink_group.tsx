import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeaderPink} from "~/components/common"
import { PinkGroupPage } from "~/components/pages"

const PinkGroup = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="การนำเสนอผลงาน" text="Home - ทีมสีชมพู" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeaderPink text1="ผลงาน" text2="ทีมสีชมพู" />
        {/* <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text> */}
        <PinkGroupPage />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default PinkGroup
