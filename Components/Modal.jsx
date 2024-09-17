'use client'
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({children}) {
    const modalRef =  useRef(null);
    const router = useRouter();

    useEffect(()=>{
        if(!modalRef.current.open){
            modalRef.current.showModal();
        }
    },[])

    function onHide(){
        router.back();
        
    }
  return createPortal(
    <dialog ref={modalRef} onClose={onHide}>
        <span style={{display:'flex',justifyContent:'end',padding:'10px'}} onClick={onHide}>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={30} height={30} >
                <path  strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </span>
        {children}
    </dialog>,
    document.getElementById('modal-content')

  );
}