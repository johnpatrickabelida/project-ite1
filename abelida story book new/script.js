
const stories = [
    {
        title: "The Last Letter",
        genre: "Drama",
        author: "Rebecca Yarros",
        published: "2019",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        content: `Daniel found an old letter inside his father's wooden box. The letter revealed that he had a sister named Elena whom he had never met. Daniel searched for her and finally found her in a small town. At first, they felt nervous because they were strangers. As they talked, they learned about their family and their father's past. They slowly became close and decided to stay in touch. Daniel realized that the truth could bring a family together.`
    },
    {
        title: "The Hidden Island",
        genre: "Adventure",
        author: "Richard Garcia Morgan",
        published: "2017",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        content: `Leo and his friends found an old map inside a bottle near the beach. The map showed the location of a hidden island. They prepared their supplies and sailed across the sea. When they arrived, they discovered tall trees, beautiful waterfalls, and colorful birds. Inside a small cave, they found a chest containing an old journal. The journal explained the island's history and reminded readers to protect nature. The friends promised to keep the island clean and safe.`
    },
    {
        title: "The Clock at Midnight",
        genre: "Mystery",
        author: "Dan Solomon",
        published: "2023",
        image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80",
        content: `Every night, the old clock in the town library stopped at midnight. Mia wanted to discover the reason. One evening, she noticed a small key behind a shelf. She used it to open a wooden box beside the clock. Inside, she found a note explaining that one of the clock's gears was missing. Mia searched the repair room and found the gear in an old drawer. With the librarian's help, she repaired the clock. From that night on, it worked perfectly.`
    },
    {
        title: "The Little Dragon",
        genre: "Fantasy",
        author: "Christelle Dabos",
        published: "2020",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        content: `Ben was walking beside a river when he heard a strange sound. Behind a large rock, he found a tiny dragon that was afraid and unable to fly. Ben brought it food and helped it practice moving its wings. Every day, the dragon became stronger and more confident. One morning, it finally spread its wings and flew above the trees. Ben was happy to see his new friend succeed. He learned that patience and kindness could help others grow.`
    },
    {
        title: "A New Beginning",
        genre: "School Life",
        author: "F.M. Bradley",
        published: "2016",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
        content: `Anna felt nervous on her first day at a new school. She did not know anyone and worried that she would have no friends. During lunch, some classmates invited her to sit with them. They showed her around the school and told her about different clubs. Anna decided to join the art club because she loved drawing. Soon, she made new friends and began to enjoy her classes. She learned that trying new things could lead to wonderful friendships.`
    },
    {
        title: "The Robot Helper",
        genre: "Science Fiction",
        author: "Independently Published / Educational Series",
        published: "2019",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
        content: `Mark loved building machines. One weekend, he created a small robot named Robo to help with simple household chores. At first, Robo worked well, picking up toys and carrying small objects. Then, one day, it suddenly stopped moving. Mark checked its parts and discovered a loose wire. He carefully repaired the connection and tested the robot again. Robo started working properly. Mark learned that technology could be helpful, but it also needed attention and care.`
    },
    {
        title: "The Missing Puppy",
        genre: "Animal Story",
        author: "Holly Webb",
        published: "2014",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
        content: `Lily was playing in the garden with her puppy, Brownie. When she went inside to get water, Brownie disappeared. Lily became worried and asked her family for help. They searched the street, the garden, and the nearby park. Finally, Lily heard a small bark behind a park bench. Brownie was hiding there. Lily hugged her puppy and brought him home. After that day, she always checked the gate to make sure it was closed.`
    },
    {
        title: "The Brave Firefly",
        genre: "Fantasy",
        author: "Janice N. Harrington",
        published: "2003",
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=800&q=80",
        content: `Flick was a little firefly who was afraid of the dark forest. He usually stayed near the other fireflies because he was scared to fly alone. One evening, he heard a rabbit crying because it could not find its way home. Flick decided to help. He flew through the dark trees and used his small light to guide the rabbit. They safely reached the rabbit's home. Flick discovered that even a small light could make a big difference.`
    },
    {
        title: "The Old Photograph",
        genre: "Family",
        author: "William A. Allen",
        published: "2011",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        content: `Ella was helping her grandmother organize an old bookshelf when she found a photograph inside a book. The picture showed several people standing in front of a small house. Ella asked her grandmother who they were. Her grandmother explained that they were relatives from many years ago. She shared stories about their lives, jobs, and family traditions. Ella listened carefully and realized how important family history was. She placed the photograph in a frame so everyone could see it.`
    },
    {
        title: "The Quiet Garden",
        genre: "Inspirational",
        author: "Frances Hodgson Burnett / Julia Miller",
        published: "2015",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
        content: `Noah noticed that the small garden near his home was full of trash and dry plants. He invited his friends to help clean it. They collected rubbish, removed weeds, and planted colorful flowers. Soon, neighbors joined them and brought more plants and tools. After several days, the garden became a peaceful place where people could relax. Noah was proud of what they had done together. He learned that teamwork could turn a neglected place into something beautiful.`
    },
    {
        title: "The Star Collector",
        genre: "Fantasy",
        author: "Andrea Lorenzo Molinari",
        published: "2018",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
        content: `Nina loved looking at the night sky. She used a telescope to study stars and learn about constellations. Every evening, she wrote her discoveries in a notebook. One night, she invited her classmates to observe the stars with her. She explained the patterns and shared interesting facts about the universe. Her classmates became curious and asked many questions. Nina realized that learning about the universe was more wonderful than simply collecting things.`
    },
    {
        title: "The Secret Recipe",
        genre: "Family",
        author: "Lisa Fipps",
        published: "2021",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
        content: `Marco wanted to learn how to make his grandmother's famous soup. One afternoon, he watched her carefully as she prepared the ingredients. She explained how much to add and when to stir the pot. Marco wrote every step in a notebook. Later, he tried making the soup by himself. It was not perfect at first, but his grandmother helped him improve it. Marco promised to prepare the soup during future family gatherings and keep the recipe alive.`
    },
    {
        title: "The Mountain Path",
        genre: "Adventure",
        author: "A.J. Cronin",
        published: "1952",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        content: `Alex joined a school trip to the mountains. His teacher reminded everyone to follow the guide and stay together. The path was steep, and some students became tired. Alex encouraged his classmates to take breaks and help one another. After a long climb, they reached a beautiful viewpoint overlooking the valley. Everyone took pictures and enjoyed the fresh air. Alex learned that patience, teamwork, and respect for nature were important during an adventure.`
    },
    {
        title: "The Paper Boat",
        genre: "Adventure",
        author: "Thao Lam",
        published: "2020",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        content: `After a rainy afternoon, Sam folded a sheet of paper into a small boat. He placed it gently in a stream near his home. The boat floated past leaves and small stones. Soon, it became stuck against a branch. Sam carefully moved the branch so the boat could continue its journey. It finally reached a quiet pond. Sam watched it float across the water and imagined all the places it might visit.`
    },
    {
        title: "The Moonlight Library",
        genre: "Fantasy",
        author: "David McIntee",
        published: "2022",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
        content: `Clara loved visiting the town library. One evening, she noticed a narrow door that was usually hidden behind a shelf. Moonlight shone through a small window inside the room. She discovered shelves filled with unusual books about distant lands and forgotten adventures. Clara told the librarian about the room, who explained that it had been closed for many years. From then on, Clara visited the library often to read and discover new stories.`
    },
    {
        title: "The School Newspaper",
        genre: "School Life",
        author: "Beverly Cleary",
        published: "1981",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
        content: `A group of students decided to create a school newspaper. Mia wrote articles about school activities, Ben took photographs, and Carlo checked spelling and grammar. They interviewed teachers and classmates to gather information. At first, organizing the work was difficult, but they learned to cooperate. When the first issue was released, many students enjoyed reading it. The team understood that a good newspaper needed teamwork, careful research, and honest reporting.`
    },
    {
        title: "The Friendly Ghost",
        genre: "Fantasy",
        author: "Robert Lawrence",
        published: "1945",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
        content: `Jamie was helping clean an old theater when he heard music coming from an empty room. Inside, he met a friendly ghost who explained that he had lost an important music sheet. Jamie was surprised but decided to help. They searched the stage, the seats, and the storage area. At last, Jamie found the paper inside an old box. The ghost thanked him and played a beautiful tune. Jamie discovered that things that seemed frightening could sometimes be friendly.`
    },
    {
        title: "The Last Tree",
        genre: "Environment",
        author: "Luke Adam Hawker",
        published: "2020",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
        content: `In a town filled with buildings, one large tree remained in the center of a small park. Children often played under its branches. When they learned that the tree might be removed, they decided to protect it. They talked to their neighbors and organized a community meeting. Together, they explained why trees were important for people, animals, and the environment. The community agreed to care for the old tree and plant more trees around the town.`
    },
    {
        title: "The Chess Match",
        genre: "Competition",
        author: "Stefan Zweig",
        published: "1942",
        image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80",
        content: `Ryan practiced chess every afternoon because he wanted to win the school competition. He studied different moves and played against his friends. During the final match, he faced a strong opponent. Ryan tried his best but eventually lost. Although he felt disappointed, he congratulated the winner. His coach reminded him that every match was an opportunity to learn. Ryan returned to practice with a better attitude and a stronger desire to improve.`
    },
    {
        title: "The Music Box",
        genre: "Mystery",
        author: "Marlys Millhiser",
        published: "1993",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
        content: `Sophie found a small music box while cleaning her grandmother's attic. When she opened it, a gentle melody filled the room. Beneath the lid, she noticed a name written in faded letters. Her grandmother explained that the box had belonged to her great-grandmother. It had been passed down through several generations. Sophie listened as her grandmother shared family memories connected to the melody. She carefully cleaned the box and kept it as a special family treasure.`
    },
    {
        title: "The Helpful Neighbor",
        genre: "Inspirational",
        author: "Fred Rogers",
        published: "1998",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
        content: `Mr. Cruz was an elderly neighbor who needed help caring for his garden. One morning, the children nearby noticed that he was having difficulty carrying his tools. They offered to help water the plants, remove weeds, and move small pots. Other neighbors soon joined them. By the afternoon, the garden looked neat and healthy. Mr. Cruz thanked everyone and shared some vegetables from his garden. The children learned that small acts of kindness could bring a community closer together.`
    },
    {
        title: "The Puzzle Room",
        genre: "Mystery",
        author: "A.J. Steiger",
        published: "2021",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
        content: `Four friends entered a puzzle room filled with riddles, symbols, and hidden clues. They had to find a way to open a locked box before time ran out. One friend studied the numbers while another searched the walls. The others connected the clues and tested possible answers. After several attempts, they discovered the correct combination. The box opened, revealing a message congratulating them. The friends learned that listening to one another and working as a team helped them solve difficult problems.`
    },
    {
        title: "The Winter Visitor",
        genre: "Family",
        author: "Janet Teissier du Cros",
        published: "1992",
        image: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=800&q=80",
        content: `On a cold winter afternoon, a family noticed an elderly traveler standing near the road. He seemed confused and was trying to find the bus station. The family greeted him and listened as he explained where he needed to go. They checked the directions and helped him find the correct route. Before leaving, the traveler thanked them for their kindness. The family felt happy that they had helped someone in need. They remembered that even a small kind action could make a difficult day better.`
    },
    {
        title: "The Ocean Promise",
        genre: "Environment",
        author: "Jennifer Dong",
        published: "2019",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
        content: `Maya and her friends visited the beach and noticed plastic bottles and wrappers scattered along the shore. They decided to organize a beach cleanup. Wearing gloves and using rubbish bags, they collected waste and sorted recyclable materials. Other visitors joined them after seeing their efforts. The beach became cleaner, and the group talked about ways to reduce plastic use. Before going home, they promised to protect the ocean and encourage others to keep beaches clean.`
    },
    {
        title: "The Time Traveler's Notebook",
        genre: "Science Fiction",
        author: "Mark J. Rose",
        published: "2018",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        content: `Ethan discovered an old notebook filled with drawings of strange machines and dates from different periods in history. He wondered what the drawings meant and began researching them. Although the notebook seemed to describe time travel, Ethan treated it as an interesting science project. He built a model using safe materials and explained the historical events mentioned in the notes. His classmates enjoyed the presentation and asked many questions. Ethan learned that curiosity and research could make learning exciting.`
    },
    {
        title: "The Talent Show",
        genre: "School Life",
        author: "Alma Flor Ada",
        published: "2002",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
        content: `Lara wanted to sing in the school talent show, but she felt nervous about performing in front of an audience. Her friends encouraged her to practice with them after class. They helped her remember the words and keep the rhythm. On the day of the show, Lara took a deep breath and walked onto the stage. She sang the song she had practiced many times. The audience applauded, and Lara smiled. She learned that courage meant trying even when something felt difficult.`
    },
    {
        title: "The Desert Compass",
        genre: "Adventure",
        author: "Michael Moorcock",
        published: "1985",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80",
        content: `Omar joined an expedition across a wide desert. Before leaving, the guide taught everyone how to read a map and use a compass. During the journey, a sandstorm made the usual path difficult to recognize. Omar checked the compass and compared it with the map. He helped the guide identify the correct direction toward their meeting point. The group reached the destination safely. Omar learned that preparation, calm thinking, and teamwork were important when facing unexpected challenges.`
    },
    {
        title: "The Kind Inventor",
        genre: "Science Fiction",
        author: "A.A. Milne",
        published: "1928",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        content: `Ella enjoyed making things from recycled materials. One day, she noticed an elderly neighbor struggling to carry groceries from the market. Ella designed a small cart that could make carrying bags easier. Her first design was too difficult to turn, so she changed the wheels and tested it again. After several improvements, the cart worked well. Her neighbor was grateful for the help. Ella learned that inventions did not need to be complicated to make someone's life easier.`
    },
    {
        title: "The Carnival Ticket",
        genre: "Adventure",
        author: "Ronald Dahl / Educational Prompt",
        published: "2010",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
        content: `Noah found a carnival ticket near the entrance of a busy fair. He used it to enter and enjoyed the colorful rides and games. While walking between the stalls, he noticed a wallet on the ground. Instead of keeping it, he brought it to the information booth. A staff member checked the wallet and contacted its owner. The owner returned and thanked Noah for being honest. Noah felt proud because he had made the right choice.`
    },
    {
        title: "The Dawn Express",
        genre: "Science Fiction",
        author: "Arthur Train",
        published: "1925",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
        content: `Mira boarded the Dawn Express, a modern electric train traveling between busy cities. During the journey, she watched the countryside pass through the large windows. A science teacher on board explained how electric trains could transport many people efficiently. Mira learned that trains powered by cleaner energy could help reduce pollution compared with some other forms of transport. She wrote about her experience for a school assignment and began thinking about how technology could help create a more sustainable future.`
    }
];

