import { Flex } from "@chakra-ui/react"
import {
  ApplySection,
  ExpertiseSection,
  HeroSection,
  WorkingSection,
  WhySection,
  AtAGlanceSection,
  AttendSection,
  FooterContactSection,
  OurChallengeSection,
} from "~/components/home"

export default function Index() {
  return (
    <Flex w="full" direction="column">
      <HeroSection />
      <ApplySection />
      <AtAGlanceSection />
      <ExpertiseSection />
      <AttendSection />
      <WorkingSection />
      <OurChallengeSection />
      <WhySection />
      <FooterContactSection />
    </Flex>
  )
}
