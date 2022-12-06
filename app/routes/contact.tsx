import { Flex, Heading } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"

const Contact = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Contact Us" text="Home - Contact Us" />
      <Flex w="full" direction="column" p={16}>
        <TextHeader text1="Contact" text2="Us" />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default Contact
