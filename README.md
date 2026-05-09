🧠 Amani — Mental Health Community App

Amani means "Peace" in Swahili. A safe, all-in-one mental health platform for everyone.


📖 About
Amani is an Android mobile application built with React Native and Expo, designed to make mental health support accessible, affordable, and stigma-free — starting with Kenya and expanding across Africa.
Whether you need someone to talk to, want to track your mood, find a professional therapist, or access crisis support, Amani has you covered.

✨ Features
🔵 Anonymous Peer Support Circles

Join topic-based support groups (anxiety, grief, relationships, stress)
Post anonymously or with a username
React, comment, and uplift others
Moderated by trained community volunteers

🟢 Therapist Marketplace

Browse verified Kenyan therapists and counselors
Book text, voice, or video sessions
Affordable pricing tiers (free, subsidized, premium)
Rate and review sessions after completion

🟡 Mood Tracker

Daily mood check-ins with an emoji scale
Track mood history over time with charts
Identify triggers and emotional patterns
Get personalized tips based on mood data

🟣 Private Journaling

Daily journal with guided prompts
Guided journaling for anxiety, gratitude, and trauma
Option to share entries anonymously with the community

🔴 Crisis Support

One-tap access to crisis helplines (Befrienders Kenya, Niskize)
AI-powered first-response chat for urgent moments
"I Need Help Now" emergency button always visible

⭐ Resources Library

Articles, videos, meditations, and breathing exercises
Curated by mental health professionals
Offline access for low-connectivity areas


🗺️ App Screens
#ScreenDescription1OnboardingWelcome slides introducing the app2Sign Up / LoginEmail auth + anonymous option3Home DashboardMood check-in + personalized feed4Community CirclesBrowse and join support groups5Circle Chat / FeedPost, react, and comment in groups6Find a TherapistBrowse and filter therapists7Therapist ProfileView profile and book a session8Mood TrackerLog and view mood history charts9Journal HomeView past journal entries10Journal EntryWrite a new journal entry11Resources LibraryBrowse articles, videos, exercises12Crisis SupportEmergency contacts and AI chat13User ProfileView progress and settings14SettingsPrivacy, notifications, account

🛠️ Tech Stack
LayerTechnologyFrameworkReact Native + ExpoLanguageTypeScriptNavigationReact Navigation v6BackendFirebase (Auth + Firestore + Storage)Real-time ChatFirebase Realtime Database / Stream ChatVideo CallsDaily.co or Agora SDKAI Support ChatAnthropic Claude APIPaymentsM-Pesa Daraja API + StripeNotificationsFirebase Cloud Messaging (FCM)State ManagementZustand or Redux Toolkit

📁 Folder Structure

Amani/
├── assets/                  # Images, fonts, icons
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Buttons, inputs, cards
│   │   ├── mood/            # Mood tracker components
│   │   ├── circles/         # Community circle components
│   │   └── journal/         # Journal components
│   ├── screens/             # App screens
│   │   ├── Onboarding/
│   │   ├── Auth/
│   │   ├── Home/
│   │   ├── Community/
│   │   ├── Journal/
│   │   ├── Therapists/
│   │   ├── MoodTracker/
│   │   ├── Resources/
│   │   ├── Crisis/
│   │   └── Profile/
│   ├── navigation/          # React Navigation setup
│   ├── services/            # Firebase, API calls
│   │   ├── firebase.ts
│   │   ├── auth.ts
│   │   ├── firestore.ts
│   │   ├── mpesa.ts
│   │   └── claude.ts
│   ├── hooks/               # Custom React hooks
│   ├── store/               # State management
│   ├── utils/               # Helper functions
│   ├── constants/           # Colors, fonts, config
│   └── types/               # TypeScript type definitions
├── AGENTS.md                # Codex AI guidance file
├── app.json                 # Expo config
├── firebase.json            # Firebase config
├── tsconfig.json            # TypeScript config
└── README.md

🚀 Getting Started
Prerequisites

Node.js 18+
Expo CLI
Android Studio (for emulator) or Android device
Firebase account
OpenAI / Anthropic API key (for AI chat)

Installation
bash# Clone the repository
git clone https://github.com/gavingav254/amani.git

# Navigate into the project
cd amani

# Install dependencies
npm install

# Start the Expo development server
npx expo start --android
Environment Variables
Create a .env file in the root directory:
envFIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
MPESA_CONSUMER_KEY=your_mpesa_consumer_key
MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret
CLAUDE_API_KEY=your_claude_api_key

💰 Monetization Strategy
ModelDetailsFreemiumBasic features free; premium unlocks more sessions + featuresTherapist Commission10–20% per bookingCorporate WellnessSell packages to companies for employee mental healthNGO / Donor FundedPartner with health NGOs for subsidized accessSubscriptionKsh 500–1,500/month for premium users

🗓️ Build Roadmap
Phase 1 — MVP (Months 1–3)

 Onboarding + Authentication
 Anonymous community circles
 Mood tracker
 Private journaling
 Crisis helpline button

Phase 2 — Growth (Months 4–6)

 Therapist marketplace
 In-app chat + video sessions
 M-Pesa payment integration
 Push notifications

Phase 3 — Scale (Months 7–12)

 AI-powered support chatbot (Claude API)
 Corporate wellness dashboard
 Resources library
 Analytics dashboard for therapists
 Swahili language support


🤝 Contributing
Contributions are welcome! Please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the MIT License.

📞 Crisis Resources (Kenya)
OrganizationContactBefrienders Kenya+254 722 178 177Niskize0900 620 800Mathare Hospital+254 20 2012000


Built with ❤️ for mental health in Africa.
