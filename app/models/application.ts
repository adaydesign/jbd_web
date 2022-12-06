import { prisma } from "~/db.server"

export const createUnit = (data:any) => {
    return prisma.application.create({ data: data })
}