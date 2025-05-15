
function switchLanguage(lang) {
  document.querySelectorAll('.lang-en').forEach(el => {
    el.classList.toggle('d-none', lang !== 'en');
  });
  document.querySelectorAll('.lang-jp').forEach(el => {
    el.classList.toggle('d-none', lang !== 'jp');
  });
}


document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });


  const goTopBtn = document.getElementById("goTopBtn");
  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  switchLanguage('en');
});


window.onscroll = function () {
  const goTopBtn = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

(function() {
  emailjs.init("EOqYdUBaWi18paufj");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_nuqla3u', 'template_9fkd4lo', this)
    .then(function(response) {
       alert('Message sent successfully!');
       document.getElementById('contact-form').reset();
    }, function(error) {
       alert('Failed to send message. Please try again.');
    });
});
