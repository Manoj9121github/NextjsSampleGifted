import Image from "next/image";
import InfoMain from '@/components/ui/infotopbar'
import HeroNavbar from '@/components/hero'
import Cardadv from '@/components/ui/cardadv'
import OfferCard from '@/components/ui/offercard'
import ProductPage from './products/page'
import SubscribeForm from '@/components/subscribe'
import FooterComp from '@/components/footer'
import Displayoffer from "@/components/displayoffer";

export default function Home() {
  return (
    <div>
      <InfoMain/>
      <HeroNavbar/>
      <Cardadv/>
      <OfferCard/>   
      <ProductPage />        
      <Displayoffer/>
      <SubscribeForm/>
      <FooterComp />
      
    </div>
  );
}
