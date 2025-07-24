import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="py-4 text-center">
          <p className="">
            Accelerate your journey to achieve your goals faster then before!{' '}
            <a
              href="https://github.com/dev-rajm/u-go"
              className="underline text-blue-600 hover:text-blue-500"
            >
              Latest release.
            </a>
          </p>
        </div>
        <section className="hero h-dvh grid grid-cols-12 items-center bg-white">
          <div className="col-span-7 mx-auto max-w-[30rem]">
            <h1 className="text-5xl font-semibold leading-14">
              Finally organize your works and live with one tool.
            </h1>
            <p className="mt-3 mb-5 text-slate-500">
              Remember everything and track progresses in your tasks, notes and
              schedule all in one place.
            </p>
            <div className="flex relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@domain.com"
                className="p-4 w-full shadow focus:shadow-lg focus:outline-none pr-36"
              />
              <button className="absolute bg-black text-white top-2 bottom-2 right-2 px-3 text-sm cursor-pointer hover:bg-black/80">
                Start for free
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Sign up to create and track your tasks.
            </p>
          </div>
          <div className="col-span-5 pr-14">
            <img src="/todo.png" alt="Task management software toolkit" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
