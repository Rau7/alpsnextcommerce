import connectDB from "@/config/database";
import Product from "@/models/Product";
import Category from "@/models/Category";

export const GET = async (request) => {
  try {
    await connectDB();

    //current page
    const page = request.nextUrl.searchParams.get("page") || 1;
    //how many items page will show on each page
    const pageSize = request.nextUrl.searchParams.get("pageSize") || 3;

    //0-5 5-10
    const skip = (page - 1) * pageSize;

    const total = await Product.countDocuments({});
    //get the products based on skip and pageSize
    const products = await Product.find({})
      .skip(skip)
      .limit(pageSize)
      .populate("category", "name");

    const result = {
      total,
      products,
    };

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Fetching All Products Returned With Error", {
      status: 500,
    });
  }
};
