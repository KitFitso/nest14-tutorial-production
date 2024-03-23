'use server';

import prisma from '../db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const createTask = async (prevState, formdata) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const content = formdata.get('content');
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath('/tasks');
    return { message: 'Success' };
  } catch (error) {
    return { message: 'error' };
  }
};
