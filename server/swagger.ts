const paths = {
    '/auth/signUp': {
        post: {
            summary: 'New author registration',
            tags: ['Auth'],
            parameters: [
                {
                    name: 'Author sign up',
                    in: 'body',
                    description: 'User sign up model',
                    required: true,
                    schema: {
                        $ref: '#/definitions/signUp'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'User Registered and Auth Token granted',
                    schema: {
                        $ref: '#/responses/signUp'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/auth/signIn': {
        post: {
            summary: 'Email and password based login',
            tags: ['Auth'],
            parameters: [
                {
                    name: 'User login',
                    in: 'body',
                    description: 'User sign in model',
                    required: true,
                    schema: {
                        $ref: '#/definitions/signIn'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'Auth Token granted',
                    schema: {
                        $ref: '#/responses/signIn'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/user/addUser': {
        post: {
            summary: 'New author registration',
            tags: ['User'],
            parameters: [
                {
                    name: 'jwt',
                    in: 'header',
                    descriprion: 'JWT',
                    required: true,
                    type: 'string'
                },
                {
                    name: 'Users sign up',
                    in: 'body',
                    description: 'User sign up model',
                    required: true,
                    schema: {
                        $ref: '#/definitions/addUser'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'User Registered and Auth Token granted',
                    schema: {
                        $ref: '#/responses/addUser'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/user/editUser': {
        put: {
            summary: 'Edit author profile',
            tags: ['User'],
            parameters: [
                {
                    name: 'jwt',
                    in: 'header',
                    descriprion: 'JWT',
                    required: true,
                    type: 'string'
                },
                {
                    name: 'user_body',
                    in: 'body',
                    description: 'User edit model',
                    required: true,
                    schema: {
                        $ref: '#/definitions/editUser'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'User Registered and Auth Token granted',
                    schema: {
                        $ref: '#/responses/editUser'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/user/deleteUser': {
        delete: {
            summary: 'Remove the author from the database',
            tags: ['User'],
            parameters: [
                {
                    name: 'jwt',
                    in: 'header',
                    descriprion: 'JWT',
                    required: true,
                    type: 'string'
                },
                {
                    name: 'id_user',
                    in: 'body',
                    description: 'User ID',
                    required: true,
                    schema: {
                        $ref: '#/definitions/deleteUser'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'User has been deleted',
                    schema: {
                        $ref: '#/responses/deleteUser'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/book/addBook': {
        post: {
            summary: 'New book registration',
            tags: ['Book'],
            parameters: [
                {
                    name: 'Add book',
                    in: 'body',
                    description: 'Book add model',
                    required: true,
                    schema: {
                        $ref: '#/definitions/addBook'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'User Registered and Auth Token granted',
                    schema: {
                        $ref: '#/responses/addBook'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/book/editBook': {
        put: {
            summary: 'Edit book profile',
            tags: ['Book'],
            parameters: [
                {
                    name: 'book_body',
                    in: 'body',
                    description: 'Book edit model',
                    required: true,
                    schema: {
                        $ref: '#/definitions/editBook'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'Book profile edited',
                    schema: {
                        $ref: '#/responses/editBook'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/book/deleteBook': {
        delete: {
            summary: 'Remove the book from the database',
            tags: ['Book'],
            parameters: [
                {
                    name: 'id_book',
                    in: 'body',
                    description: 'Book ID',
                    required: true,
                    schema: {
                        $ref: '#/definitions/deleteBook'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'Book has been deleted',
                    schema: {
                        $ref: '#/responses/deleteBook'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/book/getAllBooksAndAuthors': {
        get: {
            summary: 'Get list of all books and thier authors',
            tags: ['Book'],
            responses: {
                '200': {
                    description: 'List of Books and their authors',
                    schema: {
                        $ref: '#/responses/getAllBooksAndAuthors'
                    }
                }
            },
            produces: ['application/json']
        }
    },
    '/book/getBooksByAuthor': {
        get: {
            summary: 'Get list of all books by author',
            tags: ['Book'],
            parameters: [
                {
                    name: 'author_id',
                    in: 'body',
                    description: 'Author ID',
                    required: true,
                    schema: {
                        $ref: '#/definitions/getBooksByAuthor'
                    }
                }
            ],
            responses: {
                '200': {
                    description: 'List of Books by author',
                    schema: {
                        $ref: '#/responses/getBooksByAuthor'
                    }
                }
            },
            produces: ['application/json']
        }
    },
}

const definitions = {
    signUp: {
        example: {
            first_name: 'Dominik',
            last_name: 'Bosnjak',
            email: 'dominik.bosnjak94@gmail.com',
            password: 'Password1'
        }
    },
    signIn: {
        example: {
            email: 'dominik.bosnjak94@gmail.com',
            password: 'Password1'
        }
    },
    addUser: {
        example: {
            first_name: 'Dominik',
            last_name: 'Bosnjak',
            email: 'dominik.bosnjak94@gmail.com',
            password: 'Password1'
        }
    },
    editUser: {
        example: {
            id_user: 2,
            first_name: 'Jane',
            last_name: 'Austen',
            email: 'jane.austen@gmail.com',
        }
    },
    deleteUser: {
        example: {
            id_user: 1,
        }
    },
    addBook: {
        example: {
            id_user: 2,
            book_name: "Sharknado 12 - The Sorrows of Young Shark "
        }
    },
    editBook: {
        example: {
            id_book: 1,
            book_name: 'Witcher - Time of Contempt'
        }
    },
    deleteBook: {
        example: {
            id_book: 1,
        }
    },
    getBooksByAuthor: {
        example: {
            id_user: 1,
        }
    }
}

const responses = {

}

const port = process.env.PORT || 3000;
const ip = process.env.IP || 'localhost';

export function generateDocumentation() {
    return {
        _swagger: '2.0',
        get swagger() {
            return this['_swagger'];
        },
        set swagger(value) {
            this['_swagger'] = value;
        },
        schemes: ['http', 'https'],
        info: {
            contact: {
                name: 'Dominik Bosnjak',
                email: 'dominik.bosnjak94@gmail.com'
            }
        },
        host: `${ip}:${port}`,
        basePath: '/api',
        paths,
        definitions,
        responses,
        parameters: {}
    };
}
