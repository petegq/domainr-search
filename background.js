// Function to handle the context menu click event
function handleContextMenuClick(info, tab) {
    // Check if the clicked menu item has a selection text
    if (info.selectionText) {
      // Create the URL with the selected text
      const url = "https://domainr.com/?q=" + encodeURIComponent(info.selectionText);
      
      // Open the URL in a new tab and switch to it
      chrome.tabs.create({ url, active: true });
    }
  
    // Do something with the clicked context menu item
    console.log("Clicked menu item: " + info.menuItemId);
    console.log("Tab details:", tab);
  }
  
  // Create the context menu
  chrome.contextMenus.create({
    id: "domainrSearchContextMenu",
    title: "Domainr Search Menu",
    contexts: ["all"]
  });
  
  // Add a click event listener to the context menu
  chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
  