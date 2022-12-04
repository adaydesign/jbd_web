import { Flex } from "@chakra-ui/react"

type BodyProps = {
  children?: React.ReactNode
  rest: any
}

const Body = ({ children, ...rest }: BodyProps) => {
  return (
    <Flex w="full" bgColor="palette.body" {...rest}>
      {children}
    </Flex>
  )
}

export default Body
