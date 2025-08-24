"use client";

import React, { useEffect, useRef } from "react";

type MaskType = "type-1" | "type-2" | "type-3" | "type-4";

interface SvgPath {
  path: string;
  height: number;
  width: number;
}

interface MaskedDivProps {
  children: React.ReactElement<HTMLImageElement | HTMLVideoElement>;
  maskType?: MaskType;
  className?: string;
  backgroundColor?: string;
  size?: number;
}

const svgPaths: Record<MaskType, SvgPath> = {
  "type-1": {
    path: "M10 0 H450 A10 10 0 0 1 460 10 V581 A10 10 0 0 1 450 591 H10 A10 10 0 0 1 0 581 V10 A10 10 0 0 1 10 0 Z",
    height: 591,
    width: 460,
  },
  "type-2": {
    path: "M459.071 550.023C459.071 572.085 441.208 589.982 419.146 590.999L170.03 591.468C151.587 591.503 136.479 576.828 135.978 558.392L135.114 526.576C134.046 487.231 101.98 455.817 62.6229 455.559L27.0227 455.326C12.1848 455.228 0.205727 443.177 0.199809 428.339L0.0201941 41.0177C0.0105349 18.9196 17.9226 1 40.021 1L419.071 1C441.162 1 459.071 18.9097 459.071 41V550.023Z",
    height: 591,
    width: 460,
  },
  "type-3": {
    path: "M459.071 40.9769C459.071 18.9149 441.209 1.01844 419.147 0.976903L170.03 0.507853C151.587 0.473128 136.479 15.1483 135.978 33.5845L135.114 65.4007C134.046 104.745 101.979 136.159 62.6229 136.417L27.0227 136.65C12.1848 136.748 0.205729 148.799 0.19981 163.637L0.020195 550.982C0.010535 573.08 17.9226 591 40.021 591H419.071C441.162 591 459.071 573.091 459.071 551V40.9769Z",
    height: 591,
    width: 460,
  },
  "type-4": {
    path: "M0.928955 550.023C0.928955 572.085 18.7915 589.982 40.8535 590.999L289.97 591.468C308.413 591.503 323.521 576.828 324.022 558.392L324.886 526.576C325.955 487.231 358.022 455.817 397.38 455.559L432.98 455.326C447.818 455.228 459.797 443.177 459.803 428.339L459.982 41.0177C459.992 18.9196 442.08 1 419.982 1L40.9289 1C18.8376 1 0.928955 18.9097 0.928955 41V550.023Z",
    height: 591,
    width: 460,
  },
};

const MaskedDiv: React.FC<MaskedDivProps> = ({
  children,
  maskType = "type-1",
  className = "",
  backgroundColor = "transparent",
  size = 1,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      if (document.hidden) {
        videoElement.pause();
      } else {
        // Only play if the video should be playing
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented, handle this case silently
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Intersection Observer for viewport visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Handle auto-play prevention silently
              });
            }
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.1, // Start playing when 10% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const selectedMask = svgPaths[maskType];

  const svgString = `data:image/svg+xml,%3Csvg width='${selectedMask.width}' height='${selectedMask.height}' viewBox='0 0 ${selectedMask.width} ${selectedMask.height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='${selectedMask.path}' fill='%23D9D9D9'/%3E%3C/svg%3E%0A`;

  const containerStyle: React.CSSProperties = {
    aspectRatio: `${selectedMask.width}/${selectedMask.height}`,
    backgroundColor,
    maskImage: `url("${svgString}")`,
    WebkitMaskImage: `url("${svgString}")`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    width: `${size * 100}%`,
    maxWidth: "100%",
    margin: "0 auto",
  };

  return (
    <section className={`relative ${className}`} style={containerStyle}>
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            className: `w-full h-full object-cover hover:scale-105 transition-all duration-300 ${
              children.props.className || ""
            }`,
          })
        : null}
    </section>
  );
};

export default MaskedDiv;
