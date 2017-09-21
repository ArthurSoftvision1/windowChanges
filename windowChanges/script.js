var itemsList = document.querySelectorAll('.style-options');

for (var i = 0; i< itemsList.length; i++) {
  itemsList[i].addEventListener("click", (param) => {
    function getCurrentWindow() {
      return browser.windows.getCurrent(); // get current window
    }
  
    if (param.target.id === "change-size") { // modify window size
      getCurrentWindow().then((currentWindow) => {
        var ObjInfo = {
          width: 768,
          height: 1024
        };
  
        browser.windows.update(currentWindow.id, ObjInfo);
      });
    }

    if (param.target.id === "change-size-1200") { // modify window size to 1200
      getCurrentWindow().then((currentWindow) => {
        var ObjInfo = {
          width: 1200,
          height: 1024
        };
  
        browser.windows.update(currentWindow.id, ObjInfo);
      });
    }
  
    if (param.target.id === "minimize") { // minimize window
      getCurrentWindow().then((currentWindow) => {
        var ObjInfo = {
          state: "minimized" // make the window state minimized
        };
  
        browser.windows.update(currentWindow.id, ObjInfo);
      });
    }
  
    else if (param.target.id === "open-new-window") { // open new window

      let newWindowObj = {}; // createData object 
      let creating = browser.windows.create(newWindowObj);

    }
  
    else if (param.target.id === "incognito-window") { // create incognito window

      let incognitoObj = {
        incognito: true, // sets the window to be incognito
      };

      let creating = browser.windows.create(incognitoObj);
    }
  
    else if (param.target.id === "popup-start") { // create pop-up

      let popUpObj = {
        type: "popup", // sets type window to pop-up
      };

      let creating = browser.windows.create(popUpObj);
    }
  
    else if (param.target.id === "remove") { // close the window

      getCurrentWindow().then((currentWindow) => {
        browser.windows.remove(currentWindow.id); // remove/close the current window
      });

    }
  
    param.preventDefault(); // prevent default action
  }); 
}

    
    

    
    