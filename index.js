// Cài thư viện yarn add graphql express express-grapql nodemon prisma prisma/client mysql2 dotenv

import express from "express";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

const rootSchema = buildSchema(`
    type User{
        id:Int
        hoTen: String
    }

    type rootMutation{
    createUser: String
}
    type rootQuery{
    getUser(id: String, hoTen: String): User
    }
schema{
    query: rootQuery
    mutation: rootMutation
}`);

const resolver = {
  getUser: ({ id, hoTen }) => {
    // return `getUser: ${id},${hoTen}`;
    return {
      id: id,
      hoTen: hoTen,
    };
  },
  createUser: () => {
    return "createUser";
  },
};

const app = express();
const PORT = 8086;

app.use(
  "/graph",
  graphqlHTTP({
    schema: rootSchema, // Định nghĩa Schema cho BE và FE xài
    rootValue: resolver, // Định nghĩa function cho các API
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`BE starting with ${PORT}`);
});
