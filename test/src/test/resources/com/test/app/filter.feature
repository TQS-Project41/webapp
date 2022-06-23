Feature: Filter Products
  The application must allow filtering products

  Scenario: Filter products by category
    When Filtering the products by any category
    Then The products displayed are only from that category
