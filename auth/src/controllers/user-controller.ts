import { UserModel } from 'sb-common';
import { Response, Request } from 'express';

import UserDto from '../dtos/User.dto';

export const userController = {
    createUser: async (req: Request, res: Response) => {
        try {
            const { img, username, email, password } = req.body;
            const newUser: UserDto = {
                username,
                email,
                password
            }

            if (img) {
                newUser.img = img;
            }

            UserModel.create(newUser);

            res.status(201).send({ username, email })
        } catch (err) {
            console.error(err);
        }
    },
    loginUser: async (req: Request, res: Response) => {
        try {
            UserModel.findOne({
                username: req.params.username
            })
                .select('_id')
                .select('-__v')
                .then((userData: any) => {
                    if (userData) {
                        // TODO: compare passwords with bcrypt
                    }
                })
                .catch((error: Error) => {
                    console.error(error);
                })
        } catch (err) {
            console.error(err);
        }
    }
}