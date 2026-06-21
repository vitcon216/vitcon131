import json
import re

# Load parsed questions
with open('parsed_questions.json', 'r', encoding='utf-8') as f:
    parsed_data = json.load(f)

# Load textbook
with open('TLHT_clean.txt', 'r', encoding='utf-8') as f:
    textbook = f.read()

# Normalize text for searching
def normalize(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    return re.sub(r'\s+', ' ', text).strip()

textbook_normalized = normalize(textbook)

# We'll split the textbook into paragraphs (separated by multiple newlines or section boundaries)
paragraphs = [p.strip() for p in textbook.split('\n\n') if p.strip()]
paragraphs_norm = [normalize(p) for p in paragraphs]

print(f"Textbook has {len(paragraphs)} paragraphs.")

def find_best_answer(question_text, options):
    if not options:
        return -1, "No options"
        
    q_norm = normalize(question_text)
    # Search for paragraph containing keywords from question
    q_words = [w for w in q_norm.split() if len(w) > 3]
    
    # Score paragraphs based on question word overlaps
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
        
        # Check which option matches this paragraph or other parts of the textbook best
        best_opt_idx = -1
        best_opt_score = 0
        for opt_idx, opt in enumerate(options):
            opt_norm = normalize(opt)
            opt_words = [w for w in opt_norm.split() if len(w) > 2]
            if not opt_words:
                continue
            
            # Score based on how many words of the option appear in the best paragraph
            score = sum(1 for w in opt_words if w in best_p_norm)
            
            # Also score based on occurrence in the entire textbook if best paragraph is not enough
            global_occurrences = textbook_normalized.count(opt_norm)
            if global_occurrences > 0:
                score += 2
                
            if score > best_opt_score:
                best_opt_score = score
                best_opt_idx = opt_idx
                
        explanation = clean_explanation(best_p)
        return best_opt_idx, explanation
    
    return -1, "No matching paragraph found"

def clean_explanation(p_text):
    # Remove figure captions or page numbers if any
    p_text = re.sub(r'Hình \d+\.\d+.*?\n', '', p_text)
    # Limit explanation length
    lines = p_text.split('\n')
    return " ".join([l.strip() for l in lines if l.strip()])[:300]

# Test matching for Chapter 2
matched_ch2 = []
unmatched = 0
for q in parsed_data['Chương 2_clean.txt']:
    opt_idx, explanation = find_best_answer(q['question'], q['options'])
    if opt_idx == -1:
        unmatched += 1
    matched_ch2.append({
        'id': q['id'],
        'question': q['question'],
        'options': q['options'],
        'answer': opt_idx,
        'explanation': explanation
    })

print(f"Chapter 2 matched: {len(matched_ch2) - unmatched}, Unmatched: {unmatched}")
if matched_ch2:
    print(f"Example match:\nQ: {matched_ch2[0]['question']}\nAns: {matched_ch2[0]['answer']} ({matched_ch2[0]['options'][matched_ch2[0]['answer']] if matched_ch2[0]['answer'] >= 0 else 'None'})\nExp: {matched_ch2[0]['explanation']}")
