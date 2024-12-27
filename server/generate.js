import openaiClient from './api.js';

const generate = async (queryDescription) => {
    const response = await openaiClient.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Comvert the following natural language description into a SQL query: \n\n${queryDescription}.`,
        max_tokens: 100,
        temperature: 0
    })
    return response.choices[0].text
}

export default generate;