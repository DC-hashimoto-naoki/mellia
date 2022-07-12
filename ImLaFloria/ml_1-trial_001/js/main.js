// FV
window.addEventListener('load', () => {
    function showTarget(target) {
        target.classList.add('show');
    }

    const fv_image = document.querySelector('.fv_image')
    setTimeout(showTarget(fv_image), 300);
});

// 3 step section how to use button
window.addEventListener('DOMContentLoaded', () => {
    const how_to_use__btns = document.querySelectorAll('.how_to_use');
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

// inter section observer API

window.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll(".target");

    const options01 = {
        root: null,
        rootMargin: "-100px 0px",
        threshold: 0.5
    };

    const options02 = {
        root: null,
        rootMargin: "-25% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver(addClass, options02);
    const observer01 = new IntersectionObserver(addClass, options01);

    function addClass(entries) {
        // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
        entries.forEach(entry => {
            let element = entry.target;

            if (entry.isIntersecting) {
                addClass_show(element);
                addClass_show_to_groupChildren(element)

                observer.unobserve(element);
            }
        });
    }

    function addClass_show(dom) {
        dom.classList.add('show')
    }

    function addClass_show_to_groupChildren(element) {
        if (element.classList.contains('target_group')) {
            for (let i = 0, len = element.children.length; i < len; i++) {
                setTimeout(addShow, 300 * i);
                function addShow() {
                    element.children[i].classList.add('show');
                }
            }
        }
    }

    const voice_item_dom = document.querySelectorAll('.voice_item.target02');
    const nayami_bottom_icon = document.querySelectorAll('.nayami_bottom_icon');
    const no1_list_item = document.querySelectorAll('.no1_list_item');
    const illust = document.querySelectorAll('.features_illust > .illust');
    const care = document.querySelectorAll('.care');
    const step1_answer_item = document.querySelectorAll('.step1_answer_item');

    function transitionDelay(dom) {
        let delay_time = 0.3;
        if(dom == no1_list_item){
            delay_time = 0.15;
        }
        let items = Array.prototype.slice.call(dom);
        items.forEach((item, index) => {
            item.style.transitionDelay = delay_time * index + 's';
        })
    }

    transitionDelay(voice_item_dom);
    transitionDelay(nayami_bottom_icon);
    transitionDelay(no1_list_item);
    transitionDelay(illust);
    transitionDelay(care);
    transitionDelay(step1_answer_item);

    targets.forEach(target => {
        if(target.classList.contains('option01')){
            observer01.observe(target);
        }else {
            observer.observe(target);
        }
    });
})