import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <div>
      <FooterInner>
        <div className="container">
          <p>©CINEWATCH ALL RIGHTS RESERVED</p>
        </div>
      </FooterInner>
    </div>
  );
};
const FooterInner = styled.div`
  margin-top: 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px 0;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;
export default Footer;
