const { writeFileSync } = require(`fs`);

//Define the filename to write the markdown to.
const teamHtml = './dist/team.html';

const generateHtml = (teamCards) => {
	let html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<title>Team poster</title>
</head>
<body class="bg-dark">
<header>
<nav class="navbar bg-primary">
	 <h1 class="text-center w-100">Team Poster</h1>
</nav>
</header>
	<section id="teamCards" class="d-flex flex-wrap m-3 justify-content-center">
	${teamCards}
	</section>
</body>
</html>`

	return html;
}

const getDetails = (employee) => {
	switch (employee.getRole()) {
		case 'Manager':
			return `Office number: ${employee.office}`;
			break;
		case 'Engineer':
			return `GitHub: <a href="https://github.com/${employee.github}" class="link-info">${employee.github}</a>`;
			break;
		case 'Intern':
			return `School: ${employee.school}`;
			break;
	}
}

const generateTeamCards = (teamArray) => {
	const teamHtmlArr = [];
	teamArray.forEach((employee) => {
		teamHtmlArr.push(`<div class="card text-primary bg-dark border-info m-2 p-2 col-4" style="max-width: 18rem;">
	<div class="card-body">
	  <h5 class="card-title indigo-800">${employee.name}</h5>
	  <p class="card-text">${employee.getRole()}</p>
	</div>
	<ul class="list-group list-group-flush bg-secondary border-0" id="list">
	  <li class="list-group-item bg-secondary">ID: ${employee.getId()}</li>
	  <li class="list-group-item bg-secondary"><a href="mailto: ${employee.getEmail()}" class="link-info">${employee.getEmail()}</a></li>
	  <li class="list-group-item bg-secondary" id="type">${getDetails(employee)}</li>
	</ul>
 </div>
 `);
	});
	return teamHtmlArr.join('\n');
}

const writeHtml = (teamArray) => {
	const teamCards = generateTeamCards(teamArray);
	return writeFileSync(teamHtml, generateHtml(teamCards));
}

module.exports = writeHtml;