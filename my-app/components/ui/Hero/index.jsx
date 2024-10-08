const Hero = () => (
    <section>
        <div className="relative bg-hero-pattern bg-cover bg-bottom max-w-full h-[600px] text-gray-600">
            <div className="grid grid-rows-5 grid-cols-3 max-w-full h-[600px] mx-auto">
                <div className="row-start-2 col-span-3">
                    <h1 className="font-udaanfont text-white font-extrabold sm:text-9xl text-center tracking-wide">
                        UIUC UDAAN
                    </h1>
                </div>
                <div className="row-start-3 col-span-3 self-center">
                    <p className="font-udaanfontsm text-white text-2xl text-center align-text-middle">
                        UIUC's Premier Bollywood Fusion Competition
                    </p>
                </div>
                <div className="row-start-4 col-start-2 row-span-2 self-center">
                    <p className="font-udaanfontsm text-white font-extrabold text-5xl text-center align-text-middle">
                        January 25th 2025
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default Hero