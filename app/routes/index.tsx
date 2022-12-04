import { Flex } from "@chakra-ui/react"
import {
  ApplySection,
  ExpertiseSection,
  HeroSection,
  WorkingSection,
} from "~/components/home"

export default function Index() {
  return (
    <Flex w="full" direction="column">
      <HeroSection />
      <ApplySection />
      <ExpertiseSection />
      <WorkingSection />
    </Flex>
  )
}
