var t=require("xmldom");exports.HTMLToJSON=function(e,r){void 0===r&&(r=!1);try{return Promise.resolve(new Promise(function(n,o){try{var i,s={};if("string"==typeof e){var a=(new t.DOMParser).parseFromString(e,"text/xml");a.firstChild&&(i=a.firstChild)}else i=e;!function t(e,r){void 0===r&&(r=s),r.type=e.nodeName;var n=e.childNodes;if(null!==n&&n.length){r.content=[];for(var o=0;o<n.length;o++)3===n[o].nodeType?n[o].nodeValue&&r.content.push(n[o].nodeValue):(r.content.push({}),t(n[o],r.content[r.content.length-1]))}if(null!==e.attributes&&e.attributes.length){r.attributes={};for(var i=0;i<e.attributes.length;i++)r.attributes[e.attributes[i].nodeName]=e.attributes[i].nodeValue}}(i),n(r?JSON.stringify(s):s)}catch(t){o(t)}}))}catch(t){return Promise.reject(t)}},exports.JSONToHTML=function(e,r){void 0===r&&(r=!0);try{return Promise.resolve(new Promise(function(n,o){try{var i=e;"string"==typeof e&&(i=JSON.parse(e));var s=function t(e){var r="<"+e.type;return e.attributes&&Object.entries(e.attributes).forEach(function(t){r+=" "+t[0]+'="'+t[1]+'"'}),r+=">",e.content&&e.content.forEach(function(e){r+="string"==typeof e?e:t(e)}),r+="</"+e.type+">"}(i);n(r?s:(new t.DOMParser).parseFromString(s,"text/xml"))}catch(t){o(t)}}))}catch(t){return Promise.reject(t)}};
//# sourceMappingURL=index.cjs.map
