import prisma from '@/utils/db';

const prismaHandlers = async () => {
  console.log('prisma example');
  // await prisma.task.create({
  //   data: {
  //     content: 'wake up',
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1>Prisma Example</h1>
      {tasks.map((task, index) => (
        <h2 key={task.id} className="text-xl py-2">
          {index + 1}. {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaExample;
