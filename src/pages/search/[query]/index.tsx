import Navbar from "@/components/views/Navbar"
import SearchComp from "@/components/views/Search";
import { useRouter } from "next/router";

export default function Search() {
    let router = useRouter();
    let slug = router.query.query;
    return (
        <>
            <Navbar page="preview" />
            {slug ?
                <SearchComp slugg={slug} />
                : "Loading"
            }
        </>
    );
};