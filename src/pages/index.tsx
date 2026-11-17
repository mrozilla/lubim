import Head from "next/head";
// import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Appearable, Heading } from "@/components";

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
      <main className={bricolage.variable}>
        <section className={styles.page}>
          <Appearable>
            <Heading tag="h1">
              Mirka <br />
              <span className={styles.highlight}>&</span> Jan
            </Heading>
            <p>28.08.2027</p>
            <p>Kocanda Kravsko</p>
          </Appearable>
        </section>
        <section className={styles.page}>
          <Appearable>
            <Heading tag="h2">Kocanda Kravsko</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquid corporis ex fugit
              et consectetur obcaecati, molestiae distinctio, harum eligendi commodi consequuntur!
              Tempore est deleniti, dolorum qui facere laboriosam placeat!
            </p>
          </Appearable>
        </section>
        <section className={styles.page}>
          <Appearable>
            <Heading tag="h2">Přespání</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquid corporis ex fugit
              et consectetur obcaecati, molestiae distinctio, harum eligendi commodi consequuntur!
              Tempore est deleniti, dolorum qui facere laboriosam placeat!
            </p>
          </Appearable>
        </section>
        <section className={styles.page}>
          <Appearable>
            <Heading tag="h2">Dress code</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquid corporis ex fugit
              et consectetur obcaecati, molestiae distinctio, harum eligendi commodi consequuntur!
              Tempore est deleniti, dolorum qui facere laboriosam placeat!
            </p>
          </Appearable>
        </section>
        <section className={styles.page}>
          <Appearable>
            <Heading tag="h2">Dary</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquid corporis ex fugit
              et consectetur obcaecati, molestiae distinctio, harum eligendi commodi consequuntur!
              Tempore est deleniti, dolorum qui facere laboriosam placeat!
            </p>
          </Appearable>
        </section>
        <section className={styles.page}>
          <Appearable>
            <Heading tag="h2">RSVP</Heading>
            <p>TBD</p>
          </Appearable>
        </section>
      </main>
    </>
  );
}
