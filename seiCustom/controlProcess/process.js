var SeiCustom = SeiCustom || {}
SeiCustom.ControlProccess = SeiCustom.ControlProccess || {};
SeiCustom.ControlProccess.Process = class {    
    constructor(trLine){
        this.line = trLine;
        this.id = trLine.id;

        this.parseLine();
    }

    parseLine = function () {
        this.parseLineNumber();
        this.parseLineTypeAndDescription();
    }

    parseLineNumber = function () {
        this.number = this.line.querySelector('td:nth-child(3) a:nth-child(1)').text || '';
    }

    parseLineTypeAndDescription = function () {
        let params = this.line.querySelector('td:nth-child(3) a:nth-child(1)').getAttribute('onmouseover').match(/return infraTooltipMostrar\('(.*?)','(.*?)'\);/);
        if(params[1] === undefined)
            params[1]='';
    
        if(params[2] === undefined)
            params[2]='';

        this.type = params[2];
        this.description = params[1];
    }

    parseLineUser = function () {
        this.user = this.line.querySelector('td:nth-child(4) a:nth-child(1)').text || '';
    }

    customize = function () {
        let second = this.line.querySelector('td:nth-child(2)');
        second.style.maxWidth = '0';

        let third = this.line.querySelector('td:nth-child(3)');
        let text_formated = `${this.getFormatedLine(this.customFormatFirstLine, this.defaultFormatFirstLine)}${this.getFormatedLine(this.customFormatSecondLine, this.defaultFormatSecondLine)}`;
        third.text = '';
        third.querySelector('a').innerHTML = text_formated;
        third.align = 'left';
        third.style.maxWidth = '0';
    }

    getFormatedLine = function (customLine, defaultLine) {
        if(customLine && customLine.trim() === "-"){
            return "";
        }

        let line = customLine || defaultLine;
        let seeds = {
            "[[NR]]": this.number,
            "[[TIPO]]": this.type,
            "[[DESC]]": this.description,
            "[[USUARIO]]": this.user
        };
       
        let formater = new SeiCustom.Libs.Formater(line, seeds);
        return formater.ellipis();
    }

    defaultFormatFirstLine = '<b>[[NR]]</b> - <span>[[TIPO]]</span>';
    defaultFormatSecondLine = '[[DESC]]';

    customFormatFirstLine = null;
    customFormatSecondLine = null;
}