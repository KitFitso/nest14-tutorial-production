'use client';

import { createTask } from '@/utils/reducer/tasksThick';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? 'please wait' : 'create task'}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormThick = () => {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('There was an error');
      return;
    }
    if (state.message) {
      toast.success('task created');
    }
  }, [state]);

  useFormState(createTask);
  return (
    <form action={formAction}>
      {state.message && <p className="mb-2">{state.message}</p>}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
        {/* <button type="submit" className="btn btn-primary join-item">
          Create Task
        </button> */}
      </div>
    </form>
  );
};

export default TaskFormThick;
