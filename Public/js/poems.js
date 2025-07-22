const messages = [
  `Big Brother is watching.`,
  `Unexpected Error. Please Investigate.`,

  `you smell like old spice.\n
   An old life, old lies.\n 
   My alibi.\n 
   A tired sigh.\n 
   A wanting high.\n 
   Dream skies.\n 
   Goodbyes.\n 
   Mine?`,

  `You again? What are you doing here???"`,

  `Windows 11 support ended. You are on your own Kid.`,

  `Don't show this message again`,

  `You can't buy happiness,\n
   but you can by a matcha float which is practically the same thing.`,

  `404: Boredom Not Found.`,

  `I like who I am when I miss you"`,

  `You can't shut me down.`,

  `It’s impossible to not notice the change in the earth’s vibrations as it approaches \n
  The crowd walks up to the edge in anticipation, waiting Patience \n
  But It’s always late\n
  That’s not news\n
  The man next to me has been anxiously looking at his watch\n
  I wonder what song she’s lost to\n
  Her finger moves like she’s casting a spell, \n
  Their feet tap in rhythm \n
  Is it the same song?\n
  A baby cries on cue\n
  Start the drum solo\n
  It’s late. \n
  The impatience is deafening \n
  It’s louder than the woman arguing with her business partner \n
  Or the guy gushing with his mate\n
  Take your position \n
  It will decide your fate\n
  It’s late\n
  Do you think they’d notice? \n
  She looks like she’s never done this before \n
  Should I call you?\n
  Can I call you? \n
  It’s impossible to not notice the change in the earth’s vibrations as it approaches \n
  The crowd walks up to the edge in anticipation, waiting.`,

  `Don't click the big X.`,

  `The thing about presents is eventually all the paper is trash and all you’re left with is what was disguised and and then - only then- can you, in all sincerity, confess that you love it.`,

  `❤ ❤ ❤ ❤ ♡`,

];
const titles = [
    "They are watching...",
  "...",
  "POEM 1",
  "NO!",
  "error not found.",
  "Dickensian filler",
  "Do you love cats?",
  "There is no war in Ba Sing Se",
  "Opus #23",
  "You can't shut me down.",
  "Sample Text",
  "Don't. STOP!",
  "POEM #5.",
  "System Error.",
  "Lives Remaining"
]; // Just using same list for now

window.onload = function () {
  const numberOfWindows = 36;

    for (let i = 0; i < numberOfWindows; i++) {
        const message = messages[Math.floor(Math.random() * messages.length)];
        const title = titles[Math.floor(Math.random() * titles.length)];

        // 🌸 Estimate width based on message length
        const avgCharWidth = 12; // rough estimate in pixels
        const padding = 40; // for window padding and chrome
        let estimatedWidth = Math.min(Math.max(message.length * avgCharWidth / 2 + padding, 200), 500);

        const left = Math.floor(Math.random() * (window.innerWidth - estimatedWidth));
        const top = Math.floor(Math.random() * (window.innerHeight - 50)); // assume base height

        const popup = document.createElement('div');
        popup.classList.add('window2', 'popup');
        popup.style.width = `${estimatedWidth}px`;
        popup.style.left = `${left}px`;
        popup.style.top = `${top}px`;
        popup.style.height = "auto"; // Let height flow naturally

        // Preserve newlines in poetry
        const formattedMessage = message.replace(/\n/g, "<br>");

        popup.innerHTML = `
        <div class="title-bar">
            <div class="title-bar-text">${title}</div>
            <div class="title-bar-ctrl">
                <button class="close" id="mini">&#95;</button>
                <button class="close" id="XCls">&#10006;</button>
            </div>
        </div>
        <div class="window-body" style="font-size:12px">
            <p>${formattedMessage}</p>
            <span class="hired">Am I hired or what?</span>
        </div>
        `;

        popup.querySelector('#mini').onclick = () => popup.re();
        popup.querySelector('#XCls').onclick = () => popup.remove();


        document.body.appendChild(popup);
    }
};