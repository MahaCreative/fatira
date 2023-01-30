import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Form({ model, setModel, setOpenModal }) {
    const { bank } = usePage().props;
    const { data, setData, reset, post, put } = useForm({
        bank_id: "",
        nama_rekening: "",
        nomor_rekening: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("bank-tomakaka"), {
            onSuccess: () => {
                reset("bank_id", "nama_rekening", "nomor_rekening");
                setOpenModal(false);
            },
        });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        put(route("bank-tomakaka"), {
            onSuccess: () => {
                reset("bank_id", "nama_rekening", "nomor_rekening");
                setOpenModal(false);
                setModel(null);
            },
        });
    };
    useEffect(() => {
        setData({
            ...data,
            bank_id: model ? model.bank_id : "",
            nama_rekening: model ? model.nama_rekening : "",
            nomor_rekening: model ? model.nomor_rekening : "",
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
                <InputLabel value="Nama Bank" />
                <select
                    onChange={changeHandler}
                    id="bank_id"
                    name="bank_id"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                >
                    <option value={data.bank_id}>Pilih Bank</option>
                    {bank.map((item, key) => (
                        <option key={key + 1} value={item.id}>
                            {item.nama_bank}
                        </option>
                    ))}
                </select>

                <InputLabel value="Nama Rekening" />
                <TextInput
                    value={data.nama_rekening}
                    handleChange={changeHandler}
                    id={"nama_rekening"}
                    name={"nama_rekening"}
                    className="w-[100%]"
                    type="text"
                />

                <InputLabel value="Nomor Rekening" />
                <TextInput
                    value={data.nomor_rekening}
                    className="w-full"
                    handleChange={changeHandler}
                    id={"nomor_rekening"}
                    name={"nomor_rekening"}
                    type="text"
                />
                <PrimaryButton className="my-2">
                    {model ? "Update" : "Submit"}
                </PrimaryButton>
            </form>
        </div>
    );
}
