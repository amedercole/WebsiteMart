/*
This is going to populate the course modulas

document.addEventListener('DOMContentLoaded', function () {
    // your code that accesses the HTML document goes here
    const cardData = [
        {
            image: "../imgFolder/avatar.jpg",
            title: "Module 0:",
            text: "Module title here in japanese and possibly english -- this is also the introduction",
            url: "homePage.html"
        },
        {
            image: "../imgFolder/avatar.jpg",
            title: "Module 1:",
            text: "世界、国、電力会社のエネルギー需給を予測するための方法論",
            url: "homePage.html"
        },
        {
            image: "../imgFolder/avatar.jpg",
            title: "Module 2:",
            text: "電力産業の検討",
            url: "homePage.html"
        },
        {
            image: "../imgFolder/avatar.jpg",
            title: "Module 3:",
            text: "原子力の重要な役割とその必要性",
            url: "homePage.html"
        }
    ];

    const cardRow = document.getElementById("card-row");
    console.log(cardRow); // check if cardRow is null
    console.log(document.getElementById("row1")); // check if cardRow is null
    for (let i = 0; i < cardData.length; i++) {
        const card = document.createElement("div");
        card.className = "col-3";
        card.innerHTML = `
      <div class="card">
        <img src="${cardData[i].image}" class="card-img-top" alt="...">
        <div class="card-img-overlay flex-column justify-content-end">
          <h5 class="card-title" style="margin-bottom: 100%;">${cardData[i].title}</h5>
          <p class="card-text">${cardData[i].text}</p>
          <div class="card-footer" style="margin-top: 100%;">
          <a href="${cardData[i].url}" class="card-text btn btn-primary">Explore This Module</a>
          </div>
        </div>
      </div>
    `;
        cardRow.appendChild(card);
    }
}); 
idea has been scratched
*/ 