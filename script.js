
const navLinks = document.querySelectorAll('nav ul li a');
const festiveSpecials = document.getElementById('festive-specials');
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.getElementById(link.getAttribute('href').replace('#', ''));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  fetch('/api/contact', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Message sent successfully!');
  })
  .catch(error => {
    console.error(error);
    alert('Error sending message');
  });
});


festiveSpecials.addEventListener('mouseover', (e) => {
  const dishes = festiveSpecials.querySelectorAll('.dish');
  dishes.forEach(dish => {
    dish.classList.add('hover');
  });
});

festiveSpecials.addEventListener('mouseout', (e) => {
  const dishes = festiveSpecials.querySelectorAll('.dish');
  dishes.forEach(dish => {
    dish.classList.remove('hover');
  });
});