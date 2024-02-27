import './styles/main.css';

const dropDownMe = () => {
  const navbarItems = [...document.querySelectorAll('.parentContainer')];
  navbarItems.map((navItem) =>
    navItem.addEventListener('mouseenter', (e) => {
      const menuButton = navItem.children[0];
      const itemsParent = e.target.children[1];
      const myItems = [...e.target.children[1].children];
      menuButton.classList.toggle('change-border-bottom');
      itemsParent.classList.toggle('visible');
      const myFilteredItems = myItems.filter(
        (item) => item.className !== 'dummy-item'
      );

      myFilteredItems.map((item) =>
        item.addEventListener('mouseover', () => {
          item.classList.add('animated');
        })
      );
      myFilteredItems.map((item) =>
        item.addEventListener('mouseout', () => {
          item.classList.remove('animated');
        })
      );
    })
  );

  navbarItems.map((navItem) =>
    navItem.addEventListener('mouseleave', (e) => {
      const menuButton = navItem.children[0];
      const itemsParent = e.target.children[1];
      menuButton.classList.toggle('change-border-bottom');
      itemsParent.classList.toggle('visible');
    })
  );
};

export default dropDownMe;