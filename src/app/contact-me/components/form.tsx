"use client";
import React, { useState, useRef, useEffect } from "react";

export const Form = () => {
  const [isMessageSent, setMessageSent] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;

    const name = target.elements.namedItem("name") as HTMLInputElement;
    const company = target.elements.namedItem("company") as HTMLInputElement;
    const email = target.elements.namedItem("email") as HTMLInputElement;
    const message = target.elements.namedItem("message") as HTMLInputElement;

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
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch operation " + error.message
      );
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isMessageSent && formRef) {
      formRef.current?.reset();
      setTimeout(() => {
        setMessageSent(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isMessageSent]);

  return (
    <>
      <form onSubmit={handleSubmit} className="p-10 text-white" ref={formRef}>
        <div className="mb-4">
          <label className="label-form" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full border border-indigo-400 bg-transparent"
            required
            // minLength={3}
            // maxLength={200}
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
            className="w-full border border-indigo-400 bg-transparent"
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
            className="w-full border border-indigo-400 bg-transparent"
            required
            minLength={2}
            maxLength={200}
          />
        </div>

        <div className="mb-4">
          <label className="label-form mb-4" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-indigo-400 bg-transparent"
            required
            minLength={10}
            maxLength={1000}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue hover:text-blue min-w-100 hover:border-indigo-300hover:border-1 mx-auto h-12 self-center rounded-md border border-slate-300 px-5 text-center text-white hover:bg-white"
          >
            Send Message
          </button>
        </div>
      </form>
      {isMessageSent && <p> Message has been Sent</p>}
    </>
  );
};
