import { Flex } from "@chakra-ui/react"
import React from "react"

type FormLayoutProps = {
  children: React.ReactNode
  buttonControl: React.ReactNode
}

const FormLayout = ({ children, buttonControl }: FormLayoutProps) => {
  return (
    <Flex w="full" direction="column" mt={12}>
      <Flex
        w="full"
        direction="column"
        bgColor="gray.50"
        borderLeftColor="gray.400"
        borderLeftWidth="3px"
        p={6}
      >
        {children}
      </Flex>
      <Flex w="full" p={6}>
        {buttonControl}
      </Flex>
    </Flex>
  )
}

export default FormLayout
