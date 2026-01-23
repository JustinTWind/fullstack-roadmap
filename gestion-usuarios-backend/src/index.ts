import { v4 as uuidv4 } from "uuid";
import { type IUser } from "./user.interface.ts";
import fs from "fs";

const FILE_PATH =
  "C:\\Users\\justi\\Documentos\\Programación\\roadmap-Sebas\\gestion-usuarios-backend\\usuarios.json";

let usuariosJson: IUser[] = [];

try {
  if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    usuariosJson = JSON.parse(data);
    console.log("✅ Datos cargados desde la RAM.\n");
  }
} catch (error) {
  console.error("❌ Error al cargar el archivo:", error);
}

const saveToDisk = (): void => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(usuariosJson, null, 2));
  } catch (error) {
    console.error("❌ Error al guardar en disco:", error);
  }
};

function añadirUsuario(givenObject: Omit<IUser, "id">): string {
  const User: IUser = { id: uuidv4(), ...givenObject };
  usuariosJson.push(User);
  saveToDisk();
  return "👍 El Usuario ha sido añadido en la base de datos";
}

const listUsuarios = (): IUser[] => usuariosJson;

const findUsuario = (id: string): IUser => {
  const foundUser = usuariosJson.find((userId) => userId.id === id);

  if (!foundUser) {
    throw new Error("Usuario No encontrado");
  }

  return foundUser;
};

const updateUsuario = (
  id: string,
  nuevosDatos: Partial<Omit<IUser, "id">>
): string => {
  const index = usuariosJson.findIndex((u) => u.id === id);
  if (index !== -1) {
    usuariosJson[index] = {
      ...usuariosJson[index],
      ...nuevosDatos,
      id,
    } as IUser;
    saveToDisk();
    return `⭐ El Usuario ${usuariosJson[index].nombre} Ha sido actualizado`;
  }
  return `✖️ No se ha podido encontrar el usuario`;
};

const deleteUsuario = (id: string): string => {
  const inicialLength = usuariosJson.length;
  usuariosJson = usuariosJson.filter((u) => u.id !== id);

  if (usuariosJson.length < inicialLength) {
    saveToDisk();
    return `⭐ El Usuario Ha sido eliminado`;
  }
  return `✖️ No se ha podido encontrar el usuario`;
};

añadirUsuario({
  nombre: "Mariana",
  apellido: "Marin",
  ciudad: "Medellín",
  edad: 24,
  correo: "marianamarin@gmail.com",
});

try {
  console.log(deleteUsuario("df7a2334-4ee8-41db-8722-1f0356fdceb0"));
} catch (error) {
  console.error(error);
}
