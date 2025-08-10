
"use client"

import { Button } from "@/components/ui/button"
import { SiteNavigation } from "@/components/site-navigation"
import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { TextPlugin } from "gsap/TextPlugin"
import Tiles from "@/components/tiles";
import TilesMD from "@/components/tilesmd";
import TilesSM from "@/components/tilessm";
import Link from "next/link"
import Image from "next/image"
import { speakers as speakerData } from "./spring25/data/speakers"
import { scheduleItems } from "./spring25/data/schedule"

function horizontalLoop(items: any[], config: any = {}) {
  let timeline: any;
  items = gsap.utils.toArray(items);
  
  // Check if items exist and have valid DOM properties
  if (!items.length || !items[0] || typeof items[0].offsetLeft === 'undefined') {
    return null;
  }
  
  gsap.context(() => {
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat, 
        onUpdate: onChange && function() {
          let i = (tl as any).closestIndex();
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
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1),
      timeOffset = 0,
      container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth: number,
      getTotalWidth = () => {
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
      timeWrap: any,
      populateOffsets = () => {
        timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
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
        timeWrap = gsap.utils.wrap(0, tl.duration());
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

  // Data
  const speakers = speakerData
  const partners = [
    { src: "/sponsors/sponsor1.png", alt: "Partner 1" },
    { src: "/sponsors/sponsor2.png", alt: "Partner 2" },
    { src: "/sponsors/sponsor3.png", alt: "Partner 3" },
    { src: "/sponsors/sponsor4.png", alt: "Partner 4" },
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
            {/* ABOUT / VALUE PROPS */}
            <div className="col-span-4 grid grid-cols-4 gap-4 p-4 sm:p-6 w-screen sm:max-w-[90vw] mx-auto">
              {/* About */}
              <div className="col-span-4 md:col-span-2 border border-white/10 p-6 bg-black" style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                <h3 className="tech-header text-2xl font-bold mb-4 text-zinc-100" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>About HackKentucky</h3>
                <p className="text-zinc-400 mb-4 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>
                  Kentucky's premier hackathon, bringing together the brightest minds in technology and innovation for 48 hours of coding, creativity, and collaboration.
                </p>
                <div className="space-y-2">
                  <div className="text-orange-500 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>→ Rapid Problem Solving</div>
                  <div className="text-orange-500 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>→ Direct Access to Top Talent</div>
                  <div className="text-orange-500 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>→ Brand Building & Community</div>
                </div>
              </div>

              {/* Value Tile 1 */}
              <div className="border border-white/10 p-4 bg-black" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                <div className="p-4 h-full" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                  <div className="text-sm text-zinc-500 mb-2" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>01</div>
                  <div className="w-16 h-16 border-2 border-dashed border-zinc-700 flex items-center justify-center mb-3" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    <div className="grid grid-cols-3 gap-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-zinc-600 rounded-full" />
                      ))}
                    </div>
                  </div>
                  <div className="font-semibold text-zinc-100" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Innovation</div>
                  <div className="text-sm text-zinc-400" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>workshop</div>
                </div>
              </div>

              {/* Value Tile 2 */}
              <div className="border border-white/10 p-4 bg-black" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                <div className="p-4 h-full" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                  <div className="text-sm text-zinc-500 mb-2" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>02</div>
                  <div className="w-16 h-16 border-2 border-dashed border-zinc-700 flex items-center justify-center mb-3" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    <div className="space-y-1">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="w-8 h-2 bg-zinc-600" />
                      ))}
                    </div>
                  </div>
                  <div className="font-semibold text-zinc-100" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Mentorship</div>
                  <div className="text-sm text-zinc-400" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>program</div>
                </div>
              </div>
            </div>

            {/* SPEAKERS */}
            <div className="col-span-4 grid grid-cols-4 gap-4 p-4 sm:p-6 w-screen sm:max-w-[90vw] mx-auto">
              <div className="col-span-4 md:col-span-2 border border-white/10 p-6 bg-black" style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                <h3 className="tech-header text-2xl font-bold mb-4 text-zinc-100" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Speakers</h3>
                <div className="relative text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-zinc-800 flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                      <Image src={speakers[currentSpeaker].image} alt={speakers[currentSpeaker].name} width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-zinc-100" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>{speakers[currentSpeaker].name}</h4>
                      <p className="text-orange-500 text-sm mb-2" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>{speakers[currentSpeaker].role}</p>
                      <p className="text-zinc-400 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>
                        Don't miss our speaker series featuring leaders from top companies.
                      </p>
                    </div>
                    <button onClick={() => setCurrentSpeaker(prev => (prev + 1) % speakers.length)} className="w-7 h-7 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                      <span style={{ fontFamily: 'bc-novatica-cyr', fontSize: '12px' }}>→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-span-4 md:col-span-2 border border-white/10 p-6 bg-black" style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                <div className="text-right">
                  <div className="text-sm text-zinc-500 mb-2" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>Unique Approach</div>
                  <div className="text-lg font-semibold mb-4 text-zinc-100" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Beyond Coding</div>
                  <p className="text-sm text-zinc-400 leading-relaxed" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '400' }}>
                    We build Kentucky's tech ecosystem. With strategic mentorship, career opportunities, and top-tier partnerships — we set you up for unparalleled growth.
                  </p>
                </div>
              </div>
            </div>

            {/* SCHEDULE */}
            <div className="col-span-4 border-t border-white/10 " />
            <div className="col-span-4 p-4 sm:p-6 w-screen sm:max-w-[90vw] mx-auto">
              <h3 className="tech-header text-3xl font-bold text-zinc-100 mb-4" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(scheduleItems).map(([day, data]) => (
                  <div key={day} className="border border-white/10 p-4 bg-black" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-zinc-100 font-semibold" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>{day}</h4>
                      <span className="text-xs text-orange-500" style={{ fontFamily: 'bc-novatica-cyr' }}>●</span>
                    </div>
                    <p className="text-xs text-zinc-500 mb-3" style={{ fontFamily: 'bc-novatica-cyr' }}>{data.description}</p>
                    <ul className="space-y-2">
                      {data.events.map((ev, idx) => (
                        <li key={idx} className="border-t border-white/10 pt-2">
                          <div className="text-orange-500 text-xs" style={{ fontFamily: 'bc-novatica-cyr' }}>{ev.time}</div>
                          <div className="text-zinc-200 text-sm" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: 500 }}>{ev.event}</div>
                          {ev.details && (
                            <div className="text-xs text-zinc-500" style={{ fontFamily: 'bc-novatica-cyr' }}>{ev.details}</div>
                          )}
                          {ev.subEvents && (
                            <ul className="mt-2 space-y-1">
                              {ev.subEvents.map((se, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-2">
                                  <span className="text-xs text-orange-500" style={{ fontFamily: 'bc-novatica-cyr' }}>{se.time}</span>
                                  <span className="text-xs text-zinc-400" style={{ fontFamily: 'bc-novatica-cyr' }}>{se.details}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* SPONSORS STRIP */}
            <div className="col-span-4 p-4 sm:p-6 w-screen sm:max-w-[90vw] mx-auto">
              <div className="col-span-4 border border-white/10 p-6 overflow-hidden bg-black" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="tech-header text-2xl md:text-3xl font-bold text-zinc-100" style={{ fontFamily: 'bc-novatica-cyr', fontWeight: '600' }}>Our Partners</h3>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>←</button>
                    <button className="w-8 h-8 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>→</button>
                  </div>
                </div>
                <div className="overflow-hidden relative">
                  <div className="flex items-center whitespace-nowrap">
                    {partners.concat(partners).map((p, i) => (
                      <div key={i} className="sponsor-item flex-shrink-0 px-8 flex items-center justify-center">
                        <div className="h-16 w-40 bg-white border border-zinc-300 flex items-center justify-center" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                          <Image src={p.src} alt={p.alt} width={160} height={64} className="object-contain" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 