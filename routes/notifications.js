var express = require('express');
var router = express.Router();
const notificationController = require('../controllers/notificationController');

/**
 * @swagger
 * /notifications:
 *  post:
 *      summary: Crear una suscripción a notificaciones
 *      description: Crea una suscripción a notificaciones
 *      tags: 
 *          - Notificaciones
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
 *                          seller:
 *                              type: string
 *                              description: uid del vendedor
 *                              example: CP9l8L1viLU77KrEOEDj2tNRCYq3
 *      responses:
 *          '201':
 *              description: Suscripción creada correctamente
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
 *                              example: Notificación creada con éxito
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
router.post('/', notificationController.createNotification);

/**
 * @swagger
 * /notifications/{uid}/{seller}:
 *  delete:
 *      summary: Eliminar una suscripción a notificaciones
 *      description: Elimina una suscripción a notificaciones
 *      tags: 
 *          - Notificaciones
 *      parameters:
 *          - in: path
 *            name: uid
 *            schema:
 *              type: string
 *            description: uid del usuario
 *            required: true
 *          - in: path
 *            name: seller
 *            schema:
 *              type: string
 *            description: uid del vendedor
 *            required: true
 *      responses:
 *          '200':
 *              description: Suscripción eliminada correctamente
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
 *                              example: Notificación eliminada con éxito
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
router.delete('/:uid/:seller', notificationController.deleteNotification);

module.exports = router;