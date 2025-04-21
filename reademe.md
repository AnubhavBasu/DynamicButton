# Fully Dynamic DOM Button App

A minimal Node.js + Express example that serves a single page with a button whose entire DOM subtree is torn down and rebuilt every 5 seconds. Each cycle:

- Creates between 1–5 nested `<div>` wrappers so the button’s absolute XPath changes.
- Assigns a fresh `id`, `data-locator` attribute, and dynamic CSS class.
- Repositions the button to a random spot in the viewport.
- Resets the page background to **white**.
- Adds a click handler on the new button to turn the background **blue**.

## Features

- **Fully dynamic DOM**  
  The button (and its wrapper chain) is destroyed and recreated every 5 seconds—no static locator will ever work reliably.
- **Randomized nesting depth**  
  Between 1 and 5 nested `<div>` layers on each rebuild.
- **Fresh identifiers**  
  New `id`, `data-locator`, and `.dyn-<rand>` class on every cycle.
- **Positioning & styling**  
  Absolutely positioned within a `100vh` container, with auto-resetting background.
- **Click-to-blue**  
  Clicking the button changes the background color to blue until the next rebuild.

## Prerequisites

- [Node.js](https://nodejs.org/) v10+ (for template literals & `const`/`let`)
- [npm](https://www.npmjs.com/) (bundled with Node)

## Installation

1. **Clone the repo**  
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>

2. **Install dependencies**
npm install express

3. **Start the Server**
node app.js

Open in browser
Navigate to http://localhost:3000

Observe

Every 5 s the button and its entire wrapper chain are rebuilt.

Page background resets to white, button gets new locators and position.

Click the button to turn the background blue.

**Code Overview**

Express server
Serves one route (/) that returns an HTML page.

Inline client script

rebuildDOM() clears and rebuilds the button subtree.

Random wrapper depth, fresh identifiers, random absolute positioning.

Background-color logic: white reset and blue-on-click.

Interval timer
setInterval(rebuildDOM, 5000) drives the 5 s rebuild cycle.

**Customization**

Adjust depth range or wrapper tag names.

Tweak the positioning logic (e.g., account for actual button dimensions).

Change rebuild frequency by modifying the 5000 ms interval.

Swap Express for any other static‐file or templating setup.