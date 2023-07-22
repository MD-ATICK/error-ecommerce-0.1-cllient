import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className='footer '>
                <div className='footerVai grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className="flex flex-col gap-3 footertext">
                        <h5>Get To Know US</h5>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press Releases</p>
                        <p>Amazon Cares</p>
                    </div>
                    <div className="flex flex-col gap-3 footertext">
                        <h5>Contact Us</h5>
                        <p>+88-0125-5685-568</p>
                        <p>atick@gamil.com</p>
                        <p>hasib@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-3 footertext">
                        <h5>Make Horny with Us</h5>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instragram</p>
                    </div>
                    <div className="flex flex-col gap-3 footertext">
                        <h5>Make Money with us</h5>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instragram</p>
                    </div>
                </div>
            </div>
            <div className='py-5 pt-6 text-center footerBimg'>
                <img className='w-24 mx-auto' src="/amazon.png" alt="" />
            </div>
        </div>
    )
}

export default Footer