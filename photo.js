var clicked_element = null;

document.addEventListener("contextmenu", function(event){
    clicked_element = event.target;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "get_clicked_element") {
        try{
            sendResponse({value: clicked_element.parentNode.children[0].getElementsByTagName("img")[0].getAttribute("src")});
        }catch (error){
            sendResponse({value: null});
        }
    }
});