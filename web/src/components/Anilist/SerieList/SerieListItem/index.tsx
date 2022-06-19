
export interface SerieListItemProps {
    averageScore: number;
    coverImage: { medium: string, large: string };
    endDate: { year: number, month: number, day: number };
    episodes: number;
    format: string;
    hashtag: string;
    id: number;
    isAdult: boolean;
    popularity: number;
    season: string;
    startDate: { year: number, month: number, day: number };
    title: { romaji: string, english: string, native: string, userPreferred: string };
    type: string;
}

export function SerieListItem(media: SerieListItemProps) {
    return (
        <div className="SerieList-Container">
            <div className="SerieList-Content">
                <img className="SerieList-Image" src={media.coverImage.large} />
                <div className="SerieList-Details">
                    <h2
                        className="SerieList-Details-Title">
                        {media.title.userPreferred}</h2>
                    <p>Episodios: {media.episodes} - Temporada: {media.season}</p>
                    <p>Formato: {media.format} - Tipo: {media.type}</p>
                    <p className="mt-2">{"Romaji: " + (media.title?.romaji ?? '?')}</p>
                    <p>{"Original: " + (media.title?.native ?? '?')}</p>
                    <p>{"Inglês: " + (media.title?.english ?? '?')}</p>
                </div>
            </div>
        </div>)
}

