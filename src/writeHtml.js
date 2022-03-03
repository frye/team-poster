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
<body>
	<section id="teamCards" class="d-flex flex-wrap m-3">
	${teamCards}
	</section>
</body>
</html>`

	return html;
}

const generateTeamCards = (teamArray) => {
	const teamHtmlArr = [];
	teamArray.forEach((employee) => {
		teamHtmlArr.push(`<div class="card text-white bg-primary m-2 p-2" style="max-width: 18rem;">
	<div class="card-body">
	  <h5 class="card-title">${employee.name}</h5>
	  <p class="card-text">${employee.getRole()}</p>
	</div>
	<ul class="list-group list-group-flush" id="list">
	  <li class="list-group-item">ID: ${employee.name}</li>
	  <li class="list-group-item"><a href="mailto: ${employee.name}">${employee.name}</a></li>
	  <li class="list-group-item" id="type"></li>
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