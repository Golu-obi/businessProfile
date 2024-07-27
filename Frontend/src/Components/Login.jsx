import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function LOGIN() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here, e.g., authentication
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to='/' type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('email', { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>*This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register('password', { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>*This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-orange-500 text-white rounded-md px-3 py-1 hover:bg-blue-500 duration-200">Login</button>
              <p>Not registered yet? <Link to="/signup" className="underline text-violet-900 hover:text-blue-500 cursor-pointer">SignUp</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default LOGIN;
