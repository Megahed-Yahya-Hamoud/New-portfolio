import projects from "./Data/APIs/projects-api/projects_Api.js";

const containerProjects = document.querySelector(".swiper-wrapper");

projects.forEach((project) => {
    let title=project.name.split(" ");
    let idNumber=project.id
    
  containerProjects.innerHTML += `
  <article class="projects__card swiper-slide">
                <div class="blob"></div>

                <div class="projects__number">
                  <h1>${String(idNumber).padStart(2, "0")}</h1>
                  <h3>${project.hint}</h3>
                </div>

                <div class="projects__data">
                  <h1 class="projects__title" style="">${title[0]}<br>${title.slice(1).join(" ")}</h1>
                  <p class="projects__subtitle">Technologies used</p>
                  <p class="projects__description" style="height:33.6px;">${project.technologies_used.join(", ")}</p>
                </div>

                <div class="projects__image" style="background-image:url('${project.image}');" >
                
                  <a href="${project.video_link}" target="_blank" class="projects__button">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </article>
  `;
});

//   <img src="${project.image}" alt="image"
//     class="projects__img">
