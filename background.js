chrome.browserAction.onClicked.addListener(function(tab) {
    if(tab.url.includes("instagram") && tab.url.includes("/stories/"))
        chrome.tabs.executeScript(tab.id, {file: "stories.js"});
});

chrome.contextMenus.create({
    title: "Open picture in new tab",
    id: 'context_item'
});
chrome.contextMenus.onClicked.addListener(context_menu_onClick);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    // console.log(tabId, changeInfo, tab);
    if(tab.url.includes("https://www.instagram.com/")){
        chrome.tabs.executeScript(tabId, {file: "photo.js"});
        if(tab.status === "complete")
            if(!tab.url.includes("/p/") || !tab.url.includes("/stories/") || !tab.url.includes("/explore/")){
                chrome.tabs.insertCSS(tabId, {file: "btn_style.css"});
                chrome.tabs.executeScript(tabId, {file: "user.js"});
            }
    }
})

function context_menu_onClick(info, tab) {
    chrome.tabs.sendMessage(tab.id, "get_clicked_element", function(clicked_element) {
        try{
            if(clicked_element.value !== null)
                window.open(clicked_element.value);
        }catch (error) {
            alert(error);   
        }
    });
}