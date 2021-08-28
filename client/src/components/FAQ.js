import React from "react";

const FAQ = () => {
  return (
    <div class="bg-white">
      <div class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div class="text-center">
          <div class="text-sm uppercase font-bold tracking-wider mb-1 text-blue-700">
            We Answer
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div class="prose prose-blue">
            <h4>What features are included?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-blue">
            <h4>Can I use PayPal to pay you?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-blue">
            <h4>Do I get access to the community?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-blue">
            <h4>Can I get a refund just in case?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-blue">
            <h4>Do you offer email support?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div class="prose prose-blue">
            <h4>Are the updates free for life?</h4>
            <p>
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
        </div>

        <div class="text-center">
          <a
            href="javascript:void(0)"
            class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="opacity-50 hi-solid hi-external-link inline-block w-5 h-5"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
            <span>Go to support center</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
