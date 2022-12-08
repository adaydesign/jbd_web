import { Box, Button, Center, Flex, Icon, Text, VStack } from "@chakra-ui/react"
import {
  ActionArgs,
  ActionFunction,
  NodeOnDiskFile,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node"
import { ApplicationForm } from "~/components/application"
import { PageHeader, TextHeader } from "~/components/common"
import { APP_UPLOAD_DOC_PATH } from "~/constants"
import { v4 as uuidv4 } from "uuid"
import { createApplication } from "~/models/application"
import { Link, useActionData } from "@remix-run/react"
import { RiStarLine } from "react-icons/ri"

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      directory: APP_UPLOAD_DOC_PATH,
      file: ({ filename }) => {
        const ext = filename.split(".").pop()
        return `doc_${uuidv4()}.${ext}`
      },
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  )
  const formData = await unstable_parseMultipartFormData(request, uploadHandler)

  const file = formData.get("cv_file")
  let fileName = ""
  if (file instanceof Object) {
    fileName = file.name
  }
  const age = formData.get("age")
  let ageInt = 0
  if (age) {
    ageInt = parseInt(age.toString())
  }

  // insert
  const data = {
    title: formData.get("title"),
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    birth_date: formData.get("birth_date"),
    age: ageInt,
    address: formData.get("address"),
    tel: formData.get("tel"),
    emer_tel: formData.get("emer_tel"),
    email: formData.get("email"),
    edu_1: formData.get("edu_1"),
    edu_2: formData.get("edu_2"),
    cv_file: fileName,
    position: formData.get("position"),
    org: formData.get("org"),
    work_age: formData.get("work_age"),
    working_desc: formData.get("working_desc"),
    study: formData.get("study") ? 1 : 0,
    essay_1: formData.get("essay_1"),
    essay_2: formData.get("essay_2"),
    essay_3: formData.get("essay_3"),
    essay_4: formData.get("essay_4"),
    join: formData.get("join"),
    join_note: formData.get("join_note"),
    online_facebook: formData.get("online_facebook") ? 1 : 0,
    online_instagram: formData.get("online_instagram") ? 1 : 0,
    online_twitter: formData.get("online_twitter") ? 1 : 0,
    online_email: formData.get("online_email") ? 1 : 0,
    online_website: formData.get("online_website") ? 1 : 0,
    sugg_colleague: formData.get("sugg_colleague") ? 1 : 0,
    sugg_teacher: formData.get("sugg_teacher") ? 1 : 0,
    sugg_officer: formData.get("sugg_officer") ? 1 : 0,
    sugg_email: formData.get("sugg_email") ? 1 : 0,
    sugg_other: formData.get("sugg_other") ? 1 : 0,
    sugg_note: formData.get("sugg_note"),
  }

  const rs = await createApplication(data)
  if (rs) {
    return { success: true }
  } else {
    return { success: false }
  }
}

const SuccessPanel = () => {
  return (
    <Flex w="full" p={10} bgColor="green.50">
      <Center w="full" flexDirection="column">
        <Icon as={RiStarLine} boxSize="60px" color="green.700" />
        <VStack mt={2}>
          <Text fontSize="20px" color="green" fontWeight="bold">
            ท่านได้ส่งใบสมัครเข้าร่วมโครงการเรียบร้อยแล้ว
            เราจะทำการแจ้งผลการสมัครภายหลัง
          </Text>
          <Text fontSize="20px">
            Thank you for submitting application, we will be in touch shortly.
          </Text>
          <Box h="100px" />
          <Link to="/">
            <Button colorScheme="menu">กลับหน้าแรก</Button>
          </Link>
        </VStack>
      </Center>
    </Flex>
  )
}

const Application = () => {
  const actionData = useActionData()

  return (
    <Flex w="full" direction="column">
      <PageHeader heading="Design Matters" text="Home - Design Matters" />
      <Flex w="full" direction="column" p={16}>
        <TextHeader text1="Online" text2="Application Form" />
        {actionData && actionData?.success && <SuccessPanel />}
        {!actionData && <ApplicationForm />}
      </Flex>
    </Flex>
  )
}

export default Application
