var getUrlParams = function (url) 
{
  var params = {};
  (url + '?').split('?')[1].split('&').forEach(
    function (pair) 
    {
       pair = (pair + '=').split('=').map(decodeURIComponent);
       if (pair[0].length) 
       {
         params[pair[0]] = pair[1];
       }
  });

  return params;
};
var params = getUrlParams( window.location.href );

	keyText = prompt("DO NOT CLOSE THIS ALERT Before You Done The INSTRUCTION below!                                                                                                   This page ONLY Useful, if you came here from PayPal after Purchasing!                                                                                           If NOT, the PASSWORD will not appear here, then you cannot access this page !                                                                                                                                                                   But if YOU came here from PayPal after purchasing the product,  then see the PASSWORD below, SELLECT and COPY that! It will useful for the NEXT Step!", params.ai);
