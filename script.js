function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function requestResume() {
  const subject = "Request for Resume";
  const body = "Hi Harshal,\n\nI would like to request a copy of your resume.\n\nBest regards,\n[Your Name]";
  
  const mailtoLink = `mailto:parmarharshal2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoLink;
}
