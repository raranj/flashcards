import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: 
`
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:
1. Write clear, concise questions for the front of each flashcard.
2. Provide accurate and informative answers on the back.
3. Focus each flashcard on a single concept or piece of information.
4. Use simple, easy-to-understand language.
5. Mix up the types of questions, including definitions, examples, comparisons, and applications.
6. Avoid complex or ambiguous phrasing.
7. Use memory aids like mnemonics where appropriate to help reinforce key points.
8. Adjust the difficulty level based on the intended audience.
9. If you're working with a text, pull out the most important and relevant points for the flashcards.
10. Ensure the set of flashcards comprehensively covers the topic.
11. Create a total of 10 flashcards.
Return in the following JSON format:
{
  "flashcards":[
    {
      "front": str,
      "back": str
    }
  ]
}
`});

export async function POST(req){
    const data = await req.text()
}

