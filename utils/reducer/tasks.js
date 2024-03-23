'use server';
import prisma from '../db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createTask = async (formdata) => {
  const content = formdata.get('content');

  await prisma.task.create({
    data: {
      content,
    },
  });

  revalidatePath('/tasks');
};

export const deleteTask = async (formdata) => {
  const id = formdata.get('id');

  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath('/tasks');
};

export const getTask = async (id) => {
  const task = await prisma.task.findUnique({
    where: { id },
  });

  return task;
};

export const editTask = async (formdata) => {
  const id = formdata.get('id');
  const content = formdata.get('content');
  const completed = !!formdata.get('completed');

  await prisma.task.update({
    where: { id },
    data: { content, completed },
  });

  redirect('/tasks');
};
