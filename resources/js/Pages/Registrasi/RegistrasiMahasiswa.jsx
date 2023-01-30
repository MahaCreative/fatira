import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Form from "./Form";
export default function RegistrasiMahasiswa() {
    const { auth } = usePage().props;
    return (
        <div>
            <AuthenticatedLayout
                auth={auth}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Profile
                    </h2>
                }
            >
                <Head title="Transaksi Registrasi Mahasiswa" />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 my-5">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h2 className="text-lg font-medium text-gray-900">
                            Transaksi Registrasi Mahasiswa
                        </h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Untuk dapat melakukan registrasi silahkan isikan
                            data-data yang telah disediakan di form isian
                            dibawah ini. Untuk jenis File yang akan di upload
                            adalah file yang berjenis PDF dan maximal ukuran
                            perfile itu adalah 2MB
                        </p>
                    </div>
                </div>
                <Form />
            </AuthenticatedLayout>
        </div>
    );
}
