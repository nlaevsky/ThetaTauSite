var LCMS=LCMS||{};(function(n){var t=n;n(document).ready(function(){function t(n,t,i){var r="",u;t&&(r="&t="+t,i&&(r=r+"&i="+i)),u="/?Key=Search&q="+encodeURIComponent(n.replace(/<|>|'|;|:/gi,"")).replace(/%20/gi,"+")+r,window.location.href=u}n(".searchButton").on("click",function(){var i=n(this),f=n("#"+i.data("id")).val(),u=n("#"+i.data("id")).data("target"),r=n("#"+i.data("id")).data("show-info");t(f,u,r)});n(".searchInput").on("keydown",function(i){if(i.keyCode===13){i.preventDefault(),i.stopPropagation();var u=n(this).data("target"),r=n(this).data("show-info");t(this.value,u,r)}})})})(LCMS.jq)
