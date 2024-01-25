import React from "react";

import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import "@styles/footer/_footer.scss";
import Logo from "@images/BrightR.ClubLightLogo.svg";

const Footer = () => {
  const connectedLinks = ["About Us", "Contact Us", "FAQs"];
  const policyLinks = [
    "Disclaimer",
    " Privacy Policy",
    "Refund Policy",
    "Terms and Conditions",
  ];
  return (
    <>
      <footer>
        <div className="footer-wrapper">
        <div className="container">
          <div className="footer-links-wrapper">
            <div className="row row-gap-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <FooterLinks
                  title={"Get Connected"}
                  footerlinks={connectedLinks}
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <FooterLinks title={"Policy"} footerlinks={policyLinks} />
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <SocialLinks title={"Follow Us"} />
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="logo">
                  <img src={Logo} alt="Bright Club" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className="copyright text-center">
            <div className="overlay"></div>
            <p className="link">© 2024 BrightR.Club</p>
      </div>
      </footer>
      
    </>
  );
};

export default Footer;
