import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row
    items-center justify-between min-h-[calc(90vh-6rem)]">
        <div className="max-w-xl ml-[5%] mt-[90%]
        md:mt-[60%] lg:mt-0">
            {/* Tag box-width gradient border */}
            <div className='relative w-[95%] sm:w-54
            h-10 bg-gradient-to-r from-[#656565] 
            to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black
                rounded-full flex items-center justify-center gap-1'>
                    <img className="filter brightness-0 invert"
                    src="/diamond-alt.png" alt="Diamond-icon" /> 
                    Desarrollo Web Personalizado
                </div>
            </div>

            {/* Main Heading */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl
            lg:text-6xl font-semibold tracking-wider my-8'>
                Soluciones
                <br />
                Digitales
            </h1>

            {/* Description */}
            <p className='text-base sm:text-lg tracking-wider
            text-gray-400 max-w-[25rem] lg-max-[30rem]'>
                Ofrecemos desarrollo web moderno y soluciones digitales 
                integrales que impulsan marcas nuevas a destacar con identidad, 
                funcionalidad y tecnología.
            </p>

            {/* Button */}
            <div className='flex gap-3 mt-5'>
                <a className='flex items-center gap-1 border border-[#2a2a2a] py-1.5 
                sm:px-6 rounded-full sm:text-sm text-sm font-semibold
                tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#">
                    Características<img className="h-5 w-5 filter brightness-0 invert"
                    src="/arrow-up-right.png" alt="Arrow-up-right" />
                     
                </a>
            </div>
        </div>

        {/*3D Rocket */}
        <Spline className='absolute lg:top-0 top-[-20%] 
        bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/EgWjeZcFVq72K-BL/scene.splinecode" />

    </main>
  )
}

export default Hero
