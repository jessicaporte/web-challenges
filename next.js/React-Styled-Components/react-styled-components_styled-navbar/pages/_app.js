import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const LinkStyled = styled.li`
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <LinkStyled>
            <Link href="/">Home</Link>
          </LinkStyled>
          <LinkStyled>
            <Link href="/about">About</Link>
          </LinkStyled>
          <LinkStyled>
            <Link href="/contact">Contact</Link>
          </LinkStyled>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}
