import { url, username, password } from '../../config';
import Navbar from '../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPage';

describe('Login Failed Test', () => {
	before(() => {
		cy.visit(url);
		Navbar.signInClick();
	});

	it('should try to login with invalid credentials', () => {
		LoginPage.login('invalid username', 'invalid password');
		LoginPage.displayErrorMessage();
	});
});

describe('Login Success Test', () => {
	before(() => {
		cy.visit(url);
		Navbar.signInClick();
	});

	it('should login to application', () => {
		LoginPage.login(username, password);
	});
});
