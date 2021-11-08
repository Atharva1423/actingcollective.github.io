//Scroll
//var mybutton = document.getElementsByClassName("top_btn");
function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const messaging = document.getElementsByClassName('messaging');
// console.log(messaging)
const calendar = document.getElementsByClassName('.calendar');
// console.log(calendar)

document.addEventListener('scroll', function () {
    const result_m = isInViewport(messaging);
    const result_c = isInViewport(calendar);

    // console.log(result_m);
    // console.log(result_c);
}, {passive: true});