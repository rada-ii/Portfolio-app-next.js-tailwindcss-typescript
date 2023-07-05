"use client";
import React, { useState } from "react";

export const Form = () => {
  const [isMessageSent, setMessageSent] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;

    const name = target.elements.namedItem("name") as HTMLInputElement;
    const company = target.elements.namedItem("company") as HTMLInputElement;
    const email = target.elements.namedItem("email") as HTMLInputElement;
    const message = target.elements.namedItem("message") as HTMLTextAreaElement;

    const data = {
      name: name.value,
      company: company.value,
      email: email.value,
      message: message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      setMessageSent(true);
      // alert("Message has been sent!");

      setTimeout(() => {
        setMessageSent(false);
      }, 1000);
      const responseData = await response.json();
      console.log(responseData);
      name.value = "";
      company.value = "";
      email.value = "";
      message.value = "";
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch operation " + error.message
      );
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-10 h-full p-10 text-white">
        <div className="mb-4">
          <label className="label-form" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="input mt-4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="label-form" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className="input my-4"
            minLength={2}
            maxLength={200}
          />
        </div>

        <div className="mb-4">
          <label className="label-form" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="input my-4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="label-form mb-4" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="my-4  w-full rounded-3xl border border-indigo-400 bg-transparent p-5 text-2xl  hover:bg-indigo-100 hover:text-black sm:text-2xl"
            required
          />
        </div>
        <div className="mb-5 flex justify-center">
          <button
            type="submit"
            className=" min-w-100 mx-auto self-center rounded-3xl bg-indigo-400  px-5 py-2 text-center font-extralight text-black  hover:bg-white hover:text-indigo-400 sm:font-bold"
          >
            Send Message
          </button>
        </div>
      </form>
      {isMessageSent && (
        <p className="text-center text-white"> Message has been Sent</p>
      )}
    </>
  );
};
