import React from "react";
import { contactMeText } from "../data/data";
import { Form } from "./components/form";

const ContactMePage = () => {
  return (
    <div className="m-auto mt-10 flex h-screen w-11/12 flex-col content-center">
      {/* <h2 text-white> CONTACT ME</h2> */}
      <div className="text-grey-light mx-auto flex w-10/12  flex-col content-center p-20 text-2xl">
        <div className="mb-7 flex w-full flex-col text-center text-white">
          <h3 className="mb-10 text-3xl">{contactMeText.title}</h3>
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
