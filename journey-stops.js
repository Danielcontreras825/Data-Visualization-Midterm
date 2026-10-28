// Original character dialogue retained where it fits; new requests support the chosen activities.
window.JourneyLocations = {
  "brooklyn": [
    {
      "id": "bridge",
      "name": "Brooklyn Bridge",
      "coordinate": [
        -73.9896,
        40.7011
      ],
      "mode": "deliveries",
      "art": "brooklyn-day-1",
      "floor": "#ebd2b1",
      "intro": "Three neighbors are collecting orders for home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request.",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 0,
          "item": "dumplings",
          "label": "Dumplings",
          "description": "Dumplings with extra sauce for dinner at home. “My crown is blocking the harbor view.”",
          "thanks": "This crown cost more than the dumplings."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 2,
          "item": "bag",
          "label": "Bread, oats & apples",
          "description": "Bread, oats and apples for the kitchen. “The pigeons think this is their order. Please do not encourage them.”",
          "thanks": "Keep the bag closed. They’ve been following me since the park."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 5,
          "item": "box",
          "label": "Boxed camera strap",
          "description": "One camera strap for a neighbor’s apartment. “I took 400 bridge photos. I can’t lift the camera for another.”",
          "thanks": "My camera strap came in a box bigger than the camera. Obviously I took a photo of the box."
        }
      ]
    },
    {
      "id": "coney",
      "name": "Coney Island",
      "coordinate": [
        -73.9782,
        40.5748
      ],
      "mode": "deliveries",
      "art": "brooklyn-day-2",
      "floor": "#e1c8aa",
      "intro": "An off-duty hot dog, a dog walker and a painter have orders to take home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request.",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 6,
          "item": "fries",
          "label": "Fries",
          "description": "Fries with ketchup and mustard for a night in. “Eating a hot dog in this thing makes people uncomfortable.”",
          "thanks": "The app keeps recommending hot dogs. It feels personal."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 7,
          "item": "bag",
          "label": "Biscuits, carrots & coffee",
          "description": "Dog biscuits, carrots and coffee for home. “The biscuits are for the dogs. The coffee is for me.”",
          "thanks": "The groceries made it home. The biscuits didn’t make it past the dogs."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 9,
          "item": "box",
          "label": "Boxed art supplies",
          "description": "Fresh paintbrushes and a sketchbook for the home studio. “The paint on my shirt is intentional. The paint on my shoes is a mystery.”",
          "thanks": "My new brushes came in a nice box. I painted the box first."
        }
      ]
    },
    {
      "id": "disco",
      "name": "Neighborhood Disco",
      "coordinate": [
        -73.9538,
        40.7112
      ],
      "mode": "disco",
      "art": "assets/brooklyn/disco.png",
      "floor": "#514160",
      "category": "food",
      "intro": "Dinner has arrived for the neighbors’ disco. Choose pizza boxes, fries or dumplings, then click a table spot. Place all three to finish this stop."
    },
    {
      "id": "barclays",
      "name": "Barclays Center",
      "coordinate": [
        -73.9752,
        40.6826
      ],
      "mode": "deliveries",
      "art": "brooklyn-day-4",
      "floor": "#d7cec3",
      "intro": "The neighborhood fans are heading home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request.",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 8,
          "item": "nachos",
          "label": "Nachos & lemonade",
          "description": "Nachos and a lemonade to take home. “I can point at my order. Picking it up is the problem.”",
          "thanks": "I tried ordering one sandwich. This finger added six to the cart."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 4,
          "item": "banana-bag",
          "label": "Bananas & oat milk",
          "description": "A bunch of bananas and oat milk for the kitchen. “No building climbing today. I am taking a break.”",
          "thanks": "They bring bananas upstairs? I’ve been climbing the outside of the building. Security keeps saying ‘no pets.’"
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 16,
          "item": "box",
          "label": "Boxed cap clip",
          "description": "A small cap clip for home. The hat is enormous and the eyes are missing. “If you can see me waving, I cannot see you waving back.”",
          "thanks": "My package arrived. I signed for it. I haven’t seen a single basket. I assume we’re winning."
        }
      ]
    },
    {
      "id": "bowling",
      "name": "Brooklyn Bowling Night",
      "coordinate": [
        -73.937,
        40.6848
      ],
      "mode": "bowling",
      "art": "assets/brooklyn/bowling-alley.svg",
      "floor": "#bd956c",
      "category": "packages",
      "intro": "The bowling supplies are here. Choose Pins and click each of the three lanes. Choose Bowling balls and fill both racks."
    }
  ],
  "manhattan": [
    {
      "id": "liberty",
      "name": "Liberty Harbor",
      "coordinate": [
        -74.017,
        40.7034
      ],
      "art": "manhattan-day-1",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 0,
          "item": "dumplings",
          "label": "Dumplings",
          "description": "Dumplings with extra sauce for a tourist who came to see the Statue of Liberty. “My crown is blocking the harbor view.”",
          "thanks": "I get food delivered too. The delivery guy calls me ‘your majesty.’ I think he’s making fun of me."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 23,
          "item": "bag",
          "label": "Bread, apples & milk",
          "description": "Bread, apples and milk for the apartment. “Please leave the address label on the bag.”",
          "thanks": "I’m keeping that label. It’s clearer than my map."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 3,
          "item": "box",
          "label": "Boxed phone charger",
          "description": "A phone charger in a small box. The suitcase already holds three sweaters, a microwave and a folding chair. Everything except a charger.",
          "thanks": "I’m putting this in the outside pocket. I’m not unpacking the microwave again."
        }
      ],
      "mode": "deliveries",
      "floor": "#f4cfa1",
      "intro": "Three customers have orders to take home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "central-park",
      "name": "Central Park",
      "coordinate": [
        -73.9686,
        40.7812
      ],
      "art": "manhattan-day-3",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 1,
          "item": "sandwich",
          "label": "Sandwich & pickles",
          "description": "He’s been posing for photos all morning. A toasted sandwich, extra pickles, and no more photos until he’s eaten.",
          "thanks": "I order lunch too. Last time I cooked, the fire department had to rescue me."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 2,
          "item": "bag",
          "label": "Bread, oats & apples",
          "description": "Bread, oats and apples for the kitchen. “The pigeons think this is their order. Please do not encourage them.”",
          "thanks": "Keep the bag closed. They’ve been following me all morning."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 21,
          "item": "box",
          "label": "Boxed plant pot",
          "description": "A new plant pot. “I bought another plant. I’ve run out of things to put them in.”",
          "thanks": "That should fit the one waiting at home."
        }
      ],
      "mode": "deliveries",
      "floor": "#9ccc61",
      "intro": "The customers are waiting by the bench. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "empire",
      "name": "Empire State Building",
      "coordinate": [
        -73.9857,
        40.7484
      ],
      "art": "manhattan-day-5",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 13,
          "item": "pasta",
          "label": "Pasta & garlic bread",
          "description": "Ravioli, garlic bread and extra sauce. “Yes, I am a cook. Yes, I ordered dinner. Yes, I am tired.”",
          "thanks": "I’m not washing another pan tonight."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 4,
          "item": "banana-bag",
          "label": "Bananas & oat milk",
          "description": "A bunch of bananas and oat milk. “No building climbing today. I am taking a break.”",
          "thanks": "They bring bananas upstairs? I’ve been climbing the outside of the building. Security keeps saying ‘no pets.’"
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 5,
          "item": "box",
          "label": "Boxed camera strap",
          "description": "One camera strap. “I took 400 bridge photos. I can’t lift the camera for another.”",
          "thanks": "My camera strap came in a box bigger than the camera. Obviously I took a photo of the box."
        }
      ],
      "mode": "deliveries",
      "floor": "#e9d5bd",
      "intro": "The customers are meeting us downstairs. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "subway-barbershop",
      "name": "Subway Barbershop",
      "coordinate": [
        -73.947,
        40.816
      ],
      "mode": "barber",
      "category": "packages",
      "intro": "The barber supplies are here. Put the mirror and clippers on either empty spot on top of the table, and the towels on its lower shelf.",
      "art": "assets/journey/subway-barbershop.png",
      "floor": "#8f888c",
      "cast": [
        {
          "sprite": 9,
          "x": 38,
          "y": 67,
          "role": "barber",
          "facing": 1,
          "caption": "beside the first barber chair"
        },
        {
          "sprite": 13,
          "x": 94,
          "y": 67,
          "role": "customer",
          "facing": -1,
          "caption": "beside the second barber chair"
        },
        {
          "sprite": 3,
          "x": 136,
          "y": 65,
          "role": "commuter",
          "facing": -1,
          "caption": "waiting for a train"
        },
        {
          "sprite": 1,
          "x": 28,
          "y": 85,
          "role": "customer",
          "facing": 1,
          "caption": "in the haircut queue"
        },
        {
          "sprite": 16,
          "x": 76,
          "y": 85,
          "role": "customer",
          "facing": -1,
          "caption": "in the haircut queue"
        },
        {
          "sprite": 20,
          "x": 130,
          "y": 85,
          "role": "commuter",
          "facing": -1,
          "caption": "on the platform"
        }
      ],
      "dialogues": {
        "1": [
          "I sat down for a nap. Woke up with a haircut.",
          "If the train comes, wake me up. If the clippers come, definitely wake me up."
        ],
        "3": [
          "My train left halfway through the haircut. At least both sides are finished now.",
          "My suitcase has a lamp, a microwave and a folding chair. The comb is at home."
        ],
        "9": [
          "I’m good with a brush. They assumed that included hairbrushes.",
          "If you want blue hair, I can help. If you don’t, maybe take the next train."
        ],
        "13": [
          "I asked for a little off the top. She reached for my hat.",
          "I ordered lunch while I wait. Nobody here should cut hair hungry."
        ],
        "16": [
          "I asked for a trim. Mostly around the part where I’m supposed to see.",
          "Someone tell me if the train’s here. The hair dryer sounds convincing."
        ],
        "20": [
          "One bag is lunch. Please don’t put the razor in that one.",
          "The train can wait. I’ve finally found somewhere to put these bags down."
        ]
      },
      "resolution": [
        160,
        90
      ],
      "coarse": [
        80,
        45
      ],
      "detailRegions": [
        [
          45,
          33,
          36,
          12
        ]
      ]
    },
    {
      "id": "grand-central",
      "name": "Grand Central",
      "coordinate": [
        -73.9772,
        40.7527
      ],
      "mode": "deliveries",
      "art": "manhattan-day-4",
      "floor": "#e9d5bc",
      "intro": "Three travelers have orders to take home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request.",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 15,
          "item": "dumplings",
          "label": "Dumplings & iced tea",
          "description": "Dumplings and iced tea for home. “The helmet has a microphone, a camera and no hole for a straw.”",
          "thanks": "They won’t deliver to the moon, though. I checked."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 20,
          "item": "bag",
          "label": "Bread, eggs & fruit",
          "description": "Bread, eggs and fruit for home. “Could you hold it for me? I’ve run out of hands.”",
          "thanks": "That’s one bag I don’t have to carry."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 23,
          "item": "box",
          "label": "Boxed phone charger",
          "description": "A phone charger for home. “The address on the order is right. I’m still working out how to get there.”",
          "thanks": "That’s sorted. Now I need the right train."
        }
      ],
      "visitors": [
        {
          "sprite": 3,
          "x": 49,
          "y": 74,
          "size": 18,
          "line": "The suitcase has a microwave and a folding chair. What should I be putting in here?"
        },
        {
          "sprite": 1,
          "x": 109,
          "y": 74,
          "size": 18,
          "line": "I’m waiting for my train. Wake me up if it gets here."
        }
      ]
    }
  ],
  "bronx": [
    {
      "id": "yankee",
      "name": "Yankee Stadium",
      "coordinate": [
        -73.9262,
        40.8296
      ],
      "art": "bronx-day-1",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 10,
          "item": "sandwich",
          "label": "Pretzel & sandwich",
          "description": "A pretzel and a sandwich. The glove is ready for a home run, a lunch bag or a very comfortable nap.",
          "thanks": "I caught my lunch. Apparently that’s not part of the rules."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 7,
          "item": "bag",
          "label": "Bread, eggs & coffee",
          "description": "Bread, eggs and coffee. “Please pass the bag over the leashes.”",
          "thanks": "I’ll get this home before the dogs work out what’s inside."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 8,
          "item": "box",
          "label": "Boxed phone stand",
          "description": "A phone stand. “It’s easier if I don’t have to hold the phone.”",
          "thanks": "Now I can actually check the score."
        }
      ],
      "mode": "deliveries",
      "floor": "#cec5bc",
      "intro": "The fans have orders to take home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "bronx-zoo",
      "name": "Bronx Zoo",
      "coordinate": [
        -73.8782,
        40.8506
      ],
      "art": "bronx-day-2",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 1,
          "item": "sandwich",
          "label": "Sandwich & orange juice",
          "description": "A sandwich and orange juice. “I’m taking lunch on that bench.”",
          "thanks": "I’m not moving until I’ve eaten."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 24,
          "item": "bag",
          "label": "Apples, cereal & milk",
          "description": "Apples, cereal and milk. “These are for my kitchen. I’m only visiting for the afternoon.”",
          "thanks": "I’m taking these home before the milk gets warm."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 11,
          "item": "box",
          "label": "Boxed hat repair kit",
          "description": "Needle, thread and spare buttons. “The lions keep looking at me funny.”",
          "thanks": "Three children have pointed out the missing ear already."
        }
      ],
      "mode": "deliveries",
      "floor": "#efe0cb",
      "intro": "Three visitors are collecting orders for home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "botanical",
      "name": "Botanical Garden",
      "coordinate": [
        -73.8768,
        40.8624
      ],
      "art": "bronx-day-3",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 18,
          "item": "bagel",
          "label": "Bagel with cream cheese",
          "description": "A bagel with cream cheese. “I thought running through here would lose the pigeon.”",
          "thanks": "I’m eating before it finds me."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 12,
          "item": "bag",
          "label": "Greens, lemons & tomatoes",
          "description": "Salad greens, lemons and tomatoes. The customer is somewhere behind the giant plant. Listen for a very small hello.",
          "thanks": "You found me quicker than the last driver."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 9,
          "item": "box",
          "label": "Boxed sketchbook & pencils",
          "description": "A sketchbook and a set of pencils. “I came to draw the flowers. I left the paper at home.”",
          "thanks": "I was getting tired of drawing on receipts."
        }
      ],
      "mode": "deliveries",
      "floor": "#ecdbc7",
      "intro": "The visitors have orders to take home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "arthur",
      "name": "Arthur Avenue",
      "coordinate": [
        -73.8871,
        40.8541
      ],
      "art": "bronx-day-4",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 13,
          "item": "sandwich",
          "label": "Sandwich & extra pickles",
          "description": "A toasted sandwich and extra pickles. “I’ve just finished cooking for everyone else.”",
          "thanks": "I’m sitting down for this one."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 4,
          "item": "banana-bag",
          "label": "Bananas & oat milk",
          "description": "Bananas and oat milk. “Could you put the bananas on top?”",
          "thanks": "These are coming straight home with me."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 14,
          "item": "box",
          "label": "Boxed binocular strap",
          "description": "A sturdy binocular strap. “I can see the birds perfectly. Finding my own front door is the problem.”",
          "thanks": "I can finally put my arms down."
        }
      ],
      "mode": "deliveries",
      "floor": "#f2dabb",
      "intro": "Three neighbors are collecting their home deliveries. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "hot-dog-contest",
      "name": "Hot Dog Eating Contest",
      "coordinate": [
        -73.861,
        40.835
      ],
      "mode": "hotdog",
      "category": "food",
      "intro": "Both contestants need a plate. Take one from the tray and serve each contestant to finish this stop.",
      "art": "assets/journey/hot-dog-contest.png",
      "floor": "#54a05c",
      "cast": [
        {
          "sprite": 6,
          "x": 22,
          "y": 71,
          "role": "judge",
          "facing": 1,
          "caption": "judging the hot dog eating contest"
        },
        {
          "sprite": 10,
          "x": 64,
          "y": 65,
          "role": "contestant",
          "facing": 1,
          "caption": "at the contest table"
        },
        {
          "sprite": 15,
          "x": 103,
          "y": 65,
          "role": "contestant",
          "facing": -1,
          "caption": "at the contest table"
        },
        {
          "sprite": 13,
          "x": 126,
          "y": 69,
          "role": "cook",
          "facing": -1,
          "caption": "bringing food to the contest"
        },
        {
          "sprite": 19,
          "x": 33,
          "y": 88,
          "role": "announcer",
          "facing": 1,
          "caption": "announcing the contest"
        },
        {
          "sprite": 16,
          "x": 133,
          "y": 88,
          "role": "audience",
          "facing": -1,
          "caption": "watching the contest"
        }
      ],
      "dialogues": {
        "6": [
          "Eating a hot dog in this thing makes people uncomfortable. So I’m judging.",
          "I’m staying on this side of the table until they finish."
        ],
        "10": [
          "It’s in the glove. That counts as eating it, right?",
          "I caught my lunch. Apparently that’s not part of the rules."
        ],
        "13": [
          "My day off lasted until someone shouted ‘Who here can cook?’",
          "I made thirty hot dogs. The astronaut is still trying to get through the helmet."
        ],
        "15": [
          "The helmet has a microphone, a camera and no hole for a hot dog.",
          "I can survive in space. The mustard is giving me problems."
        ],
        "16": [
          "I can’t see the table. I’m cheering whenever someone else cheers.",
          "Who won? I’ve heard three different answers."
        ],
        "19": [
          "Please stop shouting your order into my megaphone. I’m trying to announce the scores.",
          "I said ‘three, two, one, go.’ The cook thought I was placing an order."
        ]
      },
      "resolution": [
        160,
        90
      ],
      "coarse": [
        80,
        45
      ],
      "detailRegions": [
        [
          60,
          16,
          40,
          16
        ],
        [
          48,
          44,
          20,
          8
        ],
        [
          70,
          44,
          20,
          8
        ],
        [
          98,
          44,
          20,
          8
        ],
        [
          140,
          34,
          16,
          16
        ]
      ]
    }
  ],
  "queens": [
    {
      "id": "unisphere",
      "name": "Unisphere",
      "coordinate": [
        -73.8458,
        40.7464
      ],
      "art": "queens-day-1",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 15,
          "item": "dumplings",
          "label": "Dumplings & iced tea",
          "description": "Dumplings and iced tea. “The helmet has a microphone, a camera and no hole for a straw.”",
          "thanks": "I get food delivered too. They won’t come to the moon, though. I checked."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 21,
          "item": "bag",
          "label": "Berries, yogurt & honey",
          "description": "Berries, yogurt and honey. “The flowers on my hat are doing wonderfully. I would also like some breakfast.”",
          "thanks": "These are going in the fridge when I get home."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 3,
          "item": "box",
          "label": "Boxed phone charger",
          "description": "A phone charger in a small box. The suitcase already holds three sweaters, a microwave and a folding chair. Everything except a charger.",
          "thanks": "Next time I’m packing the charger first."
        }
      ],
      "mode": "deliveries",
      "floor": "#e8dbcf",
      "intro": "The visitors are collecting orders for home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "pigeon-blockade",
      "name": "Pigeon Blockade at Walmart",
      "coordinate": [
        -73.837,
        40.699
      ],
      "mode": "pigeons",
      "category": "groceries",
      "intro": "The pigeons are blocking the grocery-store doors. Choose the burger, then set it on the metal tray away from the entrance. Move the flock to finish this stop.",
      "context": "In this scene, the neighbors came to buy groceries, but pigeons blocked their local Walmart.",
      "art": "assets/journey/pigeon-blockade.png",
      "floor": "#67708c",
      "cast": [
        {
          "sprite": 16,
          "x": 21,
          "y": 62
        },
        {
          "sprite": 15,
          "x": 30,
          "y": 80
        },
        {
          "sprite": 18,
          "x": 58,
          "y": 72
        },
        {
          "sprite": 13,
          "x": 105,
          "y": 65
        },
        {
          "sprite": 6,
          "x": 127,
          "y": 72
        },
        {
          "sprite": 4,
          "x": 149,
          "y": 80
        }
      ],
      "dialogues": {
        "4": [
          "They can have the burger. The banana is staying with me.",
          "I’ve been told ‘no animals’ at the door. I’d like someone to tell the pigeons."
        ],
        "6": [
          "I came for groceries. Please stop looking at me like that.",
          "One pigeon followed me here. Now it’s called its entire family."
        ],
        "13": [
          "The pigeons have the entrance. I’m just trying to buy groceries.",
          "The cart was empty five minutes ago. Now it has passengers."
        ],
        "15": [
          "Mission control told me to go around. There are pigeons around there too.",
          "I asked if they deliver to space. Today I’d settle for the other side of this door."
        ],
        "16": [
          "Someone said the entrance was blocked. I thought the doors were just closed.",
          "I’ve been waving at a pigeon for five minutes. It still won’t let me in."
        ],
        "18": [
          "This is the same pigeon from the park. I knew it was following me.",
          "I said the bagel was a salad. It came to check the produce aisle."
        ]
      },
      "resolution": [
        240,
        135
      ],
      "coarse": [
        80,
        45
      ],
      "detailRegions": [
        [
          80,
          18,
          84,
          18
        ],
        [
          91,
          63,
          57,
          19
        ],
        [
          145,
          58,
          28,
          26
        ],
        [
          93,
          87,
          64,
          28
        ]
      ]
    },
    {
      "id": "rockaway",
      "name": "Rockaway Beach",
      "coordinate": [
        -73.8159,
        40.5842
      ],
      "art": "queens-day-3",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 18,
          "item": "bagel",
          "label": "Bagel with cream cheese",
          "description": "A bagel with cream cheese. “If the pigeon asks, I ordered a salad.”",
          "thanks": "Other people get food delivered too?"
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 17,
          "item": "bag",
          "label": "Bananas, oranges & water",
          "description": "Bananas, oranges and bottled water. “Leave them by my towel. I’m still waiting for a wave.”",
          "thanks": "I get groceries delivered now. The supermarket asked me to stop bringing the board."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 5,
          "item": "box",
          "label": "Boxed waterproof pouch",
          "description": "A waterproof phone pouch. “Sand got into the last one. I’m trying again.”",
          "thanks": "This one’s staying zipped."
        }
      ],
      "mode": "deliveries",
      "floor": "#fde8ad",
      "intro": "Three beachgoers have orders to take home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "halloween-runway",
      "name": "Halloween Costume Runway",
      "coordinate": [
        -73.796,
        40.724
      ],
      "mode": "runway",
      "category": "packages",
      "intro": "Two package deliveries are here: pumpkin lanterns for the side tables and a costume banner to hang above the entrance.",
      "art": "assets/journey/halloween-runway.png",
      "floor": "#433068",
      "cast": [
        {
          "sprite": 6,
          "x": 78,
          "y": 55,
          "role": "model"
        },
        {
          "sprite": 15,
          "x": 90,
          "y": 72,
          "role": "model"
        },
        {
          "sprite": 16,
          "x": 72,
          "y": 88,
          "role": "model"
        },
        {
          "sprite": 13,
          "x": 34,
          "y": 68,
          "role": "audience",
          "facing": 1
        },
        {
          "sprite": 4,
          "x": 128,
          "y": 68,
          "role": "audience",
          "facing": -1
        },
        {
          "sprite": 5,
          "x": 34,
          "y": 86,
          "role": "audience",
          "facing": 1
        },
        {
          "sprite": 19,
          "x": 128,
          "y": 86,
          "role": "audience",
          "facing": -1
        }
      ],
      "dialogues": {
        "4": [
          "My costume arrived. It’s a gorilla costume.",
          "The judge called me adorable. There goes the monster category."
        ],
        "5": [
          "Could everyone pause at the end? I need one photo that isn’t a blur.",
          "I’ve taken forty runway photos. The hot dog looks the same in all of them."
        ],
        "6": [
          "I wore this yesterday. Apparently today it counts as a costume.",
          "They asked what I was dressed as. We might need brighter lights."
        ],
        "13": [
          "I ordered a witch hat. It was smaller than the one I’m wearing.",
          "These boxes are full of decorations. I thought at least one would be dinner."
        ],
        "15": [
          "Someone asked if this was homemade. I told them I borrowed it from work.",
          "The snack delivery is here. I’m still figuring out how to eat in this."
        ],
        "16": [
          "They told me to follow the lights. Very funny.",
          "I can’t see the judges. I assume I’m doing well."
        ],
        "19": [
          "Walk to the end, pause for a photo, then head back.",
          "Please stop putting delivery boxes on the runway. We’re judging costumes, not packaging."
        ]
      },
      "resolution": [
        160,
        90
      ],
      "coarse": [
        80,
        45
      ]
    },
    {
      "id": "moving-image",
      "name": "Moving Image Museum",
      "coordinate": [
        -73.9232,
        40.7563
      ],
      "art": "queens-day-5",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 1,
          "item": "sandwich",
          "label": "Sandwich & extra pickles",
          "description": "A toasted sandwich with extra pickles. “I slept through the film. I’m staying awake for lunch.”",
          "thanks": "I’m eating before the next screening."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 9,
          "item": "bag",
          "label": "Coffee, milk & bread",
          "description": "Coffee, milk and bread. “I ran out of coffee halfway through a painting.”",
          "thanks": "That’s tomorrow morning sorted."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 19,
          "item": "box",
          "label": "Boxed clapperboard",
          "description": "One clapperboard in a padded box. “Please hand it to me normally. The last guy tried to audition.”",
          "thanks": "My last package arrived halfway through a take. The driver’s in the movie now."
        }
      ],
      "mode": "deliveries",
      "floor": "#f8ecd5",
      "intro": "The visitors have orders to take home after the museum. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    }
  ],
  "staten-island": [
    {
      "id": "beach-wedding",
      "name": "Beach Wedding",
      "coordinate": [
        -74.196,
        40.595
      ],
      "mode": "wedding",
      "category": "packages",
      "intro": "Place chairs beside the aisle, flowers on the left stand, and cake on the right table.",
      "art": "assets/journey/beach-wedding.png",
      "floor": "#f4d09d",
      "cast": [
        {
          "sprite": 0,
          "x": 69,
          "y": 59,
          "role": "couple",
          "facing": 1,
          "caption": "under the wedding arch"
        },
        {
          "sprite": 22,
          "x": 91,
          "y": 59,
          "role": "couple",
          "facing": -1,
          "caption": "under the wedding arch"
        },
        {
          "sprite": 5,
          "x": 30,
          "y": 74,
          "role": "photographer",
          "facing": 1,
          "caption": "photographing the beach wedding"
        },
        {
          "sprite": 21,
          "x": 136,
          "y": 74,
          "role": "guest",
          "facing": -1,
          "caption": "beside the wedding cake"
        },
        {
          "sprite": 17,
          "x": 14,
          "y": 88,
          "role": "guest",
          "facing": 1,
          "caption": "off the aisle at the bottom left"
        },
        {
          "sprite": 13,
          "x": 111,
          "y": 88,
          "role": "cook",
          "facing": -1,
          "caption": "helping with the wedding reception"
        }
      ],
      "dialogues": {
        "0": [
          "The crown counts as formal wear.",
          "They asked me to move my crown. It was blocking the bridge in every photo."
        ],
        "5": [
          "One more photo. I’d like at least one where they’re both looking at the camera.",
          "The cake arrived in a box. Obviously I took a photo of the box."
        ],
        "13": [
          "The cake can stay on the table until we’re ready to serve it.",
          "I said ‘cut the cake.’ Camera Tourist took another photo."
        ],
        "17": [
          "The board was not invited. It came anyway.",
          "I was told to wear a suit. I thought they meant a wetsuit."
        ],
        "21": [
          "People keep taking flowers from my hat for the tables.",
          "The flower delivery is here. Maybe now they’ll leave my hat alone."
        ],
        "22": [
          "I’ve got the music ready for the reception.",
          "The decorations arrived in six boxes. I’m using one to keep sand out of my shoes."
        ]
      },
      "resolution": [
        240,
        135
      ],
      "coarse": [
        80,
        45
      ],
      "detailRegions": [
        [
          58,
          72,
          43,
          27
        ],
        [
          141,
          72,
          42,
          27
        ],
        [
          178,
          16,
          62,
          30
        ],
        [
          189,
          39,
          51,
          45
        ]
      ]
    },
    {
      "id": "snug",
      "name": "Snug Harbor",
      "coordinate": [
        -74.1013,
        40.6438
      ],
      "art": "staten-island-day-2",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 20,
          "item": "bagel",
          "label": "Bagel & coffee",
          "description": "A warm bagel and coffee. The commuter has seven bags, two hands and complete confidence. Aim for the only free hand.",
          "thanks": "I’m finding a seat before I open this."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 21,
          "item": "bag",
          "label": "Berries, yogurt & honey",
          "description": "Berries, yogurt and honey. “The flowers on my hat are doing wonderfully. I would also like some breakfast.”",
          "thanks": "The plants can wait five minutes."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 14,
          "item": "box",
          "label": "Boxed binocular strap",
          "description": "A sturdy binocular strap. “I can see the birds perfectly.”",
          "thanks": "I’m not carrying these home in both hands again."
        }
      ],
      "mode": "deliveries",
      "floor": "#e6cfb6",
      "intro": "Three visitors are collecting home deliveries. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "richmond",
      "name": "Richmond Town",
      "coordinate": [
        -74.1456,
        40.5726
      ],
      "art": "staten-island-day-3",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 23,
          "item": "sandwich",
          "label": "Veggie wrap & iced tea",
          "description": "A veggie wrap and an iced tea. “The map says I am here. Where is here?”",
          "thanks": "I’ll work out the way home after I eat."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 9,
          "item": "bag",
          "label": "Tea, milk & bread",
          "description": "Tea, milk and bread. “I’m heading home to finish a painting.”",
          "thanks": "I’ll make tea before I start again."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 22,
          "item": "box",
          "label": "Boxed wireless headphones",
          "description": "Wireless headphones for a customer dressed for another century.",
          "thanks": "Someone’s showing me how to connect them."
        }
      ],
      "mode": "deliveries",
      "floor": "#afcb6c",
      "intro": "Three neighbors are collecting home deliveries. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    },
    {
      "id": "night-camping",
      "name": "Night Camping",
      "coordinate": [
        -74.17,
        40.541
      ],
      "mode": "camping",
      "category": "food",
      "intro": "You brought dinner. Switch on the flashlight and find the table in the bottom-right corner, then place the dinner bag on it.",
      "art": "assets/journey/night-camping.png",
      "floor": "#395338",
      "cast": [
        {
          "sprite": 22,
          "x": 37,
          "y": 62,
          "role": "camper",
          "facing": 1,
          "caption": "beside the left tent"
        },
        {
          "sprite": 15,
          "x": 128,
          "y": 62,
          "role": "camper",
          "facing": -1,
          "caption": "beside the right tent"
        },
        {
          "sprite": 4,
          "x": 55,
          "y": 78,
          "role": "camper",
          "facing": 1,
          "caption": "on the left of the campfire"
        },
        {
          "sprite": 24,
          "x": 108,
          "y": 78,
          "role": "camper",
          "facing": -1,
          "caption": "on the right of the campfire"
        },
        {
          "sprite": 20,
          "x": 27,
          "y": 88,
          "role": "camper",
          "facing": 1,
          "caption": "gathering at the campsite"
        }
      ],
      "dialogues": {
        "4": [
          "They said gather firewood. I brought a banana.",
          "My dinner’s here. Please don’t put it in the fire. I’ve already lost one banana."
        ],
        "15": [
          "I came dressed for the moon. We’ve made it to Staten Island.",
          "Dinner has arrived. Opening my helmet is now the hardest part of this trip."
        ],
        "20": [
          "I brought seven bags. The tent is in the one I left at home.",
          "Dinner was delivered. I’m putting it in the only bag that’s still empty."
        ],
        "22": [
          "I packed headphones. I forgot a pillow. I’m sleeping to music now.",
          "I ordered dinner before we left. The delivery person found the tent before I did."
        ],
        "24": [
          "I’m warm enough in this. You can have my spot by the fire.",
          "I’m dressed for the cold. Everyone else is sitting closer to the fire."
        ]
      },
      "resolution": [
        160,
        90
      ],
      "coarse": [
        80,
        45
      ]
    },
    {
      "id": "staten-zoo",
      "name": "Staten Island Zoo",
      "coordinate": [
        -74.1158,
        40.6268
      ],
      "art": "staten-island-day-5",
      "orders": [
        {
          "id": "food-home",
          "category": "food",
          "sprite": 6,
          "item": "sandwich",
          "label": "Cheese sandwich & a drink",
          "description": "A cheese sandwich and a drink. “I’m sitting down before I try to eat this.”",
          "thanks": "I’ve been hungry since we got here."
        },
        {
          "id": "grocery-home",
          "category": "groceries",
          "sprite": 24,
          "item": "bag",
          "label": "Carrots, apples & cereal",
          "description": "Carrots, apples and cereal. “I am a visitor in a costume. Please stop offering me fish.”",
          "thanks": "These are coming home with me."
        },
        {
          "id": "package-home",
          "category": "packages",
          "sprite": 5,
          "item": "box",
          "label": "Boxed memory card",
          "description": "A new memory card. “I filled this one with photos of a penguin that hasn’t moved.”",
          "thanks": "I’ll check which penguin is real this time."
        }
      ],
      "mode": "deliveries",
      "floor": "#ecdac5",
      "intro": "Three visitors have orders to take home. Choose an item below, then click its customer to deliver it. Click a customer without an item to hear their request."
    }
  ]
};
