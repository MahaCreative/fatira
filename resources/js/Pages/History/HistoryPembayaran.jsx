import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import clsx from "clsx";
import Modal from "@/Components/Modal";
import FormPembayaran from "./FormPembayaran";

export default function HistoryPembayaran() {
    const { auth } = usePage().props;
    const { pembayaran } = usePage().props;
    const [model, setModel] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const uploadModalHandler = (data) => {
        setModel(data);
        setOpenModal(true);
    };

    return (
        <div>
            <AuthenticatedLayout
                auth={auth}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        History Registrasi Mahasiswa
                    </h2>
                }
            >
                <Head title="History Pembayaran Registrasi" />

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 my-5">
                    <Modal
                        show={openModal}
                        onClose={() => setOpenModal(false)}
                        className="w-full "
                    >
                        <FormPembayaran />
                    </Modal>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <p className="text-sm font-medium">
                            Hy Mahasiswa Tomakaka, silahkan lihat history
                            transaksi pembayaran registrasi yang telah anda
                            lakukan di dalam sistem kami. kami sangat senang
                            jika anda terus memanfaatkan sistem informasi yang
                            kami buat.
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 my-2">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="flex justify-between">
                            <TextInput placeholder="Cari Data..." />
                        </div>
                        <div className="border shadow-sm shadow-gray-400/40 py-2.5 px-4 my-2 rounded-md">
                            {pembayaran.length > 0 ? (
                                pembayaran.map((item, key) => (
                                    <div
                                        key={key + 1}
                                        className="border shadow-sm shadow-gray-400/40 py-2.5 px-4 my-2 rounded-md"
                                    >
                                        <div className="capitalize text-sm border-b flex justify-between items-center">
                                            <div>
                                                <h2 className=" font-semibold text-orange-500">
                                                    {item.status_registrasi}
                                                </h2>
                                                <p className="text-[8pt] font-extralight text-gray-500">
                                                    Tanggal Upload :{" "}
                                                    {item.tanggal_pembayaran}
                                                </p>
                                                <p className="text-[8pt] font-extralight text-gray-500">
                                                    Tanggal Disetujui :{" "}
                                                    {item.tanggal_disetujui
                                                        ? item.tanggal_disetujui
                                                        : "Belum disetujui"}
                                                </p>
                                                <div className="flex gap-1"></div>
                                            </div>
                                            <div className="py-1.5 px-3 flex flex-col gap-1">
                                                <div>
                                                    <p className=" text-right text-[8pt] font-extralight text-gray-500">
                                                        Status Pembayaran
                                                    </p>
                                                    <p className="font-bold text-[8pt] bg-green-500/50 backdrop-blur-sm py-1.5 px-3 rounded-md text-green-700">
                                                        {item.status_pembayaran}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-24 h-24 rounded-md">
                                            <img
                                                src={
                                                    "storage/" +
                                                    item.bukti_pembayaran
                                                }
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex justify-between my-3 items-center">
                                            <h2 className=" font-semibold ">
                                                Bukti Pembayaran{" "}
                                            </h2>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Tidak Ada Data</p>
                            )}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}
