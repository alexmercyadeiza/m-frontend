import Head from "next/head";

export default function TopHeader({title}) {
    return (
      <Head>
        <title>{title} &mdash; Melina Store</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          data-website-id="a5ac4fe1-19e7-4bcb-baba-b9998f9d065b"
          src="https://stats.melinastore.com/umami.js"
        ></script>
      </Head>
    );
}