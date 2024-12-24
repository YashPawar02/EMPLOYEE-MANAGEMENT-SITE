


const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "1234",
    "firstName": "Arjun",
    "tasks": [
      {
        "taskTitle": "Complete Report",
        "taskDescription": "Prepare the monthly sales report.",
        "taskDate": "2024-11-28",
        "category": "Sales",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Inventory",
        "taskDescription": "Verify and update stock levels.",
        "taskDate": "2024-11-27",
        "category": "Inventory",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project milestones with the client.",
        "taskDate": "2024-11-29",
        "category": "Client Relations",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "1234",
    "firstName": "Priya",
    "tasks": [
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review the new feature code submitted by the team.",
        "taskDate": "2024-11-26",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Database Backup",
        "taskDescription": "Perform a full backup of the production database.",
        "taskDate": "2024-11-30",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Conduct an audit of application security protocols.",
        "taskDate": "2024-12-01",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "1234",
    "firstName": "Rahul",
    "tasks": [
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Fix critical bugs reported by the QA team.",
        "taskDate": "2024-11-28",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Performance Testing",
        "taskDescription": "Test system performance under load.",
        "taskDate": "2024-12-02",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "1234",
    "firstName": "Anjali",
    "tasks": [
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Plan sprint backlog with the team.",
        "taskDate": "2024-11-27",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Documentation",
        "taskDescription": "Update project documentation.",
        "taskDate": "2024-11-29",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "1234",
    "firstName": "Sneha",
    "tasks": [
      {
        "taskTitle": "Research",
        "taskDescription": "Research new technologies for upcoming projects.",
        "taskDate": "2024-11-28",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Presentation",
        "taskDescription": "Prepare a presentation for the quarterly review.",
        "taskDate": "2024-12-01",
        "category": "Presentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "1234",
    
   
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
