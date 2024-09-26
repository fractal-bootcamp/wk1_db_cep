import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

//create one client for all time - reusing this 