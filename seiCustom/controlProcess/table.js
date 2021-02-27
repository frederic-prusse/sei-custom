var SeiCustom = SeiCustom || {}
SeiCustom.ControlProccess = SeiCustom.ControlProccess || {};
SeiCustom.ControlProccess.Table = class {    
    constructor(table){
        this.table = table;
        this.rawLines = [];
        this.lines = {};

        this.loadLines();
    }

    loadLines = function () {
        let rawLines = this.table.querySelectorAll("tr.infraTrClara");
        rawLines.forEach(element => {
            let line = new SeiCustom.ControlProccess.Process(element);
            this.lines[line.id] = line;
        });
    }

    customize = function () {
        let schema = window.SeiCustomSettings.schema;
        if(schema == "")
        schema = 'default';

        let table_css = "pmj_"+schema;
        this.table.classList.add(table_css);
        this.table.classList.add('sei_custom_control_process');
        this.table.style.width = '100%';
        
        for(let id in this.lines) {           
            this.lines[id].customize();
        }
    }
}