import { prisma } from "~/db.server"

export const createApplication = (data:any) => {
    return prisma.application.create({ data: data })
}

export const getAllApplications = (where?:any) => {
    return prisma.application.findMany({
        where:where,
          orderBy:{
            createdAt:"asc"
        }
    })
}

// export const getQualifiedApplications = () => {
//     return prisma.application.findMany({
//         where:{
// qualified:"1"
//         },
//         orderBy:{
//             createdAt:"asc"
//         }
//     })
// }