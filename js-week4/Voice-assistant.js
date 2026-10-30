//Hello my name is Benjamin
let username = "";
const todoList = [];
const my_name_is = "my name is";
const what_is_name = "name?";

function getReply(command){
    if(command.includes(my_name_is)){ 
        if (username !== ""){
            return "I know your name! " + username;
        }
        // find name
        let index = command.indexOf(my_name_is);
        for (let i = index + my_name_is.length + 1; i < command.length; i++){
            if (command[i] !== " "){
                username += command[i];
            }
            else{
                break;
            }    
        }
        

        let respond = "nice to meet you " + username;
        return respond;
    } else if (command.includes(what_is_name)){
        if (username === ""){
            return "I don't know your name!";
        } else {
            return "Your name is " + username;
        }
    } else if (command.includes("Add") && command.includes("todo")){
        const add_str = "Add ";
        const start = command.indexOf(add_str) + add_str.length;
        const end = command.indexOf(" to my todo");
        const item = command.substring(start, end);
        if (item !== ""){
            todoList.push(item);
            return item + " added to your todo";
        } else
        {
            return "I couldn't add to your todo"
        }
    } else if(command.includes("Remove") && command.includes("from my todo")){
        const remove_str = "Remove ";
        const start = command.indexOf(remove_str) + remove_str.length;
        const end = command.indexOf(" from my todo");
        const item = command.substring(start, end);
        if (item !== ""){
            const index = todoList.indexOf(item);
            todoList.splice(index, 1);
            return "Removed " + item + " from your todo";
        } else {
            return "I couldn't remove " + item + " from your todo"
        }
    } else if (command.includes("What") && command.includes("todo")){
        let message = "You have " + todoList.length + " todos - ";
        for (let i = 0; i < todoList.length; i++) {
            if (i > 0) {
                message += " and ";
             }
             message += todoList[i];
        }
        return message;
    } else if(command.includes("What") && command.includes("today")){
                const date = new Date();

        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    } else if (command.includes("+")){
        const parts  = command.replace("What is","").split("+");
        return Number(parts[0]) + Number(parts[1]);
    }else if (command.includes("*")){
        const parts  = command.replace("What is","").split("*");
        return Number(parts[0]) * Number(parts[1]);
    }else if(command.includes("Set") && command.includes("minute")){
        const words = command.split(" ");
        const minute_str = "minutes";
        const minute_index = words.indexOf(minute_str) - 1;
        const minutes  = Number(words[minute_index]);
        setTimeout(console.log, minutes * 60 * 1000, "Timer done");
        return "Timer set for " + minutes + " minutes";
    }
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("Hello my name is Benjamin")); // "I know your name! Benjamin"

//What is my name
console.log(getReply("What is my name?")); // "Your name is Benjamin"

//Add fishing to my todo
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"

console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));//  "Removed fishing from your todo" 
console.log(getReply("What is on my todo?"));// you have 2 todos - fishing and singing in the shower
console.log(getReply("What day is it today?"));//30. of August 2019
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("Set a timer for 1 minutes"));// "Timer set for 4 minutes" "Timer done"