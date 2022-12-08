import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"

const ProgramJourney = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Program Journey" text="Home - Program Journey" />
      <Flex w="full" direction="column" p={16}>
        <TextHeader text1="Program" text2="Journey" />
        <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text>
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default ProgramJourney
