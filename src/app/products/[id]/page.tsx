export default function ProductDetails({ params }: { params: { id: string } }) {
  const productId = params.id;

  // Simulated API call
  const product = {
    id: productId,
    name: "Chair A",
    price: 50,
    description: "A beautiful chair.",
    image: "/images/chair.jpg",
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <image src={product.image} alt={product.name} className="w-full md:w-1/2 h-96 object-cover" />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 text-lg">${product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Add to Cart</button>
      </div>
    </div>
  );
}
