Feature: Sign Up
  The application must provide account creation given valid registration data is provided

  Scenario: Register a valid user
    When Registering the following users
      | email       | name         | password | birthdate  | phoneNumber |
      | valid_user@ua.pt | Pedro Duarte | ananas   | 05/11/2001 | 123 456 798 |
    Then they will be able to login

  Scenario: Register a user with invalid email
    When Registering the following users
      | email         | name         | password | birthdate  | phoneNumber |
      | invalid_email | Pedro Duarte | ananas   | 05/11/2001 | 123 456 798 |
    Then they will not be able to login

  Scenario: Register a user with invalid birthdate
    When Registering the following users
      | email                   | name         | password | birthdate  | phoneNumber |
      | invalid_birthdate@ua.pt | Pedro Duarte | ananas   | 05/11/3001 | 123 456 798 |
    Then they will not be able to login
  