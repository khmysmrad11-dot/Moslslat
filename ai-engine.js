import { GoogleGenerativeAI } from "@google/generative-ai";

export const AI_Engine = {
    async generateCompleteApp(prompt, context) {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const result = await model.generateContent(`أنت المعلم AI. ابنِ تطبيقاً احترافياً: ${prompt}`);
        return result.response.text();
    },
    async suggestImprovements() { return ["نظام دفع", "أنميشن 2099"]; },
    async applyAddons(code) { return code; }
};
