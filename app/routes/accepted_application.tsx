import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"

import AcceptedApplicationPage from "~/components/pages/AcceptedApplicationPage"

const AcceptedApplication = () => {
  return (
    <Flex w="full" direction="column">
      <PageHeader heading="รายผู้ผ่านการคัดเลือกเข้าร่วมสูตร" text="Home - Selected Candidates" />
      <Flex w="full" direction="column" p={{base:6,lg:16}}>
        <TextHeader text1="Selected" text2="Candidates" />
         <Text align="center" fontSize="22" fontWeight="bold" mb={10}>รายชื่อผู้ที่ได้รับเลือกเข้าร่วมโครงการ Justice by Design : กระบวนการยุติธรรมที่ทุกคนออกแบบได้</Text> 
        <AcceptedApplicationPage />
        

<Divider />
        <Box alignItems='center'
                  bg=""
                  //boxShadow="base"
                  w="full"
                  pl={5}
                  mt={5}
                >
                  <Text fontSize="20" fontWeight="bold" mb={3}>หมายเหตุ : </Text>
                  <Text fontSize="17" ml={10}>1. ประกาศรายชื่อ วันที่ 24 มกราคม 2566</Text>
                  <Text fontSize="17" ml={10}>2. ขอความกรุณานำสำเนาบัตรประจำตัวประชาชน พร้อมลงลายมือชื่อรับรองสำเนาถูกต้อง จำนวน 1 ฉบับ มาในวันเสาร์ที่ 4 กุมภาพันธ์ 2566</Text>
                </Box>
        {/* <ApplicationForm /> */}
      </Flex>
    </Flex>
  )
}

export default AcceptedApplication
