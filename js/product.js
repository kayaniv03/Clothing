const productImages = document.querySelectorAll(".product-images img")
const productImagesslide = document.querySelector(".image-slider");
let activeimagesslide = 0;
productImages.forEach((item , i) => {
    item.addEventListener('click', () => {
        productImages[activeimagesslide].classList.remove('active');
        item.classList.add('active');
        productImagesslide.style.backgroundImage = `url('${item.src}')`
        activeimagesslide = i;



    })
})
//toggle size buttons
 const sizeBtns = document.querySelectorAll('.size-ratio-btn');
 let checkedbtns = 0;
 sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedbtns].classList.remove('check');
        item.classList.add('check');
        checkedbtns = i;
    })
 })


// const fetchProductData = () =>{
//    fetch()'/get-products', {
//     method: 'post',
//     Headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify({id: productId})
//    }
//    .then(res =>res.json())
//    .then(data => console.log(data));

// }

// let productId = null;
// if(loacation.pathname != '/product'){
//     productId = decodeURI(location.pathname.split('/').pop());
//     fetchProductData();
// }