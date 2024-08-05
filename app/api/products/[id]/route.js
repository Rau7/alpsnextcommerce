import connectDB from "@/config/database";
import Product from "@/models/Product";
import Category from "@/models/Category";

// GET /properties/[id]
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const product = await Product.findById(params.id).populate(
      "category",
      "name"
    );

    if (!product) {
      return new Response("Product not found", { status: 404 });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error fetching product", { status: 500 });
  }
};
