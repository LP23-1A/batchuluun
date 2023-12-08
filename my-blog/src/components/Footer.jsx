import FacebookIcon from "@/components/icon/Facebook";
import FooterLogo from "@/components/icon/FooterLogo";
import InIcon from "@/components/icon/In";
import InstagramIcon from "@/components/icon/Instagram";
import TwitterIcon from "@/components/icon/Twitter";

export default function Footer() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between border-b-slate-900 border-b">
        <div className="flex flex-col gap-4 w-72">
          <h3 className="text-xl">About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-7">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <InIcon />
        </div>
      </div>
      <div className="flex justify-between py-8">
        <div className="flex gap-2">
          <FooterLogo />
          <div>
            <h3 className="text-2xl">MetaBlog</h3>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="items-center">
          <ul className="flex gap-8 ">
            <li>Terms of Use |</li>
            <li>Privacy Policy |</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
