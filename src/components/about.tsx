import AnimatedCaret from "./animatedCaret";

export default function About() {
    return (

        <div className="main">
            <div className="flex flex-col lg:flex-row  h-[100vh] ">
                <div className="left-cont w-2/3 mt-16 lg:mt-44 ml-16">
                    <div className="left-text w-2/3">
                        <h2 className="text-6xl">
                            <span className="hello">Labas, aš</span> <span className="text-emerald-500">Jonas Jasulevičius</span><span className="hello">!</span>
                        </h2>
                    </div>
                    <div className="code-block bg-slate-700 rounded-lg mt-2 w-10/12lg:w-5/6 md:w-2/3">
                        <div className="code-top bg-slate-600 rounded-lg flex flex-row">
                            <div className="circles-cont flex flex-row justify-center items-center p-2">
                                <div className="circle w-3 h-3 rounded-full bg-red-400 mx-1"></div>
                                <div className="circle w-3 h-3 rounded-full bg-orange-300 mx-1"></div>
                                <div className="circle w-3 h-3 rounded-full bg-lime-300 mx-1"></div>
                            </div>

                            <div className="code-tab h-7 flex flex-row justify-center items-center p-3 rounded-tl-lg rounded-tr-lg bg-slate-700 ml-1" style={{ fontFamily: "HackRegular" }}>
                                <img className="w-4 h-4 mr-1" src="/assets/html_icon.png" /><span className="text-white text-xs">Jonas.html</span>
                            </div>
                        </div>
                        <div className="code-text p-3" style={{ fontFamily: "HackRegular" }}>
                            <p className="text-xl mt-1 text-white">
                                &lt;<span className="text-red-400">h3</span>&gt;Esu tinklalapių programuotojas&lt;/<span className="text-red-400">h3</span>&gt;
                                <br /> <br />
                                &lt;<span className="text-red-400">p</span>&gt;Mano aistra - programavimas ir problemų sprendimas, naudojant naujausias technologijas.&lt;/<span className="text-red-400">p</span>&gt;
                                <span className="animated-caret text-blue-400"><AnimatedCaret /></span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="right-cont w-full mt-3 lg:mt-0 lg:w-1/3 pt-6 h-full lg:pt-44">
                    <div className="pic-cont h-48 md:h-60 lg:h-80">
                        <img className="object-contain absolute right-[26%] md:right-[36%] lg:right-[20%] rounded-full w-52 lg:w-80 md:w-64" src="/assets/me.jpg"></img>
                    </div>
                    <div className="cvbuttons m-2">
                        <button className="button p-2 border-2 rounded-xl hover:bg-gray-200 hover:text-black hover:transition-all border-emerald-500">Atsisiųsti CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

