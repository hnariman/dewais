import { z } from "zod";

export const vocabulary = {
    "noun": ["cat", "book", "table", "house", "dog", "car", "tree", "bird", "friend",
        "city", "computer", "chair", "sun", "flower", "music", "child", "parent", "food",
        "water", "phone", "time", "money", "job", "world", "love", "school", "student",
        "teacher", "doctor", "hospital"],

    "verb": ["run", "eat", "sleep", "dance", "sing", "swim", "write", "read", "play",
        "talk", "work", "study", "drive", "think", "create", "listen", "watch", "buy",
        "help", "cook", "travel", "exercise", "paint", "draw", "explore", "solve", "smile",
        "laugh", "dream", "relax"],

    "adjective": ["happy", "big", "beautiful", "small", "tall", "smart", "funny",
        "kind", "loud", "quiet", "clever", "brave", "friendly", "patient", "colorful",
        "exciting", "delicious", "strong", "soft", "hard", "young", "old", "busy", "calm",
        "careful", "curious", "energetic", "happy", "peaceful"],

    "adverb": ["quickly", "eagerly", "silently", "happily", "slowly", "carefully",
        "loudly", "sharply", "softly", "quietly", "easily", "kindly", "politely",
        "vigorously", "gently", "anxiously", "honestly", "enthusiastically", "generously",
        "responsibly", "boldly", "joyfully", "patiently", "faithfully", "freely",
        "gracefully", "intensely", "safely", "wisely"],

    "preposition": ["in", "on", "at", "above", "below", "behind", "beside",
        "between", "under", "over", "across", "through", "into", "onto", "towards", "from",
        "within", "without", "among", "beyond", "with", "except", "until", "around",
        "past", "off", "up", "down", "onto", "inside"],

    "conjunction": ["and", "but", "or", "nor", "so", "yet", "for", "while",
        "although", "because", "if", "unless", "since", "when", "where", "as", "that",
        "whether", "while", "once", "though", "even", "provided", "whereas", "so", "thus",
        "therefore", "hence", "nevertheless"],

    "pronoun": ["he", "she", "they", "we", "it", "I", "you", "me", "him", "her",
        "us", "them", "myself", "yourself", "himself", "herself", "itself", "ourselves",
        "themselves", "everyone", "everything", "somebody", "nobody", "anyone",
        "everything", "no one", "each", "both", "few", "many"],

    "interjection": ["wow", "ouch", "oops", "yay", "hurray", "bravo", "oh", "ah",
        "uh", "yikes", "yeah", "yes", "no", "uh-huh", "hmm", "oh", "well", "alas", "phew",
        "oops", "ow", "oh no", "wow", "ahem", "hush", "hey", "hello", "goodbye", "oh dear",
        "congratulations"],

    "determiner": ["the", "a", "this", "that", "these", "those", "my", "your", "his",
        "her", "its", "our", "their", "an", "any", "some", "all", "every", "each",
        "either", "neither", "both", "much", "many", "few", "several", "enough", "other",
        "such", "what", "which"],

    "numeral": ["one", "two", "three", "four", "five", "six", "seven", "eight",
        "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty",
        "seventy", "eighty", "ninety", "hundred", "thousand", "million"]
};

/*
    consider we would have a random string (with some len 4sure)

    so we split it, and there are already two implementations possible:
    1. if we shall calculate duplicates (we will use Set here from split array)


    2. we shall calculate only how many types are used


*/

const testCase1 = "this is some normal sentence";
const testCase2 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

const categories = ["noun", "verb", "adjective", "adverb", "preposition", "conjunction", "pronoun", "interjection", "determiner", "numeral"] as const;

type Result = { [K in typeof categories[number]]: number };

const cats = z.union([
    z.literal("preposition"),
    z.literal("verb"),
    z.literal("conjuction")
]);

type b2 = z.infer<typeof cats>;

const process = (input: string): Result => {

    return {
        "noun": 12,
        'adjective': 1,
        'adverb': 3,
        'numeral': 0,
        'verb':12,
        'conjunction': 4,
        'interjection': 4,
        'determiner':4,
        'preposition': 0,
        "pronoun":3
    }
}