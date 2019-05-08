#! /usr/bin/env node

"use strict";

// Dependencies
const boxen     = require("boxen");
const chalk     = require("chalk");

const lines = [
    chalk.bold("Alton Bell Smythe"),
    "Full Stack End Engineer",
    "",
    chalk.bold("       Web: ") + chalk.cyan.underline("https://abellsythe.me"),
    chalk.bold("    GitHub: ") + chalk.cyan.underline("https://github.com/abellsmythe"),
    chalk.bold("  LinkedIn: ") + chalk.cyan.underline("https://linkedin.com/in/abellsmythe"),
];

const message = lines.join("\n");

const box = boxen(message, {
    borderColor: "cyan",
    borderStyle: "round",
    margin: 1,
    padding: 1
});

console.log(box);