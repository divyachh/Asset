({
    downloadFile : function (component, event, helper){
         console.log('*****');
        var actiondownload = component.get("c.loadContentVersion");
        /*actiondownload.setParams({
            "documentName":"Hero 2"
        });*/
        actiondownload.setCallback(this, function(response){
            var state = response.getState();
            console.log(state);
            if (state === "SUCCESS") {
                //component.set("v.base64Value", response.getReturnValue());
               var documentLink =  response.getReturnValue();
               component.set("v.documentLink",documentLink);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(actiondownload);
    }
    
    
})
