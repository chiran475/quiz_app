const questions = [
    {
        question: "What does ARPANET stand for?",
        options: [
            "Advanced Research Projects Agency Network",
            "American Research Projects Agency Network",
            "Automated Research Projects Agency Network",
            "Advanced Research Protocol Agency Network"
        ],
        correct: 0,
        explanation: "ARPANET stands for Advanced Research Projects Agency Network, which was the first operational packet-switching network and the predecessor of the internet."
    },
    {
        question: "Who sent the first email?",
        options: [
            "Bill Gates",
            "Ray Tomlinson",
            "Tim Berners-Lee",
            "Vint Cerf"
        ],
        correct: 1,
        explanation: "Ray Tomlinson sent the first email in 1971 and chose the @ symbol for email addresses."
    },
    {
        question: "What was the first domain name ever registered?",
        options: [
            "IBM.com",
            "Microsoft.com",
            "Symbolics.com",
            "Google.com"
        ],
        correct: 2,
        explanation: "Symbolics.com was the first domain name registered on March 15, 1985."
    },
    {
        question: "What is packet switching?",
        options: [
            "A method of grouping data for transmission across networks",
            "A way to switch between computers",
            "A type of email system",
            "A security protocol"
        ],
        correct: 0,
        explanation: "Packet switching is a method where data is broken into smaller packets, transmitted independently, and reassembled at the destination."
    },
    {
        question: "What is the primary purpose of DNS?",
        options: [
            "To secure websites",
            "To transfer files",
            "To convert domain names to IP addresses",
            "To send emails"
        ],
        correct: 2,
        explanation: "DNS (Domain Name System) translates human-readable domain names into IP addresses that computers can understand."
    },
    {
        question: "What does TCP/IP stand for?",
        options: [
            "Transfer Control Protocol/Internet Protocol",
            "Transmission Control Protocol/Internet Protocol",
            "Technical Control Protocol/Internet Protocol",
            "Transport Control Protocol/Internet Protocol"
        ],
        correct: 1,
        explanation: "TCP/IP stands for Transmission Control Protocol/Internet Protocol, the fundamental communication protocol of the internet."
    },
    {
        question: "Who is credited with inventing the World Wide Web?",
        options: [
            "Steve Jobs",
            "Bill Gates",
            "Tim Berners-Lee",
            "Mark Zuckerberg"
        ],
        correct: 2,
        explanation: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN."
    },
    {
        question: "What are the main service models in cloud computing?",
        options: [
            "IaaS, PaaS, and SaaS",
            "Hardware, Software, and Network",
            "Storage, Computing, and Database",
            "Public, Private, and Hybrid"
        ],
        correct: 0,
        explanation: "The main service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)."
    },
    {
        question: "What is the primary characteristic of IaaS?",
        options: [
            "Provides software applications",
            "Offers development platforms",
            "Provides virtualized computing resources",
            "Manages databases only"
        ],
        correct: 2,
        explanation: "IaaS provides virtualized computing resources like virtual machines, storage, and networking over the internet."
    },
    {
        question: "What are the deployment models in cloud computing?",
        options: [
            "Public, Private, Hybrid, and Community",
            "Open, Closed, and Mixed",
            "Internal, External, and Combined",
            "Basic, Standard, and Premium"
        ],
        correct: 0,
        explanation: "Cloud deployment models include Public (available to all), Private (for single organization), Hybrid (mix of public/private), and Community (shared by specific community)."
    },
    {
        question: "What is cloud elasticity?",
        options: [
            "Cloud security feature",
            "Ability to scale resources up/down as needed",
            "Network speed measurement",
            "Data backup process"
        ],
        correct: 1,
        explanation: "Cloud elasticity refers to the ability to automatically scale resources up or down based on demand."
    },
    {
        question: "What is a key benefit of cloud computing?",
        options: [
            "Pay-per-use pricing model",
            "Limited scalability",
            "Increased maintenance",
            "Higher upfront costs"
        ],
        correct: 0,
        explanation: "Pay-per-use pricing allows organizations to pay only for resources they actually use, reducing capital expenditure."
    },
    {
        question: "What is cloud orchestration?",
        options: [
            "Playing music in the cloud",
            "Automated arrangement and coordination of cloud services",
            "Cloud security",
            "Data backup"
        ],
        correct: 1,
        explanation: "Cloud orchestration involves automating the arrangement, coordination, and management of complex cloud systems, services, and middleware."
    },
    {
        question: "What is a container in cloud computing?",
        options: [
            "Storage unit",
            "Standardized unit of software packaging",
            "Network protocol",
            "Security measure"
        ],
        correct: 1,
        explanation: "Containers package application code and dependencies together, ensuring consistent operation across different computing environments."
    },
    {
        question: "What is cloud migration?",
        options: [
            "Moving birds in the sky",
            "Process of moving applications/data to cloud",
            "Creating cloud backups",
            "Cloud network setup"
        ],
        correct: 1,
        explanation: "Cloud migration is the process of moving applications, data, and other business elements from on-premises to cloud environments."
    },
    {
        question: "What is multi-cloud strategy?",
        options: [
            "Using multiple computer screens",
            "Using services from multiple cloud providers",
            "Multiple backups",
            "Multiple networks"
        ],
        correct: 1,
        explanation: "Multi-cloud involves using cloud services from multiple providers to optimize resources, reduce dependency, and improve reliability."
    },
    {
        question: "What is serverless computing?",
        options: [
            "Computing without any servers",
            "Model where provider manages infrastructure",
            "Offline computing",
            "Local computing"
        ],
        correct: 1,
        explanation: "Serverless computing lets developers build applications without managing servers, as the provider handles infrastructure management."
    },
    {
        question: "What is cloud bursting?",
        options: [
            "When cloud servers fail",
            "Deploying to public cloud when private cloud reaches capacity",
            "Data breach in cloud",
            "Cloud backup process"
        ],
        correct: 1,
        explanation: "Cloud bursting is when an application runs in a private cloud and bursts into a public cloud when demand increases."
    },
    {
        question: "What is edge computing in relation to cloud?",
        options: [
            "Computing at network edges near data source",
            "High-performance computing",
            "Cloud security feature",
            "Cloud storage type"
        ],
        correct: 0,
        explanation: "Edge computing processes data near the source rather than sending it to centralized cloud data centers."
    },
    {
        question: "What is cloud load balancing?",
        options: [
            "Measuring cloud weight",
            "Distribution of workloads across resources",
            "Cloud cost calculation",
            "Data backup method"
        ],
        correct: 1,
        explanation: "Load balancing distributes workloads across multiple computing resources to optimize resource use and performance."
    },
    {
        question: "What is a cloud-native application?",
        options: [
            "Any application in cloud",
            "Application designed specifically for cloud environment",
            "Mobile application",
            "Web application"
        ],
        correct: 1,
        explanation: "Cloud-native applications are specifically designed to take advantage of cloud computing frameworks and features."
    },
    {
        question: "What is cloud compliance?",
        options: [
            "Cloud speed measurement",
            "Meeting regulatory requirements for cloud services",
            "Cloud installation process",
            "Cloud maintenance"
        ],
        correct: 1,
        explanation: "Cloud compliance ensures cloud services meet industry and regulatory requirements for data security and privacy."
    },
    {
        question: "When was the internet opened for commercial use?",
        options: [
            "Early 1990s",
            "Late 1980s",
            "Mid 1970s",
            "Early 2000s"
        ],
        correct: 0,
        explanation: "The internet was opened for commercial use in the early 1990s when the National Science Foundation lifted restrictions on commercial use."
    },
    {
        question: "What was the first web browser?",
        options: [
            "Internet Explorer",
            "Mosaic",
            "WorldWideWeb",
            "Netscape"
        ],
        correct: 2,
        explanation: "WorldWideWeb (later renamed Nexus) was the first web browser, created by Tim Berners-Lee in 1990."
    },
    {
        question: "What does HTML element <p> represent?",
        options: [
            "Paragraph",
            "Picture",
            "Print",
            "Page"
        ],
        correct: 0,
        explanation: "The <p> element in HTML represents a paragraph of text."
    },
    {
        question: "Which CSS property changes text color?",
        options: [
            "text-style",
            "font-color",
            "color",
            "text-color"
        ],
        correct: 2,
        explanation: "The 'color' property in CSS is used to change the color of text."
    },
    {
        question: "What year was ARPANET created?",
        options: [
            "1969",
            "1975",
            "1982",
            "1965"
        ],
        correct: 0,
        explanation: "ARPANET was created in 1969 with its first node at UCLA."
    },
    {
        question: "Which symbol is used in email addresses?",
        options: [
            "#",
            "@",
            "&",
            "*"
        ],
        correct: 1,
        explanation: "The @ (at) symbol is used in email addresses to separate the username from the domain name."
    },
    {
        question: "What does WWW stand for?",
        options: [
            "World Wide Web",
            "World Web Width",
            "Wide World Web",
            "World Web Wireless"
        ],
        correct: 0,
        explanation: "WWW stands for World Wide Web, the system of interlinked hypertext documents accessed via the internet."
    },
    
        {
            question: "What is the purpose of an IP address?",
            options: [
                "To encrypt data",
                "To identify devices on a network",
                "To store web pages",
                "To block spam emails"
            ],
            correct: 1,
            explanation: "An IP address uniquely identifies devices on a network, allowing them to send and receive data."
        },
        {
            question: "Which IP version is most widely used today?",
            options: [
                "IPv2",
                "IPv4",
                "IPv6",
                "IPv8"
            ],
            correct: 1,
            explanation: "IPv4 is still the most widely used IP version, although IPv6 is gradually being adopted to address IPv4 address exhaustion."
        },
        {
            question: "What is a domain name?",
            options: [
                "A type of web browser",
                "A human-readable web address",
                "A security protocol",
                "A type of email service"
            ],
            correct: 1,
            explanation: "A domain name is a human-readable address that represents the numeric IP address of a website."
        },
        {
            question: "Which is a characteristic of information retrieval services?",
            options: [
                "Real-time communication",
                "Access to stored information",
                "Online gaming",
                "Social networking"
            ],
            correct: 1,
            explanation: "Information retrieval services allow users to access stored information and data from various sources on the Internet."
        },
        {
            question: "What is the primary function of HTTP?",
            options: [
                "To store web pages",
                "To transfer hypertext documents",
                "To manage email",
                "To encrypt data"
            ],
            correct: 1,
            explanation: "HTTP (Hypertext Transfer Protocol) is used to transfer hypertext documents between servers and clients on the web."
        },
        {
            question: "What characterizes Web 3.0 technologies?",
            options: [
                "Static web pages",
                "Centralized control",
                "Semantic understanding",
                "Limited user interaction"
            ],
            correct: 2,
            explanation: "Web 3.0 is characterized by semantic understanding, where machines can interpret and process information more like humans."
        },
        {
            question: "What is a key feature of entertainment services on the Internet?",
            options: [
                "Business communications",
                "File storage",
                "Streaming media",
                "Network security"
            ],
            correct: 2,
            explanation: "Entertainment services primarily offer streaming media, including video, music, and gaming content."
        },
        {
            question: "Which is NOT a typical educational service on the Internet?",
            options: [
                "Online courses",
                "Digital libraries",
                "Hardware manufacturing",
                "Virtual classrooms"
            ],
            correct: 2,
            explanation: "Hardware manufacturing is not an educational service; educational services include online courses, digital libraries, and virtual classrooms."
        },
        {
            question: "What is the main advantage of cloud computing for businesses?",
            options: [
                "Increased physical security",
                "Reduced cost and scalability",
                "Faster internet speed",
                "Better website design"
            ],
            correct: 1,
            explanation: "Cloud computing offers businesses reduced costs and scalability by eliminating the need for physical infrastructure."
        },
        {
            question: "What distinguishes an Extranet from an Intranet?",
            options: [
                "Speed of connection",
                "Access for external partners",
                "Physical location",
                "Cost of implementation"
            ],
            correct: 1,
            explanation: "An Extranet differs from an Intranet by providing controlled access to external partners, suppliers, or customers."
        },
        {
            question: "Which is a key component of network security?",
            options: [
                "Social media integration",
                "Firewall protection",
                "Website design",
                "Content creation"
            ],
            correct: 1,
            explanation: "Firewall protection is a key component of network security, helping to prevent unauthorized access."
        },
        {
            question: "What is the purpose of SSL/TLS?",
            options: [
                "To speed up internet connection",
                "To encrypt data transmission",
                "To store web pages",
                "To manage email"
            ],
            correct: 1,
            explanation: "SSL/TLS protocols encrypt data transmission between clients and servers to ensure secure communication."
        },
        {
            question: "What is a URL?",
            options: [
                "Universal Resource Locator",
                "Uniform Resource Locator",
                "Unified Resource Link",
                "Universal Reference Link"
            ],
            correct: 1,
            explanation: "URL stands for Uniform Resource Locator, which is the address used to locate resources on the web."
        },
        {
            question: "Which component is NOT typically part of a URL structure?",
            options: [
                "Protocol",
                "Domain name",
                "CPU speed",
                "Path"
            ],
            correct: 2,
            explanation: "CPU speed is not a component of URL structure. URLs typically contain protocol, domain name, path, and optional parameters."
        },
        {
            question: "What is the main function of a web browser?",
            options: [
                "To create web pages",
                "To store emails",
                "To retrieve and display web content",
                "To manage network security"
            ],
            correct: 2,
            explanation: "A web browser's main function is to retrieve web content from servers and display it to users in a readable format."
        },
        {
            question: "Which of these is a communication service provided by the Internet?",
            options: [
                "Microsoft Word",
                "Email",
                "Local disk storage",
                "Printer drivers"
            ],
            correct: 1,
            explanation: "Email is a communication service provided by the Internet that allows users to send and receive digital messages."
        },
        {
            question: "What is e-commerce?",
            options: [
                "Electronic mail system",
                "Online gaming",
                "Digital buying and selling",
                "Social networking"
            ],
            correct: 2,
            explanation: "E-commerce refers to the buying and selling of goods and services over the Internet."
        },
        {
            question: "Which is an example of a social networking service?",
            options: [
                "Microsoft Excel",
                "Adobe Photoshop",
                "Facebook",
                "Windows Media Player"
            ],
            correct: 2,
            explanation: "Facebook is a social networking service that allows users to connect and share content with others online."
        },
        {
            question: "What characterizes cloud services?",
            options: [
                "They only work offline",
                "They require special hardware",
                "They provide resources over the Internet",
                "They are free from security concerns"
            ],
            correct: 2,
            explanation: "Cloud services provide computing resources, storage, and applications over the Internet without requiring local hardware or software installation."
        },
        {
            question: "How does the World Wide Web work?",
            options: [
                "Through physical mail delivery",
                "Using hypertext links",
                "Via telephone lines only",
                "Through radio signals only"
            ],
            correct: 1,
            explanation: "The World Wide Web works through hypertext links that connect documents and resources across the Internet."
        },
        {
            question: "What makes dynamic web pages 'dynamic'?",
            options: [
                "They load faster",
                "They change content based on user interaction or other factors",
                "They use less bandwidth",
                "They are more secure"
            ],
            correct: 1,
            explanation: "Dynamic web pages can change their content based on user interaction, database content, or other factors without manual modification."
        },
        {
            question: "Which is NOT a common security feature of web browsers?",
            options: [
                "Password manager",
                "SSL/TLS encryption",
                "Physical firewall",
                "Private browsing mode"
            ],
            correct: 2,
            explanation: "Physical firewall is not a browser security feature; it's a separate network security device or software."
        },
        {
            question: "What is a key aspect of Search Engine Optimization (SEO)?",
            options: [
                "Paying search engines for rankings",
                "Improving website visibility in search results",
                "Creating social media accounts",
                "Building physical servers"
            ],
            correct: 1,
            explanation: "SEO involves improving a website's visibility in search engine results through various optimization techniques."
        },
        {
            question: "Which Internet service allows file storage and sharing online?",
            options: [
                "Email",
                "VoIP",
                "Cloud storage",
                "Web browsing"
            ],
            correct: 2,
            explanation: "Cloud storage services allow users to store and share files online, accessible from any device with Internet access."
        },
        {
            question: "What was one of the key features that characterized Web 2.0?",
            options: [
                "Static web pages",
                "Limited user interaction",
                "User-generated content",
                "Text-only websites"
            ],
            correct: 2,
            explanation: "Web 2.0 was characterized by user-generated content, allowing users to actively contribute to websites through features like blogs, wikis, and social networking platforms."
        },
        {
            question: "What technology is the foundation for cryptocurrencies?",
            options: [
                "Cloud computing",
                "Blockchain",
                "5G networks",
                "Artificial Intelligence"
            ],
            correct: 1,
            explanation: "Blockchain technology serves as the foundation for cryptocurrencies like Bitcoin, providing a decentralized ledger for recording transactions."
        },
        {
            question: "What is packet switching?",
            options: [
                "A method of routing physical mail",
                "A way to switch between different internet providers",
                "A method of grouping data transmitted over digital networks",
                "A type of network security protocol"
            ],
            correct: 2,
            explanation: "Packet switching is a method of grouping data that is transmitted over a digital network where data is divided into packets before being sent."
        },
        {
            question: "Which decade saw the rise of smartphones and mobile Internet?",
            options: [
                "1990s",
                "2000s",
                "2010s",
                "2020s"
            ],
            correct: 2,
            explanation: "The 2010s saw the rise of smartphones and mobile Internet, with mobile becoming the dominant form of Internet access."
        },
        {
            question: "What is an Extranet?",
            options: [
                "A public network accessible to everyone",
                "A private network within an organization",
                "A network that allows controlled access to external users",
                "A network exclusively for government use"
            ],
            correct: 2,
            explanation: "An Extranet is a network that extends beyond an organization's intranet to allow controlled access to external users like suppliers or customers."
        },
        {
            question: "Which technology enables everyday devices to connect to the Internet?",
            options: [
                "Web 3.0",
                "Internet of Things (IoT)",
                "Cloud Computing",
                "Blockchain"
            ],
            correct: 1,
            explanation: "The Internet of Things (IoT) connects everyday devices, such as smart appliances, cars, and wearable technology, to the Internet."
        },
        {
            question: "What is the primary purpose of cloud computing?",
            options: [
                "To provide weather forecasts",
                "To store and process data over the Internet",
                "To improve internet speed",
                "To block malicious websites"
            ],
            correct: 1,
            explanation: "Cloud computing enables users and businesses to store and process data over the Internet, offering scalable and cost-effective solutions."
        },
        {
            question: "Which occurred first chronologically?",
            options: [
                "Introduction of DNS",
                "Invention of Email",
                "Creation of World Wide Web",
                "Launch of Mosaic browser"
            ],
            correct: 1,
            explanation: "Email was invented by Ray Tomlinson in 1971, preceding DNS (1984), WWW (1989), and Mosaic browser (1993)."
        },
        {
            question: "What is a key feature of Web 3.0?",
            options: [
                "Static web pages",
                "Centralized control",
                "Decentralized Internet",
                "Limited user interaction"
            ],
            correct: 2,
            explanation: "Web 3.0 envisions a decentralized Internet where data and services are not controlled by a few large corporations but distributed across a network of users."
        },
        {
            question: "What is the primary advantage of 5G networks?",
            options: [
                "Lower cost",
                "Better security",
                "Faster data transfer speeds",
                "Simplified networking"
            ],
            correct: 2,
            explanation: "5G networks provide faster data transfer speeds, lower latency, and greater connectivity compared to previous generations."
        },
        {
            question: "What distinguishes static web pages from dynamic web pages?",
            options: [
                "Static pages load faster",
                "Static pages don't change unless manually modified",
                "Static pages are more secure",
                "Static pages use more bandwidth"
            ],
            correct: 1,
            explanation: "Static web pages display the same content to all users and don't change unless manually modified by the website developer."
        },
        {
            question: "When did TCP/IP become the standard protocol for ARPANET?",
            options: [
                "1981",
                "1982",
                "1983",
                "1984"
            ],
            correct: 2,
            explanation: "TCP/IP became the standard protocol for ARPANET in 1983, replacing the previous Network Control Protocol (NCP)."
        },
        {
            question: "What was one of the key features that characterized Web 2.0?",
            options: [
                "Static web pages",
                "Limited user interaction",
                "User-generated content",
                "Text-only websites"
            ],
            correct: 2,
            explanation: "Web 2.0 was characterized by user-generated content, allowing users to actively contribute to websites through features like blogs, wikis, and social networking platforms."
        },
        {
            question: "What technology is the foundation for cryptocurrencies?",
            options: [
                "Cloud computing",
                "Blockchain",
                "5G networks",
                "Artificial Intelligence"
            ],
            correct: 1,
            explanation: "Blockchain technology serves as the foundation for cryptocurrencies like Bitcoin, providing a decentralized ledger for recording transactions."
        },
        {
            question: "What is packet switching?",
            options: [
                "A method of routing physical mail",
                "A way to switch between different internet providers",
                "A method of grouping data transmitted over digital networks",
                "A type of network security protocol"
            ],
            correct: 2,
            explanation: "Packet switching is a method of grouping data that is transmitted over a digital network where data is divided into packets before being sent."
        },
        {
            question: "Which decade saw the rise of smartphones and mobile Internet?",
            options: [
                "1990s",
                "2000s",
                "2010s",
                "2020s"
            ],
            correct: 2,
            explanation: "The 2010s saw the rise of smartphones and mobile Internet, with mobile becoming the dominant form of Internet access."
        },
        {
            question: "What is an Extranet?",
            options: [
                "A public network accessible to everyone",
                "A private network within an organization",
                "A network that allows controlled access to external users",
                "A network exclusively for government use"
            ],
            correct: 2,
            explanation: "An Extranet is a network that extends beyond an organization's intranet to allow controlled access to external users like suppliers or customers."
        },
        {
            question: "Which technology enables everyday devices to connect to the Internet?",
            options: [
                "Web 3.0",
                "Internet of Things (IoT)",
                "Cloud Computing",
                "Blockchain"
            ],
            correct: 1,
            explanation: "The Internet of Things (IoT) connects everyday devices, such as smart appliances, cars, and wearable technology, to the Internet."
        },
        {
            question: "What is the primary purpose of cloud computing?",
            options: [
                "To provide weather forecasts",
                "To store and process data over the Internet",
                "To improve internet speed",
                "To block malicious websites"
            ],
            correct: 1,
            explanation: "Cloud computing enables users and businesses to store and process data over the Internet, offering scalable and cost-effective solutions."
        },
        {
            question: "Which occurred first chronologically?",
            options: [
                "Introduction of DNS",
                "Invention of Email",
                "Creation of World Wide Web",
                "Launch of Mosaic browser"
            ],
            correct: 1,
            explanation: "Email was invented by Ray Tomlinson in 1971, preceding DNS (1984), WWW (1989), and Mosaic browser (1993)."
        },
        {
            question: "What is a key feature of Web 3.0?",
            options: [
                "Static web pages",
                "Centralized control",
                "Decentralized Internet",
                "Limited user interaction"
            ],
            correct: 2,
            explanation: "Web 3.0 envisions a decentralized Internet where data and services are not controlled by a few large corporations but distributed across a network of users."
        },
        {
            question: "What is the primary advantage of 5G networks?",
            options: [
                "Lower cost",
                "Better security",
                "Faster data transfer speeds",
                "Simplified networking"
            ],
            correct: 2,
            explanation: "5G networks provide faster data transfer speeds, lower latency, and greater connectivity compared to previous generations."
        },
        {
            question: "What distinguishes static web pages from dynamic web pages?",
            options: [
                "Static pages load faster",
                "Static pages don't change unless manually modified",
                "Static pages are more secure",
                "Static pages use more bandwidth"
            ],
            correct: 1,
            explanation: "Static web pages display the same content to all users and don't change unless manually modified by the website developer."
        },
        {
            question: "When did TCP/IP become the standard protocol for ARPANET?",
            options: [
                "1981",
                "1982",
                "1983",
                "1984"
            ],
            correct: 2,
            explanation: "TCP/IP became the standard protocol for ARPANET in 1983, replacing the previous Network Control Protocol (NCP)."
        }
,
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style System",
            "Cascading Style Sheets",
            "Creative Style Software",
            "Coded Style Sheets"
        ],
        correct: 1,
        explanation: "CSS stands for Cascading Style Sheets, used for styling web pages."
    },
    {
        question: "Which organization standardizes the internet protocols?",
        options: [
            "IETF",
            "WHO",
            "UNESCO",
            "UNICEF"
        ],
        correct: 0,
        explanation: "The Internet Engineering Task Force (IETF) develops and promotes internet standards."
    },
    {
        question: "What was the first social media site?",
        options: [
            "Facebook",
            "MySpace",
            "Six Degrees",
            "Friendster"
        ],
        correct: 2,
        explanation: "Six Degrees, launched in 1997, is considered the first modern social media site."
    },
    {
        question: "What type of markup language is HTML?",
        options: [
            "Programming Language",
            "Scripting Language",
            "Styling Language",
            "Markup Language"
        ],
        correct: 3,
        explanation: "HTML is a markup language that defines the structure and presentation of web content."
    },
    {
        question: "Which company created the first commercial web browser?",
        options: [
            "Microsoft",
            "Netscape",
            "Apple",
            "IBM"
        ],
        correct: 1,
        explanation: "Netscape created the first commercial web browser, Netscape Navigator, in 1994."
    },
      {
            question: "In the URL 'https://www.example.com:443/path/page.html?name=value#section', what does 'https' represent?",
            options: [
                "The protocol",
                "The domain name",
                "The port number",
                "The file extension"
            ],
            correct: 0,
            explanation: "HTTPS (Hypertext Transfer Protocol Secure) is the protocol, which defines how data is transmitted between your browser and the website."
        },
        {
            question: "In the URL 'https://shop.example.com/products?id=123', what is 'shop'?",
            options: [
                "The path",
                "A subdomain",
                "A query parameter",
                "The domain name"
            ],
            correct: 1,
            explanation: "Shop is a subdomain of example.com. Subdomains appear before the main domain name."
        },
        {
            question: "What does the '443' represent in 'https://www.example.com:443/index.html'?",
            options: [
                "The protocol version",
                "The page number",
                "The port number",
                "The server ID"
            ],
            correct: 2,
            explanation: "443 is the port number, which is the default port for HTTPS connections. It's usually not visible in URLs as browsers assume it by default."
        },
        {
            question: "In the URL 'https://example.com/blog/post.html?id=123&author=john', what is '?id=123&author=john'?",
            options: [
                "The path parameters",
                "The query string",
                "The fragment identifier",
                "The file extension"
            ],
            correct: 1,
            explanation: "This is the query string, containing parameters (id and author) that are passed to the web server."
        },
        {
            question: "What is the purpose of '#section' in 'https://example.com/page.html#section'?",
            options: [
                "To define the page style",
                "To specify the file type",
                "To indicate a fragment or bookmark on the page",
                "To show the page version"
            ],
            correct: 2,
            explanation: "The # symbol indicates a fragment identifier, which links to a specific section or element within the webpage."
        },
        {
            question: "In the URL 'https://api.example.com/v1/users', what does '/v1/users' represent?",
            options: [
                "The path",
                "The protocol",
                "The query parameters",
                "The domain name"
            ],
            correct: 0,
            explanation: "This is the path component of the URL, indicating the specific resource location on the server."
        },
        {
            question: "What's wrong with this URL: 'http://example.com/my file.html'?",
            options: [
                "The protocol is incorrect",
                "The domain is invalid",
                "It contains a space in the filename",
                "The extension is wrong"
            ],
            correct: 2,
            explanation: "URLs cannot contain spaces. Spaces should be encoded as '%20' or replaced with hyphens/underscores."
        },
        {
            question: "In 'mailto:user@example.com', what is 'mailto'?",
            options: [
                "A domain name",
                "A protocol",
                "An email service",
                "A prefix"
            ],
            correct: 1,
            explanation: "mailto: is a protocol that indicates this URL will open the default email client."
        },
        {
            question: "What component is highlighted in 'https://www.example.com/products/search?category=books'?",
            options: [
                "www.example.com",
                "/products/search",
                "?category=books",
                "https://"
            ],
            correct: 1,
            explanation: "/products/search is the path component, indicating the resource location on the server."
        },
        {
            question: "In 'ftp://files.example.com:21/public/', what protocol is being used?",
            options: [
                "HTTP",
                "HTTPS",
                "FTP",
                "SMTP"
            ],
            correct: 2,
            explanation: "FTP (File Transfer Protocol) is being used, which is a standard protocol for transferring files between computers over a network."
        },
        {
            question: "Which part of 'https://user:password@example.com' represents authentication credentials?",
            options: [
                "https://",
                "user:password@",
                "example.com",
                "None of these"
            ],
            correct: 1,
            explanation: "The 'user:password@' portion represents basic authentication credentials in the URL (though this practice is not recommended for security reasons)."
        },
        {
            question: "What's the maximum recommended length for a URL?",
            options: [
                "2048 characters",
                "1000 characters",
                "500 characters",
                "No limit"
            ],
            correct: 0,
            explanation: "While there's no official limit, most browsers support URLs up to 2048 characters. Longer URLs might cause compatibility issues."
        },
        {
            question: "In 'https://sub1.sub2.example.com', what is 'sub1.sub2'?",
            options: [
                "Multiple subdomains",
                "Path parameters",
                "Domain extensions",
                "Server locations"
            ],
            correct: 0,
            explanation: "sub1.sub2 are multiple subdomains, where sub1 is a subdomain of sub2.example.com, and sub2 is a subdomain of example.com."
        },
        {
            question: "What does the '.co.uk' represent in 'https://example.co.uk'?",
            options: [
                "A single TLD",
                "A country code TLD with second-level domain",
                "A subdomain",
                "A protocol extension"
            ],
            correct: 1,
            explanation: ".co.uk is a combination where .uk is the country code TLD (United Kingdom) and .co is a second-level domain for commercial entities."
        },
        {
            question: "In 'https://example.com/path;param1=value1', what is ';param1=value1'?",
            options: [
                "Query parameters",
                "Matrix parameters",
                "Fragment identifier",
                "Path extension"
            ],
            correct: 1,
            explanation: "These are matrix parameters, an alternative to query parameters that are part of the path segment."
        },
        {
            question: "What's the purpose of '//' in 'https://example.com'?",
            options: [
                "To separate the protocol from the host",
                "To indicate the root directory",
                "To show it's a secure connection",
                "To separate subdomains"
            ],
            correct: 0,
            explanation: "The // separates the protocol (scheme) from the host portion of the URL."
        },
        {
            question: "In 'data:text/html,<h1>Hello</h1>', what type of URL is this?",
            options: [
                "Web URL",
                "Data URL",
                "Resource URL",
                "Local URL"
            ],
            correct: 1,
            explanation: "This is a data URL that contains actual content (in this case, HTML) rather than pointing to a resource location."
        },
        {
            question: "What's the difference in 'example.com/path/' vs 'example.com/path'?",
            options: [
                "They're exactly the same",
                "The first indicates a directory, the second might be a file",
                "The first is invalid",
                "The second is invalid"
            ],
            correct: 1,
            explanation: "The trailing slash typically indicates a directory, while no trailing slash might indicate a file or resource."
        },
        {
            question: "In 'https://example.com/products/?sort=asc&page=2', how many query parameters are there?",
            options: [
                "One",
                "Two",
                "Three",
                "None"
            ],
            correct: 1,
            explanation: "There are two query parameters: 'sort=asc' and 'page=2', separated by the & symbol."
        },
        {
            question: "What does percent-encoding %20 represent in a URL?",
            options: [
                "A space character",
                "A percentage sign",
                "A special character",
                "An encoded slash"
            ],
            correct: 0,
            explanation: "%20 is the percent-encoded representation of a space character in URLs."
        },
        {
            question: "In 'https://example.com:8080/path', why is 8080 used?",
            options: [
                "Version number",
                "Custom port number",
                "Protocol identifier",
                "Server ID"
            ],
            correct: 1,
            explanation: "8080 is a custom port number, commonly used for development servers or when running multiple services on the same host."
        },
        {
            question: "What's wrong with this URL: 'https://example.com/path?name=John Doe'?",
            options: [
                "Nothing wrong",
                "Space should be encoded",
                "Missing protocol",
                "Invalid domain"
            ],
            correct: 1,
            explanation: "The space in 'John Doe' should be percent-encoded as 'John%20Doe' or '+' in query parameters."
        },
        {
            question: "In 'https://example.com/en-US/products', what does 'en-US' typically represent?",
            options: [
                "A product category",
                "Language and region code",
                "Server location",
                "API version"
            ],
            correct: 1,
            explanation: "en-US typically represents language (English) and region (United States) in internationalized URLs."
        },
        {
            question: "What's the purpose of '..' in '../images/logo.png'?",
            options: [
                "File extension",
                "Parent directory reference",
                "Root directory",
                "Current directory"
            ],
            correct: 1,
            explanation: ".. refers to the parent directory, allowing navigation up one level in the directory structure."
        },
        {
            question: "What's the purpose of 'tel:+1-234-567-8900' URL?",
            options: [
                "To validate phone numbers",
                "To store contact information",
                "To initiate phone calls",
                "To send SMS messages"
            ],
            correct: 2,
            explanation: "The tel: protocol is used to initiate phone calls, especially on mobile devices."
        },
        {
            question: "In 'example.com/api/v2/users', what does 'v2' typically indicate?",
            options: [
                "Version 2 of the API",
                "Visual design 2",
                "Validation level 2",
                "Virtual server 2"
            ],
            correct: 0,
            explanation: "v2 typically indicates Version 2 of an API, allowing multiple API versions to coexist."
        },
        {
            question: "What type of URL is 'file:///C:/Users/document.pdf'?",
            options: [
                "Web URL",
                "Local file system URL",
                "Network share URL",
                "Cloud storage URL"
            ],
            correct: 1,
            explanation: "This is a local file system URL using the file:// protocol to access files on the local computer."
        },
        {
            question: "In a URL, what's the maximum recommended length for the hostname portion?",
            options: [
                "255 characters",
                "63 characters per label, 253 total",
                "1000 characters",
                "No limit"
            ],
            correct: 1,
            explanation: "Each label (part between dots) can be up to 63 characters, with a total hostname length up to 253 characters."
        },
            {
                question: "Which payment method is most commonly used for e-commerce in Nepal as of 2024?",
                options: [
                    "Cash on Delivery (COD)",
                    "International Credit Cards",
                    "eSewa",
                    "Bank Transfer"
                ],
                correct: 0,
                explanation: "Cash on Delivery remains the most popular payment method in Nepal due to trust issues and limited digital payment adoption."
            },
            {
                question: "What is 'Daraz Sajilo'?",
                options: [
                    "A payment gateway",
                    "A delivery service for remote areas",
                    "An interest-free EMI service",
                    "A seller training program"
                ],
                correct: 2,
                explanation: "Daraz Sajilo is an EMI (Equated Monthly Installment) service that allows customers to purchase products in installments without interest."
            },
            {
                question: "Which document is mandatory for individual sellers to register on major Nepali e-commerce platforms?",
                options: [
                    "PAN Card",
                    "Citizenship Certificate",
                    "VAT Registration",
                    "Company Registration"
                ],
                correct: 1,
                explanation: "Nepali citizenship certificate is a mandatory document for seller verification on most e-commerce platforms in Nepal."
            },
            {
                question: "What is the maximum amount allowed for digital wallet transactions in Nepal per day?",
                options: [
                    "Rs. 100,000",
                    "Rs. 200,000",
                    "Rs. 500,000",
                    "Rs. 1,000,000"
                ],
                correct: 1,
                explanation: "As per Nepal Rastra Bank regulations, digital wallets have a daily transaction limit of Rs. 200,000."
            },
            {
                question: "Which logistics challenge is most significant for e-commerce in Nepal?",
                options: [
                    "Difficult geographical terrain",
                    "International shipping",
                    "Warehouse capacity",
                    "Package tracking"
                ],
                correct: 0,
                explanation: "Nepal's diverse geographical terrain, from mountains to plains, makes last-mile delivery particularly challenging for e-commerce operations."
            },
            {
                question: "What is 'Hamro bazar'?",
                options: [
                    "A grocery delivery app",
                    "A local product marketplace",
                    "A wholesale platform",
                    "A digital payment system"
                ],
                correct: 1,
                explanation: "Hamro bazar is a marketplace platform focusing on promoting local Nepali products and sellers."
            },
            {
                question: "Which regulation affects online businesses in Nepal regarding return policies?",
                options: [
                    "7-day mandatory return policy",
                    "No mandatory return policy",
                    "30-day mandatory return policy",
                    "15-day mandatory return policy"
                ],
                correct: 1,
                explanation: "Nepal currently doesn't have mandatory return policy regulations for e-commerce, allowing platforms to set their own policies."
            },
            {
                question: "What is typically excluded from Cash on Delivery (COD) in Nepal?",
                options: [
                    "Electronics above Rs. 50,000",
                    "Food items",
                    "Clothing",
                    "Books"
                ],
                correct: 0,
                explanation: "Most e-commerce platforms restrict COD for high-value electronics to reduce return fraud and ensure serious buyers."
            },
            {
                question: "Which festival season sees the highest e-commerce sales in Nepal?",
                options: [
                    "Dashain-Tihar",
                    "New Year",
                    "Holi",
                    "Teej"
                ],
                correct: 0,
                explanation: "The Dashain-Tihar festival season traditionally sees the highest sales volume due to festive shopping and promotional offers."
            },
            {
                question: "What percentage of Nepal's internet users shop online (as of 2024)?",
                options: [
                    "Less than 10%",
                    "10-20%",
                    "20-30%",
                    "More than 30%"
                ],
                correct: 1,
                explanation: "Approximately 10-20% of internet users in Nepal shop online, showing growth potential in the e-commerce sector."
            },
            {
                question: "Which category has the highest online sales volume in Nepal?",
                options: [
                    "Electronics",
                    "Fashion",
                    "Groceries",
                    "Books"
                ],
                correct: 1,
                explanation: "Fashion items, including clothing and accessories, consistently show the highest sales volume in Nepali e-commerce."
            },
            {
                question: "What is 'Connect IPS' commonly used for in Nepali e-commerce?",
                options: [
                    "Social media marketing",
                    "Direct bank payments",
                    "Delivery tracking",
                    "Customer support"
                ],
                correct: 1,
                explanation: "Connect IPS is a popular digital payment system that allows direct bank-to-bank transfers for online purchases."
            },
            {
                question: "Which document is required for businesses to sell food items online in Nepal?",
                options: [
                    "DFTQC certification",
                    "VAT registration only",
                    "PAN card only",
                    "No specific requirement"
                ],
                correct: 0,
                explanation: "Department of Food Technology and Quality Control (DFTQC) certification is required for selling food items online."
            },
            {
                question: "What is the primary challenge for international e-commerce shipments to Nepal?",
                options: [
                    "High customs duties",
                    "Language barrier",
                    "Payment processing",
                    "Internet connectivity"
                ],
                correct: 0,
                explanation: "High customs duties and complex clearance processes are major challenges for international e-commerce shipments to Nepal."
            },
            {
                question: "Which popular international e-commerce platform is NOT officially available in Nepal?",
                options: [
                    "Amazon",
                    "Daraz",
                    "SastoDeal",
                    "Gyapu"
                ],
                correct: 0,
                explanation: "Amazon doesn't have official operations in Nepal, though some sellers offer import services from Amazon."
            },
          
                {
                    question: "What is the fundamental difference between static and dynamic web pages?",
                    options: [
                        "Static pages are faster than dynamic pages",
                        "Static pages have fixed content while dynamic pages generate content on request",
                        "Static pages don't use HTML",
                        "Dynamic pages don't work offline"
                    ],
                    correct: 1,
                    explanation: "Static pages serve the same content to all users, while dynamic pages generate content based on user requests, database queries, or other variables."
                },
                {
                    question: "Which statement about search engine crawlers is true?",
                    options: [
                        "They can always access password-protected content",
                        "They ignore robots.txt files",
                        "They follow links to discover new pages",
                        "They only crawl pages once"
                    ],
                    correct: 2,
                    explanation: "Search engine crawlers discover new content by following links from known pages to new pages, building a web of connections."
                },
                {
                    question: "What is the purpose of a sitemap.xml file?",
                    options: [
                        "To style the website",
                        "To guide users through the site",
                        "To help search engines discover and index pages",
                        "To store user data"
                    ],
                    correct: 2,
                    explanation: "sitemap.xml provides search engines with information about pages, videos, and other files on a site, and the relationships between them."
                },
                {
                    question: "Which technology typically identifies a dynamic web page?",
                    options: [
                        "File extension .html",
                        "File extension .jpg",
                        "URL parameters with ? and &",
                        "CSS styling"
                    ],
                    correct: 2,
                    explanation: "Dynamic pages often use URL parameters (after ? and separated by &) to pass data that determines the content to be displayed."
                },
                {
                    question: "What is 'client-side rendering'?",
                    options: [
                        "When the server creates the page",
                        "When the browser assembles the page using JavaScript",
                        "When images are compressed",
                        "When CSS styles are applied"
                    ],
                    correct: 1,
                    explanation: "Client-side rendering occurs when the browser uses JavaScript to construct the page content after receiving data from the server."
                },
                {
                    question: "What does SEO stand for and what is its main purpose?",
                    options: [
                        "Search Engine Operations - to maintain search engines",
                        "Search Engine Optimization - to improve website visibility in search results",
                        "Search Engine Order - to sort websites",
                        "Search Engine Output - to display search results"
                    ],
                    correct: 1,
                    explanation: "SEO (Search Engine Optimization) involves techniques to improve a website's visibility and ranking in search engine results pages."
                },
                {
                    question: "Which element is crucial for search engine optimization?",
                    options: [
                        "Colorful design",
                        "Social media links",
                        "Meta description",
                        "Large images"
                    ],
                    correct: 2,
                    explanation: "Meta descriptions provide search engines with summaries of web pages and appear in search results, affecting click-through rates."
                },
                {
                    question: "What is the primary advantage of static web pages?",
                    options: [
                        "Better user interaction",
                        "Faster loading and better security",
                        "More features",
                        "Better database integration"
                    ],
                    correct: 1,
                    explanation: "Static pages typically load faster because they don't require server-side processing, and they're generally more secure due to fewer attack vectors."
                },
                {
                    question: "What is a 'crawler trap' in web development?",
                    options: [
                        "A security feature",
                        "An infinite loop of links that traps search engine crawlers",
                        "A type of firewall",
                        "A backup system"
                    ],
                    correct: 1,
                    explanation: "A crawler trap is a situation where endless combinations of URLs or infinite recursion can trap search engine crawlers in an endless crawling loop."
                },
                {
                    question: "What is the fundamental difference between Web 2.0 and Web 3.0?",
                    options: [
                        "Web 3.0 is faster",
                        "Web 3.0 is decentralized and user-owned",
                        "Web 3.0 uses more graphics",
                        "Web 3.0 is cheaper to use"
                    ],
                    correct: 1,
                    explanation: "Web 3.0 emphasizes decentralization, blockchain technology, and user ownership of data and digital assets, unlike Web 2.0's centralized model."
                },
                {
                    question: "What is a blockchain?",
                    options: [
                        "A type of cryptocurrency",
                        "A decentralized, distributed ledger",
                        "An online banking system",
                        "A computer program"
                    ],
                    correct: 1,
                    explanation: "Blockchain is a distributed ledger technology that records transactions across multiple computers in a way that ensures security and transparency."
                },
                {
                    question: "What is a smart contract?",
                    options: [
                        "A legal document",
                        "Self-executing code on blockchain",
                        "A type of cryptocurrency",
                        "A digital signature"
                    ],
                    correct: 1,
                    explanation: "Smart contracts are self-executing contracts with terms directly written into code that automatically execute when predetermined conditions are met."
                },
                {
                    question: "What is a DAO?",
                    options: [
                        "Digital Art Organization",
                        "Decentralized Autonomous Organization",
                        "Data Analysis Operation",
                        "Digital Asset Ownership"
                    ],
                    correct: 1,
                    explanation: "DAOs are organizations represented by rules encoded as computer programs, transparent and controlled by network participants rather than central leadership."
                },
                {
                    question: "What is a non-fungible token (NFT)?",
                    options: [
                        "A type of cryptocurrency",
                        "A unique digital asset with proof of ownership",
                        "A computer file",
                        "A digital payment method"
                    ],
                    correct: 1,
                    explanation: "NFTs are unique digital tokens that represent ownership of specific digital or physical assets, verified on a blockchain."
                },
                {
                    question: "What is 'proof of work'?",
                    options: [
                        "Employment verification",
                        "Consensus mechanism used in blockchain mining",
                        "Digital signature",
                        "Work permit"
                    ],
                    correct: 1,
                    explanation: "Proof of work is a consensus mechanism requiring computational effort to validate transactions and create new blocks in a blockchain."
                },
                {
                    question: "What is a crypto wallet?",
                    options: [
                        "A physical wallet",
                        "Software/hardware for storing cryptocurrency private keys",
                        "An online bank account",
                        "A password manager"
                    ],
                    correct: 1,
                    explanation: "A crypto wallet stores private keys used to access and manage cryptocurrency holdings, not the actual cryptocurrencies themselves."
                },
                {
                    question: "What is DeFi?",
                    options: [
                        "Digital Finance",
                        "Decentralized Finance",
                        "Defined Financial Index",
                        "Digital Financial Institution"
                    ],
                    correct: 1,
                    explanation: "DeFi refers to financial services using smart contracts and blockchain technology, operating without traditional financial intermediaries."
                },
                {
                    question: "What is 'gas' in blockchain transactions?",
                    options: [
                        "Fuel for computers",
                        "Transaction fee paid to process operations",
                        "Energy consumption",
                        "Network speed"
                    ],
                    correct: 1,
                    explanation: "Gas refers to the fee required to successfully conduct a transaction or execute a contract on blockchain networks like Ethereum."
                },
                {
                    question: "What is a dApp?",
                    options: [
                        "Digital Application",
                        "Decentralized Application",
                        "Data Application",
                        "Download Application"
                    ],
                    correct: 1,
                    explanation: "dApps are applications that run on decentralized peer-to-peer networks rather than centralized servers."
                },
                {
                    question: "What is 'mining' in cryptocurrency?",
                    options: [
                        "Digging for digital coins",
                        "Process of validating transactions and adding them to blockchain",
                        "Creating new cryptocurrencies",
                        "Buying cryptocurrencies"
                    ],
                    correct: 1,
                    explanation: "Mining involves using computational power to validate transactions and add new blocks to the blockchain, often rewarded with cryptocurrency."
                },
                {
                    question: "What is a 'hard fork' in blockchain?",
                    options: [
                        "A mining tool",
                        "A major protocol change creating two separate chains",
                        "A type of crypto wallet",
                        "A trading strategy"
                    ],
                    correct: 1,
                    explanation: "A hard fork is a radical change to a network's protocol that makes previously invalid blocks/transactions valid (or vice-versa)."
                },
                {
                    question: "What is the 'metaverse'?",
                    options: [
                        "A social media platform",
                        "A virtual shared space merging physical and digital worlds",
                        "A type of cryptocurrency",
                        "A computer game"
                    ],
                    correct: 1,
                    explanation: "The metaverse is a network of 3D virtual worlds focused on social connection, often incorporating Web 3.0 technologies."
                },
                {
                    question: "What is 'proof of stake'?",
                    options: [
                        "Ownership proof",
                        "Consensus mechanism based on coin ownership",
                        "Mining method",
                        "Trading strategy"
                    ],
                    correct: 1,
                    explanation: "Proof of stake is a consensus mechanism where validators stake cryptocurrency to verify transactions, using less energy than proof of work."
                },
                {
                    question: "What is a 'seed phrase'?",
                    options: [
                        "A password",
                        "A recovery phrase for crypto wallets",
                        "A trading term",
                        "A type of smart contract"
                    ],
                    correct: 1,
                    explanation: "A seed phrase is a series of words that can be used to recover cryptocurrency wallet access if the original access method is lost."
                },
                {
                    question: "What is 'tokenization' in Web 3.0?",
                    options: [
                        "Password creation",
                        "Converting rights to an asset into digital tokens",
                        "Data encryption",
                        "File compression"
                    ],
                    correct: 1,
                    explanation: "Tokenization is the process of converting rights to an asset into a digital token on a blockchain."
                },
               
                    {
                        question: "What is a browser cache?",
                        options: [
                            "A password storage system",
                            "Temporary storage of web page resources",
                            "A browser's settings menu",
                            "An email inbox"
                        ],
                        correct: 1,
                        explanation: "Browser cache temporarily stores web resources (images, HTML, CSS, etc.) to speed up subsequent visits to the same pages."
                    },
                    {
                        question: "What's the purpose of 'Incognito' or 'Private' browsing mode?",
                        options: [
                            "Makes you anonymous online",
                            "Prevents websites from working",
                            "Doesn't save browsing history and cookies for that session",
                            "Makes browsing faster"
                        ],
                        correct: 2,
                        explanation: "Private browsing mode doesn't save history, cookies, or form data from the browsing session, but doesn't make you anonymous online."
                    },
                    {
                        question: "What is a browser's rendering engine responsible for?",
                        options: [
                            "Playing music",
                            "Converting HTML/CSS into visual display",
                            "Managing passwords",
                            "Downloading files"
                        ],
                        correct: 1,
                        explanation: "The rendering engine interprets HTML, CSS, and other resources to display the visual representation of a web page."
                    },
                    {
                        question: "What is WebKit?",
                        options: [
                            "A web development tool",
                            "A browser rendering engine",
                            "A programming language",
                            "An operating system"
                        ],
                        correct: 1,
                        explanation: "WebKit is a browser engine used by Safari and was previously used by Chrome, responsible for rendering web content."
                    },
                    {
                        question: "What are browser extensions?",
                        options: [
                            "Extra hardware components",
                            "Software add-ons that extend browser functionality",
                            "File extensions",
                            "Internet cables"
                        ],
                        correct: 1,
                        explanation: "Browser extensions are software programs that add new features or modify existing browser functionality."
                    },
                    {
                        question: "What is the primary function of a browser's JavaScript engine?",
                        options: [
                            "To display images",
                            "To execute JavaScript code",
                            "To save passwords",
                            "To download files"
                        ],
                        correct: 1,
                        explanation: "The JavaScript engine executes JavaScript code, enabling dynamic content and interactivity on web pages."
                    },
                    {
                        question: "What's the purpose of browser cookies?",
                        options: [
                            "To block ads",
                            "To store user data and preferences",
                            "To speed up downloads",
                            "To protect from viruses"
                        ],
                        correct: 1,
                        explanation: "Cookies store user data, preferences, and login information to enhance the browsing experience and remember user settings."
                    },
                    {
                        question: "What is a browser sandbox?",
                        options: [
                            "A security mechanism isolating web applications",
                            "A development tool",
                            "A children's browser mode",
                            "A download manager"
                        ],
                        correct: 0,
                        explanation: "A sandbox is a security mechanism that isolates running programs to prevent malicious code from affecting the system."
                    },
                    {
                        question: "What is cross-browser compatibility?",
                        options: [
                            "Sharing bookmarks between browsers",
                            "Website working consistently across different browsers",
                            "Installing multiple browsers",
                            "Browser synchronization"
                        ],
                        correct: 1,
                        explanation: "Cross-browser compatibility ensures websites work and look consistent across different web browsers."
                    },
                    {
                        question: "What is a browser's user agent string?",
                        options: [
                            "Username",
                            "Password",
                            "Text identifying the browser to websites",
                            "IP address"
                        ],
                        correct: 2,
                        explanation: "The user agent string identifies the browser, version, and operating system to websites and servers."
                    },
                    {
                        question: "What happens when you clear browser data?",
                        options: [
                            "Computer gets faster",
                            "Removes browsing history, cache, and cookies",
                            "Uninstalls the browser",
                            "Updates the browser"
                        ],
                        correct: 1,
                        explanation: "Clearing browser data removes stored information like history, cache, cookies, and other site data."
                    },
                    {
                        question: "What is the purpose of a browser's address bar?",
                        options: [
                            "Shows current time",
                            "Displays and accepts URLs",
                            "Shows battery status",
                            "Controls volume"
                        ],
                        correct: 1,
                        explanation: "The address bar displays the current URL and allows users to enter URLs or search terms."
                    },
                    {
                        question: "What is a progressive web app (PWA)?",
                        options: [
                            "A mobile app",
                            "A website that can function like a native app",
                            "A browser extension",
                            "A programming language"
                        ],
                        correct: 1,
                        explanation: "PWAs are websites that use modern web capabilities to deliver app-like experiences to users."
                    },
                    {
                        question: "What does SSL/TLS warning in browsers indicate?",
                        options: [
                            "Site is loading slowly",
                            "Potential security risk with the connection",
                            "Browser needs update",
                            "Site is offline"
                        ],
                        correct: 1,
                        explanation: "SSL/TLS warnings indicate potential security issues with the website's security certificate or connection."
                    },
                    {
                        question: "What is browser fingerprinting?",
                        options: [
                            "Security feature",
                            "Technique to identify users based on browser characteristics",
                            "Password manager",
                            "Download method"
                        ],
                        correct: 1,
                        explanation: "Browser fingerprinting collects information about browser configuration and system to create a unique identifier."
                    },
                    {
                        question: "What is a browser's DOM?",
                        options: [
                            "Download Manager",
                            "Document Object Model - representation of page structure",
                            "Digital Output Module",
                            "Display Output Manager"
                        ],
                        correct: 1,
                        explanation: "DOM (Document Object Model) is a programming interface that represents the structure of HTML documents."
                    }
                ,
                {
                    question: "Which HTTP status code should be used for a permanently moved page?",
                    options: [
                        "200",
                        "301",
                        "404",
                        "500"
                    ],
                    correct: 1,
                    explanation: "301 is the HTTP status code for permanent redirects, telling search engines and browsers that a page has permanently moved to a new location."
                },
                {
                    question: "What is the purpose of canonical tags?",
                    options: [
                        "To style web pages",
                        "To indicate the preferred version of duplicate pages",
                        "To compress images",
                        "To encrypt data"
                    ],
                    correct: 1,
                    explanation: "Canonical tags tell search engines which version of similar or duplicate pages should be considered the main version for indexing."
                },
                {
                    question: "What's the difference between 'crawling' and 'indexing'?",
                    options: [
                        "They are the same thing",
                        "Crawling finds pages, indexing analyzes and stores them",
                        "Crawling is faster than indexing",
                        "Indexing happens before crawling"
                    ],
                    correct: 1,
                    explanation: "Crawling is the discovery process of finding pages, while indexing involves analyzing and storing page content for search results."
                },
                {
                    question: "Which factor negatively affects search engine rankings?",
                    options: [
                        "Responsive design",
                        "Duplicate content",
                        "Regular updates",
                        "Valid HTML"
                    ],
                    correct: 1,
                    explanation: "Duplicate content can confuse search engines and dilute ranking signals, potentially leading to lower search rankings."
                },
                {
                    question: "What is 'server-side rendering' (SSR)?",
                    options: [
                        "Loading images on the server",
                        "Generating HTML on the server before sending to client",
                        "Using server-side databases",
                        "Storing files on the server"
                    ],
                    correct: 1,
                    explanation: "SSR involves generating the complete HTML on the server before sending it to the client, improving initial page load and SEO."
                },
                {
                    question: "What is the main purpose of robots.txt?",
                    options: [
                        "To block hackers",
                        "To instruct search engines which pages to crawl",
                        "To improve website speed",
                        "To store robot data"
                    ],
                    correct: 1,
                    explanation: "robots.txt provides instructions to search engine crawlers about which parts of the site should or should not be crawled."
                },
                {
                    question: "What is 'progressive enhancement' in web development?",
                    options: [
                        "Gradually adding new features",
                        "Starting with a basic experience and enhancing for modern browsers",
                        "Using progress bars",
                        "Increasing website speed"
                    ],
                    correct: 1,
                    explanation: "Progressive enhancement is a strategy of building websites that work for everyone at a basic level, then enhancing the experience for users with modern browsers."
                }
            
        
    
];