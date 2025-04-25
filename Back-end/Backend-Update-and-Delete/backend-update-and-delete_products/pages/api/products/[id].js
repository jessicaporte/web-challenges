//backend
//agregar ### `DELETE` Request #### Add a `DELETE` route, ##edit

import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    // Obtener producto por id
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }
  if (request.method === "POST") {
    // Aquí creamos el producto usando los datos enviados en el cuerpo de la solicitud
    const productData = request.body;

    try {
      // Creamos un nuevo producto
      await Product.create(productData);
      response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error("Error creating product:", error);
      response.status(500).json({ status: "Error creating product." });
    }
    return;
  }

  //1 agregat el put para edit botton
  if (request.method === "PUT") {
    const updateProduct = request.body;

    try {
      // Actualizar producto por id
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        updateProduct,
        { new: true }
      );

      if (!updatedProduct) {
        return response.status(404).json({ status: "Product not found" });
      }
      response.status(200).json({ status: "Product successfully updated" });
    } catch (error) {
      response.status(500).json({ status: "error updating product" });
    }
    return;
  }

  // DELETE: borrar el producto
  if (request.method === "DELETE") {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);

      // Verificar si el producto no fue encontrado
      if (!deletedProduct) {
        return response.status(404).json({ status: "Product not found" });
      }

      response.status(200).json({ status: "Product successfully deleted" });
    } catch (error) {
      console.error("Error deleting product:", error); // Agrega un log para ayudar a la depuración
      response.status(500).json({ status: "Error deleting product." });
    }
    return;
  }
  // Método no permitido
  response.status(405).json({ status: "Method not allowed." });
}
