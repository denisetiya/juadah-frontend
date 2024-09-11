import React, { useEffect, useRef, useState } from 'react';
import TitleDiscover from "../components/fragments/TitleDiscover";
import SwipePreview from "../components/fragments/SwipePreview";
import PopularCake from "../components/fragments/PopularCake";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isSnapping, setIsSnapping] = useState<boolean>(false);
  let scrollTimeout: number | null = null;

  useEffect(() => {
    const container = containerRef.current;
    
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      if (isSnapping) {
        setIsSnapping(false);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollTimeout = window.setTimeout(() => {
        setIsSnapping(true);
        if (container) {
          const scrollPosition = container.scrollTop;
          const windowHeight = container.clientHeight;
          const snapPoint = Math.round(scrollPosition / windowHeight) * windowHeight;
          container.style.scrollSnapType = 'y mandatory';
          container.scrollTo({
            top: snapPoint,
            behavior: 'smooth'
          });
        }
      }, 500); // Reduced from 300ms to 150ms for quicker response
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isSnapping]);

  return (
    <div 
      ref={containerRef}
      className="font-bold h-screen overflow-y-scroll transition-all duration-1000 ease-in-out"
      style={{
        scrollSnapType: isSnapping ? 'y mandatory' : 'none',
        scrollBehavior: 'smooth'
      }}
    >
      <div id="sub-menu1" className="bg-[#F4F5F6] h-screen w-full px-52 flex items-center snap-start">
        <TitleDiscover /> 
      </div>
      <div id="sub-menu2" className="h-screen w-full snap-start">
        <SwipePreview />
      </div>
      <div id="sub-menu3" className="h-screen w-full snap-start">
        <PopularCake />
      </div>
    </div>
  );
}

export default Home;