import os
import google.generativeai as genai
import json

# Fetching the API key from environment
api_key = os.environ.get("GEMINI_API_KEY") 
if not api_key:
    # Look for API key around the common configuration places.
    import pathlib
    print("WARNING: Make sure you have GEMINI_API_KEY set. Exiting.")
    exit(1)

genai.configure(api_key=api_key)

dir_path = "C:/Users/zackc/Pictures/Sigma Camera Pictures/Sigma Flora"
files = [f for f in os.listdir(dir_path) if f.endswith(".jpg")]

results = {}

for file in files:
    try:
        print(f"Processing {file}...")
        img = genai.upload_file(os.path.join(dir_path, file))
        model = genai.GenerativeModel("gemini-1.5-pro")
        
        prompt = "Identify the flower in this photo. " + \
                 "Provide the scientific name. " + \
                 "Also provide a VERY concise description of what is happening in the photo (max 5-6 words), e.g., 'flower name (scientific name) in fence'. " + \
                 "Return exactly two lines. Line 1: Common Name. Line 2: The short description."
                 
        start_prompt = "Return exactly two lines. Line 1: Common Name. Line 2: Short Description."
        response = model.generate_content([img, prompt])
        lines = response.text.strip().split('\n')
        
        results[file] = {
            "name": lines[0].strip(),
            "description": lines[1].strip() if len(lines) > 1 else ""
        }
    except Exception as e:
        print(f"Error on {file}: {e}")

with open("flora_identifications.json", "w") as f:
    json.dump(results, f, indent=2)

print("Done.")
