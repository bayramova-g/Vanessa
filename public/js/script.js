const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...querySelectorAll('.nxt-btn')];
const preBtn = [...querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {


    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth ;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth ;
    })


})