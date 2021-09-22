/*
First challenge

Joe and Tom are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).  (mass in kg and height in meter).

1. Store Joe and Tom's mass and height in variables.
2. Calculate both of the BMIs.
3. Using Boolean operations, determine whether Tom has a higher BMI than Joe and vise versa.
4. Print the results to the console on a nice string message.

*/ 

var joeMass; var joeHeight; var joeBMI;
var tomMass; var tomHeight; var tomBMI;
var biggerBMI = joeBMI > tomBMI;

joeBMI = joeMass / (joeHeight * joeHeight);
tomBMI = tomMass / (tomHeight * tomHeight);

joeMass = prompt('What is the mass of Joe?' );
joeHeight = prompt('What is the height of Joe?' );
tomMass = prompt('What is the mass of Tom?' );
tomHeight = prompt('What is the height of Tom?' );

console.log(joeBMI, tomBMI);

if(joeBMI > tomBMI){
    console.log('The BMI of Joe is bigger than Tom');
}
else{
    console.log('The BMI of Tom is bigger than Joe');
}



/*
Second Challenge

John and mike both play basketball in different teams.  in the latest 3 games, john's team scored 89, 120, and 103 points, while mike's team scored 116, 94, and 123 points.

1. calculate the average score for each team.
2. determine which team wins in average (highest average score), and print the winner to the console.  also include the average score in the output.
3. change teh scores to show different winners.

*/

var teamJohnavg = (89, 120, 103) / 3;
var teamMikeavg = (116, 94, 123) / 3;



/* 
Third Challenge

Annie and her family went on a holiday and went to 3 different restaurants.  The bills were $124, $48 and $268.  To tip the waitress a fair amount, Annie created a simple tip calculator.  She likes to tip 20% of the bill when the bill is less that $50, 15% when the bill is between %50 and $200, and 10% if teh bill is more tham $200.

in the end Annie would like to have 2 arrays:
1. one containing all three tips (one for each bill)
2. one containing all three final paid amounts (bill + tip)



*/