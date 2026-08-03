export type Project = {
  index: string;
  slug: string;
  title: string;
  status: string;
  summary: string;
  role: string;
  technologies: string[];
  proof: string;
  problem: string;
  contributions: string[];
  architecture: string[];
  benchmarks?: { metric: string; result: string; protocol: string }[];
  limitations: string[];
  links: { label: string; href: string; kind: "source" | "demo" }[];
  featured: boolean;
};
export const projects: Project[] = [
  {
    index: "01",
    slug: "echo",
    title: "Echo",
    status: "Private pre-release product",
    summary:
      "A clean, local-first macOS voice workspace for dictation, meetings, evidence-grounded notes, and structured memory.",
    role: "Product direction, Swift architecture, local-model integration, evaluation, reliability, and private release engineering.",
    technologies: [
      "Swift",
      "SwiftUI",
      "Core ML",
      "FluidAudio",
      "MLX Swift",
      "Qwen",
    ],
    proof:
      "Deterministic vocabulary correction reduced delivered-text WER from 4.74% to 4.09% on Echo’s retained 13-fixture generated regression suite.",
    problem:
      "Voice software is useful only when capture is dependable, private speech stays private, model behavior is measurable, and final text reaches the right application safely. Echo treats those concerns as one product rather than a transcription demo.",
    contributions: [
      "Designed a clean Swift package with separate core, speech, macOS delivery, local intelligence, app, benchmark, and test targets.",
      "Integrated explicit local model preparation so ordinary dictation never triggers an unexpected download.",
      "Built deterministic vocabulary and formatting stages that preserve raw transcript evidence.",
      "Connected meeting transcripts to evidence-grounded summaries, decisions, actions, and graph-ready Obsidian knowledge.",
      "Added signing, packaging, restart-soak, release-acceptance, and private-tester DMG gates.",
    ],
    architecture: [
      "EchoCore defines dictation, meetings, evidence, memory, benchmarks, and Obsidian contracts.",
      "EchoSpeech runs local Parakeet recognition through FluidAudio and evaluates challenger routes.",
      "EchoIntelligence runs local Qwen meeting intelligence through MLX Swift.",
      "EchoMac owns permissions, capture, hotkeys, status, and safe text delivery.",
    ],
    benchmarks: [
      {
        metric: "Generated-suite delivered WER",
        result: "4.09% after deterministic correction",
        protocol:
          "Model: NVIDIA Parakeet TDT 0.6B v3 through FluidAudio 0.12.6/Core ML. Hardware: Apple-silicon Mac. Dataset: 13 generated fixtures—11 speech plus 2 silence/noise—covering English, Spanish, code-switching, numbers, and technical terms. Metric: corpus word error rate after final text correction. Timing boundary: prepared-model inference only; correction adds negligible measured cost. Echo-measured regression evidence, not an independent or published leaderboard score; generated speech is easier than diverse live microphones.",
      },
      {
        metric: "Technical-term fixture WER",
        result: "7.14% → 0%",
        protocol:
          "Same model, runtime, and Apple-silicon hardware. Dataset: one retained generated technical-language fixture. Metric: word error rate before and after deterministic delivered-text correction; timing excludes model preparation and UI delivery. Echo-measured narrow regression: a known ‘Quen’ → ‘Qwen’ rule was corrected, so this does not establish general acoustic or vocabulary accuracy.",
      },
      {
        metric: "Public AA-WER subset",
        result: "3.25% VoxPopuli · 9.13% Earnings22",
        protocol:
          "Model: NVIDIA Parakeet TDT 0.6B v3 through the production Core ML route. Hardware: Apple-silicon Mac. Dataset: all 634 publicly released AA-WER v2 VoxPopuli and Earnings22 samples, 3.89 hours. Metric: normalized corpus WER; timing boundary covers prepared-model transcription, not download or UI delivery. Echo-measured on a published public subset, not independently reproduced or an official AA-WER score: AgentTalk and the complete official normalizer were unavailable.",
      },
    ],
    limitations: [
      "Source code and underlying evidence files are not public.",
      "Current neural weights are upstream models; Echo enhances the product and inference pipeline rather than claiming newly trained foundation-model weights.",
      "Generated speech is easier than diverse microphones, accents, far-field rooms, and interruptions.",
      "Public distribution and final live-dictation acceptance remain pre-release work.",
    ],
    links: [
      {
        label: "Open the Echo showcase",
        href: "https://echo-local-intelligence.pages.dev/",
        kind: "demo",
      },
    ],
    featured: true,
  },
  {
    index: "02",
    slug: "agent-launch",
    title: "Agent Launch Lab",
    status: "Open source",
    summary:
      "A model- and runtime-independent reference for permissions, mission contracts, artifact validation, and evidence-backed AI workflows.",
    role: "Architecture, contract design, reference implementation, workflow example, and tests.",
    technologies: [
      "Python",
      "Typed contracts",
      "Workflow gates",
      "Audit evidence",
    ],
    proof:
      "The reference workflow blocks undeclared permissions and cannot pass until its required research and draft-only artifacts satisfy explicit validators.",
    problem:
      "Agent frameworks provide tools and model loops, but business workflows also need enforceable permissions, stable artifacts, validation gates, and a terminal definition of done.",
    contributions: [
      "Separated mission contracts from runtime handlers so providers and sandboxes remain replaceable.",
      "Implemented pre-execution permission checks and deterministic artifact validators.",
      "Created an audit record for step, gate, and mission transitions.",
      "Built a sanitized lead-to-artifact workflow without network or messaging permission.",
    ],
    architecture: [
      "Intake defines a bounded objective and structured inputs.",
      "Mission contracts declare steps, permissions, artifacts, and validators.",
      "Runtime handlers perform work without controlling promotion.",
      "Gates and audit evidence determine whether the run passed.",
    ],
    limitations: [
      "This is a compact reference implementation, not a distributed workflow service.",
      "Production model, sandbox, identity, persistence, and observability adapters remain external.",
    ],
    links: [
      {
        label: "View source",
        href: "https://github.com/EmilianoOnTheRunn/agent-launch-lab",
        kind: "source",
      },
    ],
    featured: true,
  },
  {
    index: "03",
    slug: "ad-video-engine",
    title: "Ad Video Engine",
    status: "Open source",
    summary:
      "A brief-driven Python engine that plans, ranks, and packages short-form ad campaigns into reviewable production artifacts.",
    role: "Product definition, campaign contract, planner abstraction, ranking, CLI, tests, and documentation.",
    technologies: ["Python", "YAML", "Ollama", "Provider adapters", "Pytest"],
    proof:
      "One validated brief produces six scored concepts and three stable ad specifications plus posting copy, QA, and a manifest.",
    problem:
      "Creative production becomes difficult to repeat when strategy, prompting, scoring, rendering, and review live in separate tools.",
    contributions: [
      "Defined a required promotion-brief contract around audience, offer, pain, proof, and tone.",
      "Added interchangeable local-model and deterministic planners.",
      "Ranked concepts before rendering and retained a stable JSON contract.",
      "Kept every campaign artifact reviewable before paid generation or publication.",
    ],
    architecture: [
      "YAML brief validation establishes the campaign boundary.",
      "A planner proposes themes, hooks, scripts, and prompts.",
      "Scoring selects three concepts and creates AdSpec records.",
      "Output services write specifications, posting copy, QA, and a manifest.",
    ],
    limitations: [
      "The repository does not claim generated campaigns outperform human creative direction.",
      "Paid rendering requires separate credentials and human review.",
      "The public example contains no real client data or performance outcome.",
    ],
    links: [
      {
        label: "View source",
        href: "https://github.com/EmilianoOnTheRunn/ad-video-engine",
        kind: "source",
      },
    ],
    featured: true,
  },
  {
    index: "04",
    slug: "creatorstack",
    title: "CreatorStack Systems",
    status: "Open-source tools and attributed adaptation",
    summary:
      "Lead research and cloud-agent workflows for turning public business signals into governed, reviewable artifacts.",
    role: "Workflow design, deterministic lead scoring, local-model enrichment, CreatorStack skills, and safety boundaries.",
    technologies: [
      "Python",
      "Ollama",
      "Beautiful Soup",
      "TypeScript",
      "Vercel Sandbox",
    ],
    proof:
      "The local lead agent can run from labeled fixtures, while the cloud system keeps outreach draft-only until explicit approval.",
    problem:
      "Small operators lose time across research, CRM, website review, follow-up, and fulfillment tools that do not share a repeatable workflow.",
    contributions: [
      "Built a public-source lead research CLI with deterministic scoring and optional local-model refinement.",
      "Added fixture-backed demonstrations without collecting real prospects.",
      "Adapted Vercel Labs Open Agents with CreatorStack-specific workflow skills.",
      "Defined draft-only outreach and human-approval boundaries.",
    ],
    architecture: [
      "The lead CLI turns public website metadata into ranked CSV and Markdown artifacts.",
      "Cloud Agents uses the Vercel Open Agents runtime and sandbox boundary.",
      "Project skills define CreatorStack workflows while preserving attribution.",
      "Artifacts hand work from research to review, approval, and execution.",
    ],
    limitations: [
      "Public signals require human verification.",
      "The lead agent does not send messages or access private sources.",
      "Cloud Agents is an attributed adaptation, not an independently created runtime.",
    ],
    links: [
      {
        label: "Lead agent source",
        href: "https://github.com/EmilianoOnTheRunn/creatorstack-lead-agent",
        kind: "source",
      },
      {
        label: "Cloud agents source",
        href: "https://github.com/EmilianoOnTheRunn/creatorstack-cloud-agents",
        kind: "source",
      },
    ],
    featured: false,
  },
];
export const featuredProjects = projects.filter((p) => p.featured);
