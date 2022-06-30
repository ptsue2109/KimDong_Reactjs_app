import React from 'react'

const Top_nav = () => {
    return (
        <>
            <div className="flex justify-content-between  align-items-center bg-red-800 max-h-2rem text-white">
                <div className="flex-0  flex  justify-items-between gap-4 ml-7 px-3">
                    <a href=""><i className="pi pi-facebook topnav_socialBtn"></i></a>
                    <a href=""><i className="pi pi-instagram topnav_socialBtn"></i></a>
                    <a href=""><i className="pi pi-youtube topnav_socialBtn"></i></a>
                </div>
                <div className="flex-1 flex  justify-items-center align-items-center  m-2 px-5 py-3 border-round gap-3">
                    <i className="pi pi-wifi rotate-45"></i>
                    <marquee behavior="scroll" direction="left">
                        Chào mừng bạn đến với Kim Đồng Book. Nếu bạn cần giúp đỡ, hãy liên hệ với chúng tôi qua hotline: (+84) 1900571595 hoặc email: cskh_online@nxbkimdong.com.vn.
                    </marquee>
                </div>
                <div className="flex-1 flex justify-items-center gap-3">
                    <div className="">
                        <a href="tel:(+84) 1900571595" className='text-white no-underline'><i className="pi pi-phone" aria-hidden="true"></i>  (+84) 1900571595</a>
                    </div>
                    <div className="">
                        <a href="mailto:cskh_online@nxbkimdong.com.vn" className='text-white no-underline'><i className="pi pi-envelope" aria-hidden="true"></i>  cskh_online@nxbkimdong.com.vn </a>                    </div>
                </div>
            </div>
        </>
    )
}

export default Top_nav
