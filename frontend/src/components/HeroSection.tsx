const HeroSection = () => {
  return (
    <section className="hero py-8 lg:py-20 grid grid-cols-1 lg:grid-cols-12 items-center bg-white">
      <div className="col-span-7 mx-4 my-5 lg:mt-0 lg:mx-auto max-w-[32rem] text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-semibold lg:leading-14">
          Finally organize your works and live with one tool.
        </h1>
        <p className="mt-3 mb-5 text-sm lg:text-base text-slate-500">
          Remember everything and track progresses in your tasks, notes and
          schedule all in one place.
        </p>
        <div className="flex relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@domain.com"
            className="p-4 w-full shadow focus:shadow-lg focus:outline-none pr-32 lg:pr-36"
          />
          <button className="absolute bg-black text-white top-2 bottom-2 right-2 px-3 text-sm cursor-pointer hover:bg-black/80">
            Start for free
          </button>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Sign up to create and track your tasks.
        </p>
      </div>
      <div className="col-span-5 pr-0 lg:pr-16">
        <img src="/todo.png" alt="Task management software toolkit" />
      </div>
    </section>
  );
};

export default HeroSection;
