import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import Form from "./Form";
import SecondaryButton from "@/Components/SecondaryButton";
export default function Databank() {
    const [openModal, setOpenModal] = useState(false);
    const { banks } = usePage().props;
    const [model, setModel] = useState(null);
    const editModal = (data) => {
        setModel(data);
        setOpenModal(true);
    };
    const deleteHandler = (data) => {
        router.delete(route("bank-tomakaka"));
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Data Bank
                </h2>
            }
        >
            <Head title="Data Bank" />
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Form
                    model={model}
                    setOpenModal={setOpenModal}
                    setModel={setModel}
                />
            </Modal>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 my-5">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda veritatis minus exercitationem esse, ad quasi
                        impedit ducimus ullam unde, vitae dolor eius cum dolorum
                        placeat fugiat aut accusamus vero officia dignissimos.
                        Corrupti nisi suscipit eos enim? Mollitia impedit cum
                        exercitationem?
                    </p>
                </div>
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <PrimaryButton onClick={() => setOpenModal(true)}>
                        Tambah Bank
                    </PrimaryButton>
                    <div className="my-2">
                        {banks.map((item, key) => (
                            <div>
                                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                    <p>Nama Rekening : {item.nama_rekening}</p>
                                    <p>
                                        Nomor Rekening : {item.nomor_rekening}
                                    </p>
                                </div>
                                <div className="flex gap-3 my-2">
                                    <SecondaryButton
                                        onClick={() => editModal(item)}
                                    >
                                        Edit
                                    </SecondaryButton>
                                    <SecondaryButton
                                        onClick={() => deleteHandler(item)}
                                    >
                                        Delete
                                    </SecondaryButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
