"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import FormErrorMessage from "../AnimatedFormErrorMessage";

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters!" }),
  last_name: z.string().optional(),
  email: z.string().email({ message: "Invalid Email Address!" }),
  phonenumber: z
    .string()
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  interestedSubject: z.string().min(1, { message: "Subject is Required" }),
  message: z.string().min(1, { message: "Message cannot be empty!" }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phonenumber: "",
      interestedSubject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phonenumber = "6285602907659";
    const first_name = values.first_name.toUpperCase();
    const last_name = values.last_name?.toUpperCase();
    const email = values.email;
    const phone = values.phonenumber;
    const subject = values.interestedSubject;
    const inMessage = values.message;
    const messageContent = `Hello! My name is ${first_name} ${last_name}. I want to ask about ${subject} subject. ${inMessage}`;

    const encodedMessage = encodeURIComponent(messageContent);
    const waUrl = `https://wa.me/${phonenumber}?text=${encodedMessage}`;
    // redirect to whatsapp
    window.open(waUrl);
    // clear form
    form.reset();
  }

  return (
    <section id="contactme">
      <h1 className="mt-20 text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-indigo-400 to-cyan-400 text-center mb-4 ">
        Get in Touch
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
      <p className=" text-white text-center text-xl md:text-3xl font-medium ">
        Let's Build Your Amazing Website Together!
      </p>
      {/* Form */}
      <Form {...form}>
        <form
          className="space-y-4 p-7 md:h-150 md:px-15 md:py-10 flex items-center  rounded-xl mt-10 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 shadow-xl shadow-cyan-500/50"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div id="contact-picture" className="max-lg:hidden lg:mr-10">
            <Image
              src="/cs.png"
              alt="contact-picture"
              width={900}
              height={900}
              priority
              className=""
            ></Image>
          </div>
          <div className="w-full flex flex-col gap-y-5">
            <div className="flex justify-between flex-col md:flex-row gap-y-5 md:gap-x-5">
              {/* First Name */}
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-xl">
                        First Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("first_name", {
                            onChange: (e) => {
                              const upperValue = e.target.value.toUpperCase();
                              form.setValue("first_name", upperValue);
                            },
                          })}
                          className="p-5 rounded-lg text-sm  bg-white"
                          placeholder="Enter first name"
                          {...field}
                        />
                      </FormControl>
                      {/* <AnimatePresence>
                        <FormMessage className="transition-transform duration-500 ease-in-out" />
                      </AnimatePresence> */}
                      {/* {form.formState.errors.first_name && (
                        <AnimatePresence>
                          <motion.p
                            className="text-sm text-destructive text-nowrap"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            {form.formState.errors.first_name.message}
                          </motion.p>
                        </AnimatePresence>
                      )} */}
                      <FormErrorMessage></FormErrorMessage>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full">
                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-xl">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...form.register("last_name", {
                            onChange: (e) => {
                              const upperValue = e.target.value.toUpperCase();
                              form.setValue("last_name", upperValue);
                            },
                          })}
                          className="p-5 rounded-lg text-sm  bg-white"
                          placeholder="Enter last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-5 justify-between gap-x-5">
              <div className="w-full">
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-xl">
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 rounded-lg text-sm  bg-white"
                          type="email"
                          placeholder="example@mail.com"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                      <FormErrorMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phonenumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:text-xl">
                        Phone Number <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="p-5 rounded-lg text-sm  bg-white"
                          placeholder="628123456789"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                      <FormErrorMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Interested Subject */}
            <FormField
              control={form.control}
              name="interestedSubject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-xl ">
                    Interested Subject <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="p-5 rounded-lg text-sm  bg-white"
                      placeholder="e.g. Website Development"
                      {...field}
                      {...form.register("interestedSubject", {
                        onChange: (e) => {
                          const upperValue = e.target.value.toUpperCase();
                          form.setValue("interestedSubject", upperValue);
                        },
                      })}
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                  <FormErrorMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="md:text-xl">
                    Message <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-white"
                      placeholder="Write your message..."
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                  <FormErrorMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row gap-y-5 gap-x-5">
              <Button
                type="submit"
                className="p-6 rounded-lg bg-blue-600 hover:bg-blue-500 cursor-pointer"
              >
                Send Message
              </Button>
              <Button
                type="button"
                className=" p-6 rounded-lg  cursor-pointer"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}
