Parse.initialize("MREHdC9OjtXDq5Y9hllrZ16vk3ccFF6ZLBTRxrSK","r0ycB4sOzGJbZO3cmQPldt0G0KusZ8RmAI9pRLJe"),$(function(){function a(){$(".count").text(f);var a=$(".clear-all");0===f?a.attr("disabled","disabled").addClass("disabled"):a.removeAttr("disabled").removeClass("disabled")}function b(){return"reminder-"+ +new Date}var c,d,e,f=0,g=function(a,b){localStorage.setItem(a,b)},h=function(a){var b=$("#"+a);b.focus().append($("<button />",{"class":"icon-save save-button",click:function(){b.attr("contenteditable","false");var c=b.text(),d=$(".save-notification");if(c)localStorage.setItem(a,c),d.show(),setTimeout(function(){d.hide()},2e3),$(this).remove(),$(".icon-pencil").show();else{var e=confirm("Delete this item?");e&&k(a)}}}))},i=function(b){localStorage.removeItem(b),f--,a()},j=function(){var a=$(".undo-button");setTimeout(function(){a.fadeIn(300).on("click",function(){l(c,d,e),$(this).fadeOut(300)}),setTimeout(function(){a.fadeOut(1e3)},3e3)},1e3)},k=function(a){var b=$("#"+a);c=a,d=b.text(),e=b.index(),b.addClass("removed-item").one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){$(this).remove()}),i(a),d&&j()},l=function(b,c,d){var e='<li id="'+b+'">'+c+"</li>",i=$(".reminders li");if(!$("#"+b).length){if(d&&d<i.length){var j=d+1;e=$(e).addClass("restored-item"),$(".reminders li:nth-child("+j+")").before(e)}0===d&&(e=$(e).addClass("restored-item"),$(".reminders").prepend(e)),d===i.length&&(e=$(e).addClass("restored-item"),$(".reminders").append(e)),void 0===d&&(e=$(e).addClass("new-item"),$(".reminders").append(e));var l=$("#"+b);l.append($("<button />",{"class":"icon-trash delete-button",contenteditable:"false",click:function(){var a=confirm("Delete this item?");a&&k(b)}})),l.append($("<button />",{"class":"icon-pencil edit-button",contenteditable:"false",click:function(){l.attr("contenteditable","true"),h(b),$(this).hide()}})),l.on("keydown",function(a){return 13===a.keyCode?!1:void 0}),g(b,c),f++,a()}},m=function(){$("#input-form").on("submit",function(a){var c=$("#text"),d=c.val();if(a.preventDefault(),d){var e=d,f=b();l(f,e),c.val("")}})},n=function(){if(0!==localStorage.length)for(var a in localStorage){var b=localStorage.getItem(a);0===a.indexOf("reminder")&&l(a,b)}},o=function(){$(".clear-all").on("click",function(){if(confirm("Are you sure you want to delete all the items in the list? There is no turning back after that.")){var b=$("li[id ^= reminder]");b.addClass("removed-item").one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){$(this).remove()});for(var c in localStorage)0===c.indexOf("reminder")&&localStorage.removeItem(c);f=0,a()}})},p=function(){$("#text").focus(),n(),o(),m(),a()};p()})();