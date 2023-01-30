import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import moment from "moment";
import React from "react";

export default function Form() {
    const { profil } = usePage().props;
    const { jenis_registrasi } = usePage().props;
    const { data, setData, post, errors, processing, progress, reset } =
        useForm({
            nim: profil.nim,
            prodi_id: profil.prodi_id,
            fakultas_id: profil.fakultas_id,
            jenis_registrasi_id: "",
            semester: "",
            pdpt: "",
            kwitansi: "",
            krs: "",
            blanko: "",
        });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.files[0] });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("transaksi-registrasi-mahasiswa"));
    };
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 my-2">
            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <div>
                    <div className="">
                        <h2 className="text-md font-medium text-gray-900">
                            Data Mahasiswa
                        </h2>
                        <div className="flex justify-between capitalize">
                            <div>
                                <p>Nama : {profil.nama_lengkap}</p>
                                <p>Nim : {profil.nim}</p>
                                <p>Semester Aktif : {profil.semester}</p>
                                <p>
                                    Tanggal :
                                    {moment(new Date()).format("DD-MM-YYYY")}
                                </p>
                            </div>
                            <div>
                                <p>Fakultas : {profil.fakultas.fakultas}</p>
                                <p>Jurusan : {profil.prodi.prodi}</p>
                                <p>Kode Registrasi : </p>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={submitHandler}
                        encType="multipart/form-data"
                    >
                        <div className="border border-gray-400/30 py-3 px-4 shadow-sm shadow-gray-300/50 rounded-lg">
                            <div>
                                <div>
                                    <InputLabel
                                        for="jenis_registrasi_id"
                                        value="Jenis Registrasi"
                                    />
                                    <select
                                        onChange={(e) =>
                                            setData(
                                                "jenis_registrasi_id",
                                                e.target.value
                                            )
                                        }
                                        name="jenis_registrasi_id"
                                        id="jenis_registrasi_id"
                                        className="border-gray-300 capitalize focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                    >
                                        <option value="">
                                            Pilih Jenis Registrasi
                                        </option>
                                        {jenis_registrasi.map((item, key) => (
                                            <option
                                                key={key + 1}
                                                value={item.id}
                                            >
                                                {item.jenis_registrasi}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={errors.jenis_registrasi_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        for="semester"
                                        value="Semester"
                                    />
                                    <TextInput
                                        type="text"
                                        name="semester"
                                        id="semester"
                                        handleChange={(e) =>
                                            setData("semester", e.target.value)
                                        }
                                        className="mt-1 block w-full"
                                    />
                                    <InputError
                                        message={errors.semester}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        for="pdpt"
                                        value="File Pdf PDPT"
                                    />
                                    <TextInput
                                        type="file"
                                        id="pdpt"
                                        name="pdpt"
                                        handleChange={(e) =>
                                            setData("pdpt", e.target.files[0])
                                        }
                                        className="mt-1 block w-full"
                                    />
                                    <InputError
                                        message={errors.pdpt}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        for="kwitansi"
                                        value="File PDF Kwitansi"
                                    />
                                    <TextInput
                                        type="file"
                                        id="kwitansi"
                                        name="kwitansi"
                                        handleChange={(e) =>
                                            setData(
                                                "kwitansi",
                                                e.target.files[0]
                                            )
                                        }
                                        className="mt-1 block w-full"
                                    />
                                    <InputError
                                        message={errors.kwitansi}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        for="krs"
                                        value="File PDF KRS"
                                    />
                                    <TextInput
                                        type="file"
                                        id="krs"
                                        name="krs"
                                        handleChange={(e) =>
                                            setData("krs", e.target.files[0])
                                        }
                                        className="mt-1 block w-full"
                                    />
                                    <InputError
                                        message={errors.krs}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        for="blanko"
                                        value="File PDF Blanko Registrasi"
                                    />
                                    <TextInput
                                        type="file"
                                        name="blanko"
                                        id="blanko"
                                        handleChange={(e) =>
                                            setData("blanko", e.target.files[0])
                                        }
                                        className="mt-1 block w-full"
                                    />
                                    <InputError
                                        message={errors.blanko}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <PrimaryButton className="my-3">
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
