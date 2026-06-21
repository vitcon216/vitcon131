import re
import json

def clean_text(text):
    return re.sub(r'\s+', ' ', text).strip()

def parse_chapter_file(filepath, expected_range):
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        lines = f.readlines()
    
    questions = []
    parsed_nums = set()
    
    current_q = None
    
    for line in lines:
        line_str = line.strip()
        if not line_str:
            continue
        
        # Check if it starts an option A, B, C, D
        opt_match = re.match(r'^\s*([A-D])\s*[\.:]\s*(.*)$', line)
        if opt_match and current_q:
            opt_letter = opt_match.group(1).upper()
            opt_text = clean_text(opt_match.group(2))
            current_q['options'].append((opt_letter, opt_text))
            continue
        
        # Check if it starts a new question
        # A line starting with a number, optional "Câu" prefix, followed by dot, colon, or space
        q_match = re.match(r'^\s*(?:Câu\s+)?(\d+)\s*[\.:\s]\s*(.*)$', line_str)
        if q_match:
            num = int(q_match.group(1))
            q_text = q_match.group(2)
            
            # Check if this number is within expected range and not yet parsed
            if num in expected_range and num not in parsed_nums:
                # Save previous question
                if current_q:
                    questions.append(current_q)
                
                parsed_nums.add(num)
                current_q = {
                    'id': num,
                    'question': clean_text(q_text),
                    'options': []
                }
                continue
        
        # Otherwise, append to the current question's text
        if current_q:
            if current_q['options']:
                # If we already started options and see non-option text, it might be sub-options or trailing text
                # We can append it to the last option or question
                current_q['options'][-1] = (current_q['options'][-1][0], current_q['options'][-1][1] + " " + clean_text(line_str))
            else:
                current_q['question'] += " " + clean_text(line_str)
                
    if current_q:
        questions.append(current_q)
        
    # Standardize options to just a list of texts
    for q in questions:
        # Sort options by A, B, C, D to be safe
        q['options'] = sorted(q['options'], key=lambda x: x[0])
        q['options'] = [opt[1] for opt in q['options']]
        
    return questions

# Define expected question ranges for each file
ranges = {
    'Chương 2_clean.txt': set(range(1, 51)),
    'Chương 3_clean.txt': set(range(354, 435)),
    'Chương 4_clean.txt': set(range(1, 63)),
    'Chương 5_clean.txt': set(range(1, 56)),
    'Chương 6_clean.txt': set(range(1, 26))
}

all_data = {}
for filename, q_range in ranges.items():
    data = parse_chapter_file(filename, q_range)
    all_data[filename] = data
    print(f"Parsed {len(data)} questions from {filename}")

with open('parsed_questions.json', 'w', encoding='utf-8') as f:
    json.dump(all_data, f, ensure_ascii=False, indent=2)

print("\nDiagnostics:")
for name, data in all_data.items():
    parsed_ids = [q['id'] for q in data]
    expected = ranges[name]
    missing = expected - set(parsed_ids)
    print(f"{name}: Parsed {len(data)}, Expected {len(expected)}, Missing: {sorted(list(missing))}")

