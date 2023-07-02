import React from "react";
import { contactMeText } from "../data/data";
import { Form } from "./components/form";

const ContactMePage = () => {
  return (
    <div className=" mx-32  mt-10  content-center text-white">
      <h2 className="text-center text-5xl">
        {" "}
        CONTACT ME (not working just yet)
      </h2>
      <div className=" m-auto flex  flex-col content-center gap-20 p-20">
        <div className="flex  flex-col items-center">
          <h3 className="mb-10 text-2xl">{contactMeText.title}</h3>
          <p>{contactMeText.body}</p>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default ContactMePage;
