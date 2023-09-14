import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import ContactForm from './contactForm';
export default function Contact() {
    return (
        <div className="lg:h-[82vh]">
            <div className="transition-line lg:w-full lg:h-4 "></div>
            <div className='flex flex-col lg:flex-row-reverse'>
                <div className="contact-div w-full h-[30vh] lg:w-1/3 lg:h-[80vh]">
                    <div className="contact-heading-div h-full flex flex-col justify-center items-center">
                        <h2 className="text-center text-emerald-400 text-5xl">Susisiek su manimi!</h2>
                        <div className='email flex flex-row justify-center items-center contact-text'><AiOutlineMail className='mx-2' size={'1.6em'} /><h3 className='text-2xl otherText'>jonas.jasul@gmail.com</h3></div>
                        <div className='phone flex flex-row justify-center items-center contact-text'><AiOutlinePhone className='mx-2' size={'1.6em'} /> <h3 className='text-2xl otherText'>+370 605 21032</h3> </div>
                    </div>

                </div>
                <div className="contact-left-div justify-center items-center mt-14 lg:my-auto lg:mx-auto">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}