
import { useState, useEffect } from 'react';

export interface BreakpointConfig {
  mobile: number;
  tablet: number;
  desktop: number;
  largeDesktop: number;
  ultraWide: number;
}

const defaultBreakpoints: BreakpointConfig = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1280,
  ultraWide: 1920
};

export const useResponsive = (customBreakpoints?: Partial<BreakpointConfig>) => {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenSize.width < breakpoints.tablet;
  const isTablet = screenSize.width >= breakpoints.tablet && screenSize.width < breakpoints.desktop;
  const isDesktop = screenSize.width >= breakpoints.desktop && screenSize.width < breakpoints.largeDesktop;
  const isLargeDesktop = screenSize.width >= breakpoints.largeDesktop && screenSize.width < breakpoints.ultraWide;
  const isUltraWide = screenSize.width >= breakpoints.ultraWide;

  return {
    screenSize,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isUltraWide,
    isSmallScreen: isMobile || isTablet,
    isLargeScreen: isLargeDesktop || isUltraWide,
    breakpoint: isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop ? 'desktop' : isLargeDesktop ? 'largeDesktop' : 'ultraWide'
  };
};

export const useContainer = () => {
  const { isMobile, isTablet, isDesktop, isLargeDesktop, isUltraWide } = useResponsive();
  
  const getContainerClass = () => {
    if (isMobile) return 'max-w-full px-4';
    if (isTablet) return 'max-w-3xl px-6';
    if (isDesktop) return 'max-w-5xl px-8';
    if (isLargeDesktop) return 'max-w-6xl px-10';
    if (isUltraWide) return 'max-w-7xl px-12';
    return 'max-w-6xl px-8';
  };

  const getGridCols = (base: number = 1) => {
    if (isMobile) return Math.min(base, 1);
    if (isTablet) return Math.min(base, 2);
    if (isDesktop) return Math.min(base, 3);
    if (isLargeDesktop) return Math.min(base, 4);
    if (isUltraWide) return Math.min(base, 5);
    return base;
  };

  return {
    containerClass: getContainerClass(),
    getGridCols,
    spacing: {
      section: isMobile ? 'py-8' : isTablet ? 'py-12' : isDesktop ? 'py-16' : 'py-20',
      element: isMobile ? 'space-y-4' : isTablet ? 'space-y-6' : 'space-y-8',
      gap: isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8'
    }
  };
};
