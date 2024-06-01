"use server"


import ContactFormEmail from "@/email/ContactFormEmail";
import { validateString, getErrorMessage } from "@/lib/utils/contactUtils";
import { error } from "console";
import React from "react";
import { Resend } from 'resend';

const sendEmail = async(formData:FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  const resend = new Resend(process.env.RESEND_API);
  let data;

  if (!validateString(senderEmail, 500)) {
    return{
        error:"invalid sender email"
    };
}
    if (!validateString(message, 4000)){
        return{
            error:"invalid message"
        };
    }


    try{
       data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'eshwarsb999@gmail.com',
           subject: 'MAIL FROM PORTFOLIO',
             reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail,{message: message as string,
              senderEmail: senderEmail as string,  
            })

           
          })
          console.log(data);
    }catch(err:unknown){
        return {
            error: getErrorMessage(error),
    }
}

    return {
        data
      };

};

export default sendEmail;
