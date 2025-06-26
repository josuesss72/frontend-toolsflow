"use client";
import Errors from "@/app/components/errors/Errors";
import React from "react";
import { useFormCompany } from "./hooks/form-company.hook";

const FormCompany = () => {
  const { register, handleSubmit, Submit, errors, router, isSubmitting } =
    useFormCompany();
  return (
    <form
      action=""
      onSubmit={handleSubmit(Submit)}
      className="flex flex-col gap-8"
    >
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Nombre"
          className="input_segundary w-full"
          {...register("name")}
        />
        <input
          type="text"
          placeholder="Email"
          className="input_segundary w-full"
          {...register("email")}
        />
        <input
          type="text"
          placeholder="Nit"
          className="input_segundary w-full"
          {...register("nit")}
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Carrera"
            className="input_segundary w-full"
            {...register("career")}
          />
          <input
            type="text"
            placeholder="Calle"
            className="input_segundary w-full"
            {...register("street")}
          />
          <input
            type="text"
            placeholder="Numero"
            className="input_segundary w-full"
            {...register("number")}
          />
        </div>
        <input
          type="text"
          placeholder="Ciudad"
          className="input_segundary w-full"
          {...register("city")}
        />
        <div className="flex gap-2">
          <select className="input_segundary w-16" {...register("indicative")}>
            <option value="+57">+57</option>
          </select>
          <input
            type="number"
            placeholder="000-000-0000"
            className="input_segundary w-full"
            {...register("phone")}
          />
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard")}
          className="btn_primary w-full"
        >
          Mas tarde
        </button>
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn_segundary w-full"
        >
          {isSubmitting ? "Loading..." : "Siguiente"}
        </button>
      </div>
      <Errors errors={errors} />
    </form>
  );
};

export default FormCompany;
