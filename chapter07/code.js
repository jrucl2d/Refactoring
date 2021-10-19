// const organization = {name: "애크미 구스베리", country: "GB"};

// function getRawDataOfOrganization() {
//     return organization;
// }

// const result = `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기 예
// getRawDataOfOrganization().name = "new name"; // 쓰기 예

class Organization {
    constructor(data) {
        this._data = data;
    }
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getRawDataOfOrganization() {return organization.data;}
function getOrganization() {return organization;}