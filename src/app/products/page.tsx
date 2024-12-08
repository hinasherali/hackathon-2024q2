import ProductCard from "@/components/productCard;

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Chair A", price: "$30", img: "/assets/" },
    { id: 2, name: "Chair B", price: "$25", img: "/images/chair2.jpg" },
    { id: 3, name: "Chair C", price: "$20", img: "/images/chair3.jpg" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
