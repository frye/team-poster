// Load our modules.
const inquirer = require('inquirer');
const writeHtml = require(`./src/writeHtml`);
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const createTeam = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is the name?',
		}
	])
	.then((answers) => {
		const { name } = answers;
		const mgr = new Manager(name, 1, 'test@test.com', 'D124');
		teamArray.push(mgr);
		console.log('Manager added to the team.');
	})
}

const createMembers = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is the name?',
		},
		{
			type: 'confirm',
			name: 'addMore',
			message: 'Add another employee?',
			default: false
		}
	])
	.then((answers) => {
		const { name, addMore } = answers;
		const e = new Engineer(name, 4, 'test@test.com', 'octocat');
		teamArray.push(e);
		console.log(teamArray);
		if (addMore) {
			return createMembers(teamArray);
		} else {
			return teamArray;
		}
	})
};


// Using promises for inquirer and writeMarkdown (which uses writeFileSync)
createTeam()
		.then(createMembers)
		.then((teamArray) => {
			writeHtml(teamArray);
		})
		.then(() => {
			console.log(`Successfully completed!`);
		})
		.catch((err) => console.error(err));
