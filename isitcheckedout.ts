import { prisma } from './client'

async function isChecked(bookId: string): Promise<boolean> {
    const book = await prisma.book.findUnique({
        where: {
            id: bookId
        }
    });
    return book?.memberId ? true : false
    /* 
        if (book === null) return false;
        if (book.memberId === null) return false;
        else return true; */
}
console.log(await isChecked('cm1icrs87000010h1bqozrf2a')); 