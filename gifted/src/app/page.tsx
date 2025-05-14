import InfoMain from "@/components/ui/infotopbar";
import HeroNavbar from "@/components/hero";
import Cardadv from "@/components/ui/cardadv";
import OfferCard from "@/components/ui/offercard";
import SubscribeForm from "@/components/subscribe";
import FooterComp from "@/components/footer";
import Displayoffer from "@/components/displayoffer";
import ProductItems from "./productitems/page";
import { CartProvider } from "./CartContext/CartContext";
import CartPage from "./cartpage/page";

export default function Home() {
  return (
    <CartProvider>
      <InfoMain />
      <HeroNavbar />
      <Cardadv />
      <OfferCard />
      <ProductItems />
      <CartPage />
      <Displayoffer />
      <SubscribeForm />
      <FooterComp />
    </CartProvider>
  );
}
