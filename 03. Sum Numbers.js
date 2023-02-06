function sumNumbers (input){
    let n = Number(input[0]);
    let currentN = Number(input[1]);
    let index = 1;
    let sum = 0;

    while (sum < n) {
        currentN = Number(input[index]);
        sum += currentN;
        index++;
    }
    console.log(sum);
}
sumNumbers 
(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

