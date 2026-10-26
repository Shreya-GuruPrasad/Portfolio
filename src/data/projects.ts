import type { Project, ProjectCategory } from '@/lib/types'

export const projectFilters: ReadonlyArray<{ value: ProjectCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'grc', label: 'GRC' },
  { value: 'technical', label: 'Technical' },
  { value: 'research', label: 'Research' },
]

export const projectsIntro = {
  title: "Things I've built and studied",
}

// TODO: more uni projects once Shreya confirms them (candidates: SEED Firewall Lab, Home Network
// Security Audit, ISO 27001 Risk Assessment Case Study, Packet Analysis with Wireshark, Budget
// Tracker Application).
export const projects: Project[] = [
  {
    slug: 'iso-27001-readiness-tool',
    title: 'ISO 27001 Readiness Assessment Tool',
    category: 'grc',
    categoryLabel: 'GRC tooling',
    place: 'Independent project',
    year: '2026',
    context: 'Independent project',
    status: 'In progress · target November 2026',
    summary: 'Automating pre-engagement assessment and scoping for audit teams.',
    problem: [
      "Before an ISO 27001 engagement begins, a consultancy's audit team spends a lot of time gathering basic information from the client: structure, scope, systems, suppliers and existing security practices.",
      "It's repetitive work done through calls, emails and spreadsheets, and it has to happen before the team can estimate the engagement.",
    ],
    whatIDid: [
      'A guided client questionnaire: plain-English questions across organisational context, scope, ISMS clauses 4–10 and Annex A, with help text.',
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
    featured: true,
    image: { illustration: 'readiness', label: 'Illustration · screenshots coming soon' },
    screenshots: [],
    feature: {
      tagline: 'Automating pre-engagement assessment and scoping for audit teams',
      pitch:
        'Audit teams spend days on calls and spreadsheets before an ISO 27001 engagement even starts. My tool gives the client a guided questionnaire through a secure link, then hands the auditor a gap analysis, a draft Statement of Applicability, a starter risk register and an effort estimate.',
      quote: 'Rules decide. AI explains.',
      quoteDetail:
        'Scores come from transparent rules. The AI only summarises and suggests follow-up questions, and the app is tested against prompt injection.',
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
    slug: 'healthcare-risk-management-plan',
    title: 'Cyber risk management plan for a healthcare network',
    category: 'grc',
    categoryLabel: 'GRC · Healthcare',
    place: 'RMIT',
    year: '2026',
    context: 'Individual coursework',
    summary:
      'A six-stage risk lifecycle for a simulated multi-site hospital network, covering patient records, telehealth and medical IoT devices.',
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
    featured: false,
    image: { illustration: 'risk-matrix', label: 'Risk matrix' },
    screenshots: [],
  },
  {
    slug: 'healthcare-breach-root-cause',
    title: 'Root cause of a real healthcare data breach',
    category: 'grc',
    categoryLabel: 'Incident analysis',
    place: 'RMIT',
    year: '2026',
    context: 'Individual coursework',
    summary:
      'Traced a publicly reported breach to legacy credentials that were never decommissioned, and proposed the controls that would have stopped it.',
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
    featured: false,
    image: { illustration: 'root-cause', label: 'Root cause chain' },
    screenshots: [],
  },
  {
    slug: 'network-audit-firewall-policy',
    title: 'Network security audit and firewall policy',
    category: 'technical',
    categoryLabel: 'Technical audit',
    place: 'RMIT',
    year: '2026',
    summary:
      'Default-deny iptables rules across departmental servers, an exposure audit with Nmap, and a TLS 1.3 handshake inspected in Wireshark.',
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
    featured: false,
    image: { illustration: 'network', label: 'Segmented network' },
    screenshots: [],
  },
  {
    slug: 'applied-cryptography',
    title: 'Applied cryptography and secure communications',
    category: 'technical',
    categoryLabel: 'Cryptography',
    place: 'RMIT',
    year: '2026',
    summary:
      'AES, RSA and GPG workflows across simulated organisations, plus a man-in-the-middle demonstration and the controls that prevent it.',
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
    featured: false,
    image: { illustration: 'crypto', label: 'Secure exchange' },
    screenshots: [],
  },
  {
    slug: 'ieee-thesis',
    // TODO: paper title
    title: 'Final-year thesis, published by IEEE',
    category: 'research',
    categoryLabel: 'Research',
    place: 'RNSIT',
    year: '2025',
    context: 'Final-year thesis',
    summary: 'My undergraduate thesis, published as a paper on IEEE Xplore.',
    problem: ['TODO: one-line summary of the paper'],
    whatIDid: ["TODO: Shreya's role in the research"],
    outcome: ['Published as a paper on IEEE Xplore.'],
    learned: ['TODO: what Shreya learned from this project'],
    tags: ['IEEE Xplore'],
    stack: [],
    links: { paper: 'https://ieeexplore.ieee.org/document/11234501' },
    featured: false,
    image: { illustration: 'paper', label: 'Conference paper' },
    screenshots: [],
  },
]
