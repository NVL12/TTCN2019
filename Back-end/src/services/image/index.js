// SET STORAGE
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './src/uploads')
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  //cb function has 2 parameters are err and boolean to indicate if the file should be accepted
  const type = file.mimetype;
  return (type === 'image/jpeg' || type === 'image/png') ? cb(null, true) : cb(null, false);
}

const limit = {
  //Max file size (in bytes)
  fileSize: 5 * 1024 * 1024 //5MB
}
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limit
})
