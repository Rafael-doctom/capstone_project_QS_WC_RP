const query = document.getElementById("head").innerText;
var sectionNews = 0;

fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    Array.from(data.events).forEach(function (a) {
      //console.log(a);
      const article = document.createElement("div");
      const desc = document.createElement("p");
      desc.innerText = a.status.type.description;
      const date = document.createElement("p");
      date.innerText = `Starts: ${a.status.type.detail}`;
      article.classList.add("card");
      const title = document.createElement("p");
      title.innerText = a.shortName;
      //============================================================
      const logos = document.createElement("img");
      const logos2 = document.createElement("img");
      var apple22 = 0;
      Array.from(a.competitions[0].competitors).forEach(function (b) {
        console.log(b.team.name);
        if (apple22 === 0) {
          apple22++;
          logos.src = b.team.logo;
        } else {
          logos2.src = b.team.logo;
        }
        logos.classList.add("nbaLogo");
        logos2.classList.add("nbaLogo");
      });
      //============================================================
      article.appendChild(title);
      article.appendChild(desc);
      article.appendChild(date);
      article.appendChild(logos2);
      article.appendChild(logos);
      const one = document.getElementById("one");
      one.classList.add("column");
      one.appendChild(article);
      console.log(article);
    });
  });

fetch(
  `https://newsdata.io/api/1/news?apikey=pub_56870dc5f12b0d125f359b92537755980553&q=${query}&language=en`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    apples = 0;
    Array.from(data.results).forEach(function (a) {
      var randomAdPlace = Math.floor(Math.random() * 10) + 1;
      console.log(randomAdPlace);
      if (randomAdPlace === 5) {
        randomAdFunction(apples);
        apples++;
      } else {
        apples++;
        const aLink = document.createElement("a");
        aLink.href = `${a.link}`;
        aLink.target = "_blank";
        const article = document.createElement("div");
        const desc = document.createElement("p");
        desc.innerText = a.description;
        desc.style.fontSize = "10px";
        const date = document.createElement("p");
        date.innerText = `Published: ${a.pubDate}`;
        article.classList.add("card");
        const image = document.createElement("img");
        if (a.image_url == null) {
          image.src =
            "https://miro.medium.com/max/1400/1*T9VUDALam3DIS0wHDWrxBg.png";
          image.style.width = "250px";
          image.style.height = "200px";
        } else {
          image.src = a.image_url;
          image.style.width = "250px";
          image.style.height = "200px";
        }
        image.classList.add("apiImage");
        const title = document.createElement("p");
        title.innerText = a.title;
        article.appendChild(title);
        article.appendChild(image);
        article.appendChild(desc);
        article.appendChild(date);
        aLink.classList.add("aLink");
        aLink.appendChild(article);
        const one = document.getElementById("one");
        one.classList.add("column");
        one.appendChild(aLink);
        console.log(article);
      }
    });
  });

function randomAdFunction(i) {
  fetch("/static/ads.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var randoad = Math.floor(Math.random() * 7);
      const a = data[randoad];

      const aLink = document.createElement("a");
      aLink.href = `${a.link}`;
      aLink.target = "_blank";
      const article = document.createElement("div");
      const desc = document.createElement("p");
      desc.innerText = a.creator;
      desc.style.fontSize = "10px";
      article.classList.add("card");
      const image = document.createElement("img");
      image.src = a.image_url;
      image.classList.add("apiImage");
      const title = document.createElement("p");
      title.innerText = a.title;
      article.appendChild(title);
      article.appendChild(image);
      article.appendChild(desc);
      aLink.classList.add("aLink");
      aLink.appendChild(article);
      const one = document.getElementById("one");
      one.classList.add("column");
      // one.appendChild(aLink);
      one.insertBefore(aLink, one.children[i]);
      console.log(article);
    });
}

function openNav() {
  document.getElementById("mySidebar").style.width = "500px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("mySidebar").style.border = "1px solid black";
  document.getElementById("mySidebar").style.zIndex = "10";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
