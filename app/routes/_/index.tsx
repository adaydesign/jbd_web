import { Flex, useDisclosure } from "@chakra-ui/react"
import { LoaderFunction, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import React, { useState } from "react"
import { AdminApplicationTable } from "~/components/admin"
import { ModalForm } from "~/components/admin"
import { PageHeader, TextHeader } from "~/components/common"
import SelectedApplicationContext from "~/contexts/SelectedApplicationContext"
import { getAllApplications } from "~/models/application"
import { requireEditorRole } from "~/session.server"

export const loader: LoaderFunction = async ({ request }) => {
  // require EDITOR role
  const isEditor = await requireEditorRole(request)
  if (!isEditor) return redirect("/?action=invalid")

  const data = await getAllApplications()
  return data
}

const AdminPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectData, setSelectData] = useState()
  const data = useLoaderData()

  return (
    <SelectedApplicationContext.Provider
      value={{ selectData, setSelectData, isOpen, onOpen, onClose }}
    >
      <Flex w="full" direction="column">
        <PageHeader heading="Administrator" text="" />
        <Flex w="full" direction="column" p={{ base: 4, md: 16 }}>
          <TextHeader text1="Application" text2="Entry" />
          <AdminApplicationTable data={data} />
          <ModalForm />
        </Flex>
      </Flex>
    </SelectedApplicationContext.Provider>
  )
}

export default AdminPage
