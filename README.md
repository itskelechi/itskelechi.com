# 💾 Kelechi’s Web Template – Retro Dreamscape, Robotic Sass

Welcome to my browser-bound dreamscape: a Windows 95-inspired site re-imagined with ✨css magic✨ and a few diva flourishes. This isn’t just a website. It’s art. A pixelated playground. 
A place where <div>s get along and <form>s actually mean it.

    “It boots up like Windows 95, but it slaps like 2025.” – ChatGPT.

### 🧰 Site Functionalities
#### 🌈 Personalized Dreamscape Aesthetic

    Windows 95-style UI with custom CSS: windows, pixel fonts, beveled buttons, and window chrome realness.

    Root-controlled colors via CSS variables for easily customizable themes.

#### 🗂️ Folder Tracking

    Track folders for updates and automatically populate the UI.

    Styled like Windows Explorer, but with ✨𝒻𝓁𝒶𝒾𝓇✨.

#### 🎮 Gamified + Interactive Pages

    poems.hbs: Where code meets creativity — click through poetry like navigating a vintage popup windows.

    comments: A playful, dynamic guestbook experience with sassy validation and placeholder messages.

<!-- #### 💅 UI Interactions with 𝓅𝑒𝓇𝓈𝑜𝓃𝒶𝓁𝒾𝓉𝓎

    Mouseovers, retro tooltips, exaggerated alert boxes, and reset buttons that talk back. Don’t be surprised if your form fields throw some side-eye. -->

#### 📬 Secure Mailing Protocols

    Uses Node.js + Express to send form submissions directly to my inbox.

    Email is secured via .env file and never exposed in public code.

📁 .env File Example:

USER_EMAIL=yourEmail@gmail.com
USER_PASS=yourEmailAppPassword

    💡 You’ll need to enable “App Passwords” in Gmail if you’re using 2FA. Never use your real login password!
    💡 if you're using yahoo... proceed at your own risk.
    💡 ps: this hasn't been tested with outlook - if you find a bug let me know!

🛡️ Form Validation

    Client-side JS handles blank fields and email format.

    Server-side re-validation + nodemailer magic delivers your note straight to creator 😉.

🎨 CSS Root Color Control

In style.css:

:root {
  --background-pink: #e6bed4;  /* background */
  --mauve-pink: #a55280; /* text colour, window frame*/
  --light-mauve: #c38da2; /* header background, button text, dialog*/
  --light-mauve-transparent: #c38da246;
  --wine-pink: #824255;
  --disabled-pink: #c6afb9;
  ...
}

Customize colors and theme elements with a few tweaks to :root.
🧪 Tech Stack

    HTML5 + Handlebars (.hbs) for templating

    CSS3 with lovingly hand-coded retro styling

    Vanilla JavaScript for interaction + validation

    Node.js & Express for mailing + routing

    Currently Hosted on 🌐 Neocities


#### 🧙🏽‍♀️ Run Locally (Optional Dev Setup)

git clone https://github.com/yourusername/your-repo.git
cd your-repo
npm install
touch .env
##### Add USER_EMAIL and USER_PASS to .env
node app.js

Then take a stroll down http://localhost:3000 and enjoy your stay or wreck the place - it's your environment 🤷🏾‍♀️.


### 🚧 To-Do List

- Add boot-up sound or error beep

- Draggable windows or modal popups (Win98-style)

- Expand poetry and game interactivity

    Easter eggs + secret keystrokes?
    
- Dark mode

### 👋🏾 About Me

I’m Kelechi — digital designer, wannabe Systems Engineer, and fun code advocate.
This site is a living archive of my imagination, built to share my work and connect with kindred souls across cyberspace.

🖱️ Best viewed in 1200x960 with Netscape Navigator and a bowl of cereal.


**Note: Is it dynamic? Yes. Does it look better in Desktop View? Also yes.**

What do you want from me? it's literally _~✨𝒱𝐼𝒩𝒯𝒜𝒢𝐸✨~_