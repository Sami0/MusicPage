'use client'

import Image from "next/image";
import React from 'react';
import ReactPlayer from 'react-player';
//*import VideoPlayer from "./VideoPlayer";*/
//*import Home from "./yearsandsongs";*/
import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./yearsofmusic'), { ssr: false })
 
export default function Player() {
  return (

  <div>
  <NoSSR />
  
   </div>
  );
};