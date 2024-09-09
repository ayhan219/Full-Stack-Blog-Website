const multer = require('multer');
const path = require('path');


// Resimlerin kaydedileceği dizini belirleyin


const uploadPath = path.join(__dirname, '../uploads');

// Multer konfigürasyonu
const storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Dosya adını benzersiz yapma
  }
});

const upload = multer({ storage });

module.exports = upload;