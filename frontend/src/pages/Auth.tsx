import { Link } from 'react-router-dom';

type AuthType = 'signup' | 'login';

const Auth = ({ type }: { type: AuthType }) => {
  return (
    <main className="flex justify-center items-center h-dvh">
      <div className="max-w-[20rem]">
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Black colored tick mark" />
          <h1 className="text-5xl font-bold mt-5 leading-tight">
            {type == 'signup' ? 'Sign up' : 'Log in'} to track todos
          </h1>
        </div>
        <div className="flex flex-col mt-10">
          <label htmlFor="email" className="font-semibold text-sm">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            className="border outline-none p-3 mt-2 focus:border-slate-500"
          />
          <button className="bg-green-500 font-semibold h-12 my-8 cursor-pointer hover:bg-green-400 transition hover:scale-105">
            Next
          </button>
        </div>
        <hr className="text-slate-300" />
        <div className="mt-8 text-center">
          <p className="text-slate-500">
            {type == 'signup'
              ? 'Already have an account?'
              : "Don't have an account?"}{' '}
            <Link
              className="text-black underline"
              to={type == 'signup' ? '/login' : '/signup'}
            >
              {type == 'signup' ? 'Log in here' : 'Sign up here'}.
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Auth;
