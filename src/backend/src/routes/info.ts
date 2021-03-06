import { isLoggedIn } from '@shared/passport.utils';
import checkDiskSpace from 'check-disk-space';
import { Request, Response, Router } from 'express';

import { ErrorResponse } from '../../../frontend/src/app/backend-datatypes/response.model';
import { BaseResponse } from '../models/response.model';
import { User } from '../models/user.model';


// Init shared
const router = Router();

router.get('/user', isLoggedIn(), async (req: Request, res: Response) => {
    res.json(new BaseResponse<User>(res.locals.user as User));
});

router.get('/userid', isLoggedIn(), async (req: Request, res: Response) => {
    res.json(new BaseResponse<string>((res.locals.user as User).id));
});

/** TODO: Make disk-space pretty */
router.get('/disk-space', isLoggedIn(), async (req: Request, res: Response) => {
    if (res.locals.isSuperUser) {
        let space;
        if (process.env.NODE_ENV === 'production') {
            space = await checkDiskSpace('usr/src/app/files');
        } else {
            space = await checkDiskSpace('C:\\usr\\src\\app\\files');
        }
        res.json(new BaseResponse(space));
    } else {
        res.json(new ErrorResponse('You need to be superuser to access this function.'));
    }
});

export default router;
