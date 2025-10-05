'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
  {/* Name with subtle glow animation */}
 <h6 className="banner-title slide-up-and-fade leading-[.92] text-center mt-4 sm:mt-6">
  {/* Name */}
 <span
  className="text-primary flex items-center justify-center space-x-4 text-6xl sm:text-[80px] font-anton"
>
  RAGHDAN GHABRA
</span>



  {/* Roles */}
  <div className="flex flex-col items-center justify-center mt-4 space-y-2">
    <div className="flex items-center justify-center">
      <Image 
        src="/logo/leftone.png" 
        alt="Laurel left" 
        width={32}  // Matches h-8/w-8 base
  height={32}
        className="h-8 w-8 sm:h-10 sm:w-10 mr-2 animate-star-twinkle [filter:brightness(0)_saturate(100%)_invert(80%)_sepia(85%)_saturate(600%)_hue-rotate(45deg)_brightness(110%)_contrast(95%)]" 
      />
      <span className="mx-1 text-lg sm:text-2xl font-semibold text-white tracking-wide">
        ITE-SE TEACHING ASSISTANT
      </span>
      <Image 
        src="/logo/rightone.png" 
        alt="Laurel right" 
        width={32}  // Matches h-8/w-8 base
  height={32}
        className="h-8 w-8 sm:h-10 sm:w-10 ml-2 animate-star-twinkle [filter:brightness(0)_saturate(100%)_invert(80%)_sepia(85%)_saturate(600%)_hue-rotate(45deg)_brightness(110%)_contrast(95%)]" 
      />
    </div>

    <span className="mx-2 text-lg sm:text-xl text-gray-300 font-medium tracking-wider uppercase">
      DAMASCUS UNIVERSITY
    </span>
  </div>

  {/* Short tagline */}
  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 italic font-light">
    Bridging Academia & Scalable Software Engineering
  </p>

  {/* Buttons */}
  <div className="flex items-center justify-center space-x-4 mt-6">
    
  </div>
</h6>

                
                
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href=""
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Contact me
                    </Button>
                     <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/Raghdan-Resume.pdf"
                        download="Raghdan-Resume.pdf"
                        variant="primary"
                        className="mt-11 banner-button slide-up-and-fade"
                    >
                        Download RÉSUMÉ
                    </Button>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            7+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10K+
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
