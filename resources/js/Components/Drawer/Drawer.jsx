import clsx from "clsx";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, usePage } from "@inertiajs/react";
export default function Drawer({ openDrawer, setOpenDrawer }) {
    const { roles } = usePage().props;
    const { profil } = usePage().props;
    return (
        <div className="relative z-[9999]">
            <div
                className={clsx(
                    openDrawer ? "w-[340px] left-0" : "-left-96",
                    " min-h-screen fixed top-0 left-0 bg-slate-900/90 duration-300 backdrop-blur-sm"
                )}
            >
                <div className="relative w-full">
                    <button
                        onClick={() => setOpenDrawer(false)}
                        className=" absolute top-5 right-5 px-3 py-1.5 rounded-md text-center bg-white"
                    >
                        <CloseIcon fontSize="small" color="inherit" />
                    </button>
                    <div className="static inline-block mt-24 w-full ">
                        <div className="relative w-full flex gap-3 px-4 bg-orange-600/50 py-2.5">
                            <div className="w-20 h-20 overflow-hidden rounded-full">
                                <img
                                    src={
                                        profil
                                            ? "storage/" + profil.thumbnail
                                            : "images/profile/default_profile.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="relative">
                                <p className="font-mono font-bold text-white text-2xl">
                                    {profil
                                        ? profil.nama_lengkap
                                        : "Nama Lengkap"}
                                </p>
                                {roles.name === "mahasiswa" && (
                                    <>
                                        <p className="text-white font-extralight font-mono">
                                            {profil ? profil.nim : "NIM"}
                                        </p>
                                    </>
                                )}
                                <Link
                                    href={route("profile.edit")}
                                    className="text-white absolute bottom-0 font-mono font-extralight text-sm hover:text-orange-500"
                                >
                                    Setting Profile
                                </Link>
                            </div>
                        </div>
                        <Link
                            href={route("dashboard")}
                            className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                        >
                            <Link
                                href={route("dashboard")}
                                className="uppercase text-white group-hover:text-gray-300"
                            >
                                halaman utama
                            </Link>
                        </Link>

                        <div>
                            {roles.name == "mahasiswa" && (
                                <>
                                    <Link
                                        href={route(
                                            "transaksi-registrasi-mahasiswa"
                                        )}
                                        className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                                    >
                                        <Link
                                            href={route(
                                                "transaksi-registrasi-mahasiswa"
                                            )}
                                            className="uppercase text-white group-hover:text-gray-300"
                                        >
                                            REGISTRASI Mahasiswa
                                        </Link>
                                    </Link>
                                    <Link
                                        href={route(
                                            "history-registrasi-mahasiswa"
                                        )}
                                        className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                                    >
                                        <Link
                                            href={route(
                                                "history-registrasi-mahasiswa"
                                            )}
                                            className="uppercase text-white group-hover:text-gray-300"
                                        >
                                            history REGISTRASI
                                        </Link>
                                    </Link>
                                    <Link
                                        href={route(
                                            "history-pembayaran-registrasi"
                                        )}
                                        className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                                    >
                                        <Link className="uppercase text-white group-hover:text-gray-300">
                                            history pembayaran
                                        </Link>
                                    </Link>
                                </>
                            )}
                        </div>

                        {roles.name === "operator" && (
                            <div>
                                <Link
                                    href={route("admin-fakultas")}
                                    className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                                >
                                    <Link className="uppercase text-white group-hover:text-gray-300">
                                        Data Fakultas
                                    </Link>
                                </Link>
                                <Link
                                    href={route("admin-prodi")}
                                    className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                                >
                                    <Link className="uppercase text-white group-hover:text-gray-300">
                                        Data Prodi
                                    </Link>
                                </Link>
                                {/* <div className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer">
                                    <Link
                                        href={route("bank-tomakaka")}
                                        className="uppercase text-white group-hover:text-gray-300"
                                    >
                                        Data Mahasiswa
                                    </Link>
                                </div> */}
                                <Link
                                    href={route("bank-tomakaka")}
                                    className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                                >
                                    <Link className="uppercase text-white group-hover:text-gray-300">
                                        Data Bank Tomakaka
                                    </Link>
                                </Link>
                                <Link
                                    href={route("admin-registrasi-mahasiswa")}
                                    className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                                >
                                    <Link className="uppercase text-white group-hover:text-gray-300">
                                        Data Registrasi Mahasiswa
                                    </Link>
                                </Link>
                                <Link
                                    href={route("logout")}
                                    className="block px-4 bg-orange-500/50 my-3 py-2.5 hover:bg-orange-500 group hover:cursor-pointer"
                                >
                                    <Link className="uppercase text-white group-hover:text-gray-300">
                                        Logout
                                    </Link>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
