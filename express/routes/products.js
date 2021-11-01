var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET products listing. */

/**
 * @swagger
 * /products:
 *  get:
 *      summary: Obtener todos los productos en base a filtros
 *      description: Obtiene todos los productos
 *      tags: 
 *          - Productos
 *      parameters:
 *          - in: query
 *            name: category
 *            schema:
 *              type: string
 *            description: Categoría del producto
 *          - in: query
 *            name: sort
 *            schema:
 *              type: string
 *              enum: [asc, desc]
 *            description: Tipo de ordenamiento (ascendente o descendente)
 *          - in: query
 *            name: sortby
 *            schema:
 *              type: string
 *              enum: [name, price, createdAt]
 *            description: Propiedad en la cual se basará el ordenamiento
 *          - in: query
 *            name: page
 *            schema:
 *              type: string
 *            description: Número de página
 *          - in: query
 *            name: size
 *            schema:
 *              type: string
 *            description: Productos a mostrar por página
 *      responses:
 *          '200':
 *              description: Productos obtenidos exitosamente
 *              content:
 *                  application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                           error:
 *                              type: boolean
 *                              description: Indica que no hubo error
 *                              example: false
 *                           products:
 *                              type: array
 *                              description: Arreglo de productos
 *                              items:
 *                                  type: object
 *                                  properties:
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
router.get('/', productController.getAll);

/**
 * @swagger
 * /products/user/{uid}:
 *  get:
 *      summary: Obtener todos los productos de un usuario
 *      description: Obtiene todos los productos de un usuario
 *      tags: 
 *          - Productos
 *      parameters:
 *          - in: path
 *            name: uid
 *            schema:
 *              type: string
 *            description: uid del usuario
 *          - in: query
 *            name: category
 *            schema:
 *              type: string
 *            description: Categoría del producto
 *          - in: query
 *            name: sort
 *            schema:
 *              type: string
 *              enum: [asc, desc]
 *            description: Tipo de ordenamiento (ascendente o descendente)
 *          - in: query
 *            name: sortby
 *            schema:
 *              type: string
 *              enum: [name, price, createdAt]
 *            description: Propiedad en la cual se basará el ordenamiento
 *          - in: query
 *            name: page
 *            schema:
 *              type: string
 *            description: Número de página
 *          - in: query
 *            name: size
 *            schema:
 *              type: string
 *            description: Productos a mostrar por página
 *      responses:
 *          '200':
 *              description: Productos obtenidos exitosamente
 *              content:
 *                  application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                           error:
 *                              type: boolean
 *                              description: Indica que no hubo error
 *                              example: false
 *                           products:
 *                              type: array
 *                              description: Arreglo de productos
 *                              items:
 *                                  type: object
 *                                  properties:
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
 router.get('/user/:uid', productController.getByUser);

/**
 * @swagger
 * /products/{id}:
 *  get:
 *      summary: Obtener un producto por id
 *      description: Obtiene un producto por id
 *      tags: 
 *          - Productos
 *      parameters:
 *          - in: params
 *            name: id
 *            schema:
 *              type: string
 *              description: id del producto
 *      responses:
 *          '200':
 *              description: Producto obtenido exitosamente
 *              content:
 *                  application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                           error:
 *                              type: boolean
 *                              description: Indica que no hubo error
 *                              example: false
 *                           product:
 *                                  type: object
 *                                  properties:
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
 *          '404':
 *              description: Producto no encontrado
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
 *                                  example: Producto no encontrado
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
router.get('/:id', productController.getById);


/**
 * @swagger
 * /products/search/{productName}:
 *  get:
 *      summary: Obtener productos que coincidan con una palabra dada
 *      description: Obtener productos que coincidan con una palabra dada
 *      tags: 
 *          - Productos
 *      parameters:
 *          - in: params
 *            name: productName
 *            schema:
 *              type: string
 *              description: palabra a buscar
 *          - in: query
 *            name: sort
 *            schema:
 *              type: string
 *              enum: [asc, desc]
 *            description: Tipo de ordenamiento (ascendente o descendente)
 *          - in: query
 *            name: sortby
 *            schema:
 *              type: string
 *              enum: [name, price, createdAt]
 *            description: Propiedad en la cual se basará el ordenamiento
 *          - in: query
 *            name: page
 *            schema:
 *              type: string
 *            description: Número de página
 *          - in: query
 *            name: size
 *            schema:
 *              type: string
 *            description: Productos a mostrar por página
 *      responses:
 *          '200':
 *              description: Productos obtenidos exitosamente
 *              content:
 *                  application/json:
 *                     schema:
 *                        type: object
 *                        properties:
 *                           error:
 *                              type: boolean
 *                              description: Indica que no hubo error
 *                              example: false
 *                           products:
 *                              type: array
 *                              description: Arreglo de productos
 *                              items:
 *                                  type: object
 *                                  properties:
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
router.get('/search/:productName', productController.getByString);

/* POST products listing. */

/**
 * @swagger
 * /products:
 *  post:
 *      summary: Crear un nuevo producto
 *      description: Crear un nuevo producto
 *      tags: 
 *          - Productos
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: nombre del producto
 *                              example: Bicicleta
 *                          images:
 *                              type: array
 *                              description: Arreglo de url de imagenes del producto
 *                              items:
 *                                  type: string
 *                                  description: url de imagen
 *                                  example: https://firebasestorage.googleapis.com/v0/b/express-server-b8f0f.appspot.com/o/images%2Fbicicleta.jpg
 *                          brand:
 *                              type: string
 *                              description: Marca del producto
 *                              example: Corsario
 *                          price:
 *                              type: number
 *                              description: precio del producto
 *                              example: 250
 *                          description:
 *                              type: string
 *                              description: descripción del producto
 *                              example: Bicicleta de montaña
 *                          category:
 *                              type: string
 *                              description: categoria del producto
 *                              example: Bicicletas
 *                          condition:
 *                              type: string
 *                              description: condición del producto
 *                              example: Nuevo
 *                          seller:
 *                              type: string
 *                              description: uid del vendedor
 *                              example: 507f1f77bcf86cd799439011
 *                          location:
 *                              type: object
 *                              description: ubicación del producto
 *                              properties:
 *                                  latitude:
 *                                      type: number
 *                                      description: latitud del producto
 *                                      example: -34.603722
 *                                  longitude:
 *                                      type: number
 *                                      description: longitud del producto
 *                                      example: -58.381592
 *      responses:
 *          '201':
 *              description: Producto creado correctamente
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
 *                              example: Producto creado con éxito
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
router.post('/', productController.create);

router.delete('/:id', productController.delete);
router.put('/:id', productController.update);

module.exports = router;