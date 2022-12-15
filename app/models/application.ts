import { prisma } from "~/db.server"

export const createApplication = (data:any) => {
    return prisma.application.create({ data: data })
}

export const getAllApplications = () => {
    return prisma.application.findMany()
}