import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const featuredProducts: Product[] = [
  { id: 1, name: "Chair A", price: "$30", image: "/assets/chair1.png" },
  { id: 2, name: "Chair B", price: "$25", image: "/assets/chair2.png" },
];

export default function HomePage() {
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Welcome to Comforty</h1>
      <div className="grid grid-cols-2 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

