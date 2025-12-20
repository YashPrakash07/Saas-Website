
export interface Service {
  title: string;
  slug: string;
  description: string;
  fullContent: string;
  features: string[];
  benefits: { title: string; description: string }[];
}

export const services: Service[] = [
  { 
    title: "Email / SMS / WhatsApp Marketing", 
    slug: "email-sms-whatsapp-marketing",
    description: "Reach your audience effectively through multi-channel marketing campaigns including Email, SMS, and WhatsApp.",
    fullContent: "In today's fragmented digital landscape, reaching your customers where they are is non-negotiable. Our unified marketing solution brings together the power of Email, SMS, and WhatsApp into a single, cohesive ecosystem. Whether you're sending transactional alerts, promotional blasts, or personalized newsletters, we ensure your message cuts through the noise. We handle the technical complexity of carrier regulations and inbox algorithms so you can focus on crafting the perfect message.",
    features: [
      "Unified Cross-Channel Campaigns",
      "Automated Drip Sequences",
      "Personalized Dynamic Content",
      "High-Volume SMS Gateways",
      "Official WhatsApp Business API Integration",
      "Real-time Engagement Analytics"
    ],
    benefits: [
      { title: "Increase Reach", description: "Connect with customers on their preferred platforms, boosting open rates by up to 40%." },
      { title: "Seamless Automation", description: "Trigger messages across channels based on user behavior without manual intervention." },
      { title: "Global Compliance", description: "Navigate GDPR, TCPA, and carrier restrictions automatically with our built-in compliance tools." }
    ]
  },
  { 
    title: "Email Data Validation", 
    slug: "email-data-validation",
    description: "Clean your email lists and improve deliverability with our advanced email validation services.",
    fullContent: "A clean email list is the foundation of successful email marketing. Sending to invalid, inactive, or spam-trap addresses not only wastes money but actively damages your sender reputation. Our advanced validation engine scans your lists in real-time, identifying risky emails before you ever hit send. We check syntax, domain validity, and ping mailboxes without sending actual emails, ensuring your list is pristine.",
    features: [
      "Syntax & Format Checking",
      "Disposable Email Detection",
      "Spam Trap Identification",
      "Domain & MX Record Validation",
      "SMTP Handshake Verification",
      "Typo Correction Suggestions"
    ],
    benefits: [
      { title: "Boost Deliverability", description: "Remove hard bounces to keep your bounce rate under 1% and protect your sender score." },
      { title: "Cost Efficiency", description: "Stop paying your ESP for dead subscribers. Only send to real, active humans." },
      { title: "Protect Reputation", description: "Avoid spam traps that can get your domain blacklisted by major ISPs." }
    ]
  },
  { 
    title: "Inbox Placement Reporting", 
    slug: "inbox-placement-reporting",
    description: "Get detailed insights into where your emails are landing - Inbox, Spam, or Promotions tab.",
    fullContent: "The 'Sent' metric is vanity; 'Inbox' is reality. Just because an email didn't bounce doesn't mean it was seen. Our Inbox Placement Reporting gives you x-ray vision into major ISPs like Gmail, Outlook, and Yahoo. We monitor exactly where your emails land—be it the Primary Inbox, the Promotions tab, or the dreaded Spam folder. Armed with this data, you can troubleshoot content or authentication issues before they kill your campaign ROI.",
    features: [
      "Granular ISP-Level Reporting",
      "Tab Category Detection (Promotions vs. Primary)",
      "Spam Folder Placement Alerts",
      "Seed List Testing",
      "Content Filter Analysis",
      "Historical Placement Trends"
    ],
    benefits: [
      { title: "Visibility", description: "Know exactly what percentage of your audience is actually seeing your emails." },
      { title: "Proactive Fixes", description: "Identify deliverability dips at specific ISPs (e.g., blocking at Outlook) immediately." },
      { title: "Optimize Content", description: "Test how different subject lines or HTML structures affect folder placement." }
    ]
  },
  { 
    title: "Campaign Management Consultancy", 
    slug: "campaign-management-consultancy",
    description: "Expert advice and strategy to optimize your campaign management processes and results.",
    fullContent: "Technology is only half the battle; strategy is the other. Our Campaign Management Consultancy pairs you with industry veterans who have managed high-volume sending for top brands. We audit your current workflows, analyze your audience segmentation, and help you craft a roadmap for growth. From warming up new IPs to designing complex lifecycle automations, we act as an extension of your marketing team.",
    features: [
      "Comprehensive Audits of Current Campaigns",
      "Custom Lifecycle Strategy Design",
      "Segmentation & Personalization Workshops",
      "A/B Testing Frameworks",
      "Vendor/ESP Selection Assistance",
      "Crisis Management & Troubleshooting"
    ],
    benefits: [
      { title: "Strategic Growth", description: "Move beyond 'batch and blast' to sophisticated, high-conversion lifecycles." },
      { title: "Knowledge Transfer", description: "Upskill your internal team with best practices from industry experts." },
      { title: "ROI Focus", description: "Identify quick wins and long-term improvements that directly impact revenue." }
    ]
  },
  { 
    title: "DMARC Analysis", 
    slug: "dmarc-analysis",
    description: "Protect your domain reputation and prevent spoofing with comprehensive DMARC analysis and reporting.",
    fullContent: "With Google and Yahoo's strict new requirements, DMARC is no longer optional—it's essential. Our DMARC Analysis service takes the headache out of email authentication. We aggregate and visualize DMARC reports, helping you understand who is sending on your behalf. We guide you safely from 'None' to 'quarantine' and finally 'reject' policies, ensuring no unauthorized bad actor can spoof your domain to phishing victims.",
    features: [
      "DMARC/SPF/DKIM Configuration",
      "Automated XML Report Aggregation",
      "Forensic RUF Report Analysis",
      "Unauthorized Sender Detection",
      "Policy Enforcement Roadmap",
      "BIMI Implementation Support"
    ],
    benefits: [
      { title: "Total Security", description: "Block 100% of domain spoofing attacks, protecting your brand trust." },
      { title: "Improved Delivery", description: "Authenticated domains enjoy privileged treatment and higher quotas from ISPs." },
      { title: "Compliance", description: "Meet the strict sender requirements enforced by Gmail, Yahoo, and enterprise gateways." }
    ]
  },
  { 
    title: "IP/Domain Blacklist Monitoring", 
    slug: "ip-domain-blacklist-monitoring",
    description: "Continuous monitoring of your IPs and domains against major blacklists to ensure sustained deliverability.",
    fullContent: "Getting blacklisted is a marketer's nightmare. It can halt your business overnight. Our 24/7 monitoring service checks your sending IPs and domains against over 100 major real-time blacklists (RBLs) like Spamhaus, Barracuda, and SORBS. If you get listed, we alert you immediately and provide specific instructions—or handle the delisting process for you—to get you back in the inbox fast.",
    features: [
      "Real-time RBL Scanning (100+ lists)",
      "Instant Alert Notifications",
      "Root Cause Analysis",
      "Delisting Assistance & Templates",
      "Reputation Score Tracking",
      "Historical Blacklist Logs"
    ],
    benefits: [
      { title: "Rapid Response", description: "Catch blacklistings in minutes, not days, minimizing downtime." },
      { title: "Expert Resolution", description: "Don't guess how to delist. We tell you exactly what the list operators need to see." },
      { title: "Prevention", description: "Understand why you were listed to prevent recurrence." }
    ]
  },
  { 
    title: "Domain Reputation Builder", 
    slug: "domain-reputation-builder",
    description: "Strategies and tools to gradually warm up and build a strong reputation for your sending domains.",
    fullContent: "You can't just buy a new domain and send 1 million emails on day one. ISPs need to trust you first. Our Domain Reputation Builder is a managed service that warms up your infrastructure. We curate a schedule of gradually increasing volume, manage engagement with seed accounts, and carefully monitor ISP feedback loops. We turn cold domains into trusted senders capable of hitting the inbox at scale.",
    features: [
      "Custom Warm-up Schedules",
      "Automated Engagement Generation",
      "Feedback Loop (FBL) Monitoring",
      "Volume Throttling Management",
      "Reputation Scorecard",
      "Transition Planning for Rebranding"
    ],
    benefits: [
      { title: "Safe Scaling", description: "Scale from 0 to 1M+ emails without triggering spam filters." },
      { title: "Long-term Trust", description: "Establish a pristine sender history that insulates you from minor mistakes later." },
      { title: "Inbox Guarantee", description: "Ensure your critical launch emails land in the primary inbox, not spam." }
    ]
  }
];
