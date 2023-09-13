import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
export default function Contact() {
    return (
        <div className="h-[100vh]">
            <div className="transition-line lg:w-full lg:h-4 "></div>
            <div className='flex flex-col lg:flex-row-reverse'>
                <div className="contact-div w-full h-[30vh] lg:w-1/3 lg:h-[100vh]">
                    <div className="contact-heading-div h-full flex justify-center items-center">
                        <h2 className="text-center text-emerald-400 text-5xl">Susisiek su manimi!</h2>
                    </div>

                </div>
                <div className="contact-left-div justify-center items-center mt-40 lg:my-auto lg:mx-auto">
                    <div className='email flex flex-row justify-center items-center text'><AiOutlineMail className='mx-2' size={'1.6em'} /><h3 className='text-2xl'>jonas.jasul@gmail.com</h3></div>
                    <div className='phone flex flex-row justify-center items-center text'><AiOutlinePhone className='mx-2' size={'1.6em'} /> <h3 className='text-2xl'>+37060521032</h3> </div>
                </div>
            </div>
        </div>
    )
}