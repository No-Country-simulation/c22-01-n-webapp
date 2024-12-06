import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  return fileName.replace(".routes", "").split(".").shift();
};

console.log("Cargando rutas..."); // Agregar un log aquí

readdirSync(PATH_ROUTER).forEach((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    console.log(`Cargando ruta: ${cleanName}`); // Agregar log para verificar el nombre del archivo de ruta
    import(`./${cleanName}.routes`)
      .then((moduleRouter) => {
        router.use(`/${cleanName}`, moduleRouter.router);
      })
      .catch((error) => {
        console.error(`Error cargando el archivo ./routes/${fileName}:`, error);
      });
  }
});

export { router };
