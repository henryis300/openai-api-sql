import openaiClient from './api.js';

const generate = async (queryDescription) => {

   const textCompletion = async (queryDescription) => {
    const response = await openaiClient.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Comvert the following natural language description into a SQL query: \n\n${queryDescription}.`,
        max_tokens: 100,
        temperature: 0
    })
    return response.choices[0].text
}

   const chatGptApi = async (queryDescription) => {
    const messages = [
        {
            role: "system",
            content: "You are a SQL expert and you are helping a junior developer to convert a natural language description into a SQL query. Please provide the SQL query."
        },
        {
            role: "user",
            content: `Comvert the following natural language description into a SQL query: \n\nShow all elements from the table user.`
        },
        {
            role: "assistant",
            content: `SELECT * FROM user;`
        },
        {
            role: "user",
            content: `Comvert the following natural language description into a SQL query: \n\n${queryDescription}.`
        }
    ];

    const response = await openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
    })
    return response.choices[0].message.content
   } 

   return await chatGptApi(queryDescription);
}
export default generate;