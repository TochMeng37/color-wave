const boxes = document.querySelectorAll(".box");
const input = document.getElementById('color');

boxes[0].addEventListener('click', () => {
    const color = input.value;

    // Function to validate the color input
    function validate(color) {
        const system = new Option().style;
        system.color = color;
        return system.color !== '';  // Returns true if valid color
    }

    if (validate(color)) {
        boxes.forEach((box, index) => {
            box.style.setProperty('--anim', 'none');
            box.offsetHeight;

            setTimeout(() => {
                box.style.setProperty('--bgColor', color);   
                box.style.setProperty('--anim', 'anim 1s ease forwards');  // Trigger the animation

                // Set box color after animation finishes (1s delay)
                setTimeout(() => {
                    box.style.setProperty('--boxColor', color);  // Set the final box base color after animation completes
                }, 1000);  // Match the animation duration (1 second)
                
            }, index * 500);  // Delay for wave effect
        });
    } else {
        alert('Invalid color');  // Alert if the color is invalid
    }
});
