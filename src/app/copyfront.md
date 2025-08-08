You will copy the information from src/app/spring25/page.tsx into src/app/page.tsx while maintaining the style that already exists, reference src/app/style1.png and src/app/style2.png for general styling.

Note that the internal grid system can be more complex where nested grids can give more flexibility in styling.

# IMPORTANT STYLING NOTES
- follow the screenshots styling very well
- ui should keep the flat look, with edges mostly being 45 degree angle instead of rounding, and only on the top right and bottom left corners
- nav bar should follow the styling in src/app/style1.png including when selected, the text having the orange corner border highlight thing going on.
- the random items that exist within the nested/sub grids should be made as placeholders for me to then add my own images or items, keep them as a div with a comment that its placeholder
- for title text that isnt the hero page Hackkentucky (meaning they are large text that is smaller than that text but still bold and header), use gsap to make a tech like apperance as the user scrolls down (it triggers the text to appear), where the text quickly blinks into existence (the letters blink on and off at random for about 0.75s)
- for nav bar text, use gsap text scramble
- - example of text scramble:
``` let textRevealRadius = 100;
const textRevealPercent = 0.17; // percent of the viewport width, used to size textRevealRadius

const st = new SplitText('p', { type: 'chars', charsClass: 'char' });
st.chars.forEach((char) => (char.orig = char.textContent));

const upperAndLowerCase = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const getRandomLetter = () =>
  upperAndLowerCase[Math.round(upperAndLowerCase.length * Math.random())];

let pageX = 0;
let pageY = 0;
let scrollY = pageYOffset;
let scrollX = pageXOffset;

let charData;

function handleResize() {
  textRevealRadius = innerWidth * textRevealPercent;
  updateCharData();
}

function updateCharData() {
  charData = st.chars.map(char => {
    const bounds = char.getBoundingClientRect(); // this operation is expensive, so just do it when we need to
    return {
      el: char,
      pageY: bounds.top + scrollY + bounds.height / 2,
      pageX: bounds.left + pageXOffset + bounds.width / 2,
      isVisible: false
    }
  });
}

function updateText(e) {
  if ("pageY" in e) {
    pageX = e.pageX;
    pageY = e.pageY;
  } else { // scrolling doesn't give us pageX/pageY, so we must calculate them based on the scroll delta
    let scrollYDif = pageYOffset - scrollY;
    let scrollXDif = pageXOffset - scrollX;
    scrollY += scrollYDif;
    scrollX += scrollXDif;
    pageY += scrollYDif;
    pageX += scrollXDif;
  }
  
  charData.forEach((data) => {
    const dx = pageX - data.pageX;
    const dy = pageY - data.pageY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const isVisible = dist < textRevealRadius;
    
    if (isVisible !== data.isVisible || !isVisible) {
      data.isVisible = isVisible;
      gsap.to(data.el, {
        overwrite: true,
        duration: gsap.utils.clamp(0.5, 3, dist / textRevealRadius),
        scrambleText: {
          text: isVisible ? data.el.orig : getRandomLetter(),
          chars: 'upperAndLowerCase'
        }
      });
    }
  });
};

function init() {
  window.addEventListener('resize', handleResize);
  window.addEventListener('pointermove', updateText);
  window.addEventListener('scroll', updateText);
  
  handleResize();
  updateText({ pageX: 0, pageY: 0 });
}

init();
```

1. swtich the colors to a space themed style

### use the already existing gsap method in src/app/page.tsx
2. Make the Hero page HackKentucky text scrolling like the top announcement bar
3. Sponsors will be scrolling as well, use src/app/sponsor.png for reference on how that should look
4. Speakers will be scrolling but not continous (it should scroll every few seconds according to best ux practices), and they can press a button to scroll.