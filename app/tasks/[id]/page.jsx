import { editTask, getTask } from '@/utils/reducer/tasks';
import Link from 'next/link';

const EditTask = async ({ params }) => {
  const { id } = params;

  const task = await getTask(id);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <>
      <Link href={'/tasks'} className="btn btn-accent">
        Back to tasks
      </Link>
      <form
        action={editTask}
        className="max-w-sm p-12 border border-base-300 rounded-lg"
      >
        <input type="hidden" name="id" value={task.id} />
        <input
          required
          type="text"
          name="content"
          className="input input-bordered w-full"
          defaultValue={task.content}
          placeholder="Rename the task here"
        />
        <div className="form-control my-4">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">Complete</span>
            <input
              type="checkbox"
              name="completed"
              defaultChecked={task.completed}
              id="completed"
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-block btn-sm btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default EditTask;
