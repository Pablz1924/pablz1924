PW_LANGUAGECODE=_("EN");PW_ORDERLABEL=_("Order number: {OrderID}");function PW_RemoveAccents(_0x5Af){return _0x5Af.replace(/[Ã Ã¡Ã¢Ã£Ã¤Ã¥]/gi,'a').replace(/[Ã§]/gi,'c').replace(/[Ã¨Ã©ÃªÃ«]/gi,'e').replace(/[Ã¬Ã­Ã®Ã¯]/gi,'i').replace(/[Ã±]/gi,'n').replace(/[Ã°Ã²Ã³Ã´ÃµÃ¶]/gi,'o').replace(/[Ã¹ÃºÃ»Ã¼]/gi,'u').replace(/[Ã½Ã¿]/gi,'y').replace(/[Ã€ÃÃ‚ÃƒÃ„Ã…]/gi,'A').replace(/[Ã‡]/gi,'C').replace(/[ÃˆÃ‰ÃŠÃ‹]/gi,'E').replace(/[ÃŒÃÃŽÃ]/gi,'I').replace(/[Ã‘]/gi,'N').replace(/[Ã’Ã“Ã”Ã•Ã–]/gi,'O').replace(/[Ã™ÃšÃ›Ãœ]/gi,'U').replace(/[ÃÅ¸]/gi,'Y');}function PW_ReturnValueFromList(c3ry,aZPip,_0xFD4Af){var op9A=aZPip.split('|');var _0x5a08D='';for(var dsEh=0;dsEh<op9A.length;dsEh++){var $eFC69=op9A[dsEh].split('^');if(c3ry==$eFC69[0]){return($eFC69[$eFC69.length-1]);}else if(_0xFD4Af&&_0xFD4Af==$eFC69[0])_0x5a08D=$eFC69[$eFC69.length-1];}if(!_0xFD4Af)return('');return(_0x5a08D);}function PW_BuildPostParam(zyY,$86Dd,_0xBA4,$D8C8){if(!_0xBA4)return("");if(zyY)return('<input type="hidden" name="'+$86Dd+'" value="'+_0xBA4+'" />');return(($D8C8?'':'&')+$86Dd+'='+encodeURIComponent(_0xBA4));}function PW_ClearJSstring(_0x5Af){return _0x5Af.replace(/"/gi,'\'');}function PW_GetOrderLabel(){var _0x5Af=PW_ClearJSstring(PW_ORDERLABEL);return _0x5Af.replace(_("{OrderId}"),$1a6());}
