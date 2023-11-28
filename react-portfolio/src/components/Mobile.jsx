import Icon from "./Icon/Icon";
import Theme from "./Theme";
import Close from "./Icon/Close";

export default function MobileMenu(props, { Handler }) {
  const closeHandler = () => {
    props.setOpen(false);
  };
  return (
    <div className="w-screen h-screen top-0 left-0 absolute bg-gray-400 flex justify-end">
      <div className="w-10/12  h-screen p-4 bg-white">
        <div className="flex justify-between">
          <Icon />
          <button onClick={closeHandler}>
            <Close />
          </button>
        </div>
        <hr className="mt-4" />
        <ul className="py-4 flex flex-col gap-4 text-black">
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        <hr className="mt-4" />
        <div className="py-4">
          <div className="flex justify-between">
            <p className="text-black">Switch theme</p>
            <button>
              <Theme />
            </button>
          </div>

          <button className="mt-4 w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
