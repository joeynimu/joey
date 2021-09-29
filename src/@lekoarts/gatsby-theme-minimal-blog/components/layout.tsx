import React from "react";
import { Global } from "@emotion/react";
import { Box, Themed, Container, css } from "theme-ui";
import "typeface-ibm-plex-sans";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code";
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav";

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className }: LayoutProps) => (
  <Themed.root data-testid="theme-root">
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container
      sx={{
        margin: "auto",
        maxWidth: 1024,
        padding: "1rem",
      }}
    >
      <Header />
      <Box
        id="skip-nav"
        sx={{
          ...(CodeStyles as any),
        }}
        className={className}
      >
        {children}
      </Box>
      <Footer />
    </Container>
  </Themed.root>
);

export default Layout;
