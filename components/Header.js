function Header() {
    return (
        <div className='flex flex-col items-center mt-3 p-5'>    
            <div className='flex items-center mb-4'>
                <img src="/images/snLogo.png" alt="studio-logo" className='w-12 drop-shadow-lg'/>
                <h1 className="font-Montserrat text-center leading-none text-white font-bold text-[25px] md:text-[35px] xl:text-[35px] xxl:text-[35px] p-4 drop-shadow-lg">
                    Audio y Tambor - Drum tracking studios
                </h1>
            </div> 
            <div className='flex flex-col items-center'>
                <h2 className="font-Montserrat text-center leading-none text-yellow font-bold text-[15px] md:text-[20px] xl:text-[20px] xxl:text-[20px] p-4 drop-shadow-lg">
                    Reservá tu turno aquí
                </h2>  
                <img
                    src="../images/downarrow.svg"
                    className="max-w-[20px] drop-shadow-lg"
                    alt="icon arrow"
                />
            </div> 
        </div>
    );
  }
  
  export default Header;