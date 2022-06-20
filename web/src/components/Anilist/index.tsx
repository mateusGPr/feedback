import { useQuery } from "@apollo/client";
import { CircleNotch } from "phosphor-react";
import { FormEvent, useState } from "react";
import NavBar from "./Navbar";
import { SerieList } from "./SerieList";
import { seriesSearch } from "./service/querys";

export function Anilist() {
    const [searchText, setSearchText] = useState('' as string | null)

    const { loading, error, data, refetch } = useQuery(seriesSearch, {
        variables: {
            query: "Bleach"
        }
    });

    if (loading) {
        return (<div className="h-screen w-screen flex items-center justify-center text-green-600">
            <CircleNotch className="animate-spin h-64 w-64" />
        </div>);
    }

    if (error) {
        return <p>Ocorreu um erro...</p>;
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        refetch({ query: searchText as string });
    };

    const changeSearchText = (event: FormEvent) => {
        const element = event.target as HTMLInputElement;
        setSearchText(element.value);
    };

    if (data.Page.media.length == 0) {
        return (<div className="flex">
            <NavBar handleSubmit={handleSubmit} changeSearchText={changeSearchText} />
            <div className="mt-20 flex items-center justify-center w-screen text-2xl text-green-600">
                Sem resultados...
            </div>
        </div>)
    }
    return (<div className="flex">
        <NavBar handleSubmit={handleSubmit} changeSearchText={changeSearchText} />
        <SerieList data={data} />
    </div>)
}