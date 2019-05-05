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

const createFile = (name, overwrite) => (type, filePath, templatePath, templateVariables) => {
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

const getModelAttributes = function (excludedAttributes = ['_id', 'createdAt', 'updatedAt', '__v']) {
    const attributes = Object.entries(this.schema.paths)
                            .filter(([name]) =>
                                !excludedAttributes.includes(name)
                            ) 
                            .reduce((accumulator, [name, attribute]) => {
                                accumulator.push({
                                    name,
                                    type: attribute.instance.toLowerCase()
                                });

                                return accumulator;
                            }, []);

    return attributes;
}

const options = {
    default: {
        m: false,
        s: false,
        c: false,
        r: false,
        e: false,
        d: false,
        o: false,
        h: false,
    },
    alias: {
        n: 'name',
        m: 'model',
        s: 'service',
        c: 'controller',
        e: 'events',
        r: 'routes',
        d: 'docs',
        o: 'overwrite',
        h: 'help',
    },
};

const generator = async () => {
    const args = minimist(process.argv.slice(2), options);

    // Help Menu
    if (Boolean(args.help)) {
        const lines = [];
        lines.push({ msg: 'Usage:', color: 'green' });
        lines.push({ msg: '\t npm run make             -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make:model       -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make:service     -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make:controller  -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make:routes      -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make:events      -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make:docs        -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '\t npm run make:resource    -- [ -n name  | --name name ] [options]' });
        lines.push({ msg: '' });
        lines.push({ msg: '\t npm run make -- -name test -m', color: 'yellow' });
        lines.push({ msg: '\t npm run make:service test', color: 'yellow' });
        lines.push({ msg: '\t npm run make:model test', color: 'yellow' });
        lines.push({ msg: '\t npm run make:controller test', color: 'yellow' });
        lines.push({ msg: '\t npm run make:events test', color: 'yellow' });
        lines.push({ msg: '\t npm run make:routes test', color: 'yellow' });
        lines.push({ msg: '\t npm run make:resource test', color: 'yellow' });
        lines.push({ msg: '' });
        lines.push({ msg: 'Options:', color: 'green' });
        lines.push({ msg: '  -h, --help       \t display help menu' });
        lines.push({ msg: '  -n, --name       \t name of the module to be created' });
        lines.push({ msg: '  -m, --model      \t create model               \t\t (default: false)' });
        lines.push({ msg: '  -m, --service    \t create service             \t\t (default: false, required: model)' });
        lines.push({ msg: '  -c, --controller \t create controller          \t\t (default: false, required: service)' });
        lines.push({ msg: '  -e, --events     \t create events emitter      \t\t (default: false, required: service)' });
        lines.push({ msg: '  -r, --routes     \t create routes              \t\t (default: false, required: controller)' });
        lines.push({ msg: '  -d, --docs       \t create Swagger basic doc   \t\t (default: false, required: model)' });
        lines.push({ msg: '  -o, --overwrite  \t if file exist overwrite it \t\t (default: false)' });

        print(lines);

        return null;
    }

    // Must exist module name
    if (!args.name) {
        print([{
            msg: 'Error: name of module is required', color: 'red'
        }]);

        return null;
    }

    const name = _.capitalize(args.name);
    
    const createFileFromTemplate = createFile(name, args.overwrite);

    // Create Model
    if (args.model) {
        await createFileFromTemplate(
            'Model',
            `./api/models/${name}Model.js`,
            './template/model.tmpl',
            { name, schema: `${name}Schema` },
        );
    }

    // Create Service
    if (args.service) {
        await createFileFromTemplate(
            'Service',
            `./api/services/${name}Service.js`,
            './template/service.tmpl',
            { name, model: `${name}Model` },
        );
    }

    // Create Controller
    if (args.controller) {
        await createFileFromTemplate(
            'Controller',
            `./api/controllers/${name}Controller.js`,
            './template/controller.tmpl',
            { name, service: `${name}Service` },
        );
    }

    // Create Event Emitter
    console.log(args);
    if (args.events) {
        await createFileFromTemplate(
            'Event',
            `./api/events/${name}Event.js`,
            './template/event.tmpl',
            { name },
        );
    }

    // Create Routes
    if (args.routes) {
        await createFileFromTemplate(
            'Routes',
            `./api/routes/${name}Routes.js`,
            './template/routes.tmpl',
            { name, controller: `${name}Controller` },
        );
    }

    // Create Swagger Docs
    if (args.docs) {
        const modelFilePath = `./api/models/${name}Model.js`;

        if (fs.existsSync(modelFilePath)) {
            const model         = await require(modelFilePath);
            const attributes    = await getModelAttributes.call(model);
            
            await createFileFromTemplate(
                'Swagger',
                `./api/docs/${name}.yaml`,
                './template/swagger.tmpl',
                { name, path: name.toLowerCase(), attributes },
            );

        }
    }
};

module.exports = generator();
