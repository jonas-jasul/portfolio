
import { BsGlobe, BsWindow, BsPhone, BsDatabase } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb'
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss } from 'react-icons/bi';
import { SiNextdotjs, SiMicrosoftazure, SiPhp, SiCsharp } from 'react-icons/si';
import { Slide, Fade } from 'react-awesome-reveal';
export default function Skills() {

    return (

        <div className="flex flex-col lg:flex-row lg:h-[45rem]">
            <div className="skills-left-cont w-full h-2/5 lg:w-2/5 lg:h-full flex flex-col justify-center items-center p-2 shadow-xl">
                <h2 className=" text-5xl my-6 text-emerald-400">Mano įgūdžiai</h2>
                <div className="skills-left-body justify-center items-center">
                    <p className="text-2xl text-center p-3 otherText">Aš niekada nenustoju mokytis,
                        domiuosi naujomis programavimo technologijomis ir vis tobulėju.</p>

                    <Fade cascade triggerOnce={true} fraction={0.7}>
                    <ul className='flex justify-center items-center flex-col pb-3'>
                        <li className='flex items-center text-xl otherText'>
                            <BsGlobe className="text-cyan-300 mr-1" />
                            Kuriu tinklalapius
                        </li>
                        <li className='flex items-center text-xl otherText'>
                            <BsWindow className=" text-orange-300 mr-1" />
                            Programuoju vartotojo sąsajas (UI)
                        </li>

                        <li className='flex items-center text-xl otherText'>
                            <BsPhone className=" text-red-300 mr-1" />
                            Implementuoju prisitaikantį dizainą
                        </li>
                        <li className='flex items-center text-xl otherText'>
                            <TbApi className=" text-gray-400 mr-1" />
                            Integruoju REST API
                        </li>
                    </ul>
                    </Fade>
                </div>
            </div>
            <Slide direction='right' triggerOnce={true} fraction={0.6}>
                <div className="skills-right-cont w-full lg:w-3/5 flex justify-center h-full items-center mx-auto my-auto">
                    <div className='skill-logos flex flex-wrap m-20 justify-center'>
                        <div className='p-2 techLogos' id='react'>
                            <BiLogoReact className="mx-auto" size={'4em'} />
                            <p className='text-center'>React.js</p>
                        </div>
                        <div className='p-2 techLogos' id='nextjs'>
                            <SiNextdotjs className="mx-auto" size={'4em'} />
                            <p className='text-center'>Next.js</p>
                        </div>
                        <div className='p-2 techLogos' id='javascript'>
                            <BiLogoJavascript className="mx-auto" size={'4em'} />
                            <p className='text-center'>JavaScript</p>
                        </div>
                        <div className='p-2 techLogos' id='sql'>
                            <BsDatabase className="mx-auto" size={'4em'} />
                            <p className='text-center'>SQL</p>
                        </div>
                        <div className='p-2 techLogos' id='html'>
                            <BiLogoHtml5 className="mx-auto" size={'4em'} />
                            <p className='text-center'>HTML</p>
                        </div>

                        <div className='p-2 techLogos' id='css'>
                            <BiLogoCss3 className='mx-auto' size={'4em'} />
                            <p className='text-center'>CSS</p>
                        </div>
                        <div className='p-2 techLogos' id='tailwind'>
                            <BiLogoTailwindCss className='mx-auto' size={'4em'} />
                            <p className='text-center'>Tailwind CSS</p>
                        </div>
                        <div className='p-2 techLogos' id='azure'>
                            <SiMicrosoftazure className='mx-auto' size={'4em'} />
                            <p className='text-center'>Azure</p>
                        </div>
                        <div className='p-2 techLogos' id='php'>
                            <SiPhp className='mx-auto' size={'4em'} />
                            <p className='text-center'>PHP</p>
                        </div>
                        <div className='p-2 techLogos' id='csharp'>
                            <SiCsharp className='mx-auto' size={'4em'} />
                            <p className='text-center'>C#</p>
                        </div>

                    </div>
                </div>
            </Slide>
        </div>

    )
}