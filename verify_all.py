import json
import re

with open('parsed_questions.json', 'r', encoding='utf-8') as f:
    parsed_data = json.load(f)

with open('TLHT_clean.txt', 'r', encoding='utf-8') as f:
    textbook = f.read()

def normalize(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    return re.sub(r'\s+', ' ', text).strip()

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
        best_opt_score = -1
        
        # Check which option matches the paragraph or keywords best
        for opt_idx, opt in enumerate(options):
            opt_norm = normalize(opt)
            if opt_norm in best_p_norm:
                score = 100
                # Check for negation
                not_pattern = r'(chứ|không)\s+phải\s+la\s+' + re.escape(opt_norm)
                if re.search(not_pattern, best_p_norm):
                    score -= 50
                if score > best_opt_score:
                    best_opt_score = score
                    best_opt_idx = opt_idx
            else:
                opt_words = [w for w in opt_norm.split() if len(w) > 2]
                if not opt_words:
                    continue
                score = sum(1 for w in opt_words if w in best_p_norm)
                if score > best_opt_score:
                    best_opt_score = score
                    best_opt_idx = opt_idx
                    
        return best_opt_idx, best_p
    
    return -1, "No matching paragraph"

# Diagnostics for each chapter
for filepath, q_list in parsed_data.items():
    print(f"\n==================== {filepath} ({len(q_list)} questions) ====================")
    for q in q_list[:15]:  # Print first 15 for initial inspection
        idx, p = find_best_answer(q['question'], q['options'])
        ans = q['options'][idx] if idx >= 0 else "None"
        print(f"Q{q['id']}: {q['question']}")
        print(f"  -> Match: {ans}")
