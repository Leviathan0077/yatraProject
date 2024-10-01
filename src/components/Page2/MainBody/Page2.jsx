import React from "react";
import FirstGrid from "./FirstGrid";
import Midcomponent from "./Midcomponent";
import TrekData from "./TrekData";
import TripPlan from "./TripPlan";
import MeetingPoint from "./MeetingPoint";
import Album from "./Album";
import TrekCarousel from "./TrekCarousel";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function Page2() {
  return (
    <div>
      <Header />
      <FirstGrid />
      <Midcomponent />
      <TrekData />
      <TripPlan />
      <MeetingPoint />
      <Album />
      <TrekCarousel />
      <Footer />
    </div>
  );
}

export default Page2;
