import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackTypes, TypeFeedbackType } from "..";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../Loading";
import { ScreenshotButton } from "../ScreenshotButton";
import { api } from "../../../../lib/api"

interface FeedbackContentStepProps {
    feedbackType: TypeFeedbackType;
    onRestartFeedback: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep(
    { feedbackType, onRestartFeedback, onFeedbackSent }:
        FeedbackContentStepProps) {
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    const feedbackTypeInfo = feedbackTypes[feedbackType];
    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();

        setIsSendingFeedback(true);


        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            email,
            screenshot,
        });

        setIsSendingFeedback(false);
        onFeedbackSent();
    }

    return (<>
        <header>
            <button type="button"
                className="top-5 left-5 absolute focus:outline-none focus:ring-brand-500 focus:ring-1"
                onClick={onRestartFeedback}>
                <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 hover:text-zinc-100" />
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img
                    src={feedbackTypeInfo.image.url}
                    alt={feedbackTypeInfo.image.alt}
                    className="h-6 w-6" />
                {feedbackTypeInfo.title}
            </span>
            <CloseButton />
        </header>

        <form onSubmit={handleSubmitFeedback} className="my-4 w-full flex flex-col">

            <input type="text" className="w-full text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1
                 outline-none p-1 mb-2"
                placeholder="Digite seu email (opcional)..."
                onChange={event => setEmail(event.target.value)} />

            <textarea className="min-w-[304px] w-full min-h-[102px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none 
                 scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent outline-none p-1"
                placeholder="Conte com detalhes o que está acontecendo..."
                onChange={event => setComment(event.target.value)}></textarea>


            <footer className="flex gap-2 mt-2">
                <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshot={setScreenshot} />
                <button
                    type="submit"
                    disabled={comment.length === 0}
                    className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500">
                    {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
                </button>
            </footer>
        </form>
    </>)
}