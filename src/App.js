import { FaCheckCircle } from "react-icons/fa"

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col  md:flex-row md:justify-center items-center my-6 space-y-6 md:space-x-6 md:space-y-0 md:my-0 font-mulish ">
        <div className=" grow-0 rounded-md p-8 border-2 border-[#B9BBC3] text-[#202842] flex flex-col justify-between items-center shadow-lg w-80 h-[500px]">
          <div className="text-center px-8 mb-8 ">
            <h2 className="text-2xl font-bold mb-6">Team</h2>
            <p className="flex items-center mb-8">
              <span className="text-4xl font-[1000]  tracking-tighter">
                $150
              </span>
              <span className=" self-end font-medium">/month</span>
            </p>
            <ul className="  space-y-3 text-md font-medium">
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited storage</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited users</span>{" "}
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited users</span>{" "}
              </li>
            </ul>
          </div>
          <div className=" w-full ">
            <button className=" border  border-[#202842] rounded-md p-2 = mt-10 w-full  hover:bg-[#202842] hover:text-white transform duration-300 ">
              Get Started
            </button>
          </div>
        </div>
        <div className=" rounded-md p-8 border-2 border-[#B9BBC3] text-[#ffffff] bg-[#202842] flex flex-col justify-between items-center shadow-lg w-80 h-[500px] md:h-[600px] ">
          <div className="text-center px-8 mb-8 ">
            <h2 className="text-2xl font-bold mb-6">Enterprise</h2>
            <p className="flex items-center mb-8">
              <span className="text-4xl font-[1000] tracking-tighter">
                $2000
              </span>
              <span className=" self-end font-medium">/month</span>
            </p>
            <ul className=" space-y-3 text-md font-medium">
              <li className="flex items-center">
                <FaCheckCircle className=" mr-2" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className=" mr-2" />
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className=" mr-2" />
                <span>Unlimited storage</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className=" mr-2" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className=" mr-2" />
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className=" mr-2" />
                <span>Unlimited users</span>
              </li>
            </ul>
          </div>
          <div className=" w-full">
            <button className=" rounded-md p-2 = mt-12 w-full bg-white text-[#202842] hover:scale-105 transform duration-300 ">
              Get Started
            </button>
          </div>
        </div>

        <div className=" grow-0 rounded-md p-8 border-2 border-[#B9BBC3] text-[#202842] flex flex-col justify-between items-center shadow-lg w-80 h-[500px]">
          <div className="text-center px-8 mb-8 ">
            <h2 className="text-2xl font-bold mb-6">Agency</h2>
            <p className="flex items-center mb-8">
              <span className="text-4xl font-[1000] tracking-tighter">
                $999
              </span>
              <span className=" self-end font-medium">/month</span>
            </p>
            <ul className=" space-y-3 text-md font-medium">
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited users</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited storage</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited users</span>{" "}
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#202842] mr-2" />
                <span>Unlimited users</span>{" "}
              </li>
            </ul>
          </div>
          <div className=" w-full ">
            <button className=" border border-[#202842] rounded-md p-2 = mt-10 w-full hover:bg-[#202842] hover:text-white transform duration-300 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
