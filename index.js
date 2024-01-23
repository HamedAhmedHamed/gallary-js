const wrapper = document.querySelector('#wrapper');
const imgs = [
  {url: 'https://th.bing.com/th/id/OIP._cbjLskI7xDXA5PtusdxogHaH_?rs=1&pid=ImgDetMain', alt: 'item-1'},
  {url: 'https://storage.ko-fi.com/cdn/useruploads/post/jpg_kofi_fecf3b68-db41-48e4-a1d2-e55e738e2d2159526608_n.jpg', alt: 'item-2'},
  {url: 'https://th.bing.com/th/id/OIP._cbjLskI7xDXA5PtusdxogHaH_?rs=1&pid=ImgDetMain', alt: 'item-3'},
  {url: 'https://assets.mycast.io/posters/beluga-the-texts-of-life-fan-casting-poster-292279-medium.jpg?1677104636', alt: 'item-4'},
  {url: 'https://storage.ko-fi.com/cdn/useruploads/post/jpg_kofi_fecf3b68-db41-48e4-a1d2-e55e738e2d2159526608_n.jpg', alt: 'item-5'},
  {url: 'https://th.bing.com/th/id/OIP.qvS6FVZ4f9jU-qZBxw4mWQHaGa?rs=1&pid=ImgDetMain', alt: 'item-6'},
  {url: 'https://assets.mycast.io/posters/beluga-the-texts-of-life-fan-casting-poster-292279-medium.jpg?1677104636', alt: 'item-7'},
  {url: 'https://assets.mycast.io/posters/beluga-the-texts-of-life-fan-casting-poster-292279-medium.jpg?1677104636', alt: 'item-8'},
  {url: 'https://storage.ko-fi.com/cdn/useruploads/post/jpg_kofi_fecf3b68-db41-48e4-a1d2-e55e738e2d2159526608_n.jpg', alt: 'item-9'},
  {url: 'https://th.bing.com/th/id/OIP._cbjLskI7xDXA5PtusdxogHaH_?rs=1&pid=ImgDetMain', alt: 'item-10'},
  {url: 'https://th.bing.com/th/id/OIP.qvS6FVZ4f9jU-qZBxw4mWQHaGa?rs=1&pid=ImgDetMain', alt: 'item-11'},
  {url: 'https://th.bing.com/th/id/OIP.qvS6FVZ4f9jU-qZBxw4mWQHaGa?rs=1&pid=ImgDetMain', alt: 'item-12'},
];

function renderItem(imgArr) {
  imgArr.forEach((element, index) => {
    const item = document.createElement('div');
    item.classList = 'item';

    const img = document.createElement('img');
    img.src = element.url;
    img.alt = `${index} indexed`;
    img.id = index;
    img.width = 150;
    img.height = 250;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = index;
    btn.classList = 'btn';
    // btn.insertAdjacentText('afterbegin', 'Delete Button');
    btn.innerHTML = 'Delete';
    item.appendChild(img);
    item.appendChild(btn);
    wrapper.appendChild(item);
  });
}

function addFunctionality() {
  
  const imgs = document.querySelectorAll('img');
  const btns = document.querySelectorAll('.btn');
  
  btns.forEach( (button) => {

    // NOTE: there is a BUG related to buttonState!
    // the bug is fixed by moving buttonState inside the btns loop scope.
    let buttonState = 0;

    button.addEventListener('click', () => {
      imgs.forEach( (image) => {

        if (button.id === image.id && buttonState == 0) {
          buttonState = 1;
          image.classList = 'removed';
          button.innerHTML = 'Undo';
          console.log(buttonState);
        }
        else if (button.id === image.id && buttonState == 1) {
          buttonState = 0;
          image.removeAttribute('class');
          button.innerHTML = 'Delete';
          console.log(buttonState);
        }
      });
    });
  });

  // for (let i=0; i<btn.length; i++) {
  //   for (let j=0; j<imgs.length; j++) {
  //     btn[i].addEventListener('click', () => {
  //       if (btn[i].id === imgs[j].id && buttonState === 0) {
  //         imgs[j].classList = 'removed';
  //         btn[i].innerHTML = 'Undo';
  //         buttonState = 1;
  //         console.log(`${btn[i]} ${imgs[j]} ${buttonState}`);
  //       }
  //       else if (btn[i].id === imgs[j].id && buttonState === 1) {
  //         imgs[j].removeAttribute('class')
  //         btn[i].innerHTML = 'Delete';
  //         buttonState = 0;
  //         console.log(`${btn[i]} ${imgs[j]} ${buttonState}`);
  //       }
  //     });
  //   }
  // }
}

renderItem(imgs);
addFunctionality();
