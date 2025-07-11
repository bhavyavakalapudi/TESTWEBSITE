import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

export const batchJobSchema = z.object({
  oldPatientsTarget: z.number().min(0, "Must be at least 0").max(100, "Must be at most 100"),
  importSetupId: z.number().min(1, "Must be a positive integer greater than 0"),
  hourlyBatchCount: z.number().min(1, "Must be at least 1").max(100, "Must be at most 100"),
});

export type LoginData = z.infer<typeof loginSchema>;
export type InsertBatchJob = z.infer<typeof batchJobSchema>;