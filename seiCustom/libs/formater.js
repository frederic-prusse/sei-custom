var SeiCustom = SeiCustom || {}
SeiCustom.Libs = SeiCustom.Libs || {};
SeiCustom.Libs.Formater = class {
    constructor(text, seeds){
        this.text = text;
        this.seeds = seeds;
    }

    ellipis = function () {
        let line = this.applySeeds();
        return `<div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${line}</div>`;
    }

    applySeeds = function () {
        if(typeof this.seeds !== "object")
            return "";

        let text = this.text;
        for(var seed in this.seeds){
            text = text.replace(seed, this.seeds[seed]);
        }

        return text;
    }
}