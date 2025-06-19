// Reveal sections on scroll
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('.section');
  const trigger = window.innerHeight * 0.92;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('load', revealSectionsOnScroll);

// FAQ toggle
function setupFaqToggle() {
  document.querySelectorAll('.faq-answer').forEach(ans => {
    ans.parentElement.addEventListener('click', function() {
      ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
    });
  });
}
window.addEventListener('DOMContentLoaded', setupFaqToggle); 