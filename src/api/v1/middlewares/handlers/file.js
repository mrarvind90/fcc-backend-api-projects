import multer from 'multer';

// Initially wanted to create error handlers via express-validator for this but
// the library defaults to express error handling, as such, we now have a custom error handler
// on the express level instead of the middleware level. However, keeping the folder/file structure
// this way so that we can add to it in the future
export const uploadFile = multer({ dest: './public/data/uploads/' }).single('upfile');
