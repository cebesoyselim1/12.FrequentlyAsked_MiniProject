let cards = document.querySelectorAll(".faq-card");

cards.forEach((card) => {
    card.addEventListener("click", (e) => {

        if(e.target.classList.contains("faq-card-expand")){
            e.target.parentElement.parentElement.classList.add("active");
        }else if(e.target.classList.contains("fa-bars")){
            e.target.parentElement.parentElement.parentElement.classList.add("active");
        }

        if(e.target.classList.contains("faq-card-close")){
            e.target.parentElement.parentElement.classList.remove("active");
        }else if(e.target.classList.contains("fa-times")){
            e.target.parentElement.parentElement.parentElement.classList.remove("active");
        }
        
    });
})