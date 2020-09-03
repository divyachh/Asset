({
    downloadFile : function (component, event, helper){
        
        var actiondownload = component.get("c.loadContentVersion");
        actiondownload.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                //component.set("v.base64Value", response.getReturnValue());
               var response =response.getReturnValue();
               //component.set("v.base64Value", response[0]);
               //component.set("v.contentType", response[1]);
               console.log(JSON.stringify(response.getReturnValue())); 
               
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(actiondownload);
    }
    
    
})
