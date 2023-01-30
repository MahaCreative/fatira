import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { useRef } from "react";

export default function Form({ model, setModel, setOpenModal }) {
    const { fakultas } = usePage().props;
    const InputRef = useRef();
    const { data, setData, reset, post, put, errors } = useForm({
        id: "",
        kd_fak: "",
        fakultas: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin-fakultas"), {
            onSuccess: () => {
                reset("id", "kd_fak", "fakultas");
                setOpenModal(false);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        put(route("admin-fakultas"), {
            onSuccess: () => {
                reset("id", "kd_fak", "fakultas");
                setOpenModal(false);
                setModel(null);
            },
        });
    };
    useEffect(() => {
        setData({
            ...data,
            id: model ? model.id : "",
            fakultas: model ? model.fakultas : "",
            kd_fak: model ? model.kd_fak : "",
        });
    }, [model]);

    return (
        <div className=" px-4 py-2.5 items-center flex justify-center w-[450px]">
            <form
                action=""
                encType="multipart/form-data"
                className="w-full"
                onSubmit={model ? updateHandler : submitHandler}
            >
                <InputLabel value="Kode Fakultas" />
                <TextInput
                    value={data.kd_fak}
                    ref={InputRef}
                    handleChange={changeHandler}
                    id={"kd_fak"}
                    name={"kd_fak"}
                    className="w-[100%]"
                    type="text"
                />
                <InputError message={errors.kd_fak} className="mt-2" />

                <InputLabel value="Nama Fakultas" />
                <TextInput
                    value={data.fakultas}
                    handleChange={changeHandler}
                    id={"fakultas"}
                    name={"fakultas"}
                    className="w-[100%]"
                    type="text"
                />
                <InputError message={errors.fakultas} className="mt-2" />

                <PrimaryButton className="my-2">
                    {model ? "Update" : "Submit"}
                </PrimaryButton>
            </form>
        </div>
    );
}
