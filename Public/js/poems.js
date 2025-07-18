window.onload = function(){

const messages = [
    "They are watching.",
    "Unexpected Error. Please Investigate.",
    "POEM 1",
    "You again? What are you doing here",
    "Windows 11 support ended. You are on your own Kid.",
    "POEM 2",
    "Do you love cats?",
    "404: Boredom Not Found.",
    "POEM 3",
    "You can't shut me down.",
    "POEM 4",
    "Don't click OK.",
    "POEM 5."
];
const titles = [
    "They are watching.",
    "Unexpected Error. Please Investigate.",
    "POEM 1",
    "You again? What are you doing here",
    "Windows 11 support ended. You are on your own Kid.",
    "POEM 2",
    "Do you love cats?",
    "404: Boredom Not Found.",
    "POEM 3",
    "You can't shut me down.",
    "POEM 4",
    "Don't click OK.",
    "POEM 5."
];

      const numberOfWindows = 12;

      for (let i = 0; i < numberOfWindows; i++) {
        const width = 250 + Math.floor(Math.random() * 150);
        const height = 100 + Math.floor(Math.random() * 100);
        const left = Math.floor(Math.random() * (window.screen.width - width));
        const top = Math.floor(Math.random() * (window.screen.height - height));
        const message = messages[Math.floor(Math.random() * messages.length)];
        const title = titles[Math.floor(Math.random() * titles.length)];


        const popup = window.open(
          "",
          "",
          `width=${width},height=${height},left=${left},top=${top}`
        );

        if (popup) {
            popup.document.write(`
                <div class="window">
                    <div class="title-bar" style="">
                        <div class="title-bar-text"> ${title} </div>
                    </div>            
                    <div class="window-body" style="padding: 1rem;">
                        <p> ${message}</p>
                    </div>
                </div>
            `);
        }
    };
};