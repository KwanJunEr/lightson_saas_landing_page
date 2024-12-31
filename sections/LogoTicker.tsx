'use client';
import React from "react";
import acmeLogo from "@/public/assets/logo-acme.png";
import quantumLogo from "@/public/assets/logo-quantum.png";
import echoLogo from "@/public/assets/logo-echo.png";
import pulseLogo from "@/public/assets/logo-pulse.png";
import celestialLogo from "@/public/assets/logo-celestial.png";
import apexLogo from "@/public/assets/logo-apex.png";
import Image from "next/image";
import {motion} from 'framer-motion'

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
      <div className="flex overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}>
          <motion.div 
          animate={{
            translateX: '-50%'
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop'
          }}
          className="flex gap-14 flex-none pr-14">
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            {/*Second Set of Logos*/}

            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
