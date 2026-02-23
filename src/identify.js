const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("WARNING: Make sure you have GEMINI_API_KEY set. Exiting.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const dirPath = "C:/Users/zackc/Pictures/Sigma Camera Pictures/Sigma Flora";

function fileToGenerativePart(filePath, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
            mimeType
        },
    };
}

async function run() {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith(".jpg"));
    const results = {};

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    for (const file of files) {
        console.log(`Processing ${file}...`);
        try {
            const prompt = "Identify the flower in this photo. Provide the common name (if any) and the scientific name. Also provide a VERY concise description of what is happening in the photo (max 5-6 words), e.g., 'flower name (scientific name) in fence'. Return exactly two lines. Line 1: Common Name (Scientific Name). Line 2: The short description.";

            const imagePart = fileToGenerativePart(path.join(dirPath, file), "image/jpeg");

            const result = await model.generateContent([prompt, imagePart]);
            const response = await result.response;
            const text = response.text();

            const lines = text.trim().split("\n").map(l => l.trim()).filter(l => l);

            results[file] = {
                name: lines[0] || "",
                description: lines[1] || ""
            };
        } catch (e) {
            console.error(`Error on ${file}:`, e);
        }
    }

    fs.writeFileSync("flora_identifications.json", JSON.stringify(results, null, 2));
    console.log("Done.");
}

run();
