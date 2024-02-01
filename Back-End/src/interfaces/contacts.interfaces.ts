import { z } from "zod";
import { Repository } from "typeorm";
import { Contact } from "../entities";
import { createSchedulesSchema } from "../schemas/contacts.schema";

export type CreateSchedules = z.infer<typeof createSchedulesSchema>

export type SchedulesRepo = Repository<Contact>