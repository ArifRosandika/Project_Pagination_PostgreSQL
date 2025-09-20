import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  for (let i = 0; i < 200; i++) {
    await prisma.datapersonal.create({
      data: {
        firs_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        gender: faker.person.sexType(),
        ip_address: faker.internet.ip(),
      },
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
