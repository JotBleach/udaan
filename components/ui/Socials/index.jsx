import SectionWrapper from "../../SectionWrapper"

const Socials = () => {

    const socials = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <g>
                        <a href="https://www.instagram.com/uiucudaan/">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/> 
                        </a>
                    </g>                   
                </svg>,
            title: <a href="https://www.instagram.com/uiucudaan/">Instagram</a>,
            desc: <a href="https://www.instagram.com/uiucudaan/">@uiucudaan</a>
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                    <g>
                        <a href="https://www.tiktok.com/@udaan__uiuc">
                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                        </a>
                    </g>
                </svg>,
            title: <a href="https://www.tiktok.com/@udaan__uiuc">TikTok</a>,
            desc: <a href="https://www.tiktok.com/@udaan__uiuc">@udaan__uiuc</a>
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="text-green" viewBox="0 0 80 97.7">
                    <g>
                        <a href="https://linktr.ee/uiucudaan25">
                            <path d="M0.2,33.1h24.2L7.1,16.7l9.5-9.6L33,23.8V0h14.2v23.8L63.6,7.1l9.5,9.6L55.8,33H80v13.5H55.7l17.3,16.7l-9.5,9.4L40,49.1L16.5,72.7L7,63.2l17.3-16.7H0V33.1H0.2z M33.1,65.8h14.2v32H33.1V65.8z"></path>
                        </a>
                    </g>
                </svg>,
            title: <a href="https://linktr.ee/uiucudaan25">LinkTree</a>,
            desc: <a href="https://linktr.ee/uiucudaan25">linktr.ee/uiucudaan25</a>
        }
    ]

    return (

            <div id="socials" className="custom-screen text-gray-600">
                <ul className="grid grid-rows-2 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="row-start-1 col-span-3 place-content-center text-center">
                        <h1 className="font-luloclean text-[28px]">Socials</h1>
                    </div>
                    {
                        socials.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
    )
}

export default Socials