import { z } from "zod";

// TODO: zod runtime type checks
export const noun = [
    "cat", "book", "table", "house", "dog", "car", "tree", "bird", "friend",
    "city", "computer", "chair", "sun", "flower", "music", "child", "parent", "food",
    "water", "phone", "time", "money", "job", "world", "love", "school", "student",
    "teacher", "doctor", "hospital"
] as const;

export const verb = [
    "run", "eat", "sleep", "dance", "sing", "swim", "write", "read", "play",
    "talk", "work", "study", "drive", "think", "create", "listen", "watch", "buy",
    "help", "cook", "travel", "exercise", "paint", "draw", "explore", "solve", "smile",
    "laugh", "dream", "relax"
] as const;

export const adjective = [
    "happy", "big", "beautiful", "small", "tall", "smart", "funny",
    "kind", "loud", "quiet", "clever", "brave", "friendly", "patient", "colorful",
    "exciting", "delicious", "strong", "soft", "hard", "young", "old", "busy", "calm",
    "careful", "curious", "energetic", "happy", "peaceful"
] as const;

export const adverb = [
    "quickly", "eagerly", "silently", "happily", "slowly", "carefully",
    "loudly", "sharply", "softly", "quietly", "easily", "kindly", "politely",
    "vigorously", "gently", "anxiously", "honestly", "enthusiastically", "generously",
    "responsibly", "boldly", "joyfully", "patiently", "faithfully", "freely",
    "gracefully", "intensely", "safely", "wisely"
] as const;

export const preposition = [
    "in", "on", "at", "above", "below", "behind", "beside",
    "between", "under", "over", "across", "through", "into", "onto", "towards", "from",
    "within", "without", "among", "beyond", "with", "except", "until", "around",
    "past", "off", "up", "down", "onto", "inside"
] as const;

export const conjunction = [
    "and", "but", "or", "nor", "so", "yet", "for", "while",
    "although", "because", "if", "unless", "since", "when", "where", "as", "that",
    "whether", "while", "once", "though", "even", "provided", "whereas", "so", "thus",
    "therefore", "hence", "nevertheless"
] as const;

export const pronoun = [
    "he", "she", "they", "we", "it", "I", "you", "me", "him", "her",
    "us", "them", "myself", "yourself", "himself", "herself", "itself", "ourselves",
    "themselves", "everyone", "everything", "somebody", "nobody", "anyone",
    "everything", "no one", "each", "both", "few", "many"
] as const;

export const interjection = [
    "wow", "ouch", "oops", "yay", "hurray", "bravo", "oh", "ah",
    "uh", "yikes", "yeah", "yes", "no", "uh-huh", "hmm", "oh", "well", "alas", "phew",
    "oops", "ow", "oh no", "wow", "ahem", "hush", "hey", "hello", "goodbye", "oh dear",
    "congratulations"
] as const;

export const determiner = [
    "the", "a", "this", "that", "these", "those", "my", "your", "his",
    "her", "its", "our", "their", "an", "any", "some", "all", "every", "each",
    "either", "neither", "both", "much", "many", "few", "several", "enough", "other",
    "such", "what", "which"
] as const;

export const numeral = [
    "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty",
    "seventy", "eighty", "ninety", "hundred", "thousand", "million"
] as const;

const t = z.enum(numeral);