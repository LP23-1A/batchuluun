import { useDebugValue } from "react";
import MessageIcon from "./MessageIcon";
import CopyIcon from "./CopyIcon";
import CallIcon from "./CallIcon";
import HeroIcon from "./Heroicon";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <button className="button">Get in touch</button>
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="">
        <div className="flex">
          <MessageIcon />
          <h1>reachsagarshah@gmail.com</h1>
          <CopyIcon />
        </div>
        <div className="flex">
          <CallIcon />
          <h1>+91 8980500565</h1>
          <CopyIcon />
        </div>
      </div>
      <div>
        <p>You may also find me on these platforms!</p>
        <HeroIcon />
      </div>
    </div>
  );
}
