# Pairs test

#### Task

```
You are given a list of integers, both positive and negative.
Each integer in the list must either be paired with another element in the list or be a single element.
Once the elements have been paired, the integers in the pairs are multiplied and
the results are summed up - the sum will include the single elements.
Write a program to find the sequence of pairs and singles which give the biggest possible sum,
and calculate this max sum.

Examples:
1. For the list [0,1,2,3,4,5] the pairs (4,5) and (2,3) are formed and 0 and 1 are single elements.
The max. sum is 27: (20+6+0+1).
2. For the list [-1,0,1] the pairs (-1,0) is formed and 1 is a single element.
The max. sum is 1.
3. For the list [1,1] no pairs are formed only two single elements.
The max. sum is 2. 

You choose how input/output is handled etc.
```

#### Implementation

This is a Node / Express server, that serves the static files.

Static page is shown to the user.

User can enter the values (**comma-separated, numbers and symbols**), and values are going to be processed accordingly.

The final result is going to be the sum of pairs and single elements.

Static page available at http://localhost:3030

#### Calculation code

https://gist.github.com/peterdee/1700ac54add5c396b4b8fa31c0ac3353

#### Deploy

- `git clone https://github.com/peterdee/pairs-test.git`
- `cd pairs-test`
- `nvm use 12.6`
- `npm i`

#### Launch

- `npm run dev`
