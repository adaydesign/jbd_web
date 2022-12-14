import {
  Badge,
  Button,
  Flex,
  Icon,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  SortingState,
  ColumnDef,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import {
 
  FaPaperclip,
  FaPrint,
 
} from "react-icons/fa";
import { APP_DOC_PATH } from "~/constants";
import { useSelectedApplicationContext } from "~/contexts/SelectedApplicationContext";
import { dateThaiShortFormat } from "~/util/dateThaiFormat";


type AdminApplicationTableProps = {
  data: [];
};

function AdminApplicationTable({ data }: AdminApplicationTableProps) {
 const {setSelectData,onOpen}=useSelectedApplicationContext()
  const columns = useMemo(
    () => [
      { id: "order", header: "ที่", cell: (info: any) => info.row.index + 1 },
      {
        header: "คำนำหน้า",
        accessorKey: "title",
        cell: (info: any) => info.getValue(),
      },
      {
        header: "ชื่อ",
        accessorKey: "first_name",
        cell: (info: any) => info.getValue(),
      },
      {
        header: "นามสกุล",
        accessorKey: "last_name",
        cell: (info: any) => info.getValue(),
      },
      // {
      //   header: "อายุ (ปี)",
      //   accessorKey: "age",
      //   cell: (info: any) => info.getValue(),
      // },
      {
        header: "ตำแหน่ง",
        accessorKey: "position",
        cell: (info: any) => info.getValue(),
      },
      // {
      //   header: "เบอร์ติดต่อ",
      //   accessorKey: "tel",
      //   cell: (info: any) => info.getValue(),
      // },
      {
        header: "วันที่สมัคร",
        accessorKey: "position",
        cell: (info: any) => {
          const dt = info.row.original.createdAt;
          return <>{dateThaiShortFormat(dt)}</>;


          // dateThaiFormat(dt)
          
        }
      },

      // {
      //   header: "เข้าร่วม",
      //   accessorKey: "join",
      //   cell: (info: any) => {
      //     if (info.getValue() == 1) {
      //       return <Text>ทุกครั้ง</Text>;
      //     }
      //     if (info.getValue() == 2) {
      //       return <Text>บางครั้ง</Text>;
      //     }
      //   },
      // },

      {
        header: "Action",
        accessorKey: "",
        cell: (info: any) => {
          return (
           
            <Flex justify="flex-end">
        {info.row.original.cv_file && (
           <Button as={Link} href={APP_DOC_PATH+info.row.original.cv_file} isExternal>            

              <Icon
                as={FaPaperclip}
                cursor="pointer"
                color="palette.secondary"
              />

</Button>
        )}
       
              <Button ml="2" onClick={() => {
                onOpen()
                setSelectData(info.row.original)
              }
                }>
                <Icon
                  as={FaPrint}
                  cursor="pointer"
                  color="palette.main"
                  // ml="6px"
                />
              </Button>
            </Flex>
          );
        },
      },
    ],

    [data]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Flex w="full">
      <TableContainer w="full">
        <Table>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id} >
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} whiteSpace="normal">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default AdminApplicationTable;
