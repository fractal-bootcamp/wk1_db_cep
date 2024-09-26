


import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const books = await prisma.book.findMany({
    include: {
        genre: true,
        author: true,
        member: true
    }
})

console.log(books)
console.log(books[0].genre)