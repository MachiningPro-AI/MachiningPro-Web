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
    headline: 'Engineering Intelligence for CNC Machining & Manufacturing Planning',
    subheadline: 'An engineering decision-support platform connecting technical drawings, CAD data, CNC machining processes, cutting parameters, manufacturing planning, quality and traceability.',
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
    videoDesc: 'See the MachiningPro AI engineering workflow — from CAD and machining data through feature intelligence, process planning, quality and traceability.',
    narrationNote: 'English narration · Turkish subtitles available',
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

  machiningProcesses: {
    sectionLabel: 'CNC Machining Processes',
    title: 'Machining Process Engineering',
    subtitle: 'MachiningPro AI structures engineering knowledge across all primary CNC machining operations — from rough turning to precision finishing.',
    processes: [
      {
        id: 'turning',
        title: 'Turning',
        desc: 'Cylindrical material removal by rotating the workpiece against a stationary cutting insert. Covers rough turning, finish turning, facing, parting and profiling.',
        params: ['Vc (m/min)', 'f (mm/rev)', 'ap (mm)', 'Insert geometry'],
      },
      {
        id: 'milling',
        title: 'Milling',
        desc: 'Rotating multi-edge cutter removes material from a stationary workpiece. Covers face milling, pocket milling, contour milling and shoulder milling.',
        params: ['Vc (m/min)', 'fz (mm/tooth)', 'z (edges)', 'ae (mm)', 'ap (mm)'],
      },
      {
        id: 'drilling',
        title: 'Drilling',
        desc: 'Axial penetration of a rotating drill to create cylindrical holes. Covers through holes, blind holes, spot drilling and step drilling.',
        params: ['Vc (m/min)', 'f (mm/rev)', 'ap = D/2', 'Point geometry'],
      },
      {
        id: 'boring',
        title: 'Boring',
        desc: 'Single-point enlargement and finishing of an existing hole to achieve precise diameter, roundness and surface finish.',
        params: ['Vc (m/min)', 'f (mm/rev)', 'ap (mm)', 'Boring bar', 'IT grade'],
      },
      {
        id: 'threading',
        title: 'Threading',
        desc: 'Formation of helical thread profiles by single-point threading tools, taps or thread milling cutters. Covers external and internal threads.',
        params: ['Pitch (mm)', 'Thread form', 'Vc (m/min)', 'Infeed strategy'],
      },
      {
        id: 'finishing',
        title: 'Precision Finishing',
        desc: 'Final material removal passes to achieve tight dimensional tolerances and required surface finish Ra/Rz values.',
        params: ['Ra (µm)', 'Rz (µm)', 'rε nose radius', 'f (mm/rev)', 'ap (mm)'],
      },
    ],
  },

  machineTool: {
    sectionLabel: 'Machine Tool Intelligence',
    title: 'Machine Tool Engineering',
    subtitle: 'Structured machine capability data covering spindle performance, axis configuration, work envelope and tooling capacity.',
    machines: [
      {
        title: 'CNC Lathe',
        config: 'C-axis / Driven tools',
        specs: ['Spindle speed range', 'Spindle power & torque', 'Chuck diameter / bar capacity', 'Z-axis travel', 'X-axis cross slide', 'Tailstock'],
      },
      {
        title: '3-Axis Machining Centre',
        config: 'X/Y/Z vertical',
        specs: ['Spindle speed (max)', 'Spindle power / torque', 'Table size (X × Y)', 'Z-axis stroke', 'Tool magazine capacity', 'ATC time'],
      },
      {
        title: '5-Axis Machining Centre',
        config: 'X/Y/Z + A/B or A/C',
        specs: ['Simultaneous 5-axis', 'Tilt / rotary range', 'Spindle speed', 'Table diameter / capacity', 'Volumetric accuracy', 'Tool magazine'],
      },
      {
        title: 'Horizontal Machining Centre',
        config: 'X/Y/Z + B-axis pallet',
        specs: ['Pallet size', 'Spindle speed', 'Spindle power', 'X/Y/Z travel', 'B-axis resolution', 'APC (dual pallet)'],
      },
      {
        title: 'Turn-Mill Centre',
        config: 'C/Y-axis + milling spindle',
        specs: ['Main & sub spindle', 'Y-axis travel', 'Milling spindle speed', 'Bar capacity', 'Driven tool stations', 'B-axis (optional)'],
      },
    ],
    disclaimer: 'Machine capability parameters are illustrative. Actual values depend on specific machine models and configurations.',
    disclaimerTr: 'Tezgâh kapasite parametreleri örnektir. Gerçek değerler belirli makine modellerine ve konfigürasyonlara bağlıdır.',
  },

  cuttingTool: {
    sectionLabel: 'Cutting Tool Engineering',
    title: 'Cutting Tool Engineering',
    subtitle: 'Structured cutting tool knowledge — insert geometry, tool holders, material grades, coatings and application parameters.',
    categories: [
      {
        title: 'Turning Insert',
        desc: 'Indexable carbide insert for turning operations. Key parameters: shape (CNMG, DNMG, WNMG), size, nose radius rε, cutting edge angle, coating.',
        attrs: ['ISO shape code', 'Nose radius rε (mm)', 'Grade / coating', 'Cutting edge angle', 'Chip breaker'],
      },
      {
        title: 'Turning Tool Holder',
        desc: 'External tool holder that locates the insert and clamps it to the machine turret. Determines cutting direction and approach angle.',
        attrs: ['ISO designation', 'Shank size (h × b)', 'Insert clamping', 'Approach angle κ', 'Lead angle λ'],
      },
      {
        title: 'Indexable Milling Cutter',
        desc: 'Face or shoulder milling cutter with indexable inserts. Multiple cutting edges, replaceable inserts.',
        attrs: ['Diameter D (mm)', 'Number of inserts z', 'Insert geometry', 'Spindle interface', 'Max depth ap'],
      },
      {
        title: 'Solid Carbide End Mill',
        desc: 'Solid carbide cutter for precise milling, profiling and pocketing operations.',
        attrs: ['Diameter D (mm)', 'Flute count z', 'Helix angle', 'Corner radius rε', 'Coating', 'Shank type'],
      },
      {
        title: 'Twist Drill',
        desc: 'Standard drill for hole-making operations. Point geometry and flute design determine chip evacuation.',
        attrs: ['Diameter D (mm)', 'Point angle', 'Flute geometry', 'Grade / coating', 'Tolerance class'],
      },
      {
        title: 'Boring Bar',
        desc: 'Single-point internal boring tool for precision hole enlargement and finishing.',
        attrs: ['Min bore diameter', 'Max boring depth', 'Insert type', 'Anti-vibration', 'Shank interface'],
      },
    ],
  },

  materialRemoval: {
    sectionLabel: 'Material Removal Mechanics',
    title: 'Material Removal Mechanics',
    subtitle: 'Deterministic engineering equations govern cutting speed, feed rate, spindle speed and material removal rate in every machining operation.',
    turningTitle: 'Turning Mechanics',
    millingTitle: 'Milling Mechanics',
    formulas: [
      { label: 'Cutting Speed (Turning)', eq: 'Vc = π × D × n / 1000', unit: 'm/min', vars: 'D = diameter [mm], n = spindle speed [rpm]' },
      { label: 'Spindle Speed', eq: 'n = 1000 × Vc / (π × D)', unit: 'rpm', vars: 'Vc = cutting speed [m/min], D = diameter [mm]' },
      { label: 'Feed Rate', eq: 'Vf = f × n', unit: 'mm/min', vars: 'f = feed per revolution [mm/rev], n = spindle speed [rpm]' },
      { label: 'Milling Feed Rate', eq: 'Vf = fz × z × n', unit: 'mm/min', vars: 'fz = feed per tooth [mm/tooth], z = number of teeth, n = spindle speed [rpm]' },
      { label: 'Material Removal Rate (Turning)', eq: 'Q = ap × f × Vc', unit: 'cm³/min', vars: 'ap = depth of cut [mm], f = feed [mm/rev], Vc = cutting speed [m/min]' },
    ],
    labels: {
      workpiece: 'Workpiece',
      tool: 'Cutting Tool',
      edge: 'Cutting Edge',
      chip: 'Chip',
      vc: 'Cutting Speed Vc',
      feed: 'Feed f',
      ap: 'Depth of Cut ap',
      force: 'Cutting Force',
      fz: 'Feed per Tooth fz',
      z: 'Number of Teeth z',
      ae: 'Width of Cut ae',
    },
  },

  cuttingParamFlow: {
    sectionLabel: 'Cutting Parameter Selection',
    title: 'Cutting Parameter Intelligence',
    subtitle: 'Structured parameter selection from material and operation through to validated cutting data — deterministic engineering, not guesswork.',
    steps: [
      { label: 'Material', detail: 'Workpiece material grade, hardness, machinability' },
      { label: 'Operation', detail: 'Turning / Milling / Drilling / Boring / Threading' },
      { label: 'Machine Capability', detail: 'Spindle power, speed range, rigidity, stability' },
      { label: 'Cutting Tool', detail: 'Insert grade, geometry, coating, nose radius' },
      { label: 'Cutting Speed Vc', detail: 'Vc [m/min] — material × tool grade recommendation' },
      { label: 'Spindle Speed n', detail: 'n = 1000 × Vc / (π × D) [rpm]' },
      { label: 'Feed f / fz', detail: 'Feed per rev [mm/rev] or feed per tooth [mm/tooth]' },
      { label: 'Feed Rate Vf', detail: 'Vf = f × n or fz × z × n [mm/min]' },
      { label: 'Depths ap / ae', detail: 'Depth of cut [mm] and width of cut [mm]' },
      { label: 'Tool Life Check', detail: 'Taylor equation — estimated tool life validation' },
      { label: 'Surface Roughness', detail: 'Ra = f² / (8 × rε) [µm] — finish prediction' },
      { label: 'Process Capability', detail: 'Cp / Cpk assessment against tolerance requirements' },
    ],
  },

  engineeringCharts: {
    sectionLabel: 'Engineering Analysis',
    title: 'Engineering Relationships',
    subtitle: 'Formula-derived engineering relationships — not measured field data.',
    illustrativeNote: 'Illustrative engineering relationship',
    illustrativeNoteTr: 'Örnek mühendislik ilişkisi',
    charts: [
      {
        title: 'Spindle Speed vs Workpiece Diameter',
        desc: 'n = 1000 × Vc / (π × D) at constant Vc. Smaller diameters require higher spindle speeds to maintain cutting speed.',
        xLabel: 'Diameter D (mm)',
        yLabel: 'Spindle Speed n (rpm)',
      },
      {
        title: 'Feed Rate vs Spindle Speed',
        desc: 'Vf = f × n. Feed rate increases linearly with spindle speed at constant feed per revolution.',
        xLabel: 'Spindle Speed n (rpm)',
        yLabel: 'Feed Rate Vf (mm/min)',
      },
      {
        title: 'Milling Feed Rate — Effect of Tooth Count',
        desc: 'Vf = fz × z × n. Higher tooth count z increases feed rate proportionally at same fz and n.',
        xLabel: 'Spindle Speed n (rpm)',
        yLabel: 'Feed Rate Vf (mm/min)',
      },
      {
        title: 'Conceptual Tool Wear Progression',
        desc: 'Conceptual / normalized tool-wear progression showing break-in, steady wear and accelerating wear phases.',
        xLabel: 'Machining Time',
        yLabel: 'Flank Wear VB',
      },
    ],
  },

  surfaceRoughness: {
    sectionLabel: 'Surface Quality Engineering',
    title: 'Surface Quality Engineering',
    subtitle: 'Surface finish is a direct engineering output of cutting parameters, tool geometry and cutting conditions.',
    formula: 'Ra ≈ f² / (8 × rε)',
    formulaDesc: 'Theoretical surface roughness formula for turning. Ra in µm, f = feed per revolution [mm/rev], rε = nose radius [mm].',
    labels: {
      ra: 'Ra (arithmetic mean roughness)',
      rz: 'Rz (mean roughness depth)',
      feedMarks: 'Feed marks',
      noseRadius: 'Tool nose radius rε',
      peakToValley: 'Peak-to-valley height',
      direction: 'Lay direction',
    },
    factors: [
      { title: 'Feed Rate', desc: 'Higher feed per revolution increases surface roughness. Ra increases as f².' },
      { title: 'Nose Radius rε', desc: 'Larger nose radius reduces theoretical Ra. A 0.8 mm radius gives finer finish than 0.4 mm at the same feed.' },
      { title: 'Tool Condition', desc: 'Worn cutting edge increases Ra values. Tool wear monitoring is essential for consistent surface quality.' },
      { title: 'Cutting Speed', desc: 'At appropriate cutting speeds, built-up edge is avoided, giving consistent surface finish.' },
      { title: 'Vibration / Chatter', desc: 'Machine and workpiece rigidity directly affects achievable surface finish. Chatter produces characteristic regular defects.' },
    ],
  },

  processRoute: {
    sectionLabel: 'Process Route Engineering',
    title: 'Manufacturing Process Route',
    subtitle: 'Structured process routing for a synthetic stepped shaft / valve spool — illustrating end-to-end manufacturing sequence.',
    partName: 'Synthetic Stepped Shaft (Non-proprietary)',
    operations: [
      { op: '00', name: 'Raw Material', detail: 'Ø60 × 180mm bar stock, C45 steel', icon: 'raw' },
      { op: '05', name: 'Saw Cut', detail: 'Cut to length + allowance', icon: 'saw' },
      { op: '10', name: 'CNC Rough Turning', detail: 'Rough turn OD, face both ends, centre drill', icon: 'turn' },
      { op: '20', name: 'CNC Finish Turning', detail: 'Finish turn Ø50 ±0.02, Ø40 ±0.02, chamfers, radii', icon: 'finish' },
      { op: '25', name: 'Grooving', detail: 'Ø46 × 4mm groove for circlip', icon: 'groove' },
      { op: '30', name: 'Drilling / Internal Feature', detail: 'Ø12 axial hole × 60mm depth', icon: 'drill' },
      { op: '40', name: 'Deburring', detail: 'Manual deburring all edges and cross holes', icon: 'deburr' },
      { op: '50', name: 'Inspection', detail: 'Dimensional check per drawing. Record Cp/Cpk for critical features', icon: 'inspect' },
      { op: '55', name: 'Engineering Record', detail: 'Traceability record: material cert, tooling, parameters, results', icon: 'record' },
    ],
    synthetic: 'Synthetic non-proprietary geometry for illustration only.',
  },

  shopFloor: {
    sectionLabel: 'Engineering to Shop Floor',
    title: 'From Engineering Office to Shop Floor',
    subtitle: 'MachiningPro AI structures the engineering knowledge chain — from technical drawing to machined and inspected part with full traceability.',
    steps: [
      { label: 'Engineering Drawing', desc: 'Technical drawing with dimensions, tolerances, surface finish, GD&T' },
      { label: 'CAD Model', desc: 'IGES / STEP / DXF import, geometry extraction, feature recognition' },
      { label: 'Machine Selection', desc: 'Structured machine capability assessment and selection' },
      { label: 'Cutting Tool', desc: 'Insert, holder and tooling configuration with compatibility check' },
      { label: 'Process Plan', desc: 'Operation sequence, setups, cutting parameters, cycle time' },
      { label: 'NC Review', desc: 'Engineering review of NC programme against process intent' },
      { label: 'Machining', desc: 'CNC execution by the machine operator with approved process data' },
      { label: 'Inspection', desc: 'Dimensional and surface finish inspection against drawing requirements' },
      { label: 'Traceability', desc: 'Full engineering record: material, machine, tooling, parameters, results' },
    ],
  },
}

export type Translations = typeof en
