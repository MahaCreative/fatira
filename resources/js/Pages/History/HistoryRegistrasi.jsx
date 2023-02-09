import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import clsx from "clsx";
import Modal from "@/Components/Modal";
import FormPembayaran from "./FormPembayaran";

export default function HistoryRegistrasi() {
    const { auth } = usePage().props;
    const { registrasi } = usePage().props;
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
                <Head title="History Registrasi Mahasiswa" />

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 my-5">
                    <Modal
                        show={openModal}
                        onClose={() => setOpenModal(false)}
                        className="w-full "
                    >
                        <FormPembayaran
                            model={model}
                            editModel={model}
                            setModel={setModel}
                        />
                    </Modal>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <p className="text-sm font-medium">
                            Hy Mahasiswa Tomakaka, silahkan lihat history
                            transaksi yang telah anda lakukan di dalam sistem
                            kami. kami sangat senang jika anda terus
                            memanfaatkan sistem informasi yang kami buat.
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 my-2">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="border shadow-sm shadow-gray-400/40 py-2.5 px-4 my-2 rounded-md">
                            {registrasi.length > 0 ? (
                                registrasi.map((item, key) => (
                                    <div
                                        key={key + 1}
                                        className="border shadow-sm shadow-gray-400/40 py-2.5 px-4 my-2 rounded-md"
                                    >
                                        <div className="capitalize text-sm border-b items-center">
                                            <div>
                                                <h2 className=" font-semibold text-orange-500">
                                                    {item.status_registrasi}
                                                </h2>
                                                <p className="text-[8pt] font-extralight text-gray-500">
                                                    Tanggal Registrasi :{" "}
                                                    {item.tanggal_registrasi}
                                                </p>
                                                <p className="text-[8pt] font-extralight text-gray-500">
                                                    Tanggal Disetujui :{" "}
                                                    {item.tanggal_disetujui
                                                        ? item.tanggal_disetujui
                                                        : "Belum disetujui"}
                                                </p>
                                                <div className="flex gap-1">
                                                    {/* <img
                                                        src={
                                                            "storage/"+item.pdpt
                                                        }
                                                        alt=""
                                                    /> */}
                                                    <a
                                                        target={"_blank"}
                                                        href={
                                                            "storage/" +
                                                            item.pdpt
                                                        }
                                                        className="py-1 px-2 5 rounded-md shadow shadow-gray-400/50 text-gray-500 hover:cursor-pointer hover:text-gray-600 flex flex-col justify-center items-center"
                                                    >
                                                        <PictureAsPdfIcon
                                                            color="inherit"
                                                            fontSize="medium"
                                                        />
                                                        <p className="text-[8pt]">
                                                            PDPT
                                                        </p>
                                                    </a>
                                                    <a
                                                        target={"_blank"}
                                                        href={
                                                            "storage/" +
                                                            item.kwitansi
                                                        }
                                                        className="py-1 px-2 5 rounded-md shadow shadow-gray-400/50 text-gray-500 hover:cursor-pointer hover:text-gray-600 flex flex-col justify-center items-center"
                                                    >
                                                        <PictureAsPdfIcon
                                                            color="inherit"
                                                            fontSize="medium"
                                                        />
                                                        <p className="text-[8pt]">
                                                            KWITANSI
                                                        </p>
                                                    </a>
                                                    <a
                                                        target={"_blank"}
                                                        href={
                                                            "storage/" +
                                                            item.blanko
                                                        }
                                                        className="py-1 px-2 5 rounded-md shadow shadow-gray-400/50 text-gray-500 hover:cursor-pointer hover:text-gray-600 flex flex-col justify-center items-center"
                                                    >
                                                        <PictureAsPdfIcon
                                                            color="inherit"
                                                            fontSize="medium"
                                                        />
                                                        <p className="text-[8pt]">
                                                            BLANKO
                                                        </p>
                                                    </a>
                                                    <a
                                                        target={"_blank"}
                                                        href={
                                                            "storage/" +
                                                            item.krs
                                                        }
                                                        className="py-1 px-2 5 rounded-md shadow shadow-gray-400/50 text-gray-500 hover:cursor-pointer hover:text-gray-600 flex flex-col justify-center items-center"
                                                    >
                                                        <PictureAsPdfIcon
                                                            color="inherit"
                                                            fontSize="medium"
                                                        />
                                                        <p className="text-[8pt]">
                                                            KRS
                                                        </p>
                                                    </a>
                                                </div>
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
                                                <div>
                                                    <p className=" text-right text-[8pt] font-extralight text-gray-500">
                                                        Status Dilihat oleh
                                                        Operator
                                                    </p>
                                                    <p
                                                        className={clsx(
                                                            item.status_lihat_registrasi !==
                                                                "belum di lihat"
                                                                ? "bg-green-500/50 text-green-700"
                                                                : "bg-red-500/50 text-red-700",
                                                            "font-bold text-[8pt] backdrop-blur-sm py-1.5 px-3 rounded-md "
                                                        )}
                                                    >
                                                        {
                                                            item.status_lihat_registrasi
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className=" text-right text-[8pt] font-extralight text-gray-500">
                                                        Status Registrasi Anda
                                                    </p>
                                                    <p
                                                        className={clsx(
                                                            item.status_registrasi !==
                                                                "menunggu pengecekan data"
                                                                ? "bg-green-500/50 text-green-700"
                                                                : "bg-red-500/50 text-red-700",
                                                            "font-bold text-[8pt] backdrop-blur-sm py-1.5 px-3 rounded-md "
                                                        )}
                                                    >
                                                        {item.status_registrasi ===
                                                        "Registrasi Telah Di Terima"
                                                            ? "Anda Telah Berhasil di Registrasi"
                                                            : item.status_registrasi}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" my-3 items-center">
                                            <div>
                                                <h2 className=" font-semibold ">
                                                    Registrasi Semester{" "}
                                                    {item.semester}
                                                </h2>
                                                {item.bukti_regis && (
                                                    <Link className="py-2.5 px-3 bg-green-500 text-[8pt] text-white rounded-md">
                                                        Download Bukti
                                                        Registrasi
                                                    </Link>
                                                )}
                                            </div>
                                            <div className="">
                                                {!item.bukti_pembayaran && (
                                                    <button
                                                        onClick={() =>
                                                            uploadModalHandler(
                                                                item
                                                            )
                                                        }
                                                        className="py-1.5 px-3 rounded-md bg-green-400 text-white font-semibold text-sm"
                                                    >
                                                        Upload Bukti Pembayaran
                                                    </button>
                                                )}
                                            </div>
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
