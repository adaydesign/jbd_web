
import {
  Center,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  keyframes,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react"



import { BlockTitle, Line } from "~/components/common";

//animate Blink Marquee
import { motion } from "framer-motion";
const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const blinker = keyframes`
  50% { opacity: 0; }
`;

const pluse = keyframes`
  0% { background-color: #FFE15D; }
  50% { background-color: #F49D1A; }
  100% { background-color: #DC3535; }
`;

const marqueeVariants = {
  animate: {
    x: [400, -100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear"
      }
    }
  }
};

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
const animationBlink = `${blinker} 1.5s linear infinite`;
const animationPluse = `${pluse} 4s infinite`;
//-----




const WeeklyRecapPage = () => {
  return (
    <Center w="full" bgColor="palette.container">
      <Accordion  defaultIndex={[0]} allowToggle>
        <AccordionItem>
          <h1>
            <AccordionButton _expanded={{ bg: "red", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                <Text as="b" fontSize="22px">
                  Update! การอบรมหลักสูตร Justice x Design: Week 1 ( 4<sup>th</sup> February 2023 )
                </Text>
                


                
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            <Box p={10} shadow="2xl">
              <Center flexDirection="column">
            <Image src="images/week1/01.jpg" borderRadius="xl" boxSize="90%" boxShadow="dark-lg"  />
            

            <Text
            
            // as ={Link}
            // to ={"https://drive.google.com/drive/folders/14lRM6qMLZJpsDMr6nTGqcM_E4j8WohUC?usp=sharing"}
            fontSize="22px"
            textAlign="center"
            textColor="white"
           w="150px"
            mt={10}
            as={motion.div}
            animation={animationPluse}
            // bgColor="blue.200"
          >
            <a href="https://drive.google.com/drive/folders/14lRM6qMLZJpsDMr6nTGqcM_E4j8WohUC?usp=sharing" target="_blank">
              -More Photos-
          </a>
          </Text>
        

            </Center>

            
          
            <Text
              fontSize="19px"
              lineHeight="9"
              textAlign="justify"
              textIndent="50px"
              mt={10}
              
            >
              Week 1 Recap! ผ่านไปแล้วสำหรับสัปดาห์แรกของการอบรมหลักสูตร
              <b> “Justice x Design: กระบวนการยุติธรรมที่ทุกคนออกแบบได้” </b>
              เช้าวันเสาร์ที่ 4 กุมภาพันธ์ 2566
              เริ่มต้นด้วยการกล่าวเปิดการอบรมโดยทีมงานจากสำนักงานศาลยุติธรรม
              จากนั้นทีมงานหลักสูตร Justice x Design ประกอบไปด้วย ทีมงานจาก COJ,
              LUKKID และ TIJ
              พาผู้เข้าร่วมอบรมในหลักสูตรเริ่มต้นละลายพฤติกรรมเพื่อให้สมาชิกภายในกลุ่มรู้จักและคุ้นเคยกันมากขึ้นเสียก่อนที่จะเข้าสู่เนื้อหาการอบรม
            </Text>
            <Text
              fontSize="19px"
              lineHeight="9"
              textAlign="justify"
              textIndent="50px"
              mt={3}
            >
              หลังจากสมาชิกกลุ่มเริ่มรู้จักกันแล้ว ทีมงานนำทุกคนเข้าสู่โลกของ{" "}
              <b>“Design-Thinking” หรือ “กระบวนการคิดเชิงออกแบบ” </b>{" "}
              เพื่อทำความรู้จักกับเครื่องมือที่เราจะใช้ในการออกแบบกระบวนการยุติธรรมในชั้นศาลเสียใหม่ตลอดระยะเวลา
              8 สัปดาห์ที่สมาชิกกลุ่มจะทำ Project ร่วมกัน
              รวมถึงพาทุกคนไปรู้จักกับโจทย์ใหญ่ของโครงการ Justice x Design
              ในครั้งนี้ คือ{" "}
              <b>“Redesigning the Court for Better Access to Justice” </b>{" "}
              ซึ่งภายใต้โจทย์ใหญ่นี้มีการแบ่งเป็นโจทย์ย่อยแต่ละด้าน เช่น
            </Text>

            <Text fontSize="19px" lineHeight="9" textIndent="70px" mt={1}>
              - การลดความเหลื่อมล้ำด้านดิจิทัล (Less Digital Gap)
            </Text>
            <Text fontSize="19px" lineHeight="9" textIndent="70px">
              - การทำให้ประชาชนสามารถดำเนินคดีเองได้โดยง่าย (More Independence)
            </Text>
            <Text fontSize="19px" lineHeight="9" textIndent="70px">
              - การทำให้กระบวนการศาลรบกวนเวลาของประชาชนน้อยที่สุด (Less
              Time-Consuming) และ
            </Text>
            <Text fontSize="19px" lineHeight="9" textIndent="70px">
              - การทำให้ศาลสามารถเข้าถึงได้ง่ายมากขึ้น (More Reachable)
            </Text>
            <Text
              fontSize="19px"
              lineHeight="9"
              textAlign="justify"
              textIndent="50px"
              mt={3}
            >
              เมื่อทำความรู้จักกับโจทย์ของโครงการในเบื้องต้นแล้ว
              สมาชิกกลุ่มได้มีโอกาสอภิปราย ถกเถียง
              และแสดงความคิดเห็นเกี่ยวกับโจทย์ที่กลุ่มของตนเองได้รับ
              จากนั้นสมาชิกกลุ่มร่วมกันตีกรอบปัญหาให้แคบลงเพื่อความชัดเจนมากขึ้น
              พยายามกำหนดกลุ่มเป้าหมายที่สมาชิกกลุ่มต้องการไปขอข้อมูล
              และกำหนดวิธีการในการเก็บข้อมูลเพื่อประกอบการพัฒนา Group Project
              ของตนเอง โดยระหว่างการอภิปรายกลุ่มมีทีมงาน Facilitators
              คอยให้คำแนะนำอย่างใกล้ชิดตลอดเวลา
            </Text>
            <Text
              fontSize="19px"
              lineHeight="9"
              textAlign="justify"
              textIndent="50px"
              mt={3}
            >
              ก่อนจบการอบรมในสัปดาห์แรก ทีมวิทยากรมอบหมายให้สมาชิกกลุ่มจัดทำ
              Work Sheet เพื่อสรุปประเด็นต่าง ๆ ที่ได้พูดคุยกันภายในกลุ่ม
              และฝากการบ้านให้แต่ละกลุ่มกำหนดกลุ่มเป้าหมายที่จะสัมภาษณ์เพื่อทำความเข้าใจปัญหาที่กลุ่มเป้าหมายเคยประสบพบเจอให้ชัดเจน
              โดยในการอบรมสัปดาห์ต่อไปจะฝึกหัดการสัมภาษณ์กลุ่มเป้าหมายเพื่อเก็บข้อมูลให้มีประสิทธิภาพ
              ซึ่งจะทำให้การทำความเข้าอกเข้าใจผู้ใช้บริการ (Empathy)
              เป็นไปอย่างมีประสิทธิภาพ 
              </Text>
              <Text
              fontSize="19px"
              lineHeight="9"
              textAlign="center"
              textIndent="50px"
              mt={5}
            >
              แล้วเจอกันใหม่ วันเสาร์ที่ 11 กุมภาพันธ์ นะคะ 😊
            </Text>
           
            {/* <GalleryWeek1 /> */}
 
            </Box>
          </AccordionPanel>
        </AccordionItem>
  
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Up Coming! การอบรมหลักสูตร Justice x Design: Week 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
           - Coming Soon -
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* <iframe src="/docs/selectedcandidates.pdf" width="1000px" height="1200px" title="รายชื่อผู้ได้รับการคัดเลือกเข้าร่วมหลักสูตร"></iframe> */}

      {/* <iframe src="https://docs.google.com/viewer?url=https://jbd.coj.go.th/docs/selectedcandidates.pdf&embedded=true" width="100%" height="500px" title="รายชื่อผู้ได้รับการคัดเลือกเข้าร่วมหลักสูตร"></iframe> */}
      {/* <ClientPanel /> */}
    </Center>
  );
};

export default WeeklyRecapPage;
