import { IoMdSunny } from 'react-icons/io';
import { IoIosMoon } from 'react-icons/io';

const themes = [
  { id: 'light', icon: IoMdSunny, bg: 'bg-white' },
  { id: 'dark', icon: IoIosMoon, bg: 'bg-black/80' },
];

const ThemeToggle = () => {
  return (
    <div
      className="flex justify-between items-center w-[4.5rem] h-8 px-1 bg-slate-100 rounded-full transition-all shadow-inner"
      role="group"
      aria-label="Toggle theme"
    >
      {themes.map(({ id, icon: Icon, bg }) => (
        <button
          key={id}
          className="flex items-center justify-between rounded-full transition-colors duration-300"
          title={id}
          aria-label={id}
        >
          <span className={`cursor-pointer ${bg} rounded-full p-1`}>
            <Icon />
          </span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
