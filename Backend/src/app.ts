import app from "@server/server";

const port = process.env.PORT ?? 4000;

// Iniciar el servidor
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
