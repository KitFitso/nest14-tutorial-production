import TaskForm from '@/components/prismaExample/TaskForm';
import TaskList from '@/components/prismaExample/TaskList';

import TaskFormThick from '@/components/prismaExample/TaskFormThick';

export const dynamic = 'force-dynamic';

const Tasks = () => {
  return (
    <div>
      {/* <TaskForm /> */}
      <TaskFormThick />
      <TaskList />
    </div>
  );
};

export default Tasks;
