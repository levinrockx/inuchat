import Ollama, { ChatResponse } from "ollama";

export const POST = async (req: Request) => {
    const messages = await req.json();

    console.log(messages);

    let response: ChatResponse | null = null;

    try {
        response = await Ollama.chat({
            model: 'llama3.2:latest',
            messages
        });

        return new Response(JSON.stringify(response.message), {
            status: 200,
        })
    } catch (err) {
        return new Response(JSON.stringify(err), {
            status: 500,
        })
    }
};