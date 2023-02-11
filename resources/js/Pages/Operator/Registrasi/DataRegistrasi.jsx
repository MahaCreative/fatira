import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import Tables from "@/Components/Table";
import { Table } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PrimaryButton from "@/Components/PrimaryButton";
export default function DataRegistrasi() {
    const [openModal, setOpenModal] = useState(false);
    const { registrasi } = usePage().props;
    const [model, setModel] = useState(null);
    console.log(registrasi[0].bukti_pembayaran == null ? "abg" : "as");
    const prosesRegistrasi = (e) => {
        setModel(e);
        router.post(route("proses-registrasi", model));
    };
    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Data Registrasi Mahasiswa
                    </h2>
                }
            >
                <Head title="History Pembayaran Registrasi" />

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 my-5">
                    <Modal
                        show={openModal}
                        onClose={() => setOpenModal(false)}
                        className="w-full "
                    ></Modal>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <p className="text-sm font-medium">
                            Hy opertor yang bertugas, semoga sehat selalu dan
                            selamat bekerja. Lakukan verifikasi registrasi
                            mahasiswa secepatnya agar sistem akademik berjalan
                            dengan baik tanpa kendala
                        </p>
                    </div>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="flex gap-3"></div>
                        <div>
                            <Tables>
                                <Tables.Thead>
                                    <tr>
                                        <Tables.Th>
                                            <p className="text-sm font-light">
                                                Data Mahasiswa
                                            </p>
                                        </Tables.Th>
                                        <Tables.Th>
                                            <p className="text-sm font-light">
                                                Data Registrasi
                                            </p>
                                        </Tables.Th>
                                        <Tables.Th>
                                            <p className="text-sm font-light">
                                                Data Pembayaran
                                            </p>
                                        </Tables.Th>
                                        <Tables.Th>
                                            <p className="text-sm font-light">
                                                Status
                                            </p>
                                        </Tables.Th>
                                        <Tables.Th>Aksi</Tables.Th>
                                    </tr>
                                </Tables.Thead>
                                <Tables.Tbody>
                                    {registrasi.map((item, key) => (
                                        <tr
                                            key={key + 1}
                                            className="capitalize"
                                        >
                                            <Tables.Td className="text-sm font-light">
                                                <div className="flex gap-3">
                                                    <p>Nama: </p>
                                                    <p>
                                                        {
                                                            item.profil
                                                                .nama_lengkap
                                                        }
                                                    </p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <p>nim: </p>
                                                    <p>{item.profil.nim}</p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <p>telp: </p>
                                                    <p>{item.profil.telp}</p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <p>prodi: </p>
                                                    <p>
                                                        {
                                                            item.profil.prodi
                                                                .prodi
                                                        }
                                                    </p>
                                                </div>
                                            </Tables.Td>
                                            <Tables.Td className="text-sm font-light">
                                                <div className="flex gap-3">
                                                    <p>Kode Regis: </p>
                                                    <p>{item.kd_registrasi}</p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <p>Tanggal Regis: </p>
                                                    <p>
                                                        {
                                                            item.tanggal_registrasi
                                                        }
                                                    </p>
                                                </div>
                                                <div className="flex gap-3">
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
                                            </Tables.Td>
                                            {item.bukti_pembayaran !== null ? (
                                                <Tables.Td>
                                                    <div className="flex gap-3">
                                                        <p>Nama Rekening: </p>
                                                        <p>
                                                            {
                                                                item
                                                                    .bukti_pembayaran
                                                                    .nama_rekening
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <p>Nomor Rekening: </p>
                                                        <p>
                                                            {
                                                                item
                                                                    .bukti_pembayaran
                                                                    .nomor_rekening
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <p>
                                                            Tanggal Pembayaran:{" "}
                                                        </p>
                                                        <p>
                                                            {
                                                                item
                                                                    .bukti_pembayaran
                                                                    .tanggal_pembayaran
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <p>
                                                            Tanggal Di Setujui:{" "}
                                                        </p>
                                                        <p>
                                                            {
                                                                item
                                                                    .bukti_pembayaran
                                                                    .tanggal_disetujui
                                                            }
                                                        </p>
                                                    </div>
                                                </Tables.Td>
                                            ) : (
                                                <Tables.Td>
                                                    <p>
                                                        Upload Bukti Pembayaran
                                                        Belum Ada
                                                    </p>
                                                </Tables.Td>
                                            )}
                                            <Tables.Td>
                                                <div className="flex gap-3">
                                                    <p>Status Regis: </p>
                                                    <p>
                                                        {item.status_registrasi}
                                                    </p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <p>Status Pembayaran: </p>
                                                    <p>
                                                        {item.status_pembayaran}
                                                    </p>
                                                </div>
                                                {item.bukti_pembayaran !==
                                                null ? (
                                                    <a
                                                        href={
                                                            "storage/" +
                                                            item
                                                                .bukti_pembayaran
                                                                .bukti_pembayaran
                                                        }
                                                    >
                                                        Lihat Bukti Pembayaran
                                                    </a>
                                                ) : (
                                                    <p>
                                                        {" "}
                                                        Bukti Pembayaran Belum
                                                        Di Upload
                                                    </p>
                                                )}
                                            </Tables.Td>
                                            <Tables.Td className="flex flex-col gap-2">
                                                {item.bukti_regis ? (
                                                    <p className="py-2.5 px-3 text-[8pt] rounded-md bg-green-500 text-white">
                                                        Registrasi Telah
                                                        Diproses
                                                    </p>
                                                ) : (
                                                    <PrimaryButton
                                                        onClick={() =>
                                                            prosesRegistrasi(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        Setujui Registrasi
                                                    </PrimaryButton>
                                                )}
                                            </Tables.Td>
                                        </tr>
                                    ))}
                                </Tables.Tbody>
                            </Tables>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}
