export default function ExitPreview() {
    return (
        <form action="/resource/preview" method="POST">
            <button className="bg-black p-4 font-bold text-white" type="submit">
                Exit Preview Mode
            </button>
        </form>
    );
}
