const BoardPics = () => (
    <section>
        <div className="grid grid-rows-2 grid-cols-4 gap-2 px-4 pt-24 flex justify-items-center">
            <div className="row-start-1 col-span-4 m-auto">
                <svg className="block" viewBox="10 10 180 180" height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M100 10c-49.706 0-90 40.294-90 90a89.835 89.835 0 0 0 5.358 30.652l53.991 53.991C78.916 188.108 89.237 190 100 190c49.706 0 90-40.294 90-90s-40.294-90-90-90z" fill="#A09FEF"></path>
                        <path d="m94.001 159.99 59.479-59.479a8.45 8.45 0 0 0 0-11.949L111.438 46.52a8.447 8.447 0 0 0-11.948 0l-59.479 59.479c1.469 1.468 1.733 3.666.862 5.438l2.107 2.108-2.134 2.134-2.108-2.108c-1.771.871-3.969.606-5.438-.862l-17.942 17.942c9.072 25.047 28.944 44.919 53.991 53.991L87.291 166.7c-1.468-1.468-1.733-3.666-.862-5.438l-2.108-2.108 2.134-2.135 2.108 2.109c1.771-.872 3.97-.607 5.438.862zm-50.47-41.626 2.134-2.134 4.112 4.113-2.134 2.134-4.112-4.113zm10.911 10.912-4.113-4.113 2.134-2.135 4.112 4.113-2.133 2.135zm2.685 2.685 2.134-2.135 4.114 4.112-2.134 2.136-4.114-4.113zm6.799 6.798 2.134-2.134 4.112 4.113-2.134 2.135-4.112-4.114zm10.911 10.911-4.112-4.113 2.134-2.135 4.112 4.113-2.134 2.135zm6.798 6.799-4.112-4.113 2.134-2.135 4.112 4.113-2.134 2.135z" fill="#FFFFFF"></path>
                        <path d="M176.292 23.708c-4.42-4.42-14.135-1.871-18.555 2.549l-22.185 22.185-14.632-2.62a42.042 42.042 0 0 0 2.707-3.083 2.356 2.356 0 0 0-.199-3.118l-2.769-2.769c-.841-.841-2.184-.936-3.118-.2a41.543 41.543 0 0 0-6.932 6.933 2.415 2.415 0 0 0-.226.349l-45.451-8.137-6.216 6.216 54.774 31.159-13.865 15.003c-2.469 2.468-4.682 4.816-6.653 7.156l-21.624-4.645-4.906 4.906 18.192 13.35a41.428 41.428 0 0 0-1.518 4.801c-.472 1.892 1.249 3.614 3.141 3.141 1.681-.42 3.27-.931 4.802-1.518l13.35 18.192 4.906-4.906-4.645-21.624c2.34-1.971 4.688-4.185 7.156-6.653l15.001-13.863 31.159 54.773 6.216-6.216-8.137-45.451c.121-.064.239-.138.35-.226a41.692 41.692 0 0 0 6.932-6.932 2.356 2.356 0 0 0-.199-3.118l-2.769-2.769c-.841-.841-2.184-.936-3.118-.199a41.778 41.778 0 0 0-3.083 2.707l-2.62-14.632 10.462-10.462 11.723-11.723c4.42-4.421 6.969-14.136 2.549-18.556z" fill="#02008A"></path>
                    </g>
                </svg>
            </div>
            <div className="row-start-2 col-span-4">
                <div className="text-center">
                    <h1 className="font-luloclean text-[28px] align-top">
                        Our Board
                    </h1>
                    <p className="font-udaanfontsm font-medium text-[16px]">
                        Meet the flight crew
                    </p>
                </div>
            </div>
        </div>
        <div className="px-4 flex justify-center mt-10">
            <div className="grid inline-grid grid-rows-8 grid-flow-col gap-6">
                <div className="row-start-1 col-start-2 ">
                    <img src="/Board/Director (1).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-1 col-start-3 ">
                    <img src="/Board/Director (2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-2 col-start-1 ">
                    <img src="/Board/Finance.png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-2 col-start-2 ">
                    <img src="/Board/Fundraising (1).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-2 col-start-3 ">
                    <img src="/Board/Fundraising (2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-2 col-start-4 ">
                    <img src="/Board/Fundraising (3).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-3 col-start-1 ">
                    <img src="/Board/Head Liaison (1).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-3 col-start-2 ">
                    <img src="/Board/Head Liaison (2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-3 col-start-3 ">
                    <img src="/Board/Hospitality.png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-3 col-start-4 ">
                    <img src="/Board/Hospitality (2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-4 col-start-1 ">
                    <img src="/Board/Hospitality (3).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-4 col-start-2 ">
                    <img src="/Board/Judges Relations(1).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-4 col-start-3 ">
                    <img src="/Board/Judges Relations(2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-4 col-start-4 ">
                    <img src="/Board/Judges Relations(3).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-5 col-start-1 ">
                    <img src="/Board/Logistics (1).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-5 col-start-2 ">
                    <img src="/Board/Logistics (2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-5 col-start-3 ">
                    <img src="/Board/Logistics (3).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-5 col-start-4 ">
                    <img src="/Board/Marketing & Media (1).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-6 col-start-1 ">
                    <img src="/Board/Marketing & Media (2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-6 col-start-2 ">
                    <img src="/Board/Marketing & Media (3).jpeg" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-6 col-start-3 ">
                    <img src="/Board/Marketing & Media (4).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-6 col-start-4 ">
                    <img src="/Board/PR1.png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-7 col-start-1 ">
                    <img src="/Board/PR2.png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-7 col-start-2 ">
                    <img src="/Board/Registration.png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-7 col-start-3 ">
                    <img src="/Board/Registration (2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-7 col-start-4 ">
                    <img src="/Board/Registration (3).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-8 col-start-1 ">
                    <img src="/Board/social.png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-8 col-start-2 ">
                    <img src="/Board/Social (1).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-8 col-start-3 ">
                    <img src="/Board/Social (2).png" className="rounded-lg" width="230" height="230"/>
                </div>
                <div className="row-start-8 col-start-4 ">
                    <img src="/Board/advisor.png" className="rounded-lg" width="230" height="230"/>
                </div>
            </div>  
        </div>

    </section>
)

export default BoardPics