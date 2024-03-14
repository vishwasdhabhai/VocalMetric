import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import elevenlabs from "./api/elevenlabs";
import AudioPlayer from "../components/AudioPlayer";
import DragDrop from "../components/FileSelector";
import DownloadSynthesizedVoice from "../components/downloadsynthesizedvoice";
import { useState } from "react";


import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ContentWrapper>
        <DownloadSynthesizedVoice />
        <br/>
        <br/>
        <Component {...pageProps} />
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default MyApp;
