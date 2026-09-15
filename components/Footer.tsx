import Link from "next/link";
import { Logo } from "./Logo";
import { closingMessage, contact, nav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo inverse />
          <p>{closingMessage}</p>
          <div className="footer-contact"><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.emailHref}>{contact.email}</a></div>
        </div>
        <div><p className="footer-label">Website Features</p><div className="footer-links">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></div>
        <div><p className="footer-label">Legal</p><div className="footer-links"><span>Privacy Policy - Required</span><span>Terms & Conditions - Required</span><span>POPIA Policy - To be confirmed with the website developer or legal adviser.</span></div></div>
        <div><p className="footer-label">Contact Us</p><p className="footer-small">{contact.physicalAddress}</p><p className="footer-small">{contact.postalAddress}</p><p className="footer-small">{contact.hours}</p></div>
      </div>
      <div className="shell footer-bottom"><span>Wildpath Safaris and Tours Zambia Limited</span><span>Private guiding in Zambia's wild heart</span></div>
    </footer>
  );
}
