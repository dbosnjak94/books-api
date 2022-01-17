const paths = {
  "/auth/signUp": {
    post: {
      summary: "New author registration",
      tags: ["Auth"],
      parameters: [
        {
          name: "Author sign up",
          in: "body",
          description: "User sign up model",
          required: true,
          schema: {
            $ref: "#/definitions/signUp",
          },
        },
      ],
      responses: {
        "200": {
          description: "User Registered and Auth Token granted",
          schema: {
            $ref: "#/responses/signUp",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/auth/signIn": {
    post: {
      summary: "Email and password based login",
      tags: ["Auth"],
      parameters: [
        {
          name: "User login",
          in: "body",
          description: "User sign in model",
          required: true,
          schema: {
            $ref: "#/definitions/signIn",
          },
        },
      ],
      responses: {
        "200": {
          description: "Auth Token granted",
          schema: {
            $ref: "#/responses/signIn",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/user/addUser": {
    post: {
      summary: "New author registration",
      tags: ["User"],
      parameters: [
        {
          name: "jwt",
          in: "header",
          descriprion: "JWT",
          required: true,
          type: "string",
        },
        {
          name: "Users sign up",
          in: "body",
          description: "User sign up model",
          required: true,
          schema: {
            $ref: "#/definitions/addUser",
          },
        },
      ],
      responses: {
        "200": {
          description: "User Registered and Auth Token granted",
          schema: {
            $ref: "#/responses/addUser",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/user/editUser": {
    put: {
      summary: "Edit author profile",
      tags: ["User"],
      parameters: [
        {
          name: "jwt",
          in: "header",
          descriprion: "JWT",
          required: true,
          type: "string",
        },
        {
          name: "user_body",
          in: "body",
          description: "User edit model",
          required: true,
          schema: {
            $ref: "#/definitions/editUser",
          },
        },
      ],
      responses: {
        "200": {
          description: "User Registered and Auth Token granted",
          schema: {
            $ref: "#/responses/editUser",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/user/deleteUser": {
    delete: {
      summary: "Remove the author from the database",
      tags: ["User"],
      parameters: [
        {
          name: "jwt",
          in: "header",
          descriprion: "JWT",
          required: true,
          type: "string",
        },
        {
          name: "id_user",
          in: "body",
          description: "User ID",
          required: true,
          schema: {
            $ref: "#/definitions/deleteUser",
          },
        },
      ],
      responses: {
        "200": {
          description: "User has been deleted",
          schema: {
            $ref: "#/responses/deleteUser",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/user/getAllUsers": {
    get: {
      summary: "Get list of all authors",
      tags: ["User"],
      parameters: [
        {
          name: "jwt",
          in: "header",
          descriprion: "JWT",
          required: true,
          type: "string",
        },
      ],
      responses: {
        "200": {
          description: "List of Books and their authors",
          schema: {
            $ref: "#/responses/getAllUsers",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/book/addBook": {
    post: {
      summary: "New book registration",
      tags: ["Book"],
      parameters: [
        {
          name: "Add book",
          in: "body",
          description: "Book add model",
          required: true,
          schema: {
            $ref: "#/definitions/addBook",
          },
        },
      ],
      responses: {
        "200": {
          description: "User Registered and Auth Token granted",
          schema: {
            $ref: "#/responses/addBook",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/book/editBook": {
    put: {
      summary: "Edit book profile",
      tags: ["Book"],
      parameters: [
        {
          name: "book_body",
          in: "body",
          description: "Book edit model",
          required: true,
          schema: {
            $ref: "#/definitions/editBook",
          },
        },
      ],
      responses: {
        "200": {
          description: "Book profile edited",
          schema: {
            $ref: "#/responses/editBook",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/book/deleteBook": {
    delete: {
      summary: "Remove the book from the database",
      tags: ["Book"],
      parameters: [
        {
          name: "id_book",
          in: "body",
          description: "Book ID",
          required: true,
          schema: {
            $ref: "#/definitions/deleteBook",
          },
        },
      ],
      responses: {
        "200": {
          description: "Book has been deleted",
          schema: {
            $ref: "#/responses/deleteBook",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/book/getAllBooksAndAuthors": {
    get: {
      summary: "Get list of all books and their authors",
      tags: ["Book"],
      responses: {
        "200": {
          description: "List of Books and their authors",
          schema: {
            $ref: "#/responses/getAllBooksAndAuthors",
          },
        },
      },
      produces: ["application/json"],
    },
  },
  "/book/getBooksByAuthor/{idUser}": {
    get: {
      summary: "Get list of all books by author",
      tags: ["Book"],
      parameters: [
        {
          name: "idUser",
          in: "path",
          descriprion: "Specific user ID",
          required: true,
          type: "number",
        },
      ],
      responses: {
        "200": {
          description: "List of Books by author",
          schema: {
            $ref: "#/responses/getBooksByAuthor",
          },
        },
      },
      produces: ["application/json"],
    },
  },
};

const definitions = {
  signUp: {
    example: {
      first_name: "Dominik",
      last_name: "Bosnjak",
      email: "dominik.bosnjak94@gmail.com",
      password: "Password1",
    },
  },
  signIn: {
    example: {
      email: "dominik.bosnjak94@gmail.com",
      password: "Password1",
    },
  },
  addUser: {
    example: {
      first_name: "Dominik",
      last_name: "Bosnjak",
      email: "dominik.bosnjak94@gmail.com",
      password: "Password1",
    },
  },
  editUser: {
    example: {
      id_user: 2,
      first_name: "Jane",
      last_name: "Austen",
      email: "jane.austen@gmail.com",
    },
  },
  deleteUser: {
    example: {
      id_user: 1,
    },
  },
  addBook: {
    example: {
      id_user: 2,
      book_name: "Sharknado 12 - The Sorrows of Young Shark ",
    },
  },
  editBook: {
    example: {
      id_book: 1,
      book_name: "Witcher - Time of Contempt",
    },
  },
  deleteBook: {
    example: {
      id_book: 1,
    },
  },
};

const responses = {
  signUp: {
    example: {
      status: 200,
      data: {
        id_user: 35,
        id_role: 2,
        email: "dominik.bosnjak943@gmail.com",
        first_name: "Dominik2",
        last_name: "Bosnjak2",
        address: null,
        created_at: "2022-01-17 14:49:27",
        updated_at: null,
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkX3VzZXIiOjM1LCJyb2xlIjoyfSwiaWF0IjoxNjQyNDI3MzY3fQ.FLUj7L5HQzCw8z2FwM0bFZPZ8JMWxoMpb6EQC6lOU-Q",
      message: "New user has been created",
    },
  },
  signIn: {
    example: {
      status: 200,
      data: {
        id_user: 35,
        id_role: 2,
        email: "dominik.bosnjak943@gmail.com",
        first_name: "Dominik2",
        last_name: "Bosnjak2",
        address: null,
        created_at: "2022-01-17 14:49:27",
        updated_at: null,
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkX3VzZXIiOjM1LCJyb2xlIjoyfSwiaWF0IjoxNjQyNDI3MzY3fQ.FLUj7L5HQzCw8z2FwM0bFZPZ8JMWxoMpb6EQC6lOU-Q",
      message: "New user has been signed in",
    },
  },
  addUser: {
    example: {
      example: {
        status: 200,
        data: {
          id_user: 35,
          id_role: 2,
          email: "dominik.bosnjak943@gmail.com",
          first_name: "Dominik2",
          last_name: "Bosnjak2",
          address: null,
          created_at: "2022-01-17 14:49:27",
          updated_at: null,
        },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkX3VzZXIiOjM1LCJyb2xlIjoyfSwiaWF0IjoxNjQyNDI3MzY3fQ.FLUj7L5HQzCw8z2FwM0bFZPZ8JMWxoMpb6EQC6lOU-Q",
        message: "New user has been created",
      },
    },
  },
  editUser: {
    example: {
      status: 200,
      data: 1,
      message: "Author info has been edited.",
    },
  },
  deleteUser: {
    example: {
      token: "",
      message: "Author has been deleted",
    },
  },
  getAllUsers: {
    example: {
      status: 200,
      data: [
        {
          id_user: 1,
          id_role: 1,
          email: "dominik.bosnjak94@gmail.com",
          password: "$2b$10$Mawf4.L7nEJWHVidHO7qSuB4i23zDl1kV2fxjT7JJQ67f1OPCeXQS",
          first_name: "Dominik",
          last_name: "Bosnjak",
          address: "Elm Street",
          created_at: "2022-01-10 23:58:02",
          updated_at: null
        },
        {
          id_user: 7,
          id_role: 2,
          email: "george.raymond.richard.martin@gmail.com",
          password: "$2b$10$Ji7kmtg/whJwWzwGmXkx9OjtqBcAwd9Zuj6mlGAFleuW5r.235xLq",
          first_name: "George Raymond Richard",
          last_name: "Martin",
          address: null,
          created_at: "2022-01-13 10:34:43",
          updated_at: null
        },
        {
          id_user: 8,
          id_role: 2,
          email: "andrzej.sapkowski@gmail.com",
          password: "$2b$10$7ONWBEYYF0NfR./M9/4JeeQI8439PUJnG5k02nvkk.iLMQu57oLrG",
          first_name: "Andrzej",
          last_name: "Sapkowski",
          address: null,
          created_at: "2022-01-13 10:49:48",
          updated_at: null
        },
    }
  },
  addBook: {
    example: {
      id_user: 2,
      book_name: "Sharknado 12 - The Sorrows of Young Shark ",
    },
  },
  editBook: {
    example: {
      message: "Book has been edited",
    },
  },
  deleteBook: {
    example: {
      message: "Book has been deleted",
    },
  },
  getAllBooksAndAuthors: {
    example: {
      status: 200,
      data: [
        {
          id_book: 15,
          first_name: "George Raymond Richard",
          last_name: "Martin",
          book_name: "A Game of Thrones"
        },
        {
          id_book: 16,
          first_name: "George Raymond Richard",
          last_name: "Martin",
          book_name: "A Clash of Kings"
        },
        {
          id_book: 17,
          first_name: "George Raymond Richard",
          last_name: "Martin",
          book_name: "A Storm of Swords"
        },
        {
          id_book: 18,
          first_name: "George Raymond Richard",
          last_name: "Martin",
          book_name: "A Feast for Crows"
        },
        {
          id_book: 19,
          first_name: "George Raymond Richard",
          last_name: "Martin",
          book_name: "A Dance with Dragons"
        },
        {
          id_book: 20,
          first_name: "George Raymond Richard",
          last_name: "Martin",
          book_name: "The Winds of Winter"
        },
        {
          id_book: 21,
          first_name: "Andrzej",
          last_name: "Sapkowski",
          book_name: "The Last Wish"
        },
        {
          id_book: 22,
          first_name: "Andrzej",
          last_name: "Sapkowski",
          book_name: "Sword of Destiny"
        },
    },
    getBooksByAuthor: {
      example: {
        status: 200,
        data: [
          {
            id_book: 30,
            id_user: 10,
            book_name: "Harry Potter and the Philosopher's Stone"
          },
          {
            id_book: 31,
            id_user: 10,
            book_name: "Harry Potter and the Chamber of Secrets"
          },
          {
            id_book: 32,
            id_user: 10,
            book_name: "Harry Potter and the Prisoner of Azkaban"
          },
          {
            id_book: 33,
            id_user: 10,
            book_name: "Harry Potter and the Goblet of Fire"
          },
          {
            id_book: 34,
            id_user: 10,
            book_name: "Harry Potter and the Order of the Phoenix"
          }
        ],
        message: "Book has been deleted from the database"
      }
    }
  }
};

const port = process.env.PORT || 3000;
const ip = process.env.IP || "localhost";

export function generateDocumentation() {
  return {
    _swagger: "2.0",
    get swagger() {
      return this["_swagger"];
    },
    set swagger(value) {
      this["_swagger"] = value;
    },
    schemes: ["http", "https"],
    info: {
      contact: {
        name: "Dominik Bosnjak",
        email: "dominik.bosnjak94@gmail.com",
      },
    },
    host: `${ip}:${port}`,
    basePath: "/api",
    paths,
    definitions,
    responses,
    parameters: {},
  };
}
