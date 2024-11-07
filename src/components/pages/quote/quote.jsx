import './quote.scss';
import { ImQuotesRight } from "react-icons/im";


const QuoteComponent = () => {
    return (
        <div className="quote h-svh flex flex-col justify-center items-start relative">
            <div className='image-overlay'></div>
            <p className='text-6xl m-6 text-white z-10 px-24'><ImQuotesRight />
            </p>
            <h2 className='text-5xl capitalize mb-4 w-3/4 z-10 px-24'>Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.
            </h2>
            <p className='text-4xl border-l-2 z-10 px-24'>― C.G. Jung</p>
        </div>
    )
}

export default QuoteComponent;