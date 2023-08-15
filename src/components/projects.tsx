
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import { BiLogoReact, BiLogoTailwindCss, BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from 'react-icons/bi';
import { SiNextdotjs, SiPhp, SiLaravel, SiBootstrap } from 'react-icons/si';

export default function Projects() {
    return (
        <div className="flex justify-start items-center flex-col h-[100vh]">
            <div className='projects-line w-full h-20 mb-3'>
                <h2 className="text-4xl mt-6 mb-2 text-emerald-400 text-center">Projektai</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text">
                <div className="first">
                    <div className="group relative rounded-lg border-2 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                        <img className="h-full w-full object-cover" src="/assets/playInfinite.png"></img>
                        <div className="overlay absolute bottom-full left-0 right-0 overflow-hidden w-full flex flex-col justify-center items-center
                        duration-300 h-0 group-hover:bottom-0 group-hover:h-full">
                            <h2 className='text-xl text-center'>Žaidimų katalogo svetainė "Play Infinite"</h2>
                            <div className='logos my-3'>
                                <a className='m-2' href='https://github.com/jonas-jasul/game-website' target="_blank" ><button><BsGithub size={'2.3em'} /></button></a>
                                <a className='m-2' href='https://play-infinite-psi.vercel.app/' target="_blank" ><button><BsLink45Deg size={'2.5em'} /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-langs flex flex-row mt-1 justify-center items-center'>
                        <div className='react flex'>
                            <BiLogoReact className="text-blue-600" size={'1.6em'} />
                            React.js
                        </div>
                        <div className='nextjs flex'>
                            <SiNextdotjs className="text-black mx-1" size={'1.6em'} />
                            Next.js
                        </div>
                        <div className='tailwind flex'>
                            <BiLogoTailwindCss className="text-teal-400 mx-1" size={'1.6em'} />
                            Tailwind CSS
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="rounded-lg border-1 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                        <div className="group relative rounded-lg border-2 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                            <img className=" h-full w-full object-cover" src="/assets/taisykla.png"></img>
                            <div className="overlay absolute bottom-full left-0 right-0 overflow-hidden w-full flex flex-col justify-center items-center
                        duration-300 h-0 group-hover:bottom-0 group-hover:h-full">
                                <h2 className='text-xl text-center'>Elektronikos taisyklos valdymo sistema</h2>
                                <div className='logos my-3'>
                                    <a className='m-2' href='https://github.com/jonas-jasul/elektronikosTaisykla' target="_blank" ><button><BsGithub size={'2.3em'} /></button></a>
                                    <a className='m-2' href='https://elektronikostaisykla.000webhostapp.com/' target="_blank" ><button><BsLink45Deg size={'2.5em'} /></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-langs flex flex-row mt-1 justify-center items-center'>
                        <div className='php flex'>
                            <SiPhp className="text-blue-800" size={'1.6em'} />
                            PHP
                        </div>
                        <div className='js flex'>
                            <BiLogoJavascript className=" text-yellow-400 mx-1" size={'1.6em'} />
                            Javascript
                        </div>
                        <div className='css flex'>
                            <BiLogoCss3 className="text-cyan-600 mx-1" size={'1.6em'} />
                            CSS
                        </div>
                        <div className='bs flex'>
                            <SiBootstrap className=" text-violet-600 mx-1" size={'1.6em'} />
                            Bootstrap
                        </div>

                    </div>
                </div>
                <div className="third">
                    <div className="rounded-lg border-1 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                        <div className="group relative rounded-lg border-2 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                            <img className=" h-full w-full object-cover" src="/assets/hangman.png"></img>
                            <div className="overlay absolute bottom-full left-0 right-0 overflow-hidden w-full flex flex-col justify-center items-center
                        duration-300 h-0 group-hover:bottom-0 group-hover:h-full">
                                <h2 className='text-xl text-center'>Žaidimas - Kartuvės</h2>
                                <div className='logos my-3'>
                                    <a className='m-2' href='https://github.com/jonas-jasul/hangman' target="_blank" ><button><BsGithub size={'2.3em'} /></button></a>
                                    <a className='m-2' href='https://hangman-five-tawny.vercel.app/' target="_blank" ><button><BsLink45Deg size={'2.5em'} /></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-langs flex flex-row mt-1 justify-center items-center'>
                        <div className='js flex'>
                            <BiLogoJavascript className=" text-yellow-400 mx-1" size={'1.6em'} />
                            Javascript
                        </div>
                        <div className='html flex'>
                            <BiLogoHtml5 className="text-orange-500" size={'1.6em'} />
                            HTML
                        </div>
                        <div className='css flex'>
                            <BiLogoCss3 className="text-cyan-600 mx-1" size={'1.6em'} />
                            CSS
                        </div>
                    </div>
                </div>
                <div className="fourth">
                    <div className="rounded-lg border-1 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                        <div className="group relative rounded-lg border-2 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                            <img className=" h-full w-full object-cover" src="/assets/lms.png"></img>
                            <div className="overlay absolute bottom-full left-0 right-0 overflow-hidden w-full flex flex-col justify-center items-center
                        duration-300 h-0 group-hover:bottom-0 group-hover:h-full">
                                <h2 className='text-xl text-center'>Bibliotekos valdymo sistema</h2>
                                <div className='logos my-3'>
                                    <a className='m-2' href='https://github.com/jonas-jasul/Library-Management-System' target="_blank" ><button><BsGithub size={'2.3em'} /></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-langs flex flex-row mt-1 justify-center items-center'>
                        <div className='js flex'>
                            <SiLaravel className=" text-orange-600 mx-1" size={'1.6em'} />
                            Laravel
                        </div>
                        <div className='tailwind flex'>
                            <BiLogoTailwindCss className="text-teal-400 mx-1" size={'1.6em'} />
                            Tailwind CSS
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}