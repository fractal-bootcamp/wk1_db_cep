import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
    const book = await prisma.book.create({
        data: {
            ISBN: '1837392780',
            title: 'Read More',
            author: {
                create: {
                    name: 'NiceGuys',
                    bio: 'guys r nice',
                }
            },
            genre: {
                create: {
                    name: 'scary stuff',
                }
            },
            member: {
                create: {
                    name: 'guy1',
                    email: 'guy@guy1.com',
                    address: '911 guys street',
                }
            },
        }
    })

}
main(); 