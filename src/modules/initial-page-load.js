function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = text;
    header.appendChild(logo);
    return header;
}
function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
}
function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);
  
    const homeBtn = createBtn('Home', 'Home');
    const menuBtn = createBtn('Menu', 'Menu');
    const contactBtn = createBtn('Contact', 'Contact');
  
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}
function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}
function createFooter(id, text, link, linkText) {
    const footer = document.createElement('footer');
    footer.id = id;

    const p = document.createElement('p');
    p.textContent = text + ' ';

    const a = document.createElement('a');
    a.href = link;
    a.rel = 'external';
    a.target = '_blank';
    a.textContent = linkText;

    p.appendChild(a);
    footer.appendChild(p);

    return footer;
}
function loadPage() {
    const content = document.getElementById('content');
    // header
    const header = createHeader('header', 'Kebab Store');
    content.appendChild(header);
    // nav
    const nav = createNav('nav');
    content.appendChild(nav);
    // tab-content
    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);
    // footer
    const footer = createFooter('footer', 'Created by', 'https://github.com/Juguler', 'Emre Elci');
    content.appendChild(footer);
}
  
export default loadPage;