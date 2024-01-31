let tableList = JSON.parse(localStorage.getItem("recentProjects"))
let tbody = document.getElementById("tbody")
function render(){
    let myProject = tableList.map(function(recentProjects, index){
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${recentProjects.projectName}</td>
                <td>${recentProjects.imgUrl}</td>
                <td>${recentProjects.links}</td>
                <td>${recentProjects.tags}</td>
                <td>
                    <button type="button" class="btn btn-danger deletebtn">Delete</button>
                    <button type="button" class="btn btn-success deletebtn">Update</button>
                </td>
            </tr>`;
    })
    tbody.innerHTML = myProject.join("");
}
render();
