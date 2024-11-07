import './nav.scss'

const NavComponent = () => {
    return (
        <div className='nav absolute z-50 right-0 flex flex-col w-2/4 lg:flex-row'>
            <button className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Home</button>
            <button className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">About</button>
            <button className="font-bold text-xl w-full text-left lg:w-1/4 mb-2 py-10">Work</button>
        </div>
    )
}

export default NavComponent;