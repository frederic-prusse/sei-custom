var SeiCustom = SeiCustom || {}
SeiCustom.Libs = SeiCustom.Libs || {};
SeiCustom.Libs.Setting = class {
    constructor(){
        this.detectStyle();    
    }

    detectStyle = function (){
        var regex = new RegExp(".*?\\/esquemas\\/(.*)\\/.*","gi");
        var esquema_class = Array.prototype.slice.call(document.querySelectorAll('link'))
            .find(function(obj){
                return regex.test(obj.href);
            }).href || "";
        this.schema = esquema_class.replace(/.*?\/esquemas\/(.*)\/.*/gi, '$1');
    }
}

window.SeiCustomSettings = new SeiCustom.Libs.Setting();