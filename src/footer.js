// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Footer = props => (
  <footer
    css={{
      // object styles!
      width: "100%",
    }}
  >
    <p
      css={css`
        /* string styles */
        color: blue;
        text-align: center;
        font-size: 1.2rem;
      `}
    >
      {props.children}
    </p>
  </footer>
);

export default Footer;
