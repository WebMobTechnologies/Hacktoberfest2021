import React from "react";
import { FooterContainer, ExternalLink } from "./styles";

const Footer = () => (
  <FooterContainer>
    <ExternalLink
      href="https://webmobtech.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      WebMob Technologies
    </ExternalLink>
    <ExternalLink
      href="https://github.com/wmtjayakbari/Hacktoberfest2021/tree/asmeeta/Random%20Name%20Picker"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      Made by WebMob
    </ExternalLink>
  </FooterContainer>
);

export default Footer;
