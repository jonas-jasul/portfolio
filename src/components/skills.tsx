
import { BsGlobe, BsWindow, BsPhone, BsDatabase } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb'
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss } from 'react-icons/bi';
import { SiNextdotjs, SiMicrosoftazure, SiPhp, SiCsharp } from 'react-icons/si';
export default function Skills() {

    return (
        <div className="flex h-[100vh] flex-col lg:flex-row">
            <div className="skills-left-cont w-full h-2/5 lg:w-2/5 lg:h-full flex flex-col justify-center items-center p-2">
                <h2 className=" text-4xl my-6 text-emerald-400">Apie mane</h2>
                <div className="skills-left-body justify-center items-center">
                    <p className="text-2xl text-center p-3">Aš niekada nenustoju mokytis,
                        domiuosi naujomis programavimo technologijomis ir vis tobulėju.</p>

                    <ul className='flex justify-center items-center flex-col'>
                        <li className='flex items-center text-xl'>
                            <BsGlobe className="text-cyan-300 mr-1" />
                            Kuriu tinklalapius
                        </li>
                        <li className='flex items-center text-xl'>
                            <BsWindow className=" text-orange-300 mr-1" />
                            Programuoju vartotojo sąsajas (UI)
                        </li>

                        <li className='flex items-center text-xl'>
                            <BsPhone className=" text-red-300 mr-1" />
                            Implementuoju prisitaikantį dizainą
                        </li>
                        <li className='flex items-center text-xl'>
                            <TbApi className=" text-gray-400 mr-1" />
                            Integruoju REST API
                        </li>
                    </ul>
                </div>
            </div>
            <div className="skills-right-cont w-full lg:w-3/5 flex justify-center items-center">
                <div className='skill-logos flex flex-wrap m-20 justify-center'>
                    <div className='p-2 hover:text-blue-400'>
                        <BiLogoReact className="mx-auto" size={'4em'} />
                        <p className='text-center'>React.js</p>
                    </div>
                    <div className='p-2 hover:text-black'>
                        <SiNextdotjs className="mx-auto" size={'4em'} />
                        <p className='text-center'>Next.js</p>
                    </div>
                    <div className='p-2 hover:text-yellow-300'>
                        <BiLogoJavascript className="mx-auto" size={'4em'} />
                        <p className='text-center'>JavaScript</p>
                    </div>
                    <div className='p-2 hover:text-cyan-300'>
                        <BsDatabase className="mx-auto" size={'4em'} />
                        <p className='text-center'>SQL</p>
                    </div>
                    <div className='p-2 hover:text-orange-500'>
                        <BiLogoHtml5 className="mx-auto" size={'4em'} />
                        <p className='text-center'>HTML</p>
                    </div>

                    <div className='p-2 hover:text-cyan-600'>
                        <BiLogoCss3 className='mx-auto' size={'4em'} />
                        <p className='text-center'>CSS</p>
                    </div>
                    <div className='p-2 hover:text-teal-400'>
                        <BiLogoTailwindCss className='mx-auto' size={'4em'} />
                        <p className='text-center'>Tailwind CSS</p>
                    </div>
                    <div className='p-2 hover:text-sky-600'>
                        <SiMicrosoftazure className='mx-auto' size={'4em'} />
                        <p className='text-center'>Azure</p>
                    </div>
                    <div className='p-2 hover:text-indigo-400'>
                        <SiPhp className='mx-auto' size={'4em'} />
                        <p className='text-center'>PHP</p>
                    </div>
                    <div className='p-2 hover:text-violet-600'>
                        <SiCsharp className='mx-auto' size={'4em'} />
                        <p className='text-center'>C#</p>
                    </div>

                </div>
            </div>
        </div>
    )
}