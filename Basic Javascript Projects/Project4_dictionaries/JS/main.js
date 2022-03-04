//Dictionary//
function my_Dictionary() {
    var Country = {
        Name: "France",
        Language: "French",
        States: 27,
        Animal: "papillon"
    };
    delete Country.Animal; //Word operator "delete" removes the dog info//
    document.getElementById("Dictionary").innerHTML = Country.Animal; 
}