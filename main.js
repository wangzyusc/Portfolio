var viewpedestrian = false;
function ViewPedestrianDetection(){
    if(viewpedestrian == false){
        viewpedestrian = true;
        $("#pedestrian".html("<div>Fast R-CNN algorithm pipeline</div>"+
                    "<img width='50%' src='src/PedestrianDetection/FastRCNN.png'>"+
                    "<div>CaffeNet network structure</div>"+
                    "<img width='70%' src='src/PedestrianDetection/CaffeNet.png'>"+
                    "<div>Precision and Recall curve with respect to IoU</div>"+
                    "<img width='45%' src='src/PedestrianDetection/Pre-IoU.png'>"+
                    "<img width='45%' src='src/PedestrianDetection/Rec-IoU.png'>"+
                    "<div>Some detection examples</div>"+
                    "<div>Bounding boxes: Red - Ground truth, Green - Detection result</div>"+
                    "<img width='47%' src='src/PedestrianDetection/example1.png'>"+
                    "<img width='47%' src='src/PedestrianDetection/example2.png'>"+
                    "<img width='47%' src='src/PedestrianDetection/example3.png'>"+
                    "<img width='47%' src='src/PedestrianDetection/example4.png'>"));
    }
    else{
        viewpedestrian = false;
        $("#pedestrian").html("");
    }
}