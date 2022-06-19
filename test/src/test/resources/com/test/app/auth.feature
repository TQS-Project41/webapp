Feature: Authentication
  The application must act consistent, allowing registering valid details and allowing access to registered users

  Background: Register a new user
    Given The following users must exist
      | email | name | password | birthdate | phoneNumber |
      | pedro@ua.pt | Pedro Duarte | ananas | 05/11/2001 | 123 456 798 |

  Scenario: Logging in with a registered user
    When the user 'pedro@ua.pt' logs in with the password 'ananas'
    Then the login must succeed

  Scenario: Logging in with wrong credentials
    When the user 'pedro@ua.pt' logs in with the password 'manga'
    Then the login must not succeed
  