chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting.substr(0, 24) == "https://www.reddit.com/") {
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