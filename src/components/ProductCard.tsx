interface ProductCardProps {
  product: { id: number; name: string; price: number; image: string };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <image src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <link
          href={`/products/${product.id}`}
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          View Details
        </link>
      </div>
    </div>
  );
};

export default ProductCard;
