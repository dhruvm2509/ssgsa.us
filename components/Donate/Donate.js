import React, { useState } from 'react'

const Donate = () => {
  const [activeModal, setActiveModal] = useState(null)
  return (
    <div className="mx-8 sm:mx-12 lg:mx-12 mt-10 justify-center">
      <div>
        <h1 className="bg-blue-850 flex font-extrabold justify-center lg:text-xl m-auto mb-8 px-6 py-2 rounded-br-3xl rounded-tl-3xl sm:px-12 sm:text-xl text-center text-white text-xl w-0">
          Donate
        </h1>
      </div>
      <div className="mb-8 flex justify-center">
        {/* //make div inside of div which should contain form below it */}
        <div className="justify-center bg-grey-850 rounded-lg shadow-lg w-96">
          <div className="flex justify-center">
            <p className="text-black text-md font-black py-2 px-6">
              Our Contribution towards the world around us
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-blue-500 font-bold py-2 px-6 text-justify">
              "We are all part of a larger society, and it is our duty to
              contribute to the betterment of the world around us."
            </p>
          </div>
          <div className="flex justify-center flex-col items-right">
            <p className="text-red-600 text-right text-sm font-black py-2 px-6">
              -Sir Syed Ahmed Khan
            </p>
            <hr className="border-t-4 border-blue-800 my-4 py-2 w-full"></hr>
          </div>

          <div className="flex justify-center">
            <form className="bg-pink p-8 rounded-lg shadow-lg w-96 relative">
              <p className="text-red-600 text-sm font-bold px-6 absolute top-0 left-0">
                *Required
              </p>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Donation Type: *
                  </label>
                  <button
                    className="border-2 border-black md:text-lg px-4 text-base text-black mr-2"
                    onClick={() => null}
                  >
                    <p className="ml-2">One-Time</p>
                  </button>
                  <button
                    className="border-2 border-black md:text-lg px-1 text-base text-black mb-2"
                    onClick={() => null}
                  >
                    <p className="ml-2">Monthly Recurring</p>
                  </button>
                  <div>
                    <label
                      className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Select Amount: *
                    </label>
                    <button
                      className="border-2 border-black md:text-lg px-1 text-base text-black mr-2"
                      onClick={() => null}
                    >
                      <p className="ml-2">$10</p>
                    </button>
                    <button
                      className="border-2 border-black md:text-lg px-1 text-base text-black mr-2"
                      onClick={() => null}
                    >
                      <p className="ml-2">$20</p>
                    </button>
                    <button
                      className="border-2 border-black md:text-lg px-1 text-base text-black mr-2"
                      onClick={() => null}
                    >
                      <p className="ml-2">$50</p>
                    </button>
                    <button
                      className="border-2 border-black md:text-lg px-1 text-base text-black mr-2 mb-2"
                      onClick={() => null}
                    >
                      <p className="ml-2">$100</p>
                    </button>
                  </div>
                  <div>
                    <label
                      className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Or enter your own:
                    </label>
                    <div className="flex items-center space-x-4">
                      {/* Currency and Image */}
                      <div className="flex items-center bg-grey-850 text-black border border-grey-850 rounded py-2.5 px-4 mb-3 leading-tight">
                        <img
                          src="/us.png"
                          alt="US Flag"
                          className="h-6 w-auto mr-2" // Added margin-right for spacing
                        />
                        <p>$</p>
                      </div>

                      {/* Amount */}
                      <div>
                        <input
                          className="appearance-none block w-full bg-grey-850 text-black border border-grey-850 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-amount"
                          type="text"
                          placeholder="Amount"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Name: *
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-850 text-black border border-grey-850 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-password"
                      type="text"
                      placeholder="John Doe"
                    />

                    <label
                      className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Email: *
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-850 text-black border border-grey-850 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-password"
                      type="text"
                      placeholder="xyz@abc.com"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      value="anonymous_user"
                    />
                    <label htmlFor="anonymous" className="ml-2">
                      Keep me anonymous
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-red-600 text-sm font-bold py-2 px-6">
                  Kindly Donate with:{' '}
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=MYCSXB9B4ENP6"
                  className="bg-red-850 hover:bg-red-700 text-white font-bold py-1 px-4 mx-1 rounded-full inline-flex items-center justify-center no-underline whitespace-nowrap"
                >
                  Credit Card
                </a>
                <a
                  href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=MYCSXB9B4ENP6"
                  className="bg-red-850 hover:bg-red-700 text-white font-bold py-1 px-2 mx-1 rounded-full inline-flex items-center justify-center no-underline"
                >
                  PayPal
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModal('venmo')}
                  className="bg-red-850 hover:bg-red-700 text-white font-bold py-2 px-2 mx-1 rounded-full"
                >
                  Venmo
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal('zelle')}
                  className="bg-red-850 hover:bg-red-700 text-white font-bold py-2 px-2 mx-1 rounded-full"
                >
                  Zelle
                </button>
              </div>

              <div className="flex justify mt-4">
                <p className="text-black text-sm font-bold py-2 px-0 text-justify">
                  By supporting students, you are becoming an active participant
                  in building their careers. All donations and contributions
                  directly sponsor the attempts of talented students to secure
                  admission in a Masters or PhD program at a university of
                  international repute. You can easily cancel or upgrade your
                  contribution at any time.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {activeModal === 'venmo' && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-2 text-lg"
            >
              &times;
            </button>
            <p className="text-black text-center text-sm font-black py-2 px-6">
              Kindly use this Username for donation
            </p>
            <p className="mb-4 text-blue-800 font-bold text-center">
              Username: SSGSA
            </p>
            <p className="text-black text-sm font-black py-2 px-6">
              Please use these 4-digits to verify (if needed): 6725
            </p>
          </div>
        </div>
      )}

      {activeModal === 'zelle' && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-2 right-2 text-lg"
            >
              &times;
            </button>
            <p className="text-black text-sm font-black py-2 px-6 ">
              Kindly use this Username for donation
            </p>
            <p className="mb-4 text-blue-800 font-bold text-center">
              finance.ssgsa@gmail.com
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Donate
