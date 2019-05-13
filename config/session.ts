'use strict';

const {
    SESSION_AGE: age = '1209600000', // two weeks in milliseconds
    SESSION_SECRET: secret = 'my-super-secret-key',
} = process.env;

export interface Session {
    age: number;
    secret: string;
}

const session: Session = {
    age: parseInt(age, 10),
    secret,
};

export default session;
