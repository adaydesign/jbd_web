import { Flex, Heading } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"

const Application = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Design Matters" text="Home - Design Matters" />
      <Flex w="full" direction="column" p={16}>
        <TextHeader text1="Online" text2="Application Form" />
        <ApplicationForm />
      </Flex>
    </Flex>
  )
}

export default Application
