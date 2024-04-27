import Splide from "@splidejs/splide";
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/core';

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel').mount();
});
