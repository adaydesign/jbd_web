import { Flex, Heading } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"

const Details = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Details" text="Home - Details" />
      <Flex w="full" direction="column" p={16}>
        <TextHeader text1="" text2="Details" />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default Details
