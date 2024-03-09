function setBtnActive(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

function createAboutSection() {
    const about = document.createElement('section');
    about.classList.add('section');
  
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'About us';
  
    about.appendChild(title);
  
    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = 'Lorem ipsum dolor sit amet. Et consectetur temporibus qui dolor excepturi aut atque consequuntur sit perspiciatis quasi? Qui minima explicabo et rerum fugiat ab consequatur ullam ut facilis consequatur. Non assumenda provident et voluptatum voluptatum et dicta pariatur eos obcaecati voluptatem eos illo atque et amet mollitia.';
    about.appendChild(para);
    return about;
}

function loadHome() {
  const content = document.getElementById('tab-content');
  content.classList.add('flex-lay');
  content.classList.remove('grid-lay');

  content.textContent = '';

  const aboutSection = createAboutSection();

  setBtnActive('Home');

  content.appendChild(aboutSection);
}

export default loadHome;