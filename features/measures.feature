@baseUrl @baseUrl-local
Feature: REST Measures
    Measures REST endpoint testing

Scenario: Making a GET request of all measures
    When I make a GET request to "/measure/"
    Then The response property "description" should be "1"
    And The response property "id" should be "1"

Scenario: Making a POST request with json data
    Given The json request data
    """json
    {
        "title": "foo",
        "body": "bar",
        "userId": 1
    }
    """
    When I make a POST request to "/measure"
    Then The response property "userId" should be "1"
    And The response property "id" should be "101"

Scenario: Making a PUT request with json data
    Given The json request data
    """json
    {
        "title": "foo",
        "body": "bar",
        "userId": 1
    }
    """
    When I make a PUT request to "/measure/1"
    Then The response property "userId" should be "1"
    And The response property "id" should be "1"
    And The response property "title" should be "foo"
    And The response property "body" should be "bar"

Scenario: Making a simple DELETE request
    When I make a DELETE request to "/measure/1"
    Then The response status code should be "200"


