const faqs = [
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be in their original condition.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping fees may vary based on location.",
  },
  {
    question: "How can I track my order?",
    answer: "You will receive a tracking number via email once your order has shipped.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
