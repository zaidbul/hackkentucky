interface ScheduleEvent {
  time: string
  event: string
  details?: string
  location?: string
  subEvents?: {
    time: string
    event: string
    speaker?: string
    details?: string
  }[]
}

interface DaySchedule {
  description: string
  events: ScheduleEvent[]
}

export const scheduleItems: Record<string, DaySchedule> = {
  Friday: {
    description: "Kickoff Day! Get settled in, form your teams, and start brainstorming your innovative projects.",
    events: [
      { 
        time: "4:00 PM", 
        event: "Doors Open",
        location: "Main Entrance",
        details: "Check-in begins. Pick up your name badge, swag bag, and get settled in!"
      },
      { 
        time: "5:00 PM", 
        event: "Welcome, Introduction, Explanation of Event, Bounties",
        location: "Main Hall",
        details: "Opening ceremony with introduction to sponsors, rules explanation, and announcement of bounties and prizes."
      },
      { 
        time: "6:00 PM", 
        event: "Dinner (Sponsor TBD)",
        location: "Dining Area",
        details: "Enjoy dinner and network with fellow hackers"
      },
      { 
        time: "8:00 PM", 
        event: "Team Formation Deadline",
        details: "Final deadline to register your team and project idea"
      },
      { 
        time: "10:10 PM", 
        event: "10 minute Party w/ Food & Refreshments",
        location: "Main Hall",
        details: "Quick break to recharge with snacks and music"
      },
      { 
        time: "11:00 PM", 
        event: "Story Doors Locked - Quiet Time",
        details: "Building access limited. Please be mindful of those resting"
      },
    ]
  },
  Saturday: {
    description: "Development Day! Main hacking day packed with workshops, speaker series, and intense development time.",
    events: [
      { 
        time: "7:00 AM", 
        event: "Story Doors Open",
        details: "Building access resumes for all participants"
      },
      { 
        time: "7:30 AM", 
        event: "Breakfast is served",
        location: "Dining Area",
        details: "Start your day with a healthy breakfast"
      },
      { 
        time: "11:00 AM - 4:20 PM", 
        event: "Speaker Series",
        location: "Main Auditorium",
        details: "Join us for an exciting lineup of industry leaders sharing their experiences and insights",
        subEvents: [
          { 
            time: "11:00 AM", 
            event: "Lyft / Swell",
            speaker: "Lyft Engineering Team",
            details: "Building scalable systems for ride-sharing"
          },
          { 
            time: "1:00 PM", 
            event: "Facebook Software Engineer",
            speaker: "Meta Engineering",
            details: "Social media architecture at scale"
          },
          { 
            time: "1:40 PM", 
            event: "AWS Solution Architect",
            speaker: "AWS Team",
            details: "Cloud infrastructure best practices"
          },
          { 
            time: "2:20 PM", 
            event: "Apple Principal Software Engineer",
            speaker: "Apple Engineering",
            details: "Building user-centric applications"
          },
          { 
            time: "3:00 PM", 
            event: "Netflix Software Engineer",
            speaker: "Netflix Engineering",
            details: "Streaming platform architecture"
          },
          { 
            time: "3:40 PM", 
            event: "Google",
            speaker: "Google Engineering Team",
            details: "Search and scalability"
          },
          { 
            time: "4:20 PM", 
            event: "Microsoft Azure Engineer",
            speaker: "Microsoft Cloud Team",
            details: "Cloud computing and DevOps"
          },
        ]
      },
      { 
        time: "1:00 PM", 
        event: "Lunch Time!",
        location: "Dining Area",
        details: "Take a break and refuel"
      },
      { 
        time: "7:00 PM", 
        event: "Dinner Time (Sponsor TBD)!",
        location: "Dining Area",
        details: "Evening meal and networking"
      },
      { 
        time: "10:10 PM", 
        event: "10 minute Dance Party",
        location: "Main Hall",
        details: "Quick break to get energized!"
      },
      { 
        time: "11:00 PM", 
        event: "Story Doors Locked - Quiet Time",
        details: "Building access limited. Please be mindful of those resting"
      },
    ]
  },
  Sunday: {
    description: "Career Day! Polish your projects and your pitch!",
    events: [
      { 
        time: "7:00 AM", 
        event: "Story Doors Open",
        details: "Building access resumes for all participants"
      },
      { 
        time: "7:30 AM", 
        event: "Breakfast is served",
        location: "Dining Area",
        details: "Final day breakfast"
      },
      { 
        time: "10:10 AM", 
        event: "10 minute warning",
        details: "Final preparations for project submission"
      },
      { 
        time: "10:20 AM - 12:00 PM",
        event: "Judging & Presentations",
        location: "Main Hall",
        details: "Final project submissions and presentations",
        subEvents: [
          { 
            time: "10:20 AM", 
            event: "Judging Begins for Bounty",
            details: "Sponsors review projects for special prize categories"
          },
          { 
            time: "11:00 AM", 
            event: "Judging and presentations for final prizes",
            details: "Main prize category judging begins"
          },
          { 
            time: "12:00 PM", 
            event: "Final Presentation",
            details: "Winners announced and prizes distributed"
          },
        ]
      },
    ]
  }
}