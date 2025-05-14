import React from 'react';
import { House, MailOpen, Package } from 'lucide-react';
import { MapPin } from 'lucide-react';

const FooterComp = () => {
  return (
    <div className='bg-blue-950'>
        <div className='flex justify-around '>
            <div className='text-white'>
                <div className=''>
                <House color='white' className='mx-auto mt-2 ' />
                <h1 className='mt-5'>+91 123456789</h1>
                </div>
            </div>

            <div className='text-white'>
                <div className=''>
                <MapPin color='white' className='mx-auto mt-2 ' />
                <h1 className='mt-5'>113, Raj-hans point India</h1>
                </div>
            </div>

            <div className='text-white'>
                <div className=''>
                <MailOpen color='white' className='mx-auto mt-2 ' />
                <h1 className='mt-5'>info@gmail.com</h1>
                </div>
            </div>

            <div className='text-white'>
                <div className=''>
                <Package color='white' className='mx-auto mt-2 ' />
                <h1 className='mt-5'>+91 123456789</h1>
                </div>
            </div>
            
        </div>
        <div>
        <div className="mt-4   mx-5 border-t border-gray-400" style={{ marginTop: '15px' }}>
            <h1 className='text-gray-300 text-center '>© All rights reserved.</h1>
        </div>
        </div>
      
    </div>
  )
}

export default FooterComp
