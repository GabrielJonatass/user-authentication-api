import { Router, Request, Response, NextFunction, response } from "express";
import { StatusCodes }  from 'http-status-codes';

// get /users
// get / users/:uuid
// post /users
// put /users/: uuid
// delete /users/ : uuid

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
        const users = [{ userName: 'Gabriel'}];
        res.status(StatusCodes.OK).send(users);
});

usersRoute.get('./users/:uuid',  (req: Request<{ uuid : String }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid;
        res.sendStatus(StatusCodes.OK).send({ uuid});
});

usersRoute.post('./users', (req: Request, res: Response, next: NextFunction) => {
        const newUser = req.body;
        res.send(StatusCodes.CREATED).send( newUser);
});

usersRoute.put('/users/: uuid' , (req: Request<{ uuid : String }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid;
        const modifiedUser =req.body;
        
        modifiedUser.uuid = uuid;

        res.status(StatusCodes.OK).send(modifiedUser);
});

usersRoute.delete('/users/: uuid', (req: Request<{ uuid : String }>, res: Response, next: NextFunction) => {
        response.sendStatus(StatusCodes.OK);
});
        
export default usersRoute;