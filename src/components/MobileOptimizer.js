import { useEffect } from 'react';

const MobileOptimizer = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSlowDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    const isSlowConnection = navigator.connection && (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');
    
    // Add mobile class to body for CSS targeting
    if (isMobile) {
      document.body.classList.add('is-mobile');
    }
    
    // Reduce animations on slower devices
    if (isSlowDevice || isSlowConnection) {
      document.body.classList.add('reduce-motion');
    }
    
    // Optimize touch events for mobile
    if (isMobile) {
      // Improve touch responsiveness
      document.addEventListener('touchstart', () => {}, { passive: true });
      
      // Prevent zoom on double tap for better UX
      let lastTouchEnd = 0;
      document.addEventListener('touchend', (event) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false);
      
      // Optimize viewport for mobile
      let viewport = document.querySelector('meta[name=viewport]');
      if (!viewport) {
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        document.head.appendChild(viewport);
      }
      viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover';
    }
    
    // Battery optimization
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        if (battery.level < 0.2 || !battery.charging) {
          document.body.classList.add('low-battery');
        }
      });
    }
    
    // Preload critical mobile assets
    if (isMobile) {
      // Preload critical fonts for mobile
      const fontUrls = [
        'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap'
      ];
      
      fontUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = url;
        document.head.appendChild(link);
        
        // Load the actual stylesheet
        setTimeout(() => {
          const stylesheet = document.createElement('link');
          stylesheet.rel = 'stylesheet';
          stylesheet.href = url;
          document.head.appendChild(stylesheet);
        }, 100);
      });
    }
    
    // Performance monitoring for mobile
    if ('performance' in window && isMobile) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          
          // If load time is too slow, enable performance mode
          if (loadTime > 3000) {
            document.body.classList.add('performance-mode');
          }
        }, 1000);
      });
    }
    
    // Cleanup
    return () => {
      document.body.classList.remove('is-mobile', 'reduce-motion', 'low-battery', 'performance-mode');
    };
  }, []);

  return null; // This is a utility component with no visual output
};

export default MobileOptimizer;