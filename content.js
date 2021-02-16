
document.querySelectorAll('table#tblProcessosRecebidos>tbody>tr>td:nth-child(3)>a').forEach(pmjFormatSeiProcessLine);
document.querySelectorAll('table#tblProcessosGerados>tbody>tr>td:nth-child(3)>a').forEach(pmjFormatSeiProcessLine);

function pmjFormatSeiProcessLine(obj, _, _){
    var params = obj.getAttribute('onmouseover').match(/return infraTooltipMostrar\('(.*?)','(.*?)'\);/);
    if(params[1] === undefined)
        params[1]='';

    if(params[2] === undefined)
        params[2]='';

    var text_formated = '<div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">'
                        +'<b>'+obj.text + '</b> - <span>' + params[2] +'</span></div>'
                        +'<div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; margin-bottom: 0.75em">'+params[1]+'</div>';
    obj.text = '';
    obj.innerHTML = text_formated;
    obj.parentElement.align = 'left';
    obj.parentElement.style.maxWidth = '0';

    // td             tr             tbody        table
    obj.parentElement.parentElement.parentElement.parentElement.style.width = '100%';
    obj.parentElement.parentElement.querySelector('td:nth-child(2)').style.maxWidth = '0';

    var sei_esquema = pmjDetectStyle();
    if(sei_esquema == "")
        sei_esquema = 'default';

    var table_css = "pmj_"+sei_esquema;
    obj.parentElement.parentElement.parentElement.parentElement.classList.add(table_css);
}


function pmjDetectStyle(){
    var regex = new RegExp(".*?\\/esquemas\\/(.*)\\/.*","gi");
    var esquema_class = Array.prototype.slice.call(document.querySelectorAll('link'))
        .find(function(obj){
            return regex.test(obj.href);
        }).href || "";
    return esquema_class.replace(/.*?\/esquemas\/(.*)\/.*/gi, '$1');
}
