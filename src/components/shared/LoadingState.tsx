import Image from "next/image";
import { PreLoader } from "../assets";

export default function LoadingState() {
    return (
        <div className="flex justify-center items-center p-4">
            <Image width={250} height={250} src={PreLoader} alt="Pre-Loader" />
        </div>
    )
}