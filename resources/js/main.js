const linkedin = document.querySelector(".fa-linkedin");
const github = document.querySelector(".fa-github");

const header = document.querySelector("header");
const about = document.getElementsByClassName("about_info")[0];
const classwork = document.querySelector(".classwork");
const labs = document.querySelector(".labs");
const title = document.querySelector(".title");
const nav = document.getElementsByClassName("nav_link-list")[0];

const location_classwork = document.querySelector("#classwork").offsetTop;
const location_labs = document.querySelector("#labs").offsetTop;

const projects_git = document.querySelectorAll("#project-git");
const projects_web = document.querySelectorAll("#project-link");
const git_links = [];
const web_links = [];

linkedin.addEventListener("click", () => {
	window.open("https://www.linkedin.com/in/carsonbrown-dev", "_blank");
});

github.addEventListener("click", () => {
	window.open("https://github.com/Zaymus", "_blank");
});

title.addEventListener("click", () => {
	scroll({ top: 0, behaviour: "smooth" });
});

classwork.addEventListener("click", () => {
	scroll({ top: location_classwork, behaviour: "smooth" });
});

labs.addEventListener("click", () => {
	scroll({ top: location_labs, behaviour: "smooth" });
});

for (let i = 0; i < git_links.length; i++) {
	projects_git[i].addEventListener("click", () => {
		window.open(git_links[i], "_blank");
	});
}

for (let i = 0; i < web_links.length; i++) {
	projects_web[i].addEventListener("click", () => {
		window.open(web_links[i], "_blank");
	});
}

document.onscroll = () => {
	if (window.scrollY <= 65) {
		if (header.classList.contains("follow")) {
			header.classList.remove("follow");
		}
	} else {
		header.classList.add("follow");
		about.style.paddingTop = "65px";
	}
};
