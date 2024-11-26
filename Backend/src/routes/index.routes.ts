import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  return fileName.replace(".routes", "").split(".").shift();
};

readdirSync(PATH_ROUTER).forEach((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}.routes`)
      .then((moduleRouter) => {
        console.log(`Cargando ruta: /${cleanName}`);
        router.use(`/${cleanName}`, moduleRouter.router);
      })
      .catch((error) => {
        console.error(`Error cargando el archivo ./routes/${fileName}:`, error);
      });
  }
});

export { router };
