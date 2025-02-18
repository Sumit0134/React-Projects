export default function Card() {
  return (
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="p-8 rounded-t-lg" src="https://avatars.githubusercontent.com/Sumit0134" alt="product_image1" />
          </a>
          <div className="px-5 pb-5">
              <a href="/">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Sumit Kumar Shaw - Backend Developer from India
                  </h5>
              </a>
              <div className="flex items-center justify-between mt-2">
                  <a
                      href="https://github.com/Sumit0134"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                      GitHub
                  </a>
              </div>
          </div>
      </div>
  );
}


