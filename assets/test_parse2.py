import os, re, subprocess

q_pattern = re.compile(r'QUESTION\s+\d+:(.*?)(?=^[A-Da-d][\.\)]|\Z)', re.DOTALL | re.MULTILINE)
opt_pattern = re.compile(r'^([A-Da-d])[\.\)]\s*(.*?)(?=^[A-Da-d][\.\)]|^(?:Correct\s+)?(?:Answer|Option):|\Z)', re.DOTALL | re.MULTILINE)
ans_pattern = re.compile(r'^(?:Correct\s+)?(?:Answer|Option):\s*\(?([A-Da-d])\)?', re.MULTILINE)
sol_pattern = re.compile(r'^(?:Detailed Solution|Detailed Answer|Explanation):\s*(.*?)(?=^QUESTION|\Z)', re.DOTALL | re.MULTILINE)

for i in [2, 7]:
    pdf_path = f"nptelsolution/CC_Solution-{i}.pdf"
    result = subprocess.run(['pdftotext', pdf_path, '-'], stdout=subprocess.PIPE, text=True)
    questions = re.split(r'^QUESTION\s+\d+:\s*', result.stdout, flags=re.MULTILINE)[1:]
    
    for idx, q_text_block in enumerate(questions):
        options = opt_pattern.findall(q_text_block)
        ans_match = ans_pattern.search(q_text_block)
        correct_index = -1
        if ans_match:
            correct_index = ord(ans_match.group(1).strip().upper()) - ord('A')
            
        if not (len(options) >= 2 and correct_index != -1):
            print(f"Failed Week {i} Q{idx+1}: options={len(options)}, correct_index={correct_index}")
            print(q_text_block[:150])
