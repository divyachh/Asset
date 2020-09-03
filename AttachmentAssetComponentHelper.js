({
    downloadfile : function (component, event, helper){
        
        var actiondownload = component.get("c.loadContentVersion");
        actiondownload.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                //component.set("v.base64Value", response.getReturnValue());
               var xyz =response.getReturnValue();
               component.set("v.base64Value", xyz[0]);
               component.set("v.contentTyp", xyz[1]);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    }
    
    
})
