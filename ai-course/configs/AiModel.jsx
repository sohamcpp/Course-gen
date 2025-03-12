/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail with field as Course Name,Description,Along with Chaper Name,about,Duration:Category:'Programming',Topic:Python,Level:Basic,Duration:1 hours,NoOf Chapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Fundamentals\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering the essential concepts and techniques for beginners. You will learn the syntax, data types, operators, control flow, functions, and more.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, key features, and why it's popular for various applications.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Basic Syntax and Data Types\",\n        \"about\": \"Learn the fundamental syntax of Python, including variables, data types (integers, floats, strings, booleans), and basic operations.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Control Flow and Operators\",\n        \"about\": \"Explore control flow statements like conditional statements (if, else, elif) and loops (for, while) to control the execution of your programs.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"Understand functions and modules in Python for organizing and reusing code, creating modular and efficient programs.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Introduction to Data Structures\",\n        \"about\": \"This chapter introduces basic data structures like lists, tuples, dictionaries, and sets, which are essential for storing and manipulating data.\",\n        \"duration\": \"30 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n}\n``` \n"},
          ],
        },
      ],
    });

//     const chatSession = model.startChat({
//     generationConfig,
//  // safetySettings: Adjust safety settings
//  // See https://ai.google.dev/gemini-api/docs/safety-settings
//     history: [
//       {
//         role: "user",
//         parts: [
//           {text: "Explain the concept in Detail on Topic:Dance,Chapter:Dance Combinations and Improvisation in JSON Format with field as title,description in detail, Code Example(HTML Code format) if applicable"},
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {text: "```json\n{\n  \"title\": \"Dance Combinations and Improvisation\",\n  \"description\": \"Dance combinations and improvisation are two fundamental aspects of dance that work together to create dynamic and expressive movement sequences.  Here's a breakdown of each concept and their interplay:\\n\\n**1. Dance Combinations:**\\n\\n* **Definition:** A dance combination is a pre-determined sequence of steps and movements designed to be learned and performed in a specific order. It can be simple or complex, depending on the level and style of dance. \\n\\n* **Purpose:** Combinations serve as the building blocks of choreography. They provide a structure for dancers to learn and execute a specific series of movements, enhancing their coordination, timing, and muscle memory.  \\n\\n* **Characteristics:**\\n    * **Repeatable:** Combinations are designed to be repeated consistently for practice and performance. \\n    * **Structured:** They follow a specific order of steps and movements. \\n    * **Variations:** Combinations can have variations to add interest and challenge. \\n\\n**2. Improvisation:**\\n\\n* **Definition:** Improvisation is the act of creating dance movements spontaneously and in the moment, without pre-determined choreography. It allows dancers to express their creativity, interpret music or themes, and react to their environment. \\n\\n* **Purpose:** Improvisation fosters creativity, spontaneity, and self-expression. It helps dancers develop their musicality, body awareness, and responsiveness to the environment. \\n\\n* **Characteristics:**\\n    * **Unplanned:**  Improvisation involves making decisions about movement on the spot. \\n    * **Fluid:**  It often involves flowing transitions between movements. \\n    * **Personal:** It allows dancers to express their unique artistic voice. \\n\\n**The Interplay of Combinations and Improvisation:**\\n\\n* **Foundation:**  Dance combinations provide a foundation for dancers to understand structure, rhythm, and movement patterns. This foundation allows them to  experiment with improvisation within a framework. \\n* **Expansion:** Improvisation can be used to expand upon pre-existing combinations, adding variations, embellishments, or unique interpretations. \\n* **Inspiration:** Combinations can inspire improvisation by suggesting themes, rhythms, or movement qualities that dancers can explore further.\\n* **Dynamic Choreography:** By blending combinations and improvisation, choreographers can create dynamic and engaging dances that feel both structured and expressive. \\n\\n**Example (Simple Combination with Improvisation):**\\n\\nImagine a basic combination with three steps:  \\n\\n1. *Chassé* (side-step, close, step) to the right\\n2. *Piqué* (pointed toe, landing on one leg) forward\\n3. *Tendu* (stretched foot, sliding along the floor) back\\n\\nDancers can then use this combination as a foundation to improvise:\\n\\n* **Variations:**  Add arm movements, different turn patterns, or change the direction of the combination. \\n* **Dynamics:** Explore different speeds, levels, and dynamics (e.g., light and airy vs. powerful and dynamic). \\n* **Musicality:**  Respond to the music's rhythm, phrasing, and mood. \\n\\n**Conclusion:**\\n\\nDance combinations and improvisation are two essential elements of dance that work in tandem. They provide structure and freedom, allowing dancers to express themselves and create captivating movement experiences. By understanding and utilizing both, dancers can develop their technical skills, creative expression, and overall artistry.\",\n  \"codeExample\": \"\" // No HTML code needed for this concept.\n}\n``` \n"},
//         ],
//       },
//     ],
//   });


  export const GenerateChapterContent_AI = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Explain the concept in Detail on Topic:Dance,Chapter:Dance Combinations and Improvisation, in JSON Format with list of array with field as title,description in detail, Code Example(Code field in <precode> format) if applicable"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"title\": \"Dance Combinations\",\n    \"description\": \"Dance combinations are pre-arranged sequences of steps and movements that dancers learn and perform together. They are the building blocks of choreographed routines and offer a structured framework for creative expression.\",\n    \"details\": [\n      \"Combinations can range in length from a few steps to elaborate sequences spanning several minutes.\",\n      \"They often incorporate specific dance techniques, rhythms, and stylistic elements.\",\n      \"Dancers learn combinations through repetition, memorization, and practice.\",\n      \"Combinations can be used to tell stories, evoke emotions, or showcase technical skills.\",\n      \"They can be performed in various formations, including lines, circles, and diagonals.\"\n    ]\n  },\n  {\n    \"title\": \"Types of Dance Combinations\",\n    \"description\": \"Dance combinations can be categorized based on their style, complexity, and purpose.\",\n    \"details\": [\n      \"**Basic Combinations:** Simple sequences used for warm-ups, foundational training, and introducing new steps.\",\n      \"**Intermediate Combinations:** More intricate sequences that build upon basic techniques and introduce variations.\",\n      \"**Advanced Combinations:** Complex and demanding sequences requiring high levels of skill, coordination, and artistry.\",\n      \"**Character Combinations:** Sequences that emphasize specific stylistic elements or character portrayals.\",\n      \"**Storytelling Combinations:** Sequences that narrate a story or theme through movement.\"\n    ]\n  },\n  {\n    \"title\": \"Creating Dance Combinations\",\n    \"description\": \"Creating dance combinations involves a creative process that combines technical skills with artistic vision.\",\n    \"details\": [\n      \"**Concept:** Define the theme, style, and purpose of the combination.\",\n      \"**Step Selection:** Choose steps that align with the chosen style and concept.\",\n      \"**Sequence and Variation:** Arrange the steps in a logical and aesthetically pleasing sequence, incorporating variations for interest.\",\n      \"**Rhythm and Timing:** Ensure the combination flows smoothly and adheres to the chosen tempo and rhythm.\",\n      \"**Dynamics and Expression:** Add elements of dynamics, such as tempo changes, accents, and expressive gestures.\",\n      \"**Transitions:** Create seamless transitions between steps and sections.\"\n    ]\n  },\n  {\n    \"title\": \"Improvisation in Dance\",\n    \"description\": \"Improvisation is the spontaneous and unrehearsed creation of movement in the moment. It allows dancers to express themselves freely and explore their creativity.\",\n    \"details\": [\n      \"Improvisation is a crucial skill for dancers of all levels, fostering creativity, adaptability, and responsiveness.\",\n      \"It can be practiced in various ways, such as responding to music, visual cues, or partner interactions.\",\n      \"Improvisation can be used to develop individual style, explore new movement vocabulary, and enhance performance quality.\",\n      \"It can also be incorporated into choreographed routines to add spontaneity and dynamism.\"\n    ]\n  },\n  {\n    \"title\": \"Improvisation Techniques\",\n    \"description\": \"Various techniques can be used to enhance improvisation skills.\",\n    \"details\": [\n      \"**Movement Exploration:** Experimenting with different body parts, levels, and directions.\",\n      \"**Musicality:** Responding to the rhythm, dynamics, and mood of the music.\",\n      \"**Storytelling:** Creating movement that conveys a narrative or emotion.\",\n      \"**Partner Interaction:** Improvising in response to a partner's movements.\",\n      \"**Visual Cues:** Using visual stimuli to inspire movement.\"\n    ]\n  },\n  {\n    \"title\": \"Benefits of Dance Combinations and Improvisation\",\n    \"description\": \"Both dance combinations and improvisation offer valuable benefits for dancers.\",\n    \"details\": [\n      \"**Technical Proficiency:**  Combinations provide a structured framework for learning and refining dance technique.\",\n      \"**Creativity and Expression:** Improvisation allows dancers to explore their creativity and express themselves freely.\",\n      \"**Stage Presence and Confidence:**  Performing combinations builds confidence and stage presence.\",\n      \"**Adaptability and Responsiveness:** Improvisation cultivates adaptability and responsiveness to changing circumstances.\",\n      \"**Collaboration and Communication:**  Working with others on combinations enhances collaboration and communication skills.\"\n    ]\n  }\n]\n```"},
        ],
      },
    ],
  });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
