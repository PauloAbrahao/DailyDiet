import LogoIconSVG from "./logo.js";
import HappyIconSVG from "./happy.js";
import BadIconSVG from "./bad.js";
import ProfileIconSVG from "./profile.js";

export function LogoIcon(props) {
  return <LogoIconSVG {...props} />;
}

export function ProfileIcon(props) {
  return <ProfileIconSVG {...props} />;
}

export function HappyIcon(props) {
  return <HappyIconSVG {...props} />;
}

export function BadIcon(props) {
  return <BadIconSVG {...props} />;
}
