🎨 Dynamic UI Editor for Customizable Components

A React + Tailwind CSS application that enables users to dynamically customize UI components such as typography, buttons, layout, and material finishes — all with real-time preview updates and configuration export.

Built for designers and developers to visually tweak and test component properties without modifying source code.


---

🔗 Links

Live Demo: (https://anshgahlot81-commits.github.io/Dynamic-ui-editor/)

Repository: https://github.com/anshgahlot81-commits/Dynamic-ui-editor



---

🧠 Project Overview

This project demonstrates a Dynamic UI Customization Tool that allows users to personalize visual components in real-time.
Users can modify typography, button design, layout radius, and furniture materials while seeing live updates in a preview window.

Key Deliverables:

Fully functional editor interface

Modular React architecture with reusable components

Real-time preview powered by state management

Export/import configuration in JSON format

Responsive layout toggle (desktop & mobile modes)



---

🚀 Features

⚙️ Live Configurable Editor – Modify typography, layout, and color instantly

🪄 Instant Preview Panel – Reflects every edit in real-time

📱 Responsive UI – Auto-switch between mobile & desktop views

💾 Export JSON – Download your configuration for reuse

🔁 Reset to Defaults – Quickly restore initial setup

⚡ Zustand-Powered State – Lightweight and reactive

🧩 Component-Based Architecture – Reusable and scalable



---

🛠️ Tech Stack

React 18 – UI Library

Vite – Build Tool

Tailwind CSS – Styling Framework

Zustand – State Management

React Router DOM – Routing

Lucide React – Icon Library



---

🧩 Component API and Configurable Props

<EditorPanel />

Props: (Connected directly to Zustand store — no external props)
Handles all customization controls for typography, layout, buttons, and materials.

<FurniturePreview />

Props: (none)
Subscribes to editor state and dynamically re-renders live preview with current settings.

<LayoutSwitcher />

Toggles between Desktop and Mobile layouts for responsive testing.

<Button />, <Input />, <Select />, <Slider />

Lightweight, reusable UI primitives styled with Tailwind, ensuring consistency and accessibility.


---

⚙️ How the Editor Works

1. All customizable values (typography, button radius, layout padding, etc.) are stored in a Zustand global store.


2. When a user adjusts a control (slider, color picker, dropdown), the store updates instantly.


3. All preview components subscribe to the global store and re-render automatically when any value changes.


4. The final configuration can be exported as JSON for developers or designers to reuse.



This ensures state-driven rendering and real-time visual feedback without page reloads.


---

💡 Design Decisions & UX Improvements

State-Driven Architecture: Simplifies synchronization between editor and preview.

Collapsible Control Sections: Organized grouping improves usability and reduces clutter.

Instant Visual Feedback: No “Apply” button needed — changes appear instantly.

Responsive Layout Design: Works seamlessly on all screen sizes.

Readable JSON Export: Helps dev teams port configurations directly into production UIs.

Manual Mode Toggle: Allows testing of mobile/desktop versions manually for visual assurance.



---

📦 Example JSON Export

{
  "typography": { "fontFamily": "Inter", "fontWeight": 600, "fontSize": 18 },
  "button": { "borderRadius": 10, "shadow": "medium", "backgroundColor": "#3B82F6", "textColor": "#FFFFFF" },
  "layout": { "cardCornerRadius": 12, "containerPadding": 16, "mode": "desktop" },
  "furniture": {
    "armsFinish": { "name": "Leather Brown", "value": "#6B4423" },
    "legsFinish": { "name": "Aluminum Grey", "value": "#5A5A5A" }
  }
}


---

🧩 Folder Structure

src/
 ┣ components/
 ┃ ┣ editor/
 ┃ ┃ ┗ EditorPanel.jsx
 ┃ ┣ preview/
 ┃ ┃ ┣ FurniturePreview.jsx
 ┃ ┃ ┣ FurnitureCustomizer.jsx
 ┃ ┃ ┗ ThumbnailGallery.jsx
 ┃ ┣ ui/
 ┃ ┃ ┣ button.jsx
 ┃ ┃ ┣ input.jsx
 ┃ ┃ ┣ select.jsx
 ┃ ┃ ┗ slider.jsx
 ┣ store/
 ┃ ┗ useEditorStore.js
 ┣ data/
 ┃ ┗ materials.js
 ┣ pages/
 ┃ ┣ Index.jsx
 ┃ ┣ LayoutShowcase.jsx
 ┃ ┗ NotFound.jsx
 ┣ hooks/
 ┃ ┗ use-mobile.jsx
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css


---

⚡ Getting Started

# Install dependencies
npm install

# Start local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

App runs at → https://anshgahlot81-commits.github.io/Dynamic-ui-editor/


---

✅ Assignment Deliverables Checklist

[x] Functional React UI with full customization

[x] Real-time preview editor

[x] Responsive design (desktop & mobile)

[x] JSON export feature

[x] Clean folder structure

[x] README explaining API, editor logic, and design decisions



---

Developed by: 🧑‍💻 Ansh Gahlot
Role: Frontend Engineer
Year: 2025
“Designing interfaces that empower creativity and usability.”
