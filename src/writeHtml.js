const { writeFileSync } = require(`fs`);

//Define the filename to write the markdown to.
const teamHtml = './dist/team.html';

const generateHtml = (teamArray) => {
	let html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	${teamArray[0].name}
</body>
</html>`

	return html;
}


const writeHtml = (teamArray) => {
	return writeFileSync(teamHtml, generateHtml(teamArray));
}

module.exports = writeHtml;