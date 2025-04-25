import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  // Manejo de la petición GET (obtener todos los productos)
  if (request.method === "GET") {
    const products = await Product.find();

    if (products.length === 0) {
      return response.status(404).json({ status: "No products found" });
    }

    response.status(200).json(products);
    return;
  }

  // Manejo de la petición POST (crear un nuevo producto)
  if (request.method === "POST") {
    const productData = request.body;

    try {
      // Crear un nuevo producto
      await Product.create(productData);
      response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error("Error creating product:", error);
      response.status(500).json({ status: "Error creating product." });
    }
    return;
  }

  // Método no permitido
  response.status(405).json({ status: "Method not allowed." });
}
