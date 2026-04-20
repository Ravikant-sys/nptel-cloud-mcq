import os
import re
import subprocess
import json

q_pattern = re.compile(r'QUESTION\s+\d+:(.*?)(?=^[A-Da-d][\.\)]|\Z)', re.DOTALL | re.MULTILINE)
opt_pattern = re.compile(r'^([A-Da-d])[\.\)]\s*(.*?)(?=^[A-Da-d][\.\)]|^(?:Correct\s+)?(?:Answer|Option)\s*:|\Z)', re.DOTALL | re.MULTILINE)
ans_pattern = re.compile(r'^(?:Correct\s+)?(?:Answer|Option)\s*:\s*\(?([A-Da-d])\)?', re.MULTILINE)
sol_pattern = re.compile(r'^(?:Detailed Solution|Detailed Answer|Explanation)\s*:\s*(.*?)(?=^QUESTION|\Z)', re.DOTALL | re.MULTILINE)

mcqData = {}

for i in range(1, 13):
    pdf_path = f"nptelsolution/CC_Solution-{i}.pdf"
    if not os.path.exists(pdf_path):
        continue
    
    result = subprocess.run(['pdftotext', pdf_path, '-'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    text = result.stdout
    
    questions = re.split(r'^QUESTION\s+\d+:\s*', text, flags=re.MULTILINE)[1:]
    week_data = []
    
    for q_idx, q_text_block in enumerate(questions):
        q_match = re.search(r'^(.*?)(?=^[A-Da-d][\.\)])', q_text_block, re.DOTALL | re.MULTILINE)
        if not q_match:
            continue
        question_str = q_match.group(1).strip()
        question_str = re.sub(r'NPTEL Online Certification Courses.*?(?=\n)', '', question_str, flags=re.DOTALL)
        question_str = re.sub(r'Indian Institute of Technology Kharagpur', '', question_str)
        question_str = question_str.strip()
        
        options = []
        opts = opt_pattern.findall(q_text_block)
        for opt_letter, opt_str in opts:
            opt_str = re.sub(r'NPTEL Online Certification Courses.*?(?=\n)', '', opt_str, flags=re.DOTALL)
            opt_str = re.sub(r'Indian Institute of Technology Kharagpur', '', opt_str)
            options.append(opt_str.strip())
            
        ans_match = ans_pattern.search(q_text_block)
        correct_index = -1
        if ans_match:
            ans_letter = ans_match.group(1).strip().upper()
            correct_index = ord(ans_letter) - ord('A')
            
        sol_match = sol_pattern.search(q_text_block)
        solution_str = "No detailed solution provided."
        if sol_match:
            solution_str = sol_match.group(1).strip()
            solution_str = re.sub(r'NPTEL Online Certification Courses.*?(?=\n)', '', solution_str, flags=re.DOTALL)
            solution_str = re.sub(r'Indian Institute of Technology Kharagpur', '', solution_str)
            solution_str = solution_str.strip()
            
        if len(options) >= 2 and correct_index != -1:
            week_data.append({
                "q": f"[Week {i}] " + question_str.replace("\n", " "),
                "options": [o.replace("\n", " ") for o in options],
                "correctIndex": correct_index,
                "solution": solution_str.replace("\n", " ")
            })
            
    if week_data:
        mcqData[i] = week_data
    else:
        print(f"Failed to find questions in Week {i}. Found block count: {len(questions)}")

js_content = "// data.js - Auto-extracted NPTEL Cloud Computing Questions\n"
js_content += "const mcqData = " + json.dumps(mcqData, indent=4) + ";\n"
with open("data.js", "w") as f:
    f.write(js_content)

print(f"Extraction complete! Extracted weeks: {list(mcqData.keys())}")
