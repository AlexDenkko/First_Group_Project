const kampanjatData = [
    {
        icon: "images/logo-black.png",
        title: "kampanja1", 
        content: "kampanja1",
    },

    {
        icon: "images/logo-black.png",
        title: "kampanja2", 
        content: "kampanja2",
    },

    {
        icon: "images/logo-black.png",
        title: "kampanja3", 
        content: "kampanja3",
    },

] ;

const kampanjatContainer = document.querySelector("kampanjat-container")

// Display kampanjat

const displayKampanjat = () => {
    kampanjatData.forEach(s => {
        const HTML = `<div class="icon">
        <img src="${s.icon}" alt="" />
        </div>
        
        <div class="service-content">
         <h3>${s.title}</h3>
         <p>
    
           ${s.content}
         </p>
         </div>`;

         const service = document.createElement("div");
         service.classList.add("service");
         service.innerHTML = HTML;
         kampanjatContainer.appendChild(kampanja)
    });
};


displayKampanjat