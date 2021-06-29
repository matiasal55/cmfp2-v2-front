export const scrollFade = (scrollMax) => {
    let state = false;
    if (window.pageYOffset >= scrollMax) state = true;
    return state;
};
