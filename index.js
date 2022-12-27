let arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];
const numbers = arr.filter(item => typeof item === "number");
        function sum (numbers) {
            let s = 0;
            for( let i = 0; i < numbers.length; i++) {
                s += numbers[i]
            }
            return(s/numbers.length);
        }
        console.log(sum(numbers))

