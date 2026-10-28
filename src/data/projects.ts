import type { Project, ProjectCategory } from '@/lib/types'

export const projectFilters: ReadonlyArray<{ value: ProjectCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'grc', label: 'GRC' },
  { value: 'technical', label: 'Technical' },
  { value: 'research', label: 'Research' },
]

/** Display name of a category, e.g. "Technical". */
export function categoryName(category: ProjectCategory): string {
  return projectFilters.find((filter) => filter.value === category)?.label ?? ''
}

export const projectsIntro = {
  title: "Things I've built and studied",
  courseworkTitle: 'More coursework',
  /** Shown on the featured card while its repository is private. */
  repoComingSoon: 'GitHub repository coming soon',
  howItWorksTitle: 'How it works',
  paperLink: 'Read the paper',
  eventLink: 'About the hackathon',
}

// TODO: more uni projects once Shreya confirms them (candidates: SEED Firewall Lab, Home Network
// Security Audit, ISO 27001 Risk Assessment Case Study, Packet Analysis with Wireshark, Budget
// Tracker Application).
export const projects: Project[] = [
  {
    slug: 'iso-27001-readiness-tool',
    title: 'ISO 27001 Readiness Assessment Tool',
    category: 'grc',
    tier: 'featured',
    categoryLabel: 'GRC tooling',
    place: 'Independent project',
    year: '2026',
    context: 'Independent project',
    status: 'In progress · target November 2026',
    summary: 'Automating pre-engagement assessment and scoping for audit teams.',
    notes: [],
    problem: [
      "Before an ISO 27001 engagement begins, a consultancy's audit team spends a lot of time gathering basic information from the client: structure, scope, systems, suppliers and existing security practices.",
      "It's repetitive work done through calls, emails and spreadsheets, and it has to happen before the team can estimate the engagement.",
    ],
    whatIDid: [
      'A guided client questionnaire: plain-English questions across organisational context, scope, ISMS clauses 4 to 10 and Annex A, with help text.',
      'An initial gap analysis mapped to ISO 27001:2022 clauses and Annex A controls.',
      'A draft Statement of Applicability.',
      'A starter risk register with likelihood, impact and linked controls.',
      'An effort estimate: indicative consultant days per phase (gap analysis, risk assessment, documentation, implementation support, internal audit), with configurable parameters.',
      'Discovery-call preparation: AI summaries and follow-up questions.',
    ],
    outcome: ['TODO: outcome once the tool is complete (target November 2026)'],
    learned: [
      'Translating ISO 27001 requirements into automatable logic.',
      'Designing effort-estimation models for audit engagements.',
      'Securing an LLM app against prompt injection.',
      'Protecting stored client data with encryption, access control and retention.',
      'Deploying and operating a containerised app in the cloud.',
    ],
    tags: ['Python', 'Streamlit', 'Claude API', 'Docker', 'Azure', 'ISO 27001:2022'],
    stack: [
      'Python',
      'Streamlit',
      'Pydantic',
      'Claude API (structured output)',
      'Docker',
      'Microsoft Azure',
      'GitHub Actions',
    ],
    links: { github: 'TODO: GitHub repository URL' },
    feature: {
      tagline: 'Automating pre-engagement assessment and scoping for audit teams',
      pitch:
        'Audit teams spend days on calls and spreadsheets before an ISO 27001 engagement even starts. My tool gives the client a guided questionnaire through a secure link, then hands the auditor a structured starting point before the first meeting.',
      quote: 'Rules decide. AI explains.',
      steps: [
        {
          title: 'Client questionnaire',
          text: 'Plain-English questions on scope, clauses 4 to 10 and Annex A, through an expiring link',
        },
        {
          title: 'Rules engine',
          text: 'Transparent gap scoring and effort estimates that can be traced and explained',
        },
        {
          title: 'Draft outputs',
          text: 'Gap analysis, Statement of Applicability, starter risk register, consultant-day estimate',
        },
        {
          title: 'Auditor review',
          text: 'Every output is a draft for professional judgement, never an audit conclusion',
        },
      ],
      dataNote: 'Client data encrypted, access-restricted and deleted after a set retention period',
      principles: [
        'Rules decide, AI explains: scoring and effort estimation use transparent rule-based logic. The AI layer only summarises and drafts questions, and never determines compliance status.',
        'Supports auditors rather than replacing them: all outputs are drafts.',
        'Client data is treated as sensitive: encrypted responses, consultant-only access, expiring client links and automatic deletion after a retention period.',
        'AI security is built in: free text is treated as untrusted and tested against prompt injection.',
      ],
      // TODO: which roadmap items are done?
      roadmap: [
        'Control mapping and question bank',
        'Scoring engine and gap analysis',
        'Client questionnaire and consultant view',
        'Effort estimation model',
        'AI summaries and prompt-injection testing',
        'Cloud deployment',
        'Documentation and demo',
      ],
    },
  },
  {
    slug: 'guardian-circle',
    title: 'Guardian Circle, RMIT Hackathon 2026',
    category: 'technical',
    tier: 'highlight',
    categoryLabel: 'Hackathon · Team ULTRON',
    year: 'Oct 2026',
    context: 'Hackathon · Team ULTRON',
    summary:
      'My idea, chosen by the team from five: a prototype that protects older people from financial abuse by requiring two of three trusted people to approve large payments.',
    notes: [
      {
        label: 'Outcome',
        text: 'Built on TideCloak threshold signing. We also reached 0.9642 validation accuracy on the Kaggle multilingual challenge.',
      },
    ],
    problem: [],
    whatIDid: [
      'Proposed the idea the team chose from five: large payments need approval from two of three trusted people.',
      'Built the prototype on TideCloak threshold signing.',
      'For the Kaggle multilingual challenge, we fine-tuned XLM-RoBERTa-large with Hugging Face on 2x NVIDIA T4 GPUs.',
      "The event ran over two days across three campuses (RMIT Melbourne, RMIT Vietnam and Taylor's University Malaysia), themed Security × Generative AI × Low-Resource Languages. Our team entered both the Kaggle and the Tide industry challenges.",
    ],
    outcome: [
      '0.9642 validation accuracy on the Kaggle multilingual challenge, and 0.9743 with tuned bias.',
    ],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['TideCloak', 'Python', 'Hugging Face'],
    stack: ['TideCloak', 'Python', 'Hugging Face', 'XLM-RoBERTa'],
    links: { event: 'https://rmit-hackathon.com/' },
  },
  {
    slug: 'secure-voting-platform',
    title: 'Secure e-voting platform',
    category: 'technical',
    tier: 'highlight',
    categoryLabel: 'Secure software · Team lead',
    place: 'RMIT',
    year: '2026',
    context: 'Team lead, owned Workstream B',
    summary:
      'A Python/Flask voting platform our team built across five workstreams, so election staff can run a vote that voters can trust and no single insider can quietly change the result.',
    notes: [
      {
        label: 'My role',
        text: 'Led the team and owned privileged access, dual authorisation, cryptography and audit: certificate-based staff login, admin rights that expire after 15 minutes, second-officer approval for every critical action, and a tamper-evident audit log.',
      },
      { label: 'Result', text: '593 automated positive and attack tests.' },
    ],
    problem: [],
    whatIDid: [
      'Led the team and owned Workstream B: privileged access, dual authorisation, cryptography and audit.',
      'Phishing-resistant staff login: a client certificate over mTLS plus Argon2id.',
      'Just-in-time privilege elevation with a 15-minute expiry, so no account holds standing admin rights.',
      'Maker-checker approval of the exact payload digest, enforced in code and by MySQL triggers, and executed atomically at most once.',
      'A tamper-evident audit log with HMAC hash chains, signed checkpoints and secret redaction.',
      'A crypto-agility service that rotates algorithms and keys by policy.',
    ],
    outcome: ['593 automated positive and attack tests.'],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['Python', 'Flask', 'MySQL', 'mTLS', 'Docker'],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'Docker', 'Nginx', 'mTLS'],
    links: { github: 'TODO: GitHub repository URL' },
  },
  {
    slug: 'web-app-pentest',
    title: 'Web application penetration test & remediation',
    category: 'technical',
    tier: 'highlight',
    categoryLabel: 'Penetration test · Individual',
    place: 'RMIT',
    year: '2026',
    context: 'Individual',
    summary:
      'A structured assessment of a containerised PHP/MySQL employee app: reconnaissance, threat modelling, vulnerability discovery, exploitation and reporting.',
    notes: [
      {
        label: 'Outcome',
        text: 'Exploited a SQL injection to bypass login and expose employee records, then fixed the root cause with prepared statements.',
      },
    ],
    problem: [],
    whatIDid: [
      'Assessed a containerised PHP/MySQL employee app through reconnaissance, threat modelling, vulnerability discovery, exploitation and reporting.',
      'Exploited a SQL injection to bypass login and expose employee records, including salary, SSN and contact details.',
      'Traced the root cause to unsanitised input concatenated into SQL.',
    ],
    outcome: [
      'Fixed the root cause with prepared statements, with input sanitisation as defence-in-depth.',
    ],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['SQL injection', 'PHP', 'MySQL', 'Docker'],
    stack: ['SQL injection', 'PHP', 'MySQL', 'Docker', 'Linux'],
    links: {},
  },
  {
    slug: 'mediassist',
    title: 'MediAssist: Autonomous Medicine Delivery Solution for Hospitals',
    cardTitle: 'MediAssist: autonomous medicine delivery for hospitals',
    category: 'research',
    tier: 'research',
    categoryLabel: 'Research · First author',
    place: 'IEEE ICCAMS',
    year: 'Jul 2025',
    context: 'Undergraduate thesis · First author',
    summary:
      'My undergraduate thesis: a low-cost robot that delivers medicine inside hospitals without changing their infrastructure. It uses GPS, compass and ultrasonic sensors with an ESP32 for real-time sensing and BFS path planning, and staff dispatch it from an Arduino Cloud app.',
    notes: [],
    problem: [],
    whatIDid: [
      'Built a low-cost robot that delivers medicine inside hospitals without changing their infrastructure.',
      'Used GPS, compass and ultrasonic sensors with an ESP32 for real-time sensing, and BFS path planning to find its route.',
      'Staff dispatch it from an Arduino Cloud app.',
    ],
    outcome: [
      'Published by IEEE at ICCAMS 2025 in Bangalore, with me as first author. DOI: 10.1109/ICCAMS65118.2025.11234501.',
    ],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['ESP32', 'BFS path planning', 'Arduino Cloud', 'IEEE'],
    stack: ['ESP32', 'GPS, compass and ultrasonic sensors', 'BFS path planning', 'Arduino Cloud'],
    links: { paper: 'https://ieeexplore.ieee.org/document/11234501' },
    publisher: { name: 'IEEE', library: 'Xplore' },
  },
  {
    slug: 'healthcare-risk-management-plan',
    title: 'Cyber security risk management plan for a healthcare network',
    category: 'grc',
    tier: 'coursework',
    categoryLabel: 'GRC · Healthcare',
    place: 'RMIT',
    year: '2026',
    context: 'Individual coursework',
    summary:
      'A six-stage risk lifecycle for a simulated multi-site hospital network, covering patient records, telehealth and medical IoT devices.',
    oneLiner: 'Six-stage risk lifecycle mapped to the Privacy Act, NDB scheme and Essential Eight',
    notes: [],
    problem: [
      'A simulated multi-site hospital network needed a cyber security risk management plan covering patient records, telehealth and medical IoT devices.',
    ],
    whatIDid: [
      'Structured the plan around six stages: risk identification; threat and vulnerability assessment; risk analysis and prioritisation; risk mitigation; monitoring and incident response; continuous improvement.',
      'Assessed confidentiality, integrity and availability risks across EHRs, telehealth and medical IoT, with realistic threat scenarios and proportionate controls (MFA, network segmentation, encryption, privileged access management, SIEM monitoring).',
      'Mapped controls to the Privacy Act 1988, the Health Records Act 2001 (Vic) and the Notifiable Data Breaches scheme, aligned with the ACSC Essential Eight.',
    ],
    outcome: [
      'A structured visual model and written report translating technical risk into business recommendations for a non-technical audience.',
    ],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['Privacy Act 1988', 'NDB scheme', 'Essential Eight', 'Health Records Act (Vic)'],
    stack: ['Risk assessment', 'ACSC Essential Eight', 'Privacy Act 1988', 'NDB scheme'],
    links: {},
  },
  {
    slug: 'healthcare-breach-root-cause',
    title: 'Root cause of a real healthcare data breach',
    category: 'grc',
    tier: 'coursework',
    categoryLabel: 'Incident analysis',
    place: 'RMIT',
    year: '2026',
    context: 'Individual coursework',
    summary:
      'Traced a publicly reported breach to legacy credentials that were never decommissioned, and proposed the controls that would have stopped it.',
    oneLiner:
      'Traced to legacy credentials that were never decommissioned, with prioritised controls',
    notes: [],
    problem: [
      'A real-world healthcare organisation suffered a publicly reported data breach. The task was to work out why it happened and what would have prevented it.',
    ],
    whatIDid: [
      'Researched a real-world healthcare data breach from public reporting.',
      'Evaluated its scope, the types of data affected and the financial and legal exposure.',
      'Identified the root cause: inadequate decommissioning of legacy system credentials.',
    ],
    outcome: [
      'Prioritised controls (privileged access management, segmentation, continuous monitoring, data minimisation, third-party and vendor risk management) linked to HIPAA and Australian privacy obligations.',
    ],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['HIPAA', 'Privacy law', 'Vendor risk'],
    stack: ['Incident analysis', 'HIPAA', 'Australian privacy law'],
    links: {},
  },
  {
    slug: 'network-audit-firewall-policy',
    title: 'Network security audit and firewall policy',
    category: 'technical',
    tier: 'coursework',
    categoryLabel: 'Technical audit',
    place: 'RMIT',
    year: '2026',
    summary:
      'Default-deny iptables rules across departmental servers, an exposure audit with Nmap, and a TLS 1.3 handshake inspected in Wireshark.',
    oneLiner: 'Default-deny iptables, Nmap exposure audit, TLS 1.3 analysis in Wireshark',
    notes: [],
    problem: [
      'Departmental servers needed enterprise firewall policies, and the network needed auditing for exposed services and unencrypted traffic.',
    ],
    whatIDid: [
      'Designed enterprise firewall policies with iptables, enforcing default-deny and least-privilege segmentation.',
      'Ran network reconnaissance with Nmap: open ports, service versions and OS fingerprinting.',
      'Analysed live traffic in Wireshark, including a full TLS 1.3 handshake and cipher suite evaluation.',
    ],
    outcome: ['Documented exposure findings and identified unencrypted traffic risks.'],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['iptables', 'Nmap', 'Wireshark', 'Linux'],
    stack: ['iptables', 'Nmap', 'Wireshark', 'Linux'],
    links: {},
  },
  {
    slug: 'applied-cryptography',
    title: 'Applied cryptography and secure communications',
    category: 'technical',
    tier: 'coursework',
    categoryLabel: 'Cryptography',
    place: 'RMIT',
    year: '2026',
    summary:
      'AES, RSA and GPG workflows across simulated organisations, plus a man-in-the-middle demonstration and the controls that prevent it.',
    oneLiner: 'AES, RSA and GPG workflows, plus a Diffie-Hellman man-in-the-middle demonstration',
    notes: [],
    problem: [
      'A simulated government secure-communications engagement needed working encryption workflows and advice on preventing interception.',
    ],
    whatIDid: [
      'Built symmetric (AES-CBC) and asymmetric (RSA, GPG) encryption workflows, including key generation, digital signatures and secure file exchange across simulated identities.',
      'Demonstrated a Diffie-Hellman man-in-the-middle attack.',
    ],
    outcome: [
      'Mitigation recommendations (PKI, mutual TLS, perfect forward secrecy, out-of-band verification) for a simulated government secure-communications engagement.',
    ],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['AES', 'RSA', 'GPG', 'PKI'],
    stack: ['AES-CBC', 'RSA', 'GPG', 'Diffie-Hellman'],
    links: {},
  },
]
