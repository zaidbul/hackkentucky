
"use client"

import { Button } from "@/components/ui/button"
import { SiteNavigation } from "@/components/site-navigation"
import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { TextPlugin } from "gsap/TextPlugin"
import Tiles from "@/components/tiles";
import TilesSM from "@/components/tilessm";
import Link from "next/link"

function horizontalLoop(items: any[], config: any = {}) { // eslint-disable-line @typescript-eslint/no-explicit-any
  let timeline: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  items = gsap.utils.toArray(items);
  
  // Check if items exist and have valid DOM properties
  if (!items.length || !items[0] || typeof items[0].offsetLeft === 'undefined') {
    return null;
  }
  
  gsap.context(() => {
    const onChange = config.onChange;
      let lastIndex = 0;
      const tl = gsap.timeline({
        repeat: config.repeat, 
        onUpdate: onChange && function() {
          const i = (tl as any).closestIndex(); // eslint-disable-line @typescript-eslint/no-explicit-any
          if (lastIndex !== i) {
            lastIndex = i;
            onChange(items[i], i);
          }
        }, 
        paused: config.paused, 
        defaults: {ease: "none"}, 
        onReverseComplete: () => { tl.totalTime(tl.rawTime() + tl.duration() * 100); }
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times: number[] = [],
      widths: number[] = [],
      spaceBefore: number[] = [],
      xPercents: number[] = [],
      let curIndex = 0,
      let indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1), // eslint-disable-line @typescript-eslint/no-explicit-any
      timeOffset = 0,
      container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
      let totalWidth: number;

      const getTotalWidth = () => {
        const scaleX = Number(gsap.getProperty(items[length-1], "scaleX")) || 1;
        return items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * scaleX + (parseFloat(config.paddingRight) || 0);
      },
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(), b2: any;
        items.forEach((el: any, i: number) => {
          const width = gsap.getProperty(el, "width", "px");
          const x = gsap.getProperty(el, "x", "px");
          const xPercent = gsap.getProperty(el, "xPercent");
          widths[i] = parseFloat(String(width));
          xPercents[i] = snap(parseFloat(String(x)) / widths[i] * 100 + Number(xPercent));
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, {
          xPercent: (i: number) => xPercents[i]
        });
        totalWidth = getTotalWidth();
      },
      let timeWrap: any,
      populateOffsets = () => {
        let timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
        if (center && timeWrap) {
          times.forEach((_, i) => {
            times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
          });
        }
      },
      getClosest = (values: number[], value: number, wrap: number) => {
        let i = values.length,
          closest = 1e10,
          index = 0, d: number;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i: number, item: any, curX: number, distanceToStart: number, distanceToLoop: number;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = xPercents[i] / 100 * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          const scaleX = Number(gsap.getProperty(item, "scaleX")) || 1;
          distanceToLoop = distanceToStart + widths[i] * scaleX;
          tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
            .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        let timeWrap = gsap.utils.wrap(0, tl.duration()); // eslint-disable-line @typescript-eslint/no-explicit-any
      },
      refresh = (deep?: boolean) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        deep && populateTimeline();
        populateOffsets();
        deep && (tl as any).draggable && tl.paused() ? tl.time(times[curIndex], true) : tl.progress(progress, true);
      },
      onResize = () => refresh(true);
    
    gsap.set(items, {x: 0});
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", onResize);
    
    function toIndex(index: number, vars: any = {}) {
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = {time: timeWrap};
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
    }
    
    (tl as any).toIndex = (index: number, vars?: any) => toIndex(index, vars);
    (tl as any).closestIndex = (setCurrent?: boolean) => {
      let index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    (tl as any).current = () => indexIsDirty ? (tl as any).closestIndex(true) : curIndex;
    (tl as any).next = (vars?: any) => toIndex((tl as any).current()+1, vars);
    (tl as any).previous = (vars?: any) => toIndex((tl as any).current()-1, vars);
    (tl as any).times = times;
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      (tl.vars as any).onReverseComplete?.();
      tl.reverse();
    }
    
    (tl as any).closestIndex(true);
    lastIndex = curIndex;
    onChange && onChange(items[curIndex], curIndex);
    timeline = tl;
    
    // Return cleanup function
    return () => window.removeEventListener("resize", onResize);
  });
  
  return timeline;
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentSpeaker, setCurrentSpeaker] = useState(0)
  const [breakpoint, setBreakpoint] = useState<'sm' | 'md' | 'lg'>('lg')

  // Mock data based on spring25 structure
  const speakers = [
    { name: "Speaker 1", role: "Tech Leader", image: "/placeholder-speaker.jpg" },
    { name: "Speaker 2", role: "Innovator", image: "/placeholder-speaker.jpg" },
    { name: "Speaker 3", role: "Entrepreneur", image: "/placeholder-speaker.jpg" },
    { name: "Speaker 4", role: "Designer", image: "/placeholder-speaker.jpg" }
  ]

  useEffect(() => {
    setMounted(true)
    // Set initial breakpoint and update on resize
    const updateBreakpoint = () => {
      const w = window.innerWidth
      if (w < 1000) setBreakpoint('sm')
      else setBreakpoint('lg')
    }
    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin)
    
    // Create ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    })

    // Small delay to ensure DOM elements are rendered
    const initAnimations = setTimeout(() => {
      try {
        // Initialize horizontal loop for banner
        const bannerItems = gsap.utils.toArray('.banner-item')
        const bannerLoop = bannerItems.length > 0 ? horizontalLoop(bannerItems, {
          paused: false,
          speed: 0.5,
          repeat: -1
        }) : null

        // Initialize scrolling HackKentucky hero text
        const heroScrollItems = gsap.utils.toArray('.hero-scroll-item')
        const heroLoop = heroScrollItems.length > 0 ? horizontalLoop(heroScrollItems, {
          paused: false,
          speed: 0.3,
          repeat: -1
        }) : null

        // Initialize scrolling sponsors
        const sponsorItems = gsap.utils.toArray('.sponsor-item')
        const sponsorLoop = sponsorItems.length > 0 ? horizontalLoop(sponsorItems, {
          paused: false,
          speed: 0.4,
          repeat: -1
        }) : null

        // Fallback simple animations if horizontalLoop fails
        if (!bannerLoop && bannerItems.length > 0) {
          gsap.to('.banner-item', {
            x: '-100%',
            duration: 20,
            ease: 'none',
            repeat: -1
          })
        }

        if (!heroLoop && heroScrollItems.length > 0) {
          gsap.to('.hero-scroll-item', {
            x: '-100%',
            duration: 30,
            ease: 'none',
            repeat: -1
          })
        }

        if (!sponsorLoop && sponsorItems.length > 0) {
          gsap.to('.sponsor-item', {
            x: '-100%',
            duration: 25,
            ease: 'none',
            repeat: -1
          })
        }

        // Store loops for cleanup
        ;(window as any).hackKentuckyLoops = { bannerLoop, heroLoop, sponsorLoop }
      } catch (error) {
        console.warn('GSAP horizontal loops failed to initialize:', error)
      }
    }, 100)

    // Tech-like header text animations
    const headers = gsap.utils.toArray('.tech-header')
    headers.forEach((header: any) => {
      ScrollTrigger.create({
        trigger: header,
        start: "top 80%",
        onEnter: () => {
          const chars = header.textContent.split('')
          header.innerHTML = chars.map((char: string) => `<span class="char">${char}</span>`).join('')
          
          gsap.fromTo(header.querySelectorAll('.char'), 
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.75,
              stagger: {
                each: 0.05,
                from: "random"
              },
              ease: "power2.inOut",
              repeat: 1,
              yoyo: true,
              repeatDelay: 0.1
            }
          )
        }
      })
    })

    // Speakers auto-scroll every 3 seconds
    const speakerInterval = setInterval(() => {
      setCurrentSpeaker(prev => (prev + 1) % speakers.length)
    }, 3000)

    // Cleanup function
    return () => {
      clearTimeout(initAnimations)
      smoother.kill()
      ScrollTrigger.killAll()
      clearInterval(speakerInterval)
      window.removeEventListener('resize', updateBreakpoint)
      
      // Clean up loops if they exist
      const loops = (window as any).hackKentuckyLoops
      if (loops) {
        loops.bannerLoop && loops.bannerLoop.kill()
        loops.heroLoop && loops.heroLoop.kill()
        loops.sponsorLoop && loops.sponsorLoop.kill()
        delete (window as any).hackKentuckyLoops
      }
    }
  }, [])

  if (!mounted) return null

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="min-h-screen bg-black">
          
          <SiteNavigation />

          {/* Main Grid Layout */}
          <div className="grid grid-cols-4 min-h-screen mx-auto bg-black"> {/* grid-rows-6 */}
            <div className="col-span-4 h-[90vh]">
              {breakpoint === 'sm' ? (
                <TilesSM />
              ) : (
                <Tiles />
              )}
              {breakpoint === 'sm' ? (
                <Link href="https://lu.ma/2sbx2imc" target="_blank">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[30vh] z-10" style={{ 
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                      fontFamily: 'bc-novatica-cyr', 
                      fontWeight: '500' ,
                    }}>Register Now</Button>
              </Link>
              ) : (
                <Link href="https://lu.ma/2sbx2imc" target="_blank">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[20vh] z-10" style={{ 
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                      fontFamily: 'bc-novatica-cyr', 
                      fontWeight: '500' ,
                    }}>Register Now</Button>
              </Link>
              )}
            </div>
           
            {/* Hero Title Section - Main HackKentucky */}
          {/*  <div className="col-span-4 p-8 flex flex-col justify-center bg-black -mt-1" >

              <h1 className="text-4xl md:text-8xl font-bold tracking-wider font-atamiga text-gray-300">MORE INFO</h1>
              <h1 className="text-4xl md:text-8xl font-bold tracking-wider font-atamiga text-gray-300">COMING SOON</h1>
              <div className="flex flex-col gap-4 mt-8">
                 <div className="flex flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white border-none"
                    style={{ 
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                      fontFamily: 'bc-novatica-cyr', 
                      fontWeight: '400' 
                    }}
                  >
                    For Participants
                  </Button>
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white border-none"
                    style={{ 
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                      fontFamily: 'bc-novatica-cyr', 
                      fontWeight: '400' 
                    }}
                  >
                    For Employers
                  </Button>
                </div> */}
              </div>
            </div>

            {/* About Section
            <div className="col-span-2 border-[1px] border-zinc-900/40 p-6" 
                 style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
              <h3 className="tech-header text-2xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>About HackKentucky</h3>
              <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>
                Kentucky's premier hackathon, bringing together the brightest minds in technology and innovation for 48 hours of coding, creativity, and collaboration.
              </p>
              <div className="space-y-2">
                <div className="text-orange-600 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>→ 500+ Participants</div>
                <div className="text-orange-600 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>→ $10,000 in Prizes</div>
                <div className="text-orange-600 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>→ Industry Leaders</div>
              </div>
            </div>


            <div className="border-[1px] border-zinc-900/40 p-4" 
                 style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
              <div className="bg-gray-100 p-4 h-full" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                <div className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>01</div>

                <div className="w-16 h-16 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center mb-2" 
                     style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({length: 9}).map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="font-semibold" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Innovation</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>workshop</div>
              </div>
            </div>


            <div className="border-[1px] border-zinc-900/40 p-4" 
                 style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
              <div className="bg-gray-100 p-4 h-full" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                <div className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>02</div>
   
                <div className="w-16 h-16 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center mb-2" 
                     style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                  <div className="space-y-1">
                    {Array.from({length: 3}).map((_, i) => (
                      <div key={i} className="w-8 h-2 bg-gray-400"></div>
                    ))}
                  </div>
                </div>
                <div className="font-semibold" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Mentorship</div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>program</div>
              </div>
            </div>


            <div className="col-span-2 border-[1px] border-zinc-900/40 p-6" 
                 style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
              <h3 className="tech-header text-2xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>TESTIMONIALS</h3>
              <div className="relative">
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gray-300 flex items-center justify-center" 
                         style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                      <div className="w-12 h-12 bg-white flex items-center justify-center" 
                           style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                        <span className="text-xs text-gray-500">IMG</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-zinc-900" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>{speakers[currentSpeaker].name}</h4>
                      <p className="text-orange-600 text-sm mb-2" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>{speakers[currentSpeaker].role}</p>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>
                        "Don't take our word for it - HackKentucky provides incredible opportunities for learning and growth."
                      </p>
                    </div>
                    <button 
                      onClick={() => setCurrentSpeaker(prev => (prev + 1) % speakers.length)}
                      className="w-6 h-6 bg-gray-200 flex items-center justify-center hover:bg-gray-300" 
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}
                    >
                      <span style={{ fontFamily: 'bc-novatica-cyr', fontSize: '12px' }}>×</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 border-[1px] border-zinc-900/40 p-6 flex flex-col justify-center" 
                 style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>Unique Approach</div>
                <div className="text-lg font-semibold mb-4" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Beyond Coding</div>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>
                  We build Kentucky's tech ecosystem. It takes an entire community to transform ideas into industry leaders. 
                  With strategic mentorship, career opportunities, and top-tier partnerships - we set you up for unparalleled growth.
                </p>
              </div>
            </div>


            <div className="border-[1px] border-zinc-900/40 p-4" 
                 style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>

              <div className="h-full bg-gray-100 border border-dashed border-gray-400 flex items-center justify-center">
                <span className="text-gray-500 text-xs" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>Grid Item</span>
              </div>
            </div>

            <div className="border-[1px] border-zinc-900/40 p-4" 
                 style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>

              <div className="h-full bg-gray-100 border border-dashed border-gray-400 flex items-center justify-center">
                <span className="text-gray-500 text-xs" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>Grid Item</span>  
              </div>
            </div>


            <div className="col-span-4 border-[1px] border-zinc-900/40 p-8 overflow-hidden" 
                 style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
              <div className="flex justify-between items-start mb-8">
                <h3 className="tech-header text-3xl font-bold text-zinc-900" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>OUR PARTNERS:</h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-gray-200 flex items-center justify-center hover:bg-gray-300" 
                          style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    <span style={{ fontFamily: 'bc-novatica-cyr', fontSize: '14px' }}>←</span>
                  </button>
                  <button className="w-8 h-8 bg-gray-200 flex items-center justify-center hover:bg-gray-300" 
                          style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    <span style={{ fontFamily: 'bc-novatica-cyr', fontSize: '14px' }}>→</span>
                  </button>
                </div>
              </div>
              

              <div className="overflow-hidden relative">
                <div className="flex items-center whitespace-nowrap">
                  <div className="sponsor-item flex-shrink-0 px-8 flex items-center justify-center">
                    <div className="h-20 w-48 bg-white border border-gray-300 flex items-center justify-center" 
                         style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                      <span className="text-zinc-900 font-bold text-lg" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Chainlink</span>
                    </div>
                  </div>
                  <div className="sponsor-item flex-shrink-0 px-8 flex items-center justify-center">
                    <div className="h-20 w-48 bg-white border border-gray-300 flex items-center justify-center" 
                         style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                      <span className="text-zinc-900 font-bold text-lg" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>TRON</span>
                    </div>
                  </div>
                  <div className="sponsor-item flex-shrink-0 px-8 flex items-center justify-center">
                    <div className="h-20 w-48 bg-white border border-gray-300 flex items-center justify-center" 
                         style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                      <span className="text-zinc-900 font-bold text-lg" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>BNB</span>
                    </div>
                  </div>
                  <div className="sponsor-item flex-shrink-0 px-8 flex items-center justify-center">
                    <div className="h-20 w-48 bg-white border border-gray-300 flex items-center justify-center" 
                         style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                      <span className="text-zinc-900 font-bold text-lg" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>*/}
      </div>
    </div>
  )
} 