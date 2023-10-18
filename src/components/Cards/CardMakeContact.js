import React from "react";

// components

export default function CardMakeContact() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Make a contact</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Calendar widget in progress...
            </h6>

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"></h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Say what you need and when you can meet!
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""
                    rows="4"
                  ></textarea>

                  <div className="text-center flex justify-end">
                    <button
                      className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Send
                    </button>
                 </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
