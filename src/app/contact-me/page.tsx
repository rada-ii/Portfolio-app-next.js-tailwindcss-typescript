import React from "react";
import { contactMeText } from "../data/data";
import { Form } from "./components/form";

const ContactMePage = () => {
  return (
    <div className="m-auto my-10 flex h-full w-11/12 flex-col content-center">
      {/* <h2 text-white> CONTACT ME</h2> */}
      <div className="mx-auto  flex w-10/12 flex-col content-center p-5  text-lg sm:p-20 sm:text-2xl">
        <div className="mb-7 flex w-full flex-col px-5 text-center text-white">
          <h3 className="2xl mb-10 text-xl  sm:text-3xl ">
            {/* {contactMeText.title} */}
          </h3>
          <p className="hi px-10">{contactMeText.body}</p>
        </div>
        <div className="w-full flex-grow">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
