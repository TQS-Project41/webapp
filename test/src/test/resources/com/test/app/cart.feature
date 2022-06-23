Feature: Cart
  The application must provide basic cart functionality

  Scenario: Insert a product in the cart
    When Inserting a random amount of any product to the cart
    Then We should see that product in the cart

  Scenario: Insert a list in the cart
