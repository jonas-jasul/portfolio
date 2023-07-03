
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import { BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
export default function Projects() {
    return (
        <div className="flex justify-center items-center flex-col h-[100vh]">
            <h2 className="text text-4xl my-2">Projektai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text">
                <div className="first">
                    <div className="group relative rounded-lg border-2 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                        <img className="h-full w-full object-cover" src="/assets/playInfinite.png"></img>
                        <div className="overlay absolute top-0 left-0 w-full flex flex-col justify-center items-center
                         bg- duration-300 opacity-0 h-0 group-hover:opacity-90 group-hover:h-full">
                            <h2 className='text-xl text-center'>Žaidimų katalogo svetainė "Play Infinite"</h2>
                            <div className='logos my-3'>
                                <a className='m-2' href='https://github.com/jonas-jasul/game-website' target="_blank" ><button><BsGithub size={'2.3em'} /></button></a>
                                <a className='m-2' href='https://play-infinite-psi.vercel.app/' target="_blank" ><button><BsLink45Deg size={'2.5em'} /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-langs flex flex-row'>
                        <div className='react flex'>
                            <BiLogoReact className="text-blue-600" size={'1.6em'} />
                            React.js
                        </div>
                        <div className='nextjs flex'>
                            <SiNextdotjs className="text-black mx-1" size={'1.6em'} />
                            Next.js
                        </div>
                        <div className='tailwind flex'>
                            <BiLogoTailwindCss className="text-cyan-300 mx-1" size={'1.6em'} />
                            Tailwind CSS
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="rounded-lg border-2 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                        <img className=" h-full w-full object-cover" src="/assets/taisykla.png"></img>
                    </div>
                </div>
                <div className="third">
                    <div className="rounded-lg border-2 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                        <img className=" h-full w-full object-cover" src="/assets/hangman.png"></img>
                    </div>
                </div>
                <div className="fourth">
                    <div className="rounded-lg border-2 border-emerald-700 h-40 w-72 lg:w-80 lg:h-48">
                        <img className=" h-full w-full object-cover" src="/assets/lms.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}