import { Flex } from "@chakra-ui/react"

type BodyProps = {
  children?: React.ReactNode
  rest?: any
}

const Body = ({ children, ...rest }: BodyProps) => {
  return (
    <Flex
      w="full"
      bgColor="palette.body"
      mt={{ base: "70px", md: 0 }}
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Body
