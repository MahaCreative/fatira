import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import Form from "./Form";
import SecondaryButton from "@/Components/SecondaryButton";
import Tables from "@/Components/Table";
export default function Fakultas() {
    const { auth } = usePage().props;
    const [openModal, setOpenModal] = useState(false);
    const { fakultas } = usePage().props;

    const [model, setModel] = useState(null);
    const editModal = (data) => {
        setModel(data);
        setOpenModal(true);
    };
    const deleteHandler = (data) => {
        router.delete(route("admin-fakultas", data));
    };
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Program Studi
                </h2>
            }
        >
            <Head title="Program Studi" />

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
                        Hy opertor yang bertugas, semoga sehat selalu dan
                        selamat bekerja.
                    </p>
                </div>
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <PrimaryButton onClick={() => setOpenModal(true)}>
                        Tambah Fakultas
                    </PrimaryButton>
                    <Tables>
                        <Tables.Thead>
                            <tr>
                                <Tables.Th>Kode Fakultas</Tables.Th>
                                <Tables.Th>Fakultas</Tables.Th>
                                <Tables.Th>Aksi</Tables.Th>
                            </tr>
                        </Tables.Thead>
                        <Tables.Tbody>
                            {fakultas.map((item, key) => (
                                <tr className="capitalize">
                                    <Tables.Td>{item.kd_fak}</Tables.Td>
                                    <Tables.Td>{item.fakultas}</Tables.Td>
                                    <Tables.Td>
                                        <div className="flex gap-3 my-2">
                                            <SecondaryButton
                                                onClick={() => editModal(item)}
                                            >
                                                Edit
                                            </SecondaryButton>
                                            {!item.prodi.length < 1 && (
                                                <SecondaryButton
                                                    onClick={() =>
                                                        deleteHandler(item)
                                                    }
                                                >
                                                    Delete
                                                </SecondaryButton>
                                            )}
                                        </div>
                                    </Tables.Td>
                                </tr>
                            ))}
                        </Tables.Tbody>
                    </Tables>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
