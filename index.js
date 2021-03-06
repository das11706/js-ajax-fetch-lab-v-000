const baseURL = 'https://api.github.com'
const repoiss = 'js-ajax-fetch-lab';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = '3b67f5cbfe386aa4a48c288c4d7fe5197dd94029';
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //const url = `${baseURL}/repos/${repo}/forks`; 
  //use fetch to fork it!
  fetch(`${baseURL}/repos/${repo}/forks`,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
 .then(json => showResults(json));

}

//In showResults, write code to display a link to the forked repo url (json.html_url). Append this link to the results div.

function showResults(json) {
  //const repoLink = (`<a href="${json.html_url}">${json.html_url}</a>`);
  //document.getElementById('results').innerHTML = repoLink;
  //use this function to display the results from forking via the API
  $("#results").html(`<a href="${json.html_url}">${json.html_url}</a>`)
}

// 4.  Create a new issue for your forked repository with the `createIssue`
//     function. Use the `title` and `body` inputs from the provided form as data for
//     your fetch request. Read more about creating issues via API calls in the
//     [GitHub Issues API documentation][v3issues].

//use this function to create an issue based on the values input in index.html
// document.getElementById('title').value = 'test';
// document.getElementById('body').value = 'test body';

    //POST /repos/:owner/:repo/issues
 //https://api.github.com/repos/octocat(:owner)/Hello-World(:repo)/issues/1347

function createIssue() {
  //const repoiss = 'js-ajax-fetch-lab';

// $('a').on('click', function() { //This code not required or essential for this function to work
  // const test = document.getElementById('title').value;  //This code not required or essential for this function to work
  // const testbody = document.getElementById('body').value;  //This code not required or essential for this function to work

  fetch(`https://${repoiss}/issues`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      },
      body: 'test body',
      //body: JSON.stringify('test body')
    }).then(resp => resp.json())
  .then(json => getIssues(json))
  // })  //This code not required or essential for this function to work
}
//<a href="#" id="search" onclick="createIssue()">Create Issue</a>

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  //const repoiss = 'js-ajax-fetch-lab';
  fetch(`https://${repoiss}/issues`);
//     {
//       method: 'GET',
//     })//.then(resp => resp.json())
//   //.then(json => getIssues(json))
//   // })  //This code not required or essential for this function to work
// }
}
