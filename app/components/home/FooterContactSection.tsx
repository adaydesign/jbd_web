import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react"
import {
  RiRoadMapFill,
  RiPhoneFill,
  RiMailSendFill,
  RiTimeFill
} from "react-icons/ri"


type FooterContactItemProps = {
  icon: any
  title: String
  desc: String
  desc2: String
  desc3: String
}
const FooterContactItem = ({ icon, title, desc, desc2, desc3 }: FooterContactItemProps) => {
  return (
    <Flex p={2} shadow="2xl" w="full" backgroundColor="palette.body2">
      <Flex         
        borderWidth="2px"
        borderStyle="dashed"
        borderColor="white"
        w="full"
        p={5}
        backgroundColor="palette.secondary"
        align="center"
       
        >
          
          <Icon as={icon} boxSize="50px" color="palette.container" />
      <Flex
        direction="column"
       // align="center"
        justify="center"
         p={2}
 
        // borderWidth="2px"
        // borderStyle="dashed"
        // borderColor="blue.700"
        w="full"
      >
            {/* <Icon as={icon} boxSize="80px" color="palette.main" /> */}
        <Text fontSize="18px" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="16px">{desc}</Text>
        <Text fontSize="16px">{desc2}</Text>
        <Text fontSize="16px">{desc3}</Text>
      </Flex>
      </Flex>
    </Flex>
  )
}

const FooterContactPanel = () => {
  return (
    
    <SimpleGrid 
    columns={{
      base: 1,
      md: 3,
    }}
    spacing={14} mt={6} pb={10} w="85%">
      <FooterContactItem
        icon={RiRoadMapFill}
        title="สำนักส่งเสริมงานตุลาการ"
        desc="อาคารศาลอาญา ชั้น 6"
        desc2="ถนนรัชดาภิเษก แขวงจอมพล"
        desc3="เขตจตุจักร กรุงเทพฯ 10900"
      />
      <FooterContactItem
        icon={RiPhoneFill}
        title="Contact Us"
        desc="Email: oja@coj.go.th"
        desc2="Phone: 02 512 8499"
        desc3="Fax :  02 5128 432"
      />
      <FooterContactItem
        icon={RiTimeFill}
        title="วันและเวลาทำการ"
        desc="วันจันทร์-วันศุกร์"
        desc2="8.30-16.30 น."
        desc3="ยกเว้นวันหยุดราชการ"
      />
    </SimpleGrid>
  )
}

const FooterContactSection = () => {
  return (
    <Center w="full" display="flex" flexDirection="column" py="10px" bgColor="palette.body2">
     
 
      <FooterContactPanel />

      
    </Center>
  )
}

export default FooterContactSection
