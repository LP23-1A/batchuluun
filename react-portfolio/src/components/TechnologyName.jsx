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
        return (
          <div className="flex flex-wrap">
            <button className="bg-gray-200 py-1 px-5 rounded-xl">
              {props.name}
            </button>
          </div>
        );
      })}
    </>
  );
}
