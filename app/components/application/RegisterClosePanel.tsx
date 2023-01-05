import { Text } from '@chakra-ui/react'
import React from 'react'

function RegisterClosePanel() {
  return (
    <>
    <Text as= 'b' fontSize="24px" textAlign="center">
    อยู่ระหว่างพิจารณาคัดเลือกผู้เข้าร่วมอบรมจากข้อมูลที่กรอกในใบสมัคร <br />ประกาศผลภายในวันที่ 20 ม.ค. 2566 
    </Text>
    <br />
    <Text as= 'u' fontSize="22px" textAlign="center">
    **การคัดเลือกผู้เข้าร่วมอบรมโดยคณะกรรมการให้ถือเป็นที่สุด**
    </Text>
    </>
  )
}

export default RegisterClosePanel