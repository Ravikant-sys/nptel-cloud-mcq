import json
import re

with open('data.js', 'r') as f:
    text = f.read()

# Extract just the JSON part
json_str = text.split('const mcqData =')[1].strip().rstrip(';')

data = json.loads(json_str)

# Fix Q3
data["11"][2]["options"] = [
    "Physical layer",
    "Dew sensor layer",
    "Cloud synchronization service",
    "Network routing layer"
]

# Fix Q4
data["11"][3]["options"] = [
    "Reduced latency vs increased data storage",
    "Local autonomy vs hardware consistency",
    "High scalability vs low virtualization complexity",
    "Better security vs no offline capability"
]

# Fix Q5
data["11"][4]["options"] = [
    "VM overhead",
    "Cold start latency",
    "Disk fragmentation",
    "Hardware driver conflicts"
]

# Fix Q7
data["11"][6]["options"] = [
    "Lack of GPU support",
    "Function execution time limits enforced by providers",
    "No internet access",
    "Inability to process data streams"
]

# Fix Q8
data["11"][7]["options"] = [
    "File systems are encrypted",
    "Functions run on different hosts and local storage is ephemeral",
    "Storage speed is too slow",
    "Providers disable disk access"
]

# Fix Q10
data["11"][9]["options"] = [
    "Google",
    "Microsoft",
    "Amazon Web Services",
    "Oracle"
]

# Format and write back
new_json = json.dumps(data, indent=4)
new_content = "const mcqData = " + new_json + ";\n"

with open('data.js', 'w') as f:
    f.write(new_content)
