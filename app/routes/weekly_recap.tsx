import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"

import AcceptedApplicationPage from "~/components/pages/AcceptedApplicationPage"
import { WeeklyRecapPage } from "~/components/pages"

const WeeklyRecap = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Weekly Recap" text="Home - Weekly Recap" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeader text1="Weekly" text2="Recap" />
         {/* <Text align="center" fontSize="22" fontWeight="bold" mb={10}>Weekly Recap</Text>  */}
        <WeeklyRecapPage />
        


        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default WeeklyRecap
