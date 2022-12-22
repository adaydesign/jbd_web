import {
  Collapse,
  Flex,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Divider,
  SimpleGrid,
  Box,
  Stack,
  Tbody,
  Table,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react"
import { useRef } from "react"
import { useSelectedApplicationContext } from "~/contexts/SelectedApplicationContext"
import { useReactToPrint } from "react-to-print"
import { dateThaiFormat, dateThaiTimeFormat } from "~/util/dateThaiFormat"

function ModalForm() {
  const { selectData, onClose, isOpen } = useSelectedApplicationContext()
  //console.log(selectData);

  if (!selectData) {
    return <>-</>
  }
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current,
  })

  return (
    <>
      <Modal
        onClose={onClose}
        size="6xl"
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody ref={componentRef}>
            {/* <Table w="full">
              <Tbody>
              <Tr><Td display="flex"  p="50px"> */}
            <Flex
              direction="column"
              css={{ "@page": { size: "A4", margin: "15mm 15mm" } }}
            >
              <Text textAlign="center" fontWeight="bold" fontSize="24px">
                APPLICATION FORM
              </Text>
              <Text textAlign="center" fontWeight="bold" fontSize="22px">
                ใบสมัครเข้าร่วมหลักสูตร Fellowship Program
              </Text>
              <Text textAlign="center" fontWeight="bold" fontSize="22px">
                Justice by Design: กระบวนการยุติธรรมที่ทุกคนออกแบบได้
              </Text>
              <br />
              {/* <Divider /> */}

              <Flex direction="column">
                <Text
                  fontWeight="bold"
                  fontSize="19px"
                  py={3}
                  textDecorationLine="underline"
                  mb={2}
                >
                  ประวัติส่วนตัว (Personal Information)
                </Text>

                <HStack mb={2} ml={5}>
                  <Text>ชื่อ : </Text>
                  <Text>
                    {" "}
                    {selectData.title}
                    {selectData.first_name} {selectData.last_name}
                  </Text>
                </HStack>

                <SimpleGrid columns={2} spacingX="30px" spacingY="20px" mb={2} ml={5}>
                  <Box bg="" height="50px">
                    {" "}
                    <HStack>
                      <Text>วัน เดือน ปีเกิด : {dateThaiFormat(selectData.birth_date)} </Text>{" "}
                    </HStack>
                  </Box>
                  <Box bg="" height="50px">
                    {" "}
                    <HStack>
                      <Text>อายุ : {selectData.age}</Text> <Text>ปี </Text>
                    </HStack>
                  </Box>
                </SimpleGrid>
              </Flex>

              <Flex direction="column" mb={2}>
                <Text
                  fontWeight="bold"
                  fontSize="19px"
                  textDecorationLine="underline"
                  mb={5}
                >
                  ข้อมูลเกี่ยวกับการติดต่อ (Contact Information)
                </Text>
                <Text mb={2} ml={5}>ที่อยู่ที่ประสงค์ใช้ติดต่อ : {selectData.address}</Text>
                <Text mb={2} ml={5}>
                  หมายเลขโทรศัพท์ที่ประสงค์ใช้ติดต่อ : {selectData.tel}{" "}
                </Text>
                <Text mb={2} ml={5}>หมายเลขโทรศัพท์ฉุกเฉิน : {selectData.emer_tel} </Text>
                <Text mb={2} ml={5}>Email ที่ประสงค์ใช้ติดต่อ : {selectData.email} </Text>
              </Flex>

              <Flex direction="column" mb={2}>
                <Text
                  fontWeight="bold"
                  fontSize="19px"
                  textDecorationLine="underline"
                  mb={5}
                >
                  ข้อมูลประวัติการศึกษา (Education Background)
                </Text>
                <Text mb={2} ml={5}>
                  กรณีสำเร็จการศึกษา กรุณาระบุ หลักสูตรและปีที่สำเร็จการศึกษา :{" "}
                  {selectData.edu_1}{" "}
                </Text>
                <Text mb={2} ml={5}>
                  กรณีอยู่ระหว่างการศึกษา กรุณาระบุ มหาวิทยาลัย คณะ สำนักวิชา
                  สาขา และชั้นปีที่เรียน : {selectData.edu_2}{" "}
                </Text>
              </Flex>

              <Flex direction="column" w="full" mb={2}>
                <Text
                  fontWeight="bold"
                  fontSize="19px"
                  mb={5}
                  textDecorationLine="underline"
                >
                  ข้อมูลเกี่ยวกับการประกอบอาชีพ (Working Experiences)
                </Text>
                <Text mb={2} ml={5}>ตำแหน่ง : {selectData.position} </Text>
                <Text mb={2} ml={5}>องค์กร : {selectData.org} </Text>
                <Text mb={2} ml={5}>อายุการทำงาน : {selectData.work_age} </Text>
                <Text mb={2} ml={5}>
                  ข้อมูลโดยสังเขปเกี่ยวกับลักษณะงานที่รับผิดชอบ :{" "}
                  {selectData.working_desc}{" "}
                </Text>
                <Text mb={2} ml={5}>
                  ข้าพเจ้าอยู่ระหว่างการศึกษาในสถาบันการศึกษา :{" "}
                  {selectData.study == 1 ? "ใช่ " : "ไม่ใช่"}
                </Text>
              </Flex>
              <Flex direction="column" w="full" mb={2}>
                <Text
                  fontWeight="bold"
                  fontSize="19px"
                  textDecorationLine="underline"
                  mb={5}
                >
                  ข้อมูลเกี่ยวกับการประกอบอาชีพ (Working Experiences)
                </Text>
                <Text mb={2} ml={5}>ตำแหน่ง : {selectData.position} </Text>
                <Text mb={2} ml={5}>องค์กร : {selectData.org} </Text>
                <Text mb={2} ml={5}>อายุการทำงาน : {selectData.work_age} </Text>
                <Text mb={2} ml={5}>
                  ข้อมูลโดยสังเขปเกี่ยวกับลักษณะงานที่รับผิดชอบ :{" "}
                  {selectData.working_desc}{" "}
                </Text>
                <Text mb={2} ml={5}>
                  ข้าพเจ้าอยู่ระหว่างการศึกษาในสถาบันการศึกษา :{" "}
                  {selectData.study == 1 ? "ใช่ " : "ไม่ใช่"}
                </Text>
              </Flex>
              <Flex direction="column" mb={2}>
                <Text
                  fontWeight="bold"
                  fontSize="19px"
                  textDecorationLine="underline"
                  mb={5}
                >
                  Essay Quesions
                </Text>
                <Text mb={2} as="b">
                  คุณรู้จักกระบวนการคิดเชิงออกแบบ (Design Thinking) หรือไม่
                  อย่างไร (ไม่เกิน 200 คำ)
                </Text>
                <Box
                  bg=""
                  // boxShadow="base"
                  w="full"
                  pl={5}
                  mb={2}
                >
                  <Text> {selectData.essay_1} </Text>
                </Box>

                {/* <Divider /> */}
                <Text mb={2} as="b">
                  คุณเคยศึกษา/ มีประสบการณ์ใช้บริการ/
                  ทำงานที่เกี่ยวข้องกับกระบวนพิจารณาในชั้นศาลหรือไม่ อย่างไร
                  (ไม่เกิน 200 คำ)
                </Text>

                <Box
                  bg=""
                  // boxShadow="base"
                  w="full"
                  pl={5}
                  mb={2}
                >
                  <Text> {selectData.essay_2} </Text>
                </Box>
                <Text mb={2} as="b">
                  คุณคิดว่าขั้นตอนการให้บริการของศาล หรือกระบวนพิจารณาในชั้นศาล
                  มีส่วนใดที่ควรได้รับการพัฒนามากที่สุด เพราะเหตุใด (ไม่เกิน 300
                  คำ)
                </Text>
                <Box
                  bg=""
                  // boxShadow="base"
                  w="full"
                  pl={5}
                  mb={2}
                >
                  <Text> {selectData.essay_3}</Text>
                </Box>
                <Text mb={2} as="b">
                  คุณคาดหวังว่าการเข้าร่วมหลักสูตร “Justice by Design:
                  กระบวนการยุติธรรมที่ทุกคนออกแบบได้”
                  จะเป็นประโยชน์อย่างไรต่อตัวของคุณหรือหน่วยงานที่คุณปฏิบัติหน้าที่อยู่ทั้งในปัจจุบันและใน
                  อนาคต (กรุณาอธิบายพอสังเขป แต่ไม่เกิน 500 คำ
                  เพื่อให้คณะกรรมการเข้าใจเป้าหมายในการเข้าร่วมกิจกรรมของคุณ)
                </Text>
                <Box
                  bg=""
                  // boxShadow="base"
                  w="full"
                  pl={5}
                  mb={2}
                >
                  <Text> {selectData.essay_4} </Text>
                </Box>
                <Text>
                  คุณสามารถเข้าร่วมกิจกรรมในหลักสูตรได้ครบถ้วนทุกครั้งหรือไม่ :{" "}
                  {selectData.join == 1
                    ? "สามารถเข้าร่วมได้ทุกครั้ง"
                    : "สามารถเข้าร่วมได้บางครั้ง"}
                </Text>
                <Collapse in={selectData.join == "2"} animateOpacity>
                  <Text>เนื่องจาก: {selectData.join_note} </Text>
                </Collapse>
              </Flex>

              <Flex direction="column">
                <Text
                  fontWeight="bold"
                  fontSize="19px"
                  textDecorationLine="underline"
                  mb={5}
                >
                  ช่องทางรับทราบเกี่ยวกับหลักสูตร
                </Text>
                <Text mb={2} ml={5}>
                  ช่องทางออนไลน์ :{" "}
                  {selectData.online_facebook == 1 ? "Facebook " : ""}
                  {selectData.online_instagram == 1 ? "Instagram " : ""}
                  {selectData.online_twitter == 1 ? "Twitter " : ""}
                  {selectData.online_email == 1 ? "Email " : ""}
                  {selectData.online_website == 1 ? "Website ศาลยุติธรรม " : ""}
                </Text>
                <HStack ml={5}>
                  <Text mb={2}>
                    ได้รับการแนะนำจาก :{" "}
                    {selectData.sugg_colleague == 1 ? "เพื่อนร่วมงาน " : ""}
                    {selectData.sugg_teacher == 1 ? "อาจารย์ " : ""}
                    {selectData.sugg_officer == 1
                      ? "บุคลากรของศาลยุติธรรม "
                      : ""}
                    {selectData.sugg_email == 1 ? "Email" : ""}
                    {selectData.sugg_other == 1 ? "อื่นๆ ระบุ " : ""}{" "}
                  </Text>
                  <Collapse in={selectData.sugg_other == "1"} animateOpacity>
                    <Text> {selectData.sugg_note} </Text>
                  </Collapse>
                </HStack>
              </Flex>
              <Flex>
              <Box
                  bg=""
                  // boxShadow="base"
                  w="full"
                  pl={5}
                  mt={10}
                  mb={2}
                >
                  <Text fontStyle="italic" align="right">ยื่นใบสมัครเมื่อ : {dateThaiTimeFormat(selectData.createdAt)} {" "}น.</Text>
                </Box>

              </Flex>
            </Flex>
            {/* </Td></Tr>
              </Tbody>
            </Table> */}
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor="palette.secondary"
              onClick={handlePrint}
              mr={2}
            >
              พิมพ์ใบสมัคร
            </Button>
            <Button onClick={onClose} mr={5}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalForm
