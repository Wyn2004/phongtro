import React from 'react';
import { text } from '../utils/data/dataContact';
import Button from './Button';

const Contact = () => {
  return (
    <div className="w-4/6 border-8 border-dashed shadow-sm bg-white rounded-md py-10 px-20 justify-center items-center flex flex-col gap-6 text-center mb-20">
      <img width={'50%'} src={text.image} alt="contact-image" />
      <p className="text-gray-600">{text.content}</p>
      <div className="flex justify-evenly w-full">
        {text.contacts.map((item, index) => (
          <div key={index} className="flex flex-col font-bold">
            <p className="text-[#ED7E37]">{item.text}</p>
            <p className="text-[#313C64] text-lg">{item.phone}</p>
            <p className="text-[#313C64] text-lg">{item.zalo}</p>
          </div>
        ))}
      </div>
      <Button text={'Gửi liên hệ'} textColor={'text-white'} bgColor={'bg-secondary1'} customStyle={'font-bold w-1/5'} />
    </div>
  );
};

export default Contact;
