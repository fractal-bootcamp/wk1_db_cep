
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const genre1 = await prisma.genre.createMany({
    data: [
        {
            name: "blech"
        },
        {
            name: "fantasy"
        }, {
            name: "horror"
        },
        {
            name: "happy"
        },
        {
            name: "weird"
        },
    ]
})

console.log(genre1)