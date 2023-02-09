import { useEffect, useState } from "react";
import clsx from "clsx";
import Badges from "@/Components/AppBar/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import toast, { Toaster } from "react-hot-toast";
import Drawer from "@/Components/Drawer/Drawer";
import { usePage } from "@inertiajs/react";
export default function Authenticated({ auth, header, children }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { flash } = usePage().props;

    useEffect(() => {
        flash.type && toast[flash.type](flash.message);
    });

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Toaster />
            <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <div className="w-full">
                <div className="flex gap-3 justify-between bg-orange-500 w-full px-4 py-2.5 items-center ">
                    <div className="flex gap-3 items-center">
                        <button
                            onClick={() => setOpenDrawer(true)}
                            className=" px-3 py-1.5 rounded-md text-center bg-white"
                        >
                            <MenuIcon color="inherit" />
                        </button>
                        <h3 className="font-sans text-white font-semibold text-xl">
                            Applikasi Registrasi Mahasiswa
                        </h3>
                    </div>
                    <div className="">
                        <Badges />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}
