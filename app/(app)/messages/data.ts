export interface Conversation {
  id: string
  name: string
  messages: Message[]
}

export interface Message {
  date: string
  message: string,
  isUser: boolean
}

export const conversations: Conversation[] = [
  {
    id: "william-smith",
    name: "William Smith",
    messages: [
      {
        date: "09:34 AM",
        message: "Hi, how can I help you today?",
        isUser: false
      },
      {
        date: "09:34 AM",
        message: "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
        isUser: false
      },
      {
        date: "09:35 AM",
        message: "Sure, I'll be there. Thanks for the reminder!",
        isUser: true
      },
      {
        date: "09:36 AM",
        message: "I'll have the slides ready by then. Any specific topics you'd like me to cover?",
        isUser: false
      },
      {
        date: "09:37 AM",
        message: "No, I think we can stick to the agenda. Thanks!",
        isUser: true
      },
      {
        date: "09:38 AM",
        message: "Perfect! See you tomorrow then.",
        isUser: false
      },
      {
        date: "09:39 AM",
        message: "Thanks for the heads-up. I'll make sure to bring my laptop.",
        isUser: true
      },
      {
        date: "09:40 AM",
        message: "Great! See you tomorrow then.",
        isUser: false
      }
    ],
  },
  {
    id: "alice-smith",
    name: "Alice Smith",
    messages: [
      {
        date: "Yesterday",
        message: "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
        isUser: false
      },
      {
        date: "Yesterday",
        message: "I'm available tomorrow at 2 PM. Does that work for you?",
        isUser: true
      },
      {
        date: "Yesterday",
        message: "Perfect, I'll send you a calendar invite.",
        isUser: false
      }
    ],
  },
  {
    id: "bob-johnson",
    name: "Bob Johnson",
    messages: [
      {
        date: "2 days ago",
        message: "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
        isUser: false
      },
      {
        date: "2 days ago",
        message: "I'd love a beach day! The weather forecast looks perfect.",
        isUser: true
      },
      {
        date: "2 days ago",
        message: "Great! Let's plan for Saturday at 10 AM at Santa Monica beach.",
        isUser: false
      }
    ],
  },
  {
    id: "emily-davis",
    name: "Emily Davis",
    messages: [
      {
        date: "2 days ago",
        message: "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
        isUser: false
      },
      {
        date: "2 days ago",
        message: "I'm in meetings all day today. How about tomorrow morning?",
        isUser: true
      },
      {
        date: "2 days ago",
        message: "Tomorrow at 9 AM works for me. I'll send you the updated numbers before our call.",
        isUser: false
      }
    ],
  },
  {
    id: "michael-wilson",
    name: "Michael Wilson",
    messages: [
      {
        date: "1 week ago",
        message: "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
        isUser: false
      },
      {
        date: "1 week ago",
        message: "Looking forward to it! Will there be a virtual option?",
        isUser: true
      },
      {
        date: "1 week ago",
        message: "Yes, we'll send out a Zoom link to everyone on Thursday.",
        isUser: false
      }
    ],
  },
  {
    id: "sarah-brown",
    name: "Sarah Brown",
    messages: [
      {
        date: "1 week ago",
        message: "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
        isUser: false
      },
      {
        date: "1 week ago",
        message: "I'm available this afternoon or tomorrow morning.",
        isUser: true
      },
      {
        date: "1 week ago",
        message: "Let's do tomorrow at 10 AM. I'll prepare my notes in advance.",
        isUser: false
      }
    ],
  },
  {
    id: "david-lee",
    name: "David Lee",
    messages: [
      {
        date: "1 week ago",
        message: "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
        isUser: false
      },
      {
        date: "1 week ago",
        message: "I'd love to hear about it! How about Wednesday afternoon?",
        isUser: true
      },
      {
        date: "1 week ago",
        message: "Wednesday at 2 PM works perfectly. I'll prepare a brief presentation.",
        isUser: false
      }
    ],
  },
  {
    id: "olivia-wilson",
    name: "Olivia Wilson",
    messages: [
      {
        date: "1 week ago",
        message: "Just a heads up that I'll be taking a two-week vacation next month.\nI'll make sure all my projects are up to date before I leave.",
        isUser: false
      },
      {
        date: "1 week ago",
        message: "Enjoy your vacation! Do you need any help with handovers?",
        isUser: true
      },
      {
        date: "1 week ago",
        message: "Thanks! I'll send you a detailed handover document next week.",
        isUser: false
      }
    ],
  },
  {
    id: "james-martin",
    name: "James Martin",
    messages: [
      {
        date: "1 week ago",
        message: "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
        isUser: false
      },
      {
        date: "1 week ago",
        message: "Great! Could you share the registration confirmation?",
        isUser: true
      },
      {
        date: "1 week ago",
        message: "I'll forward the confirmation email to you right away.",
        isUser: false
      }
    ],
  },
  {
    id: "sophia-white",
    name: "Sophia White",
    messages: [
      {
        date: "1 week ago",
        message: "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
        isUser: false
      },
      {
        date: "1 week ago",
        message: "I'm free next Friday! I'd love to try that new Italian place.",
        isUser: true
      },
      {
        date: "1 week ago",
        message: "Perfect! I'll make reservations for 7 PM at Bella Italia.",
        isUser: false
      }
    ],
  }
]
