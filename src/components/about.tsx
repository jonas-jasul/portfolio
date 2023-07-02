import AnimatedCaret from "./animatedCaret";

export default function About() {
    return (

        <div className="flex flex-col mt-16 mx-14 lg:flex-row lg:ml-40 lg:mt-28">
            <div className="left-cont w-full">
                <h2 className="text-6xl">Labas, aš <span className="text-emerald-700">Jonas Jasulevičius</span>!</h2>

                <div className="code-block bg-slate-700 rounded-lg mt-2 w-5/6 lg:w-5/6 md:w-2/3">
                    <div className="code-top bg-slate-600 rounded-lg flex flex-row">
                        <div className="circles-cont flex flex-row justify-center items-center p-2">
                            <div className="circle w-3 h-3 rounded-full bg-red-400 mx-1"></div>
                            <div className="circle w-3 h-3 rounded-full bg-orange-300 mx-1"></div>
                            <div className="circle w-3 h-3 rounded-full bg-lime-300 mx-1"></div>
                        </div>

                        <div className="code-tab h-7 flex flex-row justify-center items-center p-3 rounded-tl-lg rounded-tr-lg bg-slate-700 ml-4" style={{ fontFamily: "HackRegular" }}>
                            <img className="w-4 h-4 mr-1" src="../../public/assets/html_icon.png" /><span className="text-white text-xs">Jonas.html</span>
                        </div>
                    </div>
                    <div className="code-text p-3" style={{ fontFamily: "HackRegular" }}>
                        <p className="text-xl mt-1 text-white">
                            &lt;<span className="text-red-400">p</span>&gt;Esu tinklalapių programuotojas.&lt;/<span className="text-red-400">p</span>&gt;
                            <span className="animated-caret text-blue-400"><AnimatedCaret /></span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="right-cont w-full">
                <div className="pic-cont mt-3">
                    <img className="rounded-3xl w-48 lg:w-72 md:w-64" src="../../public/assets/me.jpg"></img>
                </div>
            </div>
        </div>
    )
}

