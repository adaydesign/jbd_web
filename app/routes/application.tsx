import { Flex, Heading } from "@chakra-ui/react"
import { ActionArgs } from "@remix-run/node"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  console.log(formData.keys())
  return {}
}

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
