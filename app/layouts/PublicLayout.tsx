import { Flex, Spacer } from "@chakra-ui/react"
import { Header, Body, Footer } from "~/components/layout"

type PublicLayoutProps = {
    children?: React.ReactNode;
  };

const PublicLayout = ({ children }:PublicLayoutProps) => {
    return (
        <Flex w="full" direction="column" minH="100vh">
            <Header />
            <Body>
                {children}
            </Body>
            <Spacer bgColor="palette.body" />
            <Footer />
        </Flex>
    )
}

export default PublicLayout