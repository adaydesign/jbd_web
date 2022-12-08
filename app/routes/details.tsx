import { Flex, Heading } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"
import { WorkingSection } from "~/components/home"

const Details = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Details" text="Home - Details" />
      <Flex w="full" direction="column" p={0}>
        {/* <TextHeader text1="" text2="Details" /> */}
        {/* <ApplicationForm /> */}
        <WorkingSection />
      </Flex>
    </Flex>
  )
}

export default Details
