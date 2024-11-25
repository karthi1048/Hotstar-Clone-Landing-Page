let movies = [
    {
        name: "loki",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae omnis autem facilis culpa optio, eum nihil inventore error dolorum amet saepe unde! Laudantium exercitationem officia, aliquam tenetur perspiciatis pariatur?",
        image: "/Hotstar clone assests/slider 1.PNG.png"
    },
    {
        name: "falcon",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae omnis autem facilis culpa optio, eum nihil inventore error dolorum amet saepe unde! Laudantium exercitationem officia, aliquam tenetur perspiciatis pariatur?",
        image: "/Hotstar clone assests/slider 2.PNG.png"
    },
    {
        name: "wanda",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae omnis autem facilis culpa optio, eum nihil inventore error dolorum amet saepe unde! Laudantium exercitationem officia, aliquam tenetur perspiciatis pariatur?",
        image: "/Hotstar clone assests/slider 3.PNG.png"
    },
    {
        name: "raya",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae omnis autem facilis culpa optio, eum nihil inventore error dolorum amet saepe unde! Laudantium exercitationem officia, aliquam tenetur perspiciatis pariatur?",
        image: "/Hotstar clone assests/slider 4.PNG.png"
    },
    {
        name: "luca",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi molestiae omnis autem facilis culpa optio, eum nihil inventore error dolorum amet saepe unde! Laudantium exercitationem officia, aliquam tenetur perspiciatis pariatur?",
        image: "/Hotstar clone assests/slider 5.PNG.png"
    },
    
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;          // track the current slide

const createSlide = () => {
    if( slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));

    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);

    carousel.appendChild(slide);

    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classnames
    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    // ending by pushing
    sliders.push(slide);

    // slide effect formula
    if( slide.length ) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)` ;
        /* first (-) indicates [negativeLeftMargin]
        100 indicates 100% movement of slider 
        multiplication is done to attain -100% per slide
        [sliders.length - 2]  ensures 2nd slide in the middle
        30 ,since 30px margin on the right

        Simply we get difference of 100% margin from 30px margin on the right  */
    }
};

// we need call the above function in a loop
for( let i=0; i<3; i++){
    createSlide();
}

// setting interval time for sliders
setInterval(() => {
    createSlide();
}, 3000);