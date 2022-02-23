import request from 'supertest';

import * as dbHandler from '../../test/db';
import { get } from '../server';

const app = get();

describe('User Controller', () => {
    beforeAll(async () => {
        await dbHandler.connect();
    });

    afterEach(async () => {
        await dbHandler.clearDatabase();
    });

    afterAll(async () => {
        await dbHandler.closeDatabase();
    })

    describe('Create User', () => {
        it('should create a new user when provided valid input', async () => {
            await request(app)
                .post('/api/users/signup')
                .send({
                    username: 'fikrys',
                    email: 'fikrys@gmail.com',
                    password: 'password'
                })
                .expect('Content-Type', /json/)
                .expect(201);
        });

        it('should not return a password', async () => {
            const response = await request(app)
                .post('/api/users/signup')
                .send({
                    username: 'fikcup',
                    email: 'fikcup@gmail.com',
                    password: 'password'
                })
                .expect('Content-Type', /json/)
                .expect(201);

            expect(response.body.password).not.toBeDefined();
        });

        it('should return a valid jwt token', async () => {

        });

        it('should contain the user\'s id on the token', async () => {

        });
    });
});