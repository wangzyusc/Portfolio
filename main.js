function switch2bio(){
    $("#navbio").css("color","#f1f1f1").css("font-weight","bold");
    $("#navresearch").css("color","#919191").css("font-weight","normal");
    $("#navwork").css("color","#919191").css("font-weight","normal");
    $("#navproject").css("color","#919191").css("font-weight","normal");
    $("#biography").css("display","block");
    $("#research").css("display","none");
    $("#workexp").css("display","none");
    $("#project").css("display","none");
}

function switch2research(){
    $("#navbio").css("color","#919191").css("font-weight","normal");
    $("#navresearch").css("color","#f1f1f1").css("font-weight","bold");
    $("#navwork").css("color","#919191").css("font-weight","normal");
    $("#navproject").css("color","#919191").css("font-weight","normal");
    $("#biography").css("display","none");
    $("#research").css("display","block");
    $("#workexp").css("display","none");
    $("#project").css("display","none");
}

function switch2work(){
    $("#navbio").css("color","#919191").css("font-weight","bold");
    $("#navresearch").css("color","#919191").css("font-weight","normal");
    $("#navwork").css("color","#f1f1f1").css("font-weight","bold");
    $("#navproject").css("color","#919191").css("font-weight","normal");
    $("#biography").css("display","none");
    $("#research").css("display","none");
    $("#workexp").css("display","block");
    $("#project").css("display","none");
}

function switch2project(){
    $("#navbio").css("color","#919191").css("font-weight","normal");
    $("#navresearch").css("color","#919191").css("font-weight","normal");
    $("#navwork").css("color","#919191").css("font-weight","normal");
    $("#navproject").css("color","#f1f1f1").css("font-weight","bold");
    $("#biography").css("display","none");
    $("#research").css("display","none");
    $("#workexp").css("display","none");
    $("#project").css("display","block");
}