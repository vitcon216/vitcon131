import json
import re

def normalize(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    return re.sub(r'\s+', ' ', text).strip()

def main():
    # Load textbook
    with open('TLHT_clean.txt', 'r', encoding='utf-8') as f:
        textbook = f.read()
    
    # Split textbook into sentences or small chunks for better exact matching
    paragraphs = [p.strip() for p in textbook.split('\n') if p.strip()]
    p_norm = [normalize(p) for p in paragraphs]

    # Load questions_db.js
    with open('questions_db.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    match = re.search(r'const questionsDB = (\{.*\});?', content, re.DOTALL)
    if not match:
        print("Could not parse questions_db.js")
        return
        
    db = json.loads(match.group(1))
    
    changed_answers = 0
    
    for ch, qlist in db.items():
        for q in qlist:
            question_text = q['question']
            options = q['options']
            current_ans = q.get('answer', -1)
            
            # Find the best option based on textbook
            best_opt_idx = current_ans
            highest_score = 0
            best_sentence = ""
            
            # We look for the options in the textbook.
            for i, opt in enumerate(options):
                opt_n = normalize(opt)
                if len(opt_n) < 5: continue # too short to match meaningfully
                
                # Try to find exact substring in normalized paragraphs
                for idx, para in enumerate(p_norm):
                    if opt_n in para:
                        # Bonus if the paragraph also contains words from the question
                        q_n = normalize(question_text)
                        q_words = set(w for w in q_n.split() if len(w) > 3)
                        p_words = set(para.split())
                        overlap = len(q_words.intersection(p_words))
                        
                        # Score formula: exact match of option + overlap with question
                        score = 100 + overlap
                        
                        # Penalize if it's a negative statement "không phải là [opt]"
                        not_pattern = r'(chứ|không)\s+phải\s+la\s+' + re.escape(opt_n)
                        if re.search(not_pattern, para):
                            score -= 200
                            
                        if score > highest_score:
                            highest_score = score
                            best_opt_idx = i
                            best_sentence = paragraphs[idx]
                            
            if best_opt_idx != current_ans and highest_score > 0:
                print(f"Chương {ch} - Q{q['id']}: Lộn đáp án!")
                print(f"  Câu hỏi: {question_text}")
                print(f"  Đáp án cũ: {current_ans} -> {options[current_ans] if current_ans >= 0 else 'None'}")
                print(f"  Đáp án ĐÚNG: {best_opt_idx} -> {options[best_opt_idx]}")
                print(f"  Lý do (Sách): {best_sentence[:100]}...")
                print("-" * 40)
                q['answer'] = best_opt_idx
                q['explanation'] = f"Theo giáo trình: {best_sentence[:150]}..."
                changed_answers += 1
            else:
                # Make explanation shorter if it's too long
                exp = q.get('explanation', '')
                if len(exp) > 100:
                    # shorten it
                    sentences = exp.split('. ')
                    q['explanation'] = sentences[0] + '.' if sentences else exp[:100] + '...'

    print(f"\nĐã sửa {changed_answers} câu bị lộn đáp án.")
    
    # Save back
    new_content = "const questionsDB = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n"
    # export module if needed
    if "module.exports" in content:
        new_content += "\nmodule.exports = questionsDB;\n"
        
    with open('questions_db_fixed.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Saved to questions_db_fixed.js")

if __name__ == '__main__':
    main()
