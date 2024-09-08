let username = document.querySelector("#username") as HTMLInputElement;
let setName = document.querySelector("#set-name") as HTMLElement;
let email = document.querySelector("#email") as HTMLInputElement;
let setEmail = document.querySelector("#set-email") as HTMLElement;
let phone = document.querySelector("#phone") as HTMLInputElement;
let setPhone = document.querySelector("#set-phone") as HTMLElement;
let linkedin = document.querySelector("#linkedin") as HTMLInputElement;
let setLinkedin = document.querySelector("#set-linkedin") as HTMLElement;
let skill = document.querySelector("#skill1") as HTMLInputElement;
let setSkill = document.querySelector("#set-skill1") as HTMLElement;
let edu = document.querySelector("#education1") as HTMLInputElement;
let setEdu = document.querySelector("#set-education") as HTMLElement;
let exp = document.querySelector("#experience1") as HTMLInputElement;
let setExp = document.querySelector("#set-experience") as HTMLElement;
let desig = document.querySelector("#designation") as HTMLInputElement;
let setDesig = document.querySelector("#set-desig") as HTMLElement;

let btn = document.querySelector("#convert") as HTMLButtonElement;

btn.addEventListener("click", function () {
  setName.innerText = username.value;
  setEmail.innerText = email.value;
  setPhone.innerText = phone.value;
  setLinkedin.innerText = linkedin.value;
  setSkill.innerText = skill.value;
  setEdu.innerText = edu.value;
  setExp.innerText = exp.value;
  setDesig.innerText = desig.value;
});

// Toggle Contact Section
document
  .getElementById("toggleContact")
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const contact = document.getElementById("contact");

    if (contact && contact.style) {
      if (contact.style.display === "none") {
        contact.style.display = "block";
        this.textContent = "Hide Contact";
      } else {
        contact.style.display = "none";
        this.textContent = "Show Contact";
      }
    } else {
      console.error("Contact element not found.");
    }
  });

// Toggle Education Section
document
  .getElementById("toggleEducation")
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const education = document.getElementById("education");

    if (education && education.style) {
      if (education.style.display === "none") {
        education.style.display = "block";
        this.textContent = "Hide Education";
      } else {
        education.style.display = "none";
        this.textContent = "Show Education";
      }
    } else {
      console.error("Education element not found.");
    }
  });

// Toggle Skills Section
document
  .getElementById("toggleSkills")
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const skills = document.getElementById("skills");

    if (skills && skills.style) {
      if (skills.style.display === "none") {
        skills.style.display = "block";
        this.textContent = "Hide Skills";
      } else {
        skills.style.display = "none";
        this.textContent = "Show Skills";
      }
    } else {
      console.error("Skills element not found.");
    }
  });

// Toggle Experience Section
document
  .getElementById("toggleExperience")
  ?.addEventListener("click", function (this: HTMLButtonElement) {
    const experience = document.getElementById("experience");

    if (experience && experience.style) {
      if (experience.style.display === "none") {
        experience.style.display = "block";
        this.textContent = "Hide Experience";
      } else {
        experience.style.display = "none";
        this.textContent = "Show Experience";
      }
    } else {
      console.error("Experience element not found.");
    }
  });
