function addContact(name,mobile,home="없음"){
    console.log("name: " + name + " mobile: " + mobile + " home: " + home);

}

addContact("John Doe", "010-1234-5678");
addContact("Lee", "010-4321-5678","SamsungDong");

function food(name,mobile,...foods){
    console.log("name: " + name + " mobile: " + mobile + " "+foods);
    
}
food("John Doe", "010-1234-5678","짜장","냉면","라면");
food("Joe", "010-1234-5678","라면");
