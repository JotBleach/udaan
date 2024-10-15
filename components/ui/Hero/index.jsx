const Hero = () => (
    <section>
        <div id="home" className="bg-hero-pattern bg-cover bg-bottom max-w-full h-[600px]">
            <div className="grid grid-rows-5 grid-cols-3 max-w-full h-[600px] mx-auto">
                <div className="row-start-2 row-span-2 col-span-3 flex justify-center items-center">
                    <img className="" src="/UdaanLogoWords.png" alt="image description"></img>
                </div>
                <div className="row-start-4 col-span-3 self-center">
                    <p className="font-udaanfontsm text-white text-2xl text-center align-text-middle">
                        UIUC's Premier Bollywood Fusion Competition
                    </p>
                </div>
                <div className="row-start-5 col-start-2 self-center">
                    <p className="font-udaanfontsm text-white font-extrabold text-2xl text-center align-text-middle md:text-5xl">
                        January 25th 2025
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default Hero