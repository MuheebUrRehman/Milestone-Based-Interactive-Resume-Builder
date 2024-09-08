"use strict";
let username = document.querySelector("#username");
let setName = document.querySelector("#set-name");
let email = document.querySelector("#email");
let setEmail = document.querySelector("#set-email");
let phone = document.querySelector("#phone");
let setPhone = document.querySelector("#set-phone");
let linkedin = document.querySelector("#linkedin");
let setLinkedin = document.querySelector("#set-linkedin");
let skill = document.querySelector("#skill1");
let setSkill = document.querySelector("#set-skill1");
let edu = document.querySelector("#education1");
let setEdu = document.querySelector("#set-education");
let exp = document.querySelector("#experience1");
let setExp = document.querySelector("#set-experience");
let btn = document.querySelector("#convert");
btn.addEventListener("click", function () {
    setName.innerText = username.value;
    setEmail.innerText = email.value;
    setPhone.innerText = phone.value;
    setLinkedin.innerText = linkedin.value;
    setSkill.innerText = skill.value;
    setEdu.innerText = edu.value;
    setExp.innerText = exp.value;
});
// Toggle Contact Section
document
    .getElementById("toggleContact")
    ?.addEventListener("click", function () {
    const contact = document.getElementById("contact");
    if (contact && contact.style) {
        if (contact.style.display === "none") {
            contact.style.display = "block";
            this.textContent = "Hide Contact";
        }
        else {
            contact.style.display = "none";
            this.textContent = "Show Contact";
        }
    }
    else {
        console.error("Contact element not found.");
    }
});
// Toggle Skills Section
document
    .getElementById("toggleSkills")
    ?.addEventListener("click", function () {
    const skills = document.getElementById("skills");
    if (skills && skills.style) {
        if (skills.style.display === "none") {
            skills.style.display = "block";
            this.textContent = "Hide Skills";
        }
        else {
            skills.style.display = "none";
            this.textContent = "Show Skills";
        }
    }
    else {
        console.error("Skills element not found.");
    }
});
// Toggle Education Section
document
    .getElementById("toggleEducation")
    ?.addEventListener("click", function () {
    const education = document.getElementById("education");
    if (education && education.style) {
        if (education.style.display === "none") {
            education.style.display = "block";
            this.textContent = "Hide Education";
        }
        else {
            education.style.display = "none";
            this.textContent = "Show Education";
        }
    }
    else {
        console.error("Education element not found.");
    }
});
// Toggle Experience Section
document
    .getElementById("toggleExperience")
    ?.addEventListener("click", function () {
    const experience = document.getElementById("experience");
    if (experience && experience.style) {
        if (experience.style.display === "none") {
            experience.style.display = "block";
            this.textContent = "Hide Experience";
        }
        else {
            experience.style.display = "none";
            this.textContent = "Show Experience";
        }
    }
    else {
        console.error("Experience element not found.");
    }
});
