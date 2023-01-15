import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"

import AcceptedApplicationPage from "~/components/pages/AcceptedApplicationPage"

const AcceptedApplication = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="ประกาศรายผู้ผ่านการคัดเลือกเข้าร่วมสูตร" text="Home - Program Journey" />
      <Flex w="full" direction="column" p={16}>
        <TextHeader text1="Program" text2="Journey" />
        {/* <Text align="center" fontSize="36" fontWeight="bold">-TBD-</Text> */}
        <AcceptedApplicationPage />
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default AcceptedApplication
