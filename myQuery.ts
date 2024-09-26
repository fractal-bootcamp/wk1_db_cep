import { prisma } from './client';


async function checkOutBook(bookId: string, memberCheckoutId: string | null) {
    // write code that checks out the book with bookId to member with memberId

    const checkOut = await prisma.book.update({
        where: {
            id: bookId
        },
        data: { memberId: memberCheckoutId }
    });
    return checkOut
}
// call checkout book using any valid bookId/memberId pair
checkOutBook('cm1icrs87000010h1bqozrf2a', null)