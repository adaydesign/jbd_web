import { Collapse, Flex, HStack, Text,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Divider, } from "@chakra-ui/react";
import React from "react";
import { useSelectedApplicationContext } from "~/contexts/SelectedApplicationContext";


function ModalForm() {

 

  const { selectData,onClose,isOpen} = useSelectedApplicationContext();
  console.log(selectData);
  
  if (!selectData) {
    return <>-</>;
  }
  return (
    <>
      

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          <Flex direction="column">
        <Text textAlign="center" fontWeight="bold" fontSize="24px">
          APPLICATION FORM
        </Text>
        <Text textAlign="center" fontWeight="bold" fontSize="22px">
          ใบสมัครเข้าร่วมหลักสูตร Fellowship Program
        </Text>
        <Text textAlign="center" fontWeight="bold" fontSize="22px">
          Justice by Design: กระบวนการยุติธรรมที่ทุกคนออกแบบได้
        </Text>
        <br/>
        {/* <Divider /> */}
        <br/>
        <Flex direction="column">
          <Text fontWeight="bold" fontSize="19px">
            ประวัติส่วนตัว (Personal Information)
          </Text>
          <Text textDecorationLine="underline">
            ชื่อ : {selectData.title}
            {selectData.first_name} {selectData.last_name}
          </Text>
          <Text>วัน เดือน ปีเกิด : {selectData.birth_date} </Text>
          <HStack>
            <Text>อายุ : {selectData.age}</Text> <Text>ปี </Text>
          </HStack>
        </Flex>

        <Flex direction="column">
          <Text fontWeight="bold" fontSize="19px">
            ข้อมูลเกี่ยวกับการติดต่อ (Contact Information)
          </Text>
          <Text>ที่อยู่ที่ประสงค์ใช้ติดต่อ : {selectData.address}</Text>
          <Text>หมายเลขโทรศัพท์ที่ประสงค์ใช้ติดต่อ : {selectData.tel} </Text>
          <Text>หมายเลขโทรศัพท์ฉุกเฉิน : {selectData.emer_tel} </Text>
          <Text>Email ที่ประสงค์ใช้ติดต่อ : {selectData.email} </Text>
        </Flex>

        <Flex direction="column">
          <Text fontWeight="bold" fontSize="19px">
            ข้อมูลประวัติการศึกษา (Education Background)
          </Text>
          <Text>
            กรณีสำเร็จการศึกษา กรุณาระบุ หลักสูตรและปีที่สำเร็จการศึกษา :{" "}
            {selectData.edu_1}{" "}
          </Text>
          <Text>
            กรณีอยู่ระหว่างการศึกษา กรุณาระบุ มหาวิทยาลัย คณะ สำนักวิชา สาขา
            และชั้นปีที่เรียน : {selectData.edu_2}{" "}
          </Text>
        </Flex>

        <Flex direction="column">
          <Text fontWeight="bold" fontSize="19px">
            ข้อมูลเกี่ยวกับการประกอบอาชีพ (Working Experiences)
          </Text>
          <Text>ตำแหน่ง : {selectData.position} </Text>
          <Text>องค์กร : {selectData.org} </Text>
          <Text>อายุการทำงาน : {selectData.work_age} </Text>
          <Text>
            ข้อมูลโดยสังเขปเกี่ยวกับลักษณะงานที่รับผิดชอบ :{" "}
            {selectData.working_desc}{" "}
          </Text>
          <Text>
            ข้าพเจ้าอยู่ระหว่างการศึกษาในสถาบันการศึกษา : {selectData.study}{" "}
          </Text>
        </Flex>
        <Flex direction="column">
          <Text fontWeight="bold" fontSize="19px">
            Essay Quesions
          </Text>
          <Text>
            คุณรู้จักกระบวนการคิดเชิงออกแบบ (Design Thinking) หรือไม่ อย่างไร
            (ไม่เกิน 200 คำ)
          </Text>
          <Text> {selectData.essay_1} </Text>
          <Text>
            คุณเคยศึกษา/ มีประสบการณ์ใช้บริการ/
            ทำงานที่เกี่ยวข้องกับกระบวนพิจารณาในชั้นศาลหรือไม่ อย่างไร (ไม่เกิน
            200 คำ)
          </Text>
          <Text> {selectData.essay_2} </Text>
          <Text>
            คุณคิดว่าขั้นตอนการให้บริการของศาล หรือกระบวนพิจารณาในชั้นศาล
            มีส่วนใดที่ควรได้รับการพัฒนามากที่สุด เพราะเหตุใด (ไม่เกิน 300 คำ)
          </Text>
          <Text> {selectData.essay_3}</Text>
          <Text>
            คุณคาดหวังว่าการเข้าร่วมหลักสูตร “Justice by Design:
            กระบวนการยุติธรรมที่ทุกคนออกแบบได้”
            จะเป็นประโยชน์อย่างไรต่อตัวของคุณหรือหน่วยงานที่คุณปฏิบัติหน้าที่อยู่ทั้งในปัจจุบันและใน
            อนาคต (กรุณาอธิบายพอสังเขป แต่ไม่เกิน 500 คำ
            เพื่อให้คณะกรรมการเข้าใจเป้าหมายในการเข้าร่วมกิจกรรมของคุณ)
          </Text>
          <Text> {selectData.essay_4} </Text>
          <Text>
            คุณสามารถเข้าร่วมกิจกรรมในหลักสูตรได้ครบถ้วนทุกครั้งหรือไม่ :{" "}
            {selectData.join}{" "}
          </Text>
          <Collapse in={selectData.join == "2"} animateOpacity>
            <Text>เนื่องจาก: {selectData.join_note} </Text>
          </Collapse>
        </Flex>

        <Flex direction="column">
          <Text fontWeight="bold" fontSize="19px">
            คุณรับทราบเกี่ยวกับหลักสูตรจากแห่งข้อมูลใด
          </Text>
          <Text>ช่องทางออนไลน์ : 
            {selectData.online_facebook ==1 ?"Facebook ":""}
            {selectData.online_instagram ==1 ?"Instagram ":""}
            {selectData.online_twitter ==1 ?"Twitter ":""}
            {selectData.online_email==1 ?"Email ":""}
            {selectData.online_website==1 ?"Website ศาลยุติธรรม ":""}
            
          </Text>
          <HStack>
          <Text>ได้รับการแนะนำจาก : 
            {selectData.sugg_colleague==1 ?"เพื่อนร่วมงาน ":""}
            {selectData.sugg_teacher==1 ?"อาจารย์ ":""}
            {selectData.sugg_officer==1 ?"บุคลากรของศาลยุติธรรม คือ ":""}
            {selectData.sugg_email==1 ?"Email":""}
            {selectData.sugg_other==1 ?"ช่องทางอื่น คือ ":""}
          </Text>
          <Collapse in={selectData.sugg_other == "1"} animateOpacity>
            <Text> {selectData.sugg_note} </Text>
          </Collapse>
          </HStack>
        </Flex>
      </Flex>

          
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalForm;
