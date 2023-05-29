import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Verificar el tipo de archivo permitido
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // Aceptar el archivo
    cb(null, true);
  } else {
    // Rechazar el archivo
    cb(new Error("Tipo de archivo no válido. Solo se permiten archivos JPEG o PNG."), false);
  }
};

const limits = {
  fileSize: 1024 * 1024 * 10, // 10 MB
};

const Multer = multer({
  storage,
  limits,
  fileFilter,
});

export default Multer;