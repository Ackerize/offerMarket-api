var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

/* GET profiles listing. */

/**
 * @swagger
 * /profiles/{uid}:
 *  get:
 *      summary: Obtener el perfil de un usuario por su id
 *      description: Obtiene el perfil de un usuario por su id
 *      tags: 
 *          - Perfiles
 *      parameters:
 *          - in: path
 *            name: uid
 *            schema:
 *              type: string
 *            description: uid del usuario
 *            required: true
 *      responses:
 *          '200':
 *              description: Perfil obtenido correctamente
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
 *                              example: Perfil encontrado
 *                           data:
 *                              type: object
 *                              description: Datos del perfil
 *                              properties:
 *                                  user:
 *                                      type: string
 *                                      description: uid del usuario
 *                                      example: CP9l8L1viLU77KrEOEDj2tNRCYq2
 *                                  name:
 *                                      type: string
 *                                      description: nombre del usuario
 *                                      example: Juan Gomez
 *                                  email:
 *                                      type: string
 *                                      description: email del usuario
 *                                      example: jgomez@gmail.com
 *                                  phone:
 *                                      type: string
 *                                      description: telefono del usuario
 *                                      example: +56912345678
 *                                  photo:
 *                                      type: string
 *                                      description: url de la foto del usuario
 *                                      example: https://firebasestorage.googleapis.com/v0/b/express-server-d8f0d.appspot.com/o/profile_photos%2Fprofile_photo_1.jpg
 *                                  location:
 *                                      type: object
 *                                      description: ubicacion del usuario
 *                                      properties:
 *                                          latitude:
 *                                              type: number
 *                                              description: latitud del usuario
 *                                              example: -33.45
 *                                          longitude:
 *                                              type: number
 *                                              description: longitud del usuario
 *                                              example: -70.66
 *                                          name:
 *                                              type: string
 *                                              description: nombre de la ubicacion del usuario
 *                                              example: Santa Tecla
 *          '404':
 *              description: Perfil no encontrado
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
 *                                  example: No se encontró el perfil
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

router.get('/:uid', profileController.getOne);

/* POST profiles listing. */

/**
 * @swagger
 * /profiles:
 *  post:
 *      summary: Crear un nuevo perfil
 *      description: Crear un nuevo perfil
 *      tags: 
 *          - Perfiles
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
 *                          name:
 *                              type: string
 *                              description: nombre del usuario
 *                              example: Juan Gomez
 *                          email:
 *                              type: string
 *                              description: email del usuario
 *                              example: jgomez@gmail.com
 *                          phone:
 *                              type: string
 *                              description: telefono del usuario
 *                              example: +56912345678
 *                          photo:
 *                              type: string
 *                              description: url de la foto del usuario
 *                              example: https://firebasestorage.googleapis.com/v0/b/express-server-d8f0d.appspot.com/o/profile_photos%2Fprofile_photo_1.jpg
 *                          location:
 *                              type: object
 *                              description: ubicacion del usuario
 *                              properties:
 *                                  latitude:
 *                                      type: number
 *                                      description: latitud del usuario
 *                                      example: -33.45
 *                                  longitude:
 *                                      type: number
 *                                      description: longitud del usuario
 *                                      example: -70.66
 *                                  name:
 *                                      type: string
 *                                      description: nombre de la ubicacion del usuario
 *                                      example: Santa Tecla
 *      responses:
 *          '201':
 *              description: Perfil creado correctamente
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
 *                              example: Perfil creado con éxito
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
router.post('/', profileController.create);

/**
 * @swagger
 * /profiles/{uid}:
 *  put:
 *      summary: Actualizar un perfil
 *      description: Actualizar un perfil
 *      tags: 
 *          - Perfiles
 *      parameters:
 *          - in: path
 *            name: uid
 *            schema:
 *              type: string
 *            description: uid del usuario
 *            required: true
 *      responses:
 *          '200':
 *              description: Perfil actualizado correctamente
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
 *                              example: Perfil encontrado
 *                           data:
 *                              type: object
 *                              description: Datos del perfil
 *                              properties:
 *                                  user:
 *                                      type: string
 *                                      description: uid del usuario
 *                                      example: CP9l8L1viLU77KrEOEDj2tNRCYq2
 *                                  name:
 *                                      type: string
 *                                      description: nombre del usuario
 *                                      example: Juan Gomez
 *                                  email:
 *                                      type: string
 *                                      description: email del usuario
 *                                      example: jgomez@gmail.com
 *                                  phone:
 *                                      type: string
 *                                      description: telefono del usuario
 *                                      example: +56912345678
 *                                  photo:
 *                                      type: string
 *                                      description: url de la foto del usuario
 *                                      example: https://firebasestorage.googleapis.com/v0/b/express-server-d8f0d.appspot.com/o/profile_photos%2Fprofile_photo_1.jpg
 *                                  location:
 *                                      type: object
 *                                      description: ubicacion del usuario
 *                                      properties:
 *                                          latitude:
 *                                              type: number
 *                                              description: latitud del usuario
 *                                              example: -33.45
 *                                          longitude:
 *                                              type: number
 *                                              description: longitud del usuario
 *                                              example: -70.66
 *                                          name:
 *                                              type: string
 *                                              description: nombre de la ubicacion del usuario
 *                                              example: Santa Tecla
 *          '404':
 *              description: Perfil no encontrado
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
 *                                  example: No se encontró el perfil
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
router.put('/:uid', profileController.update);

module.exports = router;