import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row
    items-center justify-between min-h-[calc(90vh-6rem)]">
        <div className="max-w-xl ml-[5%] -z-10 mt-[90%]
        md:mt-[60%] lg:mt-0">
            {/* Tag box-width gradient border */}
            <div className='relative w-[95%] sm:w-48
            h-10 bg-gradient-to-r from-[#656565] 
            to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black
                rounded-full flex items-center justify-center gap-1'>
                    <img className="filter brightness-0 invert"
                    src="/diamond-alt.png" alt="Mobile-menu" /> 
                    Powerful
                </div>
            </div>

        </div>
    </main>
  )
}

export default Hero
