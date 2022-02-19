import request from 'supertest';
import express from 'express';

const app = express();

describe('User Controller', () => {
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

        expect(response.body.password).not.toBeDefined()
    });
});