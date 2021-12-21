/*
POWER MODS
-Cyxie
-Merari01
-Awkwardtheturtle
-Gallowboob
-Siouxsie_siouxv2
*/
var mods = [
    'Cyxie',
    'Merari01',
    'awkwardtheturtle',
    'GallowBoob',
    'Siouxsie_siouxv2'
];
chrome.runtime.sendMessage({greeting: window.location.href}, function(response) {
    console.log(response.farewell);
});
if (window.location.href.substr(0, 22) == "https://www.reddit.com" || window.location.href.substr(0, 19) == "https://reddit.com") {
    var checker = window.setInterval(function() {
        console.log('***********************hi2');
        for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
            for (let j = 0; j < document.getElementsByTagName("div")[i].className.length; j++) {
                if (document.getElementsByTagName("div")[i].className.substr(j, 12) == "promotedLink") {
                    console.log('delete promoted');
                    document.getElementsByTagName("div")[i].parentNode.removeChild(document.getElementsByTagName("div")[i]);
                }
                else {
                    console.log(document.getElementsByTagName("div")[i].className);
                }
                if (document.getElementsByTagName("div")[i].className.substr(j, 4) == "Post" || document.getElementsByTagName("div")[i].className.substr(j, 7) == "Comment") {
                    for (let k = 0; k < document.getElementsByTagName("div")[i].getElementsByTagName("a").length; k++) {
                        for (let l = 0; l < mods.length; l++) {
                            if (document.getElementsByTagName("div")[i].getElementsByTagName("a")[k].href == "https://www.reddit.com/user/" + mods[l] + "/") {
                                console.log('delete power mod post');
                                document.getElementsByTagName("div")[i].parentNode.removeChild(document.getElementsByTagName("div")[i]);
                            }
                        }
                    }
                }
                if (document.getElementsByTagName("div")[i].className.substr(j, 12) == "scrollerItem") {
                    for (let k = 0; k < document.getElementsByTagName("div")[i].getElementsByTagName("a").length; k++) {
                        if (document.getElementsByTagName("div")[i].getElementsByTagName("a")[k].href.substr(0, 5) == "/rpan") {
                            console.log('delete live');
                            document.getElementsByTagName("div")[i].parentNode.removeChild(document.getElementsByTagName("div")[i]);
                        }
                    }
                }
            }
            
        }
    }, 1000);
}
else {
    console.log(window.location.href.substr(0, 22));
}
