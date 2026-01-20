import { OpenAI } from 'openai'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function execute(input: string, prompt: string): Promise<void> {
  const stream = client.responses.stream({
    model: process.env.OPENAI_MODEL,
    input: [
      { role: 'system', content: prompt },
      { role: 'user', content: input },
    ],
  })
  .on("response.created", () => {
    console.log('======');
  })
  .on("response.output_text.delta", (event) => {
    process.stdout.write(event.delta);
  })
  .on("response.output_text.done", () => {
    process.stdout.write("\n");
  })
  .on("error", (event) => {
    console.error(event);
  });

  await stream.finalResponse();
}