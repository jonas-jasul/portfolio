export default function FormSubmitModal({showModal, setShowModal}: {showModal:any, setShowModal: any}) {
    return (
        <>
            {showModal ? <div className="text flex mx-auto my-2 text-2xl">Ačiū! Jūsų laiškas sėkmingai išsiųstas.</div> : null}
        </>
    )
}   