import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // Function to toggle the mobiel menu
    const toggleMobileMenu = () => {
        // Get the Mobile Menu Element
        const mobileMenu = document.getElementById
        ('mobileMenu')

        // If it has the 'hidden' class, remove it, otherwise add it
        if(mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }

  return (
    <header className="flex justify-between items-center
    py-4 px-4 lg:px-20">

        <h1 className="text-3xl md:text-4xl lg:text-5xl
        font-light m-0">
            <img className="w-1/1 h-9 object-cover"
                    src="/dv-prev.png" alt="logo" />
        </h1>

        {/*Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
            <a className="text-base tracking-wider 
            transition-colors hover:text-gray-300
            z-50" href="#">
                Contacto
            </a>

            <a className="text-base tracking-wider 
            transition-colors hover:text-gray-300
            z-50" href="#">
                Servicios
            </a>

            <a className="text-base tracking-wider 
            transition-colors hover:text-gray-300
            z-50" href="#">
                Precios
            </a>
        </nav>

        <button className="hidden md:block bg-[#a7a7a7] 
        text-black py-1 px-5 rounded-full border-none font-medium
        transition-all duration-500 hover:bg-white cursor-pointer z-50">
            Cotizar
        </button>

        {/* Mobile Menu Button - Visible only on Mobile */}
        <button onClick={toggleMobileMenu}
        className='md:hidden text-3x1 p-2 z-50'>
            <img className="top-0 left-0 z-10 filter brightness-0 invert"
        src="/menu-left.png" alt="Mobile-menu" /> 
        </button>

        {/* Mobile Menu - Hidden by Default */}
        <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0
        left-0 p-5 md:hidden z-40 bg-black bg-opacity-70
        backdrop-blur-md'>
            <nav className='flex flex-col gap-6 items-center'>
                <a className="text-base tracking-wider 
                transition-colors hover:text-gray-300
                z-50" href="#">
                    Contacto
                </a>

                <a className="text-base tracking-wider 
                transition-colors hover:text-gray-300
                z-50" href="#">
                    Servicios
                </a>

                <a className="text-base tracking-wider 
                transition-colors hover:text-gray-300
                z-50" href="#">
                Precios
            </a>
                <button className="md:block bg-[#a7a7a7] 
                text-black py-1 px-5 rounded-full border-none font-medium
                transition-all duration-500 hover:bg-white cursor-pointer z-50">
                Cotizar
        </button>
            </nav>
        </div>

    </header>
  )
}

export default Header
