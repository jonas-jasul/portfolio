import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import FormSubmitModal from "./formSubmitModal";
type Inputs = {
    email: string,
    message: string,
}

export default function ContactForm() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        const formParams = {
            from_name: data.email,
            message: data.message,
        };
        emailjs.send('service_tha27oq', 'template_kwho7i7', formParams, 'z3pzgpL1hgjB0s1zx')
        .then(()=> {
           openModal();
        });
    };



    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="emailContactForm flex flex-col mb-10">
                <h2 className="text text-3xl text-center">Parašyk man laišką!</h2>
                <div className="yourEmail my-4 mx-auto">
                    <input {...register("email", {required: "Privalomas laukas"})} className="senderEmail form-bg text w-80 lg:w-96 h-8 p-2 rounded-md border-2 border-emerald-400" placeholder="Jūsų el. paštas" type="email" />
                    <p className="text-red-500">{errors.email?.message}</p>
                </div>
                <div className="yourLetter mx-auto">
                    <textarea rows={6} {...register("message", {required: "Privalomas laukas"})} className="senderMessage form-bg text w-80 lg:w-96 rounded-md border-2 border-emerald-400 p-2" placeholder="Jūsų laiškas man" />
                    <p className="text-red-500">{errors.message?.message}</p>

                </div>
                <button type="submit" className="text mx-auto bg-emerald-400 rounded-md px-5 py-2 bg-form-send">Siųsti</button>
                <FormSubmitModal showModal={showModal} />
            </div>
        </form>
    )
}