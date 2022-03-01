const Intern = require('../lib/Intern');
const testName = 'Tess Tester';
const testId = 12354;
const testEmail = 'tess@test.com';
const testSchool = 'UW';

describe('Intern', () => {
	describe('Initialization', () => {
		it('should create an object with school if provided with valid arguments', () => {
			const intern = new Intern(testName, testId, testEmail, testSchool);
			let school = intern.school;
			expect(school).toEqual(testSchool);
		});
	});
	describe('getSchool()', () => {
		it('should return the interns school', () => {
			const intern = new Intern(testName, testId, testEmail, testSchool);
			let school = intern.getSchool();
			expect(school).toEqual(testSchool);
		});
	});
	describe('getRole()', () => {
		it('should return the role Intern', () => {
			const intern = new Intern(testName, testId, testEmail, testSchool);
			let role = intern.getRole();
			expect(role).toEqual('Intern');
		});
	})
});


