import { getAiResponse, assertSafe, createBudget } from '@/libs/giga';

export async function POST(req) {
  const body = await req.json();

  assertSafe(!!body.raw_text, "Missing 'raw_text' in the request body. Please provide the unorganized text to polish.");

  const budget = createBudget({ maxCalls: 1, maxChars: 10000 });

  const aiPrompt = `You are Thread Polish AI, a sophisticated tool for content creators and social media managers. Your task is to take raw, unorganized text and transform it into a polished, coherent, and ready-to-post social media thread. This thread should be engaging and professional.\n\nInstructions for generating the social media thread:\n1. Analyze the provided "Raw Text" to understand its core message and key points.\n2. Structure the content into a series of short, interconnected posts suitable for a social media thread. Each post should build upon the previous one.\n3. Ensure smooth transitions between thread components.\n4. Use clear and concise language.\n5. If appropriate for social media, you may sparingly include relevant emojis or light formatting (like line breaks) to enhance readability and engagement.\n6. The entire polished thread should be returned as a single string.\n\nThe output MUST be a JSON object with a single key: "polished_thread", whose value is the complete generated social media thread as a string.\n\nRaw Text to Transform:\n${body.raw_text}\n\nExpected JSON Output Format:\n{\n  "polished_thread": "Your well-structured and polished social media thread goes here..."\n}\n\nNow, generate the JSON output based on the Raw Text provided:\n`;

  const aiResponse = await getAiResponse({
    prompt: aiPrompt,
    json: true // We expect the AI to return a JSON object
  });

  // Validate the AI's response against the contract: { "polished_thread": "string" }
  assertSafe(
    aiResponse && typeof aiResponse === 'object' && 'polished_thread' in aiResponse && typeof aiResponse.polished_thread === 'string',
    "The AI did not return a valid response. Expected a JSON object with a 'polished_thread' string."
  );

  budget.track(JSON.stringify(aiResponse)); // Track the AI's response size

  return Response.json(aiResponse);
}