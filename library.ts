import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
    const book = await prisma.book.create({
        data: {
            ISBN: '183739280',
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

    const firstBookIFound = await prisma.book.findFirst()
    const author = await prisma.author.create({
        data: {
            name: 'NiceGuys',
            bio: 'guyr r nice',
            books: {
                create: {
                    ISBN: '1837392780',
                    title: 'Read More',
                }
            }

        }
    })

    const genre1 = await prisma.genre.create({
        data: {
            name: "scary stuff"
        }
    })
}
main(); 