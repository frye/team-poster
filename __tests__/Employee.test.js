const Employee = require('../lib/Employee');
const testName = 'Tess Tester';
const testId = 12354;
const testEmail = 'tess@test.com';

describe('Employee', () => {
	describe('Initialization', () => {
		it('should create an object with name, id and email if provided with valid arguments', () => {
			const employee = new Employee(testName, testId, testEmail);
			let name = employee.name;
			let id = employee.id;
			let email = employee.email;
			expect(name).toEqual(testName);
			expect(id).toEqual(testId);
			expect(email).toEqual(testEmail);
		});
	});
	describe('getName()', () => {
		it('should return the name property', () => {
			const employee = new Employee(testName, testId, testEmail);
			let name = employee.getName();
			expect(name).toEqual(testName);
		});
	});
	describe('getId()', () => {
		it('should return the id property', () => {
			const employee = new Employee(testName, testId, testEmail);
			let id = employee.getId();
			expect(id).toEqual(testId);
		});
	});
	describe('getEmail()', () => {
		it('should return the email property', () => {
			const employee = new Employee(testName, testId, testEmail);
			let email = employee.getEmail();
			expect(email).toEqual(testEmail);
		})
	});
});