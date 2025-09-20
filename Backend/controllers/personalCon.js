import prisma from "../client/prismaClient.js";

export const getPersonal = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const offset = page * limit;

        const totalRows = await prisma.datapersonal.count({
            where: {
                OR: [
                    { firs_name: { contains: search, mode: 'insensitive' } },
                    { last_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                    { gender: { contains: search, mode: 'insensitive' } },
                    { ip_address: { contains: search, mode: 'insensitive' } },
                ],
            },
        });
        const totalPages = Math.ceil(totalRows / limit);

        const data = await prisma.datapersonal.findMany({
            where: {
                OR: [
                    { firs_name: { contains: search, mode: 'insensitive' } },
                    { last_name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                    { gender: { contains: search, mode: 'insensitive' } },
                    { ip_address: { contains: search, mode: 'insensitive' } },
                ],
            },
            skip: offset,
            take: limit,
            orderBy: {
                id: 'desc',
            },
        });
        return res.status(200).json({ result: data, page, limit, totalRows, totalPages });
    } catch (error) {
        console.log(error.message);
    };
};