var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */

/**
 * @swagger
 * /users/{uid}:
 *  get:
 *      summary: Obtener un solo usuario mediante su uid (id Firebase)
 *      description: Obtener un solo usuario mediante su uid (id Firebase).
 *      tags: 
 *          - Usuarios
 *      parameters:
 *          - in: params
 *            name: uid
 *            schema:
 *              type: string
 *              description: uid del usuario
 *      responses:
 *          '200':
 *              description: Usuario obtenido con éxito
 *              content:
 *                  application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                           error:
 *                              type: boolean
 *                              description: Indica que no hubo error
 *                              example: false
 *                           message:
 *                              type: string
 *                              description: Mensaje indicando éxito
 *                              example: Usuario encontrado
 *                           user:
 *                              type: object
 *                              properties:
 *                                  hasProfile:
 *                                      type: boolean
 *                                      description: Indica si el usuario tiene perfil
 *                                      example: true
 *          '404':
 *              description: Usuario no encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  description: Indica que ocurrió un error
 *                                  example: true
 *                              message:
 *                                  type: string
 *                                  description: Mensaje indicando error
 *                                  example: Usuario no encontrado
 */
router.get('/:uid', userController.getByUid);

/* POST users listing. */

/**
 * @swagger
 * /users:
 *  post:
 *      summary: Crear un usuario
 *      description: Registrar usuario en la base de datos
 *      tags: 
 *          - Usuarios
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          uid:
 *                              type: string
 *                              description: uid del usuario
 *                              example: CP9l8L1viLU77KrEOEDj2tNRCYq2
 *                          email:
 *                              type: string
 *                              description: email del usuario
 *                              example: usuario@proveedor.com
 *      responses:
 *          '201':
 *              description: Usuario creado con éxito
 *              content:
 *                  application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                           error:
 *                              type: boolean
 *                              description: Indica que no hubo error
 *                              example: false
 *                           message:
 *                              type: string
 *                              description: Mensaje indicando éxito
 *                              example: Usuario creado con éxito
 *          '400':
 *              description: Usuario ya existe en la base de datos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  description: Indica que ocurrió un error
 *                                  example: true
 *                              message:
 *                                  type: string
 *                                  description: Mensaje indicando error
 *                                  example: Usuario ya existe con ese correo electrónico
 *          '500':
 *              description: Error en el servidor
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  description: Indica que ocurrió un error
 *                                  example: true
 *                              message:
 *                                  type: string
 *                                  description: Mensaje indicando error
 *                                  example: Ocurrió un error inesperado
 *                              errorMessage:
 *                                  type: string
 *                                  description: Mensaje descriptivo sobre el error
 *                                  example: Error en el servidor
 */

router.post('/', userController.create);

module.exports = router;