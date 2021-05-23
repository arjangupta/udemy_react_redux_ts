class Animal {
    claws: number;
    constructor (given_claws: number) {
        this.claws = given_claws;
    }
};

const bear = new Animal(4);

// Won't work
// if (typeof bear === Animal)
// {
//     console.log("Hello")
// }

// Works
if (bear instanceof Animal)
{
    console.log("Hello works")
}
