import { PropsWithChildren, FC } from "react";
import Head from "next/head";

import { Navbar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App "}</title>
        <meta name="author" content="Danny Gonzalez" />
        <meta
          name="description"
          content={`information about pokemon ${ title } `}
        />
        <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

        <meta property="og:title " content={`Información sobre ${ title }`} />
        <meta
          property="og:description"
          content={`This a page about ${ title }`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main>{children}</main>
    </>
  );
};
