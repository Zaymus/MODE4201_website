function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	};
	rawFile.send(null);
}

readTextFile("resources/content/welcome.json", function (jsonData) {
	var data = JSON.parse(jsonData);
	document.querySelector("#name").innerHTML = data.personal.name;
	document.querySelector("#program").innerHTML += ` ${data.personal.program}`;

	const skillList = document.querySelector("#skills");
	data.personal.skills.forEach((skill) => {
		const li = document.createElement("li");
		li.classList.add("about_info--list");
		li.innerHTML = skill;
		skillList.appendChild(li);
	});

	const hobbyList = document.querySelector("#hobbies");
	data.personal.hobbies.forEach((hobby) => {
		const li = document.createElement("li");
		li.classList.add("about_info--list");
		li.innerHTML = hobby;
		hobbyList.appendChild(li);
	});
});

readTextFile("resources/content/labs.json", function (jsonData) {
	var labs = JSON.parse(jsonData).labs;
	const projects = document.querySelector("#lab-list").children;
	for (let i = 0; i < labs.length; i++) {
		const project_img = projects[i].childNodes[1].childNodes[1];
		const project_data = projects[i].childNodes[3];
		const project_links = project_data.childNodes[5];

		project_img.setAttribute("src", labs[i].img_url);
		project_img.setAttribute("alt", labs[i].alt_text);
		project_data.childNodes[1].innerHTML = labs[i].name;
		project_data.childNodes[3].innerHTML = labs[i].description;

		for (let k = 0; k < labs[i].links.length; k++) {
			var node = k == 0 ? 1 : k + 2;
			project_links.childNodes[node].addEventListener("click", () => {
				window.open(labs[i].links[k], "_blank");
			});
		}
	}
});

readTextFile("resources/content/classworks.json", function (jsonData) {
	var classworks = JSON.parse(jsonData).classworks;
	const projects = document.querySelector("#classwork-list").children;
	for (let i = 0; i < classworks.length; i++) {
		const project_img = projects[i].childNodes[1].childNodes[1];
		const project_data = projects[i].childNodes[3];
		const project_links = project_data.childNodes[5];

		project_img.setAttribute("src", classworks[i].img_url);
		project_img.setAttribute("alt", classworks[i].alt_text);
		project_data.childNodes[1].innerHTML = classworks[i].name;
		project_data.childNodes[3].innerHTML = classworks[i].description;

		for (let k = 0; k < classworks[i].links.length; k++) {
			var node = k == 0 ? 1 : k + 2;
			project_links.childNodes[node].addEventListener("click", () => {
				window.open(classworks[i].links[k], "_blank");
			});
		}
	}
});
