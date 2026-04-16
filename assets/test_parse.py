import os, re, subprocess

q_pattern = re.compile(r'QUESTION\s+\d+:(.*?)(?=^[A-Da-d][\.\)]|\Z)', re.DOTALL | re.MULTILINE)
opt_pattern = re.compile(r'^([A-Da-d])[\.\)]\s*(.*?)(?=^[A-Da-d][\.\)]|^Correct (?:Answer|Option):|\Z)', re.DOTALL | re.MULTILINE)
ans_pattern = re.compile(r'^Correct (?:Answer|Option):\s*\(?([A-Da-d])\)?', re.MULTILINE)
sol_pattern = re.compile(r'^(?:Detailed Solution|Detailed Answer):\s*(.*?)(?=^QUESTION|\Z)', re.DOTALL | re.MULTILINE)

for i in range(1, 12):
    pdf_path = f"nptelsolution/CC_Solution-{i}.pdf"
    if not os.path.exists(pdf_path): continue
    
    result = subprocess.run(['pdftotext', pdf_path, '-'], stdout=subprocess.PIPE, text=True)
    questions = re.split(r'^QUESTION\s+\d+:\s*', result.stdout, flags=re.MULTILINE)[1:]
    
    passed_count = 0
    for idx, q_text_block in enumerate(questions):
        options = opt_pattern.findall(q_text_block)
        ans_match = ans_pattern.search(q_text_block)
        correct_index = -1
        if ans_match:
            correct_index = ord(ans_match.group(1).strip().upper()) - ord('A')
            
        if len(options) >= 2 and correct_index != -1:
            passed_count += 1
        else:
            print(f"Failed Week {i} Q{idx+1}: options={len(options)}, correct_index={correct_index}")
            print("--- TEXT BLOCK ---")
            print(q_text_block[:150])
            print("------------------\n")
            
    if passed_count != len(questions):
        print(f"Week {i} only passed {passed_count}/{len(questions)}")
