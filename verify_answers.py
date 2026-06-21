import json

# Run the matching algorithm and print results
with open('parsed_questions.json', 'r', encoding='utf-8') as f:
    parsed_data = json.load(f)

with open('TLHT_clean.txt', 'r', encoding='utf-8') as f:
    textbook = f.read()

import re

def normalize(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    return re.sub(r'\s+', ' ', text).strip()

textbook_normalized = normalize(textbook)
paragraphs = [p.strip() for p in textbook.split('\n\n') if p.strip()]
paragraphs_norm = [normalize(p) for p in paragraphs]

def find_best_answer(question_text, options):
    if not options:
        return -1, "No options"
        
    q_norm = normalize(question_text)
    q_words = [w for w in q_norm.split() if len(w) > 3]
    
    best_p_idx = -1
    best_score = 0
    for idx, p_norm in enumerate(paragraphs_norm):
        score = sum(1 for w in q_words if w in p_norm)
        if score > best_score:
            best_score = score
            best_p_idx = idx
            
    if best_p_idx != -1:
        best_p = paragraphs[best_p_idx]
        best_p_norm = paragraphs_norm[best_p_idx]
        
        best_opt_idx = -1
        best_opt_score = 0
        
        # If the question text in textbook explicitly specifies the answer
        # e.g., "Để có được điều này thì cần phải trả lời câu hỏi 'cái gì-what' chứ không phải là 'như thế nào-how'"
        # We can search for the exact option in the best paragraph
        for opt_idx, opt in enumerate(options):
            opt_norm = normalize(opt)
            # Find index of option in best paragraph
            if opt_norm in best_p_norm:
                # Add score if option is in the paragraph
                score = 10
                # If the paragraph has "... [opt] chứ không phải [other_opt] ..."
                # we want to reward the one that is NOT preceded by "chứ không phải" or "không được"
                # Let's search for "chứ không phải là [opt]" or similar
                not_pattern = r'(chứ|không)\s+phải\s+la\s+' + re.escape(opt_norm)
                if re.search(not_pattern, best_p_norm):
                    score -= 5
                
                # Check for exact matches
                if score > best_opt_score:
                    best_opt_score = score
                    best_opt_idx = opt_idx
            else:
                # Fallback to word overlaps
                opt_words = [w for w in opt_norm.split() if len(w) > 2]
                score = sum(1 for w in opt_words if w in best_p_norm)
                if score > best_opt_score:
                    best_opt_score = score
                    best_opt_idx = opt_idx
                    
        return best_opt_idx, best_p
    
    return -1, "No matching paragraph"

# Let's print matched results for Chapter 2
for q in parsed_data['Chương 2_clean.txt']:
    opt_idx, p = find_best_answer(q['question'], q['options'])
    ans_text = q['options'][opt_idx] if opt_idx >= 0 else "None"
    print(f"Q{q['id']}: {q['question']}")
    print(f"  -> Match: {ans_text}")
