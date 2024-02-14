import { Flex } from "@chakra-ui/react";
import Banner from "./components/LandingPage/Banner";
import CardInfo from "./components/LandingPage/CardInfo";

export default function Home() {
  return (
    <main>
      <Flex minH="calc(100vh - 60px)" flexDir="column">
        <Banner />

        <Flex justifyContent="center" gap="100px" padding="2rem 100px">
          <CardInfo header="Lorem Ipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tristique ante quis consectetur efficitur. Quisque blandit feugiat
            eros, vitae congue metus laoreet quis. Interdum et malesuada fames
            ac ante ipsum primis in faucibus.
          </CardInfo>

          <CardInfo header="Lorem Ipsum">
            Lorem ipsum dolor sit amet, Morbi ac congue urna, non commodo nisi.
            In in neque vel lorem fringilla posuere non a tellus. Aliquam ipsum
            ligula, tincidunt et maximus pulvinar, placerat in augue. Donec
            sollicitudin accumsan justo, volutpat lacinia orci interdum sed.
            Suspendisse ultrices augue quis dolor suscipit condimentum.
          </CardInfo>

          <CardInfo header="Lorem Ipsum">
            Lorem ipsum dolor sit amet, Morbi ac congue urna, non commodo nisi.
            In in neque vel lorem fringilla posuere non a tellus. Aliquam ipsum
            ligula, tincidunt et maximus pulvinar, placerat in augue. Donec
            sollicitudin accumsan justo, volutpat lacinia orci interdum sed.
            Suspendisse ultrices augue quis dolor suscipit condimentum.
          </CardInfo>
        </Flex>
      </Flex>
    </main>
  );
}
