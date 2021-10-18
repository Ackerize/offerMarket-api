var express = require('express');
var router = express.Router();
const reviewController = require('../controllers/reviewController');

/* GET reviews listing. */

/**
 * @swagger
 * /reviews/{sellerUid}:
 *  get:
 *      summary: Obtener las reseñas de un vendedor
 *      description: Obtiene las reseñas de un vendedor
 *      tags: 
 *          - Reseñas
 *      parameters:
 *          - in: params
 *            name: sellerUid
 *            schema:
 *              type: string
 *              description: uid del vendedor
 *      responses:
 *          '200':
 *              description: Reseñas obtenidas con éxito
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
 *                              example: Reseñas obtenidas con éxito
 *                           reviews:
 *                              type: array
 *                              description: Arreglo de reseñas
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          description: Id de la reseña
 *                                          example: 507f1f77bcf86cd799439011
 *                                      author:
 *                                          type: string
 *                                          description: nombre del autor
 *                                          example: Juan Perez
 *                                      rating:
 *                                          type: number
 *                                          description: calificación del vendedor
 *                                          example: 3
 *                                      seller:
 *                                          type: string
 *                                          description: uid del vendedor
 *                                          example: José Mendez
 *                                      comment:
 *                                          type: string
 *                                          description: comentario del vendedor
 *                                          example: Buen vendedor  
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
router.get('/:sellerUid', reviewController.getBySeller);

/* POST reviews listing. */

/**
 * @swagger
 * /reviews:
 *  post:
 *      summary: Crear una reseña
 *      description: Crea una reseña
 *      tags: 
 *          - Reseñas
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          author:
 *                              type: string
 *                              description: uid del autor
 *                              example: CP9l8L1viLU77KrEOEDj2tNRCYq2
 *                          seller:
 *                              type: string
 *                              description: uid del vendedor
 *                              example: CP9l8L1viLU77KrEOEDj2tNRCYq2
 *                          rating:
 *                              type: number
 *                              description: calificación del vendedor
 *                              example: 3
 *                          comment:
 *                              type: string
 *                              description: comentario del vendedor
 *                              example: Buen vendedor
 *      responses:
 *          '201':
 *              description: Reseña creada con éxito
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
 *                              example: Reseña guardada con éxito
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
router.post('/', reviewController.create);

module.exports = router;