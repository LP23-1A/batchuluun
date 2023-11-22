const dataName = [
  {
    name1: "Fiskil",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
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
          <div>
            <h2>{props.name1}</h2>
            <p>{props.description}</p>
            <button className="button">{props.name}</button>
          </div>
          // <div>{/* <button className="button">{props.name}</button> */}</div>
        );
      })}
    </>
  );
}
