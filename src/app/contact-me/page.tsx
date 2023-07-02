import React from "react";
import { contactMeText } from "../data/data";
import { Form } from "./components/form";

const ContactMePage = () => {
  return (
    <div className="m-auto mt-10 flex h-screen w-11/12 flex-col content-center">
      <h2 text-white> CONTACT ME</h2>
      <div className="text-grey-light mx-auto flex w-10/12  flex-col content-center gap-20 p-20">
        <div className="flex w-full flex-col text-center text-white">
          <h3 className="mb-10 text-2xl">{contactMeText.title}</h3>
          <p>{contactMeText.body}</p>
        </div>
        <div className="w-full flex-grow">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
