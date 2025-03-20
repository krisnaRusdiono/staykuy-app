import { z } from 'zod';

const homeSchema = z.object({
    city: z.number().optional(),
    cityName: z.string().optional(),
    startDate: z.date().nullish(),
    endDate: z.date().nullish(),
    guest: z.string().optional(),
    room: z.string().optional(),
    stars: z.array(z.number())
})

export default homeSchema;
