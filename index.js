// Load our modules.
const inquirer = require('inquirer');
const writeHtml = require(`./src/writeHtml`);
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const createTeam = () => {
	console.log('Enter the team manager details');
	return inquirer.prompt([
		{
			name: 'name',
			message: 'What is the managers name?',
		},
		{
			name: 'id',
			message: 'What is the managers employee ID?',
		},
		{
			name: 'email',
			message: 'What is the managers e-mail address?',
			validate: email => {
				valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
				if (valid) {
					return true;
				} else {
					console.log(`.  Please enter a valid email`)
					return false;
				}
			}
		},
		{
			name: 'office',
			message: 'What is the managers Office?',
		},
	])
	.then((answers) => {
		const { name, id, email, office } = answers;
		const mgr = new Manager(name, id, email, office);
		teamArray.push(mgr);
		console.log('Manager added to the team.');
	})
}

const createMembers = () => {
	console.log('Enter employee details:');
	return inquirer.prompt([
		{
			type: 'list',
			name: 'role',
			message: 'What is the employees role?',
			choices: ['Engineer', 'Intern'],
		},
		{
			name: 'name',
			message: 'What is the employees name?'
		},
		{
			name: 'id',
			message: 'What is the employees id?',
		},
		{
			name: 'email',
			message: 'What is the employees e-mail?',
			validate: email => {
				valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
				if (valid) {
					return true;
				} else {
					console.log(`.  Please enter a valid email`)
					return false;
				}
			}
		},
		{
			name: 'github',
			message: 'What is the engineers github handle?',
			when: (answers) => {
				if (answers.role === 'Engineer') {
					return true;
				} else {
					return false;
				}
			} 
		},
		{
			name: 'school',
			message: 'What is the interns school?',
			when: (answers) => {
				if (answers.role === 'Intern') {
					return true;
				} else {
					return false;
				}
			}
		},
		{
			type: 'confirm',
			name: 'addMore',
			message: 'Add another employee?',
			default: false
		}
	])
	.then((answers) => {
		const addMore = answers.addMore;
		if (answers.role === 'Engineer') {
			const { name, id, email, github} = answers;
			const e = new Engineer(name, id, email, github);
			teamArray.push(e);
		} else if (answers.role === 'Intern' ){
			const { name, id, email, school} = answers;
			const e = new Intern(name, id, email, school);
			teamArray.push(e);
		}
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
