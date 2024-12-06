'use client';

import HomePage from "@/components/HomePage";
import StickyFooter from "@/components/StickyFooter";
import Top from "@/components/Top";
import WhatsAtStake from "@/components/WhatsAtStake";
import WhatsInStore from "@/components/WhatsInStore";
import WhoCanParticipate from "@/components/WhoCanParticipate";
import useStickyBar from "@/hooks/useStickyBar";

export default function Home() {
  const showStickyBar = useStickyBar();

  return (
    <>
      <HomePage />
      <Top />
      <WhatsInStore />
      <WhoCanParticipate />
      <WhatsAtStake />
      <StickyFooter ShowState={showStickyBar} />
    </>
  );
}