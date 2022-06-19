import { useQuery } from "@apollo/client";
import { SerieList } from "./SerieList"
import { browseSeries, seriesSearch } from "./service/querys";
import NavBar from "./Navbar";
import { CircleNotch } from "phosphor-react";
import { FormEvent, useState } from "react";

export function Anilist() {
    const [searchText, setSearchText] = useState('' as string | null)

    const { loading, error, data, refetch } = useQuery(seriesSearch, {
        variables: {
            query: "Bleach"
        }
    });

    if (loading) {
        return (<div className="h-screen w-screen flex items-center justify-center text-amber-600">
            <CircleNotch className="animate-spin h-64 w-64" />
        </div>);
    }

    if (error) {
        return <p>Ocorreu um erro...</p>;
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        refetch({query: searchText as string});
    };

    const changeSearchText = (event: FormEvent) => {
        const element = event.target as HTMLInputElement;
        setSearchText(element.value);
    };
    console.log(data);
    return (<div className="flex">
        <NavBar handleSubmit={handleSubmit} changeSearchText={changeSearchText}/>
        <SerieList data={data} />
    </div>)
}