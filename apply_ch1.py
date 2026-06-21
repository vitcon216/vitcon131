import json
import re

def main():
    # Read Chapter 1 JSON
    with open('ch1_questions.json', 'r', encoding='utf-8') as f:
        ch1_data = json.load(f)
        
    # Read questions_db.js
    with open('questions_db.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract JSON object using regex
    match = re.search(r'const questionsDB = (\{.*\});?', content, re.DOTALL)
    if match:
        db = json.loads(match.group(1))
        
        # Update Chapter 1
        db['1'] = ch1_data
        
        # Write back
        new_content = "const questionsDB = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n"
        if "module.exports" in content:
            new_content += "\nmodule.exports = questionsDB;\n"
            
        with open('questions_db.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print("Fixed Chapter 1 in questions_db.js!")
    else:
        print("Could not find questionsDB object in questions_db.js")

if __name__ == '__main__':
    main()
