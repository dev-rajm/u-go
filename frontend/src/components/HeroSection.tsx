const HeroSection = () => {
  return (
    <section className="hero h-dvh grid grid-cols-12 items-center bg-white">
      <div className="col-span-7 mx-auto max-w-[32rem]">
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
      <div className="col-span-5 pr-16">
        <img src="/todo.png" alt="Task management software toolkit" />
      </div>
    </section>
  );
};

export default HeroSection;
