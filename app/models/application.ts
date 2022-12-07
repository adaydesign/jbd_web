import { prisma } from "~/db.server"

export const createApplication = (data:any) => {
    return prisma.application.create({ data: data })
}