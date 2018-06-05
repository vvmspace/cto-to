const CB = new CrossB();

class BG {

    constructor(){
        this.initTicker();
    }

    tick(){
        $.getJSON('http://tbot.vvm.space/api/sin/cto-btc', (data) => {
            // alert(JSON.stringify(data.to));
            chrome.browserAction.setBadgeText({
                text: data.to.toString()
            });
            chrome.browserAction.setBadgeBackgroundColor({
                color: "green"
            });
        });
    }

    initTicker(){
        setInterval(
            () => {
                this.tick();
            },
            1000
        )
    }

    static init(){
        let bg = new BG();
    }
}

$(function () {
   BG.init();
});