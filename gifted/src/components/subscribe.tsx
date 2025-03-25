import React from 'react';
import { MailOpen } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SubscribeForm = () => {
  return (
    <div>
        <nav className='bg-indigo-950 text-white p-4'>
            <div className='flex justify-around mt-1'>
                <div className='flex'>
                <MailOpen />
                <h1 className='ml-2'>Join The Community To Be Updated Firstly ?</h1>

                </div>
                <div className='flex'>
                    <Input className='bg-white mr-2' placeholder='Name'/>
                    <Input className='bg-white mr-2' placeholder='Email'/>
                    <Button className='bg-indigo-500'>Subscribe</Button>
                </div>
            </div>
        </nav>
      
    </div>
  )
}

export default SubscribeForm
