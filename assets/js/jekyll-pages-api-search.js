// (function() {
/*
 * Params:
 * - query: query string
 * - results: search results matching the query
 * - doc: window.document object
 * - resultsElem: HTML element to which generated search results elements will
 *     be appended
 */
function renderJekyllPagesApiSearchResults(query, results, doc, resultsElem) {
  $('#search-loading').hide();
  results.forEach(function(result, index) {
    var resultTitle = result.title;
    console.log(result);
    console.log(result.score);
    console.log(result.url);
    // console.log(result.matchData);
    console.log(result.ref);
    // console.log(result.tags);
    // console.log(result.categories);
    // console.log(result.body);
    console.log(results.length);

    // if (results.length) { // Are there any results?
    //   var appendString = '';

    //   for (var i = 0; i < results.length; i++) {  // Iterate over the results
    //     var item = store[results[i].ref];
    //     appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
    //     appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
    //   }

    //   searchResults.innerHTML = appendString;
    // } else {
    //   searchResults.innerHTML = '<li>No results found</li>';
    // }

    var errorPages =
      resultTitle === '404' || resultTitle === '500' || resultTitle === '';

    if (resultTitle && !errorPages) {
      var item = doc.createElement('li'),
        link = doc.createElement('a'),
        text = doc.createTextNode(resultTitle);

      link.append(text);
      link.title = result.title;
      link.href = result.url;

      item.append(link);
      resultsElem.append(item);

      link.tabindex = index;
      if (index === 0) {
        link.focus();
      }
    }
  });
}
// })();
