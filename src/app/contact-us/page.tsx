{
  (
      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form className="space-y-4">
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full border p-2 rounded"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Your Message"
          ></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    );
  }

  export default function ContactUs() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 mb-4 text-center">
          Have questions? Fill out the form below and we’ll get back to you soon.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 h-32"
              placeholder="Write your message here"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  