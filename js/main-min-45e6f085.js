!function(a,e,s,t){"use strict";var i=a(".episode-links"),o=a(".subscribe-links"),n=a(".social-share-links");new s(".copylink").on("success",function(){a("#modal").find(".copy-ok").addClass("show")}),i.on("click",function(s){s.preventDefault();var t=a(s.target);t.hasClass("episode-subscribe-link")?e.Modal.createModal(s.target,a("#"+t.data("subscribeLinks")),{title:"Subscribe"}):t.hasClass("episode-share-link")?e.Modal.createModal(s.target,a("#"+t.data("shareLinks")),{title:"Share"}):t.hasClass("episode-shownotes-link")&&e.Modal.createModal(s.target,a("#"+t.data("shownotes")),{title:"Show Notes"})}),o.on("click","a",function(e){var s=a(this),i=s.parents(".subscribe-links:first"),o=s.data("service");t.push({"data-listen-platform":o,"data-podcast-title":i.data("episode-title"),event:"listen-with"})}),n.on("click","a",function(e){var s=a(this),i=s.parents(".social-share-links:first"),o=s.data("service");"copylink"===o&&e.preventDefault(),t.push({"data-share-network":o,"data-podcast-title":i.data("episode-title"),event:"social-share"})})}(window.jQuery,window.Mozilla,window.Clipboard,window.dataLayer||[]);