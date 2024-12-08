export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-gray-700 leading-7 mb-4">
        Welcome to our store! We are passionate about providing high-quality furniture that blends
        style, comfort, and functionality. Our mission is to help you create beautiful spaces that
        inspire and bring people together.
      </p>
      <p className="text-gray-700 leading-7 mb-4">
        Founded in 2021, we started with the belief that everyone deserves exceptional furniture at
        affordable prices. With a team of dedicated designers and craftsmen, we aim to deliver
        products that exceed your expectations.
      </p>
      <p className="text-gray-700 leading-7 mb-4">
        We are committed to sustainability and use eco-friendly materials whenever possible. Thank
        you for choosing us as your trusted furniture provider!
      </p>
      <image
        src="/images/about-us-image.jpg"
        alt="About Us"
        className="w-full h-64 object-cover mt-6 rounded-lg shadow-md"
      />
    </div>
  );
}
