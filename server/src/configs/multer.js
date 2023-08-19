import multer from 'multer';

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../../public/assets")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const multerUpload = multer({ multerStorage })


export default multerUpload;