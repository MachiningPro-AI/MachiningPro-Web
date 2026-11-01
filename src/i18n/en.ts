export const en = {
  lang: 'en',

  nav: {
    capabilities: 'Capabilities',
    workflow: 'Workflow',
    industries: 'Industries',
    demo: 'Demo',
    collaborate: 'Collaborate',
    contact: 'Contact',
    launchDemo: 'Launch Demo',
  },

  hero: {
    badge: 'Engineering Preview · v0.5.0-demo',
    headline: 'Engineering Intelligence for Machining & Manufacturing Planning',
    subheadline: 'An engineering decision-support platform connecting technical drawings, CAD data, machining processes, manufacturing planning, quality and traceability.',
    ctaPrimary: 'Launch Live Demo',
    ctaSecondary: 'Explore Capabilities',
  },

  challenge: {
    sectionLabel: 'Engineering Challenge',
    title: 'The Complexity Behind Every Machined Part',
    subtitle: 'Modern machining requires integrating dozens of engineering decisions — from drawing interpretation to process capability — often managed manually with disconnected tools.',
    items: [
      {
        title: 'Disconnected Engineering Data',
        desc: 'CAD files, technical drawings, process notes and tool catalogues exist in separate systems with no structured link between them.',
      },
      {
        title: 'Manual Machine & Tool Selection',
        desc: 'Selecting the right machine, cutting tool and tool holder for each feature demands deep experience and time-consuming manual comparison.',
      },
      {
        title: 'Cutting Parameter Complexity',
        desc: 'Determining optimal cutting speeds, feeds and depths involves material properties, machine capability and tool life trade-offs.',
      },
      {
        title: 'GD&T Interpretation',
        desc: 'Translating geometric dimensioning and tolerancing requirements into process constraints and inspection criteria requires specialist knowledge.',
      },
      {
        title: 'Process Route Comparison',
        desc: 'Evaluating alternative manufacturing routes against time, cost, capability and equipment availability is rarely done systematically.',
      },
      {
        title: 'Cycle Time & Capability',
        desc: 'Estimating achievable cycle times and process capability (Cp/Cpk) before production requires structured engineering analysis.',
      },
      {
        title: 'Manufacturing Plan Preparation',
        desc: 'Creating consistent, traceable manufacturing plans — operation sequences, setups, tools, parameters — is labour-intensive and error-prone.',
      },
      {
        title: 'Inspection & Control Planning',
        desc: 'Systematically converting drawing requirements into inspection plans and control charts demands structured, repeatable processes.',
      },
      {
        title: 'Traceability',
        desc: 'Maintaining full traceability from drawing feature through process selection, parameter choice and quality record is a persistent challenge.',
      },
    ],
  },

  workflow: {
    sectionLabel: 'Engineering Workflow',
    title: 'End-to-End Machining Intelligence',
    subtitle: 'MachiningPro AI structures the complete engineering journey from drawing to traceable manufacturing plan.',
    steps: [
      { label: 'Drawing / CAD', desc: 'Import technical drawings, IGES, STEP, DXF' },
      { label: 'Feature Recognition', desc: '3D feature extraction and classification' },
      { label: 'GD&T Intelligence', desc: 'Tolerance interpretation and constraint mapping' },
      { label: 'Machine / Tool / Holder', desc: 'Structured selection from validated libraries' },
      { label: 'Cutting Parameters', desc: 'Parameter determination with engineering rationale' },
      { label: 'Process Route', desc: 'Route generation and optimisation' },
      { label: 'Cycle Time', desc: 'Structured cycle time estimation' },
      { label: 'Process Capability', desc: 'Cp/Cpk assessment against tolerance requirements' },
      { label: 'Manufacturing Plan', desc: 'Complete operation sheets and setup records' },
      { label: 'Inspection & Control Plan', desc: 'Traceable inspection and control documentation' },
      { label: 'Traceability / Export', desc: 'Full audit trail and structured export' },
    ],
  },

  capabilities: {
    sectionLabel: 'Platform Capabilities',
    title: 'Structured Engineering Across Every Discipline',
    subtitle: 'Twenty engineering domains connected in one decision-support platform.',
    items: [
      {
        title: 'CAD / IGES / STEP / DXF Analysis',
        desc: 'Import and analyse industry-standard CAD formats to extract geometry, features and metadata.',
      },
      {
        title: '3D Feature Recognition',
        desc: 'Automated identification and classification of machining features from 3D solid geometry.',
      },
      {
        title: 'Drawing Semantic Extraction',
        desc: 'Structured extraction of dimensions, tolerances, surface finish and notes from technical drawings.',
      },
      {
        title: 'GD&T Intelligence',
        desc: 'Interpretation of geometric tolerances and their translation into measurable process constraints.',
      },
      {
        title: 'Machine Library',
        desc: 'Structured catalogue of machine tools with capability parameters, spindle data and compatibility attributes.',
      },
      {
        title: 'Cutting Tool Library',
        desc: 'Comprehensive tool database with geometry, grade, coating and application data.',
      },
      {
        title: 'Tool Holder Library',
        desc: 'Validated tool holder catalogue with spindle interface and runout specifications.',
      },
      {
        title: 'Cutting Parameters',
        desc: 'Engineering-based parameter determination covering cutting speed, feed rate, depth of cut and tool life.',
      },
      {
        title: 'Compatibility Check',
        desc: 'Systematic verification of machine–tool–holder–workpiece compatibility before planning.',
      },
      {
        title: 'Configuration Selection',
        desc: 'Guided selection of optimal machining configurations with documented rationale.',
      },
      {
        title: 'Surface Roughness',
        desc: 'Ra/Rz prediction and verification against drawing surface finish requirements.',
      },
      {
        title: 'Tool Life',
        desc: 'Taylor-equation based tool life estimation and replacement interval planning.',
      },
      {
        title: 'Process Route Optimisation',
        desc: 'Structured evaluation and sequencing of machining operations for efficiency and capability.',
      },
      {
        title: 'Cycle Time Estimation',
        desc: 'Deterministic cycle time calculation from feeds, speeds, paths and setup allowances.',
      },
      {
        title: 'Process Capability',
        desc: 'Cp and Cpk assessment aligned to tolerance requirements and machine capability data.',
      },
      {
        title: 'Manufacturing Plan',
        desc: 'Generation of structured operation sheets, setup records and process documentation.',
      },
      {
        title: 'Inspection Plan',
        desc: 'Feature-by-feature inspection plan derived directly from drawing requirements.',
      },
      {
        title: 'Control Plan',
        desc: 'Structured control plans linking process parameters to quality characteristics.',
      },
      {
        title: 'NC Program Engineering Review',
        desc: 'Engineering-level review of NC programmes against process intent and part requirements.',
      },
      {
        title: 'Traceability / Export',
        desc: 'Full audit trail from drawing feature to process decision, exportable in structured formats.',
      },
    ],
  },

  demo: {
    sectionLabel: 'Platform Preview',
    title: 'Real Engineering Demo',
    subtitle: 'Explore MachiningPro AI through the live application and experience real engineering workflows.',
    ctaLaunch: 'Launch Live Demo',
    videoTitle: 'Watch Engineering Demo',
    videoDesc: 'See the full MachiningPro AI engineering workflow — from CAD import through feature recognition, GD&T analysis, process planning and traceability.',
    screenshotAlt: 'MachiningPro AI 3D feature view — engineering workspace with feature tree, 3D part rendering and process properties',
    screenshotLabel: '3D Feature View & Process Planning',
    screenshotDesc: 'MachiningPro AI 3D workspace showing feature tree, part geometry, turning operation and process properties panel.',
    moreScreensNote: 'Additional screens — dashboard, GD&T analysis, manufacturing plan, inspection plan, control plan and traceability export — are accessible in the live application.',
  },

  intelligence: {
    sectionLabel: 'Engineering Intelligence',
    title: 'AI-Assisted + Deterministic Engineering',
    subtitle: 'MachiningPro AI combines deterministic engineering logic with AI-assisted, explainable decision support.',
    description: 'Every engineering decision in MachiningPro AI is grounded in deterministic calculation and validated engineering knowledge. AI assists by surfacing relevant data, structuring comparisons and supporting documentation — but the engineer remains in control of every process selection, parameter choice and approval.',
    principles: [
      {
        title: 'Engineer Remains in Control',
        desc: 'All process selections, parameter approvals and manufacturing decisions are made by the engineer. MachiningPro AI provides structured information and decision support — never autonomous production approvals.',
      },
      {
        title: 'Deterministic Engineering Core',
        desc: 'Cutting parameter calculations, cycle time estimations, tool life assessments and capability indices are computed using established engineering equations and validated empirical data.',
      },
      {
        title: 'Explainable Decision Support',
        desc: 'Every recommendation surfaces its rationale — data sources, calculation methods and engineering constraints — so engineers can review, challenge and document their decisions.',
      },
      {
        title: 'No Unsupported Claims',
        desc: 'MachiningPro AI does not claim automatic production approval, collision-free CAM generation, automatic manufacturing release or uncontrolled AI decision-making.',
      },
    ],
  },

  industries: {
    sectionLabel: 'Industries',
    title: 'Built for Demanding Engineering Environments',
    subtitle: 'MachiningPro AI is designed for organisations where engineering rigour, process traceability and technical documentation standards are non-negotiable.',
    items: [
      { title: 'Automotive OEM', desc: 'Structured process planning and traceability for high-volume, high-complexity powertrain and body components.' },
      { title: 'Automotive Tier-1', desc: 'Supplier-side engineering capability for meeting OEM technical and quality requirements.' },
      { title: 'Defence', desc: 'Traceable manufacturing engineering documentation for regulated, high-consequence components.' },
      { title: 'Aerospace', desc: 'Rigorous process planning support for tight-tolerance, safety-critical machined parts.' },
      { title: 'General Machining', desc: 'Structured decision support for job shops and precision subcontractors managing diverse part types.' },
      { title: 'Rail', desc: 'Engineering documentation and process planning for safety-critical rolling stock components.' },
      { title: 'Industrial Machinery', desc: 'Manufacturing planning for complex mechanical assemblies and precision components.' },
      { title: 'Precision Manufacturing', desc: 'Tight-tolerance process engineering with systematic capability assessment.' },
      { title: 'Tooling & Fixtures', desc: 'Engineering documentation and process planning for specialist tooling and fixture manufacture.' },
    ],
  },

  value: {
    sectionLabel: 'Business Value',
    title: 'Data-Driven, Measurable Engineering Value',
    subtitle: 'MachiningPro AI supports operational improvement through verifiable engineering outputs, structured process knowledge and traceable decision support.',
    items: [
      {
        title: 'Faster Engineering Evaluation',
        desc: 'Structured workflows reduce the time engineers spend gathering, comparing and documenting manufacturing data.',
      },
      {
        title: 'Standardised Process Planning',
        desc: 'Consistent planning templates and validated libraries replace informal, individual-dependent processes.',
      },
      {
        title: 'Structured Selection Records',
        desc: 'Machine, tool and process selections are captured with documented rationale — not tribal knowledge.',
      },
      {
        title: 'Reusable Manufacturing Knowledge',
        desc: 'Process decisions, parameter choices and validated configurations become reusable engineering assets.',
      },
      {
        title: 'Reduced Manual Comparison Effort',
        desc: 'Compatibility checks, parameter lookups and route comparisons are structured and systematic.',
      },
      {
        title: 'Improved Engineering Traceability',
        desc: 'Full audit trail from drawing requirement through process selection to quality documentation.',
      },
      {
        title: 'More Consistent Planning',
        desc: 'Engineering quality does not vary with individual experience or availability.',
      },
      {
        title: 'Stronger Supplier Evaluation',
        desc: 'Technical capability assessments are structured and documented for supplier qualification.',
      },
    ],
  },

  architecture: {
    sectionLabel: 'Platform Architecture',
    title: 'Engineering Data Architecture',
    subtitle: 'A structured engineering data pipeline — from drawing import to traceable output.',
    layers: [
      { label: 'CAD / Drawing / NC Input', desc: 'IGES, STEP, DXF, PDF drawing formats' },
      { label: 'Engineering Data Layer', desc: 'Feature extraction, GD&T parsing, drawing semantics' },
      { label: 'Deterministic Engineering Engines', desc: 'Cutting parameters, cycle time, tool life, Cp/Cpk' },
      { label: 'AI Decision Support', desc: 'Structured recommendations with explainable rationale' },
      { label: 'Process Planning', desc: 'Operation sheets, setup records, routing' },
      { label: 'Quality & Traceability', desc: 'Inspection plans, control plans, audit trail, export' },
    ],
  },

  demoCta: {
    sectionLabel: 'Live Application',
    title: 'Experience MachiningPro AI',
    subtitle: 'The engineering preview is live. Explore the platform with your own data.',
    ctaPrimary: 'Launch MachiningPro AI',
    ctaSecondary: 'Watch Engineering Demo',
    maturity: 'Engineering Preview · v0.5.0-demo · Not Production Ready',
  },

  maturity: {
    sectionLabel: 'Product Maturity',
    title: 'Engineering Preview Status',
    status: 'Engineering Preview',
    version: 'v0.5.0-demo',
    description: 'MachiningPro AI is currently at Engineering Preview stage. The platform is suitable for technical evaluation, customer demonstration and engineering pilot programmes. It is not yet validated for production release approval, automated manufacturing authorisation or safety-critical use without independent engineering review.',
    labels: ['Engineering Preview', 'Customer Demo', 'v0.5.0-demo'],
    notReady: ['Production Release', 'Automated Manufacturing Approval', 'Safety-Critical Use Without Review'],
  },

  collaborate: {
    sectionLabel: 'Collaborate',
    title: 'Work With Us',
    subtitle: 'MachiningPro AI is actively seeking collaboration with engineering organisations, research institutions and technology partners.',
    items: [
      {
        title: 'OEM Pilot',
        desc: 'Structured engineering pilot with automotive or industrial OEM for real-world validation of manufacturing planning workflows.',
      },
      {
        title: 'Tier-1 Supplier Pilot',
        desc: 'Collaborative pilot with Tier-1 suppliers to integrate MachiningPro AI into supplier engineering and quoting processes.',
      },
      {
        title: 'Technology Partnership',
        desc: 'Technical integration with CAD, ERP, MES or quality management system providers.',
      },
      {
        title: 'Academic / Research',
        desc: 'Research collaboration with universities and engineering institutes in manufacturing, process planning or AI-assisted engineering.',
      },
      {
        title: 'Investor / Accelerator',
        desc: 'Investment and acceleration opportunities for scaling the MachiningPro AI platform in manufacturing markets.',
      },
      {
        title: 'Business Development',
        desc: 'Channel partnerships, reseller arrangements and geographic market development discussions.',
      },
    ],
  },

  contact: {
    sectionLabel: 'Contact',
    title: 'Get In Touch',
    subtitle: 'For engineering pilot enquiries, partnership discussions or general questions about MachiningPro AI.',
    form: {
      name: 'Full Name',
      org: 'Organisation',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Enquiry',
      subjects: [
        'OEM Pilot Enquiry',
        'Tier-1 Supplier Pilot',
        'Technology Partnership',
        'Academic / Research Collaboration',
        'Investment / Accelerator',
        'Business Development',
        'Technical Question',
        'Other',
      ],
    },
    disclaimer: 'We will respond to genuine engineering and business enquiries. This form does not expose any credentials, API keys or internal system information.',
  },

  footer: {
    tagline: 'Engineering Intelligence for Machining & Manufacturing Planning',
    links: {
      liveDemo: 'Live Demo',
      github: 'GitHub',
      disclaimer: 'Engineering Disclaimer',
      privacy: 'Privacy',
    },
    disclaimer: 'MachiningPro AI is an engineering decision-support platform at Engineering Preview stage (v0.5.0-demo). It is not validated for production release approval or safety-critical use without independent engineering review. All engineering decisions remain the responsibility of the qualified engineer using the platform.',
    copyright: '© 2026 MachiningPro AI. All rights reserved.',
  },
}

export type Translations = typeof en
