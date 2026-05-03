# Scrap Chef 🥦

> Scan your pantry. Hit your macros. Stay on budget.
 
AI-powered pantry tracker that turns your ingredients into goal-aware recipes and smart grocery lists.

---

## What it does
Scrap Chef looks at what you already have, understands your nutrition goals, and figures out what to cook and what to buy. No more staring into the fridge wondering what to make. 

- **Pantry Tracking** - add ingredients by scanning barcodes or typing manually
- **AI Recipes** - get meal suggestions built around what you actually have
- **Goal-Aware** - every recipe is filtered against your nutrition mode (cut, maintain, bulk, custom)
- **Grocery Gap List** - see exactly what you're missing and how much it'll cost
- **Budget Smart** - recipes ranked by cost per serving, not just calories

---

## Built with
- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- [Claude API](https://anthropic.com) — for recipe generation and nutritional reasoning
- AsyncStorage — local-first pantry data

---

## Getting started

### Prerequisites

- Node.js (LTS)
- Expo Go app on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Installation
 
```bash
git clone https://github.com/yourusername/scrap-chef.git
cd scrap-chef
npm install
npx expo start
```

Scan the QR code with Expo Go and you're running.

### Environment variables
 
Create a `.env` file in the root:
 
```
ANTHROPIC_API_KEY=your_key_here
```
 
---

## Project structure
 
```
Scrap-Chef/
├── app/
│   ├── index.jsx          # Pantry home screen
│   ├── add-item.jsx       # Add item form
│   └── recipes.jsx        # AI recipe results
├── components/            # Reusable UI components
├── store/                 # App state
└── lib/
    └── claude.js          # Anthropic API calls
```
 
---
 
## License
 
MIT
