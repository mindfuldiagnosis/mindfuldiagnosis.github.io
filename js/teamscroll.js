// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '30px',
  duration: 1000,
  easing: 'ease',
  mobile: true,
});

// Define the elements you want to reveal
const teamMembers = document.querySelectorAll('.hero');

// Apply the reveal animation to each team member section
teamMembers.forEach((member) => {
  sr.reveal(member);
});
