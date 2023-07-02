import React from "react";
import { contactMeText } from "../data/data";
import { Form } from "./components/form";

const ContactMePage = () => {
  return (
    <div className="m-auto mt-10 flex w-11/12 flex-col content-center">
      <h2> CONTACT ME</h2>
      <div className="bg-grey-light m-auto flex w-9/12 flex-row content-center gap-20 p-20">
        <div className="flex w-2/4 flex-col">
          <h3 className="mb-10 text-2xl">{contactMeText.title}</h3>
          <p>{contactMeText.body}</p>
        </div>
        <div className="w-2/4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactMePage;
