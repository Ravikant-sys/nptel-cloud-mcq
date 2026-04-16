const mcqData = {
    "1": [
        {
            "q": "[Week 1] Which one of the following statements least aligns with the NIST defined essential characteristics of cloud computing?",
            "options": [
                "On-demand self-service",
                "Rapid elasticity",
                "Guaranteed zero downtime for all services",
                "Measured service"
            ],
            "correctIndex": 2,
            "solution": "NIST lists on-demand self-service, resource pooling, rapid elasticity, measured service, broad network access; it does not include any absolute downtime guarantee."
        },
        {
            "q": "[Week 1] A user accesses Google Docs through a web browser and collaborates in real-time with others. The user never manages servers, operating systems, or runtime environments. However, Google Docs internally relies on Google Cloud\u2019s infrastructure and platforms. From the user\u2019s perspective, Google Docs is best classified as:",
            "options": [
                "PaaS",
                "IaaS",
                "SaaS",
                "FaaS"
            ],
            "correctIndex": 2,
            "solution": "Google Docs is a provider\u2019s application that runs on Google Cloud. The application can be accessed from various client terminals through a client interface, say a web browser. So, It is a Software as a Service (SaaS) model."
        },
        {
            "q": "[Week 1] Which of the following is a public cloud platform in typical commercial cloud computing?",
            "options": [
                "Windows Server with Hyper-V installed on an organization\u2019s on-premise hardware",
                "Google Cloud Platform services accessible over the public Internet",
                "A private OpenStack cloud running inside a company\u2019s own data center",
                "VMware vSphere used for internal virtualization"
            ],
            "correctIndex": 1,
            "solution": "A public cloud platform is operated by a third-party provider and made available to users over the public Internet."
        },
        {
            "q": "[Week 1] Virtualization technology allows multiple virtual machines (VMs) to run on a single physical system or on a cluster of physical systems. Which of the following statements is the MOST accurate?",
            "options": [
                "Each VM always shares the same operating system kernel with the host OS.",
                "Multiple VMs can run different operating systems on the same physical machine simultaneously.",
                "Virtualization is only possible in cloud computing environments.",
                "Virtualization prevents resource overcommitment on the host system."
            ],
            "correctIndex": 1,
            "solution": "Modern hypervisors (e.g., VMware, KVM) allow multiple VMs with different OSs to share the same physical hardware. Option A describes containers more than full VMs. Virtualization pre-dates cloud (so C is false), and resource overcommitment (CPU/memory overcommit) is actually a feature often used, not prevented (D is false)."
        },
        {
            "q": "[Week 1] A distributed system is typically preferred when the task is: (i) Data-intensive (large volumes of data distributed across locations) (ii) Compute-intensive (requires heavy parallel processing) (iii) Latency-sensitive but confined to a single machine Choose the BEST option:",
            "options": [
                "Only (i)",
                "Only (ii)",
                "(i) and (ii)",
                "(i), (ii), and (iii)"
            ],
            "correctIndex": 2,
            "solution": "Distributed systems shine when tasks are both data-intensive and computeintensive and can benefit from parallelism and data locality. Latency-sensitive tasks confined to a single machine (iii) may actually suffer from distribution overhead."
        },
        {
            "q": "[Week 1] The combination of Service-Oriented Architecture (SOA) and Cloud Computing led to a paradigm where almost any IT capability can be delivered as a network-accessible service. This is often referred to as:",
            "options": [
                "FTP",
                "SNTP",
                "XaaS",
                "FaaS"
            ],
            "correctIndex": 2,
            "solution": "XaaS = \u201cAnything/Everything as a Service\u201d, an umbrella term for delivering diverse IT services via the cloud. FaaS (Functions as a Service) is only one specific service model, not the broad paradigm."
        },
        {
            "q": "[Week 1] PaaS (Platform as a Service) brings several benefits to application developers. Which of the following statements about PaaS are CORRECT? (i) It abstracts away infrastructure management, allowing focus on application logic. (ii) It can provide integrated services such as databases, web services, and messaging. (iii) It always gives full root-level access to underlying virtual machines. (iv) It supports rapid creation and deployment of software applications.",
            "options": [
                "(i), (ii), and (iv) only",
                "(ii) and (iii) only",
                "(i) and (iii) only",
                "(i), (ii), (iii), and (iv)"
            ],
            "correctIndex": 0,
            "solution": "PaaS hides infrastructure details and offers integrated services, enabling rapid application development and deployment. Full root-level access to the underlying VMs (iii) is not typical in PaaS; that\u2019s closer to IaaS."
        },
        {
            "q": "[Week 1] In the context of virtualization, which statement best distinguishes a Type-1 (bare-metal) hypervisor from a Type-2 hypervisor?",
            "options": [
                "Type-1 runs on top of an OS; Type-2 runs directly on hardware.",
                "Type-1 typically gives lower virtualization overhead because it runs directly on hardware.",
                "Type-2 can run multiple OSs; Type-1 cannot.",
                "Type-1 is only used for desktop virtualization."
            ],
            "correctIndex": 1,
            "solution": "Type-1 typically gives lower virtualization overhead because it runs directly on hardware. Type-1 runs on bare metal, Type-2 runs on top of a host OS."
        },
        {
            "q": "[Week 1] Which of the following is a valid example of Platform as a Service (PaaS)?",
            "options": [
                "A server image you configure and manage yourself on a rented VM",
                "A managed relational database instance with automatic backups and scaling",
                "A virtual machine where you install your own operating system",
                "A bare-metal server managed entirely by your organization"
            ],
            "correctIndex": 1,
            "solution": "Managed relational database with automatic backups and scaling is PaaS, because the provider handles infrastructure, runtime, and maintenance, letting developers focus on application logic."
        },
        {
            "q": "[Week 1] A __________ is a distributed computer system that consists of a collection of interconnected stand-alone computers working together as an integrated computing resource, typically located in close proximity and managed as a single system.",
            "options": [
                "Grid",
                "Cluster",
                "Cloud",
                "Node"
            ],
            "correctIndex": 1,
            "solution": "A cluster is a set of tightly-coupled, interconnected stand-alone computers that work together as if they were a single system. Grids tend to be more loosely coupled and geographically distributed; nodes are individual machines; \u201ccloud\u201d is a broader service-delivery model."
        }
    ],
    "2": [
        {
            "q": "[Week 2] Para-virtualization is best described as:",
            "options": [
                "Running an unmodified guest OS on top of a hypervisor with full CPU trapping.",
                "Modifying the guest OS to use hypervisor-aware interfaces for certain privileged operations.",
                "Emulating hardware in software so guests don\u2019t need any changes.",
                "Running containers that share the host kernel."
            ],
            "correctIndex": 1,
            "solution": "Para-virtualization requires the guest OS to be modified to call hypervisorfriendly interfaces for privileged operations (improves performance but needs OS changes)."
        },
        {
            "q": "[Week 2] Which statement about a community cloud is MOST accurate?",
            "options": [
                "Owned and operated by a single organization for its exclusive use.",
                "Shared infrastructure among several organizations with similar compliance/regulatory needs.",
                "A public cloud account with extra IAM roles.",
                "Always the most cost-effective option for small startups."
            ],
            "correctIndex": 1,
            "solution": "Community cloud shares infrastructure among organizations with common concerns (e.g., regulatory or domain-specific). (A=private, C incorrect, D not generally true.)"
        },
        {
            "q": "[Week 2] When an organization considers using an outsourced private cloud (i.e., a private cloud hosted/operated by a third party), which of the following should be explicitly considered? (i) Network dependency and SLAs (ii) Risks from multi-tenancy / co-residency (iii) Legal/regulatory/compliance implications of where data is hosted",
            "options": [
                "Only (i)",
                "(i) and (ii) only",
                "(i) and (iii) only",
                "(i), (ii) and (iii)"
            ],
            "correctIndex": 3,
            "solution": "Outsourcing raises network/SLA concerns, multi-tenancy risks (even in hosted private clouds), and legal/compliance issues depending on data location."
        },
        {
            "q": "[Week 2] When processing very large XML files in a memory-constrained environment, and where the application needs explicit control over the parsing flow, which XML parser API is MOST appropriate?",
            "options": [
                "DOM (loads the entire XML document into memory as a tree structure)",
                "SAX (push-based, event-driven parsing with minimal memory usage but limited control)",
                "StAX (pull-based, event-driven parsing offering low memory usage with explicit control)",
                "All are equally suitable depending on developer preference"
            ],
            "correctIndex": 2,
            "solution": "StAX is a pull-based, event-driven XML parser that allows applications to control when and how XML events are processed. It uses significantly less memory than DOM and provides more flexible control than SAX, making it the most appropriate choice for parsing very large XML files in memory-constrained environments"
        },
        {
            "q": "[Week 2] A hypervisor with hardware-assisted virtualization shows 40% CPU usage while VMs report only 15% utilization. What explains the 25% gap?",
            "options": [
                "The hypervisor isn't using hardware extensions; it's relying on binary translation.",
                "Context switching, memory management, and I/O emulation overhead\u2014normal in virtualized environments.",
                "Unmodified OS cannot fully utilize hardware virtualization.",
                "This indicates efficient resource overcommitment."
            ],
            "correctIndex": 1,
            "solution": "Hardware-assisted virtualization reduces but doesn't eliminate hypervisor overhead. VM context switching, shadow page tables/EPT, and device emulation consume CPU cycles not directly visible to guest OS metrics. This is expected behavior."
        },
        {
            "q": "[Week 2] Which statement clarifies \"Hypervisor,\" \"Virtual Machine Monitor,\" and \"Cluster Manager\"?",
            "options": [
                "All four terms are synonymous.",
                "Hypervisor and Virtual Machine Monitor are synonymous; Virtual Machine Manager adds orchestration; Cluster Manager manages physical machines.",
                "Hypervisor = Type 1 only; Virtual Machine Monitor = Type 2 only.",
                "They refer to different layers in a multi-tier virtualization stack."
            ],
            "correctIndex": 1,
            "solution": "Hypervisor and VMM are interchangeable core terms. Virtual Machine Manager  \f  implies additional provisioning/orchestration beyond basic monitoring. Cluster Manager manages multiple physical machines, not individual VMs. Both Type 1 and Type 2 are called hypervisors."
        },
        {
            "q": "[Week 2] Speed and flexibility are disadvantages of para-virtualization.",
            "options": [
                "True",
                "False"
            ],
            "correctIndex": 0,
            "solution": "In para-virtualization, the guest operating system must be modified to interact with the hypervisor using hypercalls. While this can improve performance in some cases, it reduces flexibility because only modified or supported operating systems can be used. Additionally, performance gains depend on OS support, making speed less universally optimal compared to hardware-assisted virtualization."
        },
        {
            "q": "[Week 2] Which mechanism was specifically designed as a registry/discovery approach for web services?",
            "options": [
                "SMS",
                "HTTP (as a generic transfer protocol)",
                "SMTP",
                "UDDI (Universal Description, Discovery, and Integration)"
            ],
            "correctIndex": 3,
            "solution": "UDDI is the registry model/protocol designed for discovering web services; HTTP/SMTP are transport protocols (UDDI typically uses HTTP)."
        },
        {
            "q": "[Week 2] Which of the following problems are effectively addressed by traditional web services, and which are NOT? (i) Passing through firewalls using standard HTTP/HTTPS (ii) Enabling interoperability across different programming languages and operating systems (iii) Ultra-low-latency, real-time inter-service communication (iv) Service discovery through registries like UDDI",
            "options": [
                "Only (i) and (ii) are addressed",
                "(i), (ii), and (iv) are addressed; (iii) is NOT addressed",
                "Only (ii) is addressed",
                "All are addressed"
            ],
            "correctIndex": 1,
            "solution": "Traditional web services address firewall transparency by using HTTP/HTTPS, ensure platform and language interoperability via XML, SOAP, and WSDL, and support service discovery through registries like UDDI. However, they do not provide ultra-low-latency, real-time communication, as XML parsing and SOAP overhead introduce delays, making modern alternatives like gRPC better suited for real-time scenarios."
        },
        {
            "q": "[Week 2] Service-Oriented Architecture (SOA) models relationships primarily among:",
            "options": [
                "Two entities (a service provider and a requestor) only",
                "Two entities (a service provider and a broker) only",
                "Three entities (a service provider, a service requestor, and a broker/registry)",
                "Three entities (a service provider, a service requestor, and a hypervisor)"
            ],
            "correctIndex": 2,
            "solution": "In SOA, the architecture primarily involves three entities: the service provider, which implements and publishes the service; the service requestor, which consumes the service; and the service broker (registry/mediator), which enables discovery and binding of services. Hypervisors and virtualization components are unrelated to the logical SOA entity model."
        }
    ],
    "3": [
        {
            "q": "[Week 3] Which of the following is least likely to be specified in an operational cloud Service Level Agreement(SLA)?",
            "options": [
                "Recovery Time Objective (RTO)",
                "Exact encryption algorithm and key storage procedures",
                "Mean Time To Repair (MTTR) for incidents",
                "Penalty / credit calculation for downtime"
            ],
            "correctIndex": 1,
            "solution": "SLAs describe service-level commitments (RTO, MTTR, penalties); low-level implementation/security procedures (exact algorithms/key storage) belong in security/operational documents, not the SLA."
        },
        {
            "q": "[Week 3] Which level is typically included in a multilevel cloud Service Level Agreement (SLA)?",
            "options": [
                "Corporate/provider-wide obligations",
                "Individual developer employment contracts",
                "Unrelated third-party agreements",
                "Hardware vendor warranties"
            ],
            "correctIndex": 2,
            "solution": "A true multilevel SLA can include corporate/provider-wide obligations, which define baseline commitments applicable to all customers. Other valid SLA levels include customerspecific adaptations and service-specific operational metrics, but individual employment contracts or unrelated third-party agreements are not part of an SLA."
        },
        {
            "q": "[Week 3] An enterprise signs a three-tier multilevel SLA with a cloud provider. However, the corporate-level SLA guarantees 95% uptime, the customer-level SLA specifies 98% uptime, and the service-level SLA guarantees 99.9% uptime. In case of a service disruption, which level of SLA is the provider LEGALLY BOUND to honor?",
            "options": [
                "Corporate-level SLA, as it's the broadest agreement",
                "Customer-level SLA, as it's the middle ground",
                "Service-level SLA, as it's the most specific agreement",
                "The provider can choose the lowest applicable SLA"
            ],
            "correctIndex": 2,
            "solution": "Multilevel SLAs are structured hierarchically. The service-level SLA is the most granular and specific to the actual service delivery and is legally binding. If there's a conflict, the highest level of commitment (service-level SLA at 99.9%) applies. Corporate and customer-level SLAs provide broader guarantees, but disputes are typically resolved at the service-level SLA because that's where accountability directly lies with the provider's infrastructure."
        },
        {
            "q": "[Week 3] Which combination of metrics is most commonly included in production cloud SLAs to measure availability and responsiveness?",
            "options": [
                "Uptime percentage and mean time to respond (MTTR)",
                "Developer salary and uptime percentage",
                "IP address range and timezone of servers",
                "Source-code commit frequency and bug count"
            ],
            "correctIndex": 0,
            "solution": "Uptime (availability) and response/recovery metrics measure SLA compliance. The others are irrelevant or implementation details."
        },
        {
            "q": "[Week 3] A cloud service is guaranteed to handle 10,000 requests/hour with 99.5% success. How many failed requests per hour are acceptable under SLA?",
            "options": [
                "5",
                "10",
                "50",
                "500"
            ],
            "correctIndex": 2,
            "solution": "Success rate = 99.5%, so failure rate = 0.5%  0.5% of 10,000 =(0.5/100)\u00d710000=50 So,50 failed requests/hour"
        },
        {
            "q": "[Week 3] Which feature most clearly distinguishes parallel (analytic) databases from a single-node traditional RDBMS in cloud analytics?",
            "options": [
                "Support for SQL queries",
                "Multi-node parallel query execution with data partitioning (shared-nothing or distributed execution)",
                "Transaction rollback (ACID) support",
                "Use of normalized schemas only"
            ],
            "correctIndex": 1,
            "solution": "Parallel analytic DBs execute queries across multiple nodes with data partitioning to scale analytics; SQL and transactions exist in both, normalization is a design choice."
        },
        {
            "q": "[Week 3] You are designing a real-time analytics pipeline for a streaming IoT sensor network. The system must: \u25cf \u25cf \u25cf \u25cf  Handle 1 million events per second Maintain sub-second latency Support complex windowed aggregations (sliding windows of 5 minutes) Which architectural choice is LEAST suitable?",
            "options": [
                "Apache Kafka with Apache Flink for stream processing",
                "Google Cloud Dataflow with shuffling disabled for specific operations",
                "AWS S3 with batch processing using Apache Spark every 5 minutes",
                "Azure Event Hubs with Structured Streaming"
            ],
            "correctIndex": 2,
            "solution": "AWS S3 with batch processing (every 5 minutes) is unsuitable for sub-second latency requirements. Batch processing introduces inherent latency because data must be collected, written to S3, and then processed in batch intervals. This violates the sub-second latency SLA."
        },
        {
            "q": "[Week 3] You must design a scalable pipeline to process many large video files in parallel (storage + compute). Which storage choice is most suitable?",
            "options": [
                "Managed relational DB (RDS/Aurora)",
                "Object storage with Hadoop/Spark connector (e.g., S3/GCS + connector)",
                "Single-node block volume attached to a VM",
                "A small in-memory cache only"
            ],
            "correctIndex": 1,
            "solution": "Object storage (S3/GCS) with Hadoop/Spark connectors is designed for large binary blobs and parallel processing; RDBMS and single block volumes are unsuitable for scale."
        },
        {
            "q": "[Week 3] A MapReduce job is designed to count word frequencies in 2 TB of text files. The mapper output is 1.5 TB (including overhead), and after the shuffle and sort phase, the data is 1.3 TB. During the reduce phase, a node runs out of disk space during the merge operation. Which of the following is the most likely cause and solution?",
            "options": [
                "The mapper logic is inefficient; rewrite the mapper function",
                "The combiner phase didn't run; ensure combiner is explicitly configured to compress intermediate data locally",
                "The shuffle and sort didn't deduplicate keys; increase the number of reducers",
                "The network bandwidth is saturated; add more nodes to the cluster"
            ],
            "correctIndex": 1,
            "solution": "The combiner is a key MapReduce optimization that runs locally on each mapper node after the map phase, pre-aggregating intermediate key-value pairs to reduce their volume before shuffling. In a word count job, for example, it can sum occurrences of each word on the mapper node, potentially shrinking 1.5 TB of mapper output to 400\u2013500 GB. Without a combiner, all intermediate data is sent to the reducers, which can overwhelm disk space during the merge phase. By explicitly configuring a combiner, the amount of data transferred across the network and merged by reducers is greatly reduced, preventing disk exhaustion and improving overall job efficiency."
        },
        {
            "q": "[Week 3] In an OpenStack deployment, if a compute node can support up to 900 virtual CPUs (vCPUs), and the overcommit ratio for CPU is set to 4.5:1, what is the total number of vCPUs that can be allocated?",
            "options": [
                "4100",
                "4150",
                "4050",
                "4200"
            ],
            "correctIndex": 2,
            "solution": "OpenStack allows overcommitment of compute resources. Total Allocatable vCPUs = Physical vCPUs \u00d7 Overcommit Ratio \u2192900 \u00d7 4.5 =4050 vCPUs"
        }
    ],
    "4": [
        {
            "q": "[Week 4] In Azure SQL Database, which of the following statements about compute tiers is/are CORRECT?",
            "options": [
                "Business Critical tier uses remote premium storage for cost optimization",
                "General Purpose tier can replicate synchronously across regions without additional geo-replication configuration",
                "Hyperscale tier allows automatic scaling of storage beyond 100TB without manual intervention",
                "All the above"
            ],
            "correctIndex": 2,
            "solution": "Option a is FALSE: Business Critical tier uses LOCAL SSD storage, not remote storage. Remote storage is used in General Purpose and Hyperscale tiers. This is a common misconception. Option b is FALSE: General Purpose tier does NOT synchronously replicate across regions by default. It uses asynchronous replication. Customers must explicitly enable geo-replication or use additional features. Option c is TRUE: Hyperscale tier's primary strength is automatic, elastic scaling of storage. It can grow beyond 100TB without manual intervention or downtime, making it ideal for large databases with unpredictable growth."
        },
        {
            "q": "[Week 4] An Azure VM supports attaching additional data disks. What ultimately limits the maximum number of attachable disks?",
            "options": [
                "Azure subscription type",
                "Operating system",
                "VM size and SKU",
                "Region availability"
            ],
            "correctIndex": 2,
            "solution": "Disk limits are strictly enforced by VM size (SKU). OS and region do not affect disk count limits."
        },
        {
            "q": "[Week 4] A Linux VM requires passwordless authentication. What is the MOST SECURE approach beyond SSH keys?",
            "options": [
                "SSH public key authentication with file permissions (600)",
                "Azure AD SSH login through Azure Bastion or VM extension",
                "Service Principal with client secret",
                "Certificate-based SSH authentication"
            ],
            "correctIndex": 1,
            "solution": "Azure AD SSH eliminates the need to manage SSH keys on local machines.  Bastion acts as an intermediary, removing internet-facing SSH ports entirely. The trick: SSH keys are good, but Azure provides better security options."
        },
        {
            "q": "[Week 4] Standard (S1) App Service plan supports 10 deployment slots. What additional capability does Premium (P2v3) provide beyond more slots (20)?",
            "options": [
                "Faster swap operations",
                "Traffic warm-up before swap (auto-swap with warm-up)",
                "Slots no longer consume CPU/memory quota",
                "Independent scaling per slot"
            ],
            "correctIndex": 1,
            "solution": "Premium adds \"traffic warm-up\" \u2014 staging slot is fully loaded before swap, reducing request failures. Swap speed is the same. Slots always consume quota. The trick: more slots \u2260 better slot functionality.."
        },
        {
            "q": "[Week 4] You want an Azure App Service to securely access secrets without exposing credentials even in environment variables. What should you use?",
            "options": [
                "App Settings",
                "Service Principal",
                "Managed Identity + Key Vault",
                "Azure Storage Access Keys"
            ],
            "correctIndex": 2,
            "solution": "Key Vault alone is not enough. Managed Identity eliminates secret handling entirely."
        },
        {
            "q": "[Week 4] An application requires strong consistency, multi-row transactions, and sub-second global latency. Which GCP database best fits?",
            "options": [
                "Cloud Firestore (multi-region)",
                "Cloud Spanner",
                "Cloud Bigtable",
                "BigQuery"
            ],
            "correctIndex": 1,
            "solution": "Cloud Spanner = globally distributed, strongly consistent, ACID transactions, optimized for OLTP. Firestore = eventual consistency, document-based. Bigtable = wide-column for analytics. The trick: Firestore is global but not strongly consistent; Spanner is designed for this exact use case."
        },
        {
            "q": "[Week 4] In OpenStack, which service is responsible for deciding on which compute host a VM will run?",
            "options": [
                "Neutron",
                "Nova Scheduler",
                "Nova Compute",
                "Keystone"
            ],
            "correctIndex": 1,
            "solution": "Nova Compute runs the VM; Scheduler decides placement."
        },
        {
            "q": "[Week 4] Which GCP compute option is best suited for event-driven container execution without cluster management?",
            "options": [
                "Compute Engine",
                "GKE Autopilot",
                "App Engine Standard",
                "Cloud Run"
            ],
            "correctIndex": 3,
            "solution": "Cloud Run is serverless, container-native, and fully abstracts Kubernetes and infrastructure."
        },
        {
            "q": "[Week 4] Your application needs to store petabytes of time-series IoT sensor data with very high write throughput, Millisecond read latency and No complex joins required then what is the best storage choice?",
            "options": [
                "BigQuery",
                "Cloud SQL",
                "Bigtable",
                "Firestore"
            ],
            "correctIndex": 2,
            "solution": "Bigtable is built for massive-scale, low-latency key-value/time-series workloads. BigQuery is analytics, not low-latency serving."
        },
        {
            "q": "[Week 4] Instances inside a tenant network can communicate with each other but cannot obtain IP addresses automatically. What is the most likely cause?",
            "options": [
                "Neutron L3 agent failure",
                "Neutron DHCP agent failure",
                "Nova conductor failure",
                "Glance metadata corruption"
            ],
            "correctIndex": 1,
            "solution": "DHCP agent provides IP allocation to instances. Without it \u2192 no auto IP."
        }
    ],
    "5": [
        {
            "q": "[Week 5] A cloud provider guarantees 99% availability. An application is scheduled to run Y hours per day for 20 days. The observed downtime is 4 hours, and the SLA is violated. What is the maximum possible value of Y?",
            "options": [
                "Y < 20",
                "Y \u2265 20.2",
                "Y = 24",
                "Insufficient data"
            ],
            "correctIndex": 0,
            "solution": "No detailed solution provided."
        },
        {
            "q": "[Week 5] Which statement is always true in a multi-core cloud server?",
            "options": [
                "Power consumption decreases as cores increase",
                "Power consumption increases strictly linearly with cores",
                "Activating more cores increases instantaneous power draw",
                "Energy per task always increases with more cores"
            ],
            "correctIndex": 2,
            "solution": "More active cores mean higher instant power, but linearity and energy efficiency per task vary with workload."
        },
        {
            "q": "[Week 5] An enterprise transitioning from pure on-premise infrastructure to a hybrid cloud model will experience the most significant change in which economic aspect?",
            "options": [
                "Operating expenditure increases relative to capital expenditure",
                "Total cost of ownership (TCO) always decreases",
                "Fixed costs does not decrease while variable costs increase",
                "Annual revenue decreases due to infrastructure overhead"
            ],
            "correctIndex": 0,
            "solution": "In a hybrid cloud model, organizations reduce upfront capital expenditure (CapEx) for hardware procurement but shift some costs to operational expenditure (OpEx) for cloud service subscriptions. The net economic impact depends on workload distribution, but the shift in the ratio of OpEx to CapEx is the most dramatic and consistent change across hybrid deployments. Option B is incorrect because TCO may not always decrease\u2014it depends on pricing and utilization. Option D is irrelevant to infrastructure decisions."
        },
        {
            "q": "[Week 5] Which cloud characteristic most directly improves cost efficiency for unpredictable workloads?",
            "options": [
                "High availability",
                "Elastic scalability",
                "Geographic redundancy",
                "Dedicated hardware"
            ],
            "correctIndex": 1,
            "solution": "Elasticity allows scaling resources up/down based on demand, preventing overprovisioning and idle hardware costs."
        },
        {
            "q": "[Week 5] Which technology allows multiple operating systems to run on the same physical server?",
            "options": [
                "Containerization",
                "Virtualization",
                "Load balancing",
                "RAID"
            ],
            "correctIndex": 1,
            "solution": "Virtualization uses a hypervisor to run multiple OS instances on shared hardware."
        },
        {
            "q": "[Week 5] Which factor MOST improves MapReduce performance in the cloud?",
            "options": [
                "Increasing reducer count",
                "Increasing replication factor",
                "Scheduling mappers on nodes storing the data",
                "Using larger block size only"
            ],
            "correctIndex": 2,
            "solution": "Data locality minimizes network transfer during map phase."
        },
        {
            "q": "[Week 5] Increasing HDFS block size generally results in:",
            "options": [
                "More parallelism",
                "Fewer mappers & reduced scheduling overhead",
                "More shuffle traffic",
                "Reduced fault tolerance"
            ],
            "correctIndex": 1,
            "solution": "No detailed solution provided."
        },
        {
            "q": "[Week 5] In a cloud data center, an organization must choose between containerization and full virtualization for a high-density workload. Which statement best reflects the trade-off?",
            "options": [
                "Containers provide stronger isolation than VMs because they use separate kernels",
                "VMs have lower overhead because they share the host OS kernel",
                "Containers achieve higher density but weaker isolation compared to VMs",
                "Both have identical resource overhead"
            ],
            "correctIndex": 2,
            "solution": "Containers share the host operating system kernel, which reduces overhead and enables higher workload density. In contrast, virtual machines emulate hardware through a hypervisor, providing stronger isolation between workloads."
        },
        {
            "q": "[Week 5] A cloud provider runs 8 physical servers hosting 32 VMs with an average CPU utilization of 50%. After energy-aware consolidation, the VMs are migrated to 5 servers, increasing average CPU utilization to 75%. Which consequence is most likely?",
            "options": [
                "Total power consumption decreased; SLA violation risk increased",
                "Total power consumption increased; SLA improved",
                "Total power consumption decreased; SLA unaffected",
                "Insufficient data to determine impact"
            ],
            "correctIndex": 0,
            "solution": "No detailed solution provided."
        },
        {
            "q": "[Week 5] Which resource management technique helps avoid hotspots in a cloud cluster?",
            "options": [
                "Energy-aware scheduling",
                "VM migration / load balancing",
                "Increasing replication factor",
                "Using larger HDFS blocks"
            ],
            "correctIndex": 1,
            "solution": "Live VM migration or load balancing distributes workloads across servers to prevent any host from becoming a performance bottleneck."
        }
    ],
    "6": [
        {
            "q": "[Week 6] An attacker captures a legitimate authentication token from a user session and replays that token later to perform actions as the user. This kind of attack primarily compromises which security property?",
            "options": [
                "Confidentiality",
                "Integrity",
                "Availability",
                "Authenticity"
            ],
            "correctIndex": 3,
            "solution": "Replaying a captured token allows the attacker to impersonate the legitimate user, this undermines authenticity (the assurance that an entity is who it claims to be). Although confidentiality was breached when the token was captured, the primary effect of the replay is impersonation/authenticity failure."
        },
        {
            "q": "[Week 6] A well-crafted phishing email (that impersonates a bank and convinces a user to provide credentials) can affect which of the following?",
            "options": [
                "Confidentiality",
                "Integrity",
                "Availability",
                "Authenticity"
            ],
            "correctIndex": 0,
            "solution": "The immediate goal of most phishing attacks is to trick a user into revealing \"secrets\" such as usernames, passwords, or credit card numbers. Once the user provides these credentials to the attacker, the confidentiality of that data is instantly lost because an unauthorized party now has access to it."
        },
        {
            "q": "[Week 6] Which of the following is a passive attack?",
            "options": [
                "Modifying packets in transit to change their payload",
                "Injecting forged packets into an existing TCP connection",
                "Traffic analysis to infer communication patterns between two hosts",
                "Launching a Denial-of-Service (DoS) attack to disrupt service"
            ],
            "correctIndex": 2,
            "solution": "A passive attack involves monitoring or observing communication without altering data or affecting system operation. Traffic analysis fits this definition because the attacker studies communication patterns (such as timing, frequency, or endpoints) without modifying or injecting any data."
        },
        {
            "q": "[Week 6] An attacker floods a web application with slow HTTP POSTs that hold connections open and exhaust the server\u2019s connection pool, causing legitimate clients to experience severe delays. This attack is best classified as:",
            "options": [
                "Disruption",
                "Disclosure",
                "Usurpation",
                "Deception"
            ],
            "correctIndex": 0,
            "solution": "The attack degrades or interrupts normal service (slowing/denying legitimate access) a disruption (Denial-of-Service style) rather than disclosure or deception."
        },
        {
            "q": "[Week 6] Which activity both attempts to exploit vulnerabilities and demonstrates real-world impact (often requiring written authorization before it\u2019s performed)?",
            "options": [
                "Reconnaissance",
                "Vulnerability scanning",
                "Penetration testing",
                "Post-attack investigation"
            ],
            "correctIndex": 2,
            "solution": "Penetration testing actively attempts to exploit vulnerabilities to show practical impact; because of its intrusive nature it normally requires explicit permission. Vulnerability scanning is usually non-exploitative (identifies possible problems)."
        },
        {
            "q": "[Week 6] Which of the following mechanisms most directly provides non-repudiation for an online financial transaction?",
            "options": [
                "Using a strong password over HTTPS",
                "Encrypting data using a shared symmetric key",
                "Logging IP addresses and timestamps in a database",
                "Digitally signing the transaction with the sender\u2019s private key"
            ],
            "correctIndex": 3,
            "solution": "No detailed solution provided."
        },
        {
            "q": "[Week 6] Statement I: Authorization is the process of verifying the identity of a user or system. Statement II: Non-repudiation ensures that a sender cannot later deny having sent a specific message. Options:",
            "options": [
                "I TRUE, II FALSE",
                "I FALSE, II TRUE",
                "Both TRUE",
                "Both FALSE"
            ],
            "correctIndex": 1,
            "solution": "No detailed solution provided."
        },
        {
            "q": "[Week 6] A start-up wants to deploy a custom web application. They want to upload their application code and have the provider manage the underlying OS patches, middleware, and runtime, while still allowing them to configure application settings and scale instances. Which cloud service model best fits?",
            "options": [
                "SaaS",
                "IaaS",
                "PaaS",
                "DaaS"
            ],
            "correctIndex": 2,
            "solution": "No detailed solution provided."
        },
        {
            "q": "[Week 6] A country\u2019s data protection law requires that all personal data of its citizens must be stored and processed only within that country\u2019s geographic boundaries, even when using cloud services. This concern is most closely related to which cloud security risk category?",
            "options": [
                "Regulatory Compliance & Audit",
                "Data Location",
                "Disaster Recovery & Business Continuity",
                "Investigative Support"
            ],
            "correctIndex": 1,
            "solution": "The key phrase is \u201cstored and processed only within that country\u2019s geographic boundaries.\u201d This is explicitly a data location concern (where data physically resides and is processed). While there is a regulatory driver, the specific risk category in cloud security terms here is Data Location. Regulatory Compliance & Audit is broader about meeting regulations; the example is focused directly on location constraints."
        },
        {
            "q": "[Week 6] Vendor lock-in is most directly associated with which long-term viability challenge?",
            "options": [
                "Difficulty in migrating data to another provider",
                "Unauthorized data disclosure",
                "Increased regulatory audits",
                "Privileged user misuse"
            ],
            "correctIndex": 0,
            "solution": "Vendor lock-in makes it hard for customers to migrate applications and data due to proprietary formats, APIs, or integrations."
        }
    ],
    "7": [
        {
            "q": "[Week 7] In a mobile cloud gaming application, users frequently experience frame drops and lag when moving between different Wi\u2011Fi and cellular networks. The primary underlying challenge specific to Mobile Cloud Computing (MCC) in this scenario is:",
            "options": [
                "Insufficient number of installed games on the mobile device",
                "High dependency on wide\u2011area network conditions for remote execution",
                "Overprovisioned CPU and memory on the mobile device",
                "Removal of mobile device caches during gameplay"
            ],
            "correctIndex": 1,
            "solution": "MCC relies on remote servers for intensive computation. As the device moves across heterogeneous networks (Wi\u2011Fi, 4G, 5G), variations in latency, bandwidth, and stability cause performance degradation. That is fundamentally network dependency and latency, not local resource overprovisioning or caching issues."
        },
        {
            "q": "[Week 7] Which of the following is the primary reason for deploying a cloudlet (micro data center) in a campus or stadium?",
            "options": [
                "To eliminate the need for encryption between device and cloudlet",
                "To provide low-latency compute for AR/VR and other real-time applications close to users",
                "To guarantee compliance with global data sovereignty laws",
                "To permanently replace centralized cloud data centers"
            ],
            "correctIndex": 1,
            "solution": "The main purpose of a cloudlet is to bring computation closer to end users to reduce latency and support real-time, interactive, and latency-sensitive applications such as AR/VR, gaming, video analytics, and IoT processing. This proximity minimizes round-trip delay compared to distant centralized cloud data centers."
        },
        {
            "q": "[Week 7] Dynamic offloading decision engines often consider an energy-delay trade-off. Which measured parameter below is least useful for that decision at runtime?",
            "options": [
                "Current cellular bandwidth and RTT",
                "Device battery remaining (percentage)",
                "Number of apps installed on the device",
                "Estimated CPU time for the task locally"
            ],
            "correctIndex": 2,
            "solution": "Installed app count is unrelated to the specific task's energy/delay trade-off; bandwidth, battery state, and estimated local CPU time are directly relevant."
        },
        {
            "q": "[Week 7] A university deploys a small server cluster inside its campus cafeteria to support AR\u2011based menu visualization and nutrition analysis for students\u2019 smartphones. Computation is offloaded from phones to this on\u2011site cluster to minimize delay. This on\u2011site resource is best described as:",
            "options": [
                "A global hyperscale cloud data center",
                "A cloudlet placed close to end users",
                "A personal hotspot on a student\u2019s phone",
                "A satellite relay node in geostationary orbit"
            ],
            "correctIndex": 1,
            "solution": "A cloudlet is a small\u2011scale data center placed near mobile users to support low\u2011latency offloading. It is neither a global cloud region nor a personal hotspot or satellite node."
        },
        {
            "q": "[Week 7] A mobile banking app uses MCC to process transactions on cloud servers. Data is transmitted over the Internet from the app to the cloud. Which of the following is the most critical security concern in this context?",
            "options": [
                "The screen size of the mobile device is too small",
                "The app icon resolution being too high",
                "Excessive variety of smartphone colors available in the market",
                "Confidentiality of sensitive data while it is transmitted and processed"
            ],
            "correctIndex": 3,
            "solution": "When financial data (PINs, account details, transaction records) is sent to the cloud, the primary concern is data confidentiality and privacy during transmission and processing. Screen size, icon resolution, or phone color do not affect MCC security."
        },
        {
            "q": "[Week 7] Which of the following is a key advantage of Fog Computing over Cloud Computing?",
            "options": [
                "Better support for real-time applications like healthcare monitoring and autonomous vehicles",
                "Higher centralization of resources",
                "Infinite storage capacity",
                "Removal of network infrastructure"
            ],
            "correctIndex": 0,
            "solution": "Fog computing supports real-time, delay-sensitive applications by reducing communication delays through local processing. Cloud computing alone suffers from higher latency due to distance from end devices."
        },
        {
            "q": "[Week 7] Which of the following best explains why 5G + Edge/Fog is often recommended for real-time remote healthcare monitoring?",
            "options": [
                "5G guarantees zero packet loss in all deployments",
                "5G replaces the need for any local processing hardware",
                "Edge processing reduces decision latency while 5G offers low transport latency and high reliability",
                "Edge nodes make patient data public for faster access"
            ],
            "correctIndex": 2,
            "solution": "Combining low-transport latency and high reliability from 5G with local edge processing that avoids long round-trips reduces end-to-end latency (C). Other statements are  \f   incorrect or unsafe.."
        },
        {
            "q": "[Week 7] In geospatial cloud workflows that process very large satellite image tiles, which optimization typically gives the most direct improvement in parallel processing throughput?",
            "options": [
                "Increasing on-device screen resolution of the operator\u2019s laptop",
                "Using a single-threaded processing pipeline to avoid synchronization overhead",
                "Renaming files to shorter filenames to reduce I/O time",
                "Partitioning large raster tiles into spatially-indexed blocks processed in parallel"
            ],
            "correctIndex": 3,
            "solution": "In geospatial cloud workflows, satellite imagery datasets are often extremely large (multi-GB or TB-scale raster tiles). Processing such data efficiently requires leveraging parallel and distributed computing architectures (e.g., Spark, Hadoop, Dask, cloud-native geospatial pipelines)."
        },
        {
            "q": "[Week 7] A startup processes global high\u2011resolution satellite imagery and LiDAR data to detect deforestation patterns. When migrating to a geospatial cloud platform, which challenge is most fundamental from a data\u2011processing perspective?",
            "options": [
                "Extremely high computation and storage demands for massive raster and vector datasets",
                "The general lack of public interest in environmental topics",
                "The impossibility of running any GIS software on cloud infrastructure",
                "The mandatory removal of open geospatial standards (e.g., OGC standards) in cloud systems"
            ],
            "correctIndex": 0,
            "solution": "Satellite imagery and LiDAR produce huge raster and vector datasets requiring high\u2011performance computing, large storage, and parallel processing, which is the main challenge. GIS tools can run in cloud environments, and standards are not removed by default."
        },
        {
            "q": "[Week 7] A smart healthcare system uses wearable sensors to continuously monitor patients\u2019 ECG signals  \f   and detect abnormalities in real time. Alerts must be raised within a few hundred milliseconds. Which combination is most appropriate to meet these latency requirements?",
            "options": [
                "Batch analytics in a distant cloud region + periodic manual report downloads",
                "Pure cloud processing over a high\u2011latency satellite link",
                "Fog/Edge nodes performing local pre\u2011processing + low\u2011latency wireless access network (e.g., 5G)",
                "Storing all data offline on the device and uploading it once per day"
            ],
            "correctIndex": 2,
            "solution": "For real\u2011time health monitoring, the system must process data close to the patient (fog/edge) and use low\u2011latency communication (e.g., 5G) to meet strict timing constraints. Pure cloud with high latency or delayed batch uploads cannot provide immediate alerts."
        }
    ],
    "8": [
        {
            "q": "[Week 8] In Docker, which command will show all containers (both running and stopped) on the host?",
            "options": [
                "docker ps",
                "docker ps -a",
                "docker container run",
                "docker images"
            ],
            "correctIndex": 1,
            "solution": "docker ps shows only running containers. docker ps -a and the newer alias docker container ls -a list all containers (running + stopped). docker images lists images, not containers."
        },
        {
            "q": "[Week 8] Which statement about Docker volumes is TRUE?",
            "options": [
                "Docker volumes are stored inside a container\u2019s writable layer.",
                "Docker volumes are automatically deleted when a container stops.",
                "Docker volumes persist independently of the container lifecycle.",
                "Docker volumes can only be attached to one container at a time."
            ],
            "correctIndex": 2,
            "solution": "Docker volumes are managed by Docker and stored on the host filesystem (or via a volume driver). They exist outside the container\u2019s writable layer and therefore:Remain intact even if a container is stopped or removed, Can be reused by new containers, Support persistent data storage"
        },
        {
            "q": "[Week 8] Which statement best describes the relationship between containers and virtual machines?",
            "options": [
                "A single container usually includes its own kernel, separate from the host.",
                "Multiple containers can share the same OS kernel while running on a VM.",
                "Containers must run directly on bare-metal hardware and cannot run inside VMs.",
                "VMs must always run inside containers for isolation."
            ],
            "correctIndex": 1,
            "solution": "Containers share the host kernel (which may itself be running inside a VM). Thus, one VM can host a container engine, and multiple containers can share that VM\u2019s kernel."
        },
        {
            "q": "[Week 8] Which of the following is NOT a primary responsibility of Kubernetes?",
            "options": [
                "Automatic restart of failed containers.",
                "Scheduling containers across a cluster of nodes.",
                "Providing low-level hardware virtualization via hypervisor extensions.",
                "Load balancing traffic across multiple replicas of a service."
            ],
            "correctIndex": 2,
            "solution": "Kubernetes works at the container orchestration layer and relies on the underlying OS/virtualization. It does not implement hardware-level virtualization (that is the job of hypervisors)."
        },
        {
            "q": "[Week 8] In a Green Cloud data center, which strategy most directly reduces energy consumption while maintaining SLA as much as possible?",
            "options": [
                "Keeping all servers powered on but underutilized to handle sudden spikes.",
                "Randomly assigning VMs to physical hosts to spread heat evenly.",
                "Consolidating VMs onto fewer physical servers and powering down idle machines.",
                "Running all workloads on the oldest hardware first to extend newer hardware lifetime."
            ],
            "correctIndex": 2,
            "solution": "Energy-aware VM consolidation packs workloads efficiently onto fewer hosts, allowing unused servers to be turned off or put into low-power states, reducing overall energy usage."
        },
        {
            "q": "[Week 8] Which is the biggest practical challenge when integrating wireless sensor networks (WSNs) directly into a Sensor-Cloud?",
            "options": [
                "Sensors typically cannot support full virtualization due to limited compute/memory.",
                "Sensor nodes always have plentiful power and do not need energy-aware designs.",
                "Sensors typically produce data that is low-volume, homogeneous and trivial to store.",
                "Sensors natively run container orchestrators like Kubernetes."
            ],
            "correctIndex": 0,
            "solution": "No detailed solution provided."
        },
        {
            "q": "[Week 8] Which architecture is most appropriate to support ultra-low-latency IoT applications (e.g., industrial control, autonomous systems) that cannot tolerate high round-trip time to a distant cloud?",
            "options": [
                "Rely solely on centralized cloud data centers located far from devices.",
                "Use edge/fog computing nodes closer to the devices for processing.",
                "Buffer all data at the cloud and respond in large periodic batches.",
                "Disable any local processing on devices and send raw data directly to the cloud."
            ],
            "correctIndex": 1,
            "solution": "Edge/fog computing reduces latency by moving computation closer to the data source. A centralized cloud introduces higher latency due to physical distance and network hops."
        },
        {
            "q": "[Week 8] Why is it often necessary to preprocess or aggregate sensor data before long-term storage in large-  \f   scale IoT/Sensor Cloud systems?",
            "options": [
                "To reduce rapidly growing storage and processing costs from raw high-volume data",
                "Because all sensor data is already compressed and easy to store",
                "To eliminate the need for cloud infrastructure",
                "To make sensors consume more battery power"
            ],
            "correctIndex": 0,
            "solution": "Raw IoT data is generated continuously and in large volumes. Without filtering, aggregation, or preprocessing, storing and analyzing all raw data causes storage and computation costs to increase quickly, making the system inefficient and expensive."
        },
        {
            "q": "[Week 8] Consider the following statements about virtualization in a Sensor Cloud: Statement 1: Virtual sensors can be created by aggregating, filtering, or combining data from multiple physical sensors. Statement 2: Virtualization in a Sensor Cloud allows multiple applications to share the same underlying physical sensor infrastructure. Which option is correct?",
            "options": [
                "Statement 1 is True and Statement 2 is False",
                "Statement 1 is False and Statement 2 is True",
                "Both statements are True",
                "Both statements are False"
            ],
            "correctIndex": 2,
            "solution": "Sensor virtualization abstracts physical sensing resources into logical (virtual) sensors. These virtual sensors may represent processed or fused data from multiple physical sensors. This abstraction layer enables resource sharing, meaning several applications can use the same physical sensor infrastructure without direct hardware dependency."
        },
        {
            "q": "[Week 8] What is the primary reason latency-critical IoT applications (e.g., autonomous vehicle control) cannot rely solely on a centralized cloud?",
            "options": [
                "Cloud data centers are too expensive to operate.",
                "Physical network distance to cloud data centers introduces unacceptable round-trip latency.",
                "Cloud platforms do not support real-time data analytics.",
                "IoT devices cannot connect to the internet continuously."
            ],
            "correctIndex": 1,
            "solution": "For real-time control systems, even small delays matter. Sending data to distant centralized cloud data centers adds propagation and network delay, making it difficult to meet strict latency requirements. Hence, relying only on centralized cloud infrastructure is unsuitable for ultra-lowlatency applications."
        }
    ],
    "9": [
        {
            "q": "[Week 9] Which of the following best describes the difference between cloud computing and fog computing?",
            "options": [
                "Cloud computing processes data near IoT devices, while fog computing processes data only in centralized data centers.",
                "Cloud computing offers distributed processing across gateways, while fog computing performs computation only in the cloud core.",
                "Cloud computing relies on centralized data centers for computation, whereas fog computing distributes processing closer to end devices through intermediate nodes.",
                "Cloud computing is used only for storage, while fog computing is used only for real-time analytics."
            ],
            "correctIndex": 2,
            "solution": "Cloud computing relies on centralized, large data centers that may be far from users, which can increase latency. Fog computing extends cloud services closer to end devices through intermediate nodes like gateways and local servers. This reduces delay, supports real-time processing, and lowers bandwidth usage, acting as a bridge between edge devices and the cloud"
        },
        {
            "q": "[Week 9] An autonomous vehicle that must instantly detect obstacles and apply brakes should primarily rely on:",
            "options": [
                "Cloud computing",
                "Fog computing",
                "Edge computing",
                "Centralized data warehouse"
            ],
            "correctIndex": 2,
            "solution": "Autonomous vehicles need ultra-low latency for safety actions like obstacle  \f   detection and braking. Processing must happen on the vehicle\u2019s onboard edge system to avoid network delays. Fog and cloud support tasks like analytics, updates, and model training, but realtime control decisions must be handled at the edge."
        },
        {
            "q": "[Week 9] In terms of physical proximity to end devices (closest to farthest), which order is correct?",
            "options": [
                "Cloud \u2192 Fog \u2192 Edge",
                "Edge \u2192 Fog \u2192 Cloud",
                "Fog \u2192 Edge \u2192 Cloud",
                "Edge \u2192 Cloud \u2192 Fog"
            ],
            "correctIndex": 1,
            "solution": "Edge computing operates directly at or near the data source, such as IoT devices and sensors. Fog computing works at an intermediate level using gateways and local servers for regional processing. Cloud computing is the farthest layer, relying on centralized data centers that may be geographically distant from end devices."
        },
        {
            "q": "[Week 9] Which resource management strategy is most important to prevent overload when many edge devices send data to nearby fog nodes?",
            "options": [
                "Increasing storage capacity at a single fog node",
                "Static task allocation",
                "Load balancing across fog nodes",
                "Sending all data directly to the cloud"
            ],
            "correctIndex": 2,
            "solution": "When many edge devices send data, one fog node can become overloaded. Static allocation or just adding storage doesn\u2019t handle changing workloads well. Load balancing spreads tasks across multiple fog nodes, avoiding congestion and keeping latency low. Sending all data to the cloud increases delay and bandwidth use, defeating the purpose of fog computing."
        },
        {
            "q": "[Week 9] Which statement best explains task offloading decisions in a fog\u2013edge\u2013cloud architecture?",
            "options": [
                "All tasks must first be processed in the cloud before reaching fog or edge",
                "Edge devices always offload tasks to the cloud, bypassing fog",
                "Time-critical tasks are handled at edge/fog, while computation-intensive but delay-tolerant tasks are sent to the cloud",
                "Fog nodes only store data and do not participate in computation"
            ],
            "correctIndex": 2,
            "solution": "In a hierarchical system, task placement is based on latency needs and computing demand. Time-critical tasks run at the edge or fog to reduce delay, while computationintensive but delay-tolerant tasks are sent to the cloud. This layered approach balances fast response with efficient use of large-scale resources."
        },
        {
            "q": "[Week 9] Which factor most strongly influences whether a task should be executed at the edge instead of the cloud?",
            "options": [
                "Data archival requirements",
                "Latency sensitivity of the application",
                "Cloud storage capacity",
                "Size of historical datasets"
            ],
            "correctIndex": 1,
            "solution": "Edge computing is chosen primarily when an application is delay-sensitive (e.g., real-time control, emergency response). Cloud is better for storage or heavy batch processing, but latency constraints push computation toward the edge."
        },
        {
            "q": "[Week 9] Which metric is most directly optimized when moving computation from cloud to fog nodes?",
            "options": [
                "Disk storage size",
                "Network latency",
                "Data encryption level",
                "Database consistency"
            ],
            "correctIndex": 1,
            "solution": "Fog nodes are geographically closer to devices, so shifting tasks from cloud to fog mainly reduces communication delay, improving real-time performance."
        },
        {
            "q": "[Week 9] Which issue is most critical for maintaining trust among Cloud Service Providers (CSPs) in a cloud federation?",
            "options": [
                "Uniform hardware configuration across all CSPs",
                "Standardized pricing models only",
                "Federated identity management and secure SLA enforcement",
                "Centralized ownership of all federated data centers"
            ],
            "correctIndex": 2,
            "solution": "In a cloud federation, independent CSPs cooperate while staying autonomous. Trust relies on strong identity federation, authentication, authorization, and strict SLA enforcement. Without secure identity management and policy compliance, resource sharing becomes risky. Uniform hardware or pricing isn\u2019t required, and centralized ownership goes against the federation model."
        },
        {
            "q": "[Week 9] Which architectural mechanism most enables interoperability in a cloud federation?",
            "options": [
                "Proprietary APIs unique to each CSP",
                "Closed resource management policies",
                "Standardized interfaces and open protocols (e.g., REST, OCCI, CIMI)",
                "Centralized control by a single dominant CSP"
            ],
            "correctIndex": 2,
            "solution": "Cloud federation connects independent CSPs with different platforms. Interoperability depends on standardized APIs, open protocols, and common service description models (e.g., REST, OCCI, CIMI). Proprietary systems or centralized control oppose federation principles. Without standards, cross-provider discovery, migration, and orchestration are very difficult."
        },
        {
            "q": "[Week 9] Which scenario best justifies the need for workload migration in a hybrid cloud federation?",
            "options": [
                "When all workloads have identical security and compliance requirements",
                "When private cloud resources are underutilized and public cloud is idle",
                "When sensitive workloads must remain on private infrastructure, but burst workloads require additional public cloud capacity",
                "When interoperability between clouds is intentionally restricted"
            ],
            "correctIndex": 2,
            "solution": "Hybrid cloud federation lets organizations keep sensitive workloads in private clouds for security and compliance while using public clouds for scalable capacity during peak demand. Workload migration helps balance cost, performance, and security. If all workloads had identical needs, migration wouldn\u2019t be required, and ignoring interoperability or objectives would defeat the purpose of hybrid cloud use."
        }
    ],
    "10": [
        {
            "q": "[Week 10] Which issue is most critical when performing live VM migration across geographically distributed data centers?",
            "options": [
                "Uniform CPU clock speed across hosts",
                "High network latency and bandwidth variability between sites",
                "Availability of local storage at the source host",
                "Increasing the number of VM snapshots"
            ],
            "correctIndex": 1,
            "solution": "Live VM migration across distant data centers depends heavily on network performance. High latency and fluctuating bandwidth can slow memory state transfer, increase migration time, and risk service degradation. CPU clock differences are usually handled by hypervisors, and snapshots/storage are secondary. Network conditions are the dominant technical challenge in wide-area live migration."
        },
        {
            "q": "[Week 10] Which migration technique generally consumes the highest network bandwidth?",
            "options": [
                "Cold migration",
                "Pre-copy migration",
                "Post-copy migration",
                "Offline image transfer"
            ],
            "correctIndex": 1,
            "solution": "In pre-copy migration, memory pages are transferred multiple times while the VM is still running, especially pages that are frequently modified (dirty pages). This repeated transmission increases total network traffic. Cold migration transfers memory only once but with downtime, while post-copy avoids repeated full memory copying, making pre-copy the most bandwidth-intensive."
        },
        {
            "q": "[Week 10] Which factor most increases energy consumption during live migration in fog environments?",
            "options": [
                "Small VM memory footprint",
                "Short network distance between nodes",
                "Frequent retransmission of dirty memory pages",
                "Low CPU utilization on source host"
            ],
            "correctIndex": 2,
            "solution": "In live migration (especially pre-copy phases), memory pages that are repeatedly modified must be retransmitted multiple times. This increases network usage, CPU activity, and migration duration, all of which raise energy consumption. Smaller memory, shorter distance, or low CPU load would reduce energy use, not increase it."
        },
        {
            "q": "[Week 10] In container-based cloud environments, what is the primary role of Kubernetes?",
            "options": [
                "To build container images from application source code",
                "To provide low-level container runtime like Docker Engine",
                "To orchestrate, schedule, scale, and manage containers across clusters",
                "To replace virtual machines entirely"
            ],
            "correctIndex": 2,
            "solution": "Kubernetes is a container orchestration platform. It manages container deployment, scheduling, auto-scaling, self-healing, load balancing, and rolling updates across multiple nodes. It does not build images (Docker does), nor does it act as the container runtime itself. VMs can still exist underneath Kubernetes clusters."
        },
        {
            "q": "[Week 10] Which Docker component is responsible for handling build instructions defined in a Dockerfile?",
            "options": [
                "Docker Hub",
                "Docker CLI",
                "Docker Daemon",
                "Docker Registry"
            ],
            "correctIndex": 2,
            "solution": "When you run docker build, the Docker CLI sends the request to the Docker Daemon, which actually processes the Dockerfile instructions, builds layers, and creates the image. Registries only store images."
        },
        {
            "q": "[Week 10] Which Docker feature ensures that a container runs in isolation from the host system?",
            "options": [
                "Hypervisor",
                "Linux namespaces and cgroups",
                "Virtual machine snapshots",
                "Docker Swarm"
            ],
            "correctIndex": 1,
            "solution": "Docker uses Linux namespaces for process isolation and control groups (cgroups) for resource limits (CPU, memory). This provides lightweight isolation without full virtualization."
        },
        {
            "q": "[Week 10] Statement 1: Docker volumes persist data even if a container is deleted. Statement 2: Data stored inside a container\u2019s writable layer remains safe after the container is removed.",
            "options": [
                "Only statement 1 is true",
                "Only statement 2 is true",
                "Both statements are true",
                "Both statements are false"
            ],
            "correctIndex": 0,
            "solution": "Docker volumes are managed outside the container\u2019s lifecycle, so their data persists even if the container is removed. However, the container\u2019s writable layer is deleted along with the container, meaning any data stored only there is lost."
        },
        {
            "q": "[Week 10] In Docker, __________ is responsible for creating and managing containers on the host system.",
            "options": [
                "Docker Hub",
                "Docker Engine",
                "Kubernetes",
                "Dockerfile"
            ],
            "correctIndex": 1,
            "solution": "Docker Engine is the core runtime that builds, runs, and manages containers on a host machine. Docker Hub stores images, Kubernetes handles orchestration, and a Dockerfile only contains build instructions."
        },
        {
            "q": "[Week 10] If a VM has 64 GB memory and the migration channel supports 8 MB/sec, what is the total migration time and downtime for non-live VM migration?",
            "options": [
                "1 hour, 1 hour",
                "2 hours, 2 hours",
                "2.5 hours, 2.5 hours",
                "3 hours, 3 hours"
            ],
            "correctIndex": 1,
            "solution": "=(64 \u00d7 2\u00b3\u2070) / (8 \u00d7 2\u00b2\u2070) = 8192 seconds \u2248 2.27 hours \u2248 2 hours."
        },
        {
            "q": "[Week 10] Containers require a full guest operating system to run.",
            "options": [
                "True",
                "False"
            ],
            "correctIndex": 1,
            "solution": "Containers share the host OS kernel and do not require a full guest operating system like virtual machines. This makes them lightweight and faster to start."
        }
    ],
    "11": [
        {
            "q": "[Week 11] Which characteristic most distinguishes Dew computing from Edge computing?",
            "options": [
                "Both rely completely on continuous internet connectivity",
                "Dew computing nodes can operate fully offline and later synchronize with the cloud",
                "Edge computing provides only storage, while dew provides computation",
                "Dew computing replaces cloud infrastructure entirely"
            ],
            "correctIndex": 1,
            "solution": "Dew computing emphasizes autonomous local operation, where end devices continue functioning without network access and synchronize later. Edge computing reduces latency but often still depends on networked infrastructure for coordination."
        },
        {
            "q": "[Week 11] Which application scenario best fits Dew computing?",
            "options": [
                "Real-time stock trading requiring constant global updates",
                "Remote rural education systems with unstable internet connectivity",
                "High-performance weather modeling in supercomputers",
                "Centralized banking transaction processing"
            ],
            "correctIndex": 1,
            "solution": "Dew computing suits environments with intermittent connectivity, such as rural education, remote healthcare, or field data collection. Devices function locally and sync when online. Constantly connected, latency-critical systems are better served by edge/fog/cloud."
        },
        {
            "q": "[Week 11] Which layer in Dew computing is primarily responsible for conflict resolution after offline operation?",
            "options": [
                "Physical layer",
                "Dew sensor layer",
                "Cloud synchronization service",
                "Network routing layer"
            ],
            "correctIndex": 2,
            "solution": "Dew devices may modify data offline, but conflict detection and resolution logic is typically handled during synchronization with the cloud layer, which maintains global consistency."
        },
        {
            "q": "[Week 11] What is the main trade-off introduced by Dew computing?",
            "options": [
                "Reduced latency vs increased data storage",
                "Local autonomy vs hardware consistency",
                "High scalability vs low virtualization complexity",
                "Better security vs no offline capability"
            ],
            "correctIndex": 1,
            "solution": "Allowing devices to operate independently increases autonomy, but later synchronization introduces challenges in maintaining global data consistency, especially when conflicts arise."
        },
        {
            "q": "[Week 11] Which issue commonly affects performance in serverless applications?",
            "options": [
                "VM overhead",
                "Cold start latency",
                "Disk fragmentation",
                "Hardware driver conflicts"
            ],
            "correctIndex": 1,
            "solution": "When a function is invoked after being idle, the platform may need to initialize a new runtime container. This delay is called a cold start, a known challenge in FaaS systems."
        },
        {
            "q": "[Week 11] Why are serverless functions typically designed to be stateless?",
            "options": [
                "To reduce electricity consumption",
                "Because local storage is unlimited",
                "To allow automatic scaling and parallel execution without dependency conflicts",
                "To avoid using APIs"
            ],
            "correctIndex": 2,
            "solution": "Statelessness ensures each function invocation is independent, allowing the platform to scale horizontally and run multiple instances in parallel without coordination issues."
        },
        {
            "q": "[Week 11] Which factor most limits the suitability of FaaS for long-running scientific simulations?",
            "options": [
                "Lack of GPU support",
                "Function execution time limits enforced by providers",
                "No internet access",
                "Inability to process data streams"
            ],
            "correctIndex": 1,
            "solution": "FaaS platforms enforce maximum execution time limits (e.g., minutes). Longrunning HPC simulations exceed these limits, making FaaS unsuitable."
        },
        {
            "q": "[Week 11] Why is direct file system storage unreliable for persistent data in FaaS?",
            "options": [
                "File systems are encrypted",
                "Functions run on different hosts and local storage is ephemeral",
                "Storage speed is too slow",
                "Providers disable disk access"
            ],
            "correctIndex": 1,
            "solution": "FaaS instances are ephemeral and may run on different machines each time. Local file system data is not guaranteed to persist across invocations."
        },
        {
            "q": "[Week 11] Which of the following describes a hard limit for AWS Lambda function execution?",
            "options": [
                "Functions can run indefinitely until manually stopped",
                "Each AWS Lambda invocation has a maximum timeout of 15 minutes",
                "AWS Lambda allows up to 1 hour per invocation",
                "AWS Lambda timeouts are configurable with no upper bound"
            ],
            "correctIndex": 1,
            "solution": "AWS Lambda functions can be configured to run for up to 900 seconds (15 minutes) per invocation. If execution exceeds this limit, AWS automatically terminates the function"
        },
        {
            "q": "[Week 11] Amazon Redshift is a fully managed cloud data warehouse service provided by __________.",
            "options": [
                "Google",
                "Microsoft",
                "Amazon Web Services",
                "Oracle"
            ],
            "correctIndex": 2,
            "solution": "Amazon Redshift is AWS\u2019s managed data warehousing service designed for large-scale analytics using columnar storage and distributed query processing."
        }
    ]
};
