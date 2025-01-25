var _a, _b, _c, _d, _e;
// input elements
var profilePic = document.querySelector("#profile-pic");
var inputFile = document.querySelector("#input-file");
var username = document.querySelector("#username");
var desig = document.querySelector("#designation");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var linkedin = document.querySelector("#linkedin");
var edu = document.querySelector("#education1");
var skill = document.querySelector("#skill1");
var exp = document.querySelector("#experience1");
// setting values
var setName = document.querySelector("#set-name");
var setDesig = document.querySelector("#set-desig");
var setEmail = document.querySelector("#set-email");
var setPhone = document.querySelector("#set-phone");
var setLinkedin = document.querySelector("#set-linkedin");
var setEdu = document.querySelector("#set-education");
var setSkill = document.querySelector("#set-skill1");
var setExp = document.querySelector("#set-experience");
var displayedProfilePic = document.querySelector("#displayed-profile-pic");
var btn = document.querySelector("#convert");
var uploadedProfilePicUrl = null;
inputFile.onchange = function () {
    if (inputFile.files && inputFile.files.length > 0) {
        uploadedProfilePicUrl = URL.createObjectURL(inputFile.files[0]);
        profilePic.src = uploadedProfilePicUrl;
    }
};
btn.addEventListener("click", function () {
    if (uploadedProfilePicUrl) {
        displayedProfilePic.src = uploadedProfilePicUrl;
    }
    else {
        displayedProfilePic.src = "images.png";
    }
    setName.innerText = username.value;
    setName.setAttribute("contenteditable", "true");
    setDesig.innerText = desig.value;
    setDesig.setAttribute("contenteditable", "true");
    setEmail.innerText = email.value;
    setEmail.setAttribute("contenteditable", "true");
    setPhone.innerText = phone.value;
    setPhone.setAttribute("contenteditable", "true");
    setLinkedin.innerText = linkedin.value;
    setLinkedin.setAttribute("contenteditable", "true");
    setEdu.innerText = edu.value;
    setEdu.setAttribute("contenteditable", "true");
    setSkill.innerText = skill.value;
    setSkill.setAttribute("contenteditable", "true");
    setExp.innerText = exp.value;
    setExp.setAttribute("contenteditable", "true");
});
// Toggle image Section
(_a = document
    .getElementById("toggleImage")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var imageHide = document.getElementById("resume-profile-pic");
    if (imageHide && imageHide.style) {
        if (imageHide.style.display === "none") {
            imageHide.style.display = "block";
            this.textContent = "Hide Image";
        }
        else {
            imageHide.style.display = "none";
            this.textContent = "Show image";
        }
    }
    else {
        console.error("image element not found.");
    }
});
// Toggle Contact Section
(_b = document
    .getElementById("toggleContact")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var contact = document.getElementById("contact");
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
// Toggle Education Section
(_c = document
    .getElementById("toggleEducation")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var education = document.getElementById("education");
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
// Toggle Skills Section
(_d = document
    .getElementById("toggleSkills")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var skills = document.getElementById("skills");
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
// Toggle Experience Section
(_e = document
    .getElementById("toggleExperience")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    var experience = document.getElementById("experience");
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
