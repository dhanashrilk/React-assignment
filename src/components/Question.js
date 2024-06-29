export const QuestionData = [
  {
    id: "1",
    question:
      "Explain the concept of Object-Oriented Programming (OOP) and its four main principles.",
    answer:
      "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data in the form of fields (attributes) and code in the form of procedures (methods). The four main principles of OOP are encapsulation, abstraction, inheritance, and polymorphism. Encapsulation involves bundling the data and methods that operate on the data within one unit, like a class, and restricting access to some of the object's components. Abstraction means hiding the complex reality while exposing only the necessary parts. Inheritance is a mechanism where a new class inherits properties and behavior (methods) from an existing class. Polymorphism allows methods to do different things based on the object it is acting upon, meaning a single interface can represent different underlying data types.",
  },
  {
    id: "2",
    question:
      "What is a database transaction, and what are the properties of a transaction?",
    answer:
      "A database transaction is a unit of work performed within a database management system (DBMS) against a database, and it is treated in a coherent and reliable way independent of other transactions. The properties of a transaction are often referred to as ACID properties, which stand for Atomicity, Consistency, Isolation, and Durability. Atomicity ensures that all operations within the work unit are completed successfully; otherwise, the transaction is aborted at the point of failure, and previous operations are rolled back. Consistency ensures that the database properly changes state upon a successfully committed transaction. Isolation enables transactions to operate independently of and transparent to each other. Durability ensures that the result or effect of a committed transaction persists in case of a system failure.",
  },
  {
    id: "3",
    question: "Describe the difference between TCP and UDP protocols.",
    answer:
      "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are both transport layer protocols used for data transmission in a network. TCP is connection-oriented, meaning a connection is established and maintained until the application programs at each end have finished exchanging messages. TCP provides error checking and guarantees the delivery of data in the same order it was sent, making it reliable but slower than UDP. UDP, on the other hand, is connectionless, meaning it sends messages, called datagrams, without establishing a connection and without guaranteeing delivery, order, or error checking. This makes UDP faster but less reliable than TCP.",
  },
  {
    id: "4",
    question: "What is a binary search algorithm, and how does it work?",
    answer:
      "A binary search algorithm is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until the possible locations are reduced to just one. The process involves comparing the target value to the middle element of the list; if they are not equal, the half in which the target cannot lie is eliminated, and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found or the remaining half is empty.",
  },
  {
    id: "5",
    question:
      "Explain the concept of Big O Notation and its importance in computer science.",
    answer:
      "Big O Notation is a mathematical notation used to describe the upper bound of an algorithm's running time or space requirements in terms of the input size. It provides a high-level understanding of the algorithm's efficiency and performance. Big O Notation is important because it helps computer scientists and engineers analyze and compare the worst-case scenarios of different algorithms, ensuring that they choose the most efficient algorithm for their specific problem. It focuses on the growth rate of an algorithm's complexity, making it easier to evaluate the scalability and potential bottlenecks.",
  },
  {
    id: "6",
    question: "What is the difference between a process and a thread?",
    answer:
      "A process is an independent program in execution with its own memory space, while a thread is the smallest unit of a process that can be scheduled and executed. Threads within the same process share the same memory space and resources, allowing for efficient communication and data exchange. However, this also means that a problem in one thread can potentially affect others. Processes are isolated from each other, providing more stability and security, but inter-process communication is more complex and resource-intensive compared to threads.",
  },
  {
    id: "7",
    question: "Define and compare the terms 'recursion' and 'iteration'.",
    answer:
      "Recursion is a programming technique where a function calls itself in order to solve a problem. Each recursive call works on a smaller instance of the same problem until a base case is reached. Iteration, on the other hand, is a technique where a set of instructions is repeatedly executed using loops (for, while, do-while) until a certain condition is met. Recursion can be more intuitive and easier to implement for problems that can be naturally divided into similar sub-problems, such as tree traversals or factorial calculations. However, recursion can lead to higher memory usage due to call stack growth. Iteration is generally more efficient in terms of memory and performance but can be less intuitive for some problems.",
  },
  {
    id: "8",
    question:
      "What is the purpose of a cache memory, and how does it improve computer performance?",
    answer:
      "Cache memory is a small, high-speed memory located close to the CPU that stores frequently accessed data and instructions. Its purpose is to reduce the time it takes for the CPU to access data from the main memory (RAM). By keeping frequently used information in the cache, the CPU can retrieve it much faster, improving overall system performance. Cache memory operates at a speed closer to the CPU speed, significantly reducing latency and increasing the efficiency of data processing. Modern computers typically have multiple levels of cache (L1, L2, L3) to further enhance performance.",
  },
  {
    id: "9",
    question: "Explain the concept of normalization in database design.",
    answer:
      "Normalization is a database design technique used to reduce data redundancy and improve data integrity by organizing data into related tables. The process involves decomposing a large table into smaller tables and defining relationships between them according to certain rules, called normal forms. The most commonly used normal forms are the First Normal Form (1NF), Second Normal Form (2NF), and Third Normal Form (3NF). Each normal form addresses specific types of redundancy and dependency issues. Normalization ensures that the database structure is efficient, consistent, and easy to maintain, reducing the likelihood of anomalies during data operations like insertions, updates, and deletions.",
  },
  {
    id: "10",
    question: "What is a RESTful API, and what are its key principles?",
    answer:
      "A RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server, cacheable communications protocol, typically HTTP. The key principles of RESTful API include: 1) Statelessness: Each request from the client to the server must contain all the information needed to understand and process the request, and the server must not store any session information. 2) Client-Server Architecture: The client and server operate independently, allowing them to evolve separately. 3) Uniform Interface: A consistent interface between components, often including CRUD (Create, Read, Update, Delete) operations and resource-based URLs. 4) Cacheability: Responses from the server can be marked as cacheable or non-cacheable, improving performance by reducing the need for repeated requests. 5) Layered System: The architecture can have multiple layers, with each layer only knowing about its immediate interactions. 6) Code on Demand (optional): Servers can extend client functionality by transferring executable code.",
  },
];
