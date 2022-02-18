import { User } from 'sb-common';
import { Response, Request } from 'express';

export const userController = {
    loginUser: async (req: Request, res: Response) => {
        try {
            User.findOne({
                username: req.params.username
            })
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