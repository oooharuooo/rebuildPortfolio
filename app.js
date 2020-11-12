// 3D Hover effect
const img3Ds = document.querySelectorAll('.effect-3d');
// Loop through each img and create 3d hover effect
const hover3D = img3Ds.forEach(img3D => {
    / Get the height and width of the img /
    const height = img3D.clientHeight;
    const width = img3D.clientWidth;
    / Define function /
    const handleMove = (e) => {
        const xVal = e.layerX;
        const yVal = e.layerY;
        const yRotation = 20 * ((xVal - width / 2) / width);
        const xRotation = -20 * ((yVal - height / 2) / height);
        /* Generate string for CSS transform property */
        const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
        /* Apply the calculated transformation */
        img3D.style.transform = string;
    }

    // *Add a listener for mousemove event to trigger function 'handleMove' On mousemove
     img3D.addEventListener('mousemove', handleMove);

     /Add listener for mouseout event, remove the rotation /
    img3D.addEventListener('mouseout', () => {
        img3D.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })

    //Add listener for mousedown event, to simulate click 
    img3D.addEventListener('mousedown', () => {
        img3D.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })

    //Add listener for mouseup, simulate release of mouse click
    img3D.addEventListener('mouseup', () => {
        img3D.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })
})

// toTopButton
const toTopButton = document.querySelector('.toTopButton');
window.addEventListener("scroll",() => {
    toTopButton.classList.toggle("active",window.scrollY > 500)
})

const scrollToTop = () => scrollEffect(0);
const scrollToProject = () => scrollEffect(1000);
const scrollToContact = () => scrollEffect(4000);

// Scrolling effect
const scrollEffect= (number) => {
    window.scrollTo({
       top:number,
        behavior:"smooth"
    })
}