// Add the story image to the reader if it is missing from index.html
const reader = document.getElementById("reader");
let storyImage = document.getElementById("storyImage");

if (reader && !storyImage) {
    storyImage = document.createElement("img");
    storyImage.id = "storyImage";
    storyImage.alt = "Story Cover";

    const genreElement = document.getElementById("storyGenre");

    if (genreElement) {
        genreElement.insertAdjacentElement("afterend", storyImage);
    } else {
        reader.prepend(storyImage);
    }
}

// Display story cards
function displayStories(list = stories) {
    const bookList = document.getElementById("bookList");

    if (!bookList) return;

    bookList.innerHTML = "";

    if (list.length === 0) {
        bookList.innerHTML = "<p>No stories found. Try another search.</p>";
        return;
    }

    list.forEach((story) => {
        const originalIndex = stories.indexOf(story);
        const book = document.createElement("div");
        book.className = "book";

        const img = document.createElement("img");
        img.src = story.image;
        img.alt = story.title;
        img.loading = "lazy";
        img.onerror = function () {
            this.onerror = null;
            this.src = "https://placehold.co/600x400?text=Story+Image";
        };

        const title = document.createElement("h3");
        title.textContent = story.title;

        const genre = document.createElement("p");
        genre.textContent = "Genre: " + story.genre;

        const author = document.createElement("p");
        author.textContent = "Author: " + story.author;

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Read Story";
        button.addEventListener("click", function () {
            readStory(originalIndex);
        });

        book.append(img, title, genre, author, button);
        bookList.appendChild(book);
    });
}

