// Six illustrative Australian worker stories.
// Source: teaching/au-worker-stories-checked.md (fact and purpose check, 27 Oct 2026).
// AI-assisted characters, not interviews with real people.

export type ReceiptLine = { item: string; detail?: string; cost: string };

export type Story = {
  slug: string;
  name: string;
  trade: string;
  state: string;
  image: string;
  imageAlt: string;
  thought: { lead: string; body: string[] };
  surprised: { body: string[] };
  failure: { lead: string; body: string[] };
  receipt: {
    title: string;
    lines: ReceiptLine[];
    later?: { heading: string; lines: ReceiptLine[] };
    note: string;
  };
  lesson: string;
  actions: string[];
};

const ASK_ONE_PERSON =
  "Text or email one person you know who works with their hands. Ask them one question about their first year.";

export const STORIES: Story[] = [
  {
    slug: "sam",
    name: "Sam",
    trade: "Electrician",
    state: "Queensland",
    image: "/trades/construction.jpg",
    imageAlt: "A building site with scaffolding in morning light",
    thought: {
      lead: "I thought I was signing up to fix powerpoints and run cable through walls.",
      body: [
        "That's what the first few months looked like. Standing next to a qualified spark, handing up tools, doing the second run through conduit after they'd done the first. I understood why it had to be that way. I just didn't know how long that part would last, or how much there was to know before anyone would let me work unsupervised.",
        "The Certificate III in Electrotechnology Electrician takes four years. Not because the trade is slow to learn. Because there's that much in it. By year three I was reading single-line diagrams for commercial solar installations. Nobody mentioned solar in the brochure.",
      ],
    },
    surprised: {
      body: [
        "The pace of the Queensland market surprised me. I started the apprenticeship thinking I was getting into a stable trade. I didn't expect to be working on grid-scale solar farms eighteen months in. The infrastructure buildout is real: substations, transmission upgrades, solar PV, battery storage. The work isn't the same work my uncle did twenty years ago.",
        "TAFE was better than I expected. One day a week, block release every few months. The lecturers had actual site experience. The theory and the site work connected. That matters when you're trying to understand why a circuit behaves a certain way under load.",
      ],
    },
    failure: {
      lead: "A wiring mistake in a domestic switchboard isn't a rework conversation. It's a fire, an electrocution, or both.",
      body: [
        "My supervising electrician caught an error in my neutral terminations in week six. He didn't yell. He stopped work, walked me through what had gone wrong, and made me redo every one. Forty-two terminations. The afternoon was gone. I never made that error again.",
        "In Queensland, you cannot do electrical work unsupervised without a state electrical licence, and you cannot get the licence without the Certificate III. The sequence is the safety system.",
      ],
    },
    receipt: {
      title: "Year 1 entry costs (AUD)",
      lines: [
        { item: "Tools and PPE", detail: "Boots, hard hat, hi-vis, glasses, tool belt, hand tools, multimeter", cost: "about $800" },
        { item: "TAFE fees", detail: "Free for eligible Queensland apprentices. This qualification is on the priority list.", cost: "$0" },
        { item: "White card", detail: "Construction induction", cost: "varies" },
      ],
      later: {
        heading: "After you qualify",
        lines: [
          { item: "Electrical work licence application", cost: "about $94" },
          { item: "Transport to site", detail: "Often no public transport", cost: "varies" },
        ],
      },
      note: "Ask first what PPE and tools your employer supplies.",
    },
    lesson:
      "The trade is four years of being wrong in front of people who know more, and then a lifetime of knowing exactly what you're doing.",
    actions: [
      "Check whether you're eligible for Queensland's free apprenticeships for under 25s. The Certificate III in Electrotechnology Electrician is on the list.",
      "Ask one electrical contractor near you whether they take first-year apprentices, and what PPE they supply.",
      ASK_ONE_PERSON,
    ],
  },
  {
    slug: "alex",
    name: "Alex",
    trade: "Refrigeration and air conditioning mechanic",
    state: "Queensland",
    image: "/trades/building-systems.jpg",
    imageAlt: "Air conditioning units on the side of an apartment building",
    thought: {
      lead: "I thought it was air cons. Fix the unit, press some buttons, go home.",
      body: [
        "There is a refrigeration cycle (compression, condensation, expansion, evaporation) under every piece of equipment in the trade. Split systems, chillers, cool rooms, freezer display cabinets, process refrigeration in food manufacturing. Same cycle. Very different scale, very different stakes. A failed cold room in a seafood distributor at 2am on a Friday isn't a comfort problem. It's a whole night's stock gone and a client relationship ending.",
        "The Certificate III in Air Conditioning and Refrigeration took four years. I attended TAFE one day per week. The units I was completing in year three had nothing to do with residential split systems.",
      ],
    },
    surprised: {
      body: [
        "I didn't expect how physical year one would be. Access points for commercial systems are in ceilings, roof cavities, plant rooms on upper floors. You carry tools up ladders for the first six months before anyone trusts you to connect anything. Your shoulders and knees know it.",
        "The licence surprised me because nobody mentioned it when I started. You cannot legally handle refrigerant in Australia without a licence from the Australian Refrigeration Council. As an apprentice you need a trainee licence, and your supervisor signs a declaration for you. I found out four months in, when a senior mechanic mentioned it in passing.",
      ],
    },
    failure: {
      lead: "A refrigerant leak in a commercial system isn't a comfort call. In ammonia refrigeration, it's a chemical emergency.",
      body: [
        "I'm not working with ammonia yet. Most mechanics at my level aren't. But understanding what the high end of the work looks like changes how seriously you take the fundamentals. My supervisor told me something in year two that stayed: \"The paperwork you're signing is a legal document. The gas you're handling is regulated. You are accountable for both.\"",
        "That accountability was invisible in the brochure.",
      ],
    },
    receipt: {
      title: "Year 1 entry costs (AUD)",
      lines: [
        { item: "Tools and PPE", detail: "Boots, workwear, eye and ear protection, basic manifold gauges, multimeter, flaring and pipe-cutting kit", cost: "about $900" },
        { item: "TAFE fees", detail: "Check the Queensland free apprenticeship list", cost: "check" },
        { item: "White card", detail: "Construction induction", cost: "varies" },
        { item: "ARC trainee licence", detail: "1 year, 2026", cost: "$37" },
      ],
      later: {
        heading: "After you qualify",
        lines: [{ item: "Refrigerant handling licence", detail: "1 year, 2026", cost: "$89" }],
      },
      note: "Most employers treat manifold gauges as a personal tool. Ask before you start.",
    },
    lesson:
      "The licence isn't the finish line. It's permission to start doing the work that actually matters.",
    actions: [
      "Read the Australian Refrigeration Council's page on trainee licences, so the licence isn't a surprise in month four.",
      "Ask a local air conditioning business whether apprentices buy their own manifold gauges.",
      ASK_ONE_PERSON,
    ],
  },
  {
    slug: "charlie",
    name: "Charlie",
    trade: "Metal fabricator and boilermaker",
    state: "Western Australia",
    image: "/trades/welding.jpg",
    imageAlt: "A welder in a helmet working on a steel structure",
    thought: {
      lead: "I thought welding was the skill. Strike an arc, lay a bead, get paid.",
      body: [
        "Welding is one skill inside a trade that includes reading fabrication drawings, setting out, fitting, cutting, grinding, forming, and understanding how metal behaves when heat moves through it. The Certificate III in Engineering, Fabrication Trade took four years. By year two I was fitting structural steel components for mining equipment. The drawings had tight tolerances, and nobody let them slide.",
        "My first employer was in Perth. My year-five employer is in the Pilbara, on site, FIFO. The trade moved me there. That was never in any brochure.",
      ],
    },
    surprised: {
      body: [
        "The weld testing surprised me most. The Certificate III doesn't qualify you for every structural, pressure vessel or pipeline job. Many of those ask for separate weld tests, specific to the position and the process.",
        "I found this out when I applied for a role on a mining project and was told I needed to pass a 3G and 4G plate test before I could start. Some employers arrange and pay for the test. Some don't. Nobody had told me that step existed when I started.",
      ],
    },
    failure: {
      lead: "A bad weld in a structural application doesn't fail immediately. It fails under load, under vibration, under years of use.",
      body: [
        "That gap between when a weld is made and when it fails is the reason the certification system exists. You sign your work in this trade. Your welder ID goes on the record. If a weld fails, the audit traces back to who made it and when. On a Pilbara mining site, the consequence of structural failure is measured in lives.",
      ],
    },
    receipt: {
      title: "Year 1 entry costs (AUD)",
      lines: [
        { item: "Tools and PPE", detail: "Boots, auto-darkening helmet, welding gloves, flame-resistant workwear, angle grinder, marking tools", cost: "about $1,000" },
        { item: "TAFE fees", detail: "Low fee in WA. Check fee-free eligibility.", cost: "check" },
        { item: "White card", detail: "Construction induction", cost: "varies" },
      ],
      later: {
        heading: "Before structural or mining work",
        lines: [{ item: "Weld tests for specific positions and processes", cost: "ask who pays" }],
      },
      note: "Weld tests come after the Certificate III. Ask about them before you apply.",
    },
    lesson:
      "The certificate opens the door to the trade. The weld tests open the door to the work that pays.",
    actions: [
      "Look up the Certificate III in Engineering, Fabrication Trade on the WA Jobs and Skills site and check the fees for your situation.",
      "Ask a fabrication shop which weld tests their structural jobs need, and who pays for them.",
      ASK_ONE_PERSON,
    ],
  },
  {
    slug: "jordan",
    name: "Jordan",
    trade: "Biomedical equipment technician",
    state: "Victoria",
    image: "/trades/healthcare.jpg",
    imageAlt: "A hospital corridor with a patient trolley",
    thought: {
      lead: "I thought it was hospitals and medical devices. That part was right.",
      body: [
        "What I didn't understand was the depth of electrical knowledge required before anyone lets you near clinical equipment. Biomedical technicians maintain and repair the machines that keep patients monitored, ventilated, and alive. One common pathway is an electrical trade. Mine was a Certificate III in Engineering, Electrical/Electronic Trade, then on-the-job training in a hospital biomedical engineering department. No single qualification gets you there directly. You build toward it.",
        "When imaging equipment, a patient monitor, an infusion pump or a ventilator fails, a biomedical technician is the person the clinical team calls.",
      ],
    },
    surprised: {
      body: [
        "I didn't expect how much of the job was documentation and compliance. Every piece of clinical equipment has a preventive maintenance schedule. Every repair is recorded: when it was serviced, what was replaced, who signed it off. The precision isn't just technical. It's administrative.",
        "The pay surprised me in a good way, and specialising in imaging or anaesthesia equipment opens more of it. Most 18-year-olds have never heard of this trade.",
      ],
    },
    failure: {
      lead: "A calibration error on an infusion pump is a medication dosing error.",
      body: [
        "Every test, every adjustment, every sign-off carries a weight that commercial electrical work doesn't. You are certifying that a machine used during surgery will perform within its specifications. My department head told me in my first month: \"We don't get to have a bad day.\"",
      ],
    },
    receipt: {
      title: "Year 1 entry costs (AUD)",
      lines: [
        { item: "Work shoes, neat workwear, hand tools", detail: "Slip-resistant shoes are a hospital requirement", cost: "about $500" },
        { item: "TAFE fees", detail: "Depend on your Skills First eligibility in Victoria", cost: "check" },
      ],
      note: "The hospital provides specialist test equipment. Personal outlay is lower than site trades.",
    },
    lesson: "Nobody talks about this trade. That's exactly why you should look at it.",
    actions: [
      "Call the biomedical engineering department at your nearest public hospital and ask how their technicians got started.",
      "Check whether you're eligible for Skills First funding for a Certificate III in Engineering, Electrical/Electronic Trade.",
      ASK_ONE_PERSON,
    ],
  },
  {
    slug: "robin",
    name: "Robin",
    trade: "Wind turbine technician",
    state: "South Australia",
    image: "/trades/outdoor.jpg",
    imageAlt: "Transmission towers and power lines across open country",
    thought: {
      lead: "I thought it was clean energy and being outdoors. That part is accurate.",
      body: [
        "What I didn't understand was the height, the isolation, and the physical demands. A wind turbine nacelle sits around 100 metres above the ground. You climb a ladder inside the tower to get there. On a 42-degree day in the Mid North, carrying tools, with the tower acting as a chimney, it's a different proposition. The view from the top is extraordinary. The work to get there is not for everyone.",
        "There isn't one standard trade qualification for this work. Most technicians come through a Certificate III in Engineering, Electrical or Mechanical, then complete training from the turbine company once they're hired.",
      ],
    },
    surprised: {
      body: [
        "The GWO Basic Safety Training surprised me, because it's mandatory before you can access turbine platforms and no employer told me about it before I got the offer. Onshore, it covers first aid, manual handling, fire awareness and working at heights, over about four days. Not all employers cover it upfront. I paid for mine and was reimbursed after three months.",
        "Wind already supplies a large share of South Australia's electricity, and the Mid North has turbines as far as you can see from the tower. The work is not going away.",
      ],
    },
    failure: {
      lead: "A fault diagnosis error 100 metres up isn't like calling the wrong part number in a workshop.",
      body: [
        "Access to the fault takes thirty minutes each way. The replacement part may be two days away. The turbine isn't generating while it's offline, and on a wind farm downtime has a dollar value per hour. I learned to be thorough in my diagnostics before I climbed.",
      ],
    },
    receipt: {
      title: "Entry costs (AUD)",
      lines: [
        { item: "Certificate III", detail: "Electrical or mechanical. Use your state's fee calculator.", cost: "check" },
        { item: "GWO Basic Safety Training", detail: "Onshore, about 4 days", cost: "ask who pays" },
        { item: "Safety boots and workwear", cost: "about $350" },
        { item: "Harness and height PPE", cost: "ask your employer" },
      ],
      note: "Direct hire, not an apprenticeship.",
    },
    lesson: "Understand the barrier before you decide it's too high.",
    actions: [
      "Read what GWO Basic Safety Training covers, and ask wind farm employers whether they pay for it.",
      "Look up the wind farms in South Australia's Mid North and find out who maintains them.",
      ASK_ONE_PERSON,
    ],
  },
  {
    slug: "rowan",
    name: "Rowan",
    trade: "Plumber",
    state: "Victoria",
    image: "/trades/industrial.jpg",
    imageAlt: "Pipework and machinery inside an industrial plant",
    thought: {
      lead: "I thought plumbing was drains and taps. That framing is embarrassing to me now.",
      body: [
        "Plumbing in Victoria covers water supply, sanitary drainage, stormwater, gas fitting, and roofing. Each of those is a separate class on your licence. The Certificate III in Plumbing took four years. By year three I was installing hydronic heating in commercial buildings. By year five I was licensed, running small residential jobs, and looking at the numbers for my own business.",
        "Plumbing is one of the most common trades where people go out on their own. I understood that in theory at 18. I understand it differently now.",
      ],
    },
    surprised: {
      body: [
        "I didn't expect how much of the business learning happened on site. Watching my supervising plumber quote a job, manage a subcontractor, and handle a variation in front of a client was a different education. TAFE taught me the technical units. The business side was absorbed by proximity.",
        "Commercial work often means weekend shutdowns for buildings that can't be accessed during business hours. A Saturday rate plus allowances can make a real difference to a week's take-home.",
      ],
    },
    failure: {
      lead: "An incorrect gas connection isn't a callback. It's an evacuation, an investigation, and potentially the end of a licence.",
      body: [
        "Every gas appliance install, and any job over $750, needs a compliance certificate. You sign it. Your licence number goes on it. If the fitting fails, the audit comes back to that certificate. I had a supervisor who treated every gas connection like it was being reviewed by the Building and Plumbing Commission the next morning. That habit transferred.",
      ],
    },
    receipt: {
      title: "Year 1 entry costs (AUD)",
      lines: [
        { item: "Tools and PPE", detail: "Boots, workwear, glasses, pipe cutters, spanners, pliers, torch", cost: "about $700" },
        { item: "TAFE fees, whole course", detail: "One Melbourne TAFE, 2026, Skills First subsidised", cost: "$7,277.55" },
        { item: "With a concession", cost: "$1,455.51" },
        { item: "Materials", detail: "Charged per unit", cost: "extra" },
        { item: "White card", detail: "Construction induction", cost: "varies" },
      ],
      later: {
        heading: "After the Certificate III",
        lines: [{ item: "Registration and licence, including gasfitting", detail: "Through the Building and Plumbing Commission", cost: "fees apply" }],
      },
      note: "Registration and licence are not optional.",
    },
    lesson:
      "The trade gives you the skills. The licence gives you the right to use them. The business gives you the choice of who you work for.",
    actions: [
      "Check whether you're eligible for Skills First funding for the Certificate III in Plumbing, and whether you qualify for a concession.",
      "Ask a plumber what a compliance certificate is, and when they last signed one.",
      ASK_ONE_PERSON,
    ],
  },
];

export function getStory(slug: string | undefined): Story | undefined {
  return STORIES.find((s) => s.slug === slug);
}
