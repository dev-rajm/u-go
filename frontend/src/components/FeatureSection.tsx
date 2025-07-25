const features = [
  {
    title: 'Stay organized',
    desc: 'Resource calender and dashboard give you the much needed visibility.',
    img: '/shopping-bag.svg',
  },
  {
    title: 'Manage your task',
    desc: 'Use deadline and parentage tracker to track your every task.',
    img: '/checklist.svg',
  },
  {
    title: 'Central communication',
    desc: 'You can plan, schedule and mark it as completed in a single place.',
    img: '/quality-control.svg',
  },
  {
    title: 'U Go notification',
    desc: 'Remind your deadline via U Go notification system.',
    img: '/email.svg',
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-black/90 text-white flex justify-center py-12 lg:py-20 px-4">
      <div>
        <h1 className="text-center text-3xl lg:text-4xl font-medium">
          An app built for your needs.
        </h1>
        <p className="text-gray-400 mt-4 text-center">
          U Go Task Management helps you stay in full control of all your
          projects and keep track of all your daily live tasks.
        </p>
        <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-14">
          {features.map(({ title, desc, img: image }) => (
            <div
              className="text-center flex flex-col items-center mx-auto w-[250px] lg:mx-3 my-3 lg:my-0"
              key={title}
            >
              <img src={image} alt={title} className="w-20" />
              <h2 className="text-lg font-semibold my-2">{title}</h2>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
