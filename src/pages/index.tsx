import Head from "next/head";
// import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import styles from "@/styles/Home.module.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirka & Jan 2027</title>
        <meta name="description" content="Mirka & Jan Kocanda Kravsko 2027" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.page} ${bricolage.variable}`}>
        <h1 className={styles.heading}>
          Mirka <span className={styles.highlight}>&</span> Jan
        </h1>
        <p>28.08.2027</p>
        <p>ľůbím</p>
      </main>
    </>
  );
}
