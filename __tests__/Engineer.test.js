const Engineer = require('../lib/Engineer');
const testName = 'Tess Tester';
const testId = 12354;
const testEmail = 'tess@test.com';
const testGithub = 'octocat';

describe('Engineer', () => {
	describe('Initialization', () => {
		it('should create an object with github username if provided with valid arguments', () => {
			const engineer = new Engineer(testName, testId, testEmail, testGithub);
			let github = engineer.github;
			expect(github).toEqual(testGithub);
		});
	});
	describe('getGithub()', () => {
		it('should return the users github handle', () => {
			const engineer = new Engineer(testName, testId, testEmail, testGithub);
			let github = engineer.getGithub();
			expect(github).toEqual(testGithub);
		});
	});
	describe('getRole()', () => {
		it('should return the role Engineer', () => {
			const engineer = new Engineer(testName, testId, testEmail);
			let role = engineer.getRole();
			expect(role).toEqual('Engineer');
		});
	})
});