export interface DocStep {
  title: string;
  description: string;
}

export interface DocSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  steps: DocStep[];
}

export interface DocCategory {
  id: string;
  title: string;
  sections: DocSection[];
}

export const docCategories: DocCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    sections: [
      {
        id: "starter-guide",
        title: "Starter Guide: Account → Store → Go Live",
        icon: "UserPlus",
        description: "A complete walkthrough from creating your account to connecting your first store and seeing live data — all in one guide.",
        steps: [
          { title: "Create Your Account", description: "Go to the login page and click 'Sign Up'. Enter your email and a strong password. You'll receive a verification email — click the link to activate your account." },
          { title: "Complete Your Profile", description: "After logging in, navigate to Settings → Profile. Add your name, avatar, and preferred timezone. This information appears across the platform." },
          { title: "Create Your Organization", description: "The onboarding wizard will guide you to create your first organization. This is the billing, team, and store container — all stores, users, and invoices live here." },
          { title: "Add Your First Store (WooCommerce)", description: "Click 'Add Store' and enter your WooCommerce store URL (e.g., https://yourshop.com). Choose OAuth (recommended) to authorize securely, or enter your Consumer Key and Consumer Secret manually from WooCommerce → Settings → REST API." },
          { title: "Add Your First Store (Shopify)", description: "Alternatively, if you run a Shopify store: enter your *.myshopify.com URL and a Custom App Admin API access token (starts with 'shpat_'). You can generate this from your Shopify Admin → Settings → Apps → Develop apps." },
          { title: "Authorize & Sync", description: "For WooCommerce OAuth, you'll be redirected to your store to approve the connection. Once authorized, the platform automatically syncs orders, products, customers, and coupons. Watch the live progress screen as data flows in." },
          { title: "Switch Between Stores", description: "Use the site selector in the top header to switch context between your connected stores. All dashboards, analytics, and modules update instantly." },
          { title: "Explore the Dashboard", description: "Use the sidebar to navigate: Analytics for traffic data, WooCommerce for orders & products, Engage for email marketing, Support for tickets & live chat. Press Ctrl+K to search any page." },
          { title: "You're Ready!", description: "Your store is connected, data is syncing, and you have access to all platform modules. Explore the docs below for in-depth guides on every feature." },
        ],
      },
      {
        id: "create-account",
        title: "Create Your Account",
        icon: "UserPlus",
        description: "Sign up and configure your merchant account to get started with the platform.",
        steps: [
          { title: "Visit the Sign Up Page", description: "Navigate to the login page and click 'Sign Up' to create a new account. Enter your email address and choose a strong password." },
          { title: "Verify Your Email", description: "Check your inbox for a verification email. Click the confirmation link to activate your account." },
          { title: "Complete Your Profile", description: "Once logged in, go to Settings → Profile to add your name, avatar, and contact details." },
          { title: "Create or Join an Organization", description: "Set up your first organization from the onboarding flow. This is where all your stores, billing, and team members will be managed." },
        ],
      },
      {
        id: "dashboard-overview",
        title: "Dashboard Overview",
        icon: "LayoutDashboard",
        description: "Understand the main dashboard layout and how to navigate between modules.",
        steps: [
          { title: "Sidebar Navigation", description: "Use the left sidebar to access all modules: Analytics, SEO, WooCommerce, Engage, Support, and more. Sections collapse to keep things tidy." },
          { title: "Site Selector", description: "Use the site/store selector in the header to switch between your connected stores. All data throughout the platform reflects the selected store." },
          { title: "Quick Search", description: "Press Ctrl+K (or Cmd+K on Mac) to open the command palette for quick navigation to any page." },
          { title: "Notifications", description: "Click the bell icon in the header to view system alerts, milestone achievements, and important updates." },
        ],
      },
    ],
  },
  {
    id: "store-setup",
    title: "Store Connection",
    sections: [
      {
        id: "connect-woocommerce",
        title: "Connect a WooCommerce Store",
        icon: "Store",
        description: "Link your WooCommerce store to start syncing orders, customers, and products.",
        steps: [
          { title: "Go to WooCommerce → Stores", description: "Navigate to the WooCommerce section in the sidebar and click on 'Stores'." },
          { title: "Click 'Add Store'", description: "Enter your store URL (e.g., https://yourstore.com). Choose either OAuth (recommended) or manual REST API connection." },
          { title: "Authorize the Connection", description: "For OAuth: You'll be redirected to your WooCommerce site to approve access. For manual: Enter your Consumer Key and Consumer Secret from WooCommerce → Settings → REST API." },
          { title: "Wait for Initial Sync", description: "The platform will automatically sync your orders, products, customers, and coupons. This may take a few minutes depending on your store size." },
          { title: "Verify Data", description: "Check the Orders, Products, and Customers pages to confirm data is flowing correctly." },
        ],
      },
      {
        id: "connect-shopify",
        title: "Connect a Shopify Store",
        icon: "Store",
        description: "Link your Shopify store using a custom app Admin API token.",
        steps: [
          { title: "Go to Add Store Wizard", description: "Open the Add Store wizard from the onboarding flow or from WooCommerce → Stores → Add Store, then select Shopify." },
          { title: "Enter Your Shopify URL", description: "Provide your *.myshopify.com store URL. Custom domains are not supported — use the myshopify.com subdomain." },
          { title: "Create a Custom App in Shopify", description: "In your Shopify Admin, go to Settings → Apps → Develop apps → Create an app. Enable the Admin API scopes you need (read orders, products, customers, etc.)." },
          { title: "Copy the Admin API Access Token", description: "After installing the custom app, copy the Admin API access token (starts with 'shpat_'). Note: Storefront tokens are not supported." },
          { title: "Paste & Connect", description: "Enter the token in the wizard. The live detector will validate your credentials in real-time. Once verified, click Connect." },
          { title: "Sync Your Data", description: "The platform will automatically sync your Shopify orders, products, and customers." },
        ],
      },
      {
        id: "multi-store",
        title: "Managing Multiple Stores",
        icon: "Globe",
        description: "Connect and manage multiple WooCommerce and Shopify stores from a single dashboard.",
        steps: [
          { title: "Add Additional Stores", description: "Repeat the store connection process for each store you want to manage. You can mix WooCommerce and Shopify stores." },
          { title: "Switch Between Stores", description: "Use the site selector dropdown in the top header to switch the active store context." },
          { title: "Multi-Site Overview", description: "Visit the Overview page to see aggregated metrics across all your connected stores." },
        ],
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    sections: [
      {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        icon: "BarChart3",
        description: "Monitor your store's traffic, events, and visitor behavior.",
        steps: [
          { title: "View Traffic Overview", description: "Go to Analytics → Dashboard to see visitors, page views, bounce rate, and session duration at a glance." },
          { title: "Analyze Traffic Sources", description: "Navigate to Analytics → Traffic to understand where your visitors come from — organic, social, direct, or referral." },
          { title: "Track Events", description: "Use Analytics → Events to monitor custom events like button clicks, form submissions, and purchases." },
          { title: "Build Funnels", description: "Go to Analytics → Funnels to create conversion funnels and identify where visitors drop off." },
          { title: "Date Range Filtering", description: "Use the date picker in the header to filter all analytics data by custom time periods." },
        ],
      },
      {
        id: "audience",
        title: "Audience Insights",
        icon: "Users",
        description: "Understand your audience demographics and behavior patterns.",
        steps: [
          { title: "Retention Analysis", description: "Go to Audience → Retention to see how many visitors return to your site over time." },
          { title: "Location Data", description: "Visit Audience → Locations to see a geographic breakdown of your visitors on an interactive map." },
          { title: "Device Breakdown", description: "Check Audience → Devices to understand which browsers, operating systems, and device types your visitors use." },
        ],
      },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    sections: [
      {
        id: "seo-overview",
        title: "SEO Overview & Rankings",
        icon: "Target",
        description: "Track your search engine rankings and optimize your site for better visibility.",
        steps: [
          { title: "Connect Search Console", description: "Go to SEO → Overview. If not yet connected, follow the prompts to link your Google Search Console account for real ranking data." },
          { title: "Monitor Rankings", description: "Visit SEO → Rankings to see which keywords your site ranks for, along with position changes over time." },
          { title: "Keyword Research", description: "Use SEO → Keyword Explorer to discover new keyword opportunities with search volume and difficulty scores." },
          { title: "Competitor Analysis", description: "Go to SEO → Competitors to compare your site's performance against competitors." },
          { title: "Run a Site Audit", description: "Navigate to SEO → Site Audit to find technical SEO issues like broken links, missing meta tags, and slow pages." },
        ],
      },
      {
        id: "seo-tools",
        title: "SEO Tools",
        icon: "Hammer",
        description: "A suite of specialized tools for advanced SEO tasks.",
        steps: [
          { title: "Robots.txt Tester", description: "Test and validate your robots.txt file to ensure search engines can crawl your site correctly." },
          { title: "Schema Generator", description: "Create structured data markup (JSON-LD) for products, articles, FAQs, and more to enhance your search results." },
          { title: "SERP Simulator", description: "Preview how your pages will appear in Google search results before publishing." },
          { title: "Mobile-Friendly Test", description: "Check if your pages pass Google's mobile-friendliness criteria." },
          { title: "Speed Test", description: "Analyze your page load times and get actionable recommendations to improve performance." },
        ],
      },
    ],
  },
  {
    id: "woocommerce",
    title: "WooCommerce",
    sections: [
      {
        id: "manage-orders",
        title: "Managing Orders",
        icon: "ShoppingBag",
        description: "View, filter, and manage all your WooCommerce orders from one place.",
        steps: [
          { title: "View All Orders", description: "Go to WooCommerce → Orders to see a complete list of all orders with status, totals, and customer info." },
          { title: "Filter & Search", description: "Use the search bar to find orders by number, customer name, or email. Filter by status (processing, completed, etc.)." },
          { title: "View Order Details", description: "Click on any order to see line items, billing/shipping addresses, payment details, and order notes." },
          { title: "Track Refunds", description: "Navigate to WooCommerce → Refunds to see all refunded orders and their details." },
        ],
      },
      {
        id: "manage-products",
        title: "Managing Products",
        icon: "Package",
        description: "Browse your product catalog with advanced analytics.",
        steps: [
          { title: "Product Catalog", description: "Go to WooCommerce → Products to see all synced products with prices, stock status, and categories." },
          { title: "Top Sellers", description: "Visit Products → Top Sellers to identify your best-performing products by revenue and quantity." },
          { title: "Stock Velocity", description: "Use Products → Stock Velocity to understand how fast your inventory moves." },
          { title: "Compare Products", description: "Use Products → Compare to benchmark multiple products side-by-side." },
          { title: "Category Analysis", description: "Go to Products → Categories to see how different product categories perform." },
        ],
      },
      {
        id: "manage-customers",
        title: "Managing Customers",
        icon: "Users",
        description: "View customer profiles, order history, and engagement data.",
        steps: [
          { title: "Customer List", description: "Go to WooCommerce → Customers to see all your customers with order counts and total spend." },
          { title: "Customer Detail", description: "Click any customer to view their full profile, order history, and contact information." },
          { title: "Abandoned Carts", description: "Navigate to WooCommerce → Carts to see abandoned carts and recovery opportunities." },
        ],
      },
    ],
  },
  {
    id: "engage",
    title: "Engage (Email Marketing)",
    sections: [
      {
        id: "email-automations",
        title: "Email Automations",
        icon: "Workflow",
        description: "Set up automated email sequences triggered by customer actions.",
        steps: [
          { title: "Go to Engage → Automations", description: "Navigate to the Engage section and select Automations." },
          { title: "Create an Automation", description: "Click 'Create Automation' and choose a trigger (e.g., new order, abandoned cart, new subscriber)." },
          { title: "Design Email Steps", description: "Add email steps with delays between them. Use the visual email designer to create beautiful emails." },
          { title: "Set Conditions", description: "Add conditions to personalize the flow based on customer behavior or attributes." },
          { title: "Activate", description: "Toggle the automation to active. Emails will be sent automatically when triggers fire." },
        ],
      },
      {
        id: "broadcasts",
        title: "Email Broadcasts",
        icon: "Send",
        description: "Send one-time email campaigns to your subscriber list.",
        steps: [
          { title: "Create a Broadcast", description: "Go to Engage → Broadcasts and click 'Create Broadcast'." },
          { title: "Choose Your Audience", description: "Select which segments or lists should receive the email." },
          { title: "Design the Email", description: "Use the drag-and-drop email designer or HTML editor to craft your message." },
          { title: "Schedule or Send", description: "Send immediately or schedule for a future date/time." },
          { title: "Track Results", description: "After sending, monitor opens, clicks, and conversions from the broadcast detail page." },
        ],
      },
      {
        id: "manage-profiles",
        title: "Subscriber Profiles",
        icon: "Users",
        description: "Manage your email subscriber profiles and segments.",
        steps: [
          { title: "View Profiles", description: "Go to Engage → Profiles to see all subscribers with their email, status, and engagement data." },
          { title: "Import Subscribers", description: "Use the import feature to bulk-add subscribers from a CSV file." },
          { title: "Manage Subscriptions", description: "Update subscriber status (subscribed, unsubscribed) and manage their tags." },
        ],
      },
    ],
  },
  {
    id: "analyze",
    title: "Analyze (Reports & Cohorts)",
    sections: [
      {
        id: "revenue-reports",
        title: "Revenue & Order Reports",
        icon: "TrendingUp",
        description: "Generate detailed revenue, order, and refund reports.",
        steps: [
          { title: "Revenue Report", description: "Go to Analyze → Reports → Revenue to see total revenue, average order value, and trends over time." },
          { title: "Order Reports", description: "Visit Reports → Orders for a detailed breakdown of orders by status, payment method, and time period." },
          { title: "Forecast", description: "Use Reports → Forecast to see predicted revenue based on historical data." },
          { title: "Export Data", description: "Go to Analyze → Exports to download your data in CSV format for external analysis." },
        ],
      },
      {
        id: "customer-analytics",
        title: "Customer Analytics & Cohorts",
        icon: "Users",
        description: "Deep-dive into customer behavior with cohort analysis.",
        steps: [
          { title: "Customer Groups", description: "Go to Analyze → Customers → Customer Groups to segment customers by spending behavior." },
          { title: "RFM Segments", description: "Use RFM Segments to categorize customers by Recency, Frequency, and Monetary value." },
          { title: "Returning Customers", description: "Visit Cohorts → Returning Customers to measure repeat purchase rates." },
          { title: "Lifetime Value", description: "Check Cohorts → Lifetime Value to understand the long-term value of different customer segments." },
        ],
      },
      {
        id: "cost-tracking",
        title: "Cost Tracking",
        icon: "DollarSign",
        description: "Track and manage all your business costs for accurate profit calculation.",
        steps: [
          { title: "Product Costs", description: "Go to Analyze → Costs → Products to set cost prices for accurate margin calculations." },
          { title: "Shipping Costs", description: "Track shipping expenses under Costs → Shipping." },
          { title: "Advertising Costs", description: "Log your ad spend under Costs → Advertising to calculate true ROI." },
          { title: "Operational Costs", description: "Track fixed costs like rent, salaries, and tools under Costs → Operational and Tools." },
        ],
      },
    ],
  },
  {
    id: "support",
    title: "Support & Live Chat",
    sections: [
      {
        id: "support-tickets",
        title: "Support Tickets",
        icon: "Ticket",
        description: "Manage customer support tickets from creation to resolution.",
        steps: [
          { title: "View Tickets", description: "Go to Support → Tickets to see all support tickets with status, priority, and assignee." },
          { title: "Create a Ticket", description: "Click 'New Ticket' to manually create a ticket on behalf of a customer." },
          { title: "Respond & Resolve", description: "Open a ticket to view the conversation thread, add replies, and change the status to resolved." },
          { title: "SLA Rules", description: "Configure SLA rules under Support → SLA & Escalation to set response time expectations." },
        ],
      },
      {
        id: "live-chat",
        title: "Live Chat",
        icon: "MessageCircle",
        description: "Engage with website visitors in real-time through live chat.",
        steps: [
          { title: "Access Live Chat", description: "Go to Support → Live Chat to see active and recent chat sessions." },
          { title: "Install the Widget", description: "Navigate to Support → Chat Widget to generate an embed code for your website." },
          { title: "Customize Appearance", description: "Configure the widget's colors, position, welcome message, and business hours." },
          { title: "Chat with Visitors", description: "When a visitor starts a chat, you'll see it appear in real-time. Click to respond." },
          { title: "Set Up Proactive Triggers", description: "Create auto-popup messages based on visitor behavior (time on page, scroll depth, etc.)." },
        ],
      },
    ],
  },
  {
    id: "license-inventory",
    title: "Licence Inventory",
    sections: [
      {
        id: "manage-licenses",
        title: "Products & Serial Numbers",
        icon: "Key",
        description: "Manage your digital product catalog and license key inventory.",
        steps: [
          { title: "Add Products", description: "Go to Licence Inventory → Products → Add Product to create a new digital product with name, category, and pricing." },
          { title: "Organize with Categories & Tags", description: "Use Categories and Tags to organize your product catalog for easy management." },
          { title: "Add Serial Numbers", description: "Navigate to Keys → Add Serial Number to add license keys. You can add them individually or in bulk." },
          { title: "Manage Suppliers", description: "Track your key suppliers under Keys → Suppliers to know where your inventory comes from." },
          { title: "Stock Manager", description: "Use the Stock Manager to monitor low-stock alerts and inventory levels across all products." },
        ],
      },
      {
        id: "sales-channels",
        title: "Sales Channels & Pricing",
        icon: "Radio",
        description: "Configure where and how your digital products are sold.",
        steps: [
          { title: "Add Sales Channels", description: "Go to Licence Inventory → Sales Channels to configure different sales channels (website, API, Telegram)." },
          { title: "Channel Pricing", description: "Set different prices per channel under Channel Pricing to optimize revenue." },
          { title: "API Settings", description: "Configure API access under API Settings for programmatic key delivery." },
          { title: "Telegram Bot", description: "Set up an automated Telegram bot to sell keys directly through Telegram." },
        ],
      },
    ],
  },
  {
    id: "mail-client",
    title: "Mail Client",
    sections: [
      {
        id: "mail-setup",
        title: "Setting Up Mail",
        icon: "Mail",
        description: "Configure your email accounts and start managing emails from the platform.",
        steps: [
          { title: "Add Email Account", description: "Go to Mail Client → Settings → Accounts to add your IMAP/SMTP email accounts." },
          { title: "Configure Signatures", description: "Create professional email signatures under Settings → Signatures." },
          { title: "Set Up Aliases", description: "Add email aliases under Settings → Aliases if you send from multiple addresses." },
          { title: "Create Filters", description: "Set up automatic email filters under Settings → Filters & Rules to organize incoming mail." },
          { title: "Compose & Send", description: "Use Mail Client → Compose to write and send emails. Use Inbox to read incoming messages." },
        ],
      },
    ],
  },
  {
    id: "billing",
    title: "Billing & Wallet",
    sections: [
      {
        id: "wallet-topup",
        title: "Wallet Top-Up",
        icon: "Wallet",
        description: "Fund your organization wallet to pay for subscriptions and services.",
        steps: [
          { title: "Go to Balance Page", description: "Navigate to Settings → Company → Balance, or click 'TopUp' from your profile menu." },
          { title: "Choose Amount & Gateway", description: "Select your preferred payment gateway (crypto, bank transfer, etc.) and enter the amount to deposit." },
          { title: "Complete Payment", description: "Follow the payment gateway instructions. For manual methods, upload proof of payment." },
          { title: "Wait for Confirmation", description: "Automatic payments are credited instantly. Manual deposits require admin approval." },
          { title: "Track Transactions", description: "View your deposit history and wallet transactions in the History tab." },
        ],
      },
      {
        id: "subscription",
        title: "Subscription Plans",
        icon: "Crown",
        description: "Choose and manage your subscription plan.",
        steps: [
          { title: "View Available Plans", description: "Go to Settings → Company → Subscription to see your current plan and available upgrades." },
          { title: "Request Upgrade", description: "Select a higher plan and choose your preferred payment method to submit an upgrade request." },
          { title: "Admin Approval", description: "Your upgrade request will be reviewed and approved by the platform administrator." },
          { title: "Plan Features", description: "Each plan unlocks different modules and features. Compare plans to find the best fit." },
        ],
      },
    ],
  },
  {
    id: "key-checker",
    title: "Key Checker",
    sections: [
      {
        id: "check-keys",
        title: "Checking License Keys",
        icon: "Shield",
        description: "Verify and validate license keys for Microsoft and other products.",
        steps: [
          { title: "Check a Key", description: "Go to Key Checker → Check Key to validate a license key and see its activation status." },
          { title: "Get CID", description: "Use Get CID to retrieve the Confirmation ID for Microsoft product activation." },
          { title: "Redeem Microsoft Keys", description: "Navigate to Redeem Microsoft to process Microsoft product key redemptions." },
          { title: "Office 365 Management", description: "Manage Office 365 subscriptions and licenses from the Office 365 section." },
          { title: "API Configuration", description: "Set up your API connections under APIs for automated key checking." },
        ],
      },
    ],
  },
  {
    id: "team-management",
    title: "Team & Settings",
    sections: [
      {
        id: "invite-team",
        title: "Inviting Team Members",
        icon: "UserPlus",
        description: "Add team members to your organization and assign roles.",
        steps: [
          { title: "Go to Company Settings", description: "Navigate to Settings → Company → Team Members." },
          { title: "Click 'Invite Team Member'", description: "Enter the team member's email address and select their role (Admin, Editor, Viewer)." },
          { title: "Set Store Access", description: "Choose which stores the team member can access and their permission level (view, edit, full)." },
          { title: "Send Invitation", description: "The team member will receive an email invitation to join your organization." },
          { title: "Manage Members", description: "View, edit roles, or remove team members from the team list." },
        ],
      },
      {
        id: "roles-permissions",
        title: "Roles & Permissions",
        icon: "Shield",
        description: "Configure granular access control for your team.",
        steps: [
          { title: "Access Role Management", description: "Go to Settings → Roles & Permissions (Admin only)." },
          { title: "Create Custom Roles", description: "Define new roles with specific module access permissions." },
          { title: "Assign Permissions", description: "For each role, toggle access to individual modules like Analytics, WooCommerce, SEO, etc." },
          { title: "Apply to Users", description: "Assign roles to team members to control what they can see and do." },
        ],
      },
    ],
  },
  {
    id: "affiliate",
    title: "Affiliate Program",
    sections: [
      {
        id: "affiliate-setup",
        title: "Joining the Affiliate Program",
        icon: "HandCoins",
        description: "Earn commissions by referring new merchants to the platform.",
        steps: [
          { title: "Visit My Affiliate", description: "Go to Affiliate → My Affiliate to view your affiliate dashboard." },
          { title: "Get Your Referral Link", description: "Copy your unique referral code/link to share with potential merchants." },
          { title: "Track Referrals", description: "Monitor your referrals, conversions, and earned commissions from the dashboard." },
          { title: "Request Payout", description: "Once you reach the minimum payout threshold, request a withdrawal of your earned commissions." },
        ],
      },
    ],
  },
];
