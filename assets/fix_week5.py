import json

with open('data.js', 'r') as f:
    text = f.read()

# Extract just the JSON part
json_str = text.split('const mcqData =')[1].strip().rstrip(';')
data = json.loads(json_str)

# Fix Q4
data["5"][3]["options"] = [
    "High availability",
    "Elastic scalability",
    "Geographic redundancy",
    "Dedicated hardware"
]

# Fix Q5
data["5"][4]["options"] = [
    "Containerization",
    "Virtualization",
    "Load balancing",
    "RAID"
]

# Fix Q6
data["5"][5]["options"] = [
    "Increasing reducer count",
    "Increasing replication factor",
    "Scheduling mappers on nodes storing the data",
    "Using larger block size only"
]

# Fix Q7
data["5"][6]["options"] = [
    "More parallelism",
    "Fewer mappers & reduced scheduling overhead",
    "More shuffle traffic",
    "Reduced fault tolerance"
]

# Fix Q9
data["5"][8]["options"] = [
    "Total power consumption decreased; SLA violation risk increased",
    "Total power consumption increased; SLA improved",
    "Total power consumption decreased; SLA unaffected",
    "Insufficient data to determine impact"
]

# Fix Q10
data["5"][9]["options"] = [
    "Energy-aware scheduling",
    "VM migration / load balancing",
    "Increasing replication factor",
    "Using larger HDFS blocks"
]

# Format and write back
new_json = json.dumps(data, indent=4)
new_content = "const mcqData = " + new_json + ";\n"

with open('data.js', 'w') as f:
    f.write(new_content)
