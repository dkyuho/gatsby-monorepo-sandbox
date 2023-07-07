/**
 * Check for valid absolute url e.g.
 * http://example.com, http://wwww.example.com, HTTP://EXAMPLE.COM, www.EXAMPLE.COM, https://www.example.com,
 * ftp://example.com/file.txt, //cdn.example.com/lib.js, git+ssh://example.con/item
 *
 * Will return false if "Mailto:", "Tel:", "example.com"
 */
export default (url) => url.indexOf('://') > 0 || url.indexOf('//') === 0 || url.indexOf('www') === 0
