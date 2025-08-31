const userdetail = document.querySelector(".userdetails");
const userprofile = document.querySelector(".userprofile");
const query = document.querySelector("#input");
const nouserfound = document.querySelector('.nofound');


const apiurl = "https://api.github.com/users";

async function fetchuserdata(username) {

    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.ok) {
            const result = await res.json();

            document.querySelector('.main').innerHTML =`<div class="userprofile">
            <div class="userimage">
                <img src="${result.avatar_url
                }">
            </div>
            <h1>${result.name}</h1>
            <p>${result.bio}</p>
            <P>${result.location}</p>
        </div>
        <div class="userdetails">
            <div class="detailbox1">
                <div class="follow">
                    <p>following</p><p>${result.following}</p>
                </div>
                <div class="follow">
                    <p>follower</p><p>${result.followers}</p>
                </div>
                <div class="follow">
                    <p>public Repos</p><p>${result.public_repos}</p>
                </div>
            </div>
          
                <button type="button" class="btn"><a href="${result.html_url}">view profile</button>
         
         </div>`
        }else{
            userprofile.classList.toggle("hide")
            userdetail.classList.toggle("hide");
            nouserfound.classList.remove('hide');
        }
    } catch (error) {
        alert(error);

    }
}

document.querySelector("#findbtn").addEventListener('click', () => {
    let username = query.value;
    if (username == "") { return; }
    fetchuserdata(username);
    query.value = "";
})

query.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        e.preventDefault()
        document.querySelector("#findbtn").click();
    }

})