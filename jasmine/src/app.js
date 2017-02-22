var form = document.querySelector('#request')
var searchInput = document.getElementsByName('search')[0]


form.addEventListener('submit', function(e) {
    e.preventDefault()
    var searchValue = searchInput.value
    var url = `https://api.github.com/users/${searchValue}/repos`
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(appendToDom)
        .catch(logError)
})


function createHTML(listResults) {
    return listResults.map((repo) =>
        `<li>${ repo.name }<span>${ repo.forks_count }</span><span>${ repo.stargazers_count }</span></li>` + '\n'
    ).join('')
}

function getImage(listResults) {
    return listResults[0].owner.avatar_url
}

function userLog(listResults) {
    if (undefined === userName) {
        var userName = listResults.name
        console.log(userName)
        var userEmail = listResults.email
        document.getElementById('fullname').innerHTML = userName
        document.getElementById('userInfo').innerHTML = userEmail
    }
}

function appendToDom(listResults) {

    const repos = "Repositories"
    const html = createHTML(listResults)
    const img = getImage(listResults)
    document.getElementById('list').innerHTML = html
    document.getElementById('usersImg').src = img
    document.getElementById('repository').innerHTML = repos
    var searchUser = searchInput.value
    var urluser = `https://api.github.com/users/${searchUser}`
    fetch(urluser)
        .then(function(response) {
            return response.json()
        })
        .then( userLog )
        .catch(logError)
}

function logError(error) {
    var sendErr = '<p>' + 'User does not exist' + '</p>'
    document.getElementById('error').innerHTML = sendErr
}
