import re
import json

def clean_text(text):
    return re.sub(r'\s+', ' ', text).strip()

def parse_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split content by questions. We search for lines starting with "Câu X:" or "X." or "X:"
    # Note that some options might contain dots, so we need to be careful.
    # A standard question format in these files is:
    # (Optional "Câu") (Number)(. or :) (Question text)
    # followed by choices A. B. C. D.
    
    # Let's find all occurrences of questions
    pattern = r'(?:^|\n)(?:Câu\s+)?(\d+)\s*[\.:]\s*(.*?)(?=\n\s*(?:(?:Câu\s+)?\d+\s*[\.:]|$))'
    matches = re.findall(pattern, content, re.DOTALL)
    
    questions = []
    for num, q_body in matches:
        q_body = q_body.strip()
        # Extract options
        opt_pattern = r'([A-D])\.\s*(.*?)(?=\n\s*[A-D]\.|\Z)'
        opts = re.findall(opt_pattern, q_body, re.DOTALL)
        
        # Clean question text (remove options from q_body)
        q_text = q_body
        if opts:
            # The question text is everything before the first option
            first_opt_idx = q_body.find(opts[0][0] + '.')
            if first_opt_idx != -1:
                q_text = q_body[:first_opt_idx]
        
        q_text = clean_text(q_text)
        options = [clean_text(opt[1]) for opt in opts]
        
        if len(options) < 4:
            # If options are on separate lines or formatting differs, try to extract options differently
            # For example, in Chapter 6 some options are just plain text without A. B. C. D.
            lines = [clean_text(l) for l in q_body.split('\n') if clean_text(l)]
            # If the first line is the question, and the next 4 lines are the choices
            if len(lines) >= 5 and not opts:
                q_text = lines[0]
                options = lines[1:5]
        
        questions.append({
            'num': int(num),
            'question': q_text,
            'options': options
        })
    return questions

# Let's test on Chapter 2
ch2 = parse_file('Chương 2_clean.txt')
print(f"Chapter 2 parsed {len(ch2)} questions. Question numbers:")
print([q['num'] for q in ch2])
if ch2:
    print("First question detail:")
    print(json.dumps(ch2[0], ensure_ascii=False, indent=2))
