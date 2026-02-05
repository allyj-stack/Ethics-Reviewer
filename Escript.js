const Flashcards = [{question: "Greek word of \" Ethics\"",
                    answer: "Ethos"},
                    {question: "Meaning character or custom",
                    answer: "Ethics"},
                    {question: "Latin word of \" Morality\"",
                    answer: "Moralis"},
                    {question: "Referring to customs or manners.",
                    answer: "Morality"},
                    {question: "Ethics are shaped by?",
                    answer: "Values, Belief, Culture"},
                    {question: "Broader field that explores where those ethical rules come from",
                    answer: "Moral Philosophy"},
                    {question: "Set of rules or principles",
                    answer: "Ethics"},
                    {question: "Helps individuals cultivate integrity and accountability",
                    answer: "Guiding Personal Behavior"},
                    {question: "Foster cooperation and understanding among people",
                    answer: "Promote Social Harmony"},
                    {question: "Ethical questions encourages individuals to consider their values and beliefs",
                    answer: "Encouraging Critical Thinking"},
                    {question: "Essential for developing laws and social norms",
                    answer: "Influence by Policy and Governance"},
                    {question: "Process of thinking about what is right and wrong",
                    answer: "Moral Reasoning"},
                    {question: "Situation where both choices can feel right and wrong simultaneously.",
                    answer: "Moral Dilemma"},
                    {question: "CLEAR",
                    answer: "Cooperation, Law & Policy, Equality, Accountability, Rights Protection"},
                    {question: "Promote working together towards common goals, fostering teamwork and community growth.",
                    answer: "Cooperation"},
                    {question: "Maintain structure and predictability, reducing confusion",
                    answer: "Law & Policy"},
                    {question: "Promote fairness by ensuring everyone follows the same guidelines and prevent unequal treatment",
                    answer: "Equality"},
                    {question: "Encourage individuals to take responsibility for their actions ",
                    answer: "Accountability"},
                    {question: "Protect individual rights and freedom",
                    answer: "Rights Protection"},
                    {question: "RISK",
                    answer: " Ruins Trust, Interfere with harmony, Stalls Progress, Keep Consequences"},
                    {question: "Rules damages relationships and teamwork",
                    answer: "Ruins trust"},
                    {question: "Violating rules creates conflict and disrupts peace within the group.",
                    answer: "Interfere with harmony"},
                    {question: "Disregard for rules maintains chaos and instability",
                    answer: "Stalls Progress"},
                    {question: "Breaking rules leads to punishments or negative outcomes",
                    answer: "Keep Consequences"},
                    {question: "Establishing standards or norms for behavior",
                    answer: "Normative Ethics"},
                    {question: "Explores the nature of ethical statements and judgments",
                    answer: "Metaethics"},
                    {question: "Involves the practical application of ethical principles to specific issues ",
                    answer: "Applied Ethics"},
                    {question: "Moral truths exist on their own ",
                    answer: "Moral Realism"},
                    {question: "Depend on personal feelings",
                    answer: "Ethical subjectivism"}]

const previous = document.getElementById("Previous");
const next = document.getElementById("Next");
const answer = document.getElementById("Answer");
const question = document.getElementById("Question");
let random = null;
let past = [];
next.addEventListener("click", event =>{
    if( random !== null){
        past.push(random);
    }
    random = Math.floor(Math.random() * Flashcards.length);
    answer.textContent = Flashcards[random].answer;
    question.textContent = Flashcards[random].question;
})
previous.addEventListener("click", event =>{
    if(past.length > 0){
        random = past.pop();
        answer.textContent = Flashcards[random].answer;
        question.textContent = Flashcards[random].question;
    }
})