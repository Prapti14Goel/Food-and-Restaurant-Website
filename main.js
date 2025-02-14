
// designed to close a Bootstrap navigation bar

let navBar = document.querySelectorAll('.new-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
}

)


document.addEventListener("DOMContentLoaded", () => {
    function startCounters(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = document.querySelectorAll(".counter");
                counters.forEach(counter => {
                    let end = parseInt(counter.getAttribute("data-count"));
                    let start = Math.floor(Math.random() * (end / 2)); // Random start
                    let duration = 3000; // Animation duration in ms
                    let increment = Math.ceil((end - start) / (duration / 30)); // Step value

                    let current = start;
                    counter.textContent = current;

                    let interval = setInterval(() => {
                        current += increment;
                        counter.textContent = current;
                        if (current >= end) {
                            counter.textContent = end;
                            clearInterval(interval);
                        }
                    }, 30);
                });

                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }




    // Use IntersectionObserver to detect when section is in viewport
    let options = { threshold: 0.5 }; // Start animation when 50% visible
    let observer = new IntersectionObserver(startCounters, options);
    observer.observe(document.getElementById("counter"));
});

