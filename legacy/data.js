const mcqData = {
    "cloud": {
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
        ],
        "12": [
            {
                "q": "[Week 12] MCC helps mobile devices by: 1. Extending storage capacity 2. Supporting heavy data analytics 3. Removing wireless communication delays completely 4. Enabling scalable resource usage",
                "options": [
                    "1, 2, and 4 only",
                    "1 and 2 only",
                    "1, 2 and 3 only",
                    "All of the above"
                ],
                "correctIndex": 0,
                "solution": "Cloud resources extend storage (1), allow heavy computation (2), and provide scalable services (4). MCC does not completely remove communication delay (3)."
            },
            {
                "q": "[Week 12] Which type of data is primarily handled in Spatial Cloud Computing systems?",
                "options": [
                    "Text data",
                    "Financial logs",
                    "Geospatial (coordinates, maps, satellite imagery)",
                    "Email messages"
                ],
                "correctIndex": 2,
                "solution": "Spatial cloud computing focuses on geospatial data, such as GIS layers, GPS coordinates, remote sensing imagery, and spatial databases."
            },
            {
                "q": "[Week 12] Which application domain most benefits from Spatial Cloud Computing?",
                "options": [
                    "Online gaming leaderboards",
                    "Weather forecasting and disaster management",
                    "Social media messaging",
                    "Office document editing"
                ],
                "correctIndex": 1,
                "solution": "Spatial cloud systems support large-scale geospatial analytics, useful in weather modeling, disaster monitoring, smart cities, and environmental analysis."
            },
            {
                "q": "[Week 12] In Cyber-Physical Systems (CPS), real-time feedback between sensors and actuators is essential for:",
                "options": [
                    "Data archiving",
                    "Closed-loop control",
                    "Static data analysis",
                    "Batch processing"
                ],
                "correctIndex": 1,
                "solution": "Cyber-Physical Systems tightly integrate sensing, computation, and actuation. Sensors collect data from the physical world, computation processes it, and actuators respond — forming a closed-loop control system, which is a core principle of CPS."
            },
            {
                "q": "[Week 12] A_________ is a trace generated by a moving object in geographical space, usually represented by a series of chronologically ordered points.",
                "options": [
                    "Time series",
                    "Road map",
                    "Spatial trajectory",
                    "Spatial crowdsourcing"
                ],
                "correctIndex": 2,
                "solution": "A spatial trajectory represents the path followed by a moving object (vehicle, person, animal, etc.) in geographic space over time. It is typically modeled as a sequence of timeordered spatial coordinates (x, y, t), making it fundamental in GIS, transportation analytics, and mobility modeling."
            },
            {
                "q": "[Week 12] Smart health monitoring systems where wearable sensors collect data, nearby gateways preprocess it, and cloud servers perform long-term analytics represent which paradigm?",
                "options": [
                    "Edge computing without cloud support",
                    "IoT integrated IoHT only",
                    "Cloud–Fog–Edge architecture",
                    "Centralized cloud computing only"
                ],
                "correctIndex": 2,
                "solution": "Wearable sensors collect health data at the IoHT/edge layer, nearby gateways or smartphones handle fog-level preprocessing, and cloud servers perform long-term storage and AIbased analytics.Since computation is distributed across edge, fog, and cloud, this forms a multi-layer Cloud–Fog–Edge IoHT architecture, not a standalone IoT or cloud-only system."
            },
            {
                "q": "[Week 12] In V2V communication, the primary objective is:",
                "options": [
                    "Providing internet access to vehicles",
                    "Exchanging safety-critical information such as speed, position, and braking",
                    "Supporting infotainment systems",
                    "Uploading vehicle data to cloud storage"
                ],
                "correctIndex": 1,
                "solution": "V2V focuses on direct vehicle-to-vehicle safety messaging (speed, heading, braking, lane changes) to prevent collisions. It is not meant for entertainment or internet access."
            },
            {
                "q": "[Week 12] Which technology is most commonly associated with low-latency V2X safety messaging?",
                "options": [
                    "Bluetooth",
                    "Wi-Fi (802.11n home Wi-Fi)",
                    "DSRC / IEEE 802.11p",
                    "NFC"
                ],
                "correctIndex": 2,
                "solution": "DSRC (802.11p) is designed for vehicular environments with low latency and high mobility, making it suitable for real-time safety communication."
            },
            {
                "q": "[Week 12] A major benefit of real-time mobility analytics in urban transport systems is:",
                "options": [
                    "Eliminating the need for traffic laws",
                    "Dynamic traffic signal optimization based on live vehicle density",
                    "Reducing vehicle manufacturing costs",
                    "Preventing all road accidents"
                ],
                "correctIndex": 1,
                "solution": "Real-time analytics uses live data from sensors, cameras, and GPS to adapt traffic signals and routes dynamically, reducing congestion and delays."
            },
            {
                "q": "[Week 12] Which of the following is a key advantage of 5G eMBB over 4G LTE?",
                "options": [
                    "Lower latency for critical control applications",
                    "Extremely high data rates and improved bandwidth efficiency",
                    "Infinite network coverage",
                    "Eliminating need for base stations"
                ],
                "correctIndex": 1,
                "solution": "eMBB enhances mobile broadband by providing higher throughput, better bandwidth utilization, and more uniform data rates, enabling applications like 8K video and AR/VR streaming."
            }
        ]
    },
    "blockchain": {
        "1": [
            {
                "q": "[Week 1] Which of the following statements is true regarding the foundational concepts of blockchain and cryptography?",
                "options": [
                    "Decentralization in blockchain ensures that a single authority controls the network for higher efficiency.",
                    "SHA-256 is a cryptographic hash function widely used in blockchain due to its fixed output size and collision resistance.",
                    "A hash chain is a sequence of cryptographic keys used to decode blockchain data.",
                    "Cryptographic hash ensures that the blockchain data cannot be read by anyone outside the network."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Option (b) is correct because SHA-256 is a cryptographic hash function with features like fixed output, pre-image resistance, and collision resistance, making it ideal for blockchain."
            },
            {
                "q": "[Week 1] Consider the following input string: \"Hello World\". You apply SHA-256 to this string. Then, you change the input to \"Hello World!\" (added an exclamation mark) and apply SHA-256 again. Which statement describes the relationship between the two output hashes?",
                "options": [
                    "The two hashes will be identical.",
                    "The second hash will be the same as the first, plus a few extra bits at the end.",
                    "The two hashes will be completely different and uncorrelated.",
                    "The second hash will be exactly 8 bits longer than the first."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "SHA-256 is deterministic and exhibits the avalanche effect. Any change in input results in a totally different hash. Furthermore, SHA-256 always produces a fixed-length output (256 bits) regardless of input size, so the length does not change.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 1] A blockchain network uses SHA-256 for its hashing process. If it takes 10-6 seconds to compute a single SHA-256 hash, how long would it take (approximately) to compute 2128 hashes for a collision attack?",
                "options": [
                    "10^10 years",
                    "10^15 years",
                    "10^20 years",
                    "10^25 years"
                ],
                "correctIndex": 3,
                "isMSQ": false,
                "solution": "Total time to compute 2^128 hashes: 2^128 ×10-6 ≈ 3.4 × 1032 seconds. Convert seconds to years: 1 year = 3.15×107 seconds ⇒ (3.4× 1032) / (3.15× 107) ≈ 1025 years."
            },
            {
                "q": "[Week 1] In a decentralized distributed system with 100 participants, which of the following statements is true regarding trust and communication?",
                "options": [
                    "At least 50 participants must trust each other for the system to function.",
                    "A central body governing communication among all 100 participants is mandatory.",
                    "Participants may or may not trust each other, as the system ensures integrity using cryptographic protocols and agreement through consensus protocols.",
                    "All the 100 participants must trust each other."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Option (c) is correct because decentralized systems rely on cryptographic mechanisms and consensus protocols, making trust among participants unnecessary. Option (a), (d) are incorrect, as trust among the participants is not a requirement for decentralized systems. Option (b) is incorrect, as decentralized systems operate without a central governing body.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 1] A blockchain network achieves an average block generation time of 5 minutes under normal conditions. However, due to scheduled maintenance, the network's hash rate is reduced by 50% for 4 hours daily. If the network operates for 12 hours in total (including the maintenance period), how many blocks will be added to the blockchain?",
                "options": [
                    "120",
                    "200",
                    "216",
                    "240"
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "For 8 hours at full efficiency: (60 min / 5 min) = 12 blocks/hour, so 12 \u00d7 8 = 96 blocks. For 4 hours at 50% efficiency: (12 blocks / 2 ) 6 blocks/hours, so 6 \u00d7 4 = 24 blocks. Total blocks = 96 + 24 = 120 blocks."
            },
            {
                "q": "[Week 1] Where are the transaction logs stored in a blockchain network?",
                "options": [
                    "In a centralized SQL database.",
                    "On an immutable ledger controlled by a central authority.",
                    "In metadata tables on each peer.",
                    "In the distributed ledger of each peer across the network."
                ],
                "correctIndex": 3,
                "isMSQ": false,
                "solution": "Blockchain transaction logs are stored in a distributed ledger across all peers (nodes) in the network, ensuring decentralization and immutability.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 1] An attacker wants to find a collision in a cryptographic hash function with a 128-bit output. What is the approximate number of hash operations required to succeed?",
                "options": [
                    "2^64",
                    "2^256",
                    "2^128",
                    "0.5 * 2^128"
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "Option (a) is correct because If a hash function produces \ud835\udc41 bits of output, an attacker needs to compute only 2\ud835\udc41/2 hash operations on a random input to find two matching outputs.2128/2 = 264"
            },
            {
                "q": "[Week 1] Which of the following statements accurately describes a blockchain?",
                "options": [
                    "A centralized database where data is stored on a single server.",
                    "A distributed ledger where data is stored across multiple nodes and is immutable.",
                    "A system that only stores cryptocurrency transaction data on a single node.",
                    "A network that uses a single user to control access and updates to the data."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "A blockchain is a decentralized and distributed ledger system where data is stored across multiple nodes (computers), ensuring that no single entity has control. It is also immutable, meaning once data is recorded in a block, it cannot be altered without the consensus of the network.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 1] A centralized database processes transactions at 10,000 TPS (Transactions Per Second). You decide to move this system to a decentralized blockchain to increase trust. Which of the following is the most likely outcome regarding performance and control?",
                "options": [
                    "Throughput increases, and a single authority retains control.",
                    "Throughput decreases, and control is distributed among peers.",
                    "Throughput remains the same, but data becomes mutable.",
                    "Throughput increases, and data becomes encrypted."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Decentralized systems generally have lower throughput than centralized systems due to the overhead of consensus protocols. However, they achieve decentralization, meaning no single authority controls the network."
            },
            {
                "q": "[Week 1] Which of the following describes the avalanche effect in a cryptographic hash function?",
                "options": [
                    "Given the same input, the hash function returns a different hash 99.99% of the time.",
                    "It takes 105 attempts to reverse-engineer the original message from the hash.",
                    "A small change in the input causes a drastic change in the hash, flipping nearly all the bits.",
                    "The hash function always returns the same hash for the same input."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "The avalanche effect ensures that even a tiny change in the input (like flipping a single bit) results in a significantly different hash, with most of the output bits changing."
            }
        ],
        "2": [
            {
                "q": "[Week 2] Alice employs the RSA cryptosystem with the prime numbers p=11 and q=17 to derive her public and private keys. Given that her public key is e=13, what is her corresponding private key d?",
                "options": [
                    "71",
                    "155",
                    "37",
                    "129"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Compute \u03d5(n)=(p\u22121)(q\u22121)=160. Find d as the modular inverse of e=13 modulo \u03d5(n)=160 using d = e-1 (mod 160)), giving d=37"
            },
            {
                "q": "[Week 2] Bob receives a secure package from Alice, which was encrypted for confidentiality and digitally signed for integrity. To read the message and verify its origin, which keys must Bob use, and in what capacity?",
                "options": [
                    "Bob uses Alice's Public Key to decrypt the message and Bob's Private Key to verify the signature.",
                    "Bob uses Bob's Private Key to decrypt the message and Alice's Public Key to verify the signature.",
                    "Bob uses Bob's Public Key to decrypt the message and Alice's Private Key to verify the signature.",
                    "Bob uses Alice's Private Key to decrypt the message and Bob's Public Key to verify the signature."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "For Confidentiality (Decryption): The message was originally encrypted by Alice using Bob's Public Key. Therefore, only Bob's Private Key can be used to decrypt and read it. For Integrity/Authentication (Verification): The signature was created by Alice using Alice's Private Key. To verify this signature, Bob must use the corresponding Alice's Public Key.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 2] Which statement best captures non-repudiation in blockchain transactions enabled by digital signatures?",
                "options": [
                    "Anyone can change a signed transaction without detection.",
                    "The sender can later deny authoring the transaction even if it\u2019s signed.",
                    "The sender cannot plausibly deny authoring the transaction, and others can verify the origin.",
                    "Digital signatures hide the transaction contents from all nodes."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "A valid signature binds a transaction to the signer\u2019s private key, enabling verifiability and nonrepudiation."
            },
            {
                "q": "[Week 2] In a typical blockchain transaction flow, what does verifying Alice\u2019s signature using Alice\u2019s public key ensure?",
                "options": [
                    "The message is encrypted for Alice only",
                    "The message definitely remained confidential on the network",
                    "The transaction was authorized by Alice and was not altered after signing",
                    "The miners will include the transaction in the next block for sure"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Signature verification checks authenticity (who signed) and integrity (not modified), not confidentiality or inclusion guarantees.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 2] Consider 8 data points labeled 1 to 8. The post-order traversal of the Merkle Tree is provided as follows (where 1 represents the hash of data point 1, 56 denotes the combined hash of 5 and 6, and so on):",
                "options": [
                    "{12345678, 1234, 12, 1, 2, 34, 3, 4, 5678, 56, 5, 6, 78, 7, 8}",
                    "{1, 2, 12, 3, 4, 34, 1234, 5, 6, 56, 7, 8, 78, 5678, 12345678}",
                    "{1, 12, 2, 3, 34, 4, 1234, 5, 56, 6, 7, 78, 8, 5678, 12345678}",
                    "{12, 1, 2, 34, 3, 4, 1234, 56, 5, 6, 78, 7, 8, 5678, 12345678}"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Post-order traversal: {1, 2, 12, 3, 4, 34, 1234, 5, 6, 56, 7, 8, 78, 5678, 12345678}"
            },
            {
                "q": "[Week 2] Which option most clearly conflicts with the typical design goals of public cryptocurrencies?",
                "options": [
                    "Open participation with peer-to-peer propagation",
                    "Tamper-evident append-only ledger",
                    "Central authority that can unilaterally reverse valid transactions",
                    "Distributed validation through consensus"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Public cryptocurrencies are designed to avoid a central party that can arbitrarily rewrite history."
            },
            {
                "q": "[Week 2] Which of the following accurately describes the role of Miners in the Bitcoin network?",
                "options": [
                    "They are central authorities appointed by the Bitcoin Foundation to issue currency.",
                    "They use Proof of Stake (PoS) to vote on valid transactions based on their coin wealth.",
                    "They solve computational puzzles (Proof of Work) to validate transactions and secure the network  in exchange for rewards.",
                    "They primarily focus on encrypting user passwords to prevent hacking."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Miners in Bitcoin operate on a Peer-to-Peer (P2P) network using Proof of Work (PoW). Their primary role is to bundle transactions into blocks and solve cryptographic puzzles. They are incentivized to do this work through block rewards and transaction fees.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 2] In the context of the Bitcoin network, how do nodes resolve a temporary \u2018fork\u2019 (where two different valid blocks are found at roughly the same time)?",
                "options": [
                    "They choose the block that contains the most transactions.",
                    "They follow the \"Longest Chain\" rule (the chain with the most cumulative work).",
                    "A central server decides which block is valid.",
                    "Both blocks are discarded, and miners restart."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "To maintain consensus without a central authority, Bitcoin nodes accept the chain that has the most cumulative Proof of Work (often referred to as the longest chain) as the valid truth."
            },
            {
                "q": "[Week 2] In the context of blockchain distributed systems, what specific problem does the consensus algorithm (like Proof of Work) attempt to solve?",
                "options": [
                    "The Data Storage Problem: Ensuring all nodes have infinite storage capacity.",
                    "The Byzantine Generals Problem: Reaching agreement even when some participants may act  maliciously or send conflicting information.",
                    "The Latency Problem: Ensuring data travels at the speed of light between nodes.",
                    "The Encryption Problem: Making sure no one can read the transaction details."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The core challenge in decentralized networks is the Byzantine Generals Problem. A robust consensus algorithm ensures that the honest nodes in the network can agree on a single history (ledger state) even if some nodes (\"traitors\") try to propagate false information or double-spend coins."
            }
        ],
        "3": [
            {
                "q": "[Week 3] If the current block reward for Bitcoin is 3.125 BTC, and the network remains calibrated so that a new block is found every 10 minutes on average, how much Bitcoin will be mined in a total 24-hour period?",
                "options": [
                    "312.5 BTC",
                    "450 BTC",
                    "252 BTC",
                    "900 BTC"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The block reward is 3.125 BTC. There are 144 blocks mined in a 24-hour period (24 hours \u00d7 60 minutes / 10 minutes per block). In one day, the total Bitcoin mined would be 144 \u00d7 3.125 = 450 BTC."
            },
            {
                "q": "[Week 3] What is a fundamental difference between a permissionless (public) blockchain and a permissioned blockchain?",
                "options": [
                    "Permissioned blockchains do not use a distributed ledger.",
                    "Permissionless blockchains require participants to prove their identity to a central authority before they can join the network.",
                    "Permissioned blockchains utilize a gatekeeping mechanism that restricts the ability to validate transactions and update the ledger to a set of authorized nodes.",
                    "Permissioned blockchains allow any user to participate in the consensus process without prior authorization."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Permissioned blockchains use an access control layer to restrict ledger validation to a set of preapproved, authorized nodes, unlike open permissionless networks.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 3] Which of the following combinations is correctly used to compute Bitcoin's current block hash?",
                "options": [
                    "Previous block\u2019s hash, Merkle root, block reward, nonce, timestamp, and block size",
                    "Previous block\u2019s hash, timestamp, nonce, Merkle root, difficulty bits, and block version",
                    "Block creator\u2019s public key, Merkle root, timestamp, block reward, nonce, and difficulty level",
                    "Previous block\u2019s hash, nonce, Merkle root, height, timestamp, and difficulty bits"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Please refer to the Week 3 Lecture 13."
            },
            {
                "q": "[Week 3] Which of the following difficulty targets would make it most difficult for miners to find a valid block?",
                "options": [
                    "0000000000000000000000000000000000000000000000000000000000000001",
                    "000000000000000000000000000000000000000000000000000056789abcdef12",
                    "00000000000000000000000000000000000000000000000002dfe34a1b2c3d55",
                    "00000000000000000000000000000000000000000000000000000000000af467"
                ],
                "correctIndex": 3,
                "isMSQ": false,
                "solution": "The difficulty target with 59 leading zeros (option d) is the most difficult for miners to find a valid block. Therefore, 00000000000000000000000000000000000000000000000000000000000af467 is the correct choice.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 3] In the Bitcoin, block identifier refers to",
                "options": [
                    "SHA1 (128 bits) of the future block header",
                    "Double SHA256 of the current block header",
                    "Double SHA256 of the difficulty bits only",
                    "Triple SHA256 of the future block header"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The Bitcoin block identifier (block hash) contains Double SHA256 on the current block header. This means performing SHA256 twice. Please refer to the Week 3 Lecture 13."
            },
            {
                "q": "[Week 3] If a Bitcoin block contains 64 transactions, how many hashing steps (Merkle path length) are required to verify the inclusion of a specific transaction without downloading the entire block?",
                "options": [
                    "64",
                    "32",
                    "6",
                    "12"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "The number of hashes required for a Merkle proof is proportional to the height of the tree, calculated as log2 (n) . For 64 transactions: log2 (64) = 6.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 3] In Bitcoin Script, the stack is shown from bottom to top, left to right. The current stack is: Bottom \u2192 [ x1, x2, x3 ] \u2190 Top Which opcode will transform the stack into: Bottom \u2192 [ x1, x3 ] \u2190 Top",
                "options": [
                    "OP_DROP",
                    "OP_NIP",
                    "OP_2DROP",
                    "OP_DEPTH"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "OP_DROP removes the top item (x3). OP_NIP removes the second-to-top item (x2), leaving the top item intact. OP_2DROP removes the top two items. OP_DEPTH pushes the stack size onto the stack."
            },
            {
                "q": "[Week 3] If a Merkle tree is constructed from 16 transactions, what is the total number of hashes (nodes) in the entire tree, including the transaction hashes (leaves) and the Merkle root?",
                "options": [
                    "32",
                    "16",
                    "31",
                    "15"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "A Merkle tree is a binary tree structure. To find the total nodes, you sum the number of hashes at each level: 1. Level 0 (Leaves): 16 hashes (one for each transaction). 2. Level 1: The 16 leaves form 8 pairs \u2192 8 hashes. 3. Level 2: The 8 hashes form 4 pairs \u2192 4 hashes. 4. Level 3: The 4 hashes form 2 pairs \u2192 2 hashes. 5. Level 4 (Root): The 2 hashes form 1 Root hash. Total: 16 + 8 + 4 + 2 + 1 = 31 hashes. (Note: In a perfect binary tree, the total number of nodes is always 2n - 1, where n is the number of leaves. Here, 2(16) - 1 = 31.)  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 3] The \"Nonce\" field in the Bitcoin block header is 32 bits long. What is the maximum value a miner can test in the nonce field before needing to change other header fields (like the timestamp or extra nonce)?",
                "options": [
                    "264 (approx 1.84 x 1019 )",
                    "232 (approx 4 billion)",
                    "2256 (approx 1.15 x 1077 )",
                    "1,000,000"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The nonce is a value miners iterate through6. Since it is a 32-bit field, the maximum number of values is 232 (approximately 4.29 billion). Once a miner exhausts all these values without finding a valid block, they must alter other parts of the header (like the timestamp or the coinbase transaction extra nonce) to generate new hashes."
            },
            {
                "q": "[Week 3] What happens if the number of transactions in a Merkle tree is odd?",
                "options": [
                    "The tree cannot be built",
                    "Dummy (duplicate) hashes are added to adjust",
                    "Transactions are left out of the block",
                    "The Merkle root is ignored"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "If the number of transactions is odd, pairs cannot be formed for the suitable structure of the Merkle tree. To fix this, dummy (duplicate) hashes are added to make the number of transactions even, allowing the tree to be constructed properly. Please refer to the Week 3 Lecture 14."
            }
        ],
        "4": [
            {
                "q": "[Week 4] Which of the following scenarios describes a \"Soft Fork\" in the Bitcoin network?",
                "options": [
                    "A protocol change where the new rules are stricter, making old blocks valid but new blocks potentially invalid to non-upgraded nodes.",
                    "A divergence where the blockchain splits permanently into two incompatible chains (e.g., Bitcoin and Bitcoin Cash).",
                    "A backward-compatible upgrade where non-upgraded nodes can still validate new blocks.",
                    "A temporary split caused by two miners finding a block simultaneously."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "A soft fork is a backward-compatible upgrade. Old nodes will still recognize the new blocks as valid, unlike a hard fork which requires all nodes to upgrade."
            },
            {
                "q": "[Week 4] Suppose a miner initially receives 100 bitcoins as a reward for successfully mining a block at time Jan, 2009. The reward for mining a block is halved approximately every four years (or after every 210,000 blocks). Based on this halving process, which of the following statements are correct? (Please note that once the reward is halved, it will remain the same until four years have been completed or after every 210,000 blocks.)",
                "options": [
                    "In Jan 2013, the miner will receive 50 bitcoins for adding a new block.",
                    "In Jan 2018, the miner will receive 25 bitcoins for adding a new block.",
                    "In Jan 2021, the miner will receive 12.5 bitcoins for adding a new block.",
                    "In Jan 2024, the miner will receive 6.25 bitcoins for adding a new block."
                ],
                "correctIndex": [
                    0,
                    1,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "The Bitcoin block reward halves approximately every 4 years (after 210,000 blocks). From Jan 2009 reward was 100 bitcoins(same for 2010, 2011, and 2012); By Jan 2013, the reward was 50 bitcoins(same for 2014, 2015, and 2016); by Jan 2018 it was 25 bitcoins(same for 2017, 2019, and 2020); and by Jan 2021 it was 12.5 bitcoins(same for 2022, 2023, and 2024). By Jan 2024, the halving to 6.25 bitcoins will not yet have occurred, making the last statement incorrect.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 4] In the absence of a central authority, why is the \"Longest Chain Rule\" crucial for preventing doublespending?",
                "options": [
                    "It ensures that the chain with the most cumulative computational work is accepted as the single source of truth.",
                    "It allows users to spend the same UTXO multiple times if the chain is long enough.",
                    "It encrypts the transaction data so it cannot be copied.",
                    "It ensures that the timestamp of every block is exactly 10 minutes apart.A centralized authority will be used to verify each transaction before it is added to the blockchain."
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "By accepting the longest chain (most accumulated PoW), the network resolves conflicting histories (double spends), ensuring only one version of the transaction history is treated as valid."
            },
            {
                "q": "[Week 4] In a permissionless blockchain like Bitcoin, which specific attack vector is mitigated by requiring a costly resource (like computing power in PoW) to participate in consensus?",
                "options": [
                    "SQL Injection",
                    "Sybil Attack",
                    "Man-in-the-Middle Attack",
                    "PhishingEnsuring that all participants trust a central authority"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "In a permissionless system, anyone can create an identity. Without a cost (PoW), an attacker could spawn millions of fake nodes (Sybil attack) to overwhelm the network.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 4] Which component in the block header serves as a \"fingerprint\" for all transactions included in that specific block?",
                "options": [
                    "The Nonce",
                    "The Previous Block Hash",
                    "The Merkle Root",
                    "The Miner's Public Key"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "The Merkle Root is a hash generated from all transaction hashes in the block. If a single byte in any transaction changes, the Merkle Root changes completely."
            },
            {
                "q": "[Week 4] Traditional distributed databases handle \"Crash Faults\" effectively. What specific, more complex class of faults is the Bitcoin blockchain designed to tolerate?",
                "options": [
                    "Hardware Failures",
                    "Network Latency",
                    "Byzantine Faults",
                    "Power Outages"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Byzantine faults involve malicious actors who may lie or send conflicting information to different parts of the system (unlike a crash, where a node simply stops working).  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 4] Which of the following best describes Safety and Liveness in Bitcoin?",
                "options": [
                    "Safety ensures transactions are irreversible, while Liveness ensures transactions are eventually added.",
                    "Safety guarantees quick transaction confirmation, while Liveness prevents forks.",
                    "Safety prevents double-spending, while Liveness speeds up block creation.",
                    "Safety ensures blocks are always valid, while Liveness ensures no transaction delays."
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "Safety ensures that once a transaction is confirmed, it cannot be reversed, preventing issues like double-spending. Liveness ensures that transactions will eventually be added to the blockchain, even if there are delays or forks. Please refer to the Week 4 Lecture 19."
            },
            {
                "q": "[Week 4] Mathematically, what is a miner attempting to do during Proof of Work (PoW)?",
                "options": [
                    "Decrypt the previous block's signature.",
                    "Find a nonce such that \ud835\udc3b\ud835\udc3b\ud835\udc3b\u210e(\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b) < \ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b.",
                    "Sort all transactions in the mempool alphabetically.",
                    "Calculate the private key of the Satoshi Nakamoto wallet."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Miners vary the nonce to produce a block hash that is numerically lower than a specific \ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b\ud835\udc3b value set by the network difficulty.  \fNPTEL Online Certification Courses Indian Institute of Technology Kharagpur Jan 2026"
            },
            {
                "q": "[Week 4] Before a miner begins the heavy computational work (hashing) to mine a new block, what must they typically do first?",
                "options": [
                    "Broadcast their solution to the network.",
                    "Construct a candidate block by selecting valid transactions from their memory pool.",
                    "Wait for the next difficulty adjustment period.",
                    "Shut down their node to save power."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The miner must first assemble the \"Candidate Block\" (select transactions, verify them, create Merkle root) before they can start hashing the header to solve the PoW puzzle."
            },
            {
                "q": "[Week 4] What is the theoretical consequence if a single mining pool obtains >50% of the network's hashrate (The 51% Attack)?",
                "options": [
                    "They can steal funds from any user's wallet (e.g., transfer your BTC to them).",
                    "They can change the maximum supply of Bitcoin to 42 million.",
                    "They can reverse their own recent transactions (double spending) and block other transactions from confirming.",
                    "They can shut down the internet connection of other miners."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "A 51% attacker cannot break cryptography (steal funds) or change consensus rules (supply cap), but they can rewrite recent chain history to double-spend and censor new transactions."
            }
        ],
        "5": [
            {
                "q": "[Week 5] Which of the following factors generally limit the scalability of permissionless blockchain consensus mechanisms?",
                "options": [
                    "\u200b Requirement for a global agreement among nodes",
                    "\u200b Centralized validator selection",
                    "\u200b High communication and computation overhead",
                    "\u200b Absence of cryptographic security"
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "Permissionless blockchains require participation and verification by a large number of nodes. Achieving global consensus introduces significant communication and computation overhead, which limits scalability. Validator selection is decentralized, and cryptographic security is a core feature, not a limitation."
            },
            {
                "q": "[Week 5] Which consensus mechanism relies on trusted hardware environments to ensure fairness in block proposer selection?",
                "options": [
                    "\u200b Proof of Stake",
                    "\u200b Proof of Burn",
                    "\u200b Proof of Elapsed Time",
                    "\u200b Practical Byzantine Fault Tolerance"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Proof of Elapsed Time (PoET) uses trusted execution environments such as Intel SGX to generate verifiable random wait times, ensuring fair leader selection without intensive computation. Please refer to Week 5, Lecture 21.  \f\u200b"
            },
            {
                "q": "[Week 5] Which of the following properties is a key advantage of stake-based (PoS) consensus mechanisms compared to computation-based (PoW) mechanisms?",
                "options": [
                    "\u200b Complete elimination of forks",
                    "\u200b Reduced energy consumption",
                    "\u200b Guaranteed transaction finality",
                    "\u200b Removal of the need for digital signatures"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Stake-based consensus mechanisms, such as Proof of Stake, do not rely on energy-intensive cryptographic puzzles. As a result, they significantly reduce energy consumption compared to computation-based mechanisms like Proof of Work."
            },
            {
                "q": "[Week 5] In a PoW-based blockchain system like Bitcoin, when two valid blocks are mined at the same time, which rule does the network primarily use to resolve the fork and identify the authoritative chain?",
                "options": [
                    "\u200b Number of transactions in each block",
                    "\u200b Total accumulated computational work (heaviest chain)",
                    "\u200b Size of the blockchain ledger",
                    "\u200b Time since genesis block creation"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The longest-chain rule selects the chain with the highest cumulative computational work. This ensures that the chain requiring the most effort to produce is treated as authoritative.  \f\u200b"
            },
            {
                "q": "[Week 5] Which component of the Ethereum architecture ensures deterministic execution of smart contracts across all nodes?",
                "options": [
                    "\u200b Ethereum Client",
                    "\u200b Ethereum Virtual Machine",
                    "\u200b Ethereum Wallet",
                    "\u200b Ethereum Miner"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The Ethereum Virtual Machine (EVM) executes smart contract bytecode in a deterministic manner, ensuring that all participating nodes reach the same result when executing the same contract."
            },
            {
                "q": "[Week 5] Which of the following operations on Ethereum requires gas payment and inclusion in a block?",
                "options": [
                    "\u200b Querying an account balance",
                    "\u200b Reading a public contract variable",
                    "\u200b Executing a state-modifying function",
                    "\u200b Simulating contract execution locally"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "State-modifying operations change the blockchain state and therefore require a transaction to be sent to the network, consume gas, and be included in a block.  \f\u200b"
            },
            {
                "q": "[Week 5] Which Ethereum transaction parameter ensures transaction ordering and prevents replay attacks for a given account?",
                "options": [
                    "\u200b Gas",
                    "\u200b Value",
                    "\u200b Nonce",
                    "\u200b Data"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "The nonce uniquely identifies each transaction sent from an account and enforces sequential ordering, preventing replay of old transactions."
            },
            {
                "q": "[Week 5] Which JSON-RPC method is used to retrieve the Ether balance of an Ethereum account?",
                "options": [
                    "\u200b eth_call",
                    "\u200b eth_getBalance",
                    "\u200b eth_getTransactionByHash",
                    "\u200b eth_sendTransaction"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The eth_getBalance JSON-RPC method returns the balance of a specified Ethereum address at a given block.  \f\u200b"
            },
            {
                "q": "[Week 5] Which consensus mechanism requires participants to irreversibly destroy cryptocurrency to demonstrate long-term commitment to the network?",
                "options": [
                    "\u200b Proof of Work (PoW)",
                    "\u200b Proof of Burn (PoB)",
                    "\u200b Proof of Stake (PoS)",
                    "\u200b Proof of Elapsed Time (PoET)"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Proof of Burn requires participants to send cryptocurrency to a verifiably unspendable address, effectively destroying the coins to prove commitment."
            },
            {
                "q": "[Week 5] Which of the following Ethereum unit relationships is CORRECT?",
                "options": [
                    "\u200b 1 Ether = 10\u2079 Wei",
                    "\u200b 1 Gwei = 10\u2079 Wei",
                    "\u200b 1 Ether = 10\u2076 Gwei",
                    "\u200b 1 Wei = 10\u207b\u2079 Ether"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Gwei is a commonly used denomination in Ethereum, defined as 10\u2079 Wei. Gas prices are typically specified in Gwei."
            }
        ],
        "6": [
            {
                "q": "[Week 6] Which of the following statements correctly describe safety and liveness in consensus protocols?",
                "options": [
                    "\u200b Safety ensures that conflicting decisions never occur",
                    "\u200b Liveness ensures that the system eventually makes progress",
                    "\u200b Safety may be temporarily violated under network delays",
                    "\u200b Liveness guarantees agreement under all possible network conditions"
                ],
                "correctIndex": [
                    0,
                    1,
                    3
                ],
                "isMSQ": true,
                "solution": "Safety ensures that no two correct nodes decide on different values. Liveness ensures that the protocol eventually reaches a decision under suitable conditions. Safety must never be violated, while liveness may be temporarily affected by network delays.."
            },
            {
                "q": "[Week 6] Which failure model is classical Paxos designed to tolerate?",
                "options": [
                    "\u200b Byzantine faults",
                    "\u200b Crash faults",
                    "\u200b Arbitrary malicious behavior",
                    "\u200b Network-level message tampering"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Classic Paxos assumes crash-stop failures, where nodes may fail by stopping but do not behave maliciously.  \f\u200b"
            },
            {
                "q": "[Week 6] A distributed system consists of 7 nodes operating under a Byzantine Fault Tolerance (BFT) model. What is the maximum number of Byzantine faulty nodes that can be tolerated while still achieving consensus?",
                "options": [
                    "\u200b 1",
                    "\u200b 2",
                    "\u200b 3",
                    "\u200b 4"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "In BFT systems, the requirement is: \ud835\udc5b\u22653\ud835\udc53 + 1 For \ud835\udc5b = 7: 7\u22653\ud835\udc53 + 1\u21d23\ud835\udc53\u22646\u21d2\ud835\udc53\u22642 Thus, at most 2 Byzantine faults can be tolerated."
            },
            {
                "q": "[Week 6] Which of the following properties are typically associated with permissioned blockchain systems?",
                "options": [
                    "\u200b Anonymous participation",
                    "\u200b Identity management through a trusted authority",
                    "\u200b Restricted transaction visibility to authorized participants",
                    "\u200b No requirement for consensus"
                ],
                "correctIndex": [
                    0,
                    1,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "Permissioned blockchains use identity management systems (e.g., Membership Service Providers) and restrict access to authorized participants. Consensus mechanisms are still required.  \f\u200b"
            },
            {
                "q": "[Week 6] Why must any two majorities (quorums) in Paxos intersect in at least one common node?",
                "options": [
                    "\u200b To ensure faster communication between nodes",
                    "\u200b To guarantee safety by preventing two different values from being chosen",
                    "\u200b To reduce network latency",
                    "\u200b To eliminate the need for a coordinator"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The quorum intersection property ensures that at least one acceptor participates in both majorities. This prevents conflicting values from being chosen and guarantees safety."
            },
            {
                "q": "[Week 6] Which of the following characteristics distinguish Byzantine faults from crash faults?",
                "options": [
                    "\u200b Byzantine faults may cause a node to send conflicting information to different nodes",
                    "\u200b Crash faults allow a node to behave arbitrarily",
                    "\u200b Byzantine faults involve arbitrary or malicious behavior",
                    "\u200b Crash faults require digital signatures to detect"
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "Crash faults involve passive failures where nodes stop functioning but do not behave maliciously. Byzantine faults allow arbitrary or malicious behavior, including sending conflicting messages to different nodes.  \f\u200b"
            },
            {
                "q": "[Week 6] If fewer than a majority of acceptors respond during a Paxos round, which property of the protocol is affected?",
                "options": [
                    "\u200b Safety",
                    "\u200b Liveness",
                    "\u200b Agreement validity",
                    "\u200b Deterministic execution"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Without a majority, no value can be chosen, which affects progress (liveness). However, safety remains preserved because conflicting values cannot be decided without majority approval."
            },
            {
                "q": "[Week 6] In a Byzantine Fault Tolerant system, why is the requirement \ud835\udc5b\u22653\ud835\udc53 + 1 necessary to tolerate \ud835\udc53 Byzantine faults?",
                "options": [
                    "\u200b To ensure faulty nodes can be isolated from the network",
                    "\u200b To guarantee that the number of honest nodes exceeds faulty nodes by exactly one",
                    "\u200b To ensure that any two decision quorums intersect in at least one honest node",
                    "\u200b To eliminate the need for cryptographic authentication"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "The requirement \ud835\udc5b\u22653\ud835\udc53 + 1 ensures that decision quorums overlap in enough nodes such that at least one honest node is common between them. This intersection property prevents conflicting decisions and preserves agreement even when up to \ud835\udc53 nodes behave arbitrarily.  \f\u200b"
            },
            {
                "q": "[Week 6] What inefficiency in classic Paxos does Multi-Paxos primarily address?",
                "options": [
                    "\u200b Inability to tolerate crash faults",
                    "\u200b Repeated execution of the prepare phase for each proposed value",
                    "\u200b Lack of quorum intersection",
                    "\u200b Absence of agreement guarantees"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Multi-Paxos improves efficiency by electing a stable leader and avoiding repeated execution of the prepare phase for each new value, thereby improving throughput."
            },
            {
                "q": "[Week 6] Which of the following statements about roles in Paxos are correct?",
                "options": [
                    "\u200b A single physical node can simultaneously perform the roles of Proposer, Acceptor, and Learner.",
                    "\u200b Roles are permanently fixed once assigned",
                    "\u200b Roles are dynamic and are not permanently tied to specific nodes.",
                    "\u200b Only one Acceptor is required to reach a consensus in a network of five nodes."
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "In Paxos, roles are logical abstractions and are not permanently bound to physical nodes. A node may perform multiple roles simultaneously."
            }
        ],
        "7": [
            {
                "q": "[Week 7] Which of the following properties make PBFT suitable for enterprise blockchain environments?",
                "options": [
                    "\u200b Deterministic transaction finality",
                    "\u200b Anonymous validator participation",
                    "\u200b Tolerance to Byzantine faults",
                    "\u200b Dependence on computational mining"
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "PBFT provides deterministic finality - once a block is committed, it cannot be reverted. It tolerates Byzantine (arbitrary or malicious) faults. It does not rely on mining and assumes known validator identities, making it suitable for permissioned enterprise systems."
            },
            {
                "q": "[Week 7] In Hyperledger Fabric, what is the primary role of the Membership Service Provider (MSP)?",
                "options": [
                    "\u200b Mining new blocks",
                    "\u200b Defining the rules for identity validation and managing the roles of participants.",
                    "\u200b Executing smart contracts",
                    "\u200b Ordering transactions"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The Membership Service Provider (MSP) is basically the piece that handles identity management in the network. The Certificate Authority (CA) is the one that actually issues certificates, but the MSP decides which CAs are trusted and how identities are interpreted. It connects a given certificate to a specific role in an organization or channel, like identifying someone as an \u201cadmin\u201d or a \u201cpeer.\u201d In short, it\u2019s what turns a regular cryptographic certificate into a recognized member of the network.  \f\u200b"
            },
            {
                "q": "[Week 7] Which of the following conditions must hold in a Byzantine quorum system to ensure safety?",
                "options": [
                    "\u200b Any two quorums must intersect in at least one correct (honest) replica",
                    "\u200b Quorums may be completely disjoint to increase throughput",
                    "\u200b Quorum size must equal exactly half of the network",
                    "\u200b Faulty replicas must be able to form a standalone quorum."
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "Safety in a Byzantine environment comes from the Quorum Intersection Property. To avoid \u201csplit-brain\u201d situations where two different values get committed, any two quorums have to overlap. That overlap needs to include at least f + 1 replicas. Since the system can have at most f faulty replicas, having f + 1 in common guarantees that at least one honest replica is part of both quorums, which preserves consistency."
            },
            {
                "q": "[Week 7] Which of the following are advantages of blockchain in supply-chain systems?",
                "options": [
                    "\u200b Tamper-evident audit trail",
                    "\u200b Automatic deletion of transaction history",
                    "\u200b Improved transparency among participants",
                    "\u200b Removal of all governance requirements"
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "Blockchain provides immutability and traceability, creating tamper-evident audit trails. It enhances transparency among stakeholders. However, governance is still required, and historical records are not automatically deleted.  \f\u200b"
            },
            {
                "q": "[Week 7] What mechanism ensures progress in PBFT when the primary replica becomes faulty?",
                "options": [
                    "\u200b Increasing block size",
                    "\u200b Timeout-based view change protocol",
                    "\u200b Switching to PoW",
                    "\u200b Re-broadcasting old transactions"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "PBFT includes a view change protocol. When replicas detect that the primary is faulty or unresponsive (via timeout), they initiate a view change to elect a new primary, ensuring liveness."
            },
            {
                "q": "[Week 7] Which of the following statements correctly describe permissioned blockchain systems?",
                "options": [
                    "\u200b Participants are authenticated before joining",
                    "\u200b All nodes remain anonymous",
                    "\u200b Access to transaction data may be restricted",
                    "\u200b Consensus mechanisms are unnecessary"
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "Permissioned blockchains require identity verification before participation. They can restrict transaction visibility to certain participants. However, consensus mechanisms are still required to maintain agreement.  \f\u200b"
            },
            {
                "q": "[Week 7] In Hyperledger Fabric, what is the purpose of channels?",
                "options": [
                    "\u200b To increase mining difficulty",
                    "\u200b To create logically separate ledgers among subsets of participants",
                    "\u200b To replace consensus mechanisms",
                    "\u200b To store private cryptographic keys"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Channels allow a subset of organizations to maintain a private ledger visible only to channel members. This ensures confidentiality within a broader network."
            },
            {
                "q": "[Week 7] In a Byzantine Fault Tolerant (BFT) system with \ud835\udc53 malicious nodes, why is the total number of replicas \ud835\udc5b\u22653\ud835\udc53 + 1 required?",
                "options": [
                    "\u200b To ensure that any two quorums of size 2\ud835\udc53 + 1 share at least one honest replica.",
                    "\u200b To eliminate digital signatures and hashing.",
                    "\u200b To ensure the system can function with 2\ud835\udc53 + 1 faulty nodes.",
                    "\u200b To minimize the number of communication rounds to O(1)"
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "If there are \ud835\udc53 Byzantine faulty nodes, at least 3\ud835\udc53 + 1 total replicas are required so that decision quorums contain more honest nodes than faulty ones, preserving safety and agreement.  \f\u200b"
            },
            {
                "q": "[Week 7] Which of the following properties characterize committee-based consensus protocols such as Algorand?",
                "options": [
                    "\u200b Committee membership is rotated and unique for every round",
                    "\u200b Selection is based on cryptographic randomness (VRF)",
                    "\u200b Membership is publicly predictable long in advance",
                    "\u200b The entire network validates every block to ensure maximum security."
                ],
                "correctIndex": [
                    0,
                    1,
                    3
                ],
                "isMSQ": true,
                "solution": "Algorand uses cryptographic sortition (via VRFs) to randomly select committees. Membership changes each round and is not predictable in advance, enhancing security."
            },
            {
                "q": "[Week 7] Which of the following are key architectural features of Hyperledger Fabric?",
                "options": [
                    "\u200b Modular design with pluggable components",
                    "\u200b Mandatory native cryptocurrency",
                    "\u200b Separation of transaction endorsement and ordering",
                    "\u200b Public anonymous participation"
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "Fabric has a modular architecture allowing pluggable components such as consensus mechanisms. It separates transaction endorsement from ordering, improving flexibility. It does not require a native cryptocurrency and is permissioned rather than anonymous."
            }
        ],
        "8": [
            {
                "q": "[Week 8] Which of the following statements is/are FALSE regarding the PBFT and PoW consensus mechanisms?",
                "options": [
                    "\u200b PBFT is generally used in permissioned blockchain environments with known validators.",
                    "\u200b PoW is suited for open public networks where participants may be anonymous.",
                    "\u200b PBFT is effective for large, highly decentralized public networks with thousands of nodes.",
                    "\u200b PoW requires significant computational effort to validate new blocks"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "That\u2019s not correct. Practical Byzantine Fault Tolerance (PBFT) does have quadratic communication overhead (O(n\u00b2)), meaning the number of messages grows quickly as more nodes join. As a result, it doesn\u2019t scale well to thousands of nodes because every node needs to exchange messages with many others during consensus. In contrast, Proof of Work (PoW) scales better in terms of node count. Nodes don\u2019t have to directly communicate with every other node to agree on the state; they simply follow the longest valid chain. While PoW is slower and energy-intensive, it handles large, decentralized networks more effectively than PBFT."
            },
            {
                "q": "[Week 8] Which mechanism ensures deterministic finality in PBFT-based systems?",
                "options": [
                    "\u200b Longest-chain selection",
                    "\u200b Computational difficulty",
                    "\u200b Quorum-based agreement with overlapping honest replicas",
                    "\u200b Randomized leader selection"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "PBFT ensures deterministic finality through quorum intersection. Once a block gathers sufficient votes from replicas (at least 2f+1 in a 3f+1 system), conflicting blocks cannot also gather enough votes.  \f\u200b"
            },
            {
                "q": "[Week 8] In Bitcoin-NG, what is the primary effect of separating leader election from transaction serialization?",
                "options": [
                    "\u200b Eliminates Proof-of-Work",
                    "\u200b Allows higher transaction throughput",
                    "\u200b Makes block intervals deterministic",
                    "\u200b Removes fork possibility"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Bitcoin-NG decouples leader election (via key blocks) from transaction propagation (via microblocks). This enables frequent transaction blocks without increasing mining rate, improving throughput."
            },
            {
                "q": "[Week 8] Which of the following statements is TRUE regarding block propagation in Bitcoin-NG?",
                "options": [
                    "\u200b Micro-blocks are used to carry transactions and are produced frequently between key-blocks.",
                    "\u200b Key-blocks are produced frequently, while micro-blocks are infrequent.",
                    "\u200b Both key-blocks and micro-blocks are produced at the same rate.",
                    "\u200b Micro-blocks determine the leader, while key-blocks only store transactions."
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "Bitcoin-NG splits blocks into two types: Key-blocks and Micro-blocks. Key-blocks are mined using Proof-of-Work and are only used to elect a leader \u2014 they don\u2019t contain transactions. When a miner wins a Key-block, they become the temporary leader. The leader then creates Micro-blocks, which carry the actual transactions and can be generated quickly without solving new PoW puzzles each time. This way, the network doesn\u2019t sit idle between mining events, and transaction processing becomes much faster.  \f\u200b"
            },
            {
                "q": "[Week 8] What scalability limitation of classical PBFT does CoSi attempt to improve?",
                "options": [
                    "\u200b Energy consumption",
                    "\u200b Quadratic communication overhead",
                    "\u200b Block size restrictions",
                    "\u200b Lack of cryptographic signatures"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Traditional PBFT requires O(n\u00b2) communication between replicas. CoSi introduces tree-based signature aggregation to significantly reduce communication overhead."
            },
            {
                "q": "[Week 8] Which of the following statements is TRUE regarding block (or commitment) propagation in Byzcoin?",
                "options": [
                    "\u200b Byzcoin uses collective signing (CoSi) to allow blocks to be committed quickly once validators reach agreement.",
                    "\u200b Byzcoin relies on a single leader to sign each block, similar to classical PoW mining.",
                    "\u200b In Byzcoin, blocks are only propagated after several minutes to reduce network traffic.",
                    "\u200b Byzcoin avoids using keyblocks entirely and relies only on microblocks for consensus."
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "Byzcoin combines ideas from Bitcoin-NG and CoSi. It organizes validators in a communication tree to collect their approvals efficiently. Instead of attaching hundreds of separate signatures, the system aggregates them into one compact Schnorr signature. This single signature proves that a supermajority agreed on the block, which keeps the block small and makes network propagation much faster.  \f\u200b"
            },
            {
                "q": "[Week 8] In Byzcoin, what is the main benefit of using collective signing for block commitment?",
                "options": [
                    "\u200b Eliminates the need for leader election",
                    "\u200b Reduces signature verification overhead",
                    "\u200b Guarantees probabilistic finality",
                    "\u200b Removes quorum requirements"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Byzcoin uses CoSi to aggregate validator approvals into one collective signature, making block verification efficient and improving scalability."
            },
            {
                "q": "[Week 8] Which trade-off best characterizes BFT-based consensus compared to Proof-of-Work?",
                "options": [
                    "\u200b Higher node scalability but lower throughput",
                    "\u200b No need for identity management",
                    "\u200b Lower communication cost but higher energy consumption",
                    "\u200b Deterministic finality but limited scalability to very large networks"
                ],
                "correctIndex": 3,
                "isMSQ": false,
                "solution": "BFT systems provide deterministic finality and high throughput in smaller networks but scale poorly to thousands of nodes due to communication complexity.  \f\u200b"
            },
            {
                "q": "[Week 8] In Hyperledger Fabric, why is transaction endorsement performed before ordering?",
                "options": [
                    "\u200b To determine mining difficulty",
                    "\u200b To execute business logic and verify endorsement policy compliance",
                    "\u200b To reduce block interval",
                    "\u200b To eliminate validation"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "In Fabric, endorsing peers execute chaincode and verify endorsement policies before transactions are ordered and committed."
            },
            {
                "q": "[Week 8] What happens during the validation phase of a Fabric transaction?",
                "options": [
                    "\u200b Mining competition selects the block",
                    "\u200b The world state is updated without verification",
                    "\u200b Endorsement policies and read-write set consistency are verified before updating world state",
                    "\u200b Proof-of-Work puzzles are solved"
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "During validation, Fabric rechecks endorsement policies and ensures no conflicts in the read-write set before updating the world state. Only valid transactions modify the ledger state."
            }
        ],
        "9": [
            {
                "q": "[Week 9] What specific limitation of Bitcoin-NG does ByzCoin attempt to solve?",
                "options": [
                    "\u200b The requirement for all miners to share their private keys with the entire network",
                    "\u200b The introduction of faulty or malicious microblocks that are only discovered at the end of a round",
                    "\u200b The inability to elect a leader using proof of work",
                    "\u200b The lack of support for any form of cryptographic signatures on transactions"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "In Bitcoin-NG, a leader can inject faulty microblocks that are only invalidated once a new key block is mined, causing significant overhead."
            },
            {
                "q": "[Week 9] The 'Blockchain Performance Triangle' illustrates the trade-offs between which three properties?",
                "options": [
                    "\u200b Throughput, Latency, and Scalability",
                    "\u200b Scalability, Security, and Decentralization",
                    "\u200b Consistency, Availability, and Tolerance",
                    "\u200b Proof of Work, PBFT, and Collective Signing."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Please refer to week 9 lecture 41.  \f\u200b"
            },
            {
                "q": "[Week 9] ByzCoin improves upon traditional Practical Byzantine Fault Tolerance (PBFT) by integrating it with Proof of Work (PoW) and Collective Signing (CoSi). Which of the following statements correctly describe the technical improvements in ByzCoin for a network of n nodes?",
                "options": [
                    "\u200b ByzCoin reduces communication complexity from O(n\u00b2) to O(n) by using a tree-based multicast protocol.",
                    "\u200b ByzCoin reduces consensus latency from O(n\u00b2) to O(log n) by using a tree-based communication structure.",
                    "\u200b ByzCoin reduces verification complexity for third-party observers from O(n) to O(1) by using Schnorr multi-signatures.",
                    "\u200b ByzCoin eliminates the need for a leader node, reducing the communication complexity to O(1)."
                ],
                "correctIndex": [
                    0,
                    1,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "Standard PBFT requires O(n\u00b2) messages because every node communicates with every other node. ByzCoin uses a tree-based multicast (CoSi), which reduces the communication complexity (total messages) to O(n). Because the messages travel down the height of the tree, the latency is reduced to O(log n). Furthermore, ByzCoin utilizes Schnorr multi-signatures to aggregate n signatures into a single collective signature, allowing for O(1) verification complexity by any entity."
            },
            {
                "q": "[Week 9] To select a random committee without centralized coordination, Algorand uses Cryptographic Sortition via a Verifiable Random Function (VRF). When a user runs the VRF, it outputs a hash, a proof, and an integer j. If the algorithm returns j=0 for a user, what does this mathematically signify?",
                "options": [
                    "\u200b The user is selected as the sole block proposer for the current round.",
                    "\u200b The user is a part of the committee, but with a voting weight of 0.",
                    "\u200b The user is not a part of the consensus committee for that round.",
                    "\u200b The VRF failed, and the user must re-run the algorithm using the seed from round r \u22121."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "The VRF function executed by every node during cryptographic sortition returns a hash, a proof, and a value j. If j is non-zero, the user is a part of the committee. If j = 0, the user is not part of the committee.  \f\u200b"
            },
            {
                "q": "[Week 9] Under Algorand's synchrony assumptions, what characterizes weak synchrony?",
                "options": [
                    "\u200b There is no communication between nodes",
                    "\u200b Messages are guaranteed to be received within a known time bound by almost all honest users.",
                    "\u200b The network can be controlled by an adversary for a bounded period of time.",
                    "\u200b The protocol only works if the majority of the money is held by one central bank."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Weak synchrony assumes that while an adversary might partition the network or delay messages, they can only do so for a limited, finite duration before strong synchrony resumes."
            },
            {
                "q": "[Week 9] Which of the following is NOT true about Single Sign-on?",
                "options": [
                    "\u200b A single user can access multiple services.",
                    "\u200b A single identity provider typically maintains the identity of an individual",
                    "\u200b During authentication, the identity is not exposed to all the services",
                    "\u200b Identity holders use the Identity Provider to authenticate other identity holders"
                ],
                "correctIndex": 3,
                "isMSQ": false,
                "solution": "Please refer to Week 9 lecture 43.  \f\u200b"
            },
            {
                "q": "[Week 9] Decentralized Identifiers (DIDs) are a W3C recommendation to implement self-sovereign identity. Which of the following accurately describes the technical components and structure of DIDs?",
                "options": [
                    "\u200b A DID URI typically follows the syntax: did:<method-name>:<method-specific-identifier>.",
                    "\u200b The DID document must contain only JSON-encoded data to ensure compatibility with all blockchain-verified registries.",
                    "\u200b The DID document includes cryptographic public keys and authentication methods so the verifier can verify that the subject controls the DID.",
                    "\u200b A DID document specifies a \"service endpoint,\" which tells the verifier how to communicate with the DID subject for the next level of service."
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "A DID URI consists of the scheme (did), method, and method-specific identifier. A DID Document contains cryptographic public keys for authentication and service endpoints to define how to communicate with the subject. Statement B is false because DID Documents are flexible and can use representations other than JSON (e.g., XML), defined in representation-specific entries."
            },
            {
                "q": "[Week 9] In the Verifiable Credentials (VC) data model, which entity is responsible for asserting claims about a subject and cryptographically signing them?",
                "options": [
                    "\u200b The Holder",
                    "\u200b The Verifier",
                    "\u200b The Issuer",
                    "\u200b The Blockchain miner."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "The issuer, like a university, is the authority that creates the VC, signs it with a private key, and gives it to the holder.  \f\u200b"
            },
            {
                "q": "[Week 9] If Algorand's BA* protocol fails to reach a final consensus in a single round, how does it resolve the situation mathematically and architecturally?",
                "options": [
                    "\u200b It runs the BA* protocol repeatedly, then a timeout occurs, and the protocol moves to the next round with a newly selected random committee.",
                    "\u200b Mathematically, exactly 10 executions of BA* are required to force a final consensus under weak synchrony.",
                    "\u200b Algorand mathematically demonstrates that running BA* 2 to 3 times is typically sufficient to reach final consensus, even if up to 49% of participants are malicious.",
                    "\u200b It permanently halts the blockchain to prevent a fork, requiring off-chain governance to reset the verifiable random functions."
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "To escape tentative consensus, Algorand triggers a timeout and moves to the next round of BA* with an entirely new, randomly selected committee chosen via cryptographic sortition. The mathematical proof behind Algorand shows that running BA* 2 or 3 times is generally sufficient to reach a final consensus, even with up to 49% malicious actors Please also refer to week 9 lecture 42."
            },
            {
                "q": "[Week 9] In the structure of a Decentralized Identifier (DID) URI such as `did:example:123`, what does 'example' represent?",
                "options": [
                    "\u200b The DID method",
                    "\u200b The DID subject identifier",
                    "\u200b The DID document",
                    "\u200b The DID scheme"
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "The second component of the URI specifies the method that supports the DID scheme and defines how the identifier is resolved."
            }
        ],
        "10": [
            {
                "q": "[Week 10] Which of the following denote properties of Hashed Timelock Contracts (HTLC)?",
                "options": [
                    "\u200b If the secret is not revealed, the funds are permanently locked and cannot be recovered.",
                    "\u200b If the secret is not revealed, all contracts using that secret are automatically executed.",
                    "\u200b HTLCs restrict the spending of funds until a valid secret (preimage) is revealed or a predefined timeout occurs.",
                    "\u200b If the secret is not revealed, the funds are automatically transferred to the recipient after the timeout."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "An HTLC works using two simple rules. First, the receiver can take the funds only if they reveal the correct secret that matches a given hash. Second, if they don\u2019t reveal it within a fixed time, the sender gets the money back. This way, either the receiver claims the funds with the secret, or the sender safely recovers them after the timeout, so no one loses money unfairly."
            },
            {
                "q": "[Week 10] If a participant in an atomic cross-chain swap halts during the \"triggering phase\" (after the hashlock secret has been revealed), what is the resulting state for a conforming counterparty?",
                "options": [
                    "\u200b The counterparty is \"worse off\" because they have lost their asset.",
                    "\u200b The protocol guarantees that the conforming party either receives their intended asset or retains their original asset.",
                    "\u200b All assets on all involved blockchains are permanently frozen.",
                    "\u200b The counterparty must wait for a consensus-level view change to reclaim their funds."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Please refer to week 10 lecture 47.  \f\u200b"
            },
            {
                "q": "[Week 10] Which of the following are inherent risks or disadvantages associated with using a Centralized Trusted Third Party (TTP) for cross-chain asset transfers?",
                "options": [
                    "\u200b Users must relinquish control of their funds to the third party.",
                    "\u200b The third party represents a single point of failure.",
                    "\u200b Cross-chain transfers cannot be performed using a third party.",
                    "\u200b Users may lose funds if the third party is compromised or shuts down."
                ],
                "correctIndex": [
                    0,
                    1,
                    3
                ],
                "isMSQ": true,
                "solution": "Using a centralized TTP (like an exchange) means you have to give up control of your funds and trust the third party. This creates a single point of failure\u2014if the exchange gets hacked or shuts down suddenly, you can lose your funds. Option (c) is incorrect because TTPs are actually used to enable transfers across different protocols, not prevent them."
            },
            {
                "q": "[Week 10] Why is \"Consensus-driven\" data transfer emphasized for permissioned blockchains?",
                "options": [
                    "\u200b To ensure that only the administrator of the network can authorize a transfer.",
                    "\u200b To guarantee that the data being moved is not a temporary or unconfirmed state of the source ledger.",
                    "\u200b Because permissioned blockchains do not support hashlocks.",
                    "\u200b To allow the destination network to participate in the mining process of the source network."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "In permissioned systems (like Hyperledger Fabric), data transfer must be \"verifiable.\" We use consensus-driven data to ensure that the information being sent from the source has been finalized by the required number of peers. This prevents the destination network from acting on data that might be \"rolled back\" or \"orphaned.\"  \f\u200b"
            },
            {
                "q": "[Week 10] In the three-party atomic swap scenario (Alice, Bob, Carol) involving an alt-coin, Bitcoin, and a car title, why is the sequence of timelocks (6\u0394, 5\u0394, 4\u0394) critical?",
                "options": [
                    "\u200b To ensure the car title is transferred before Alice spends her alt-coins.",
                    "\u200b To prevent the Bitcoin network from crashing due to high transaction volume.",
                    "\u200b To allow Carol to claim her Bitcoin and Bob to claim his alt-coins before their respective contracts expire, even if the secret s is revealed late in the chain.",
                    "\u200b To ensure that Alice, as the generator of the secret, has the least amount of time to act."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "In a multi-party swap, the timelocks must be \"staggered\" (e.g., 6\u0394, 5\u0394, 4\u0394). This gives each person in the chain enough of a buffer to react. If Carol uses the secret to claim her Bitcoin at 4\u0394, Bob still has until 5\u0394 to use that same secret to claim his alt-coins from Alice."
            },
            {
                "q": "[Week 10] According to the permissioned blockchain interoperability (e.g., between TradeLens and We.Trade), what must be included with the data moving from the source network to the destination?",
                "options": [
                    "\u200b A set of endorsements or signatures representing the consensus view of the source network.",
                    "\u200b A proof that the data has been encrypted using the destination network\u2019s private key.",
                    "\u200b Verification that the data sharing complies with the source network's \"Exposure Control\" policy.",
                    "\u200b A physical bill of lading scanned into a PDF format."
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "Please also refer to week 10 lecture 48.  \f\u200b"
            },
            {
                "q": "[Week 10] During the Hyperledger Indy identity configuration, which statements correctly describe the roles of Stewards and Trust Anchors?",
                "options": [
                    "\u200b Stewards have the permission to register new DIDs (verinyms) on the ledger.",
                    "\u200b Trust Anchors are responsible for maintaining the RBFT consensus nodes.",
                    "\u200b Trust Anchors, such as a University, have the authority to issue verifiable credentials to users.",
                    "\u200b Stewards are pre-approved participants who can approve the transition of a user to a Trust Anchor role."
                ],
                "correctIndex": [
                    0,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "In Hyperledger Indy, Stewards are the primary authorities who can write to the ledger and approve Trust Anchors. Trust Anchors (like a University) then have the power to issue credentials to users. Option (b) is wrong because Stewards usually run the validator nodes (RBFT nodes), not Trust Anchors."
            },
            {
                "q": "[Week 10] In the permissioned interoperability relay architecture, what does the \"Data Acceptance Policy\" in the destination network (Network A) evaluate?",
                "options": [
                    "\u200b The current exchange rate of the assets being transferred.",
                    "\u200b Whether the received data has a sufficient number of valid attestations/signatures from the source network.",
                    "\u200b The identity of the individual programmer who wrote the source chaincode.",
                    "\u200b If the source network (Network B) has a higher market cap than Network A."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "The Data Acceptance Policy is a gatekeeper for the destination network. It defines the \"trust threshold\" specifically: how many signatures or endorsements from the source network are required before the destination network considers the incoming data \"valid\" and writes it to its own ledger.  \f\u200b"
            },
            {
                "q": "[Week 10] Why does Hyperledger Indy use a \"Genesis Transaction\" file (pool_transactions_genesis) during the application setup?",
                "options": [
                    "\u200b It contains the history of every identity ever created since the start of the web.",
                    "\u200b It is a legal document that Alice must sign before using the system.",
                    "\u200b It reboots the nodes every time a new transaction is made.",
                    "\u200b It provides the initial IP addresses, ports, and keys of the nodes in the Indy pool so the SDK can connect to the network."
                ],
                "correctIndex": 3,
                "isMSQ": false,
                "solution": "The Genesis Transaction file is the starting point (the \"bootstrap\"). It tells the client application exactly where the nodes are located on the internet and what their public keys are. Without this file, the Indy SDK wouldn't know which servers to talk to."
            },
            {
                "q": "[Week 10] In the Indy tutorial, the University sets support_revocation: False when creating a Credential Definition. What is the implication of this setting?",
                "options": [
                    "\u200b The University can never issue more than one credential.",
                    "\u200b Once issued, the University cannot use an Indy Revocation List to invalidate that specific transcript in the future.",
                    "\u200b Alice is forbidden from showing her transcript to any company.",
                    "\u200b The credential will automatically delete itself from Alice's wallet after 24 hours."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Please also refer to week 10 lecture 50."
            }
        ],
        "11": [
            {
                "q": "[Week 11] What specific gap does Hyperledger Aries fill when used alongside Hyperledger Indy?",
                "options": [
                    "\u200b It provides the consensus algorithm necessary for Indy to mine blocks.",
                    "\u200b It introduces a new native cryptocurrency to incentivize Indy node operators.",
                    "\u200b It gives the infrastructure for blockchain-routed peer-to-peer interactions and the secure transport of digital credentials between participants.",
                    "\u200b It replaces Indy's distributed ledger entirely by acting as a faster, centralized database."
                ],
                "correctIndex": 2,
                "isMSQ": false,
                "solution": "Aries solves the transport gap by providing peer-to-peer interaction infrastructure for credentials. Please refer to week 11 lecture 51."
            },
            {
                "q": "[Week 11] According to the architecture of the Aries Cloud Agent Python (ACA-Py) discussed in the lecture, which of the following are primary modules/components?",
                "options": [
                    "\u200b Core Capabilities",
                    "\u200b REST API Module",
                    "\u200b Proof of Work Consensus Engine",
                    "\u200b Aries Protocols (DIDcomm)"
                ],
                "correctIndex": [
                    0,
                    1,
                    3
                ],
                "isMSQ": true,
                "solution": "Please refer to week 11 lecture 51.  \f\u200b"
            },
            {
                "q": "[Week 11] In the context of selfish mining, suppose an attacker\u2019s mining pool privately mines two consecutive blocks while the honest network mines one competing block. The attacker then releases its private chain, and both attacker blocks are successfully accepted into the main chain (i.e., no fork race or block loss occurs). If the block reward is 6.25 bitcoins per block, how much total reward does the attacker\u2019s pool earn?",
                "options": [
                    "\u200b 6.25 bitcoins",
                    "\u200b 12.5 bitcoins",
                    "\u200b 18.75 bitcoins",
                    "\u200b 8.25 bitcoins"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "the attacker\u2019s pool successfully replaces the public chain with its own longer chain containing two blocks, which means both of its blocks are accepted while the honest miner\u2019s block is discarded. Since each block gives a reward of 6.25 bitcoins, the attacker earns a total of 2 \u00d7 6.25 = 12.5 bitcoins. Please refer to week 11 lecture 53."
            },
            {
                "q": "[Week 11] In the context of transaction privacy leakage, what mechanism is mentioned in the lecture as a way to use decoys to obscure the trace of cryptocurrency transactions?",
                "options": [
                    "\u200b Genesis Blocks",
                    "\u200b Chaff coins (Mixins)",
                    "\u200b 51% Padding",
                    "\u200b Webhooks"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Chaff coins/Mixins are used as decoys to prevent transaction privacy leakage. Please refer to week 11 lecture 52.  \f\u200b"
            },
            {
                "q": "[Week 11] In an eclipse attack scenario discussed in lecture 54, suppose an attacker controls 40% of the network\u2019s hashing power, while a victim node has 30% and the rest of the network holds the remaining 30%. If the attacker successfully isolates (eclipses) the victim from the rest of the network, which of the following statements correctly describe what happens?",
                "options": [
                    "\u200b The attacker now effectively controls 70% of the hashing power on the main chain.",
                    "\u200b The honest nodes (victim + rest of the network) can no longer combine their 60% hashing power.",
                    "\u200b The attacker directly competes with the victim with a 40% vs 30% advantage.",
                    "\u200b The attacker directly competes with the rest of the network with a 40% vs 30% advantage."
                ],
                "correctIndex": [
                    0,
                    1,
                    2,
                    3
                ],
                "isMSQ": true,
                "solution": "When the attacker eclipses the victim, the network is split into separate parts that cannot communicate with each other. Even though the honest nodes together have 60% hashing power, they can\u2019t coordinate or build on each other\u2019s blocks anymore. As a result, the attacker effectively competes against each group separately, having a 40% vs. 30% advantage over both the victim and the rest of the network."
            },
            {
                "q": "[Week 11] In the Fomo3D smart contract game, every time someone buys a ticket, the countdown timer is extended by 30 seconds. Suppose an attacker buys a ticket when there are exactly 3 minutes left on the clock, and then launches a suppression attack by flooding the network with high gas-price transactions so that no one else\u2019s transactions get included in blocks. Assuming no honest transactions go through during this time, how many ticket purchases did the attacker effectively prevent?",
                "options": [
                    "\u200b 3 purchases",
                    "\u200b 6 purchases",
                    "\u200b 10 purchases",
                    "\u200b 30 purchases"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "Since 3 minutes equals 180 seconds and each ticket would extend the timer by 30 seconds, up to 6 purchases could have occurred in that time (180 \u00f7 30 = 6). By blocking all other transactions, the attacker prevents these 6 possible extensions, allowing the timer to run out and ensuring their win. Please also refer to week 11 lecture 54.  \f\u200b"
            },
            {
                "q": "[Week 11] What is the primary objective of an \"Eclipse Attack\" on a blockchain network?",
                "options": [
                    "\u200b To gain majority control (51%) of the network\u2019s hashing power by combining mining pools",
                    "\u200b To isolate a target node from the rest of the network by filling its peer connections with attacker-controlled nodes",
                    "\u200b To take advantage of smart contract bugs to steal funds",
                    "\u200b To crack a user\u2019s private key using brute force"
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "An Eclipse Attack is all about isolating a node. The attacker takes control of all the incoming and outgoing connections of the victim node, so it only communicates with malicious peers instead of honest ones. This isolation allows the attacker to control what information the victim sees, which can then be used to carry out further attacks like double-spending or selfish mining."
            },
            {
                "q": "[Week 11] In an eclipse attack, an attacker can overwhelm a node by filling its \u201cnew\u201d and \u201ctried\u201d peer tables with malicious IP addresses, effectively isolating it from honest peers. Based on the lecture, which of the following is a practical way developers can reduce this risk?",
                "options": [
                    "\u200b Force all nodes to rely on a centralized and trusted DNS server for peer discovery.",
                    "\u200b Change how IP address buckets are managed so that malicious entries are gradually replaced by honest ones.",
                    "\u200b Require nodes to pass a strict Proof of Stake check before joining the network.",
                    "\u200b Encrypt the node\u2019s local database to hide the peer tables from attackers."
                ],
                "correctIndex": 1,
                "isMSQ": false,
                "solution": "A good defense is to redesign how peer tables are updated and maintained, ensuring that attacker-controlled IP addresses don\u2019t permanently dominate the tables. By allowing honest IPs to eventually replace malicious ones, the node can recover from isolation attempts and reconnect with the legitimate network.  \f\u200b"
            },
            {
                "q": "[Week 11] In a double-spending attack where the attacker is working together with a mining pool, how is the vendor actually cheated?",
                "options": [
                    "\u200b The attacker sends a payment to the vendor and receives the service, but the colluding mining pool later confirms a conflicting transaction that sends the same coins back to the attacker.",
                    "\u200b The attacker steals the vendor\u2019s digital signature and uses it to drain their wallet.",
                    "\u200b The attacker creates a private chain of blocks that removes the vendor\u2019s node from the network.",
                    "\u200b The attacker uses fake \u201cchaff coins\u201d to make the payment appear larger than it really is."
                ],
                "correctIndex": 0,
                "isMSQ": false,
                "solution": "In this type of attack, the attacker first sends a legitimate-looking transaction to the vendor and gets the goods or service. Meanwhile, they secretly create another transaction that sends the same coins back to themselves. Because they are collaborating with a mining pool, that pool gives priority to the attacker\u2019s conflicting transaction and includes it in the blockchain. As a result, the transaction paying the vendor is invalidated, meaning the vendor ends up with nothing while the attacker keeps both the goods and the money."
            },
            {
                "q": "[Week 11] In an Eclipse Attack, how does the attacker actually isolate a victim node from the rest of the network?",
                "options": [
                    "\u200b By interfering with the ISP\u2019s routing hardware",
                    "\u200b By launching a DDoS attack on the victim\u2019s internet provider",
                    "\u200b By hacking the victim\u2019s wallet so it ignores blocks",
                    "\u200b By filling the victim\u2019s peer tables with attacker-controlled IPs"
                ],
                "correctIndex": 3,
                "isMSQ": false,
                "solution": "The attacker takes advantage of how the node stores peer IP addresses. They keep adding their own controlled IPs into the victim\u2019s \u201cnew\u201d and \u201ctried\u201d tables. Over time, these tables get filled with attacker nodes, so when the victim connects to peers, it ends up connecting only to the attacker\u2019s machines. This cuts it off from the honest network without needing anything like ISP attacks or software hacks."
            }
        ]
    }
};
