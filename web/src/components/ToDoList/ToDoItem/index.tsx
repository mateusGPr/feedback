import { Eraser } from "phosphor-react";

interface ListItemProps {
    item: string;
    done: boolean;
    toggleToDo: () => void;
    deleteToDo: () => void;
}

export const ListItem = (props: ListItemProps) => {
    return (
        <div className="my-2 w-[calc(100%-2rem)] flex flex-row gap-2 items-stretch collapse">
            {!props.done ?
                <p onClick={props.toggleToDo} className="flex-grow border-b border-brand-300">{props.item}</p> :
                <p onClick={props.toggleToDo} className="flex-grow border-b border-zinc-600 text-zinc-600 line-through">{props.item}</p>}
            <button onClick={props.deleteToDo} className="bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 flex-grow-0 focus:ring-brand-500 transition-colors p-1" >
                <Eraser className="h6 " />
            </button>
        </div>
    )
}