"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livroRouter = void 0;
const express_1 = require("express");
const livro_1 = require("../controller/livro");
const router = (0, express_1.Router)();
exports.livroRouter = router;
/**
 * @swagger
 * components:
 *     schemas:
 *         Livro:
 *             type: object
 *             required:
 *                 - titulo
 *                 - autor
 *             properties:
 *                 id:
 *                     type: string
 *                     description: id auto-gerado do livro
 *                 titulo:
 *                     type: string
 *                     description: nome do livro
 *                 autor:
 *                     type: string
 *                     description: nome do autor do livro
 *             example:
 *                 id: fgdsg43
 *                 titulo: tit do livro
 *                 autor: Leee
 */
/**
 * @swagger
 * /livro:
 *      get:
 *          summary: Retorna todos os livros da lista
 *          tags: [Livros]
 *          description: Send a message to the server and get a response added to the original text.
 *          responses:
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Internal server error
 */
router.get("/livro", livro_1.findAll);
/**
 * @swagger
 * /livro/{id}:
 *      get:
 *          summary: Pega o livro pelo id
 *          tags: [Livros]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: Send a message to the server and get a response added to the original text.
 *          responses:
 *              200:
 *                  description: Descrição do Livro com id
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Internal server error
 */
router.get("/livro/:id", livro_1.findLivro);
/**
 * @swagger
 * /livro:
 *     post:
 *         summary: Adiciona livro na lista
 *         tags: [Livros]
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         $ref: '#/components/schemas/Livro'

 *         responses:
 *             201:
 *                 description: Livro Criado com sucesso
 */
router.post("/livro", livro_1.addLivro);
