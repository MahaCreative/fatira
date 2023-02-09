import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useRef } from "react";
import { useEffect } from "react";

export default function FormProfile() {
    const inputRef = useRef();
    const { roles } = usePage().props;

    const { data, setData, post, put, errors, progress, processing } = useForm({
        nama_lengkap: "",
        ttl: "",
        nim: "",
        alamat: "",
        telp: "",
        semester: "",
        fakultas_id: "",
        prodi_id: "",
        thumbnail: "",
    });
    const { fakultas } = usePage().props;
    const { prodi } = usePage().props;
    const { profil } = usePage().props;
    console.log(profil);
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("profile.profileStore"));
    };
    const updateHandler = (e) => {
        e.preventDefault();
        router.post(route("profile.profileUpdate"), {
            _method: "put",
            thumbnail: data.thumbnail,
            data,
        });
    };
    useEffect(() => {
        setData({
            ...data,
            nama_lengkap: profil ? profil.nama_lengkap : "",
            ttl: profil ? profil.ttl : "",
            nim: profil ? profil.nim : "",
            alamat: profil ? profil.alamat : "",
            telp: profil ? profil.telp : "",
            semester: profil ? profil.semester : "",
            fakultas_id: profil ? profil.fakultas_id : "",
            prodi_id: profil ? profil.prodi_id : "",
            thumbnail: profil ? profil.thumbnail : "",
        });
    }, [profil]);
    return (
        <div>
            <div>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Jika anda ingin mengupdate data akun login anda silahkan
                    rubah isian dibawah ini, jika tidak silahkan abaikan isian
                    dibawah ini.
                </p>
            </div>
            <div className="">
                <div className="mb-3 w-full rounded-lg overflow-hidden flex items-center justify-center ">
                    <img
                        className="w-full h-[250px] object-cover object-center"
                        src={
                            profil
                                ? "storage/" + profil.thumbnail
                                : "/images/profile/default_profile.png"
                        }
                        alt=""
                    />
                </div>
                <div className="shadow-sm shadow-gray-400/50 px-2.5 py-4">
                    <form
                        onSubmit={profil ? updateHandler : submitHandler}
                        encType="multipart/form-data"
                    >
                        <div className="">
                            <div>
                                {roles.name === "mahasiswa" && (
                                    <>
                                        <InputLabel for="nim" value="NIM" />
                                        <TextInput
                                            ref={inputRef}
                                            id="nim"
                                            name="nim"
                                            value={data.nim}
                                            handleChange={changeHandler}
                                            type="text"
                                            className="mt-1 block w-full"
                                        />

                                        <InputError
                                            message={errors.nim}
                                            className="mt-2"
                                        />
                                    </>
                                )}

                                <InputLabel
                                    for="nama_lengkap"
                                    value="Nama Lengkap"
                                />
                                <TextInput
                                    ref={inputRef}
                                    id="nama_lengkap"
                                    name="nama_lengkap"
                                    value={data.nama_lengkap}
                                    handleChange={changeHandler}
                                    type="text"
                                    className="mt-1 block w-full"
                                />

                                <InputError
                                    message={errors.nama_lengkap}
                                    className="mt-2"
                                />

                                <InputLabel for="ttl" value="Tanggal Lahir" />
                                <TextInput
                                    ref={inputRef}
                                    id="ttl"
                                    name="ttl"
                                    value={data.ttl}
                                    handleChange={changeHandler}
                                    type="date"
                                    className="mt-1 block w-full"
                                />

                                <InputError
                                    message={errors.ttl}
                                    className="mt-2"
                                />

                                <InputLabel for="telp" value="Telephone" />
                                <TextInput
                                    ref={inputRef}
                                    id="telp"
                                    name="telp"
                                    value={data.telp}
                                    handleChange={changeHandler}
                                    type="text"
                                    className="mt-1 block w-full"
                                />

                                <InputError
                                    message={errors.telp}
                                    className="mt-2"
                                />

                                <InputLabel for="alamat" value="Alamat" />
                                <TextInput
                                    ref={inputRef}
                                    id="alamat"
                                    name="alamat"
                                    value={data.alamat}
                                    handleChange={changeHandler}
                                    type="text"
                                    className="mt-1 block w-full"
                                />

                                <InputError
                                    message={errors.alamat}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                {roles.name === "mahasiswa" && (
                                    <>
                                        <InputLabel
                                            for="fakultas_id"
                                            value="Fakultas"
                                        />
                                        <select
                                            ref={inputRef}
                                            id="fakultas_id"
                                            name="fakultas_id"
                                            defaultValue={""}
                                            onChange={changeHandler}
                                            className="border-gray-300 capitalize focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                        >
                                            <option
                                                value={
                                                    profil != null
                                                        ? profil.fakultas_id
                                                        : "Pilih Fakultas"
                                                }
                                            >
                                                {profil != null
                                                    ? profil.fakultas.fakultas
                                                    : "Pilih Fakultas"}
                                            </option>
                                            {fakultas.map((item, key) => (
                                                <option
                                                    key={key}
                                                    value={item.id}
                                                >
                                                    {item.fakultas}
                                                </option>
                                            ))}
                                        </select>

                                        <InputError
                                            message={errors.fakultas_id}
                                            className="mt-2"
                                        />

                                        <InputLabel
                                            for="prodi_id"
                                            value="Program Studi"
                                        />
                                        <select
                                            onChange={changeHandler}
                                            ref={inputRef}
                                            id="prodi_id"
                                            name="prodi_id"
                                            defaultValue={""}
                                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                        >
                                            <option
                                                value={
                                                    profil != null
                                                        ? profil.prodi_id
                                                        : ""
                                                }
                                            >
                                                {profil != null
                                                    ? profil.prodi.prodi
                                                    : "Pilih Prodi"}
                                            </option>
                                            {prodi.map((item, key) => (
                                                <option
                                                    key={key}
                                                    value={item.id}
                                                >
                                                    {item.prodi}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.prodi_id}
                                            className="mt-2"
                                        />

                                        <InputLabel
                                            for="semester"
                                            value="Semester"
                                        />
                                        <TextInput
                                            ref={inputRef}
                                            id="semester"
                                            name="semester"
                                            value={data.semester}
                                            handleChange={changeHandler}
                                            type="text"
                                            min={1}
                                            max={12}
                                            className="mt-1 block w-full"
                                        />
                                        <InputError
                                            message={errors.semester}
                                            className="mt-2"
                                        />
                                    </>
                                )}
                                <InputLabel for="thumbnail" value="thumbnail" />
                                <TextInput
                                    ref={inputRef}
                                    id="thumbnail"
                                    name="thumbnail"
                                    // value={data.password}
                                    handleChange={(e) =>
                                        setData("thumbnail", e.target.files[0])
                                    }
                                    type="file"
                                    className="mt-1 block w-full"
                                />
                                <InputError
                                    message={errors.thumbnail}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <PrimaryButton
                            className="mt-1 block"
                            processing={processing}
                        >
                            Save
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
    );
}
