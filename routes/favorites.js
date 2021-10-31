var express = require('express');
var router = express.Router();
const favoriteController = require('../controllers/favoriteController');

/* GET favorites listing. */

/**
 * @swagger
 * /favorites/{userId}:
 *  get:
 *      summary: Obtener los favoritos de un usuario
 *      description: Obtiene los favoritos de un usuario
 *      tags: 
 *          - Favoritos
 *      parameters:
 *          - in: path
 *            name: userId
 *            schema:
 *              type: string
 *            description: uid del vendedor
 *            required: true
 *      responses:
 *          '200':
 *              description: Favoritos obtenidos correctamente
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
 *                              example: Favoritos obtenidos
 *                           favorites:
 *                              type: array
 *                              description: Arreglo de favoritos
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          description: Id del producto
 *                                          example: 507f1f77bcf86cd799439011
 *                                      name:
 *                                          type: string
 *                                          description: nombre del producto
 *                                          example: Bicicleta
 *                                      images:
 *                                          type: array
 *                                          description: Arreglo de url de imagenes del producto
 *                                          items:
 *                                              type: string
 *                                              description: url de imagen
 *                                              example: https://firebasestorage.googleapis.com/v0/b/express-server-b8f0f.appspot.com/o/images%2Fbicicleta.jpg
 *                                      brand:
 *                                          type: string
 *                                          description: Marca del producto
 *                                          example: Corsario
 *                                      price:
 *                                          type: number
 *                                          description: precio del producto
 *                                          example: 250
 *                                      description:
 *                                          type: string
 *                                          description: descripción del producto
 *                                          example: Bicicleta de montaña
 *                                      category:
 *                                          type: string
 *                                          description: categoria del producto
 *                                          example: Bicicletas
 *                                      condition:
 *                                          type: string
 *                                          description: condición del producto
 *                                          example: Nuevo
 *                                      seller:
 *                                          type: string
 *                                          description: uid del vendedor
 *                                          example: 507f1f77bcf86cd799439011
 *                                      location:
 *                                          type: object
 *                                          description: ubicación del producto
 *                                          properties:
 *                                              latitude:
 *                                                  type: number
 *                                                  description: latitud del producto
 *                                                  example: -34.603722
 *                                              longitude:
 *                                                  type: number
 *                                                  description: longitud del producto
 *                                                  example: -58.381592
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

router.get('/:userId', favoriteController.getByUser);

/**
 * @swagger
 * /favorites/{userId}/{productId}:
 *  get:
 *      summary: Obtener los favoritos de un usuario
 *      description: Obtiene los favoritos de un usuario
 *      tags: 
 *          - Favoritos
 *      parameters:
 *          - in: path
 *            name: userId
 *            schema:
 *              type: string
 *            description: uid del vendedor
 *            required: true
 *          - in: path
 *            name: productId
 *            schema:
 *              type: string
 *            description: id del producto
 *            required: true
 *      responses:
 *          '200':
 *              description: Favorito encontrado
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
 *                              example: El producto está en favoritos
 *                           isFavorite:
 *                              type: boolean
 *                              description: Indica si el producto es favorito
 *                              example: true
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
router.get('/:userId/:productId', favoriteController.isFavorite);

/* POST favorites listing. */

/**
 * @swagger
 * /favorites:
 *  post:
 *      summary: Agregar un favorito
 *      description: Agrega un favorito
 *      tags: 
 *          - Favoritos
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user:
 *                              type: string
 *                              description: uid del usuario
 *                              example: CP9l8L1viLU77KrEOEDj2tNRCYq2
 *                          product:
 *                              type: string
 *                              description: id del producto
 *                              example: 507f191e810c19729de860ea
 *      responses:
 *          '201':
 *              description: Producto agregado correctamente
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
 *                              example: Producto añadido al favoritos
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
router.post('/', favoriteController.create);

/* DELETE favorites listing */

/**
 * @swagger
 * /favorites/{productId}:
 *  delete:
 *      summary: Eliminar un favorito
 *      description: Elimina un favorito
 *      tags: 
 *          - Favoritos
 *      parameters:
 *          - in: path
 *            name: productId
 *            schema:
 *              type: string
 *            description: id del producto
 *            required: true
 *      responses:
 *          '200':
 *              description: Favorito eliminado correctamente
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
 *                              example: Producto eliminado de favoritos
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
router.delete('/:productId', favoriteController.delete);

module.exports = router;