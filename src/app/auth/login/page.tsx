"use client";
import Image from "next/image";
import LoginForm from "./components/form/LoginForm";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <article className="flex justify-center items-center h-screen w-screen p-4 md:p-0">
      <div className="flex relative w-full max-w-[400px]">
        <motion.article
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`card w-full z-10`}
        >
          <section className="flex gap-1 justify-center">
            <h1 className={`text-4xl font-bold text-blue-500/80`}>Gesnigo</h1>
          </section>
          <LoginForm />
        </motion.article>
        <Image
          className="absolute hidden right-[-5rem] bottom-0 md:block"
          src={"/woman_presenting.svg"}
          width={110}
          height={210}
          alt=""
        />
      </div>
    </article>
  );
}
