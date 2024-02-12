// Cài thư viện yarn add graphql express express-grapql nodemon prisma prisma/client mysql2 dotenv

import express from "express";

const app = express();
const PORT = 8086;

app.listen(PORT, () => {
  console.log(`BE starting with ${PORT}`);
});
