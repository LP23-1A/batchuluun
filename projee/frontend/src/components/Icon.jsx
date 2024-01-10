export default function Icon(props) {
  return (
    <div className="w-24 h-24 ">
      <img src={props.src} alt="" className="w-16, h-16" />
      <p>{props.name}</p>
    </div>
  );
}
