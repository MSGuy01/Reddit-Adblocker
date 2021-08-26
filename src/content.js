chrome.runtime.sendMessage({greeting: window.location.href}, function(response) {
    console.log(response.farewell);
  });
var checker = window.setInterval(function() {
    for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
        for (let j = 0; j < document.getElementsByTagName("div")[i].className.length; j++) {
            if (document.getElementsByTagName("div")[i].className.substr(j, 8) == "promoted") {
                //console.log('delete promoted');
                document.getElementsByTagName("div")[i].parentNode.removeChild(document.getElementsByTagName("div")[i]);
            }
            if (document.getElementsByTagName("div")[i].className.substr(j, 4) == "Post" || document.getElementsByTagName("div")[i].className.substr(j, 7) == "Comment") {
                for (let k = 0; k < document.getElementsByTagName("div")[i].getElementsByTagName("a").length; k++) {
                    if (document.getElementsByTagName("div")[i].getElementsByTagName("a")[k].href == "https://www.reddit.com/user/GallowBoob/") {
                        //console.log('delete power mod post');
                        document.getElementsByTagName("div")[i].parentNode.removeChild(document.getElementsByTagName("div")[i]);
                    }
                }
            }
            if (document.getElementsByTagName("div")[i].className.substr(j, 12) == "scrollerItem") {
                for (let k = 0; k < document.getElementsByTagName("div")[i].getElementsByTagName("a").length; k++) {
                    if (document.getElementsByTagName("div")[i].getElementsByTagName("a")[k].href.substr(0, 27) == "https://www.reddit.com/rpan") {
                        //console.log('delete live');
                        document.getElementsByTagName("div")[i].parentNode.removeChild(document.getElementsByTagName("div")[i]);
                    }
                }
            }
        } 
        
    }
}, 1000);