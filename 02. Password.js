function password (input){
    /* let name = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;

    while (data !== password) {
        data = input[index];
        index++;
    } */

    let index = 0;

    let name = input[index];
    index++;
    let password = input[index];
    index++;
    let tempPassword = input[index];
    index++;

    while (tempPassword !== password) {
        tempPassword = input[index];
        index++;     
    }
    console.log(`Welcome ${name}!`);
}
password 
(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
