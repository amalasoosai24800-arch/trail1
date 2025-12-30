/* ---------- MODAL JS ---------- */
const cards = document.querySelectorAll('.team-card_c');
const modals = document.getElementById('profileModal');
const closeBtn = document.querySelector('.closeBtn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('modalName').innerText = card.dataset.name;
    document.getElementById('modalRole').innerText = card.dataset.role;
    document.getElementById('modalInfo').innerText = card.dataset.info;
    modals.style.display = 'flex';
  });
});

closeBtn.onclick = () => modals.style.display = 'none';
window.onclick = (e) => { if(e.target == modals) modals.style.display = 'none'; };

// Hero section text animation
  gsap.from('.hero_section_c h1', { y:50, opacity:0, duration:1, delay:0.3 });
  gsap.from('.hero_section_c p', { y:50, opacity:0, duration:1, delay:0.6 });
  /* Hide Preloader on Page Load 
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});*/


gsap.registerPlugin(ScrollTrigger);

gsap.to(".expand-image-wrap", {
  scrollTrigger: {
    trigger: ".expand-image-section",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play reverse play reverse"
  },
  width: "100vw",       // Expand full width
  height: "100vh",      // Expand full height view for cinematic feel
  borderRadius: "0px",  // Remove rounded radius when full screen
});


// scroll word============================
gsap.fromTo(".scroll-heading",
  { x: 120, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".scroll-text-section",
      start: "top 80%",
      end: "top 30%",
      scrub: true,
      toggleActions: "restart reverse play reverse"
    }
  }
);