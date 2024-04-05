const Accordion = (function () {
    class Main {
        static generate() {
            const parentAccordion = document.querySelector("#faq-accordion");

            parentAccordion.addEventListener("click", (event) => {
                let target = event.target;
                // Traverse up the DOM tree until a parent with data-accordion attribute is found
                while (target && !target.dataset.accordion) {
                    target = target.parentElement;
                }

                if (target && target.dataset.accordion) {
                    target.nextElementSibling.classList.toggle("show");

                    if(target.nextElementSibling.classList.contains("show")) {
                        target.parentElement.querySelector(".faq-item__top .plus").style.display = "none";
                        target.parentElement.querySelector(".faq-item__top .minus").style.display = "block";
                    } else {
                        target.parentElement.querySelector(".faq-item__top .plus").style.display = "block";
                        target.parentElement.querySelector(".faq-item__top .minus").style.display = "none";
                    }
                }
            });
        }
    }

    return {
        init: Main.generate,
    };
})();

Accordion.init();
