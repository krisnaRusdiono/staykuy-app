import { z } from 'zod';

const homeSchema = z.object({
    city: z.string(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
    guest: z.number(),
    room: z.number(),
})

export default homeSchema;
