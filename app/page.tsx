import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start">

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:space-x-16 space-y-10 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            PT. KEONG SUMBER MAKMUR
          </h1>
          <p className="text-lg text-gray-600">
            Slogan Perusahaan Anda yang Menarik dan Menginspirasi
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              See Products
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className=" p-10 mt-10 md:mt-0 md:w-1/2">
          <Image
            src="/path-to-your-image.jpg"
            alt="Gambar Produk"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Card Section for Advantages */}
      <div className="mt-16 w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Advantage 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-300">Keunggulan 1</h3>
            <p className="text-gray-600 mt-2">
              Deskripsi singkat tentang keunggulan perusahaan yang pertama.
            </p>
          </div>

          {/* Advantage 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-300">Keunggulan 2</h3>
            <p className="text-gray-600 mt-2">
              Deskripsi singkat tentang keunggulan perusahaan yang kedua.
            </p>
          </div>

          {/* Advantage 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-300">Keunggulan 3</h3>
            <p className="text-gray-600 mt-2">
              Deskripsi singkat tentang keunggulan perusahaan yang ketiga.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
