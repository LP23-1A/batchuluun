import { v4 as uuidv4 } from "uuid";
const dataName = [
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "Typescript",
  },
  {
    name: "Nest.js",
  },
  {
    name: "PostgreSQl",
  },
  {
    name: "Tailwindcss",
  },
  {
    name: "Figma",
  },
  {
    name: "Cypress",
  },
  {
    name: "Storybook",
  },
  {
    name: "Git",
  },
];
export default function TechnologyName() {
  return (
    <>
      {dataName.map((props) => {
        let key = uuidv4();
        return (
          <div className="flex flex-wrap " key={key}>
            <button className="bg-gray-200 py-1 px-5 rounded-xl dark:bg-gray-600">
              {props.name}
            </button>
          </div>
        );
      })}
    </>
  );
}
