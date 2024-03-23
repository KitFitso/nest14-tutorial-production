'use client';

import { deleteTask } from '@/utils/reducer/tasks';
import { useFormStatus, useFormState } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs bg-error text-black" disabled={pending}>
      {pending ? 'Please hold' : 'Delete'}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
      {/* <button className="btn btn-xs btn-error">delete</button> */}
    </form>
  );
};

export default DeleteForm;
