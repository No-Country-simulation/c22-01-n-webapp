import app from "@server/server";
import { AppDataSource } from "@database/db";

const port = process.env.PORT ?? 4000;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Connected to the database");
    app.listen(port, () =>
      console.log(`Server is running at http://localhost:${port}`)
    );
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error starting the server:", err.message);
    }
  }
}

main();
