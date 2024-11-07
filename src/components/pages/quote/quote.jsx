import './quote.scss';
import { ImQuotesRight } from "react-icons/im";


const QuoteComponent = () => {
    return (
        <div className="quote h-dvh flex flex-col justify-center items-start relative">
            <div className='image-overlay'></div>
            <p className='text-6xl m-6 text-white z-10 px-24 '><ImQuotesRight />
            </p>
            <h2 className='text-sm capitalize mb-4 w-full z-10 px-24 lg:w-3/4 lg:text-4xl'>Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.
            </h2>
            <p className='text-sm border-l-2 z-10 px-24 lg:text-2xl'>― C.G. Jung</p>
        </div>
    )
}

export default QuoteComponent;