var clicked_element = null;

document.addEventListener("contextmenu", function(event){
    clicked_element = event.target;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "get_clicked_element") {
        try{
            const element = clicked_element.parentNode.children[0];
            
            element.contains(document.querySelector('video')) ? 
            sendResponse({value: element.getElementsByTagName("video")[0].getAttribute("src") }) :
            sendResponse({value: element.getElementsByTagName("img")[0].getAttribute("src") })
        }catch (error){
            sendResponse({value: null});
        }
    }
});