import Rating from "react-rating";

const products = [];

const ProductDescriptionScreen = ({ match }) => {
  const productId = match.params.id;
  const product = products.find(
    (product) => product.id.toString() === productId
  );
  return (
    <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={product.image}
                className="w-full relative z-10"
                alt=""
              />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-10">
            <div className="mb-3">
              <h1 className="font-bold uppercase text-2xl mb-3">
                {product.name}
              </h1>
              <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={product.rating}
                readonly
              />
              <p className="text-md mt-2">{product.description}</p>
            </div>

            <div className="mb-4">
              {product.countInStock ? (
                <select name="" id="">
                  {[...Array(product.countInStock).keys()].map((x, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              ) : (
                <p classNameName="font-bold text-red-500">Out of Stock</p>
              )}
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">
                  &#8377;
                </span>

                <span className="font-bold text-5xl leading-none align-baseline">
                  {product.price}
                </span>
              </div>
              <div className="inline-block align-bottom">
                <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-indigo-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionScreen;
