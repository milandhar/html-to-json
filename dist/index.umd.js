!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("xmldom")):"function"==typeof define&&define.amd?define(["exports","xmldom"],e):e((t||self).htmlToJsonParser={},t.xmldom)}(this,function(t,e){t.HTMLToJSON=function(t,n){void 0===n&&(n=!1);try{return Promise.resolve(new Promise(function(r,o){try{var i,s={};if("string"==typeof t){var a=(new e.DOMParser).parseFromString(t,"text/xml");a.firstChild&&(i=a.firstChild)}else i=t;!function t(e,n){void 0===n&&(n=s),n.type=e.nodeName;var r=e.childNodes;if(null!==r&&r.length){n.content=[];for(var o=0;o<r.length;o++)3===r[o].nodeType?r[o].nodeValue&&n.content.push(r[o].nodeValue):(n.content.push({}),t(r[o],n.content[n.content.length-1]))}if(null!==e.attributes&&e.attributes.length){n.attributes={};for(var i=0;i<e.attributes.length;i++)n.attributes[e.attributes[i].nodeName]=e.attributes[i].nodeValue}}(i),r(n?JSON.stringify(s):s)}catch(t){o(t)}}))}catch(t){return Promise.reject(t)}},t.JSONToHTML=function(t,n){void 0===n&&(n=!0);try{return Promise.resolve(new Promise(function(r,o){try{var i=t;"string"==typeof t&&(i=JSON.parse(t));var s=function t(e){var n="<"+e.type;return e.attributes&&Object.entries(e.attributes).forEach(function(t){n+=" "+t[0]+'="'+t[1]+'"'}),n+=">",e.content&&e.content.forEach(function(e){n+="string"==typeof e?e:t(e)}),n+="</"+e.type+">"}(i);r(n?s:(new e.DOMParser).parseFromString(s,"text/xml"))}catch(t){o(t)}}))}catch(t){return Promise.reject(t)}}});
//# sourceMappingURL=index.umd.js.map
