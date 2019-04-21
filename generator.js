"use strict";

// Dependencies
const fs        = require("fs");
const chalk     = require("chalk");
const minimist  = require("minimist");
const _         = require("lodash");

// Helpers
const print = (lines) => {
    lines.forEach(({ msg, color }) => {
        console.log(
            color ? chalk[color](msg) : msg
        );
    });
};

const whiteSpaces = (n) => {
    return " ".repeat(n);
}

const createFileFromTemplate = (name, type, filePath, templatePath, templateVariables, overwrite) => {
    const message = (typeMessage, data) => {
        const { type, name, filePath } = data;
        let message     = '';
        let action      = '';
        let actionColor = '';
    
        if (typeMessage === 'success') {
            action = 'created at';
            actionColor = 'green';
        } else if (typeMessage === 'error') {
            action = 'already exists at';
            actionColor = 'red';
        }
    
        message += `${chalk.yellow(type)}${whiteSpaces(12 - type.length)}`;
        message += `${chalk[actionColor](name)}${whiteSpaces(15 - name.length)}`;
        message += `${action}${whiteSpaces(20 - action.length)}`;
        message += `${chalk.grey(filePath)}`;
        
        print([{
            msg: message
        }]);
    }

    fs.readFile(templatePath, function(err, data) {
        if (err) {
            throw err;
        }

        const template  = _.template(data);
        const result    = template(templateVariables);

        let write = true;

        if (fs.existsSync(filePath) && !overwrite) {
            write = false;
        }

        if (write) {
            fs.writeFile(filePath, result, function(err) {
                if (err) {
                    throw err;
                }

                message('success', { type, name, filePath });
            });
        } else {
            message('error', { type, name, filePath });
        }
    });
}

const options = {
    default: {
        m: false,
        c: false,
        r: false,
        d: false,
        o: false,
        h: false,
    },
    alias: {
        n: 'name',
        m: 'model',
        c: 'controller',
        r: 'routes',
        d: 'docs',
        o: 'overwrite',
        h: 'help',
    },
};

const generator = () => {
    const args = minimist(process.argv.slice(2), options);

    // Help Menu
    if (Boolean(args.help)) {
        const lines = [];
        lines.push({ msg: 'Usage:', color: 'green' });
        lines.push({ msg: '\t npm run make -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make -- -name test', color: 'yellow' });
        lines.push({ msg: '' });
        lines.push({ msg: 'Options:', color: 'green' });
        lines.push({ msg: '  -h, --help       \t display help menu' });
        lines.push({ msg: '  -n, --name       \t name of the module to be created' });
        lines.push({ msg: '  -m, --model      \t create model               \t\t (default: false)' });
        lines.push({ msg: '  -c, --controller \t create controller          \t\t (default: false)' });
        lines.push({ msg: '  -r, --routes     \t create routes              \t\t (default: false)' });
        lines.push({ msg: '  -d, --docs       \t create Swagger basic doc   \t\t (default: false)' });
        lines.push({ msg: '  -o, --overwrite  \t if file exist overwrite it \t\t (default: false)' });

        print(lines);

        return null;
    }

    // Must exist module name
    if (!args.name) {
        const lines = [];
        lines.push({ msg: 'Error: name of module is required', color: 'red' });
        lines.push({ msg: 'Usage:', color: 'green' });
        lines.push({ msg: '\t npm run make -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make -- -name test', color: 'yellow' });

        print(lines);

        return null;
    }

    const name = _.capitalize(args.name);

    // Create Model
    if (args.model) {
        createFileFromTemplate(
            name,
            'Model',
            `./api/models/${name}Model.js`,
            './template/model.tmpl',
            { name, schema: `${name}Schema` },
            args.overwrite,
        );
    }

    // Create Controller
    if (args.controller) {
        createFileFromTemplate(
            name,
            'Controller',
            `./api/controllers/${name}Controller.js`,
            './template/controller.tmpl',
            { name, model: `${name}Model` },
            args.overwrite,
        );
    }

    // Create Routes
    if (args.routes) {
        createFileFromTemplate(
            name,
            'Routes',
            `./api/routes/${name}Routes.js`,
            './template/routes.tmpl',
            { name, controller: `${name}Controller` },
            args.overwrite,
        );
    }

    // Create Swagger Docs
    if (args.docs) {
        console.log('CREATE SWAGGER DOCS');
    }
};

module.exports = generator();
