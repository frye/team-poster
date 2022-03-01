const Manager = require('../lib/Manager');
const testName = 'Tess Tester';
const testId = 12354;
const testEmail = 'tess@test.com';
const testOfficeNumber = 'D126';

describe('Manager', () => {
	describe('Initialization', () => {
		it('should create an object with officeNumber if provided with valid arguments', () => {
			const manager = new Manager(testName, testId, testEmail, testOfficeNumber);
			let office = manager.officeNumber;
			expect(office).toEqual(testOfficeNumber);
		});
	});
	describe('getOfficeNumber()', () => {
		if('should return the office number', () => {
			const manager = new Manager(testName, testId, testEmail, testOfficeNumber);
			let office = manager.getOfficeNumber();
			expect(office).toEqual(testOfficeNumber);
		});
	});
	describe('getRole()', () => {
		it('should return Manager', () => {
			const manager = new Manager(testName, testId, testEmail, testOfficeNumber);
			let role = manager.getRole();
			expect(role).toEqual('Manager');
		})
	})
});