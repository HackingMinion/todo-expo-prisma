import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'Max',
      email: 'max@prisma.io',
      todos: {
        create: { title: 'Hello World', content: 'This is a Test' },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      todos: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

main();
