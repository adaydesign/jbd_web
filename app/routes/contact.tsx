import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"
import { FooterContactSection } from "~/components/home"

const Contact = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Contact Us" text="Home - Contact Us" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeader text1="Contact" text2="Us" />
        {/* <ApplicationForm /> */}
        <FooterContactSection />
       
      </Flex>


  
    </Flex>
  )
}

export default Contact
