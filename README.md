# Coding Exercise

💡 Implement an AWS Lambda service function 
that calculates how many different types of words can be found within the provided text.
Implement a simple React App to connect to this service.

React App should have an input text field, a paragraph to display the results and a
submit button. (example below)

### On submit: take the text from the field, push this data to your server and get the
results back; Then display the results in the paragraph block.

### Words can be the following types:

- noun
- verb
- adjective
- adverb
- preposition
- conjunction
- pronoun
- interjection
- determiner
- numeral

### Use the following vocabulary to define types.

```javascript
{
        "noun": [
                "cat", "book", "table", "house", "dog", "car", "tree", "bird", "friend", "city", "computer", "chair", "sun", "flower", "music", "child", "parent", "food",
                "water", "phone", "time", "money", "job", "world", "love", "school", "student", "teacher", "doctor", "hospital"
        ],
        "verb": [
                "run", "eat", "sleep", "dance", "sing", "swim", "write", "read", "play", "talk", "work", "study", "drive", "think", "create", "listen", "watch", "buy",
                "help", "cook", "travel", "exercise", "paint", "draw", "explore", "solve", "smile", "laugh", "dream", "relax"
        ],

        "adjective": [
                "happy", "big", "beautiful", "small", "tall", "smart", "funny", "kind", "loud", "quiet", "clever", "brave", "friendly", "patient", "colorful",
                "exciting", "delicious", "strong", "soft", "hard", "young", "old", "busy", "calm", "careful", "curious", "energetic", "happy", "peaceful"
        ],
        "adverb": [
                "quickly", "eagerly", "silently", "happily", "slowly", "carefully", "loudly", "sharply", "softly", "quietly", "easily", "kindly", "politely",
                "vigorously", "gently", "anxiously", "honestly", "enthusiastically", "generously", "responsibly", "boldly", "joyfully", "patiently", "faithfully", "freely",
                "gracefully", "intensely", "safely", "wisely"
        ],
        "preposition": [
                "in", "on", "at", "above", "below", "behind", "beside", "between", "under", "over", "across", "through", "into", "onto", "towards", "from",
                "within", "without", "among", "beyond", "with", "except", "until", "around", "past", "off", "up", "down", "onto", "inside"
        ],
        "conjunction": [
                "and", "but", "or", "nor", "so", "yet", "for", "while", "although", "because", "if", "unless", "since", "when", "where", "as", "that",
                "whether", "while", "once", "though", "even", "provided", "whereas", "so", "thus", "therefore", "hence", "nevertheless"
        ],
        "pronoun": [
                "he", "she", "they", "we", "it", "I", "you", "me", "him", "her", "us", "them", "myself", "yourself", "himself", "herself", "itself", "ourselves",
                "themselves", "everyone", "everything", "somebody", "nobody", "anyone", "everything", "no one", "each", "both", "few", "many"
        ],
        "interjection": [
                "wow", "ouch", "oops", "yay", "hurray", "bravo", "oh", "ah", "uh", "yikes", "yeah", "yes", "no", "uh-huh", "hmm", "oh", "well", "alas", "phew",
                "oops", "ow", "oh no", "wow", "ahem", "hush", "hey", "hello", "goodbye", "oh dear", "congratulations"
        ],
        "determiner": [
                "the", "a", "this", "that", "these", "those", "my", "your", "his", "her", "its", "our", "their", "an", "any", "some", "all", "every", "each",
                "either", "neither", "both", "much", "many", "few", "several", "enough", "other", "such", "what", "which"
        ],
        "numeral": [
                "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
                "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "million"
        ]
}
```

## The result can look like the following:

A script for deployment to AWS will be a plus.

### Conditions and clarifications:
- TypeScript is a must
- It should be a single Lambda function.
- No Auth is needed.
- Use serverless.com or similar to build your service. AWS CDK is not
necessary.
- What is not in the vocabulary is ignored.
- Ignore endings for simplicity. “cat” and “cats”, “play” and “played”, “work” and
“working” are different words, we don’t care - calculate only what is within the
vocabulary.
- Ignore punctuation symbols for simplicity. “space” is the only delimiter. “cat”
and “cat,” (cat + comma) are considered as different words and so we ignore
“cat,” as it is not in our vocabulary
