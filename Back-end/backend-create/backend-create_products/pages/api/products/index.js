import dbConnect from "@/db/connect"; // Importa la función para conectar a la base de datos
import Product from "@/db/models/Product"; // Importa el modelo de productos, que define cómo es un "producto" en la base de datos

// Esta es la función que maneja las peticiones (GET, POST, etc.) a esta ruta
export default async function handler(request, response) {
  await dbConnect(); // Espera a que se conecte a la base de datos

  if (request.method === "GET") {
    // Si la petición que llega es de tipo GET
    const products = await Product.find(); // Busca todos los productos en la base de datos

    return response.status(200).json(products); // Devuelve los productos encontrados como respuesta, con estado 200 (OK)
  }
  if (request.method === "POST") {
    // Si la petición es de tipo POST (crear un nuevo producto)

    const productData = request.body; // Guarda los datos del nuevo producto enviados desde el formulario
    try {
      await Product.create(productData); // Crea el nuevo producto en la base de datos con esos datos

      return response.status(201).json({ status: "product created" }); // Devuelve una respuesta con estado 201 (creado correctamente)
    } catch (error) {
      return response
        .status(400)
        .json({ status: "Error creating product.", error: error.message }); // Si hay un error al crear el producto, devuelve estado 400 y muestra el mensaje de error
    }
  }
  response.status(405).json({ status: "Method not allowed." }); // Si la petición no es ni GET ni POST, devuelve error 405 (método no permitido)
}
