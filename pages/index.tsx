import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Awais Fazal | Mobile App Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Awais Fazal | Mobile App Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Awais Fazal | Mobile App Developer" />
        <meta name="description" content="Hey! I'm Awais Fazal, and I'm a Bachelor of Science in Software Engineering graduate." />

        <meta property="og:title" content="Awais Fazal | Mobile App Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="Hey! I'm Awais Fazal, and I'm a Bachelor of Science in Software Engineering graduate." />
      </Head>
      <Home />
    </>
  );
}
