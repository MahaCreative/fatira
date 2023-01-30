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
        kd_prodi: "",
        fakultas_id: "",
        prodi: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("admin-prodi"), {
            onSuccess: () => {
                reset("id", "kd_prodi", "fakultas_id", "prodi");
                setOpenModal(false);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        put(route("admin-prodi"), {
            onSuccess: () => {
                reset("id", "kd_prodi", "fakultas_id", "prodi");
                setOpenModal(false);
                setModel(null);
            },
        });
    };
    useEffect(() => {
        setData({
            ...data,
            id: model ? model.id : "",
            fakultas_id: model ? model.fakultas_id : "",
            prodi: model ? model.prodi : "",
            kd_prodi: model ? model.kd_prodi : "",
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
                <InputLabel value="Nama Fakultas" />
                <select
                    onChange={changeHandler}
                    id="fakultas_id"
                    name="fakultas_id"
                    className="capitalize border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                >
                    <option value={data.bank_id}>Pilih Fakultas</option>
                    {fakultas.map((item, key) => (
                        <option key={key + 1} value={item.id}>
                            {item.fakultas}
                        </option>
                    ))}
                </select>
                <InputError message={errors.fakutlas_id} className="mt-2" />

                <InputLabel value="Kode Prodi" />
                <TextInput
                    value={data.kd_prodi}
                    ref={InputRef}
                    handleChange={changeHandler}
                    id={"kd_prodi"}
                    name={"kd_prodi"}
                    className="w-[100%]"
                    type="text"
                />
                <InputError message={errors.kd_prodi} className="mt-2" />

                <InputLabel value="Nama Prodi" />
                <TextInput
                    value={data.prodi}
                    handleChange={changeHandler}
                    id={"prodi"}
                    name={"prodi"}
                    className="w-[100%]"
                    type="text"
                />
                <InputError message={errors.prodi} className="mt-2" />

                <PrimaryButton className="my-2">
                    {model ? "Update" : "Submit"}
                </PrimaryButton>
            </form>
        </div>
    );
}
