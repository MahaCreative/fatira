import { Badge } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import clsx from "clsx";
import { Link, usePage } from "@inertiajs/react";
export default function Badges() {
    const [popOver, setPopOver] = useState(false);
    const { message_registrasi } = usePage().props;
    const jumlahDilihat = message_registrasi.length;
    const { roles } = usePage().props;
    return (
        <div>
            {roles.name !== "mahasiswa" && (
                <div>
                    <Badge
                        onClick={() => setPopOver(!popOver)}
                        className=" text-white hover:text-gray-600 hover:cursor-pointer"
                        badgeContent={jumlahDilihat}
                        color="error"
                    >
                        <MailIcon color="inherit" />
                    </Badge>
                    <Link
                        href={route("admin-registrasi-mahasiswa")}
                        className={clsx(
                            popOver
                                ? "translate-y-0 visible"
                                : "-translate-y-10 collapse",
                            "transition duration-300 absolute right-5 top-14 w-[50%] bg-slate-900/80 rounded-md py-2.5 px-3 text-white"
                        )}
                    >
                        <p className="text-sm">
                            Terdapat Registrasi Mahasiswa Yang Belum dilihat
                        </p>
                        {message_registrasi.map((item, key) => (
                            <Link
                                key={key + 1}
                                className="bg-slate-800/30 px-3 py-1.5 block hover:bg-slate-800/50 rounded-md transition duration-300"
                            >
                                <div className=" flex justify-between">
                                    <p className="text-sm font-semibold capitalize">
                                        {item.profil.nama_lengkap}
                                    </p>
                                    <p className="text-sm italic font-extralight capitalize">
                                        {item.tanggal_registrasi}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </Link>
                </div>
            )}
        </div>
    );
}
