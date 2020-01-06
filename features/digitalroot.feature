# features/digitalroot.feature

Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

  Scenario: get a simple digital root
      Given a variable set to 22
      When I calculate the digital root
      Then the root should be 4

  Scenario Outline: much more complex stuff
    Given a variable set to <var>
    When I increment the variable by <increment>
    Then the variable should contain <result>

    Examples:
      | var | increment | result |
      | 100 |         5 |    105 |
      |  99 |      1234 |   1333 |
      |  12 |         5 |     17 |
