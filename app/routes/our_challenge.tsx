import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
//import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"
import { OurChallengePage } from "~/components/pages"

const OurChallenge = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Our Challenge" text="Home - Our Challenge" />
      <Flex w="full" direction="column" p={16}>
        <TextHeader text1="Our" text2="Challenge" />
          <OurChallengePage />
      </Flex>
    </Flex>
  )
}

export default OurChallenge
