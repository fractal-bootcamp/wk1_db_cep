import {prisma} from './client';

// we want to make an author AND their books at the same time.
await prisma.author.create({
    data: {
        name: "george",
        bio: "nooooooo",
        books: {
            createMany: {
                data: [
                    {
                        title: 'george world',
                        ISBN: '456-123456789'
                    },
                    {
                        title: 'george returns',
                        ISBN: '456-123456789'
                    },
                    {
                        title: 'george returns 3',
                        ISBN: '456-122456789'
                    },
                    {
                        title: 'uh oh george',
                        ISBN: '456-122416789'
                    },
                ]
            }
        }
    }
    
})