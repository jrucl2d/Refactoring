// const organization = {name: "애크미 구스베리", country: "GB"};

// function getRawDataOfOrganization() {
//     return organization;
// }

// const result = `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기 예
// getRawDataOfOrganization().name = "new name"; // 쓰기 예

class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    set name(aString) {this._name = aString;}
    get name() {return this._name;}
    set country(aCountryCode) {this._country = aCountryCode;}
    get country() {return this._country;}
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getOrganization() {return organization;}

const result = `<h1>${getOrganization().name}</h1>`; // getter를 사용해 읽기
getOrganization().name = "new name"; // setter를 사용해 쓰기