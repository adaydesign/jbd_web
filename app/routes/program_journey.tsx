import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"
import { ProgramJourneyPage } from "~/components/pages"

const ProgramJourney = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Program Journey" text="Home - Program Journey" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeader text1="Program" text2="Journey" />
        {/* <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text> */}
        <ProgramJourneyPage />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default ProgramJourney
