import { GoogleGenAI, Type } from "@google/genai";
import { GeminiResponse } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists, otherwise handle gracefully in functions
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const analyzeInquiry = async (userMessage: string, userName: string): Promise<GeminiResponse> => {
  if (!ai) {
    // Fallback if no API key is present
    return {
      reply: `Thanks for your message, ${userName}. I'll get back to you shortly regarding your garden needs!`,
      suggestedServices: ['General Enquiry']
    };
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are an AI assistant for Finch Banham, a gardener in Ashtead.
      The user (${userName}) has sent this inquiry: "${userMessage}".
      
      1. Write a short, friendly, 1-sentence confirmation message thanking them and mentioning specifically what they asked about (e.g. "Thanks! I'd love to help with that patio...").
      2. Categorize their need into one or more of these tags: Landscaping, Maintenance, Lawn Care, Patios, General.
      
      Return JSON.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            reply: { type: Type.STRING },
            suggestedServices: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeminiResponse;
    }
    throw new Error("No response text");

  } catch (error) {
    console.error("Gemini analysis failed", error);
    return {
      reply: `Thanks ${userName}, I've received your message and will be in touch via phone or email soon!`,
      suggestedServices: ['Inquiry Received']
    };
  }
};