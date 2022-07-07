window.addEventListener('load', () => {
    const targets = document.querySelectorAll('.target');
    targets.forEach(target => {
        setTimeout(showTarget(target), 300)
    })

    function showTarget(target) {
        target.classList.add('show');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const how_to_use__btns = document.querySelectorAll('.how_to_use__btn');
    const step_answers = document.querySelectorAll('.step_answer');

    how_to_use__btns.forEach((title, index) => {
        title.addEventListener('click', () => {
            step_answers[index].classList.add('show');
            setTimeout(fadeIn, 100);
            function fadeIn() {
                step_answers[index].classList.add('fade-in');
            }
        })
    })
})