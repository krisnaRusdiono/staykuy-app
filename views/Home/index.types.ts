import { z } from 'zod';
import homeSchema from './index.schemas';

export type HomeSchema = z.infer<typeof homeSchema>;