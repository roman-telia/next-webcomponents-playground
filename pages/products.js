import {
  TeliaCol,
  TeliaRow,
  TeliaGrid,
  TeliaHeading,
  TeliaP,
  TeliaPrice,
  TeliaProductCardHardware,
} from "@teliads/components/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Products() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Telia Products</title>
        <meta name="description" content="Phones page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TeliaGrid>
          <TeliaRow>
            <TeliaCol width={8}>
              <TeliaHeading tag="h1" variant="title-700">
                Telia FI
              </TeliaHeading>
              <TeliaHeading tag="h2" variant="title-600">
                Product B2C Shop
              </TeliaHeading>
            </TeliaCol>
            <TeliaCol width={12}>
              <TeliaP variant="preamble-200">Web shop</TeliaP>
            </TeliaCol>
          </TeliaRow>
          <TeliaRow>
            <TeliaCol width={4}>
              <TeliaProductCardHardware
                href="#"
                badgeTitle="Erbjudande"
                badgeVariant="special-offer"
                productTitle="iPhone 12 Pro"
                preTitle="Apple"
                imgSrc="https://www.telia.se/dam/jcr:1f591999-434e-4203-9900-2c498d62dfdb/se-front-white-min.png"
              >
                <TeliaPrice
                  slot="price"
                  price="20"
                  currency="€"
                  periodicity="/month"
                />
              </TeliaProductCardHardware>
            </TeliaCol>
            <TeliaCol width={4}>
              <TeliaProductCardHardware
                href="#"
                badgeTitle="Erbjudande"
                badgeVariant="special-offer"
                productTitle="iPhone 12 Pro"
                preTitle="Apple"
                imgSrc="https://www.telia.se/dam/jcr:1f591999-434e-4203-9900-2c498d62dfdb/se-front-white-min.png"
              >
                <TeliaPrice
                  slot="price"
                  price="20"
                  currency="€"
                  periodicity="/month"
                />
              </TeliaProductCardHardware>
            </TeliaCol>
            <TeliaCol width={4}>
              <TeliaProductCardHardware
                href="#"
                badgeTitle="Erbjudande"
                badgeVariant="special-offer"
                productTitle="iPhone 12 Pro"
                preTitle="Apple"
                imgSrc="https://www.telia.se/dam/jcr:1f591999-434e-4203-9900-2c498d62dfdb/se-front-white-min.png"
              >
                <TeliaPrice
                  slot="price"
                  price="20"
                  currency="€"
                  periodicity="/month"
                />
              </TeliaProductCardHardware>
            </TeliaCol>
            <TeliaCol width={4}>
              <TeliaProductCardHardware
                href="#"
                badgeTitle="Erbjudande"
                badgeVariant="special-offer"
                productTitle="iPhone 12 Pro"
                preTitle="Apple"
                imgSrc="https://www.telia.se/dam/jcr:1f591999-434e-4203-9900-2c498d62dfdb/se-front-white-min.png"
              >
                <TeliaPrice
                  slot="price"
                  price="20"
                  currency="€"
                  periodicity="/month"
                />
              </TeliaProductCardHardware>
            </TeliaCol>
            <TeliaCol width={4}>
              <TeliaProductCardHardware
                href="#"
                badgeTitle="Erbjudande"
                badgeVariant="special-offer"
                productTitle="iPhone 12 Pro"
                preTitle="Apple"
                imgSrc="https://www.telia.se/dam/jcr:1f591999-434e-4203-9900-2c498d62dfdb/se-front-white-min.png"
              >
                <TeliaPrice
                  slot="price"
                  price="20"
                  currency="€"
                  periodicity="/month"
                />
              </TeliaProductCardHardware>
            </TeliaCol>
          </TeliaRow>
        </TeliaGrid>
      </main>
    </div>
  );
}
