import multer from "multer";
import path from "path";

// Upload file configuration
export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename: (request, file, cb) => {
      !request ? console.log(request) : request;
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};