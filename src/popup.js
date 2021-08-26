chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.greeting);
      if (request.greeting.substr(0, 22) == "https://www.reddit.com" || request.greeting.substr(0, 19) == "https://reddit.com") {
          localStorage.setItem("reddit", "yes");
      }
      else {
          localStorage.setItem("reddit", "no");
          document.body.innerHTML = "<h3 align='center'>Reddit Adblocker is Not Currently Running</h3>";
      }
    sendResponse({farewell: "goodbye"});
    }
);
if (localStorage.getItem("reddit") == "no") {
    document.body.innerHTML = "<h3 align='center'>Reddit Adblocker is Not Currently Running</h3>";
}