// Open a story
function readStory(index) {
    const story = stories[index];

    if (!story) return;

    document.getElementById("storyTitle").textContent = story.title;
    document.getElementById("storyGenre").textContent =
        "Genre: " + story.genre;

    document.getElementById("storyContent").textContent = story.content;

    // Display the story image
    storyImage.src = story.image;
    storyImage.alt = story.title;
    storyImage.onerror = function () {
        this.onerror = null;
        this.src = "https://placehold.co/600x400?text=Story+Image";
    };

    // Show author and publication year
    let meta = document.getElementById("storyMeta");

    if (!meta) {
        meta = document.createElement("p");
        meta.id = "storyMeta";
        document.getElementById("storyGenre")
            .insertAdjacentElement("afterend", meta);
    }

    meta.textContent =
        "Author: " + story.author +
        " | Published: " + story.published;

    // Hide the other sections while reading
    document.getElementById("home").hidden = true;
    document.getElementById("stories").hidden = true;
    document.getElementById("about").hidden = true;
    reader.hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Back to the story list
document.getElementById("backBtn").addEventListener("click", function () {
    reader.hidden = true;
    document.getElementById("home").hidden = false;
    document.getElementById("stories").hidden = false;
    document.getElementById("about").hidden = false;

    document.getElementById("stories").scrollIntoView({
        behavior: "smooth"
    });
});

// Search stories
document.getElementById("search").addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    const filteredStories = stories.filter(function (story) {
        return (
            story.title.toLowerCase().includes(searchText) ||
            story.genre.toLowerCase().includes(searchText) ||
            story.author.toLowerCase().includes(searchText)
        );
    });

    displayStories(filteredStories);
});

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

// Display all stories when the page loads
displayStories();
