import React from 'react'
import Header from '../components/Header'

const Home = () => {
    return (
        <div className="container bg-gray-900">
            <Header />
            <section className="bg-gray-900 py-12">
                <div className="section-content text-center">
                    <h2 className="text-3xl mb-8 text-gray-500">Best Price to Trade</h2>
                    <div className="data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-white">
                        <div className="min  p-6 rounded-lg">
                            <h2 className="text-4xl font-bold text-[#3dc6c1]">60%</h2>
                            <p className="mt-2 text-gray-500">5 Min</p>
                        </div>

                        <div className="hour  p-6 rounded-lg">
                            <h2 className="text-4xl font-bold text-[#3dc6c1]" >70%</h2>
                            <p className="mt-2 text-gray-500">5 Hour</p>
                        </div>

                        <div className="total  p-6 rounded-lg col-span-1 md:col-span-2 lg:col-span-1">
                            <h1 className="text-5xl font-extrabold">₹57,70,020</h1>
                        </div>

                        <div className="day  p-6 rounded-lg">
                            <h1 className="text-4xl font-bold text-[#3dc6c1]">87.8%</h1>
                            <p className="mt-2 text-gray-500">1 Day</p>
                        </div>

                        <div className="week  p-6 rounded-lg">
                            <h2 className="text-4xl font-bold text-[#3dc6c1]">45.6%</h2>
                            <p className="mt-2 text-gray-500">7 Day</p>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-500">Average BTC/INR net price including commission</p>

                </div>
                {/* <div className="overflow-x-auto p-4">
      <table className="min-w-full">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Platform</th>
            <th className="py-3 px-6 text-left">Last Traded Price</th>
            <th className="py-3 px-6 text-left">Buy / Sell Price</th>
            <th className="py-3 px-6 text-left">Difference</th>
            <th className="py-3 px-6 text-left">Savings</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 text-white">
          <tr className="m-2 bg-gray-800 rounded-lg shadow">
            <td className="py-3 px-6">Platform 1</td>
            <td className="py-3 px-6">$100</td>
            <td className="py-3 px-6">$99 / $101</td>
            <td className="py-3 px-6">$2</td>
            <td className="py-3 px-6">$1</td>
          </tr>
          <tr className="m-2 bg-gray-800 rounded-lg shadow">
            <td className="py-3 px-6">Platform 2</td>
            <td className="py-3 px-6">$200</td>
            <td className="py-3 px-6">$198 / $202</td>
            <td className="py-3 px-6">$4</td>
            <td className="py-3 px-6">$2</td>
          </tr>
          <tr className="m-2 bg-gray-800 rounded-lg shadow">
            <td className="py-3 px-6">Platform 3</td>
            <td className="py-3 px-6">$300</td>
            <td className="py-3 px-6">$295 / $305</td>
            <td className="py-3 px-6">$10</td>
            <td className="py-3 px-6">$5</td>
          </tr>
        </tbody>
      </table>
    </div> */}

    <div className="overflow-x-auto p-4">
      <table className="min-w-full">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Platform</th>
            <th className="py-3 px-6 text-left">Last Traded Price</th>
            <th className="py-3 px-6 text-left">Buy / Sell Price</th>
            <th className="py-3 px-6 text-left">Difference</th>
            <th className="py-3 px-6 text-left">Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">
              <div className="m-2 p-4 bg-gray-800 rounded-lg shadow text-white">
                <div className="flex justify-between">
                  <span>Platform 1</span>
                  <span>$100</span>
                  <span>$99 / $101</span>
                  <span>$2</span>
                  <span>$1</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <div className="m-2 p-4 bg-gray-800 rounded-lg shadow text-white">
                <div className="flex justify-between">
                  <span>Platform 2</span>
                  <span>$200</span>
                  <span>$198 / $202</span>
                  <span>$4</span>
                  <span>$2</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <div className="m-2 p-4 bg-gray-800 rounded-lg shadow text-white">
                <div className="flex justify-between">
                  <span>Platform 3</span>
                  <span>$300</span>
                  <span>$295 / $305</span>
                  <span>$10</span>
                  <span>$5</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
            </section>


        </div>
    )
}

export default Home