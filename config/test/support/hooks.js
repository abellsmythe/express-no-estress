'use strict';

const config = require("../config");

module.exports = function(){

    /**
     * Sets up a hook to configure the base url for a scenario.
     * The key of which is a configuration value in the config.baseUrl section.
     * 
     * Example
     * @baseUrl @baseUrl-examples
     * Scenario: An example scenario name
     */
    this.Before({ tags: ["@baseUrl"] }, function(scenario){
        // Base URL
        const tags = scenario.getTags();
        tags.map(tag => tag.getName())
            .forEach((tagName) => {
                if (tagName.includes('baseUrl-')) {
                    const value = tagName.split('-')[1];
                    this.baseUrl = config.baseUrl[value];
                    return;
                }
            });
    });

};