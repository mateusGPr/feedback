import { SerieListItem, SerieListItemProps } from "./SerieListItem";
import "./index.css";

interface SerieListProps {
    data: any;
}

export function SerieList({ data }: SerieListProps) {
    return <div className="mt-16 p-4 w-screen">{/* 
        <header>
            <h2 className="SerieList-Header">Explorar Series</h2>
        </header> */}
        <div className="SerieList">
            {data.Page.media.map((media: SerieListItemProps) => {
                const title: string = media.title.romaji;
                console.log(media.title.romaji);
                return <SerieListItem {...media} />
            })}
        </div>
    </div>
}