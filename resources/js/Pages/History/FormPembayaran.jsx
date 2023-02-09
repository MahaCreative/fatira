import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function FormPembayaran({ model, editModel, setModel }) {
    const { bank } = usePage().props;
    const { profil } = usePage().props;
    const { data, setData, post, progress, processing, errors, reset } =
        useForm({
            profil_id: profil.id,
            nim: profil.nim,
            prodi_id: profil.prodi_id,
            fakultas_id: profil.fakultas_id,
            registrasi_id: model ? model.id : "",
            bank_id: "",
            nama_rekening: "",
            nomor_rekening: "",
            tanggal_pembayaran: "",
            bukti_pembayaran: "",
        });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("pembayaran-registrasi.store"), {
            onSuccess: () => {
                reset();
                setModel(null);
            },
        });
    };

    return (
        <div className=" px-4 py-2.5 items-center flex justify-center w-[390px]">
            <form
                action=""
                encType="multipart/form-data"
                className="w-full"
                onSubmit={submitHandler}
            >
                <InputLabel value="Nama Rekening" />
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
                    handleChange={changeHandler}
                    id={"nama_rekening"}
                    name={"nama_rekening"}
                    className="w-[100%]"
                    type="text"
                    value={data.nama_rekening}
                />

                <InputLabel value="Nomor Rekening" />
                <TextInput
                    className="w-full"
                    handleChange={changeHandler}
                    id={"nomor_rekening"}
                    name={"nomor_rekening"}
                    type="text"
                    value={data.nomor_rekening}
                />

                <InputLabel value="Tanggal Pembayaran" />
                <TextInput
                    className="w-full"
                    type={"date"}
                    handleChange={changeHandler}
                    id={"tanggal_pembayaran"}
                    name={"tanggal_pembayaran"}
                    value={data.tanggal_pembayaran}
                />

                <InputLabel value="Upload Bukti Pembayaran" />
                <TextInput
                    className="w-full"
                    type="file"
                    handleChange={(e) =>
                        setData("bukti_pembayaran", e.target.files[0])
                    }
                    // value={data.bukti_pembayaran}
                    id={"bukti_pembayaran"}
                    name={"bukti_pembayaran"}
                />
                <PrimaryButton className="my-2">Submit</PrimaryButton>
            </form>
        </div>
    );
}
